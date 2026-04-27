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
  <div
    className="consulting-flow-step wow fadeIn"
    data-wow-duration="1.2s"
    data-wow-delay={delay}
  >
    <div className="consulting-flow-marker">
      <span>{String(id).padStart(2, "0")}</span>
    </div>
    <div className={`consulting-flow-icon ${iconColorClass}`}>
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
    <div className="consulting-flow-content">
      <div className="consulting-flow-main">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="consulting-flow-side">
        <strong>{outcome}</strong>
        <div>
        {categories.map((category, index) => (
          <span key={index}>
            {category}
          </span>
        ))}
        </div>
      </div>
    </div>
  </div>
);
export default function Service() {
  return (
    <div className="container position-relative">
      <div className="consulting-flow mb-100 mb-md-80 mb-sm-70">
        <div className="consulting-flow-label">
          <span>Danışmanlık akışı</span>
          <strong>İhtiyaçtan sürdürülebilir çözüme</strong>
        </div>
        <div className="consulting-flow-line" aria-hidden="true" />
        {services2.map((service) => (
          <ServiceItem key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}
