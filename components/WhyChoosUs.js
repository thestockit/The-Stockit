"use client";

import { motion } from 'framer-motion';
import {
  Users,
  Lightbulb,
  LayoutTemplate,
  Zap,
  Target,
  RefreshCw,
} from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const features = [
  {
    title: 'Team of 120 full-time professionals',
    description:
      'With 120 in-house experts, we manage projects efficiently and ensure high-quality results without relying on freelancers.',
    icon: Users,
  },
  {
    title: 'Data-driven decisions',
    description:
      'Every design decision is backed by user research and data, ensuring visually appealing designs that drive results.',
    icon: Lightbulb,
  },
  {
    title: 'User-centered design for higher engagement',
    description:
      "We focus on users' needs, creating intuitive interfaces that boost engagement and seamless exploration.",
    icon: LayoutTemplate,
  },
  {
    title: 'Improved developer efficiency',
    description:
      'We deliver clear, well-documented docs, streamline dev ops, and save your team time.',
    icon: Zap,
  },
  {
    title: 'Customized solutions for your business goals',
    description:
      "We design solutions tailored to your product's needs and goals, focusing on boosting conversions and improving onboarding.",
    icon: Target,
  },
  {
    title: 'Ongoing optimization and support',
    description:
      'We design and continuously optimize, using real-time data and feedback to refine your product and meet evolving user needs.',
    icon: RefreshCw,
  },
];

const WhyChooseUs = () => {
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
    <section id="why-choose-us" className="relative overflow-hidden bg-white">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
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
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            Why choose us
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            6 reasons to
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              work with us
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg"
          >
            Discover why industry leaders choose The Stockit for their digital
            transformation journey.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)] md:p-8"
            >
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

              <div className="relative flex items-start justify-between gap-4">
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110"
                >
                  <feature.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>

                <span
                  aria-hidden
                  className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="relative mt-5 text-lg font-extrabold tracking-tight text-gray-900 md:text-xl">
                {feature.title}
              </h3>

              <p className="relative mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
