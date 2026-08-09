import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SRC_DIR = path.join(process.cwd(), 'posts');
const DST_DIR = path.join(process.cwd(), 'content', 'blog');

const AUTHOR = 'The Stockit Editorial Team';

const truncate = (text, max = 160) => {
  const clean = (text || '').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).trim()}...`;
};

const inferCategory = ({ slug, title, keywords }) => {
  const haystack = `${slug} ${title} ${Array.isArray(keywords) ? keywords.join(' ') : keywords || ''}`.toLowerCase();
  if (/(domain|dns|registrar|pknic)/.test(haystack)) return 'domains';
  if (/(hosting|host|siteground|interserver|misshosting|monetizemore|stablehost|server|uptime|web host)/.test(haystack)) return 'hosting';
  if (/(shopify|woocommerce|ecommerce|wordpress|website|payment gateway|api)/.test(haystack)) return 'development';
  return 'marketing';
};

const normalizeTags = ({ keywords, category }) => {
  let tags = [];
  if (Array.isArray(keywords)) tags = keywords.map((k) => String(k).trim()).filter(Boolean);
  else if (typeof keywords === 'string') {
    tags = keywords.split(',').map((k) => k.trim()).filter(Boolean);
  }
  if (category) tags = tags.filter((t) => t.toLowerCase() !== category.toLowerCase());
  return [...new Set([category, ...tags])].slice(0, 8);
};

const stripTocSection = (content) => {
  const lines = content.split('\n');
  const tocIdx = lines.findIndex((line) => /^#{2,3}\s+.*table\s+of\s+contents/i.test(line));
  if (tocIdx === -1) return content;
  let end = tocIdx + 1;
  while (end < lines.length && !/^#{2,3}\s/.test(lines[end])) end += 1;
  lines.splice(tocIdx, end - tocIdx);
  return lines.join('\n');
};

const stripLeadingH1 = (content) => {
  const lines = content.split('\n');
  const firstContent = lines.findIndex((l) => l.trim().length > 0);
  if (firstContent !== -1 && /^#\s/.test(lines[firstContent].trim())) {
    lines.splice(firstContent, 1);
  }
  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
};

const migrate = () => {
  if (!fs.existsSync(SRC_DIR)) {
    console.error('No posts/ directory found.');
    return;
  }
  fs.mkdirSync(DST_DIR, { recursive: true });

  const files = fs.readdirSync(SRC_DIR).filter((f) => /\.md$/i.test(f));
  const results = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/i, '');
    const raw = fs.readFileSync(path.join(SRC_DIR, file), 'utf8');
    const { data, content } = matter(raw);

    const category = inferCategory({
      slug,
      title: data.title || '',
      keywords: data.keywords,
    });

    const description = truncate(
      data.description || data.metaDescription || data.excerpt || `Expert guide about ${slug.replace(/-/g, ' ')}.`
    );

    const frontmatter = {
      title: data.title || slug.replace(/-/g, ' '),
      description,
      date: data.date || '2025-01-01',
      author: data.author ? String(data.author) : AUTHOR,
      category,
      tags: normalizeTags({ keywords: data.keywords, category }),
      ...(data.coverImage ? { coverImage: data.coverImage } : {}),
      ...(data.excerpt ? { excerpt: data.excerpt } : {}),
      ...(data.bannerHeading ? { bannerHeading: data.bannerHeading } : {}),
      ...(data.bannerQuestion ? { bannerQuestion: data.bannerQuestion } : {}),
      ...(typeof data.bannerDiscount === 'number' ? { bannerDiscount: data.bannerDiscount } : {}),
      ...(data.bannerLink ? { bannerLink: data.bannerLink } : {}),
      ...(data.bannerExpiry ? { bannerExpiry: data.bannerExpiry } : {}),
    };

    let body = stripLeadingH1(stripTocSection(content));

    const mdx = `---\n${Object.entries(frontmatter)
      .map(([key, value]) => {
        if (typeof value === 'string') return `${key}: ${JSON.stringify(value)}`;
        if (Array.isArray(value)) return `${key}: ${JSON.stringify(value)}`;
        return `${key}: ${value}`;
      })
      .join('\n')}\n---\n\n${body}`;

    fs.writeFileSync(path.join(DST_DIR, `${slug}.mdx`), mdx, 'utf8');
    results.push({ slug, category, words: body.trim().split(/\s+/).length });
  }

  results.sort((a, b) => a.slug.localeCompare(b.slug));
  results.forEach((r) =>
    console.log(`  ${r.slug}  ->  ${r.category}  (${r.words} words)`)
  );
  console.log(`\nMigrated ${results.length} posts to content/blog/.`);
};

migrate();
