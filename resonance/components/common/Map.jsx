"use client";

import { useState } from "react";
import { companyAddressEmbedUrl } from "@/data/contact";

export default function Map() {
  const [mapOpen, setMapOpen] = useState(false);
  return (
    <>
      <a href="#" className={`map-section ${mapOpen ? "js-active" : ""}`}>
        <div className="map-toggle wow fadeInUpShort" aria-hidden="true">
          <div className="mt-icon">
            <i className="mi-location"></i>
          </div>
          <div className="mt-text">
            <div onClick={() => setMapOpen((pre) => !pre)} className="mt-open">
              Haritayı aç <i className="mt-open-icon"></i>
            </div>
            <div onClick={() => setMapOpen((pre) => !pre)} className="mt-close">
              Haritayı kapat <i className="mt-close-icon"></i>
            </div>
          </div>
        </div>
      </a>

      <iframe
        src={companyAddressEmbedUrl}
        width={600}
        height={450}
        loading="lazy"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
        title="Gemu Technology ofis konumu"
      />
    </>
  );
}
