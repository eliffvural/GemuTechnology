import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDir = join(
  root,
  "public/assets/images/demo-corporate/portfolio/covers"
);

const projects = [
  {
    slug: "b2b-siparis-portali",
    title: "B2B Sipariş Portalı",
    category: "Kurumsal Web",
    metric: "70%",
    metricLabel: "daha hızlı sipariş",
    bg: ["#0c4a5e", "#176f86"],
    accent: "#5eead4",
    accent2: "#2dd4bf",
  },
  {
    slug: "mobil-saha-uygulamasi",
    title: "Mobil Saha Uygulaması",
    category: "Mobil Uygulama",
    metric: "3x",
    metricLabel: "daha hızlı geri dönüş",
    bg: ["#0c3d5c", "#1d6fa3"],
    accent: "#7dd3fc",
    accent2: "#38bdf8",
  },
  {
    slug: "ai-destekli-destek-sistemi",
    title: "AI Destekli Destek Sistemi",
    category: "AI & Otomasyon",
    metric: "24/7",
    metricLabel: "akıllı destek",
    bg: ["#2e1f5e", "#4c3d8f"],
    accent: "#c4b5fd",
    accent2: "#a78bfa",
  },
  {
    slug: "kurumsal-ai-agent-platformu",
    title: "Kurumsal AI Agent Platformu",
    category: "AI Agent",
    metric: "60%",
    metricLabel: "daha hızlı süreç",
    bg: ["#0f3d32", "#1a6b55"],
    accent: "#6ee7b7",
    accent2: "#34d399",
  },
  {
    slug: "sesli-yapay-zeka-asistani",
    title: "Sesli Yapay Zeka Asistanı",
    category: "Sesli AI",
    metric: "7/24",
    metricLabel: "müşteri erişimi",
    bg: ["#4a1d2e", "#8b3a52"],
    accent: "#fda4af",
    accent2: "#fb7185",
  },
  {
    slug: "akilli-dokuman-rag-sistemi",
    title: "Akıllı Doküman ve RAG",
    category: "Doküman AI",
    metric: "4x",
    metricLabel: "daha hızlı erişim",
    bg: ["#3d2e0a", "#7c5e12"],
    accent: "#fde68a",
    accent2: "#fbbf24",
  },
  {
    slug: "kurumsal-ik-portali",
    title: "Kurumsal İK Portalı",
    category: "Süreç Yazılımı",
    metric: "50%",
    metricLabel: "daha az manuel iş",
    bg: ["#1e3a5f", "#2563a8"],
    accent: "#93c5fd",
    accent2: "#60a5fa",
  },
  {
    slug: "envanter-ve-stok-takip-sistemi",
    title: "Envanter ve Stok Takibi",
    category: "Lojistik",
    metric: "35%",
    metricLabel: "daha az sapma",
    bg: ["#4a2510", "#9a4f1f"],
    accent: "#fdba74",
    accent2: "#f97316",
  },
];

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapTitle(title, maxChars = 18) {
  const words = title.split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines.slice(0, 3);
}

function createSvg(project) {
  const { slug, title, category, metric, metricLabel, bg, accent, accent2 } =
    project;
  const titleLines = wrapTitle(title);
  const titleY = titleLines.length > 2 ? 300 : 320;
  const titleSvg = titleLines
    .map(
      (line, index) =>
        `<tspan x="90" dy="${index === 0 ? 0 : 58}">${escapeXml(line)}</tspan>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1320" height="760" viewBox="0 0 1320 760" role="img" aria-label="${escapeXml(title)}">
  <defs>
    <linearGradient id="bg-${slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg[0]}"/>
      <stop offset="100%" stop-color="${bg[1]}"/>
    </linearGradient>
    <radialGradient id="orb1-${slug}" cx="80%" cy="20%" r="45%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orb2-${slug}" cx="15%" cy="85%" r="40%">
      <stop offset="0%" stop-color="${accent2}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="${accent2}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="shine-${slug}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <filter id="blur-${slug}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40"/>
    </filter>
  </defs>

  <rect width="1320" height="760" fill="url(#bg-${slug})"/>
  <rect width="1320" height="760" fill="url(#orb1-${slug})"/>
  <rect width="1320" height="760" fill="url(#orb2-${slug})"/>

  <ellipse cx="1080" cy="140" rx="220" ry="180" fill="${accent}" opacity="0.12" filter="url(#blur-${slug})"/>
  <ellipse cx="200" cy="620" rx="260" ry="200" fill="${accent2}" opacity="0.1" filter="url(#blur-${slug})"/>

  <rect x="0" y="0" width="1320" height="760" fill="url(#shine-${slug})" transform="rotate(-8 660 380)"/>

  <rect x="90" y="90" width="180" height="42" rx="21" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
  <text x="180" y="117" text-anchor="middle" fill="#ffffff" font-size="15" font-family="system-ui,-apple-system,sans-serif" font-weight="600" letter-spacing="0.06em">${escapeXml(category.toUpperCase())}</text>

  <text x="90" y="${titleY}" fill="#ffffff" font-size="52" font-family="system-ui,-apple-system,sans-serif" font-weight="700" letter-spacing="-0.02em">
    ${titleSvg}
  </text>

  <rect x="90" y="500" width="280" height="110" rx="20" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
  <text x="120" y="555" fill="${accent}" font-size="42" font-family="system-ui,-apple-system,sans-serif" font-weight="700">${escapeXml(metric)}</text>
  <text x="120" y="590" fill="rgba(255,255,255,0.75)" font-size="16" font-family="system-ui,-apple-system,sans-serif">${escapeXml(metricLabel)}</text>

  <circle cx="1150" cy="580" r="90" fill="none" stroke="${accent}" stroke-width="2" opacity="0.35"/>
  <circle cx="1150" cy="580" r="60" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
  <circle cx="1150" cy="580" r="8" fill="${accent}"/>

  <text x="90" y="700" fill="rgba(255,255,255,0.35)" font-size="13" font-family="system-ui,-apple-system,sans-serif" letter-spacing="0.14em">GEMU TECHNOLOGY</text>
</svg>`;
}

mkdirSync(outputDir, { recursive: true });

for (const project of projects) {
  const filePath = join(outputDir, `${project.slug}.svg`);
  writeFileSync(filePath, createSvg(project), "utf8");
  console.log(`Created ${filePath}`);
}

console.log(`\nGenerated ${projects.length} project cover images.`);
