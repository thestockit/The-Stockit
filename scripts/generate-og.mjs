import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'public', 'og');

const cities = [
  ['islamabad', 'Islamabad', "Pakistan's capital and fastest-growing startup hub"],
  ['rawalpindi', 'Rawalpindi', 'The commercial heart of the twin cities'],
  ['lahore', 'Lahore', "Pakistan's fashion, food, and e-commerce capital"],
  ['karachi', 'Karachi', "Pakistan's economic and trade powerhouse"],
  ['faisalabad', 'Faisalabad', "Pakistan's textile and manufacturing hub"],
  ['sialkot', 'Sialkot', "The world's sporting goods and surgical capital"],
  ['gujranwala', 'Gujranwala', "Punjab's manufacturing and rice hub"],
  ['multan', 'Multan', "Southern Punjab's commercial and cultural capital"],
  ['peshawar', 'Peshawar', 'The gateway of Khyber Pakhtunkhwa'],
  ['hyderabad', 'Hyderabad', "Sindh's city of industry and charm"],
  ['bahria-town', 'Bahria Town', "Pakistan's largest private housing scheme"],
  ['dha-lahore', 'DHA Lahore', 'Defence — Lahore premium living standard'],
  ['dha-karachi', 'DHA Karachi', "Karachi's most affluent residential district"],
  ['gulberg-lahore', 'Gulberg Lahore', 'Lahore trendsetting commercial district'],
  ['clifton-karachi', 'Clifton Karachi', 'Karachi seaside lifestyle and retail hub'],
];

const services = [
  ['ui-ux-design', 'UI/UX Design'],
  ['web-design', 'Web Design'],
  ['mobile-app-design', 'Mobile App Design'],
  ['landing-page-design', 'Landing Page Design'],
  ['branding-identity', 'Branding & Identity'],
  ['graphic-design', 'Graphic Design'],
  ['web-development', 'Web Development'],
  ['software-development', 'Software Development'],
  ['cms-development', 'CMS Development'],
  ['shopify-development', 'Shopify Development'],
  ['webflow-development', 'Webflow Development'],
  ['mobile-development', 'Mobile App Development'],
  ['seo-services', 'SEO Services'],
  ['social-media-marketing', 'Social Media Marketing'],
  ['google-ads-ppc', 'Google Ads (PPC)'],
  ['email-marketing', 'Email Marketing'],
  ['content-marketing', 'Content Marketing'],
  ['influencer-marketing', 'Influencer Marketing'],
  ['ai-agents', 'AI Agents & Chatbots'],
  ['ai-voice-agents', 'AI Voice Agents'],
  ['ai-workflow-automation', 'AI Workflow Automation'],
  ['ai-recommendation-engines', 'AI Recommendation Engines'],
  ['ai-assistants', 'Internal AI Assistants'],
  ['ai-document-processing', 'AI Document Processing'],
  ['video-editing', 'Video Editing'],
  ['motion-graphics', 'Motion Graphics'],
  ['content-creation', 'Content Creation'],
  ['copywriting', 'Copywriting'],
  ['brand-storytelling', 'Brand Storytelling'],
  ['podcast-editing', 'Podcast Editing'],
];

