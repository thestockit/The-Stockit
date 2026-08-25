import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/constant/site';
import { createMetadata } from '@/Data/Seo/seo-utils';
import { getAllPosts, type BlogPost } from '@/lib/mdx';

export const metadata: Metadata = createMetadata({
  title: 'Blog | The Stockit',
  description:
    'Expert hosting reviews, domain strategy guides and traffic growth playbooks. 2,000+ word in-depth articles from The Stockit for businesses worldwide.',
  keywords:
    'hosting reviews, domain strategy, SEO guides, web hosting comparison, The Stockit blog, digital marketing',
  url: `${SITE.baseUrl}/blog`,
  image: '/og/og-default.jpg',
  type: 'website',
  authors: undefined,
  publishedTime: undefined,
});

const fallbackCover = '/blog-covers/default.svg';

const coverFor = (post: BlogPost) => `/blog-covers/${post.slug}.svg`;

const PostCard = ({ post, large = false }: { post: BlogPost; large?: boolean }) => (
  <Link href={`/blog/${post.slug}`} className="group block">
    <div className={`relative overflow-hidden rounded-[2.2rem] shadow-lg ${large ? 'aspect-[16/10]' : 'aspect-[16/10]'}`}>
      <Image
        src={coverFor(post)}
        alt={post.frontmatter.title}
        fill
        sizes={large ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 100vw, 33vw'}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className={`${large ? 'mt-5' : 'mt-4'}`}>
      <div className="mb-2 flex justify-between text-[10px] font-black uppercase">
        <span className="text-indigo-600">{post.frontmatter.category || 'Blog'}</span>
        <span className="text-slate-400">{post.frontmatter.date}</span>
      </div>
      <h2 className={`font-bold leading-tight text-slate-900 group-hover:text-indigo-600 ${large ? 'text-3xl' : 'text-xl md:text-2xl'}`}>
        {post.frontmatter.title}
      </h2>
      {large && post.frontmatter.excerpt && (
        <p className="mt-3 text-sm leading-relaxed text-slate-500">{post.frontmatter.excerpt}</p>
      )}
    </div>
  </Link>
);

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-20 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          <div className="relative flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-slate-50 p-12 shadow-sm">
            <h1 className="mb-10 text-7xl font-black leading-[0.9] tracking-tighter">
              USEFUL
              <br />
              ARTICLES
            </h1>
            <p className="max-w-md text-base leading-relaxed text-slate-600">
              Honest hosting reviews, domain strategy playbooks and traffic-growth
              guides — researched and written by The Stockit editorial team.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:h-auto">
            {featured[0] ? (
              <PostCard post={featured[0]} large />
            ) : (
              <div className="h-full rounded-[2.5rem] bg-slate-100" />
            )}
          </div>
        </div>

        {featured.length > 1 && (
          <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-2">
            {featured.slice(1, 3).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
