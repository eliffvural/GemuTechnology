import { companyPhone, companyPhoneHref } from "@/data/contact";

export default function ProjectRequestForm() {
  return (
    <div className="px-4 px-sm-5 py-5">
      <h3 className="section-title-small mt-n10 mb-20">
        Projenizi telefonda konuşalım
      </h3>
      <p className="section-descr dark-white mb-30">
        Hizmet türü, bütçe ve zamanlama gibi detayları form doldurmadan
        doğrudan bizimle paylaşabilirsiniz. Ekibimiz ihtiyacınızı dinleyip net
        bir yol haritası sunar.
      </p>

      <div className="mb-30">
        <div className="h3 mb-10">{companyPhone}</div>
        <p className="mb-0 opacity-08">
          Kurumsal web, mobil uygulama, süreç yazılımları ve AI projeleri için
          bizi arayın.
        </p>
      </div>

      <a
        href={companyPhoneHref}
        className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
      >
        <span>
          <i className="mi-mobile me-2" aria-hidden="true" />
          Proje İçin Ara
        </span>
      </a>
    </div>
  );
}
