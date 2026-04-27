"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

const tabs = [
  { id: "messages", label: "Mesajlar" },
  { id: "requests", label: "Proje Talepleri" },
  { id: "blog", label: "Blog" },
  { id: "projects", label: "Projeler" },
];

const statusOptions = ["new", "in_review", "contacted", "closed"];
const publishOptions = ["draft", "published"];

function toSlug(value) {
  return value
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function formatDate(value) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export default function AdminDashboard() {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [activeTab, setActiveTab] = useState("messages");
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [requests, setRequests] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    if (!supabase) {
      setIsLoading(false);
      setNotice({
        type: "error",
        message: "Supabase ortam değişkenleri eksik. .env.local dosyasını kontrol edin.",
      });
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setIsLoading(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => data.subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    if (session) {
      loadDashboardData();
    }
  }, [session]);

  async function loadDashboardData() {
    if (!supabase) {
      return;
    }

    setIsLoading(true);
    const [messageResult, requestResult, blogResult, projectResult] =
      await Promise.all([
        supabase
          .from("contact_messages")
          .select("*")
          .order("created_at", { ascending: false }),
        supabase
          .from("project_requests")
          .select("*")
          .order("created_at", { ascending: false }),
        supabase
          .from("blog_posts")
          .select("*")
          .order("created_at", { ascending: false }),
        supabase
          .from("case_studies")
          .select("*")
          .order("created_at", { ascending: false }),
      ]);

    setMessages(messageResult.data || []);
    setRequests(requestResult.data || []);
    setBlogPosts(blogResult.data || []);
    setCaseStudies(projectResult.data || []);
    setIsLoading(false);
  }

  async function handleLogin(event) {
    event.preventDefault();
    setNotice({ type: "", message: "" });

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setNotice({ type: "error", message: error.message });
      return;
    }

    setPassword("");
    setNotice({ type: "success", message: "Giriş başarılı." });
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setSession(null);
  }

  async function updateStatus(table, id, status) {
    const { error } = await supabase.from(table).update({ status }).eq("id", id);

    if (error) {
      setNotice({ type: "error", message: error.message });
      return;
    }

    await loadDashboardData();
    setNotice({ type: "success", message: "Durum güncellendi." });
  }

  async function createBlogPost(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title").toString().trim();
    const slug = formData.get("slug").toString().trim() || toSlug(title);
    const status = formData.get("status").toString();

    const payload = {
      title,
      slug,
      status,
      excerpt: formData.get("excerpt").toString().trim(),
      content: formData.get("content").toString().trim(),
      cover_image: formData.get("cover_image").toString().trim() || null,
      category: formData.get("category").toString().trim() || "Yazılım",
      tags: formData
        .get("tags")
        .toString()
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      published_at: status === "published" ? new Date().toISOString() : null,
    };

    const { error } = await supabase.from("blog_posts").insert(payload);

    if (error) {
      setNotice({ type: "error", message: error.message });
      return;
    }

    event.currentTarget.reset();
    await loadDashboardData();
    setNotice({ type: "success", message: "Blog yazısı eklendi." });
  }

  async function createCaseStudy(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title").toString().trim();
    const slug = formData.get("slug").toString().trim() || toSlug(title);
    const status = formData.get("status").toString();

    const payload = {
      title,
      slug,
      status,
      summary: formData.get("summary").toString().trim(),
      content: formData.get("content").toString().trim(),
      service_type: formData.get("service_type").toString().trim() || null,
      industry: formData.get("industry").toString().trim() || null,
      result_metric: formData.get("result_metric").toString().trim() || null,
      image_url: formData.get("image_url").toString().trim() || null,
      is_featured: formData.get("is_featured") === "on",
      published_at: status === "published" ? new Date().toISOString() : null,
    };

    const { error } = await supabase.from("case_studies").insert(payload);

    if (error) {
      setNotice({ type: "error", message: error.message });
      return;
    }

    event.currentTarget.reset();
    await loadDashboardData();
    setNotice({ type: "success", message: "Proje/vaka çalışması eklendi." });
  }

  async function updatePublishStatus(table, id, status) {
    const payload = {
      status,
      published_at: status === "published" ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    };
    const { error } = await supabase.from(table).update(payload).eq("id", id);

    if (error) {
      setNotice({ type: "error", message: error.message });
      return;
    }

    await loadDashboardData();
    setNotice({ type: "success", message: "Yayın durumu güncellendi." });
  }

  if (isLoading) {
    return (
      <main className="page-section">
        <div className="container">Yükleniyor...</div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="page-section bg-gradient-gray-light-1 min-vh-100">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-lg-5 offset-lg-3">
              <div className="alt-features-item box-shadow bg-white mt-0">
                <h1 className="section-title-small mb-30">
                  Gemu Technology Admin
                </h1>
                {notice.message && (
                  <div
                    className={`mb-20 ${
                      notice.type === "error" ? "text-danger" : "text-success"
                    }`}
                  >
                    {notice.message}
                  </div>
                )}
                <form onSubmit={handleLogin} className="form">
                  <div className="form-group">
                    <label htmlFor="admin_email">E-posta</label>
                    <input
                      id="admin_email"
                      type="email"
                      className="input-lg round form-control"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="admin_password">Şifre</label>
                    <input
                      id="admin_password"
                      type="password"
                      className="input-lg round form-control"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                  >
                    <span>Giriş Yap</span>
                  </button>
                </form>
                <div className="form-tip mt-30">
                  Supabase Auth içinde oluşturduğunuz kullanıcı ile giriş yapın.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page-section bg-gradient-gray-light-1 min-vh-100">
      <div className="container position-relative">
        <div className="d-flex justify-content-between align-items-center mb-50">
          <div>
            <div className="section-caption mb-10">Admin Panel</div>
            <h1 className="section-title-small mb-0">Gemu Technology Yönetim</h1>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <Link href="/" className="btn btn-mod btn-w btn-small btn-round">
              Siteye Dön
            </Link>
            <button
              type="button"
              className="btn btn-mod btn-color btn-small btn-round"
              onClick={handleLogout}
            >
              Çıkış
            </button>
          </div>
        </div>

        {notice.message && (
          <div
            className={`mb-30 ${
              notice.type === "error" ? "text-danger" : "text-success"
            }`}
          >
            {notice.message}
          </div>
        )}

        <div className="mb-40">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`btn btn-mod btn-small btn-round me-2 mb-2 ${
                activeTab === tab.id ? "btn-color" : "btn-w"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "messages" && (
          <RecordsPanel
            title="İletişim Mesajları"
            records={messages}
            emptyText="Henüz mesaj yok."
            renderRecord={(record) => (
              <RecordCard
                key={record.id}
                title={record.name}
                subtitle={`${record.email} · ${formatDate(record.created_at)}`}
                body={record.message}
                status={record.status}
                statusOptions={statusOptions}
                onStatusChange={(status) =>
                  updateStatus("contact_messages", record.id, status)
                }
              />
            )}
          />
        )}

        {activeTab === "requests" && (
          <RecordsPanel
            title="Proje Talepleri"
            records={requests}
            emptyText="Henüz proje talebi yok."
            renderRecord={(record) => (
              <RecordCard
                key={record.id}
                title={record.contact_name}
                subtitle={`${record.email} · ${record.service_type} · ${formatDate(
                  record.created_at
                )}`}
                body={record.description}
                meta={[
                  record.company_name && `Şirket: ${record.company_name}`,
                  record.phone && `Telefon: ${record.phone}`,
                  record.budget_range && `Bütçe: ${record.budget_range}`,
                  record.timeline && `Zamanlama: ${record.timeline}`,
                ].filter(Boolean)}
                status={record.status}
                statusOptions={statusOptions}
                onStatusChange={(status) =>
                  updateStatus("project_requests", record.id, status)
                }
              />
            )}
          />
        )}

        {activeTab === "blog" && (
          <ContentPanel
            title="Blog Yazıları"
            records={blogPosts}
            onSubmit={createBlogPost}
            fields="blog"
            renderRecord={(record) => (
              <PublishCard
                key={record.id}
                title={record.title}
                subtitle={`${record.slug} · ${record.category || "Yazılım"}`}
                status={record.status}
                onStatusChange={(status) =>
                  updatePublishStatus("blog_posts", record.id, status)
                }
              />
            )}
          />
        )}

        {activeTab === "projects" && (
          <ContentPanel
            title="Projeler ve Vaka Çalışmaları"
            records={caseStudies}
            onSubmit={createCaseStudy}
            fields="projects"
            renderRecord={(record) => (
              <PublishCard
                key={record.id}
                title={record.title}
                subtitle={`${record.slug} · ${record.service_type || "Proje"}`}
                status={record.status}
                onStatusChange={(status) =>
                  updatePublishStatus("case_studies", record.id, status)
                }
              />
            )}
          />
        )}
      </div>
    </main>
  );
}

function RecordsPanel({ title, records, emptyText, renderRecord }) {
  return (
    <section>
      <h2 className="section-title-small mb-30">{title}</h2>
      {records.length ? records.map(renderRecord) : <p>{emptyText}</p>}
    </section>
  );
}

function RecordCard({
  title,
  subtitle,
  body,
  meta = [],
  status,
  statusOptions,
  onStatusChange,
}) {
  return (
    <article className="alt-features-item box-shadow bg-white mt-0 mb-20">
      <div className="row">
        <div className="col-lg-8">
          <h3 className="alt-features-title mb-10">{title}</h3>
          <div className="section-caption mb-20">{subtitle}</div>
          <div className="alt-features-descr mb-20">{body}</div>
          {meta.map((item) => (
            <div key={item} className="section-descr-small">
              {item}
            </div>
          ))}
        </div>
        <div className="col-lg-4 mt-md-20 text-lg-end">
          <label className="section-caption mb-10 d-block">Durum</label>
          <select
            className="input-lg round form-control"
            value={status}
            onChange={(event) => onStatusChange(event.target.value)}
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </article>
  );
}

function ContentPanel({ title, records, onSubmit, fields, renderRecord }) {
  return (
    <section>
      <div className="row">
        <div className="col-lg-5 mb-md-50">
          <div className="alt-features-item box-shadow bg-white mt-0">
            <h2 className="section-title-small mb-30">{title} Ekle</h2>
            <ContentForm onSubmit={onSubmit} type={fields} />
          </div>
        </div>
        <div className="col-lg-7">
          <h2 className="section-title-small mb-30">{title}</h2>
          {records.length ? records.map(renderRecord) : <p>Henüz kayıt yok.</p>}
        </div>
      </div>
    </section>
  );
}

function ContentForm({ onSubmit, type }) {
  const isBlog = type === "blog";

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="form-group">
        <label htmlFor={`${type}_title`}>Başlık</label>
        <input
          id={`${type}_title`}
          name="title"
          className="input-lg round form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${type}_slug`}>Slug</label>
        <input
          id={`${type}_slug`}
          name="slug"
          className="input-lg round form-control"
          placeholder="Boş kalırsa başlıktan üretilir"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${type}_summary`}>
          {isBlog ? "Kısa Özet" : "Proje Özeti"}
        </label>
        <textarea
          id={`${type}_summary`}
          name={isBlog ? "excerpt" : "summary"}
          className="input-lg round form-control"
          style={{ height: 96 }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${type}_content`}>İçerik</label>
        <textarea
          id={`${type}_content`}
          name="content"
          className="input-lg round form-control"
          style={{ height: 120 }}
        />
      </div>
      {isBlog ? (
        <>
          <div className="form-group">
            <label htmlFor="blog_category">Kategori</label>
            <input
              id="blog_category"
              name="category"
              className="input-lg round form-control"
              placeholder="Yazılım"
            />
          </div>
          <div className="form-group">
            <label htmlFor="blog_tags">Etiketler</label>
            <input
              id="blog_tags"
              name="tags"
              className="input-lg round form-control"
              placeholder="AI, Backend, Supabase"
            />
          </div>
          <div className="form-group">
            <label htmlFor="blog_cover_image">Kapak Görseli URL</label>
            <input
              id="blog_cover_image"
              name="cover_image"
              className="input-lg round form-control"
            />
          </div>
        </>
      ) : (
        <>
          <div className="form-group">
            <label htmlFor="project_service_type">Hizmet Türü</label>
            <input
              id="project_service_type"
              name="service_type"
              className="input-lg round form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="project_industry">Sektör</label>
            <input
              id="project_industry"
              name="industry"
              className="input-lg round form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="project_result_metric">Sonuç Metriği</label>
            <input
              id="project_result_metric"
              name="result_metric"
              className="input-lg round form-control"
              placeholder="70%, 3x, 24/7"
            />
          </div>
          <div className="form-group">
            <label htmlFor="project_image_url">Görsel URL</label>
            <input
              id="project_image_url"
              name="image_url"
              className="input-lg round form-control"
            />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="is_featured" className="me-2" />
              Öne çıkar
            </label>
          </div>
        </>
      )}
      <div className="form-group">
        <label htmlFor={`${type}_status`}>Yayın Durumu</label>
        <select
          id={`${type}_status`}
          name="status"
          className="input-lg round form-control"
          defaultValue="draft"
        >
          {publishOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
      >
        <span>Kaydet</span>
      </button>
    </form>
  );
}

function PublishCard({ title, subtitle, status, onStatusChange }) {
  return (
    <article className="alt-features-item box-shadow bg-white mt-0 mb-20">
      <div className="row align-items-center">
        <div className="col-md-8">
          <h3 className="alt-features-title mb-10">{title}</h3>
          <div className="section-caption mb-0">{subtitle}</div>
        </div>
        <div className="col-md-4 mt-sm-20">
          <select
            className="input-lg round form-control"
            value={status}
            onChange={(event) => onStatusChange(event.target.value)}
          >
            {publishOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </article>
  );
}
