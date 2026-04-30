import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import { corporateMultipage } from "@/data/menu";
import { portfolios4 } from "@/data/portfolio";
import { getPublishedCaseStudy } from "@/lib/supabase/content";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const normalizeProject = (project, index = 0) => ({
  slug: project.slug || project.id || `proje-${index + 1}`,
  title: project.title,
  eyebrow: project.eyebrow || project.serviceType || "Yazılım projesi",
  industry: project.industry || "Kurumsal operasyonlar",
  problem:
    project.problem ||
    "Mevcut süreçlerdeki manuel iş yükü, veri dağınıklığı veya büyüme ihtiyacı yazılım çözümüyle ele alındı.",
  solution:
    project.solution ||
    project.content ||
    project.description ||
    "İhtiyaca uygun ürün kapsamı, geliştirme planı ve sürdürülebilir yazılım mimarisi birlikte kurgulandı.",
  result:
    project.result ||
    "Çalışan, yönetilebilir ve büyümeye hazır bir dijital ürün yapısı oluşturuldu.",
  number: project.number || project.resultMetric || "Net",
  description: project.description || "ölçülebilir iş çıktısı",
  imageUrl:
    project.imageUrl ||
    project.imageSrc ||
    `/assets/images/demo-corporate/portfolio/project-${(index % 3) + 1}-gemu.png`,
  tags: project.tags || [
    project.serviceType || "Yazılım geliştirme",
    "Ürün kapsamı",
    "Teslimat planı",
  ],
});

export function generateStaticParams() {
  return portfolios4.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const staticProject = portfolios4.find((project) => project.slug === slug);
  const project = staticProject || (await getPublishedCaseStudy(slug));

  if (!project) {
    return {
      title: "Proje Bulunamadı | Gemu Technology",
    };
  }

  return {
    title: `${project.title} | Gemu Technology`,
    description:
      project.description ||
      project.summary ||
      "Gemu Technology yazılım projesi vaka çalışması.",
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const staticProject = portfolios4.find((project) => project.slug === slug);
  const remoteProject = staticProject ? null : await getPublishedCaseStudy(slug);
  const project = staticProject || remoteProject;

  if (!project) {
    notFound();
  }

  const currentProject = normalizeProject(project);
  const relatedProjects = portfolios4
    .filter((item) => item.slug !== currentProject.slug)
    .slice(0, 2)
    .map(normalizeProject);

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
                  <div className="case-study-eyebrow mb-15">
                    {currentProject.eyebrow}
                  </div>
                  <h1 className="hs-title-9 mb-30">
                    {currentProject.title}
                  </h1>
                  <p className="hs-descr mb-0">
                    {currentProject.solution}
                  </p>
                </div>
                <div className="col-lg-3 offset-lg-1 mt-md-40">
                  <div className="project-detail-result-card">
                    <span>Sonuç</span>
                    <strong>{currentProject.number}</strong>
                    <p>{currentProject.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <div className="container position-relative">
              <div className="project-detail-image mb-70 mb-sm-40">
                <Image
                  src={currentProject.imageUrl}
                  width={1320}
                  height={760}
                  alt={currentProject.title}
                />
              </div>

              <div className="row">
                <div className="col-lg-4 mb-md-40">
                  <div className="project-detail-side">
                    <div>
                      <span>Sektör</span>
                      <strong>{currentProject.industry}</strong>
                    </div>
                    <div>
                      <span>Hizmet</span>
                      <strong>{currentProject.eyebrow}</strong>
                    </div>
                    <div className="case-study-tags">
                      {currentProject.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 offset-lg-1">
                  <div className="project-detail-section">
                    <span>İhtiyaç</span>
                    <p>{currentProject.problem}</p>
                  </div>
                  <div className="project-detail-section">
                    <span>Çözüm</span>
                    <p>{currentProject.solution}</p>
                  </div>
                  <div className="project-detail-section">
                    <span>Sonuç</span>
                    <p>{currentProject.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section bg-gray-light-1">
            <div className="container position-relative">
              <div className="row mb-40">
                <div className="col-lg-8">
                  <h2 className="section-title-small mb-10">
                    Diğer Vaka Çalışmaları
                  </h2>
                  <p className="section-descr-small mb-0">
                    Benzer yazılım projelerinde ihtiyaç, çözüm ve iş çıktısını
                    nasıl ele aldığımızı inceleyin.
                  </p>
                </div>
              </div>
              <div className="row mt-n30">
                {relatedProjects.map((item) => (
                  <div key={item.slug} className="col-md-6 mt-30">
                    <Link
                      href={`/projeler/${item.slug}`}
                      className="case-study-detail-card"
                    >
                      <div className="case-study-detail-top">
                        <span>{item.eyebrow}</span>
                        <strong>{item.number}</strong>
                      </div>
                      <h3>{item.title}</h3>
                      <div className="case-study-detail-block">
                        <span>Çözüm</span>
                        <p>{item.solution}</p>
                      </div>
                      <div className="case-study-detail-result">
                        {item.description}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-50 text-center">
                <Link
                  href="/projeler"
                  className="btn btn-mod btn-w btn-with-icon btn-circle"
                >
                  <span className="btn-icon color-1">
                    <i className="mi-arrow-left" aria-hidden="true" />
                  </span>
                  <span>Tüm Projelere Dön</span>
                </Link>
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
