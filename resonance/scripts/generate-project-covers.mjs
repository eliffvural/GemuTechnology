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
    category: "Kurumsal Web",
    accent: "#2dd4bf",
    icon: `
      <rect x="420" y="220" width="480" height="320" rx="18" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
      <rect x="450" y="260" width="180" height="14" rx="7" fill="rgba(255,255,255,0.35)"/>
      <rect x="450" y="300" width="420" height="10" rx="5" fill="rgba(255,255,255,0.15)"/>
      <rect x="450" y="330" width="360" height="10" rx="5" fill="rgba(255,255,255,0.12)"/>
      <rect x="450" y="380" width="140" height="44" rx="10" fill="${"#2dd4bf"}" opacity="0.85"/>
      <rect x="610" y="380" width="140" height="44" rx="10" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
      <circle cx="780" cy="270" r="28" fill="rgba(45,212,191,0.2)" stroke="#2dd4bf" stroke-width="2"/>
      <path d="M770 270 L778 278 L792 258" stroke="#2dd4bf" stroke-width="3" fill="none" stroke-linecap="round"/>
    `,
  },
  {
    slug: "mobil-saha-uygulamasi",
    category: "Mobil Uygulama",
    accent: "#38bdf8",
    icon: `
      <rect x="540" y="180" width="240" height="400" rx="32" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
      <rect x="620" y="210" width="80" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
      <circle cx="660" cy="290" r="36" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2"/>
      <path d="M660 262 L660 318 M636 290 L684 290" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <rect x="570" y="360" width="180" height="12" rx="6" fill="rgba(255,255,255,0.2)"/>
      <rect x="570" y="390" width="140" height="10" rx="5" fill="rgba(255,255,255,0.12)"/>
      <rect x="570" y="420" width="160" height="10" rx="5" fill="rgba(255,255,255,0.1)"/>
      <rect x="570" y="470" width="180" height="44" rx="12" fill="#38bdf8" opacity="0.85"/>
      <path d="M500 520 Q560 460 620 500 T740 480" stroke="#38bdf8" stroke-width="2" fill="none" opacity="0.5"/>
    `,
  },
  {
    slug: "ai-destekli-destek-sistemi",
    category: "AI Destek",
    accent: "#a78bfa",
    icon: `
      <rect x="400" y="240" width="520" height="280" rx="20" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
      <rect x="430" y="280" width="200" height="56" rx="16" fill="rgba(255,255,255,0.1)"/>
      <rect x="650" y="280" width="230" height="56" rx="16" fill="rgba(167,139,250,0.25)" stroke="#a78bfa" stroke-width="1.5"/>
      <rect x="430" y="360" width="280" height="56" rx="16" fill="rgba(255,255,255,0.08)"/>
      <rect x="730" y="360" width="150" height="56" rx="16" fill="rgba(167,139,250,0.25)" stroke="#a78bfa" stroke-width="1.5"/>
      <circle cx="780" cy="308" r="8" fill="#a78bfa"/>
      <circle cx="800" cy="388" r="8" fill="#a78bfa"/>
      <path d="M560 200 L580 230 L610 210 L630 250" stroke="#a78bfa" stroke-width="2" fill="none" opacity="0.6"/>
      <text x="660" y="520" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="14" font-family="system-ui,sans-serif">24/7 AI</text>
    `,
  },
  {
    slug: "kurumsal-ai-agent-platformu",
    category: "AI Agent",
    accent: "#34d399",
    icon: `
      <circle cx="660" cy="340" r="70" fill="rgba(52,211,153,0.15)" stroke="#34d399" stroke-width="2"/>
      <rect x="630" y="310" width="60" height="50" rx="12" fill="rgba(255,255,255,0.1)" stroke="#34d399" stroke-width="2"/>
      <circle cx="648" cy="330" r="6" fill="#34d399"/>
      <circle cx="672" cy="330" r="6" fill="#34d399"/>
      <path d="M642 350 Q660 362 678 350" stroke="#34d399" stroke-width="2" fill="none"/>
      <circle cx="480" cy="280" r="40" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.5)" stroke-width="1.5"/>
      <circle cx="840" cy="280" r="40" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.5)" stroke-width="1.5"/>
      <circle cx="480" cy="420" r="40" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.5)" stroke-width="1.5"/>
      <circle cx="840" cy="420" r="40" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.5)" stroke-width="1.5"/>
      <line x1="520" y1="280" x2="590" y2="310" stroke="rgba(52,211,153,0.4)" stroke-width="1.5"/>
      <line x1="800" y1="280" x2="730" y2="310" stroke="rgba(52,211,153,0.4)" stroke-width="1.5"/>
      <line x1="520" y1="420" x2="590" y2="370" stroke="rgba(52,211,153,0.4)" stroke-width="1.5"/>
      <line x1="800" y1="420" x2="730" y2="370" stroke="rgba(52,211,153,0.4)" stroke-width="1.5"/>
    `,
  },
  {
    slug: "sesli-yapay-zeka-asistani",
    category: "Sesli AI",
    accent: "#fb7185",
    icon: `
      <rect x="610" y="260" width="100" height="160" rx="50" fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="2"/>
      <rect x="635" y="290" width="50" height="80" rx="25" fill="rgba(255,255,255,0.08)" stroke="rgba(251,113,133,0.5)" stroke-width="1.5"/>
      <line x1="660" y1="420" x2="660" y2="460" stroke="#fb7185" stroke-width="3"/>
      <ellipse cx="660" cy="472" rx="30" ry="8" fill="rgba(251,113,133,0.3)"/>
      <path d="M480 340 Q500 300 520 340 Q540 380 560 340" stroke="#fb7185" stroke-width="2.5" fill="none" opacity="0.7"/>
      <path d="M760 340 Q780 300 800 340 Q820 380 840 340" stroke="#fb7185" stroke-width="2.5" fill="none" opacity="0.7"/>
      <path d="M440 360 Q460 320 480 360 Q500 400 520 360" stroke="#fb7185" stroke-width="2" fill="none" opacity="0.4"/>
      <path d="M800 360 Q820 320 840 360 Q860 400 880 360" stroke="#fb7185" stroke-width="2" fill="none" opacity="0.4"/>
    `,
  },
  {
    slug: "akilli-dokuman-rag-sistemi",
    category: "RAG & Doküman",
    accent: "#fbbf24",
    icon: `
      <rect x="460" y="240" width="160" height="200" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" transform="rotate(-8 540 340)"/>
      <rect x="580" y="230" width="160" height="200" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
      <rect x="700" y="250" width="160" height="200" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" transform="rotate(8 780 350)"/>
      <rect x="610" y="270" width="100" height="8" rx="4" fill="rgba(255,255,255,0.25)"/>
      <rect x="610" y="295" width="80" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
      <rect x="610" y="315" width="90" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
      <circle cx="660" cy="480" r="50" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="2"/>
      <circle cx="660" cy="470" r="20" fill="none" stroke="#fbbf24" stroke-width="2"/>
      <line x1="660" y1="460" x2="660" y2="490" stroke="#fbbf24" stroke-width="2"/>
      <line x1="645" y1="475" x2="675" y2="475" stroke="#fbbf24" stroke-width="2"/>
    `,
  },
  {
    slug: "kurumsal-ik-portali",
    category: "İK Portal",
    accent: "#60a5fa",
    icon: `
      <rect x="420" y="220" width="480" height="320" rx="18" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
      <circle cx="520" cy="310" r="36" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="2"/>
      <circle cx="660" cy="310" r="36" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="2"/>
      <circle cx="800" cy="310" r="36" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="2"/>
      <rect x="480" y="380" width="360" height="12" rx="6" fill="rgba(255,255,255,0.15)"/>
      <rect x="480" y="410" width="280" height="10" rx="5" fill="rgba(255,255,255,0.1)"/>
      <rect x="480" y="440" width="320" height="10" rx="5" fill="rgba(255,255,255,0.08)"/>
      <rect x="480" y="480" width="120" height="36" rx="10" fill="#60a5fa" opacity="0.85"/>
    `,
  },
  {
    slug: "envanter-ve-stok-takip-sistemi",
    category: "Envanter",
    accent: "#f97316",
    icon: `
      <rect x="440" y="300" width="100" height="100" rx="8" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="2"/>
      <rect x="560" y="260" width="100" height="140" rx="8" fill="rgba(249,115,22,0.2)" stroke="#f97316" stroke-width="2"/>
      <rect x="680" y="280" width="100" height="120" rx="8" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="2"/>
      <rect x="800" y="240" width="100" height="160" rx="8" fill="rgba(249,115,22,0.25)" stroke="#f97316" stroke-width="2"/>
      <polyline points="500,420 560,380 660,400 760,360 860,340" stroke="#f97316" stroke-width="2.5" fill="none" opacity="0.7"/>
      <circle cx="500" cy="420" r="6" fill="#f97316"/>
      <circle cx="660" cy="400" r="6" fill="#f97316"/>
      <circle cx="860" cy="340" r="6" fill="#f97316"/>
    `,
  },
];

