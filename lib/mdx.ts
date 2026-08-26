import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { cleanHeadingText, slugify } from '@/lib/slugify';

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  dateModified?: string;
  author: string;
  category: string;
  tags?: string[];
  coverImage?: string;
  excerpt?: string;

  bannerHeading?: string;
  bannerQuestion?: string;
  bannerDiscount?: number;
  bannerLink?: string;
  bannerExpiry?: string | null;

  rating?: number;
  ratingCount?: number;
  priceFrom?: string;
  productName?: string;
  reviewBody?: string;

  [key: string]: unknown;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: { text: string; words: number; minutes: number };
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export const BLOG_DIR = path.resolve(process.cwd(), 'content', 'blog');

const normalizeFrontmatter = (data: Record<string, unknown>): BlogFrontmatter => ({
  title: String(data.title || 'Untitled'),
  description: String(data.description || data.excerpt || data.metaDescription || ''),
  date: String(data.date || ''),
  dateModified: data.dateModified ? String(data.dateModified) : undefined,
  author: String(data.author || 'The Stockit Editorial Team'),
  category: String(data.category || 'marketing'),
  tags: Array.isArray(data.tags)
    ? data.tags.map((t) => String(t))
    : typeof data.keywords === 'string'
      ? data.keywords.split(',').map((k) => k.trim()).filter(Boolean)
      : [],
  coverImage: data.coverImage ? String(data.coverImage) : undefined,
  excerpt: data.excerpt ? String(data.excerpt) : undefined,
  bannerHeading: data.bannerHeading ? String(data.bannerHeading) : undefined,
  bannerQuestion: data.bannerQuestion ? String(data.bannerQuestion) : undefined,
  bannerDiscount: typeof data.bannerDiscount === 'number' ? data.bannerDiscount : undefined,
  bannerLink: data.bannerLink ? String(data.bannerLink) : undefined,
  bannerExpiry: data.bannerExpiry ? String(data.bannerExpiry) : null,
  rating: typeof data.rating === 'number' ? data.rating : undefined,
  ratingCount: typeof data.ratingCount === 'number' ? data.ratingCount : undefined,
  priceFrom: data.priceFrom ? String(data.priceFrom) : undefined,
  productName: data.productName ? String(data.productName) : undefined,
  reviewBody: data.reviewBody ? String(data.reviewBody) : undefined,
  ...data,
});

const parseFile = (slug: string): BlogPost | null => {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const frontmatter = normalizeFrontmatter(data);
  const rt = readingTime(content);
  return {
    slug,
    frontmatter,
    content,
    readingTime: { text: rt.text, words: rt.words, minutes: rt.minutes },
  };
};

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    console.warn(`[MDX Warning]: Directory missing at ${BLOG_DIR}`);
    return [];
  }
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => /\.mdx$/i.test(file))
    .map((file) => file.replace(/\.mdx$/i, ''))
    .map(parseFile)
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const decodedSlug = decodeURIComponent(slug).trim();
  if (!decodedSlug) return null;
  return parseFile(decodedSlug);
}

export function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  const re = /^(#{2,3})\s+(.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = re.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = cleanHeadingText(match[2]);
    if (!text) continue;
    headings.push({ id: slugify(text), text, level });
  }
  return headings;
}

export async function compileBlogMdx(content: string) {
  const [{ evaluate }, { jsx, jsxs, Fragment }, remarkGfm, rehypePrettyCode, { MDXComponents }, { createElement }] =
    await Promise.all([
      import('@mdx-js/mdx'),
      import('react/jsx-runtime'),
      import('remark-gfm'),
      import('rehype-pretty-code'),
      import('@/components/mdx/MDXComponents'),
      import('react'),
    ]);

  const mdxModule = await evaluate(content, {
    jsx,
    jsxs,
    Fragment,
    remarkPlugins: [(remarkGfm as any).default ?? remarkGfm],
    rehypePlugins: [[(rehypePrettyCode as any).default ?? rehypePrettyCode, { theme: 'github-dark', keepBackground: false }]],
  });
  const MDXContent = mdxModule.default;
  return {
    content: createElement(MDXContent, { components: (MDXComponents as any).MDXComponents ?? MDXComponents }),
  };
}