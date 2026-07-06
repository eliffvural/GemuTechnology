import "swiper/css";
import "../public/assets/css/styles.css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";

import "photoswipe/dist/photoswipe.css";
import "tippy.js/dist/tippy.css";
import AppBootstrap from "@/components/common/AppBootstrap";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gemutechnology.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gemu Technology | Yazılım Hizmetleri ve Dijital Çözümler",
    template: "%s | Gemu Technology",
  },
  description:
    "Gemu Technology; Manisa Teknokent merkezli kurumsal web, mobil uygulama, kurumsal süreç yazılımları, AI ve otomasyon çözümleri geliştiren yazılım şirketidir.",
  applicationName: "Gemu Technology",
  keywords: [
    "Gemu Technology",
    "Manisa yazılım şirketi",
    "Manisa Teknokent yazılım",
    "kurumsal web geliştirme",
    "kurumsal süreç yazılımı",
    "mobil uygulama geliştirme",
    "AI otomasyon",
    "teknik danışmanlık",
    "Parafoni",
    "cashback cüzdan",
  ],
  authors: [{ name: "Gemu Technology" }],
  creator: "Gemu Technology",
  publisher: "Gemu Technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Gemu Technology",
    title: "Gemu Technology | Yazılım Hizmetleri ve Dijital Çözümler",
    description:
      "Kurumsal web, mobil uygulama, süreç yazılımları, AI ve otomasyon hizmetleriyle fikrinizi çalışan dijital ürüne dönüştürüyoruz.",
    images: [
      {
        url: "/assets/images/gemu/logo-horizontal-english.png",
        width: 1693,
        height: 571,
        alt: "Gemu Technology logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemu Technology | Yazılım Hizmetleri",
    description:
      "Manisa Teknokent merkezli yazılım hizmetleri, kurumsal web, mobil uygulama, süreç yazılımları, AI ve otomasyon çözümleri.",
    images: ["/assets/images/gemu/logo-horizontal-english.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  other: {
    "geo.region": "TR-45",
    "geo.placename": "Yunusemre, Manisa",
    "geo.position": "38.6191;27.4289",
    ICBM: "38.6191, 27.4289",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#176f86",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gemu Technology",
  url: siteUrl,
  logo: `${siteUrl}/assets/images/gemu/logo-horizontal-english.png`,
  image: `${siteUrl}/assets/images/demo-corporate/hs-image-2-gemu.png`,
  email: "info@gemutechnology.com",
  telephone: "+90 850 123 45 67",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Muradiye Mah. Celal Bayar Üniversitesi Kampüsü Küme Evler Tekno Kent No: 22",
    addressLocality: "Yunusemre",
    addressRegion: "Manisa",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.6191,
    longitude: 27.4289,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Manisa" },
    { "@type": "Country", name: "Türkiye" },
  ],
  knowsAbout: [
    "Kurumsal web geliştirme",
    "Kurumsal süreç yazılımı geliştirme",
    "Mobil uygulama geliştirme",
    "AI ve otomasyon",
    "Teknik danışmanlık",
  ],
  sameAs: [],
};

export default function RootLayout({ children }) {

  return (
    <html lang="tr" className="no-mobile no-touch ">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/gemu/favicons/favicon-16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/gemu/favicons/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/assets/images/gemu/favicons/favicon-64.png"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/images/gemu/favicons/favicon-64.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="appear-animate body">
        <AppBootstrap>{children}</AppBootstrap>
      </body>
    </html>
  );
}
