import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import { corporateMultipage } from "@/data/menu";
import { getProduct, products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Ürün Bulunamadı" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="theme-corporate">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
          <Header4 links={corporateMultipage} />
        </nav>

        <main id="main">
          <section className="page-section bg-gradient-gray-light-1 overflow-hidden">
            <div className="container position-relative pt-10 pt-sm-40">
              <div className="row align-items-end">
                <div className="col-lg-8">
                  <div className="case-study-eyebrow mb-15">{product.badge}</div>
                  <h1 className="hs-title-9 mb-20">{product.name}</h1>
                  <p className="hs-descr mb-0">{product.tagline}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <div className="container position-relative">
              <div className="project-detail-image mb-70 mb-sm-40">
                <Image
                  src={product.imageSrc}
                  width={product.imageWidth}
                  height={product.imageHeight}
                  alt={product.name}
                  className="gemu-product-cover"
                />
              </div>

              <div className="row">
                <div className="col-lg-7">
                  <p className="section-descr dark-white mb-40">{product.description}</p>
                  <ul className="gemu-product-highlights gemu-product-highlights-page">
                    {product.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-4 offset-lg-1">
                  <div className="project-detail-side">
                    <div>
                      <span>Marka</span>
                      <strong>Gemu Technology</strong>
                    </div>
                    <div>
                      <span>Ürün</span>
                      <strong>{product.name}</strong>
                    </div>
                    <div>
                      <span>Web sitesi</span>
                      <strong>
                        <a
                          href={product.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          parafoni.com
                        </a>
                      </strong>
                    </div>
                  </div>
                  <div className="mt-30 d-grid gap-3">
                    <a
                      href={product.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-mod btn-color btn-medium btn-round btn-hover-anim w-100 text-center"
                    >
                      <span>Parafoni&apos;yi Ziyaret Et</span>
                    </a>
                    <Link
                      href="/iletisim"
                      className="btn btn-mod btn-w btn-medium btn-round btn-hover-anim w-100 text-center"
                    >
                      <span>İletişime Geçin</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer-2 pb-50">
          <Footer4 />
        </footer>
      </div>
    </div>
  );
}
