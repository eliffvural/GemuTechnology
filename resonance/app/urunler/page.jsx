import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import { corporateMultipage } from "@/data/menu";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ürünler",
  description:
    "Gemu Technology tarafından geliştirilen Parafoni dahil dijital ürünler ve çözüm platformları.",
};

export default function ProductsPage() {
  return (
    <div className="theme-corporate">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
          <Header4 links={corporateMultipage} />
        </nav>

        <main id="main">
          <section className="page-section bg-gradient-gray-light-1 overflow-hidden">
            <div className="container position-relative pt-10 pt-sm-40 text-center">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <h1 className="hs-title-9 mb-10">Ürünlerimiz</h1>
                  <p className="hs-descr mb-0">
                    Gemu Technology markası altında geliştirdiğimiz ürünler.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <div className="container position-relative">
              <div className="row mt-n30">
                {products.map((product) => (
                  <div key={product.slug} className="col-md-6 mt-30">
                    <Link
                      href={`/urunler/${product.slug}`}
                      className="gemu-product-card"
                    >
                      <div className="gemu-product-card-image">
                        <Image
                          src={product.featureImageSrc}
                          width={product.featureImageWidth}
                          height={product.featureImageHeight}
                          alt={product.name}
                          className="gemu-product-cover"
                        />
                      </div>
                      <div className="gemu-product-card-body">
                        <span>{product.badge}</span>
                        <h2>{product.name}</h2>
                        <p>{product.tagline}</p>
                      </div>
                    </Link>
                  </div>
                ))}
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
