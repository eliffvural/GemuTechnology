import { companyPhone, companyPhoneHref } from "@/data/contact";

export default function ProjectRequestForm() {
  return (
    <div className="px-4 px-sm-5 py-5 text-center text-md-start">
      <h3 className="section-title-small mt-n10 mb-20">İletişime geçin</h3>
      <p className="section-descr dark-white mb-30">
        Hizmetlerimiz ve proje kapsamı hakkında bilgi almak için bize
        ulaşabilirsiniz.
      </p>
      <a href={companyPhoneHref} className="h4 d-inline-block mb-0">
        {companyPhone}
      </a>
    </div>
  );
}
