import { services2 } from "@/data/services";
import React from "react";
const ServiceItem = ({
  id,
  iconColorClass,
  path,
  title,
  text,
  categories,
  outcome,
  delay,
}) => (
  <div className="col-md-6 col-xl-3 d-flex align-items-stretch mt-30">
    <div
      className="alt-features-item consulting-service-card mt-0 w-100 wow fadeIn"
      data-wow-duration="1.2s"
      data-wow-delay={delay}
    >
      <div className="consulting-service-top">
        <div className={`services-8-icon ${iconColorClass}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d={path} />
          </svg>
        </div>
        <span>{String(id).padStart(2, "0")}</span>
      </div>
      <h3 className="alt-features-title mb-15 consulting-service-title">
        {title}
      </h3>
      <div className="alt-features-descr consulting-service-text">{text}</div>
      <div className="consulting-service-outcome">{outcome}</div>
      <div className="consulting-service-tags">
        {categories.map((category, index) => (
          <span
            key={index}
            className="services-8-category me-1 mb-1 d-inline-block"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  </div>
);
export default function Service() {
  return (
    <div className="container position-relative">
      <div className="row mt-n30 mb-100 mb-md-80 mb-sm-70">
        {services2.map((service) => (
          <ServiceItem key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}
