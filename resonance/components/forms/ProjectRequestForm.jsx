"use client";

import { useState } from "react";

const serviceOptions = [
  "Kurumsal Web Sistemi",
  "Backend ve API",
  "Mobil Uygulama",
  "AI ve Otomasyon",
  "Modernizasyon ve Bakım",
];

const budgetOptions = [
  "Henüz net değil",
  "100.000 TL altı",
  "100.000 TL - 250.000 TL",
  "250.000 TL - 500.000 TL",
  "500.000 TL üzeri",
];

const timelineOptions = [
  "Henüz net değil",
  "1 ay içinde",
  "1-3 ay",
  "3-6 ay",
  "6 ay üzeri",
];

export default function ProjectRequestForm() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(event.currentTarget);
    const payload = {
      company_name: formData.get("company_name"),
      contact_name: formData.get("contact_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service_type: formData.get("service_type"),
      budget_range: formData.get("budget_range"),
      timeline: formData.get("timeline"),
      description: formData.get("description"),
      source_page:
        typeof window !== "undefined" ? window.location.pathname : "services",
    };

    try {
      const response = await fetch("/api/project-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      event.currentTarget.reset();
      setStatus({ type: "success", message: result.message });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Proje talebi gönderilemedi. Lütfen daha sonra tekrar deneyin.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form contact-form gemu-soft-form">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="project_company_name">Şirket Adı</label>
            <input
              type="text"
              id="project_company_name"
              name="company_name"
              className="input-lg round form-control"
              placeholder="Şirket adınızı yazın"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="project_contact_name">Ad Soyad</label>
            <input
              type="text"
              id="project_contact_name"
              name="contact_name"
              className="input-lg round form-control"
              placeholder="Adınızı ve soyadınızı yazın"
              required
              minLength={3}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="project_email">E-posta</label>
            <input
              type="email"
              id="project_email"
              name="email"
              className="input-lg round form-control"
              placeholder="E-posta adresiniz"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="project_phone">Telefon</label>
            <input
              type="tel"
              id="project_phone"
              name="phone"
              className="input-lg round form-control"
              placeholder="Telefon numaranız"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="project_service_type">Hizmet Türü</label>
            <select
              id="project_service_type"
              name="service_type"
              className="input-lg round form-control"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Seçiniz
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="project_budget_range">Bütçe Aralığı</label>
            <select
              id="project_budget_range"
              name="budget_range"
              className="input-lg round form-control"
              defaultValue="Henüz net değil"
            >
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="project_timeline">Zamanlama</label>
            <select
              id="project_timeline"
              name="timeline"
              className="input-lg round form-control"
              defaultValue="Henüz net değil"
            >
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="project_description">Proje Özeti</label>
        <textarea
          id="project_description"
          name="description"
          className="input-lg round form-control contact-message-field"
          placeholder="İhtiyacınızı, hedefinizi ve varsa mevcut sisteminizi kısaca anlatın"
          required
          minLength={10}
        />
      </div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <div className="form-tip w-100 pt-3">
            <i className="icon-info size-16" />
            Talebiniz Supabase veritabanına kaydedilir ve değerlendirme için
            takip edilir.
          </div>
        </div>
        <div className="col-md-5 mt-sm-20">
          <div className="pt-3 text-md-end">
            <button
              type="submit"
              className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
              disabled={isSubmitting}
            >
              <span>
                {isSubmitting ? "Gönderiliyor..." : "Proje Talebi Gönder"}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        role="region"
        aria-live="polite"
        aria-atomic="true"
        className={`mt-20 ${
          status.type === "success"
            ? "text-success"
            : status.type === "error"
              ? "text-danger"
              : ""
        }`}
      >
        {status.message}
      </div>
    </form>
  );
}
