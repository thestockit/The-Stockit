"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';
import wordpress from '@/public/wordpress.webp';
import webflow from '@/public/channels4_profile.webp';
import shopify from '@/public/shopify.webp';
import figma from '@/public/1578556490672.webp';
import code from '@/public/codecraft.webp';

const EASE = [0.16, 1, 0.3, 1];

const technologies = [
  { src: webflow, alt: 'Webflow logo', name: 'Webflow', category: 'Visual development' },
  { src: wordpress, alt: 'WordPress logo', name: 'WordPress', category: 'Content & CMS' },
  { src: shopify, alt: 'Shopify logo', name: 'Shopify', category: 'E-commerce' },
  { src: figma, alt: 'Figma logo', name: 'Figma', category: 'Design & prototyping' },
  { src: code, alt: 'Codecrafters logo', name: 'Codecrafters', category: 'Engineering' },
];

const Tech = () => {
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
    <section id="tech" className="relative overflow-hidden bg-white">
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
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: heading */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5"
          >
            <motion.span
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700"
            >
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              Our toolkit
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
            >
              Innovative technologies for
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                optimal results
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg"
            >
              From e-commerce to design tools and engineering, we build on modern,
              scalable technology — so your product stays fast, secure, and
              future-proof.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Explore our work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: scrolling timeline */}
          <div className="lg:col-span-7">
            <div className="relative pl-8 md:pl-10">
              {/* Vertical line */}
              <div
                aria-hidden
                className="absolute bottom-2 left-1 top-2 w-0.5 bg-gradient-to-b from-blue-400/50 via-purple-400/50 to-transparent"
              />

              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: -24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
                  className="relative mb-5 last:mb-0"
                >
                  {/* Timeline dot */}
                  <span
                    aria-hidden
                    className="absolute left-1 top-1/2 -ml-[5px] h-3 w-3 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ring-4 ring-blue-100"
                  />

                  <div className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)] md:p-5">
                    {/* Hover gradient ring */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                        WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        padding: '1.5px',
                      }}
                    />

                    {/* Logo */}
                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50 ring-1 ring-gray-100">
                      <Image
                        src={tech.src}
                        alt={tech.alt}
                        width={28}
                        height={28}
                        loading="lazy"
                        className="h-7 w-7 object-contain"
                      />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-gray-900">{tech.name}</span>
                      <span className="block text-sm text-gray-500">{tech.category}</span>
                    </span>

                    <span
                      aria-hidden
                      className="shrink-0 text-xs font-bold uppercase tracking-wider text-gray-300"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
