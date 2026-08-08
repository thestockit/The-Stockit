"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { hubs } from '@/Data/Hubs/hubs';
import { getServiceBySlug } from '@/Data/PakistanServices';
import usePrefersReducedMotion from './usePrefersReducedMotion';
import { getHubIcon } from './HubIcons';

const EASE = [0.16, 1, 0.3, 1];

const HERO_ICON = {
  'web-development': 'code',
  'app-development': 'smartphone',
  'ai-services': 'bot',
  'e-commerce': 'shopping-bag',
  'digital-marketing': 'trending-up',
};

const HubCategoryLinks = () => {
  const reduce = usePrefersReducedMotion();

  const items = hubs.map((hub) => {
    const firstSpoke = hub.spokes.map((spoke) => getServiceBySlug(spoke.service)).find(Boolean);
    return {
      slug: hub.slug,
      name: hub.name,
      description: hub.meta.description,
      icon: HERO_ICON[hub.slug] || 'layers',
      serviceCount: hub.spokes.filter((spoke) => getServiceBySlug(spoke.service)).length,
      firstServiceName: firstSpoke?.name,
    };
  });

  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
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
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Explore by category
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our service categories
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              for the Pakistani market
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
            Start from a category and drill into the exact services your business needs — every one
            priced in PKR with Urdu support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE, delay: index * 0.06 }}
            >
              <Link
                href={`/services/${item.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110">
                    {getHubIcon(item.icon, { className: 'h-5 w-5', 'aria-hidden': true })}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    {item.serviceCount} services
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  {item.name} in Pakistan
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors group-hover:text-purple-600">
                  Explore {item.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE, delay: items.length * 0.06 }}
          >
            <Link
              href="/services"
              className="group flex h-full flex-col justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <h3 className="text-xl font-bold tracking-tight text-gray-900">
                Need something else?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                View the full list of 30+ services, or message us on WhatsApp for a custom quote in
                PKR.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors group-hover:text-purple-600">
                Browse all services
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HubCategoryLinks;
