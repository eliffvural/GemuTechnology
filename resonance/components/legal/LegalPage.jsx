import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import { corporateMultipage } from "@/data/menu";

export default function LegalPage({ page }) {
  return (
    <div className="theme-corporate">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
          <Header4 links={corporateMultipage} />
        </nav>

        <main id="main">
          <section className="page-section bg-gradient-gray-light-1">
            <div className="container position-relative pt-10 pt-sm-40 text-center">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <h1 className="hs-title-9 mb-20">{page.title}</h1>
                  <p className="section-descr-small mb-0">
                    Son güncelleme: {page.updatedAt}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <div className="container position-relative">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="legal-content">
                    <p className="section-descr mb-50">{page.description}</p>
                    {page.sections.map((section) => (
                      <section key={section.title} className="mb-40">
                        <h2 className="section-title-small mb-15">
                          {section.title}
                        </h2>
                        <p className="mb-0">{section.text}</p>
                      </section>
                    ))}
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
