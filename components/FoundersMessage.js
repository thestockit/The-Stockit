"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BadgeCheck, Sparkles } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const defaultFounders = [
  {
    id: 1,
    name: 'Mohammad Luqman Pervez',
    role: 'CEO & Co-Founder',
    initials: 'LP',
    image: '/luqman.7594d0c02542d797b36e.webp',
  },
  {
    id: 2,
    name: 'Mohammad Shehzad',
    role: 'CTO & Co-Founder',
    initials: 'MS',
    image: '/shahzad.0d4299ee9b71ef25f432.webp',
  },
];

const defaultBadges = [
  {
    id: 1,
    platform: 'Dribbble',
    tagline: 'Design Excellence',
    monogram: 'D',
    href: 'https://dribbble.com/the-stockit',
  },
  {
    id: 2,
    platform: 'Clutch',
    tagline: 'Top Rated Agency',
    monogram: 'C',
    href: 'https://clutch.co/profile/stockit',
  },
  {
    id: 3,
    platform: 'GoodFirms',
    tagline: 'Verified Partner',
    monogram: 'G',
    href: 'https://www.goodfirms.co/company/the-stockit',
  },
  {
    id: 4,
    platform: 'Upwork',
    tagline: 'Top 1% Talent',
    monogram: 'U',
    href: 'https://upwork.com',
  },
];

const FoundersMessage = ({
  founders = defaultFounders,
  badges = defaultBadges,
  missionStatement = "We're redefining digital excellence through",
  gradientWord = 'design & innovation',
  afterGradientText =
    '— crafting solutions that not only meet but exceed the evolving demands of tomorrow\u2019s digital landscape.',
}) => {
  const [imageErrors, setImageErrors] = useState({});
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
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const handleImageError = (id) =>
    setImageErrors((prev) => ({ ...prev, [id]: true }));

  return (
    <section id="founders" className="relative overflow-hidden bg-white">
      {/* Decorative background: grid + brand blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      {/* Hairline divider from hero */}
      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: Founders */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700"
            >
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              Meet the founders
            </motion.div>

            <div className="space-y-4">
              {founders.map((founder) => (
                <motion.div key={founder.id} variants={fadeUp}>
                  <Link
                    href="/about"
                    aria-label={`Learn more about ${founder.name}`}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    {/* Hover gradient ring */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)', WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1.5px' }}
                    />

                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-50">
                      {founder.image && !imageErrors[founder.id] ? (
                        <Image
                          src={founder.image}
                          alt={`Portrait of ${founder.name}`}
                          fill
                          sizes="64px"
                          className="object-cover"
                          onError={() => handleImageError(founder.id)}
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center text-sm font-bold text-gray-900">
                          {founder.initials}
                        </span>
                      )}
                    </div>

                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5">
                        <span className="truncate font-semibold text-gray-900">
                          {founder.name}
                        </span>
                        <BadgeCheck className="h-4 w-4 shrink-0 text-blue-500" aria-hidden />
                      </span>
                      <span className="block text-sm text-gray-600">{founder.role}</span>
                    </span>

                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-gray-300 transition-all duration-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              className="mt-6 flex items-center gap-2.5 text-sm text-gray-600"
            >
              <Sparkles className="h-4 w-4 text-purple-500" aria-hidden />
              Trusted by industry leaders worldwide
            </motion.p>
          </motion.div>

          {/* RIGHT: Mission statement */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-7"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600"
            >
              Our mission
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
            >
              {missionStatement}{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {gradientWord}
              </span>{' '}
              {afterGradientText}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg"
            >
              The Stockit is a full-service digital agency pairing strategy, design, and
              engineering. We help brands earn attention, rank higher, and grow faster with
              measurable results.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-3 gap-6 border-t border-gray-100 pt-8"
            >
              <Stat value={12} suffix="+" label="Years of experience" />
              <Stat value={120} suffix="+" label="Brands served" />
              <Stat value={4.9} suffix="/5" decimals={1} label="Client rating" />
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Meet The Stockit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-blue-200 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Explore services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM: Platform badges */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 md:mt-20 lg:mt-24"
        >
          <motion.div
            variants={fadeUp}
            className="mb-8 flex items-center justify-center gap-4"
          >
            <div aria-hidden className="h-px w-12 bg-gradient-to-r from-transparent to-blue-200 md:w-20" />
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Recognized on leading platforms
            </p>
            <div aria-hidden className="h-px w-12 bg-gradient-to-l from-transparent to-blue-200 md:w-20" />
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
            {badges.map((badge) => (
              <motion.a
                key={badge.id}
                variants={fadeUp}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${badge.platform} — ${badge.tagline}. Opens in a new tab.`}
                className="group relative flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                {/* Hover gradient ring */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)', WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1.5px' }}
                />

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-purple-50 text-base font-extrabold text-blue-700 ring-1 ring-blue-100 transition-transform duration-300 group-hover:scale-110">
                  {badge.monogram}
                </span>

                <span className="block">
                  <span className="block text-sm font-bold uppercase tracking-wider text-gray-900">
                    {badge.platform}
                  </span>
                  <span className="mt-0.5 block text-xs text-gray-500">
                    {badge.tagline}
                  </span>
                </span>

                <ArrowUpRight
                  className="absolute right-4 top-4 h-4 w-4 text-gray-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stat = ({ value, suffix = '', decimals = 0, label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <div ref={ref}>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-extrabold tabular-nums text-transparent sm:text-3xl md:text-4xl">
        {display.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-gray-600 sm:text-sm">{label}</div>
    </div>
  );
};

export default FoundersMessage;
