"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedSlider({ featuredPosts = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!featuredPosts.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredPosts.length]);

  if (!featuredPosts.length) return null;

  const post = featuredPosts[currentIndex];

  return (
    <div className="relative h-full group">
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="relative rounded-[2.5rem] h-full overflow-hidden shadow-xl text-white">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-900/40 to-transparent" />

          <div className="relative z-10 p-12 h-full flex flex-col justify-end">
            <span className="text-[11px] font-black uppercase tracking-widest bg-indigo-600 px-4 py-1.5 rounded-full mb-6 w-fit">
              {post.category}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h2>

            <p className="text-white/80 text-lg line-clamp-2 max-w-xl">
              {post.excerpt}
            </p>

            <div className="flex gap-3 mt-8">
              {featuredPosts.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentIndex ? "w-12 bg-white" : "w-6 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
