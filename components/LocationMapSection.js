"use client";

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { mapEmbedUrl } from '@/Data/Locations/_shared';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const LocationMapSection = ({ city }) => {
  const reduce = usePrefersReducedMotion();

  const fadeUp = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <Navigation className="h-3.5 w-3.5" aria-hidden />
              Find us / how we serve
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Working with businesses in
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {city.name}
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              {city.map.addressLabel}. For clients outside the twin cities, we work remotely with
              daily WhatsApp support and regular on-site visits.
            </p>

            <div className="mt-6 flex items-start gap-3 text-gray-700">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden />
              <p className="text-sm leading-relaxed">
                <strong className="text-gray-900">Areas we serve in {city.name}:</strong>{' '}
                {city.map.areas.join(', ')}.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Nearest local office
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-800">
                Asian Business Center, First Floor, Bahria Town Phase 7, Rawalpindi, Pakistan
              </p>
              <a
                href="https://maps.google.com/?q=Asian+Business+Center,+Bahria+Town+Phase+7,+Rawalpindi,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-purple-600"
              >
                Get directions
                <Navigation className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
              <iframe
                title={`Map of ${city.name}, Pakistan`}
                src={mapEmbedUrl(city.map.query)}
                width="100%"
                height="420"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMapSection;
