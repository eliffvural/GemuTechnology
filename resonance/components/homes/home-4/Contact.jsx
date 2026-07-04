import { companyPhone, companyPhoneHref, contactItems } from "@/data/contact";
import React from "react";

export default function Contact() {
  return (
    <div className="row wow fadeInUp">
      <div className="col-lg-5 mb-md-50 mb-sm-30 d-flex align-items-strech">
        <div
          className="gemu-contact-info-card bg-image bg-scroll light-content w-100 round overflow-hidden px-4 px-sm-5 py-5"
          style={{
            backgroundImage:
              "url(/assets/images/demo-corporate/section-bg-4-gemu.png)",
          }}
        >
          {contactItems.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`contact-item ${
                  index !== contactItems.length - 1 ? "mb-40 mb-sm-20" : ""
                }`}
              >
                <div className="ci-icon">
                  <i className={item.iconClass} />
                </div>
                <h4 className="ci-title">{item.title}</h4>
                <div className="ci-text large">{item.text}</div>
                <div className="ci-link">
                  <a
                    href={item.link.url}
                    target={item.link.target}
                    rel={item.link.rel}
                  >
                    {item.link.text}
                  </a>
                </div>
              </div>
              {index !== contactItems.length - 1 && (
                <hr className="mt-0 mb-40 mb-sm-20 opacity-02" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="col-lg-7 d-flex align-items-strech">
        <div className="border-color-primary-1 round w-100 px-4 px-sm-5 py-5 compact-contact-panel d-flex flex-column justify-content-center">
          <h3 className="section-title-small mt-n10 mb-20">
            Projenizi birlikte değerlendirelim
          </h3>
          <p className="section-descr dark-white mb-40 mb-sm-30">
            İletişim formu yerine doğrudan bizi arayın. Proje kapsamını,
            ihtiyaçlarınızı ve zaman planınızı telefonda birlikte netleştirelim.
          </p>

          <div className="mb-30">
            <div className="ci-icon mb-20">
              <i className="mi-mobile size-32" />
            </div>
            <div className="h2 mb-10">{companyPhone}</div>
            <p className="mb-0 opacity-08">
              Hafta içi 09:00 – 18:00 arasında ulaşabilirsiniz.
            </p>
          </div>

          <div className="local-scroll">
            <a
              href={companyPhoneHref}
              className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
            >
              <span>
                <i className="mi-mobile me-2" aria-hidden="true" />
                Hemen Ara
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
