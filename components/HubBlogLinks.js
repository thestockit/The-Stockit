import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const postsDirectory = path.join(process.cwd(), 'posts');

const HubBlogLinks = async ({ slugs }) => {
  let posts = [];

  try {
    const filenames = await fs.promises.readdir(postsDirectory);
    const wanted = new Set(slugs);

    posts = await Promise.all(
      filenames
        .filter((f) => /\.md$/i.test(f))
        .filter((f) => wanted.has(f.replace(/\.md$/, '')))
        .map(async (filename) => {
          const fileContents = await fs.promises.readFile(
            path.join(postsDirectory, filename),
            'utf8'
          );
          const { data } = matter(fileContents);
          return {
            slug: filename.replace(/\.md$/, ''),
            title: data.title || 'Untitled',
            excerpt: data.excerpt || data.metaDescription || '',
            category: data.category || 'Blog',
            date: data.date || '',
            coverImage: data.coverImage || '/blog-banner-1200x675.webp',
          };
        })
    );

    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch {
    return null;
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="mb-12 max-w-2xl md:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-700">
            Guides for Pakistani businesses
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Learn before you
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              invest a single rupee
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
            Practical guides written by our Islamabad / Rawalpindi team — so you know exactly what
            to expect from local pricing to payment gateways.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                  <span className="text-blue-600">{post.category}</span>
                  {post.date && <span>{post.date}</span>}
                </div>
                <h3 className="text-lg font-bold leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors group-hover:text-purple-600">
                  Read the guide
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubBlogLinks;
