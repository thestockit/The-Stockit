"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, TrendingUp } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const listItems = [
  'Boost online sales and revenue',
  'Enhance brand awareness and credibility',
  'Outpace competition with data-driven solutions',
];

const MarketingText = () => {
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
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.span
        variants={fadeUp}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-700"
      >
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-600" />
        </span>
        Growth partner
      </motion.span>

      <motion.h2
        variants={fadeUp}
        className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
      >
        Exceptional digital
        <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
          marketing services
        </span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg"
      >
        The Stockit is a leading digital marketing agency that has established
        successful partnerships with numerous prominent brands. Our expertise in
        generating sales and building brand identity has made us the go-to
        agency for industry leaders — including esteemed brands like Fiaka
        Karim, who trust us to elevate their online presence and drive business
        growth.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-5 max-w-xl text-base leading-relaxed text-gray-600"
      >
        Our comprehensive digital marketing services are tailored to meet the
        unique needs of each client, ensuring maximum ROI and brand visibility.
        By collaborating with The Stockit, businesses can:
      </motion.p>

      <motion.ul variants={fadeUp} className="mt-4 space-y-3">
        {listItems.map((item) => (
          <li key={item} className="flex items-start gap-3 text-gray-700">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <BadgeCheck className="h-4 w-4" aria-hidden />
            </span>
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </motion.ul>

      <motion.div
        variants={fadeUp}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Let&apos;s connect
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>

        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500">
          <TrendingUp className="h-4 w-4 text-pink-600" aria-hidden />
          Proven results, measurable growth
        </span>
      </motion.div>
    </motion.div>
  );
};

export default MarketingText;
