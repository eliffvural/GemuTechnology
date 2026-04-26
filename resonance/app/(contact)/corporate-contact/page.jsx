import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";

const onePage = false;
const dark = false;
import Image from "next/image";
import { corporateMultipage } from "@/data/menu";
import Contact from "@/components/homes/home-4/Contact";
import Map from "@/components/common/Map";
import Faq from "@/components/common/Faq";

export const metadata = {
  title: "İletişim | Gemu Technology",
  description:
    "Projenizi birlikte planlamak için Gemu Technology ile iletişime geçin.",
};
export default function CorporateContactPage() {
  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header4 links={corporateMultipage} />
          </nav>

          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* Background Shape */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  className="opacity-05"
                  src="/assets/images/demo-corporate/bg-shape-1.svg"
                  alt=""
                  width={1443}
                  height={844}
                />
              </div>
              {/* End Background Shape */}
              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h1 className="hs-title-9 mb-10">
                      <span className="mark-decoration-3-wrap wow fadeInUp">
                        İletişim
                        <b
                          className="mark-decoration-3 wow scalexIn"
                          data-wow-delay="0.5s"
                        />
                      </span>
                    </h1>
                    <p
                      className="hs-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Hedeflerinizi konuşalım, doğru ürün yol haritasını birlikte oluşturalım.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="contact"
            >
              {/* End Decorative Line */}
              <div className="container position-relative">
                <div className="row mb-80 mb-sm-60">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <p className="section-descr dark-white mb-0">
                      Projenizin ihtiyaçlarını, teknik kapsamını ve teslimat planını
                      birlikte netleştirelim. İlk görüşmeden itibaren şeffaf,
                      ölçülebilir ve sonuç odaklı bir iş birliği süreci yürütüyoruz.
                    </p>
                  </div>
                </div>{" "}
                <Contact />
              </div>
            </section>

            <div className="google-map">
              <Map />
            </div>
            <section className="page-section">
              <div className="container position-relative">
                <div className="row position-relative">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h3 className="section-title text-center mb-80 mb-sm-60">
                      Sıkça Sorulan Sorular
                    </h3>

                    {/* <!-- Accordion --> */}
                    <Faq />
                    {/* <!-- End Accordion --> */}
                  </div>
                </div>
              </div>
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
          </main>
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
