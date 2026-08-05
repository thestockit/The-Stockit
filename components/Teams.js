"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Users } from 'lucide-react';
import { teamMembers } from '@/Data/TeamData';
import TeamMemberCard from './TeamCard';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const Teams = () => {
  const reduce = usePrefersReducedMotion();
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 8);
  const departments = [
    'all',
    ...new Set(teamMembers.map((m) => m.department).filter(Boolean)),
  ];
  const filteredMembers =
    activeFilter === 'all'
      ? displayedMembers
      : displayedMembers.filter((m) => m.department === activeFilter);

  const fadeUp = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section id="team" className="relative overflow-hidden bg-white">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Hairline divider */}
      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        {/* Section header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-700"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-600" />
            </span>
            Meet our experts
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            The minds
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              behind the magic
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg"
          >
            A collective of visionary creators, technical experts, and strategic
            thinkers dedicated to crafting exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Department filters */}
        {departments.length > 1 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="mb-12 flex flex-wrap justify-center gap-2 md:mb-14"
            role="group"
            aria-label="Filter team members by department"
          >
            {departments.map((dept) => {
              const active = activeFilter === dept;
              return (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setActiveFilter(dept)}
                  aria-pressed={active}
                  className={
                    active
                      ? 'rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      : 'rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                  }
                >
                  {dept === 'all' ? 'All Teams' : dept}
                </button>
              );
            })}
          </motion.div>
        )}

        {/* Team grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8"
        >
          {filteredMembers.map((member, index) => (
            <TeamMemberCard key={member.id || index} member={member} index={index} />
          ))}
        </motion.div>

        {/* Show more */}
        {teamMembers.length > 8 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="mt-14 text-center"
          >
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Users className="h-4 w-4" aria-hidden />
              {showAll ? 'Show less' : 'View all team members'}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                aria-hidden
              />
            </button>
            <p className="mt-4 text-sm font-medium text-gray-500">
              {showAll
                ? `Showing all ${teamMembers.length} team members`
                : `Displaying 8 of ${teamMembers.length} talented professionals`}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Teams;
