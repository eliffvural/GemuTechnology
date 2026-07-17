"use client";
import React from "react";
import { companyAddress } from "@/data/contact";
import Image from "next/image";
import Link from "next/link";

export default function Footer4() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <div className="container position-relative">
      {/* Back to Top Link */}
      <div
        className="local-scroll position-relative z-index-1"
        onClick={scrollToTop}
      >
        <a
          href="#top"
          className="link-to-top color position-absolute top-0 end-0 translate-middle-y"
        >
          <i className="mi-arrow-up size-24" />
          <span className="visually-hidden">Scroll to top</span>
        </a>
      </div>
      {/* End Back to Top Link */}
      <div className="page-section pb-50">
        <div className="row">
          <div className="col-lg-4 mb-md-50">
            <Image
              src="/assets/images/gemu/logo-horizontal-english.png"
              alt="Gemu Technology"
              width={1693}
              height={571}
              className="gemu-footer-logo mb-20"
            />
            <p className="mb-25">
              Kurumlara özel yazılım, modern ürün mimarisi ve ölçeklenebilir dijital
              dönüşüm çözümleri sunuyoruz.
            </p>
            <div className="local-scroll">
              <Link
                href="/iletisim"
                className="btn btn-mod btn-color btn-small btn-round btn-hover-anim"
              >
                <span>Projenizi Konuşalım</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-4 mb-sm-40">
                <h4 className="fw-title mb-20">Kurumsal</h4>
                <ul className="fw-menu clearlist local-scroll">
                  <li>
                    <Link href="/">Ana Sayfa</Link>
                  </li>
                  <li>
                    <Link href="/hakkimizda">Hakkımızda</Link>
                  </li>
                  <li>
                    <Link href="/hizmetler">Hizmetler</Link>
                  </li>
                  <li>
                    <Link href="/urunler">Ürünler</Link>
                  </li>
                  <li>
                    <Link href="/projeler">Projeler</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-sm-40">
                <h4 className="fw-title mb-20">Yasal</h4>
                <ul className="fw-menu clearlist">
                  <li>
                    <Link href="/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</Link>
                  </li>
                  <li>
                    <Link href="/acik-riza-metni">Açık Rıza Metni</Link>
                  </li>
                  <li>
                    <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>
                  </li>
                  <li>
                    <Link href="/cerez-politikasi">Çerez Politikası</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="fw-title mb-20">İletişim</h4>
                <ul className="fw-menu clearlist">
                  <li>
                    <a href="tel:+905313604534">+90 531 360 45 34</a>
                  </li>
                  <li>
                    <a href="mailto:info@gemutechnology.com">info@gemutechnology.com</a>
                  </li>
                  <li>{companyAddress}</li>
                  <li>
                    <Link href="/iletisim">İletişim</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gemu-footer-bottom">
        <div className="gemu-footer-bottom-main">
          <span className="gemu-footer-copy">
            © {new Date().getFullYear()} Gemu Technology. Tüm hakları saklıdır.
          </span>
          <Link href="/hizmet-sartlari" className="gemu-footer-legal link-hover-anim">
            Mesafeli Satış ve Hizmet Şartları
          </Link>
        </div>
      </div>
    </div>
  );
}
