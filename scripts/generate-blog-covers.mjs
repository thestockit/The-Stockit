import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'content', 'blog');
const OUT_DIR = path.join(ROOT, 'public', 'blog-covers');

/* ------------------------------------------------------------------ */
/*  Category styles                                                    */
/* ------------------------------------------------------------------ */

const CATEGORY_STYLES = {
  hosting: {
    gradient: ['#312e81', '#4f46e5', '#a5b4fc'],
    accent: '#818cf8',
    label: 'WEB HOSTING',
  },
  marketing: {
    gradient: ['#4c1d95', '#7c3aed', '#f0abfc'],
    accent: '#c084fc',
    label: 'DIGITAL MARKETING',
  },
  development: {
    gradient: ['#064e3b', '#059669', '#6ee7b7'],
    accent: '#34d399',
    label: 'DEVELOPMENT',
  },
  domains: {
    gradient: ['#7c2d12', '#ea580c', '#fdba74'],
    accent: '#fb923c',
    label: 'DOMAINS',
  },
};

const DEFAULT_STYLE = {
  gradient: ['#0f172a', '#334155', '#93c5fd'],
  accent: '#60a5fa',
  label: 'BLOG',
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const escapeXml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const unquote = (str) => String(str || '').replace(/^["'\s]+|["'\s]+$/g, '');

const wrapTitle = (title, maxChars = 40, maxLines = 3) => {
  const words = String(title).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';
  for (const word of words) {
    if (current && (current + ' ' + word).length > maxChars) {
      lines.push(current);
      current = word;
      if (lines.length === maxLines) break;
    } else {
      current = current ? `${current} ${word}` : word;
    }
  }
  if (current && lines.length < maxLines) lines.push(current);
  if (words.join(' ').length > maxChars * maxLines && lines.length === maxLines) {
    lines[maxLines - 1] = lines[maxLines - 1].slice(0, maxChars - 1).trimEnd() + '\u2026';
  }
  return lines;
};

const readFrontmatter = (file) => {
  const raw = fs.readFileSync(file, 'utf8');
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return {};
  const data = {};
  const lineRe = /^([A-Za-z0-9_]+):\s*(.*)$/gm;
  let m;
  while ((m = lineRe.exec(fmMatch[1])) !== null) data[m[1]] = m[2];
  return data;
};

function getStyle(category) {
  return CATEGORY_STYLES[String(category || '').toLowerCase()] || DEFAULT_STYLE;
}

/* ------------------------------------------------------------------ */
/*  SVG template                                                       */
/* ------------------------------------------------------------------ */

function buildCover({ title, style, index }) {
  const [g0, g1, g2] = style.gradient;
  const lines = wrapTitle(title, 40, 3);
  const startY = 308;

  const titleLines = lines
    .map(
      (line, i) =>
        `<text x="64" y="${startY + i * 62}" font-family="Helvetica, Arial, sans-serif" font-size="54" font-weight="800" letter-spacing="-1" fill="#ffffff">${escapeXml(line)}</text>`
    )
    .join('\n    ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-label="${escapeXml(title)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${g0}" />
      <stop offset="0.55" stop-color="${g1}" />
      <stop offset="1" stop-color="${g2}" />
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.12" r="0.9">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.16" />
      <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.25" />
    </filter>
  </defs>

  <rect width="1200" height="675" fill="url(#bg)" />
  <rect width="1200" height="675" fill="url(#glow)" />

  <g stroke="#ffffff" stroke-opacity="0.06" stroke-width="1">
    <line x1="0" y1="112.5" x2="1200" y2="112.5" />
    <line x1="0" y1="225" x2="1200" y2="225" />
    <line x1="0" y1="337.5" x2="1200" y2="337.5" />
    <line x1="0" y1="450" x2="1200" y2="450" />
    <line x1="0" y1="562.5" x2="1200" y2="562.5" />
    <line x1="150" y1="0" x2="150" y2="675" />
    <line x1="300" y1="0" x2="300" y2="675" />
    <line x1="450" y1="0" x2="450" y2="675" />
    <line x1="600" y1="0" x2="600" y2="675" />
    <line x1="750" y1="0" x2="750" y2="675" />
    <line x1="900" y1="0" x2="900" y2="675" />
    <line x1="1050" y1="0" x2="1050" y2="675" />
  </g>

  <circle cx="1060" cy="90" r="150" fill="#ffffff" fill-opacity="0.08" />
  <circle cx="1120" cy="150" r="70" fill="none" stroke="#ffffff" stroke-opacity="0.25" stroke-width="2" />
  <circle cx="40" cy="600" r="120" fill="#ffffff" fill-opacity="0.07" />

  <g filter="url(#shadow)">
    <rect x="64" y="64" width="300" height="52" rx="26" fill="#ffffff" fill-opacity="0.14" />
    <rect x="64" y="64" width="300" height="52" rx="26" fill="none" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5" />
    <text x="90" y="98" font-family="Helvetica, Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="3" fill="#ffffff">${escapeXml(style.label)}</text>
  </g>

  <g filter="url(#shadow)">
    ${titleLines}
  </g>

  <g opacity="0.9">
    <rect x="64" y="560" width="14" height="14" rx="3" fill="${style.accent}" />
    <text x="90" y="572" font-family="Helvetica, Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="2" fill="#ffffff">THE STOCKIT — BLOG</text>
    <text x="1136" y="572" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="2" fill="#ffffff" fill-opacity="0.85">#${String(index + 1).padStart(2, '0')}</text>
  </g>
</svg>
`;
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */

const main = () => {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`Blog directory not found: ${BLOG_DIR}`);
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const posts = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx$/i.test(f))
    .map((f) => f.replace(/\.mdx$/i, ''))
    .sort();

  for (const [index, slug] of posts.entries()) {
    let fm = {};
    try {
      fm = readFrontmatter(path.join(BLOG_DIR, `${slug}.mdx`));
    } catch {
      fm = {};
    }
    const category = unquote(fm.category || '');
    const title = unquote(fm.title) || slug.replace(/-/g, ' ');
    const style = getStyle(category);
    const svg = buildCover({ title, style, index });
    fs.writeFileSync(path.join(OUT_DIR, `${slug}.svg`), svg, 'utf8');
  }

  const fallbackSvg = buildCover({ title: 'The Stockit Blog', style: DEFAULT_STYLE, index: 0 });
  fs.writeFileSync(path.join(OUT_DIR, 'default.svg'), fallbackSvg, 'utf8');

  console.log(`Generated ${posts.length} SVG covers + default.svg → public/blog-covers/`);
};

main();