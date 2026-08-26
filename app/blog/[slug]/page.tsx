import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebarad from '@/components/Sidebarad';
import BlogSchema from '@/components/seo/BlogSchema';
import { SITE } from '@/constant/site';
import { createMetadata } from '@/Data/Seo/seo-utils';
import {
  getAllPosts,
  getPostBySlug,
  compileBlogMdx,
  extractHeadings,
  type Heading,
} from '@/lib/mdx';

export const dynamicParams = false;

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const posts = getAllPosts();

  if (!posts || posts.length === 0) {
    return [{ slug: '404' }];
  }

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const keywords = [
    ...(post.frontmatter.tags ?? []),
    post.frontmatter.category,
    'The Stockit blog',
  ]
    .filter(Boolean)
    .join(', ');

  return createMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.frontmatter.excerpt || '',
    keywords,
    url: `${SITE.baseUrl}/blog/${params.slug}`,
    image: post.frontmatter.coverImage,
    type: 'article',
    authors: post.frontmatter.author ? [post.frontmatter.author] : undefined,
    publishedTime: post.frontmatter.date,
    modifiedTime: post.frontmatter.dateModified || post.frontmatter.date,
  });
}

const TocCard = ({ headings }: { headings: Heading[] }) => {
  if (!headings.length) return null;
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="mb-3 text-sm font-bold text-gray-900">On this page</p>
      <nav aria-label="Table of contents">
        <ul className="space-y-1">
          {headings.map((h) => (
            <li key={h.id} className={h.level === 3 ? 'ml-4' : ''}>
              <a
                href={`#${h.id}`}
                className="-ml-px block border-l-2 border-transparent py-1 pl-3 text-[13px] leading-snug text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default async function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const { content } = await compileBlogMdx(post.content);
  const { frontmatter } = post;
  const headings = extractHeadings(post.content);

  const bannerProps = {
    heading: frontmatter.bannerHeading || 'Exclusive for readers',
    question: frontmatter.bannerQuestion || 'Want to try this hosting?',
    discount: frontmatter.bannerDiscount ?? 50,
    affiliateLink: frontmatter.bannerLink || '#',
  };

  return (
    <>
      <Header />
      <BlogSchema frontmatter={frontmatter} slug={params.slug} />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[1fr_300px]">
        <article className="rounded-2xl bg-white p-6 shadow-lg md:p-10">
          <nav className="mb-4 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">
              Home
            </Link>{' '}
            /{' '}
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>{' '}
            / <span className="text-gray-700">{frontmatter.title}</span>
          </nav>

          {frontmatter.coverImage && (
            <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image
                src={`/blog-covers/${params.slug}.svg`}
                alt={frontmatter.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}

          <h1 className="text-3xl font-bold text-gray-900">{frontmatter.title}</h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
            <span>By {frontmatter.author || 'The Stockit Editorial Team'}</span>
            {frontmatter.date && <span>· {frontmatter.date}</span>}
            <span>· {post.readingTime.text}</span>
            {frontmatter.category && (
              <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-600">
                {frontmatter.category}
              </span>
            )}
          </div>

          {headings.length > 0 && (
            <nav
              className="mt-6 rounded-xl border border-gray-200 p-4 md:hidden"
              aria-label="Table of contents"
            >
              <p className="text-sm font-bold text-gray-900">On this page</p>
              <ul className="mt-2 space-y-1.5">
                {headings.map((h) => (
                  <li key={h.id} className={h.level === 3 ? 'ml-4' : ''}>
                    <a href={`#${h.id}`} className="text-sm text-blue-600 hover:underline">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="mt-6">{content}</div>
        </article>

        <aside className="sticky top-28 hidden h-[calc(100vh-120px)] flex-col self-start md:flex">
          <div className="flex flex-col gap-6 overflow-y-auto pr-1">
            <TocCard headings={headings} />
          </div>
          <div className="mt-auto border-t border-gray-200 pt-4">
            <Sidebarad
              heading={bannerProps.heading}
              discount={bannerProps.discount}
              hostingName={bannerProps.question}
              affiliateLink={bannerProps.affiliateLink}
            />
          </div>
        </aside>
      </div>

      <div className="mx-auto block max-w-6xl px-4 pb-8 md:hidden">
        <Sidebarad
          heading={bannerProps.heading}
          discount={bannerProps.discount}
          hostingName={bannerProps.question}
          affiliateLink={bannerProps.affiliateLink}
        />
      </div>

      <Footer />
    </>
  );
}