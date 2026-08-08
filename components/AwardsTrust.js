"use client";

import { motion } from 'framer-motion';
import { Award, BadgeCheck, Landmark, TrendingUp, Star, Users } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const defaultAwards = [
  {
    icon: Award,
    title: 'Top Rated Software House',
    subtitle: 'Rawalpindi / Islamabad — 2025',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    icon: BadgeCheck,
    title: 'PSEB Certified',
    subtitle: 'Pakistan Software Export Board',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Landmark,
    title: 'SECP Registered',
    subtitle: 'FBR-compliant PKR invoicing',
    accent: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Users,
    title: '100+ Pakistani Businesses',
    subtitle: 'Served since 2020 across the country',
    accent: 'from-purple-400 to-fuchsia-500',
  },
];

const AwardsTrust = ({ awards = defaultAwards, headline = 'Trusted & recognised across Pakistan' }) => {
  const reduce = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-gray-950 to-purple-950">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 max-w-2xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5" aria-hidden />
            E-E-A-T signals
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map(({ icon: Icon, title, subtitle, accent }, index) => (
            <motion.div
              key={title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
              className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
            >
              <span
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-bold tracking-tight text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-300">{subtitle}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200"
        >
          <TrendingUp className="h-4 w-4 text-amber-300" aria-hidden />
          4.9/5 average client rating · Mon–Sat 9AM–7PM PKT · +92 324 5304585
        </motion.p>
      </div>
    </section>
  );
};

export default AwardsTrust;
