"use client";

import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const FoundersMessage = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [badgeLinks] = useState({
    1: "https://dribbble.com/the-stockit",
    2: "https://clutch.co/profile/stockit",
    3: "https://www.goodfirms.co/company/the-stockit",
    4: "https://upwork.com"
  });

  // Badge data with links
  const badges = [
    { id: 1, platform: 'Dribbble', text: 'Design Excellence', logo: '𝕯' },
    { id: 2, platform: 'Clutch', text: 'Top Rated Agency', logo: '𝕮' },
    { id: 3, platform: 'GoodFirms', text: 'Verified Partner', logo: '𝕲' },
    { id: 4, platform: 'Upwork', text: 'Top 1% Talent', logo: '𝖀' },
  ];

  // Founders data with images - Replace with your actual image paths
  const founders = [
    { 
      id: 1, 
      initials: 'LP',
      name: 'Mohammad Luqman Pervez',
      role: 'CEO & Co-Founder',
      image: '/luqman.7594d0c02542d797b36e.webp'
    },
    { 
      id: 2, 
      initials: 'MS',
      name: 'Mohammad Shehzad',
      role: 'CTO & Co-Founder',
      image: '/shahzad.0d4299ee9b71ef25f432.webp'
    },
  ];

  const handleImageError = (founderId) => {
    setImageErrors(prev => ({ ...prev, [founderId]: true }));
  };

  return (
    <div className="min-h-screen bg-white px-4 md:px-8 lg:px-16 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP ROW: Founders + Mission Statement (2 columns) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start mb-16 lg:mb-24">
          
          {/* LEFT COLUMN: Founders Section */}
          <div className="lg:w-1/3">
            <div className="flex flex-col items-start mb-6">
              {/* Avatars Row */}
              <div className="flex -space-x-3 mb-4">
                {founders.map((founder, index) => (
                  <motion.div
                    key={founder.id}
                    className="relative w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center overflow-hidden shadow-sm"
                    initial={{ x: -20 * index }}
                    animate={{ x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  >
                    {/* Show image if available and no error */}
                    {founder.image && !imageErrors[founder.id] ? (
                      <Image
                        src={founder.image}
                        alt={`Founder ${founder.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 48px, 48px"
                        onError={() => handleImageError(founder.id)}
                      />
                    ) : (
                      /* Fallback to initials if image fails to load */
                      <div className="w-full h-full flex items-center justify-center font-semibold text-gray-900 text-sm bg-gray-50">
                        {founder.initials}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Founder Text BELOW images */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Founders of The Stockit
                </h3>
                <p className="text-sm text-gray-600">Trusted by industry leaders</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Mission Statement */}
          <div className="lg:w-2/3 lg:sticky lg:top-24">
            {/* Static mission statement with custom font */}
            <div className="cursor-default">
              <h4 
                className="font-medium text-gray-900 leading-tight tracking-tight"
                style={{
                  fontSize: '41.3215px',
                  fontFamily: 'Suisse, Arial, sans-serif',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontVariant: 'normal',
                  textTransform: 'none',
                  textDecoration: 'none',
                  textAlign: 'start',
                  textIndent: '0px',
                  fontKerning: 'auto',
                  fontOpticalSizing: 'auto',
                  fontStretch: '100%',
                  fontVariationSettings: 'normal',
                  fontFeatureSettings: 'normal'
                }}
              >
                We&apos;re redefining digital excellence through{' '}
                <span className="relative inline-block group">
                  <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
                    precision
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>{' '}
                and innovation, crafting solutions that not only meet but exceed the evolving demands of tomorrow&apos;s digital landscape.
              </h4>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Circular Badges (Single Row) - NOW CLICKABLE */}
        <div className="mt-12 lg:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {badges.map((badge) => (
              <BadgeCircle 
                key={badge.id} 
                badge={badge} 
                link={badgeLinks[badge.id]} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// Updated Badge Circle Component with clickable functionality
const BadgeCircle = ({ badge, link }) => {
  const controls = useAnimation();

  const handleHover = async () => {
    await controls.start({
      y: [0, -8, 0],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeInOut"
      }
    });
  };

  const handleHoverEnd = () => {
    controls.stop();
    controls.start({ y: 0 });
  };

  const handleClick = (e) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="aspect-square rounded-full border border-gray-200 bg-white flex flex-col items-center justify-center p-4 md:p-6 relative group cursor-pointer shadow-sm"
      animate={controls}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      whileHover={{ scale: 1.05 }}
      initial={{ y: 0 }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`${badge.platform} - ${badge.text}. Click to visit ${badge.platform}`}
    >
      {/* Platform Logo */}
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text mb-2 md:mb-3">
        {badge.logo}
      </div>
      
      {/* Platform Name */}
      <div className="text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
        {badge.platform}
      </div>
      
      {/* Description */}
      <div className="text-[10px] md:text-xs text-center text-gray-600">
        {badge.text}
      </div>

      {/* Click Indicator */}
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg 
          className="w-4 h-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
          />
        </svg>
      </div>

      {/* Hover Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gray-300"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default FoundersMessage;