"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

const navSections = [
  {
    title: "GENEL",
    items: [{ id: "dashboard", label: "Dashboard" }],
  },
  {
    title: "İÇERİKLER",
    items: [
      { id: "blog", label: "Blog" },
      { id: "projects", label: "Projeler" },
    ],
  },
  {
    title: "FORMLAR",
    items: [
      { id: "messages", label: "İletişim Mesajları" },
      { id: "requests", label: "Proje Talepleri" },
    ],
  },
];

const statusOptions = ["new", "in_review", "contacted", "closed"];
const publishOptions = ["draft", "published"];
const adminCapabilities = [
  "İletişim mesajlarını takip edin",
  "Proje taleplerini durumlandırın",
  "Blog ve proje içeriklerini yayınlayın",
];

const adminStyles = {
  shell: {
    minHeight: "100vh",
    background: "#f8fafc",
    color: "#111827",
    display: "flex",
    fontFamily:
      "Inter, Plus Jakarta Sans, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },
  sidebar: {
    width: 280,
    minHeight: "100vh",
    background: "#fff",
    borderRight: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    top: 0,
  },
  brand: {
    padding: "24px 22px",
    borderBottom: "1px solid #e5e7eb",
    minHeight: 88,
  },
  brandTitle: {
    fontSize: 20,
    lineHeight: 1.1,
    fontWeight: 800,
    margin: 0,
  },
  muted: {
    color: "#6b7280",
  },
  nav: {
    padding: "24px 0",
    flex: 1,
  },
  navTitle: {
    color: "#6b7280",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: 1.4,
    padding: "0 22px",
    margin: "0 0 10px",
  },
  navButton: {
    width: "calc(100% - 24px)",
    margin: "0 12px 8px",
    border: 0,
    borderRadius: 10,
    background: "transparent",
    color: "#111827",
    textAlign: "left",
    padding: "13px 18px",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background .15s ease, color .15s ease",
  },
  navButtonActive: {
    background: "#f3f6ff",
    color: "#2563eb",
    boxShadow: "inset 4px 0 0 #2563eb",
  },
  sidebarFooter: {
    padding: 22,
    borderTop: "1px solid #e5e7eb",
  },
  content: {
    flex: 1,
    minWidth: 0,
  },
  topbar: {
    minHeight: 88,
    background: "#fff",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 36px",
  },
  topbarTitle: {
    fontSize: 24,
    fontWeight: 800,
    margin: 0,
  },
  main: {
    padding: "36px",
    maxWidth: 1320,
  },
  card: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    boxShadow: "0 8px 22px rgba(17, 24, 39, 0.05)",
  },
  welcomeCard: {
    padding: "32px 34px",
    marginBottom: 34,
  },
  cardTitle: {
    fontSize: 24,
    lineHeight: 1.2,
    fontWeight: 800,
    margin: "0 0 12px",
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 22,
    marginBottom: 34,
  },
  statCard: {
    padding: 28,
  },
  statValue: {
    fontSize: 32,
    lineHeight: 1,
    fontWeight: 800,
    marginBottom: 22,
  },
  quickCard: {
    padding: "26px 28px",
    marginBottom: 34,
  },
  quickGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 18,
  },
  quickButton: {
    border: 0,
    borderRadius: 10,
    background: "#6b7280",
    color: "#fff",
    fontWeight: 800,
    fontSize: 14,
    padding: "16px 18px",
    cursor: "pointer",
  },
  primaryButton: {
    border: 0,
    borderRadius: 8,
    background: "#2563eb",
    color: "#fff",
    fontWeight: 800,
    padding: "12px 18px",
    fontSize: 14,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  outlineButton: {
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    background: "#fff",
    color: "#111827",
    fontWeight: 800,
    padding: "12px 16px",
    fontSize: 14,
    textDecoration: "none",
    width: "100%",
    cursor: "pointer",
  },
};

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
  const [activeTab, setActiveTab] = useState("dashboard");
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
      <main className="page-section bg-gradient-gray-light-1 min-vh-100 d-flex align-items-center">
        <div className="container position-relative">
          <div className="row justify-content-center align-items-stretch">
            <div className="col-lg-5 d-flex">
              <div className="bg-dark-1 light-content round overflow-hidden px-4 px-sm-5 py-5 w-100">
                <div className="section-caption mb-20">Gemu Technology</div>
                <h1 className="section-title mb-40 mb-xs-30">
                  Yönetim paneli
                </h1>
                <p className="section-descr mb-50 mb-sm-40">
                  Gelen talepleri, içerikleri ve proje kayıtlarını tek yerden
                  yönetmek için güvenli admin alanı.
                </p>
                <div className="mt-n10">
                  {adminCapabilities.map((item) => (
                    <div key={item} className="d-flex mt-10">
                      <div className="features-list-icon features-list-color-1">
                        <i className="mi-check" />
                      </div>
                      <div className="features-list-text">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex">
              <div className="alt-features-item box-shadow bg-white mt-0 w-100">
                <div className="section-caption mb-15">Güvenli Giriş</div>
                <h2 className="section-title-small mb-20">
                  Hesabınıza giriş yapın
                </h2>
                <p className="text-gray mb-30">
                  Supabase Auth üzerinde tanımlı admin kullanıcınızla devam edin.
                </p>
                {notice.message && (
                  <div
                    className={`mb-25 ${
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
                      placeholder="admin@gemutechnology.com"
                      autoComplete="email"
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
                      placeholder="Şifrenizi girin"
                      autoComplete="current-password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-mod btn-color btn-large btn-round btn-hover-anim w-100"
                  >
                    <span>Giriş Yap</span>
                  </button>
                </form>
                <div className="form-tip mt-25">
                  Giriş bilgileri veritabanında saklanmaz; oturum Supabase Auth
                  tarafından yönetilir.
                </div>
                <div className="mt-30">
                  <Link href="/" className="link-hover-anim">
                    Siteye dön
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const dashboardStats = [
    { value: blogPosts.length, label: "Blog Yazıları" },
    { value: messages.length, label: "İletişim Mesajları" },
    { value: requests.length, label: "Proje Talepleri" },
    { value: caseStudies.length, label: "Projeler" },
  ];
  const activeLabel =
    navSections
      .flatMap((section) => section.items)
      .find((item) => item.id === activeTab)?.label || "Dashboard";

  return (
    <div style={adminStyles.shell}>
      <aside style={adminStyles.sidebar}>
        <div style={adminStyles.brand}>
          <h1 style={adminStyles.brandTitle}>Gemu Technology</h1>
            <div style={{ ...adminStyles.muted, marginTop: 8, fontSize: 14 }}>
            Yönetim alanı
          </div>
        </div>

        <nav style={adminStyles.nav}>
          {navSections.map((section) => (
            <div key={section.title} style={{ marginBottom: 28 }}>
              <h2 style={adminStyles.navTitle}>{section.title}</h2>
              {section.items.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    style={{
                      ...adminStyles.navButton,
                      ...(isActive ? adminStyles.navButtonActive : {}),
                    }}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <span style={{ color: "#2563eb", marginRight: 12 }}>·</span>
                    {item.label}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        <div style={adminStyles.sidebarFooter}>
          <div style={{ fontWeight: 700, marginBottom: 24, wordBreak: "break-word" }}>
            {session.user.email}
          </div>
          <button type="button" style={adminStyles.outlineButton} onClick={handleLogout}>
            Çıkış Yap
          </button>
        </div>
      </aside>

      <div style={adminStyles.content}>
        <header style={adminStyles.topbar}>
          <h2 style={adminStyles.topbarTitle}>{activeLabel}</h2>
          <Link href="/" style={adminStyles.primaryButton}>
            Websiteyi Gör
          </Link>
        </header>

        <main style={adminStyles.main}>
          {notice.message && (
            <div
              style={{
                ...adminStyles.card,
                padding: 18,
                marginBottom: 24,
                color: notice.type === "error" ? "#dc2626" : "#047857",
              }}
            >
              {notice.message}
            </div>
          )}

          {activeTab === "dashboard" && (
            <>
              <section style={{ ...adminStyles.card, ...adminStyles.welcomeCard }}>
                <h2 style={adminStyles.cardTitle}>Hoş geldiniz</h2>
                <p style={{ ...adminStyles.muted, margin: 0, fontSize: 15 }}>
                  Blog, proje, iletişim ve proje talebi verilerini buradan
                  yönetebilirsiniz.
                </p>
              </section>

              <section style={adminStyles.statGrid}>
                {dashboardStats.map((stat) => (
                  <div
                    key={stat.label}
                    style={{ ...adminStyles.card, ...adminStyles.statCard }}
                  >
                    <div style={adminStyles.statValue}>{stat.value}</div>
                    <div style={{ ...adminStyles.muted, fontWeight: 700 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </section>

              <section style={{ ...adminStyles.card, ...adminStyles.quickCard }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 18px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: 4,
                      height: 24,
                      background: "#2563eb",
                      borderRadius: 4,
                      marginRight: 12,
                      verticalAlign: "middle",
                    }}
                  />
                  Hızlı Aksiyonlar
                </h3>
                <div style={adminStyles.quickGrid}>
                  <button
                    type="button"
                    style={{ ...adminStyles.quickButton, background: "#2563eb" }}
                    onClick={() => setActiveTab("blog")}
                  >
                    Blog Yazıları
                  </button>
                  <button
                    type="button"
                    style={adminStyles.quickButton}
                    onClick={() => setActiveTab("projects")}
                  >
                    Projeler
                  </button>
                  <button
                    type="button"
                    style={adminStyles.quickButton}
                    onClick={() => setActiveTab("messages")}
                  >
                    İletişim Mesajları
                  </button>
                  <button
                    type="button"
                    style={adminStyles.quickButton}
                    onClick={() => setActiveTab("requests")}
                  >
                    Proje Talepleri
                  </button>
                </div>
              </section>
            </>
          )}

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
        </main>
      </div>
    </div>
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
