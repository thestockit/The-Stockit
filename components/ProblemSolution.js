"use client";

import { motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const defaultData = {
  eyebrow: 'Why The Stockit',
  titleA: 'The problem, and',
  titleB: 'how we solve it',
  problems: [
    'Generic templates that look dated and fail to convert',
    'Slow, unoptimized websites that lose rankings and visitors',
    'Marketing spend with no measurable return on investment',
    'Scattered freelancers with no single accountable team',
    'Pretty designs that frustrate users instead of guiding them',
  ],
  solutions: [
    'Custom design and development tailored to your business goals',
    'Performance and technical SEO built into every single build',
    'Data-driven campaigns with transparent, regular reporting',
    'One team handling design, development, marketing, and content',
    'User-first UX that turns visitors into loyal customers',
  ],
};

const ProblemSolution = ({ data = defaultData }) => {
  const reduce = usePrefersReducedMotion();

  const panel = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            {data.eyebrow}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {data.titleA}{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {data.titleB}
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* The problem */}
          <motion.div
            variants={panel}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="rounded-2xl border border-rose-100 bg-rose-50/40 p-7 md:p-9"
          >
            <h3 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-rose-700 md:text-2xl">
              <X className="h-5 w-5" aria-hidden />
              What usually goes wrong
            </h3>
            <ul className="mt-6 space-y-3.5">
              {data.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    <X className="h-3 w-3" aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-gray-700 md:text-base">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our solution */}
          <motion.div
            variants={panel}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/60 to-purple-50/60 p-7 md:p-9"
          >
            <h3 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-blue-700 md:text-2xl">
              <CheckCircle2 className="h-5 w-5" aria-hidden />
              How The Stockit fixes it
            </h3>
            <ul className="mt-6 space-y-3.5">
              {data.solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <CheckCircle2 className="h-3 w-3" aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-gray-700 md:text-base">
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
