import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const BlogCard = ({ blog, index }) => {
  return (
    <a
      href="/blog"
      aria-label={`Read more: ${blog.title}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      {/* Hover gradient ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1.5px',
        }}
      />

      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
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

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-6">
        {/* Author row */}
        <div className="flex items-center gap-3">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow">
            <Image
              src={blog.avatarUrl}
              alt=""
              width={36}
              height={36}
              className="object-cover"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold text-gray-900">
              {blog.author}
            </span>
            <span className="block text-xs text-gray-500">{blog.date}</span>
          </span>
        </div>

        <h3 className="mt-4 text-lg font-extrabold leading-snug tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-blue-700">
          {blog.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {blog.description}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-blue-600">
          Read article
          <ArrowUpRight
            aria-hidden
            className="h-4 w-4 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
          />
        </span>
      </div>
    </a>
  );
};

export default BlogCard;