const hubs = [
  ['web-development', 'Web Development'],
  ['app-development', 'App Development'],
  ['ai-services', 'AI Services'],
  ['e-commerce', 'E-commerce'],
  ['digital-marketing', 'Digital Marketing'],
];

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const svg = ({ kicker, headline, subline }) => `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#141034"/>
      <stop offset="45%" stop-color="#2a1f63"/>
      <stop offset="100%" stop-color="#4318ff"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#48d1cc"/>
      <stop offset="100%" stop-color="#6a5acd"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.42" r="0.65">
      <stop offset="0%" stop-color="#6a5acd" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#6a5acd" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- diagonal texture lines -->
  <g stroke="#ffffff" stroke-opacity="0.05" stroke-width="1">
    <line x1="0" y1="120" x2="1200" y2="0"/>
    <line x1="0" y1="260" x2="1200" y2="140"/>
    <line x1="0" y1="400" x2="1200" y2="280"/>
    <line x1="0" y1="540" x2="1200" y2="420"/>
  </g>

  <!-- crescent & star motif -->
  <g opacity="0.16" fill="#ffffff">
    <circle cx="1050" cy="120" r="70"/>
    <circle cx="1085" cy="96" r="58" fill="#141034"/>
    <polygon points="1008,120 1020,148 1050,150 1026,170 1034,200 1008,180 982,200 990,170 966,150 996,148" transform="scale(0.7) translate(430,-20)"/>
  </g>

  <!-- brand block -->
  <g>
    <rect x="60" y="54" width="14" height="14" rx="4" fill="url(#accent)"/>
    <text x="88" y="66" font-family="Segoe UI, Arial, sans-serif" font-size="34" font-weight="700" fill="#ffffff">The Stockit</text>
    <text x="88" y="88" font-family="Segoe UI, Arial, sans-serif" font-size="15" letter-spacing="4" fill="#48d1cc">WEB DESIGN &amp; DIGITAL MARKETING</text>
  </g>

  <!-- headline -->
  <text x="600" y="330" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="66" font-weight="700" fill="#ffffff">${esc(headline)}</text>
  <rect x="555" y="365" width="90" height="6" rx="3" fill="url(#accent)"/>

  <!-- subline -->
  <text x="600" y="410" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#d7d4f5">${esc(subline)}</text>

  <!-- kicker -->
  <text x="600" y="470" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="18" letter-spacing="3" fill="#9b95d4">${esc(kicker)}</text>

  <!-- footer -->
  <rect x="60" y="522" width="1080" height="2" fill="#ffffff" fill-opacity="0.12"/>
  <text x="60" y="566" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="600" fill="#ffffff">thestockit.com</text>
  <text x="60" y="594" font-family="Segoe UI, Arial, sans-serif" font-size="16" fill="#b7b1de">Islamabad · Rawalpindi · Lahore · Karachi · Pakistan</text>
  <text x="1140" y="566" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="600" fill="#48d1cc">+92 324 5304585</text>
</svg>`;

const specs = [
  {
    slug: 'og-default',
    headline: 'Digital Growth for Pakistani Businesses',
    subline: 'Websites · SEO · Digital Marketing · AI · Video',
    kicker: 'THE STOCKIT — ISLAMABAD & RAWALPINDI',
  },
  {
    slug: 'og-home',
    headline: 'Web Design & Digital Marketing Agency',
    subline: 'Websites · SEO · Social Media · PPC · AI · Video',
    kicker: 'THE STOCKIT — PAKISTAN · PKR PRICING · URDU SUPPORT',
  },
  {
    slug: 'og-service',
    headline: 'Services in Pakistan',
    subline: 'Websites · SEO · Digital Marketing · AI · Video',
    kicker: 'THE STOCKIT — PKR PRICING · URDU SUPPORT',
  },
  ...cities.map(([slug, name, tagline]) => ({
    slug: `og-city-${slug}`,
    headline: `${name} Web Design & Marketing`,
    subline: tagline,
    kicker: 'THE STOCKIT — WEBSITES · SEO · SOCIAL · PPC · AI',
  })),
  ...services.map(([slug, name]) => ({
    slug: `og-service-${slug}`,
    headline: `${name} Services in Pakistan`,
    subline: 'Websites · SEO · Digital Marketing · AI · Video',
    kicker: 'THE STOCKIT — PKR PRICING · URDU SUPPORT',
  })),
  ...hubs.map(([slug, name]) => ({
    slug: `og-hub-${slug}`,
    headline: `${name} Services in Pakistan`,
    subline: 'Hub & Spoke — Websites · SEO · Digital Marketing · AI · Video',
    kicker: 'THE STOCKIT — PKR PRICING · URDU SUPPORT',
  })),
];

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const spec of specs) {
    const outFile = path.join(OUT_DIR, `${spec.slug}.jpg`);
    await sharp(Buffer.from(svg(spec)))
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(outFile);
    const { width, height, size } = await sharp(outFile).metadata();
    console.log(
      `generated ${path.relative(process.cwd(), outFile)} (${width}x${height}, ${Math.round(
        size / 1024
      )} KB)`
    );
  }

  console.log(`\nDone — ${specs.length} OG images written to ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