function createSvg({ slug, category, accent, icon }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1320" height="760" viewBox="0 0 1320 760" role="img" aria-label="${category} proje görseli">
  <defs>
    <linearGradient id="bg-${slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b2e38"/>
      <stop offset="55%" stop-color="#176f86"/>
      <stop offset="100%" stop-color="#0f4c5c"/>
    </linearGradient>
    <radialGradient id="glow-${slug}" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid-${slug}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1320" height="760" fill="url(#bg-${slug})"/>
  <rect width="1320" height="760" fill="url(#glow-${slug})"/>
  <rect width="1320" height="760" fill="url(#grid-${slug})"/>
  <circle cx="180" cy="120" r="120" fill="${accent}" opacity="0.06"/>
  <circle cx="1140" cy="640" r="160" fill="${accent}" opacity="0.05"/>
  ${icon}
  <text x="80" y="680" fill="rgba(255,255,255,0.35)" font-size="13" font-family="system-ui,-apple-system,sans-serif" letter-spacing="0.12em">GEMU TECHNOLOGY</text>
  <text x="1240" y="680" text-anchor="end" fill="${accent}" font-size="13" font-family="system-ui,-apple-system,sans-serif" font-weight="600">${category.toUpperCase()}</text>
</svg>`;
}

mkdirSync(outputDir, { recursive: true });

for (const project of projects) {
  const filePath = join(outputDir, `${project.slug}.svg`);
  writeFileSync(filePath, createSvg(project), "utf8");
  console.log(`Created ${filePath}`);
}

console.log(`\nGenerated ${projects.length} project cover images.`);
