"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const gridSpans = [
  'md:col-span-2 lg:col-span-2 lg:row-span-2',
  'md:col-span-1 lg:col-span-2',
  'md:col-span-1 lg:col-span-1',
  'md:col-span-1 lg:col-span-1',
  'md:col-span-1 lg:col-span-2',
  'md:col-span-2 lg:col-span-2',
];

const ProjectCard = ({ image, index }) => {
  const reduce = usePrefersReducedMotion();
  const featured = index === 0;
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.a
      href={image.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View live project: ${image.title}`}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
      className={`group relative block overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${gridSpans[index]}`}
    >
      <Image
        src={image.src}
        alt={image.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
      />

      {/* Ghost number */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-2 bottom-0 font-black text-white/10 select-none ${
          featured ? 'text-[9rem] leading-none' : 'text-[6rem] leading-none'
        }`}
      >
        {number}
      </span>

      {/* Category chip */}
      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
        {image.category}
      </span>

      {/* Number */}
      <span
        aria-hidden
        className="absolute right-4 top-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60"
      >
        {number}
      </span>

      {/* Content */}
      <div
        className={`absolute inset-x-0 bottom-0 ${
          featured ? 'p-7 md:p-8' : 'p-5'
        }`}
      >
        <h3
          className={`font-extrabold tracking-tight text-white ${
            featured ? 'text-2xl md:text-3xl' : 'text-lg'
          }`}
        >
          {image.title}
        </h3>
        <p className="mt-1 text-sm text-white/80">{image.description}</p>

        <span
          className={`inline-flex items-center gap-1.5 font-semibold text-white transition-all duration-300 ${
            featured
              ? 'mt-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm shadow-md shadow-blue-900/30'
              : 'mt-3 text-sm opacity-0 group-hover:opacity-100'
          }`}
        >
          View live
          <ArrowUpRight
            aria-hidden
            className={`h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
              featured ? 'group-hover:rotate-45' : ''
            }`}
          />
        </span>
      </div>

      {/* Hover gradient ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1.5px',
        }}
      />
    </motion.a>
  );
};

export default ProjectCard;
