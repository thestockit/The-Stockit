"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
);

export default function FeaturedSlider({ featuredPosts }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredPosts.length]);

  const post = featuredPosts[currentIndex];

  return (
    <div className="relative h-full group">
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div 
          className="relative rounded-[2.5rem] h-full flex flex-col justify-between text-white overflow-hidden shadow-xl transition-all duration-700"
          style={{ clipPath: 'polygon(0 8%, 35% 8%, 40% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          {/* Background Image */}
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-900/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 p-12 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                <SparkleIcon />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest bg-indigo-600 px-4 py-1.5 rounded-full border border-white/20">
                {post.category}
              </span>
            </div>
            
            <div className="mt-auto">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {post.title}
              </h2>
              <p className="text-white/80 text-lg mb-10 line-clamp-2 max-w-xl">
                {post.excerpt}
              </p>
              
              {/* Slider Progress Indicators */}
              <div className="flex gap-3 items-center">
                {featuredPosts.map((_, i) => (
                  <div 
                    key={i}
                    onClick={(e) => {
                        e.preventDefault();
                        setCurrentIndex(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      i === currentIndex ? 'w-12 bg-white' : 'w-6 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}