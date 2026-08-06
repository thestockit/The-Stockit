"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Globe2, Clock, DollarSign, ArrowRight } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const points = [
  {
    icon: MapPin,
    title: 'Based in Rawalpindi, Pakistan',
    description: 'Our studio is in Bahria Town Phase 7, Rawalpindi — right next to Islamabad.',
  },
  {
    icon: Globe2,
    title: 'Serving the US, UK & Europe',
    description: 'We work with clients across North America and Europe on fully remote engagements.',
  },
  {
    icon: Clock,
    title: 'Time-zone friendly',
    description: 'We overlap with US and European working hours and respond within hours, not days.',
  },
  {
    icon: DollarSign,
    title: 'Global quality, smart pricing',
    description: 'You get agency-level quality at a cost structure that is hard to match locally.',
  },
];

const LocalEdge = () => {
  const reduce = usePrefersReducedMotion();

  const item = {
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
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading + intro */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-5"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              Our edge
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Built in Pakistan,
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                trusted worldwide
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              A dedicated team that combines the best of both worlds: Western
              communication and process standards, delivered from a cost-effective
              development hub in Pakistan.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Right: feature cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {points.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  variants={item}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)]"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalEdge;
