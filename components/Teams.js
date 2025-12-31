"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '@/Data/TeamData';
import TeamMemberCard from './TeamCard';

const Teams = () => {
    const [showAll, setShowAll] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    
    const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 8);
    
    // Filter team members by department
    const departments = ['all', ...new Set(teamMembers.map(member => member.department).filter(Boolean))];
    
    const filteredMembers = activeFilter === 'all' 
        ? displayedMembers 
        : displayedMembers.filter(member => member.department === activeFilter);

    return (
        <section id="team" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/10 to-white" />
            
            {/* Floating Gradient Orbs */}
            <div className="absolute top-20 left-10 w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute inset-10 bg-gradient-to-br from-indigo-600/10 to-pink-600/10 rounded-full blur-xl" />
            </div>
            
            <div className="absolute bottom-20 right-10 w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/5 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute inset-10 bg-gradient-to-tl from-pink-600/10 to-indigo-600/10 rounded-full blur-xl" />
            </div>
            
            <div className="max-w-7xl mx-auto relative">
                {/* Premium Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    {/* Decorative Element */}
                    <div className="inline-flex items-center justify-center gap-4 mb-8">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-600 to-transparent" />
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 rotate-45" />
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-600 to-transparent" />
                    </div>
                    
                    {/* Subtitle with gradient */}
                    <div className="mb-6">
                        <span className="
                            inline-block px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider
                            bg-gradient-to-r from-indigo-600/10 to-pink-600/10 border border-indigo-200/50
                            text-gray-700
                        ">
                            Meet Our Experts
                        </span>
                    </div>
                    
                    {/* Main Heading */}
                    <h2 className="
                        text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                        font-extrabold text-gray-900 tracking-tight mb-6
                        leading-[1.1]
                    ">
                        <span className="
                            bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900
                            bg-clip-text
                        ">
                            The Minds
                        </span>
                        <br />
                        <span className="
                            bg-gradient-to-r from-indigo-600 via-pink-600 to-indigo-600 
                            text-transparent bg-clip-text bg-200% animate-gradient-x
                        ">
                            Behind The Magic
                        </span>
                    </h2>
                    
                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A collective of visionary creators, technical experts, and strategic thinkers 
                        dedicated to crafting exceptional digital experiences.
                    </p>
                    
                    {/* Department Filters */}
                    {departments.length > 2 && (
                        <div className="flex flex-wrap justify-center gap-2 mt-10 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm">
                            {departments.map((dept) => (
                                <motion.button
                                    key={dept}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveFilter(dept)}
                                    className={`
                                        px-5 py-2.5 rounded-full text-sm font-medium 
                                        transition-all duration-300 transform
                                        ${activeFilter === dept
                                            ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                        }
                                    `}
                                >
                                    {dept === 'all' ? 'All Teams' : dept}
                                </motion.button>
                            ))}
                        </div>
                    )}
                </motion.div>
                
                {/* Team Grid with Enhanced Layout */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Grid Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/5 to-transparent -z-10" />
                    
                    {/* Team Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
                        {filteredMembers.map((member, index) => (
                            <TeamMemberCard
                                key={member.id || index}
                                member={member}
                                index={index}
                            />
                        ))}
                    </div>
                    
                    {/* Enhanced Load More Button */}
                    {teamMembers.length > 8 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-20 text-center"
                        >
                            <div className="relative inline-block">
                                {/* Decorative Rings */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-full blur-xl opacity-50" />
                                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/10 to-pink-600/10 rounded-full" />
                                
                                {/* Main Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowAll(!showAll)}
                                    className="
                                        group relative px-10 py-4 rounded-2xl
                                        bg-gradient-to-r from-indigo-600 to-pink-600
                                        text-white font-bold text-lg
                                        shadow-xl shadow-indigo-500/30
                                        hover:shadow-2xl hover:shadow-indigo-500/40
                                        transition-all duration-500
                                    "
                                >
                                    <span className="flex items-center justify-center gap-3">
                                        {showAll ? 'Show Less' : 'View All Team Members'}
                                        <svg 
                                            className={`
                                                w-5 h-5 transition-all duration-500
                                                ${showAll ? 'rotate-180' : ''}
                                                group-hover:translate-x-1
                                            `}
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                    
                                    {/* Button Hover Effect */}
                                    <div className="
                                        absolute inset-0 rounded-2xl bg-white/10 opacity-0 
                                        group-hover:opacity-100 transition-opacity duration-500
                                    " />
                                </motion.button>
                            </div>
                            
                            {/* Counter */}
                            <p className="mt-6 text-sm text-gray-500 font-medium">
                                {showAll 
                                    ? `Showing all ${teamMembers.length} team members` 
                                    : `Displaying 8 of ${teamMembers.length} talented professionals`
                                }
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Teams;