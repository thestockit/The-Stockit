"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const ServicesCard = ({ elm, index }) => {
  const reduce = usePrefersReducedMotion();
  const cardNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.12 }}
      viewport={{ once: true, margin: '-60px' }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)]"
    >
      {/* Hover gradient ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1.5px',
        }}
      />

      {/* Card header */}
      <div className="relative flex items-start justify-between gap-4 p-6 md:p-7">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            {cardNumber}
          </span>
          <h3 className="mt-1.5 text-2xl font-extrabold tracking-tight text-gray-900">
            {elm.title}
          </h3>
          <span className="mt-1 block text-sm text-gray-500">
            {elm.subServices.length} services
          </span>
        </div>

        <span
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110"
        >
          {elm.icon}
        </span>
      </div>

      {/* Sub-service list */}
      <div className="relative flex-1 divide-y divide-gray-100 border-t border-gray-100">
        {elm.subServices.map((sub) => (
          <Link
            key={sub.name}
            href={sub.href}
            className="group/row flex items-center justify-between gap-4 px-6 py-3.5 transition-colors duration-200 hover:bg-blue-50/40 focus-visible:bg-blue-50/40 focus-visible:outline-none md:px-7"
          >
            <span className="font-medium text-gray-800 transition-colors duration-200 group-hover/row:text-gray-900">
              {sub.name}
            </span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-gray-300 transition-all duration-200 group-hover/row:text-blue-600 group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesCard;
