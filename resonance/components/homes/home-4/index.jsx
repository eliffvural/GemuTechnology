import React from "react";

import Cta from "./Cta";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Steps from "./Steps";
import Testimonials from "./Testimonials";
import Blog from "../home-4/Blog";
import NewsLetter from "./NewsLetter";
import Contact from "./Contact";
import AnimateButton from "@/components/common/AnimateButton";
import Link from "next/link";
import Testimonials2 from "./Testimonials2";
import Image from "next/image";
export default function Home4({ onePage = false, dark = false }) {
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
                Ozel Yazilim Cozumlerinde Guvenilir Is Ortaginiz
              </h2>
              <p className="section-descr dark-white mb-0">
                Hazir paket yaklasimlari yerine, kurumunuzun is modeline tam uyum
                saglayan butik ve esnek cozum mimarileri tasarliyoruz. Fikirden
                urune uzanan tum surecte guvenlik, olceklenebilirlik ve kullanici
                deneyimini ayni standartta yoneterek uzun omurlu dijital urunler
                gelistiriyoruz.
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
                    <AnimateButton text={"Hizmetlerimizi Kesfedin"} />
                  </span>
                </a>
              </>
            ) : (
              <>
                <Link
                  href={`/corporate-about${dark ? "-dark" : ""}`}
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-favorite" />
                  </span>
                  <span data-btn-animate="y">
                    <AnimateButton text={"Yazilim Hizmetlerimizi Kesfedin"} />
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
                Dijital Donusum Yolculuguna Hazir misiniz?
              </h2>
              <p className="section-descr mb-50 mb-sm-40">
                Is hedeflerinizi teknik gerceklikle bulusturuyor, olceklenebilir
                bir urun yol haritasina donusturuyoruz. Dogru teknoloji
                kararlarini erken asamada alarak zamani, butceyi ve ekip
                verimliligini optimize ediyoruz.
              </p>
              <div className="local-scroll mb-70 mb-sm-50">
                {onePage ? (
                  <>
                    <a
                      href="#contact"
                      className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                    >
                      <span>Uzman Ekibimizle Iletisime Gecin</span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/corporate-contact${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                    >
                      <span>Uzman Ekiple Iletisime Gecin</span>
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
                Yazilim Hizmetlerimiz
              </h2>
              <p className="section-descr mb-0">
                Uctan uca hizmet modelimiz; modern mimari, yuksek performans ve
                olceklenebilirlik odaginda kurumlarin dijital buyume hedeflerini
                hizlandirir.
              </p>
            </div>
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
                Is hedeflerinizi teknik gereksinimlerle hizalayarak olceklenebilir
                urun yol haritalari olusturuyoruz. Ekiplerinize hizli teslimat,
                operasyonel sureklilik ve olculebilir is sonuclari kazandiriyoruz.
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
                    <AnimateButton text={"Stratejik Degerlendirme Talep Edin"} />
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/corporate-contact${dark ? "-dark" : ""}`}
                      className={`btn btn-mod ${
                        dark ? "btn-dark" : "btn-w"
                      } btn-with-icon btn-circle`}
                    >
                      <span className="btn-icon color-1">
                        <i className="mi-heart" />
                      </span>
                      <span data-btn-animate="y">
                        <AnimateButton text={"Stratejik Degerlendirme Talep Edin"} />
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
                    <AnimateButton text={"Musteri Basari Hikayelerini Inceleyin"} />
                  </span>
                </a>
              </>
            ) : (
              <>
                <Link
                  href={`/corporate-portfolio${dark ? "-dark" : ""}`}
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-link-alt" />
                  </span>
                  <span data-btn-animate="y">
                    <AnimateButton text={"Tum Projelerimizi Inceleyin"} />
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
                Teknoloji Tercihlerimizle Isinize Somut Deger Katiyoruz
              </h2>
              <p className="section-descr mb-50 mb-sm-40">
                Next.js ve React ile hizli, SEO guclu ve bakimi kolay arayuzler;
                Node.js ve TypeScript ile esnek, guvenilir servis katmanlari;
                Supabase ve PostgreSQL ile guvenli, gercek zamanli ve denetlenebilir
                veri operasyonlari kuruyoruz. Bu teknoloji kombinasyonu sayesinde
                dijital urunleriniz daha hizli pazara cikar, daha guvenli calisir
                ve buyume ile birlikte kesintisiz olceklenir.
              </p>
              <div className="local-scroll mb-70 mb-sm-50">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                    >
                      <span>Donusum Yolculugunu Baslatin</span>
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      href={`/corporate-contact${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                    >
                      <span>Donusum Yolculugunu Baslatin</span>
                    </Link>
                  </>
                )}
              </div>
              <p className="section-descr-small mb-0 opacity-09">
                Uctan uca cozum anlayisimizla yalnizca yazilim ureten bir ekip
                degil; hedeflerinizi sahiplenen, karar sureclerinize katilan ve
                buyume stratejinize eslik eden uzun vadeli bir teknoloji ortagi
                olarak konumlaniyoruz.
              </p>
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
                Modern mimari, AI, veri altyapisi ve dijital donusum odakli
                teknik iceriklerimizi kesfedin.
              </p>
              <div className="local-scroll">
                <Link
                  href={`/corporate-blog`}
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
                        Tum Icerikleri Gor{" "}
                        <i className="mi-arrow-right" aria-hidden="true"></i>
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Tum Icerikleri Gor{" "}
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
      <section className="container">
        <div
          className={`page-section px-4 px-md-0 ${
            dark
              ? "bg-dark-2 border-dark light-content"
              : "bg-gradient-primary-light-1"
          }  round`}
        >
          {dark && (
            <div className="position-absolute top-0 start-0 bottom-0 end-0 bg-gradient-primary-dark-1 opacity-01"></div>
          )}
          <NewsLetter />
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
                Gelecegi Birlikte Insa Edelim
              </h2>
              <p className="section-descr dark-white mb-0">
                Gemu Technology ile bir satis sureci degil, olceklenebilir bir donusum
                ortakligi baslatin. Hedeflerinizi birlikte netlestirelim ve
                kurumunuza en uygun teknoloji mimarisini stratejik olarak
                kurgulayalim.
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
