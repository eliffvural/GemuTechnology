import React from "react";

import Cta from "./Cta";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Steps from "./Steps";
import Testimonials from "./Testimonials";
import Blog from "../home-4/Blog";
import Contact from "./Contact";
import AnimateButton from "@/components/common/AnimateButton";
import Link from "next/link";
import Testimonials2 from "./Testimonials2";
import Image from "next/image";
export default function Home4({ onePage = false, dark = false }) {
  const solutionAreas = [
    {
      title: "Kurumsal Web Çözümleri",
      text: "Next.js ve React ile hızlı, SEO güçlü ve sürdürülebilir web ürünleri geliştiriyoruz.",
    },
    {
      title: "Backend ve API Sistemleri",
      text: "Güvenli kimlik yönetimi ve ölçeklenebilir servis katmanlarıyla güçlü altyapılar kuruyoruz.",
    },
    {
      title: "Mobil Uygulama Çözümleri",
      text: "iOS ve Android için tek kod tabanında yüksek performanslı mobil deneyimler sunuyoruz.",
    },
    {
      title: "AI ve Otomasyon Çözümleri",
      text: "LLM ve akıllı otomasyon senaryoları ile ekiplerin verimliliğini artıran çözümler üretiyoruz.",
    },
  ];

  return (
    <>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="bg-line-1 opacity-025">
          <Image
            src="/assets/images/demo-corporate/decoration-2.svg"
            width={1600}
            height={513}
            alt="resonance template image"
            className="wow fadeIn"
            data-wow-delay="0.4s"
          />
        </div>
        {/* End Decorative Line */}
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title mb-40 mb-xs-30">
                Özel Yazılım Çözümlerinde Güvenilir İş Ortağınız
              </h2>
              <p className="section-descr dark-white mb-0">
                Hazır paket yaklaşımları yerine, kurumunuzun iş modeline tam uyum
                sağlayan butik ve esnek çözüm mimarileri tasarlıyoruz. Fikirden
                ürüne uzanan tüm süreçte güvenlik, ölçeklenebilirlik ve kullanıcı
                deneyimini aynı standartta yöneterek uzun ömürlü dijital ürünler
                geliştiriyoruz.
              </p>
            </div>
          </div>
          {/* Testimonials Grid */}
          <Testimonials2 />
          {/* End Testimonials Grid */}
          <div className="local-scroll text-center">
            {onePage ? (
              <>
                <a
                  href="#services"
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-favorite" />
                  </span>
                  <span data-btn-animate="y">
                    <AnimateButton text={"Hizmetlerimizi Keşfedin"} />
                  </span>
                </a>
              </>
            ) : (
              <>
                <Link
                  href={`/hakkimizda${dark ? "-dark" : ""}`}
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-favorite" />
                  </span>
                  <span data-btn-animate="y">
                    <AnimateButton text={"Yazılım Hizmetlerimizi Keşfedin"} />
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
      <section
        className="page-section bg-scroll light-content"
        style={{
          backgroundImage:
            "url(/assets/images/demo-corporate/section-bg-1.jpg)",
        }}
      >
        {/* Desktop Overlay */}
        <div className="bg-overlay bg-gradient-primary-alpha-1 d-none d-md-block" />
        {/* End Desktop Overlay */}
        {/* Mobile Overlay */}
        <div className="bg-overlay bg-primary-1 opacity-09 d-md-none" />
        {/* End Mobile Overlay */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-7 col-lg-6 col-xl-5">
              <h2 className="section-title mb-40 mb-xs-30">
                Dijital Dönüşüm Yolculuğuna Hazır mısınız?
              </h2>
              <p className="section-descr mb-50 mb-sm-40">
                İş hedeflerinizi teknik gerçeklikle buluşturuyor, ölçeklenebilir
                bir ürün yol haritasına dönüştürüyoruz. Doğru teknoloji
                kararlarını erken aşamada alarak zamanı, bütçeyi ve ekip
                verimliliğini optimize ediyoruz.
              </p>
              <div className="local-scroll mb-70 mb-sm-50">
                {onePage ? (
                  <>
                    <a
                      href="#contact"
                      className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                    >
                      <span>Uzman Ekibimizle İletişime Geçin</span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/iletisim${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                    >
                      <span>Uzman Ekiple İletişime Geçin</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Logotypes */}
          <Cta />
          {/* End Logotypes */}
        </div>{" "}
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
              <h2 className="section-title mb-40 mb-xs-30">
                Yazılım Hizmetlerimiz
              </h2>
              <p className="section-descr mb-0">
                Uçtan uca hizmet modelimiz; modern mimari, yüksek performans ve
                ölçeklenebilirlik odağında kurumların dijital büyüme hedeflerini
                hızlandırır.
              </p>
            </div>
          </div>
          <div className="row mt-n30 mb-70 mb-sm-50">
            {solutionAreas.map((item, i) => (
              <div key={i} className="col-md-6 col-xl-3 d-flex align-items-stretch mt-30">
                <div className="alt-features-item box-shadow mt-0 w-100">
                  <h3 className="alt-features-title mb-10">{item.title}</h3>
                  <div className="alt-features-descr">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Service />
        {/* End Services Grid */}
        {/* Call to Action Block */}
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
                İş hedeflerinizi teknik gereksinimlerle hizalayarak ölçeklenebilir
                ürün yol haritaları oluşturuyoruz. Ekiplerinize hızlı teslimat,
                operasyonel süreklilik ve ölçülebilir iş sonuçları kazandırıyoruz.
              </p>
              <div className="local-scroll text-center">
                {onePage ? (
                  <>
                    <a
                      href="#contact"
                      className={`btn btn-mod ${
                        dark ? "btn-dark" : "btn-w"
                      } btn-with-icon btn-circle`}
                    >
                      <span className="btn-icon color-1">
                        <i className="mi-heart" />
                      </span>
                      <span data-btn-animate="y">
                    <AnimateButton text={"Stratejik Değerlendirme Talep Edin"} />
                      </span>
                    </a>
                  </>
                ) : (
                  <>
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
                        <AnimateButton text={"Stratejik Değerlendirme Talep Edin"} />
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* End Call to Action Block */}
        {/* Decorative Line */}
        <div className="bg-line-2 mt-n10 mt-md-20 opacity-025">
          <Image
            src="/assets/images/demo-corporate/decoration-3.svg"
            width={1600}
            height={243}
            alt="resonance template image"
          />
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <div className="container position-relative">
          <Portfolio />
          {/* End Portfolio Grid */}
          <div className="local-scroll text-center">
            {onePage ? (
              <>
                <a
                  href="#clients-stories"
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-link-alt" />
                  </span>
                  <span data-btn-animate="y">
                    <AnimateButton text={"Müşteri Başarı Hikayelerini İnceleyin"} />
                  </span>
                </a>
              </>
            ) : (
              <>
                <Link
                  href={`/projeler${dark ? "-dark" : ""}`}
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-link-alt" />
                  </span>
                  <span data-btn-animate="y">
                    <AnimateButton text={"Tüm Projelerimizi İnceleyin"} />
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
      <section
        className="page-section bg-primary-1 bg-color-alpha-90 bg-scroll light-content"
        style={{
          backgroundImage:
            "url(/assets/images/demo-corporate/section-bg-2.jpg)",
        }}
      >
        <Steps />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="clients-stories"
      >
        <Testimonials />
      </section>
      <section
        className="page-section bg-scroll light-content"
        style={{
          backgroundImage:
            "url(/assets/images/demo-corporate/section-bg-3.jpg)",
        }}
      >
        {/* Desktop Overlay */}
        <div className="bg-overlay bg-gradient-primary-alpha-2 d-none d-md-block" />
        {/* End Desktop Overlay */}
        {/* Mobile Overlay */}
        <div className="bg-overlay bg-primary-1 opacity-09 d-md-none" />
        {/* End Mobile Overlay */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-7 offset-md-5 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
              <h2 className="section-title mb-40 mb-xs-30">
                Teknoloji Tercihlerimizle İşinize Somut Değer Katıyoruz
              </h2>
              <p className="section-descr mb-50 mb-sm-40">
                Next.js ve React ile hızlı, SEO güçlü ve bakımı kolay arayüzler;
                Node.js ve TypeScript ile esnek, güvenilir servis katmanları;
                Supabase ve PostgreSQL ile güvenli, gerçek zamanlı ve denetlenebilir
                veri operasyonları kuruyoruz. Bu teknoloji kombinasyonu sayesinde
                dijital ürünleriniz daha hızlı pazara çıkar, daha güvenli çalışır
                ve büyüme ile birlikte kesintisiz ölçeklenir.
              </p>
              <div className="local-scroll mb-70 mb-sm-50">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                    >
                      <span>Dönüşüm Yolculuğunu Başlatın</span>
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      href={`/iletisim${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                    >
                      <span>Dönüşüm Yolculuğunu Başlatın</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-5 col-xl-4 mb-md-70 mb-sm-50">
              <h2 className="section-title mb-40 mb-xs-30">
                Gemu Technology Blog
              </h2>
              <p className="section-descr dark-white mb-50 mb-sm-40">
                Modern mimari, AI, veri altyapısı ve dijital dönüşüm odaklı
                teknik içeriklerimizi keşfedin.
              </p>
              <div className="local-scroll">
                <Link
                  href={`/blog`}
                  className={`btn btn-mod  ${
                    dark ? "btn-dark" : "btn-w"
                  }  btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-link-alt" aria-hidden="true"></i>
                  </span>
                  <span data-btn-animate="y">
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">
                        Tüm İçerikleri Gör{" "}
                        <i className="mi-arrow-right" aria-hidden="true"></i>
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Tüm İçerikleri Gör{" "}
                        <i className="mi-arrow-right" aria-hidden="true"></i>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>{" "}
            <Blog />
          </div>
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <div className="bg-line-3 opacity-025 mb-n90 mb-lg-n70 mb-md-n60 mb-sm-n40">
          <Image
            src="/assets/images/demo-corporate/decoration-4.svg"
            width={1600}
            height={206}
            alt="resonance template image"
          />
        </div>
        {/* End Decorative Line */}
        <div className="container position-relative">
          <div className="row mb-80 mb-sm-60">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title mb-40 mb-xs-30">
                Geleceği Birlikte İnşa Edelim
              </h2>
              <p className="section-descr dark-white mb-0">
                Gemu Technology ile bir satış süreci değil, ölçeklenebilir bir dönüşüm
                ortaklığı başlatın. Hedeflerinizi birlikte netleştirelim ve
                kurumunuza en uygun teknoloji mimarisini stratejik olarak
                kurgulayalım.
              </p>
            </div>
          </div>{" "}
          <Contact />
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
    </>
  );
}
