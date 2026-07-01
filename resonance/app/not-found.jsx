import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import { corporateMultipage } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa bulunamadı. Gemu Technology ana sayfasına dönebilirsiniz.",
};

export default function NotFoundPage() {
  return (
    <div className="theme-corporate">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
          <Header4 links={corporateMultipage} />
        </nav>

        <main id="main">
          <section className="page-section bg-gradient-gray-light-1 overflow-hidden min-height-100vh d-flex align-items-center">
            <div className="bg-shape-1 wow fadeIn">
              <Image
                className="opacity-05"
                src="/assets/images/demo-corporate/bg-shape-1.svg"
                alt=""
                width={1443}
                height={844}
              />
            </div>
            <div className="container position-relative text-center">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="section-caption mb-20">404</div>
                  <h1 className="hs-title-9 mb-30">Sayfa bulunamadı</h1>
                  <p className="section-descr mb-40">
                    Aradığınız bağlantı taşınmış, kaldırılmış veya hatalı yazılmış
                    olabilir. Ana sayfadan devam edebilir ya da bizimle iletişime
                    geçebilirsiniz.
                  </p>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <Link
                      href="/"
                      className="btn btn-mod btn-color btn-medium btn-round btn-hover-anim"
                    >
                      <span>Ana Sayfaya Dön</span>
                    </Link>
                    <Link
                      href="/iletisim"
                      className="btn btn-mod btn-w btn-medium btn-round btn-hover-anim"
                    >
                      <span>İletişime Geç</span>
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
