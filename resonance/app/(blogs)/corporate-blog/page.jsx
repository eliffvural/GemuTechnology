import AnimatedText from "@/components/common/AnimatedText";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
const onePage = false;
const dark = false;
import Image from "next/image";
import { corporateMultipage } from "@/data/menu";
import Link from "next/link";
import { blogs16, widgetPosts } from "@/data/blogs";
import Pagination from "@/components/common/Pagination";
import { getPublishedBlogPosts } from "@/lib/supabase/content";

export const metadata = {
  title: "Blog",
  description:
    "Gemu Technology blog: yazılım mimarisi, AI, otomasyon ve dijital ürün geliştirme içerikleri.",
};

const blogTopics = [
  "Yazılım mimarisi",
  "AI ve otomasyon",
  "Ürün geliştirme",
  "Modernizasyon",
  "Veri güvenliği",
];

const editorialNotes = [
  "Kurumsal ürün geliştirme pratikleri",
  "Sürdürülebilir yazılım kararları",
  "AI ve otomasyon kullanım senaryoları",
];

export default async function CorporateBlogPage() {
  const supabasePosts = await getPublishedBlogPosts();
  const posts = supabasePosts.length ? supabasePosts : blogs16;

  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header4 links={corporateMultipage} />
          </nav>

          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* Background Shape */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  className="opacity-05"
                  src="/assets/images/demo-corporate/bg-shape-1.svg"
                  alt=""
                  width={1443}
                  height={844}
                />
              </div>
              {/* End Background Shape */}
              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h1 className="hs-title-9 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="Gemu" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Blog" />
                          <b
                            className="mark-decoration-3 wow scalexIn"
                            data-wow-delay="0.5s"
                          />
                        </span>
                      </span>
                    </h1>
                    <p
                      className="hs-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Yazılım mimarisi, AI ve dijital ürün geliştirme üzerine içerikler.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  {/* Content */}
                  <div className="col-lg-8 mb-md-80">
                    {/* Blog Posts Grid */}
                    <div className="row mt-n50 mb-60 mb-sm-40">
                      {/* Blog Post Item */}
                      {posts.map((elm, i) => (
                        <div key={i} className="post-prev-2 col-md-6 mt-50">
                          <div className="post-prev-2-img">
                            <Link href={`/blog`}>
                              <Image
                                src={elm.imgUrl}
                                width={610}
                                height={436}
                                alt={elm.title}
                              />
                            </Link>
                          </div>
                          <h3 className="post-prev-2-title">
                            <Link href={`/blog`}>
                              {elm.title}
                            </Link>
                          </h3>
                          <p className="post-prev-2-text">{elm.desc}</p>
                          <div className="post-prev-2-tags">
                            <span className="post-prev-2-tag">{elm.date}</span>{" "}
                            <span className="post-prev-2-tag">
                              <i className={`mi-circle ${elm.colorClass} `} />
                              {elm.category}
                            </span>
                          </div>
                        </div>
                      ))}
                      {/* End Blog Post Item */}
                    </div>
                    {/* End Blog Posts Grid */}
                    {/* Pagination */}
                    <Pagination className="pagination" />
                    {/* End Pagination */}
                  </div>
                  {/* End Content */}
                  {/* Sidebar */}
                  <div className="col-lg-4 col-xl-3 offset-xl-1">
                    {/* Search Widget */}
                    <div className="widget">
                      <div className="form">
                        <div className="search-wrap">
                          <button
                            className="search-button animate"
                            type="submit"
                            title="Blogda ara"
                          >
                            <i className="mi-search size-18" />
                            <span className="visually-hidden">
                              Blogda ara
                            </span>
                          </button>
                          <input
                            type="text"
                            className="form-control input-lg search-field round"
                            placeholder="Blogda ara..."
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Search Widget */}
                    {/* Widget */}
                    <div className="widget">
                      <h3 className="widget-title">Konular</h3>
                      <div className="widget-body">
                        <ul className="clearlist widget-menu">
                          {blogTopics.map((topic) => (
                            <li key={topic}>
                              <a href="/blog" title="">
                                {topic}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* End Widget */}
                    {/* Widget */}
                    <div className="widget">
                      <h3 className="widget-title">Odak Alanları</h3>
                      <div className="widget-body">
                        <div className="tags">
                          {blogTopics.map((topic) => (
                            <a href="/blog" key={topic}>
                              {topic}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* End Widget */}
                    {/* Widget */}
                    <div className="widget">
                      <h3 className="widget-title">Öne Çıkanlar</h3>
                      <div className="widget-body">
                        <ul className="clearlist widget-posts">
                          {widgetPosts.map((post, index) => (
                            <li key={index} className="clearfix">
                              <a href="/blog">
                                <Image
                                  src={post.imgUrl}
                                  height={140}
                                  style={{ height: "fit-content" }}
                                  alt={post.title}
                                  width={100}
                                  className="widget-posts-img"
                                />
                              </a>
                              <div className="widget-posts-descr">
                                <a href="/blog" title="">
                                  {post.title}
                                </a>
                                <span>{post.author}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* End Widget */}
                    {/* Widget */}
                    <div className="widget">
                      <h3 className="widget-title">Editoryal Not</h3>
                      <div className="widget-body">
                        <ul className="clearlist widget-menu">
                          {editorialNotes.map((note) => (
                            <li key={note}>{note}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* End Widget */}
                    {/* Widget */}
                    <div className="widget">
                      <h3 className="widget-title">Kısaca Gemu</h3>
                      <div className="widget-body">
                        <div className="widget-text clearfix">
                          <Image
                            src="/assets/images/gemu/logo-large.png"
                            alt="Gemu Technology logo"
                            style={{ height: "fit-content" }}
                            height={140}
                            width={100}
                            className="left img-left"
                          />
                          Manisa Teknokent merkezli yazılım ekibimiz; kurumsal
                          web, mobil uygulama, süreç yazılımları, AI ve otomasyon
                          alanlarında uygulanabilir dijital ürünler geliştirir.
                        </div>
                      </div>
                    </div>
                    {/* End Widget */}
                    {/* Widget */}
                    <div className="widget">
                      <h3 className="widget-title">Yayın Planı</h3>
                      <div className="widget-body">
                        <ul className="clearlist widget-menu">
                          <li>Ayda iki yeni teknik içerik</li>
                          <li>Proje deneyimlerinden kısa notlar</li>
                          <li>Yazılım kararları için pratik rehberler</li>
                        </ul>
                      </div>
                    </div>
                    {/* End Widget */}
                  </div>
                  {/* End Sidebar */}
                </div>
              </div>
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
          </main>
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
