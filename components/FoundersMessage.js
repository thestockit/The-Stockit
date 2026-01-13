"use client";

import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const FoundersMessage = ({
  founders = [],
  badges = [],
  missionStatement = "",
  gradientWord = "",
  afterGradientText = "",
  textAlignment = "start", // "start", "center", "end"
  layoutType = "default", // "default", "centered", "compact"
  showFounders = true,
  showBadges = true,
  gradientColors = {
    from: "from-indigo-600",
    to: "to-pink-600",
    borderFrom: "from-indigo-600",
    borderTo: "to-pink-600"
  }
}) => {
  const [imageErrors, setImageErrors] = useState({});

  // Default founders data if none provided
  const defaultFounders = [
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

  // Default badges data if none provided
  const defaultBadges = [
    { id: 1, platform: 'Dribbble', text: 'Design Excellence', logo: '𝕯', link: 'https://dribbble.com/the-stockit' },
    { id: 2, platform: 'Clutch', text: 'Top Rated Agency', logo: '𝕮', link: 'https://clutch.co/profile/stockit' },
    { id: 3, platform: 'GoodFirms', text: 'Verified Partner', logo: '𝕲', link: 'https://www.goodfirms.co/company/the-stockit' },
    { id: 4, platform: 'Upwork', text: 'Top 1% Talent', logo: '𝖀', link: 'https://upwork.com' },
  ];

  const foundersData = founders.length > 0 ? founders : defaultFounders;
  const badgesData = badges.length > 0 ? badges : defaultBadges;

  const handleImageError = (founderId) => {
    setImageErrors(prev => ({ ...prev, [founderId]: true }));
  };

  // Get alignment class based on prop
  const getAlignmentClass = () => {
    switch(textAlignment) {
      case "center": return "text-center mx-auto";
      case "end": return "text-end ml-auto";
      default: return "text-start";
    }
  };

  // Get layout width based on type
  const getLayoutWidth = () => {
    switch(layoutType) {
      case "compact": return "max-w-5xl";
      case "centered": return "max-w-4xl";
      default: return "max-w-7xl";
    }
  };

  return (
    <div className={`min-h-screen bg-white px-4 md:px-8 lg:px-16 py-12 md:py-24 ${layoutType === 'compact' ? 'py-8 md:py-16' : ''}`}>
      <div className={`mx-auto ${getLayoutWidth()}`}>
        
        {/* TOP ROW: Founders + Mission Statement */}
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-24 items-start mb-16 lg:mb-24 ${
          layoutType === 'centered' ? 'justify-center' : ''
        }`}>
          
          {/* LEFT COLUMN: Founders Section (Conditional) */}
          {showFounders && (
            <div className={`${layoutType === 'centered' ? 'lg:w-full text-center mb-8' : 'lg:w-1/3'}`}>
              <div className={`flex ${layoutType === 'centered' ? 'flex-col items-center' : 'flex-col items-start'} mb-6`}>
                {/* Avatars Row */}
                {layoutType !== 'centered' && (
                  <div className="flex -space-x-3 mb-4">
                    {foundersData.map((founder, index) => (
                      <motion.div
                        key={founder.id}
                        className="relative w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center overflow-hidden shadow-sm"
                        initial={{ x: -20 * index }}
                        animate={{ x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, zIndex: 10 }}
                      >
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
                          <div className="w-full h-full flex items-center justify-center font-semibold text-gray-900 text-sm bg-gray-50">
                            {founder.initials}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {/* Founder Text */}
                <div className={layoutType === 'centered' ? 'text-center' : ''}>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Founders of The Stockit
                  </h3>
                  <p className="text-sm text-gray-600">Trusted by industry leaders</p>
                </div>
              </div>
            </div>
          )}

          {/* RIGHT COLUMN: Mission Statement */}
          <div className={`${showFounders && layoutType !== 'centered' ? 'lg:w-2/3' : 'lg:w-full'} ${
            layoutType === 'default' ? 'lg:sticky lg:top-24' : ''
          }`}>
            {/* Mission statement with dynamic alignment */}
            <div className={`cursor-default ${getAlignmentClass()} ${
              layoutType === 'centered' ? 'max-w-3xl mx-auto' : ''
            }`}>
              <h4 
                className={`font-medium text-gray-900 leading-tight tracking-tight ${
                  layoutType === 'compact' ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl lg:text-[41.3215px]'
                }`}
                style={{
                  fontFamily: 'Suisse, Arial, sans-serif',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontVariant: 'normal',
                  textTransform: 'none',
                  textDecoration: 'none',
                  fontKerning: 'auto',
                  fontOpticalSizing: 'auto',
                  fontStretch: '100%',
                  fontVariationSettings: 'normal',
                  fontFeatureSettings: 'normal'
                }}
              >
                {missionStatement || "We're redefining digital excellence through "}
                
                {gradientWord && (
                  <>
                    {' '}
                    <span className="relative inline-block group">
                      <span className={`relative z-10 bg-gradient-to-r ${gradientColors.from} ${gradientColors.to} text-transparent bg-clip-text`}>
                        {gradientWord}
                      </span>
                      <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r ${gradientColors.borderFrom || gradientColors.from} ${gradientColors.borderTo || gradientColors.to} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                    </span>
                    {' '}
                  </>
                )}
                
                {afterGradientText || "and innovation, crafting solutions that not only meet but exceed the evolving demands of tomorrow's digital landscape."}
              </h4>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Circular Badges (Conditional) */}
        {showBadges && (
          <div className={`mt-12 lg:mt-24 ${
            layoutType === 'compact' ? 'mt-8 lg:mt-16' : ''
          }`}>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 ${
              layoutType === 'compact' ? 'max-w-3xl mx-auto' : ''
            }`}>
              {badgesData.map((badge) => (
                <BadgeCircle 
                  key={badge.id} 
                  badge={badge} 
                  link={badge.link}
                  gradientColors={gradientColors}
                  compact={layoutType === 'compact'}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

// Badge Circle Component
const BadgeCircle = ({ badge, link, gradientColors, compact = false }) => {
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
      className={`aspect-square rounded-full border border-gray-200 bg-white flex flex-col items-center justify-center p-4 relative group cursor-pointer shadow-sm ${
        compact ? 'md:p-4' : 'md:p-6'
      }`}
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
      <div className={`font-bold bg-gradient-to-r ${gradientColors.from} ${gradientColors.to} text-transparent bg-clip-text mb-2 md:mb-3 ${
        compact ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl lg:text-4xl'
      }`}>
        {badge.logo}
      </div>
      
      {/* Platform Name */}
      <div className={`font-semibold text-gray-900 uppercase tracking-wider mb-1 group-hover:bg-gradient-to-r ${gradientColors.from} ${gradientColors.to} group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300 ${
        compact ? 'text-xs' : 'text-xs md:text-sm'
      }`}>
        {badge.platform}
      </div>
      
      {/* Description */}
      <div className={`text-center text-gray-600 ${
        compact ? 'text-[10px]' : 'text-[10px] md:text-xs'
      }`}>
        {badge.text}
      </div>

      {/* Click Indicator */}
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg 
          className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} bg-gradient-to-r ${gradientColors.from} ${gradientColors.to} text-transparent bg-clip-text`} 
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