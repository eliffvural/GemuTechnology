export const products = [
  {
    slug: "parafoni",
    name: "Parafoni",
    badge: "Gemu Technology Ürünü",
    websiteUrl: "https://www.parafoni.com/",
    tagline: "Cashback ve kapalı devre dijital cüzdan platformu",
    description:
      "Parafoni; harcama, sadakat ve cashback deneyimini tek cüzdanda birleştiren, kapalı devre cüzdan altyapısı ve marka sadakat çözümleri sunan dijital finans ürünüdür. Gemu Technology tarafından geliştirilmiştir.",
    highlights: [
      "Kapalı devre cüzdan ve anlık cashback kurguları",
      "Parafoni Kart ile harcama ve bakiye yönetimi",
      "Marka, kategori ve harcama ağı entegrasyonu",
      "B2B altyapı ve sadakat paneli desteği",
    ],
    imageSrc: "/assets/images/gemu/products/parafoni-cover.png",
    imageWidth: 1200,
    imageHeight: 630,
    featureImageSrc: "/assets/images/gemu/products/parafoni-hero.png",
    featureImageWidth: 800,
    featureImageHeight: 1000,
  },
];

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}
