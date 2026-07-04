export const companyPhone = "+90 (850) 123 45 67";
export const companyPhoneHref = "tel:+908501234567";
export const companyEmail = "info@gemutechnology.com";
export const companyEmailHref = "mailto:info@gemutechnology.com";

export const contactItems = [
  {
    iconClass: "mi-mobile",
    title: "Telefon",
    text: companyPhone,
    href: companyPhoneHref,
  },
  {
    iconClass: "mi-location",
    title: "Ofis",
    text: "Manisa Teknokent",
    link: {
      url: "https://www.google.com/maps/search/?api=1&query=Manisa%20Teknokent",
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
