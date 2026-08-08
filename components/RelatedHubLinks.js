"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { hubs } from '@/Data/Hubs/hubs';
import { locations } from '@/Data/Locations';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const RelatedHubLinks = ({ hub }) => {
  const reduce = usePrefersReducedMotion();

  const siblingHubs = hub.relatedHubs
    .map((slug) => hubs.find((item) => item.slug === slug))
    .filter(Boolean);

  const cityPages = hub.relatedCities
    .map((slug) => locations.find((city) => city.slug === slug))
    .filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
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
          className="mb-12 max-w-2xl md:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-700">
            Related services
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Combine {hub.name} with
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              services that work together
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
            Most Pakistani businesses get the fastest results when services are combined — a great
            website plus local SEO, or an online store plus Google Shopping.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {siblingHubs.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
            >
              <Link
                href={`/services/${item.slug}`}
                className="group flex h-full items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-bold tracking-tight text-gray-900">
                    {item.name} services in Pakistan
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-gray-600">
                    {item.meta.description.split('.')[0]}.
                  </span>
                </span>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                  aria-hidden
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-14"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            {hub.name} services by city
          </p>
          <div className="flex flex-wrap gap-3">
            {cityPages.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <MapPin className="h-4 w-4 text-blue-500" aria-hidden />
                {hub.name} in {city.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedHubLinks;
