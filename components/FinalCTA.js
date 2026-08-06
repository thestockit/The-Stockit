"use client";

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, AlertCircle } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';
import { SITE, whatsappLink, defaultWhatsAppMessage } from '@/constant/site';

const EASE = [0.16, 1, 0.3, 1];

const FinalCTA = ({
  titleA = 'Ready to grow your',
  titleB = 'Pakistani business?',
  description = 'Tell us what you are building and get a free, no-obligation consultation from our Islamabad / Rawalpindi team. We reply within hours — not days.',
  urgency = 'Limited slots available for new clients this month',
  whatsappLabel = 'WhatsApp Us Now',
}) => {
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
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden />
            Free consultation
          </span>

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {titleA}{' '}
            <span className="bg-gradient-to-r from-pink-300 to-amber-200 bg-clip-text text-transparent">
              {titleB}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">
            {description}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-green-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:bg-green-400"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {whatsappLabel} — {SITE.whatsappDisplay}
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {SITE.email}
            </a>

            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {SITE.phoneDisplay}
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-amber-200 md:text-sm">
            <AlertCircle className="h-4 w-4" aria-hidden />
            {urgency}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
