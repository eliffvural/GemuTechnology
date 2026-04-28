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
  const deliveryModels = [
    {
      label: "Keşif ve Yol Haritası",
      title: "Ürün kapsamını netleştiririz",
      text: "Hedefleri, öncelikleri ve teknik riskleri kısa bir yol haritasına dönüştürürüz.",
    },
    {
      label: "MVP ve Ürün Geliştirme",
      title: "İlk sürümü kontrollü çıkarırız",
      text: "Öncelikli özellikleri sprint ritmiyle geliştirir, ürünü büyümeye hazır kurarız.",
    },
    {
      label: "Modernizasyon ve Ölçekleme",
      title: "Mevcut sistemi güçlendiririz",
      text: "Performans, güvenlik ve bakım kolaylığı için sistemi sadeleştirip ölçekleriz.",
    },
  ];

  const technologyStack = [
    {
      title: "Deneyim",
      text: "Kullanıcıların kolay anlayacağı, hızlı ve güven veren dijital yüzler.",
      items: ["Sade kullanım", "Marka uyumu", "Dönüşüm odağı"],
    },
    {
      title: "Süreç",
      text: "Ekiplerin daha düzenli çalışmasını sağlayan yönetilebilir iş akışları.",
      items: ["İş takibi", "Rol yönetimi", "Onay süreçleri"],
    },
    {
      title: "Veri",
      text: "Karar almayı kolaylaştıran düzenli bilgi yapısı ve raporlama zemini.",
      items: ["Düzenli kayıt", "Güvenli erişim", "Raporlama"],
    },
    {
      title: "Otomasyon",
      text: "Tekrarlanan işleri azaltan, ekiplere zaman kazandıran akıllı çözümler.",
      items: ["Zaman tasarrufu", "Karar desteği", "İş yükü azaltma"],
    },
  ];

  const businessOutcomes = [
    "Daha hızlı pazara çıkış ve kontrollü MVP süreci",
    "Güvenli veri erişimi, rol yönetimi ve denetlenebilir altyapı",
    "Tekrarlı operasyonların otomasyonla azaltılması",
    "Bakımı kolay, ölçeklenebilir ve ölçülebilir ürün mimarisi",
  ];

  const expertiseData = [
    {
      label: "Teknokent Ar-Ge",
      text: "Ürüne dönüşebilir fikirleri teknik fizibilite ve yol haritasıyla netleştiririz.",
      icon: "mi-compass",
    },
    {
      label: "Yazılım Mimarisi",
      text: "Ürününüz için doğru yapı, veri modeli ve geliştirme yaklaşımını belirleriz.",
      icon: "mi-message",
    },
    {
      label: "Ürün Geliştirme",
      text: "Web, mobil, backend ve veri katmanlarını tek ürün mimarisi altında toplarız.",
      icon: "mi-layers",
    },
    {
      label: "AI ve Otomasyon",
      text: "Operasyonel süreçlere akıllı iş akışlarıyla verimlilik katarız.",
      icon: "mi-settings",
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
        <div className="container position-relative pt-30 pt-md-20 pt-sm-10">
          <div className="row mb-90 mb-md-70 mb-sm-60">
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
            "url(/assets/images/demo-corporate/section-bg-1-gemu.png)",
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
                İhtiyacınızı birlikte anlar, doğru öncelikleri belirler ve işinize
                uygun yazılım çözümünü geliştiririz. Danışmanlık desteğini keşif,
                mimari karar ve yol haritası aşamalarında kullanır; odağımızı
                çalışan, sürdürülebilir ve büyümeye hazır ürün tesliminde tutarız.
              </p>
            </div>
          </div>
        </div>
        <Service />
        {/* End Services Grid */}
        <div className="container position-relative pt-30 pt-md-10 mb-100 mb-md-80 mb-sm-70">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
              <h3 className="section-title mb-30">
                Teknokent odağında yazılım ve Ar-Ge
              </h3>
              <p className="text-gray mb-30">
                Gemu Technology olarak Ar-Ge kültürünü pratik ürün geliştirme
                disipliniyle birleştiriyoruz. Kurumlara web, mobil, backend,
                veri ve otomasyon katmanlarında yazılım hizmetleri sunuyor;
                danışmanlık desteğini doğru kapsam, doğru mimari ve doğru
                teknoloji seçimi için sürecin içine yerleştiriyoruz.
              </p>
              <div className="expertise-pill-row">
                <span>Teknokent şirketi</span>
                <span>Ar-Ge yaklaşımı</span>
                <span>Yazılım teslimi</span>
              </div>
            </div>
            <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
              <div className="expertise-motion-wrap">
                <div className="expertise-motion-center">
                  <span>Gemu Technology</span>
                  <strong>Ar-Ge destekli yazılım geliştirme ekosistemi</strong>
                </div>
                <div className="expertise-motion-grid">
                  {expertiseData.map((elm, i) => (
                    <div
                      key={i}
                      className="expertise-motion-card"
                      style={{ animationDelay: `${i * 0.18}s` }}
                    >
                      <div className="expertise-motion-icon">
                        <i className={elm.icon} aria-hidden="true" />
                      </div>
                      <div>
                        <h4>{elm.label}</h4>
                        <p>{elm.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
                Fikrinizi, ihtiyacınızı ya da mevcut sürecinizi birlikte
                değerlendirelim. Size en uygun çalışma kapsamını, öncelikleri ve
                uygulanabilir yol haritasını netleştirelim.
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
        className={`page-section ${
          dark ? "bg-dark-2 light-content" : "bg-gradient-gray-light-1"
        }`}
      >
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title mb-30 mb-xs-20">
                İş hedefinize göre esnek teslimat modeli
              </h2>
              <p className="section-descr dark-white mb-0">
                Kapsamı sadeleştirir, uygulama kararlarını iş önceliğine bağlar ve
                düzenli teslimat ritmi kurarız.
              </p>
            </div>
          </div>
          <div className="row mt-n30">
            {deliveryModels.map((item, i) => (
              <div key={i} className="col-md-4 d-flex align-items-stretch mt-30">
                <div className="alt-features-item box-shadow mt-0 w-100">
                  <div className="section-caption mb-15">{item.label}</div>
                  <h3 className="alt-features-title mb-20">{item.title}</h3>
                  <div className="alt-features-descr">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className={`page-section ${
          dark ? "bg-dark-1 light-content" : "bg-gradient-gray-light-1"
        }`}
      >
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-md-50">
              <h2 className="section-title mb-40 mb-xs-30">
                Doğru plan, sürdürülebilir ürün
              </h2>
              <p className="section-descr dark-white mb-40 mb-sm-30">
                Ürün kararlarını yalnızca bugünkü ihtiyaca göre değil; bakım,
                güvenlik, ekip kullanımı ve büyüme dönemleri için birlikte
                değerlendiriyoruz.
              </p>
              <div className="row mt-n10">
                {businessOutcomes.map((item, i) => (
                  <div key={i} className="col-12 d-flex mt-10">
                    <div className="features-list-icon features-list-color-1">
                      <i className="mi-check" />
                    </div>
                    <div className="features-list-text">{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row mt-n30">
                {technologyStack.map((group, i) => (
                  <div key={i} className="col-sm-6 d-flex align-items-stretch mt-30">
                    <div className="alt-features-item box-shadow mt-0 w-100">
                      <div className="section-caption mb-15">
                        Katman {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="alt-features-title mb-15">{group.title}</h3>
                      <div className="alt-features-descr mb-20">
                        {group.text}
                      </div>
                      <div className="section-caption mb-0">
                        {group.items.join(" / ")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
            "url(/assets/images/demo-corporate/section-bg-2-gemu.png)",
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
            "url(/assets/images/demo-corporate/section-bg-3-gemu.png)",
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
                İşinize Somut Değer Katan Dijital Yol Haritası
              </h2>
              <p className="section-descr mb-50 mb-sm-40">
                İhtiyacınızı dinleyip öncelikleri netleştiriyor, uygulanabilir
                adımlarla ilerleyen bir dijital dönüşüm planı oluşturuyoruz.
                Böylece ürününüz daha kontrollü yayına alınır, ekipleriniz daha
                düzenli çalışır ve büyüme dönemlerinde sisteminiz daha hazırlıklı
                olur.
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
                Dijital ürün, yazılım geliştirme, otomasyon ve dönüşüm odaklı
                içeriklerimizi keşfedin.
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
                Gemu Technology ile ihtiyaçlarınıza uygun bir yazılım geliştirme
                süreci başlatın. Hedeflerinizi birlikte netleştirelim, kapsamı
                sadeleştirelim ve kurumunuza uygun dijital ürünü adım adım
                geliştirelim.
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
