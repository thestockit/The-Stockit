"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const CTASection = () => {
  const reduce = usePrefersReducedMotion();

  const fadeUp = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
    >
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Free consultation
          </span>

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to discuss your project with us?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">
            Let&apos;s talk about how we can craft a user experience that not
            only looks great but drives real growth for your product.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-700 shadow-lg shadow-blue-900/20 transition-all duration-300 hover:bg-blue-50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Book a call
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
            </Link>

            <a
              href="mailto:info@thestockit.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
            >
              Email us instead
            </a>
          </div>

          <p className="mt-6 text-xs font-medium text-blue-100/80 md:text-sm">
            No strings attached • 30-minute consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
