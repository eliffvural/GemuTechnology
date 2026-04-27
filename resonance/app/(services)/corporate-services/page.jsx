import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Image from "next/image";
import { corporateMultipage } from "@/data/menu";
import Link from "next/link";
import Service from "@/components/homes/home-4/Service";
import AnimateButton from "@/components/common/AnimateButton";

const onePage = false;
const dark = false;

export const metadata = {
  title: "Hizmetler | Gemu Technology",
  description:
    "Gemu Technology'nin uçtan uca yazılım hizmetleri, uzmanlık alanları ve kurumsal teslimat yaklaşımı.",
};

const serviceBenefits = [
  {
    title: "Uçtan Uca Teslimat",
    description:
      "Analizden canlıya alıma kadar tüm süreci tek ekip sorumluluğunda yönetiyoruz.",
    svgPath:
      "M12 1l3 6 6 .9-4.5 4.4 1.1 6.2L12 15.8 6.4 18.5l1.1-6.2L3 7.9 9 7l3-6z",
  },
  {
    title: "Ölçeklenebilir Mimari",
    description:
      "Büyüme hedeflerinize uyumlu, performans odaklı ve sürdürülebilir sistem tasarımları kuruyoruz.",
    svgPath:
      "M4 19h16v2H4v-2zm1-7h3v5H5v-5zm5-4h3v9h-3V8zm5-3h3v12h-3V5z",
  },
  {
    title: "Kurumsal Güvenlik",
    description:
      "Kimlik doğrulama, yetkilendirme ve veri güvenliğini ürünün doğal bir parçası olarak ele alıyoruz.",
    svgPath:
      "M12 2l7 3v6c0 4.6-3 8.5-7 9.9C8 19.5 5 15.6 5 11V5l7-3zm0 2.1L7 6.2V11c0 3.5 2.1 6.6 5 7.8 2.9-1.2 5-4.3 5-7.8V6.2l-5-2.1z",
  },
  {
    title: "Şeffaf İletişim",
    description:
      "Düzenli raporlama, öngörülebilir planlama ve hızlı geri bildirim döngüsüyle ilerliyoruz.",
    svgPath:
      "M3 4h18v12H7l-4 4V4zm2 2v9.2L6.2 14H19V6H5zm3 2h8v2H8V8zm0 3h6v2H8v-2z",
  },
];

const solutionPackages = [
  {
    title: "Ürün Keşfi ve Teknik Strateji",
    description:
      "Fikri uygulanabilir kapsam, teknik mimari ve teslimat planına dönüştürürüz.",
  },
  {
    title: "Kurumsal Uygulama Geliştirme",
    description:
      "Web, mobil, backend ve veri katmanlarını tek ürün mimarisinde geliştiririz.",
  },
  {
    title: "AI Destekli Otomasyon",
    description:
      "Doküman, destek, raporlama ve karar destek süreçlerine AI katmanı ekleriz.",
  },
  {
    title: "Modernizasyon ve Bakım",
    description:
      "Yavaşlayan veya bakımı zorlaşan sistemleri sadeleştirir ve ölçekleriz.",
  },
];

export default function CorporateServicesPage() {
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
                        Hizmetlerimiz
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
                      İhtiyacınıza özel, ölçeklenebilir ve yüksek performanslı yazılım çözümleri.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section pb-0 scrollSpysection   ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="services"
            >
              <div className="container position-relative">
                <div className="row mb-70 mb-sm-50">
                  <div className="col-md-8 offset-md-2 text-center">
                    <p className="section-descr mb-0">
                      Kurumsal web, backend, mobil uygulama ve yapay zeka alanlarında
                      teknik yetkinliğimizi iş hedeflerinizle birleştiriyor; ölçülebilir
                      sonuç üreten dijital ürünler geliştiriyoruz.
                    </p>
                  </div>
                </div>
              </div>
              <Service />
              <div className="container position-relative z-index-1 pt-40 pt-md-30">
                <div className="row mt-n30 mb-80 mb-sm-60">
                  {solutionPackages.map((item, i) => (
                    <div
                      key={i}
                      className="col-md-6 col-xl-3 d-flex align-items-stretch mt-30"
                    >
                      <div className="alt-features-item border-left mt-0 w-100">
                        <div className="section-caption mb-15">
                          Çözüm {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="alt-features-title">{item.title}</h3>
                        <div className="alt-features-descr">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
                      Projenizin kapsamını, teknik ihtiyaçlarını ve önceliklerini
                      birlikte netleştirelim. Doğru mimariyle hızlı başlayan, güvenli
                      ilerleyen ve büyüdükçe güçlenen bir ürün süreci tasarlayalım.
                    </p>
                    <div className="local-scroll text-center">
                      <Link
                        href={`/iletisim${dark ? "-dark" : ""}`}
                        className={`btn btn-mod ${
                          dark ? "btn-dark" : "btn-w"
                        } btn-with-icon btn-circle`}
                      >
                        <span className="btn-icon color-1">
                          <i className="mi-heart" />
                        </span>
                        <span data-btn-animate="y">
                          <AnimateButton text={"Teklif ve Yol Haritası Alın"} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-line-2 mt-n10 mt-md-20 opacity-025">
                <Image
                  src="/assets/images/demo-corporate/decoration-3.svg"
                  alt=""
                  width={1600}
                  height={243}
                />
              </div>
            </section>
            <section className="page-section z-index-1">
              <div className="container position-relative">
                <div className="row mb-50 mb-sm-50">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-center">
                    <h2 className="section-title-small mb-20">
                      Neden Gemu Technology?
                    </h2>
                    <p className="text-gray mb-0">
                      Projelerinizi sadece kod teslimi olarak değil; strateji, mühendislik
                      ve operasyonel sürdürülebilirlik odağında uzun vadeli bir ortaklık
                      modeliyle ele alıyoruz.
                    </p>
                  </div>
                </div>
                {/* Features Grid */}
                <div className="row mt-n30 wow fadeInUp">
                  {/* Feature Item */}
                  {serviceBenefits.map((elm, i) => (
                    <div
                      key={i}
                      className="col-sm-6 col-xl-3 d-flex align-items-stretch"
                    >
                      <div className="alt-features-item box-shadow text-center mt-30">
                        <div className="alt-features-icon mb-10 color-primary-1">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d={elm.svgPath} />
                          </svg>
                        </div>
                        <h4 className="alt-features-title">{elm.title}</h4>
                        <div className="alt-features-descr">
                          {elm.description}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* End Feature Item */}

                  {/* End Feature Item */}
                </div>
                {/* End Features Grid */}
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
