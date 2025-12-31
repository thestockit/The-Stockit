"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Github, Instagram, Twitter, Mail, Briefcase, MapPin, Award } from 'lucide-react';

const TeamMemberCard = ({ member, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardVariants = {
        initial: { opacity: 0, y: 60, scale: 0.9 },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const hoverVariants = {
        hover: {
            y: -15,
            scale: 1.02,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        initial: { scale: 1, rotate: 0 },
        hover: { 
            scale: 1.1, 
            rotate: 5,
            transition: { duration: 0.6 }
        }
    };

    const contentVariants = {
        hover: {
            y: -10,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative cursor-pointer"
        >
            {/* Card Glow Effect */}
            <div className="
                absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-pink-600 to-indigo-600 
                rounded-3xl blur opacity-0 group-hover:opacity-50 
                transition-opacity duration-500 -z-10
            " />
            
            {/* Main Card */}
            <div className="
                relative bg-white rounded-3xl
                shadow-xl hover:shadow-2xl
                border border-gray-200/70
                overflow-hidden
                transition-all duration-500
                backdrop-blur-sm
            ">
                {/* Gradient Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 via-pink-600 to-indigo-600" />
                
                {/* Avatar Section with Enhanced Effects */}
                <div className="relative pt-10 pb-6 px-6">
                    {/* Avatar Container with Glow */}
                    <motion.div 
                        variants={imageVariants}
                        className="relative mx-auto w-36 h-36 mb-8"
                    >
                        {/* Outer Glow Ring */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/30 via-pink-600/30 to-indigo-600/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* Middle Ring */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full animate-spin-slow">
                            <div className="absolute inset-[2px] bg-white rounded-full" />
                        </div>
                        
                        {/* Inner Avatar */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <Image
                                src={member.imageUrl}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-700"
                                sizes="(max-width: 768px) 144px, 144px"
                            />
                            
                            {/* Overlay Gradient */}
                            <div className="
                                absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            " />
                        </div>
                        
                        {/* Floating Badge */}
                        {member.expertise && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.2 + 0.5 }}
                                className="
                                    absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full
                                    bg-gradient-to-r from-indigo-600 to-pink-600
                                    text-white text-xs font-bold
                                    shadow-lg
                                    flex items-center gap-1
                                "
                            >
                                <Award className="w-3 h-3" />
                                <span>{member.expertise}</span>
                            </motion.div>
                        )}
                    </motion.div>
                    
                    {/* Name & Title with Enhanced Typography */}
                    <motion.div 
                        variants={contentVariants}
                        className="text-center"
                    >
                        <h3 className="
                            text-2xl font-bold text-gray-900 
                            mb-2 tracking-tight
                            group-hover:text-gray-800
                            transition-colors duration-300
                        ">
                            {member.name}
                        </h3>
                        
                        <div className="mb-4">
                            <p className="
                                text-base font-semibold 
                                bg-gradient-to-r from-indigo-600 to-pink-600 
                                text-transparent bg-clip-text
                                mb-1
                            ">
                                {member.role}
                            </p>
                            
                            {member.department && (
                                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                    <Briefcase className="w-3.5 h-3.5" />
                                    <span>{member.department}</span>
                                </div>
                            )}
                        </div>
                        
                        {/* Bio with Expandable Feature */}
                        <AnimatePresence>
                            {isHovered && member.description && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="
                                        text-sm text-gray-600 mt-4 mb-6
                                        leading-relaxed text-center
                                        px-4
                                    "
                                >
                                    {member.description}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    
                    {/* Skills Tags - Appear on Hover */}
                    <AnimatePresence>
                        {isHovered && member.skills && member.skills.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="flex flex-wrap justify-center gap-2 mt-4 mb-6"
                            >
                                {member.skills.slice(0, 4).map((skill, i) => (
                                    <span
                                        key={i}
                                        className="
                                            px-3 py-1.5 rounded-full text-xs font-medium
                                            bg-gradient-to-r from-indigo-50 to-pink-50
                                            text-gray-700 border border-indigo-100
                                            hover:border-indigo-300 transition-colors duration-300
                                        "
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Enhanced Social Links with Animation */}
                <div className="
                    border-t border-gray-100
                    bg-gradient-to-r from-gray-50/70 to-white/70
                    p-6
                    transition-all duration-500
                    group-hover:bg-gradient-to-r group-hover:from-indigo-50/50 group-hover:to-pink-50/50
                    group-hover:border-t group-hover:border-indigo-100/50
                ">
                    <div className="flex justify-center gap-3">
                        {member.socialLinks?.linkedin && (
                            <motion.a
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href={member.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    relative w-12 h-12 rounded-2xl
                                    bg-gradient-to-br from-indigo-500 to-indigo-700
                                    text-white
                                    flex items-center justify-center
                                    shadow-md hover:shadow-lg hover:shadow-indigo-500/40
                                    transition-all duration-300
                                    group/social
                                "
                                aria-label={`Connect with ${member.name} on LinkedIn`}
                            >
                                <Linkedin className="w-5 h-5" />
                                <div className="
                                    absolute inset-0 rounded-2xl bg-white opacity-0 
                                    group-hover/social:opacity-10 transition-opacity duration-300
                                " />
                            </motion.a>
                        )}
                        
                        {member.socialLinks?.github && (
                            <motion.a
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href={member.socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    relative w-12 h-12 rounded-2xl
                                    bg-gradient-to-br from-gray-900 to-gray-700
                                    text-white
                                    flex items-center justify-center
                                    shadow-md hover:shadow-lg hover:shadow-gray-500/40
                                    transition-all duration-300
                                    group/social
                                "
                                aria-label={`View ${member.name}'s GitHub`}
                            >
                                <Github className="w-5 h-5" />
                                <div className="
                                    absolute inset-0 rounded-2xl bg-white opacity-0 
                                    group-hover/social:opacity-10 transition-opacity duration-300
                                " />
                            </motion.a>
                        )}
                        
                        {member.socialLinks?.twitter && (
                            <motion.a
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href={member.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    relative w-12 h-12 rounded-2xl
                                    bg-gradient-to-br from-blue-500 to-blue-400
                                    text-white
                                    flex items-center justify-center
                                    shadow-md hover:shadow-lg hover:shadow-blue-500/40
                                    transition-all duration-300
                                    group/social
                                "
                                aria-label={`Follow ${member.name} on Twitter`}
                            >
                                <Twitter className="w-5 h-5" />
                                <div className="
                                    absolute inset-0 rounded-2xl bg-white opacity-0 
                                    group-hover/social:opacity-10 transition-opacity duration-300
                                " />
                            </motion.a>
                        )}
                        
                        {member.socialLinks?.instagram && (
                            <motion.a
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href={member.socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    relative w-12 h-12 rounded-2xl
                                    bg-gradient-to-br from-pink-600 to-purple-600
                                    text-white
                                    flex items-center justify-center
                                    shadow-md hover:shadow-lg hover:shadow-pink-500/40
                                    transition-all duration-300
                                    group/social
                                "
                                aria-label={`Follow ${member.name} on Instagram`}
                            >
                                <Instagram className="w-5 h-5" />
                                <div className="
                                    absolute inset-0 rounded-2xl bg-white opacity-0 
                                    group-hover/social:opacity-10 transition-opacity duration-300
                                " />
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Floating Particles Effect */}
            <div className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-r from-indigo-600/5 via-pink-600/5 to-indigo-600/5
                -z-10 opacity-0 group-hover:opacity-100
                blur-xl transition-opacity duration-1000
            " />
        </motion.div>
    );
};

export default TeamMemberCard;