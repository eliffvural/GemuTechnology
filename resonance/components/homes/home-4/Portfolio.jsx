import { features2 } from "@/data/features";
import { portfolios4 } from "@/data/portfolio";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Portfolio() {
  return (
    <>
      <div className="row mb-70 mb-sm-50">
        <div className="col-lg-6 col-xl-5 mb-md-40">
          <h2 className="section-title mb-40 mb-xs-30">Vaka Çalışmaları</h2>
          <p className="section-descr dark-white mb-0">
            Yazılım hizmetlerimizi ihtiyaç, çözüm ve ölçülebilir sonuç odağında
            ele alıyoruz. Her çalışma; ürün kapsamı, geliştirme süreci ve iş
            çıktısı birlikte düşünülerek planlanır.
          </p>
        </div>
        <div className="col-lg-6 offset-xl-1 d-flex align-items-end pb-10">
          {/* Features List */}
          <div className="row mt-n10">
            {/* Features List Item */}
            {features2.map((elm, i) => (
              <div key={i} className="col-sm-6 d-flex mt-10">
                <div className="features-list-icon features-list-color-1">
                  <i className="mi-check" />
                </div>
                <div className="features-list-text">{elm.text}</div>
              </div>
            ))}
            {/* End Features List Item */}

            {/* End Features List Item */}
          </div>
          {/* End Features List */}
        </div>
      </div>
      {/* Portfolio Grid */}
      <div className="row mt-n50 mt-sm-n40 mb-70 mb-sm-50">
        {/* Portfolio Item */}
        {portfolios4.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4 mt-50 mt-sm-40">
            <Link
              href={`/projeler/${item.slug}`}
              className="portfolio-5-link case-study-card"
            >
              <div className="portfolio-5-image">
                <div className="portfolio-5-image-bg wow scalexIn" />
                <div className="wow fadeIn" data-wow-delay="1s">
                  <Image
                    src={item.imageSrc}
                    width={660}
                    height={472}
                    alt="Portfolio Image"
                  />
                </div>
              </div>
              <div className="case-study-eyebrow">{item.eyebrow}</div>
              <h3 className="portfolio-5-title">
                <span>{item.title}</span>
              </h3>
              <p className="case-study-summary">{item.solution}</p>
              <div className="case-study-result">
                <strong>{item.number}</strong>
                <span>{item.description}</span>
              </div>
            </Link>
          </div>
        ))}
        {/* End Portfolio Item */}
      </div>
    </>
  );
}
