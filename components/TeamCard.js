"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Briefcase,
  Award,
} from 'lucide-react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const socials = [
  { key: 'linkedin', Icon: Linkedin, label: 'LinkedIn' },
  { key: 'github', Icon: Github, label: 'GitHub' },
  { key: 'twitter', Icon: Twitter, label: 'Twitter' },
  { key: 'instagram', Icon: Instagram, label: 'Instagram' },
];

const TeamMemberCard = ({ member, index }) => {
  const reduce = usePrefersReducedMotion();

  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
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

      {/* Avatar */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={member.imageUrl}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, 25vw"
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"
        />

        {member.expertise && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-gray-900 shadow-sm backdrop-blur-sm">
            <Award className="h-3.5 w-3.5 text-purple-600" aria-hidden />
            {member.expertise}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold tracking-tight text-gray-900">
          {member.name}
        </h3>
        <span className="mt-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-sm font-semibold text-transparent">
          {member.role}
        </span>

        {member.department && (
          <span className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-gray-500">
            <Briefcase className="h-3.5 w-3.5" aria-hidden />
            {member.department}
          </span>
        )}

        {member.description && (
          <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-3">
            {member.description}
          </p>
        )}

        {member.skills?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {member.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-blue-100 bg-blue-50/60 px-2.5 py-1 text-xs font-medium text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Socials */}
      <div className="relative border-t border-gray-100 bg-gray-50/50 p-4">
        <div className="flex items-center justify-center gap-2">
          {socials.map(({ key, Icon, label }) =>
            member.socialLinks?.[key] ? (
              <a
                key={key}
                href={member.socialLinks[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} — ${member.name}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ) : null
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default TeamMemberCard;
