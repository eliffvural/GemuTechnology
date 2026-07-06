import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const featured = products[0];

  return (
    <>
      <div className="row mb-70 mb-sm-50">
        <div className="col-lg-6 col-xl-5 mb-md-40">
          <h2 className="section-title mb-40 mb-xs-30">Ürünlerimiz</h2>
          <p className="section-descr dark-white mb-0">
            Gemu Technology olarak geliştirdiğimiz ürünler; finans, sadakat ve
            dijital deneyim alanlarında ölçeklenebilir çözümler sunar.
          </p>
        </div>
      </div>

      <div className="gemu-product-feature">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-6 gemu-product-image-col">
            <Link href={`/urunler/${featured.slug}`} className="gemu-product-image">
              <Image
                src={featured.featureImageSrc}
                width={featured.featureImageWidth}
                height={featured.featureImageHeight}
                alt={featured.name}
                className="gemu-product-cover"
                priority
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </Link>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="gemu-product-content">
              <div className="case-study-eyebrow">{featured.badge}</div>
              <h3>{featured.name}</h3>
              <p>{featured.description}</p>
              <ul className="gemu-product-highlights">
                {featured.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-30 d-flex flex-wrap gap-3">
                <a
                  href={featured.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mod btn-color btn-medium btn-round btn-hover-anim"
                >
                  <span>parafoni.com</span>
                </a>
                <Link
                  href={`/urunler/${featured.slug}`}
                  className="btn btn-mod btn-w btn-medium btn-round btn-hover-anim"
                >
                  <span>Detayları Gör</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
