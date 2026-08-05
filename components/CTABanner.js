"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const GlassCTABanner = ({
  title = 'Need a custom solution?',
  description = "Can't find what you're looking for? We craft tailored solutions for your unique business needs.",
  ctaText = 'Request custom service',
  ctaLink = '/contact',
}) => {
  const reduce = usePrefersReducedMotion();

  return (
    <div className="bg-white px-4 py-6 sm:px-6 md:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-r from-blue-50/80 via-white to-purple-50/80 p-6 shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)] backdrop-blur-sm md:p-8"
        >
          {/* Decorative background */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"
          />

          <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="flex items-start gap-4">
              <span
                aria-hidden
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25"
              >
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
                  {title}
                </h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
                  {description}
                </p>
              </div>
            </div>

            <Link
              href={ctaLink}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GlassCTABanner;
