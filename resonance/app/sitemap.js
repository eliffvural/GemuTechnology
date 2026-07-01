const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gemutechnology.com";

const routes = [
  "",
  "/hakkimizda",
  "/hizmetler",
  "/projeler",
  "/projeler/b2b-siparis-portali",
  "/projeler/mobil-saha-uygulamasi",
  "/projeler/ai-destekli-destek-sistemi",
  "/blog",
  "/iletisim",
  "/kvkk-aydinlatma-metni",
  "/acik-riza-metni",
  "/gizlilik-politikasi",
  "/cerez-politikasi",
  "/hizmet-sartlari",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/projeler/") ? 0.7 : 0.8,
  }));
}
