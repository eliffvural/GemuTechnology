const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gemutechnology.com";

const routes = [
  "",
  "/hakkimizda",
  "/hizmetler",
  "/urunler",
  "/urunler/parafoni",
  "/projeler",
  "/projeler/b2b-siparis-portali",
  "/projeler/mobil-saha-uygulamasi",
  "/projeler/ai-destekli-destek-sistemi",
  "/projeler/kurumsal-ai-agent-platformu",
  "/projeler/sesli-yapay-zeka-asistani",
  "/projeler/akilli-dokuman-rag-sistemi",
  "/projeler/kurumsal-ik-portali",
  "/projeler/envanter-ve-stok-takip-sistemi",
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
