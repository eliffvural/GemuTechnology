export const companyPhone = "+90 531 360 45 34";
export const companyPhoneHref = "tel:+905313604534";
export const companyEmail = "info@gemutechnology.com";
export const companyEmailHref = "mailto:info@gemutechnology.com";
export const companyAddress =
  "Muradiye Mah. Celal Bayar Üniversitesi Kampüsü Küme Evler Tekno Kent No: 22 Yunusemre/Manisa";
export const companyAddressMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Muradiye+Mah.+Celal+Bayar+%C3%9Cniversitesi+Teknokent+No+22+Yunusemre+Manisa";
export const companyAddressEmbedUrl =
  "https://maps.google.com/maps?q=Muradiye+Mah.+Celal+Bayar+%C3%9Cniversitesi+Kamp%C3%BCs%C3%BC+Teknokent+No+22+Yunusemre+Manisa&z=16&output=embed";

export const contactItems = [
  {
    iconClass: "mi-mobile",
    title: "Telefon",
    text: companyPhone,
    href: companyPhoneHref,
  },
  {
    iconClass: "mi-location",
    title: "Adres",
    text: companyAddress,
    link: {
      url: companyAddressMapUrl,
      text: "Haritada Gör",
      rel: "nofollow noopener",
      target: "_blank",
    },
  },
  {
    iconClass: "mi-email",
    title: "E-posta",
    text: companyEmail,
    link: {
      url: companyEmailHref,
      text: "E-posta Gönder",
    },
  },
];
