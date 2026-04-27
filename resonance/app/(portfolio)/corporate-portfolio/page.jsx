import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";

const onePage = false;
const dark = false;
import Image from "next/image";
import { corporateMultipage } from "@/data/menu";
import Link from "next/link";
import { getPublishedCaseStudies } from "@/lib/supabase/content";

export const metadata = {
  title: "Projeler | Gemu Technology",
  description:
    "Gemu Technology proje vitrini. Projeleriniz yayına hazır olduğunda bu alandan kolayca yayınlayabilirsiniz.",
};

const portfolioHighlights = [
  "Kurumsal web platformları",
  "Backend ve API mimarileri",
  "Mobil uygulama projeleri",
  "AI ve otomasyon uygulamaları",
];

const portfolioPlaceholders = [
  {
    title: "Proje Kartı 01",
    description: "Proje adı, kapsamı ve kullanılan teknolojiler burada yer alacak.",
  },
  {
    title: "Proje Kartı 02",
    description: "Müşteri hedefi, çözülen problem ve iş çıktıları burada sunulacak.",
  },
  {
    title: "Proje Kartı 03",
    description: "Performans, ölçeklenebilirlik ve operasyonel katkı metrikleri eklenecek.",
  },
  {
    title: "Proje Kartı 04",
    description: "Sektöre özel çözüm yaklaşımı ve teslimat modeli anlatılacak.",
  },
  {
    title: "Proje Kartı 05",
    description: "Vaka çalışması formatında süreç, mimari ve sonuç paylaşılacak.",
  },
  {
    title: "Proje Kartı 06",
    description: "Proje görseli, kısa özet ve detay sayfası bağlantısı eklenecek.",
  },
];

export default async function CorporatePortfolioPage() {
  const supabaseProjects = await getPublishedCaseStudies();
  const projects = supabaseProjects.length
    ? supabaseProjects
    : portfolioPlaceholders;

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
                      Yayına alacağımız projeleri burada vaka odaklı bir yapı ile sergileyeceğiz.
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
                  <div className="mb-40 mb-sm-30 text-center">
                    <h2 className="section-title-small mb-10">Projelerimiz</h2>
                    <p className="section-descr-small mb-0">
                      Yayındaki vaka çalışmalarını Supabase üzerinden yönetebilirsiniz.
                      Henüz içerik eklenmediyse bu alan şablon kartlarla görünür.
                    </p>
                  </div>
                  {/* Portfolio Grid */}
                  <div className="row mt-n50 mt-sm-n40">
                    {/* Portfolio Item */}
                    {projects.map((elm, i) => (
                      <div key={i} className="col-md-6 col-lg-4 mt-50 mt-sm-40">
                        <div className="portfolio-5-link">
                          {elm.imageUrl ? (
                            <div className="portfolio-5-image">
                              <Image
                                src={elm.imageUrl}
                                width={660}
                                height={472}
                                alt={elm.title}
                              />
                            </div>
                          ) : (
                            <div
                              className="portfolio-5-image bg-gray-light-2 d-flex align-items-center justify-content-center"
                              style={{ minHeight: 260 }}
                            >
                              <div className="text-center p-4">
                                <div className="mb-10 opacity-07">
                                  <i className="mi-image size-24" />
                                </div>
                                <div className="section-descr-small">
                                  Proje görseli buraya eklenecek
                                </div>
                              </div>
                            </div>
                          )}
                          <h3 className="portfolio-5-title">
                            <span>{elm.title}</span>
                          </h3>
                          {elm.resultMetric && (
                            <div className="portfolio-5-number">
                              {elm.resultMetric}
                            </div>
                          )}
                          <div className="portfolio-5-number-descr">
                            {elm.description}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* End Portfolio Item */}

                    {/* End Portfolio Item */}
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
