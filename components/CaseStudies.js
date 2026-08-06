"use client";

import { motion } from 'framer-motion';
import { MapPin, TrendingUp } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const defaultItems = [
  {
    title: 'How a Bahria Town real estate agency tripled its leads',
    business: 'Bahria Town Realty',
    location: 'Rawalpindi / Islamabad',
    metrics: [
      { value: '300%', label: 'More leads' },
      { value: '24/7', label: 'Lead capture' },
    ],
    description:
      'We automated WhatsApp and web lead capture for a Bahria Town property agency. Enquiries after office hours no longer go cold — every buyer message is answered within seconds.',
  },
  {
    title: 'Lahore fashion brand doubles online sales',
    business: 'Lahore Threads',
    location: 'Lahore, Gulberg',
    metrics: [
      { value: '250%', label: 'Sales growth' },
      { value: '48h', label: 'First launch' },
    ],
    description:
      'A complete Shopify store with JazzCash and Easypaisa checkout, bilingual product pages, and WhatsApp order confirmation helped this fashion label grow fast in its first season.',
  },
  {
    title: 'Karachi logistics firm automates monthly invoicing',
    business: 'Karachi Cargo Co.',
    location: 'Karachi, Shahrah-e-Faisal',
    metrics: [
      { value: '10,000+', label: 'Invoices / month' },
      { value: '80%', label: 'Manual work saved' },
    ],
    description:
      'Automated invoice generation with FBR-compliant records and email delivery cut admin work dramatically for a Karachi logistics company.',
  },
];

const CaseStudies = ({
  eyebrow = 'Pakistani results',
  titleA = 'Real results for',
  titleB = 'Pakistani businesses',
  description = 'A few examples of how we help local companies grow — from real estate in Rawalpindi to e-commerce in Lahore.',
  items = defaultItems,
}) => {
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
        <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            {eyebrow}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {titleA}{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {titleB}
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 lg:grid-cols-3 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
              className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)]"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  {item.location}
                </span>
                <TrendingUp className="h-5 w-5 text-green-600" aria-hidden />
              </div>

              <h3 className="text-lg font-bold leading-snug tracking-tight text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-blue-600">{item.business}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-5">
                {item.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent">
                      {metric.value}
                    </div>
                    <div className="mt-0.5 text-xs font-medium text-gray-500">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
