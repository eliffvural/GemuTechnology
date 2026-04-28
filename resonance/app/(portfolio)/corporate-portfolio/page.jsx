import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";

const onePage = false;
const dark = false;
import Image from "next/image";
import { corporateMultipage } from "@/data/menu";
import Link from "next/link";
import { getPublishedCaseStudies } from "@/lib/supabase/content";
import { portfolios4 } from "@/data/portfolio";

export const metadata = {
  title: "Projeler | Gemu Technology",
  description:
    "Gemu Technology vaka çalışmaları: kurumsal web, backend, mobil uygulama, AI ve otomasyon projelerinde problem, çözüm ve sonuç odaklı yazılım üretimi.",
};

const portfolioHighlights = [
  "Kurumsal web platformları",
  "Backend ve API mimarileri",
  "Mobil uygulama projeleri",
  "AI ve otomasyon uygulamaları",
];

const normalizeProject = (project, index) => ({
  title: project.title,
  eyebrow: project.eyebrow || project.serviceType || "Yazılım hizmeti",
  industry: project.industry || "Kurumsal operasyonlar",
  problem:
    project.problem ||
    "İş sürecindeki manuel adımlar, veri dağınıklığı veya ölçeklenme ihtiyacı yazılım çözümüyle netleştirildi.",
  solution:
    project.solution ||
    project.description ||
    "İhtiyaca uygun ürün kapsamı, geliştirme planı ve sürdürülebilir yazılım mimarisi birlikte kurgulandı.",
  result:
    project.result ||
    "Çalışan, yönetilebilir ve büyümeye hazır bir dijital ürün yapısı oluşturuldu.",
  number: project.number || project.resultMetric || "Net",
  description: project.description || "ölçülebilir iş çıktısı",
  imageUrl:
    project.imageUrl ||
    project.imageSrc ||
    `/assets/images/demo-corporate/portfolio/project-${(index % 3) + 1}-gemu.png`,
  tags: project.tags || [
    project.serviceType || "Yazılım geliştirme",
    "Ürün kapsamı",
    "Teslimat planı",
  ],
});

export default async function CorporatePortfolioPage() {
  const supabaseProjects = await getPublishedCaseStudies();
  const projects = (supabaseProjects.length ? supabaseProjects : portfolios4).map(
    normalizeProject
  );
  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1);

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
                      <span className="mark-decoration-3-wrap wow fadeInUp">
                        Projelerimiz
                        <b
                          className="mark-decoration-3 wow scalexIn"
                          data-wow-delay="0.5s"
                        />
                      </span>
                    </h1>
                    <p
                      className="hs-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Yazılım projelerini problem, çözüm ve sonuç odağında
                      vaka çalışması formatında inceliyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <>
              {/* Portfolio Section */}
              <section className="page-section" id="portfolio">
                <div className="container position-relative">
                  <div
                    className="row mb-70 mb-sm-50 wow fadeInUp"
                    data-wow-offset={0}
                  >
                    <div className="col-lg-5 mb-md-40">
                      <p className="section-descr mb-0">
                        Bu alan, Gemu Technology'nin geliştirdiği projeleri
                        sektör, teknoloji ve iş sonucu odaklı şekilde sunmak için hazırlandı.
                      </p>
                    </div>
                    <div className="col-lg-6 offset-lg-1 d-flex align-items-end pb-10">
                      {/* Features List */}
                      <div className="row mt-n10">
                        {/* Features List Item */}
                        {portfolioHighlights.map((item, i) => (
                          <div key={i} className="col-sm-6 d-flex mt-10">
                            <div className="features-list-icon features-list-color-1">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">{item}</div>
                          </div>
                        ))}
                        {/* End Features List Item */}

                        {/* End Features List Item */}
                      </div>
                      {/* End Features List */}
                    </div>
                  </div>
                  <div className="case-study-feature mb-70 mb-sm-50">
                    <div className="row align-items-stretch">
                      <div className="col-lg-6">
                        <div className="case-study-feature-image">
                          <Image
                            src={featuredProject.imageUrl}
                            width={760}
                            height={520}
                            alt={featuredProject.title}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex">
                        <div className="case-study-feature-content">
                          <div className="case-study-eyebrow">
                            {featuredProject.eyebrow}
                          </div>
                          <h2>{featuredProject.title}</h2>
                          <p>{featuredProject.solution}</p>
                          <div className="case-study-meta">
                            <div>
                              <span>Sektör</span>
                              <strong>{featuredProject.industry}</strong>
                            </div>
                            <div>
                              <span>Sonuç</span>
                              <strong>
                                {featuredProject.number} {featuredProject.description}
                              </strong>
                            </div>
                          </div>
                          <div className="case-study-tags">
                            {featuredProject.tags.map((tag) => (
                              <span key={tag}>{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-40 mb-sm-30 text-center">
                    <h2 className="section-title-small mb-10">
                      Seçili Vaka Çalışmaları
                    </h2>
                    <p className="section-descr-small mb-0">
                      Her projede önce ihtiyacı netleştiriyor, sonra çalışan yazılım
                      çözümünü ve iş çıktısını birlikte görünür hale getiriyoruz.
                    </p>
                  </div>
                  <div className="row mt-n30">
                    {secondaryProjects.map((project) => (
                      <div key={project.title} className="col-md-6 mt-30">
                        <article className="case-study-detail-card">
                          <div className="case-study-detail-top">
                            <span>{project.eyebrow}</span>
                            <strong>{project.number}</strong>
                          </div>
                          <h3>{project.title}</h3>
                          <div className="case-study-detail-block">
                            <span>İhtiyaç</span>
                            <p>{project.problem}</p>
                          </div>
                          <div className="case-study-detail-block">
                            <span>Çözüm</span>
                            <p>{project.solution}</p>
                          </div>
                          <div className="case-study-detail-result">
                            {project.description}
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                  {/* End Portfolio Grid */}
                </div>
              </section>
              {/* End Portfolio Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Call to Action Section */}
              <section className="page-section">
                <div className="container position-relative z-index-1">
                  <div className="row text-center">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <div className="text-center mb-40 mb-sm-30">
                        <Image
                          src="/assets/images/demo-corporate/section-image-1.png"
                          width={100}
                          height={100}
                          alt="Image Description"
                        />
                      </div>
                      <p className="section-descr-medium mb-50 mb-sm-40">
                        Projelerinizi bu alana birlikte taşıyalım. Teknik kapsamı netleştirip
                        her proje için etkili bir sunum kurgusu oluşturalım.
                      </p>
                      <div className="local-scroll text-center">
                        <Link
                          href={`/iletisim`}
                          className="btn btn-mod btn-w btn-with-icon btn-circle"
                        >
                          <span className="btn-icon color-1">
                            <i className="mi-heart" aria-hidden="true"></i>
                          </span>{" "}
                          <span data-btn-animate="y">
                            <span className="btn-animate-y">
                              <span className="btn-animate-y-1">
                                Projeni Planla{" "}
                                <i
                                  className="mi-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                className="btn-animate-y-2"
                                aria-hidden="true"
                              >
                                Projeni Planla{" "}
                                <i
                                  className="mi-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
            </>
          </main>
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
