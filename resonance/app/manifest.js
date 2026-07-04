export default function manifest() {
  return {
    name: "Gemu Technology",
    short_name: "Gemu",
    description:
      "Manisa Teknokent merkezli yazılım hizmetleri, kurumsal web, mobil uygulama, süreç yazılımları, AI ve otomasyon çözümleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#176f86",
    lang: "tr",
    icons: [
      {
        src: "/assets/images/gemu/favicons/favicon-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/assets/images/gemu/favicons/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/assets/images/gemu/favicons/favicon-64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/assets/images/gemu/logo-large.png",
        sizes: "1054x1054",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
