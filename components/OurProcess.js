"use client";

import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, Network, Palette, FlaskConical } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const ICONS = {
  search: Search,
  pen: PenTool,
  code: Code2,
  rocket: Rocket,
  network: Network,
  palette: Palette,
  flask: FlaskConical,
};

const defaultSteps = [
  {
    icon: 'search',
    title: 'Discover',
    description: 'We dig into your goals, audience, and competitors to define a clear roadmap and success metrics.',
  },
  {
    icon: 'pen',
    title: 'Design',
    description: 'We craft user-first UI/UX — wireframes, prototypes, and a design system that matches your brand.',
  },
  {
    icon: 'code',
    title: 'Develop',
    description: 'We build fast, secure, scalable products on modern technology and test every feature before launch.',
  },
  {
    icon: 'rocket',
    title: 'Launch & grow',
    description: 'We ship, then keep growing with SEO, marketing, and continuous improvement based on real data.',
  },
];

const defaultData = {
  eyebrow: 'How we work',
  titleA: 'A proven 4-step',
  titleB: 'delivery process',
  description:
    'No mystery, no surprises. Every engagement follows the same transparent process so you always know what happens next.',
};

const OurProcess = ({ steps = defaultSteps, data = defaultData }) => {
  const reduce = usePrefersReducedMotion();

  const card = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section id="process" className="relative scroll-mt-36 overflow-hidden bg-white">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        {/* Section header */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            {data.eyebrow}
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {data.titleA}
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {data.titleB}
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
            {data.description}
          </p>
        </motion.div>

        {/* Steps */}
        <div
          className={`relative mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 ${
            steps.length > 4
              ? 'lg:grid-cols-4'
              : 'lg:grid-cols-4'
          } lg:gap-8`}
        >
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 lg:block"
          />

          {steps.map((step, index) => {
            const Icon = ICONS[step.icon] || Search;
            return (
              <motion.div
                key={step.title}
                variants={card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)]"
              >
                <div className="relative mb-6 flex items-center justify-between">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold tracking-tight text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
