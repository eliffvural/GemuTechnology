import { services2 } from "@/data/services";
import React from "react";
const ServiceItem = ({
  iconColorClass,
  path,
  title,
  text,
  categories,
  delay,
}) => (
  <div className="col-md-6 col-xl-3 d-flex align-items-stretch mt-30">
    <div
      className="alt-features-item box-shadow mt-0 w-100 wow fadeIn"
      data-wow-duration="1.2s"
      data-wow-delay={delay}
    >
      <div className={`services-8-icon ${iconColorClass} mb-30`}>
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
      <h3 className="alt-features-title mb-15">{title}</h3>
      <div className="alt-features-descr mb-25">{text}</div>
      <div>
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
