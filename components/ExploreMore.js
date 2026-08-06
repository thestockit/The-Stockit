"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Briefcase, Wrench, MessageSquare, ArrowRight } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const links = [
  {
    href: '/blog',
    icon: BookOpen,
    title: 'Read our blog',
    description: 'Practical guides on web development, SEO, and digital marketing.',
  },
  {
    href: '/portfolio',
    icon: Briefcase,
    title: 'See our work',
    description: 'Real projects and results across design, development, and marketing.',
  },
  {
    href: '/free-tools',
    icon: Wrench,
    title: 'Use our free tools',
    description: 'Free online utilities to check IPs, SSL, hosting, and more.',
  },
  {
    href: '/contact',
    icon: MessageSquare,
    title: 'Start a project',
    description: 'Tell us about your goals and get a free, no-obligation consultation.',
  },
];

const ExploreMore = () => {
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
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
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
          className="max-w-2xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Explore more
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Keep exploring
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {links.map(({ href, icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
            >
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <ArrowRight
                    className="h-5 w-5 text-gray-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-blue-600"
                    aria-hidden
                  />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
