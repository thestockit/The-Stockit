import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { getAllPosts } from '@/lib/mdx';

const fallbackCover = '/blog-covers/default.svg';

const Blogs = () => {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blogs" className="relative overflow-hidden bg-white">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      {/* Hairline divider */}
      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              Insights
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Latest
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                blog highlights
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              Practical guides, tools, and strategies on web development, SEO,
              and digital marketing.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              See all articles
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={`/blog-covers/${post.slug}.svg`}
                  alt={post.frontmatter.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              <div className="relative flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                  <span className="text-blue-600">
                    {post.frontmatter.category || 'Blog'}
                  </span>
                  {post.frontmatter.date && <span>{post.frontmatter.date}</span>}
                </div>

                <h3 className="mt-3 text-lg font-extrabold leading-snug tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-blue-700">
                  {post.frontmatter.title}
                </h3>

                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {post.frontmatter.excerpt || post.frontmatter.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  Read article
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
