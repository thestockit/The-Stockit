"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogData } from '@/Data/BlogsData';
import BlogCard from './BlogCard';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const Blogs = () => {
  const reduce = usePrefersReducedMotion();

  const fadeUp = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <motion.span
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700"
            >
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              Insights
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
            >
              Latest
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                blog highlights
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg"
            >
              Practical guides, tools, and strategies on web development, SEO,
              and digital marketing.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="shrink-0">
            <a
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              See all articles
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Blog grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {blogData.slice(0, 3).map((blog, index) => (
            <BlogCard key={blog.id || index} blog={blog} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
