"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const MessageBanner = () => {
  const handleClutchClick = () => {
    window.open("https://clutch.co/profile/stockit", '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white px-4 md:px-8 lg:px-16 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Clutch Button & Reviews */}
          <div className="lg:w-1/3">
            <div className="flex flex-col items-start">
              {/* Clutch Button with Reviews */}
              <motion.div
                className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl hover:border-indigo-500 transition-all duration-300 cursor-pointer group hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClutchClick}
              >
                {/* Clutch Logo Button */}
                <motion.div
                  className="relative w-12 h-12 rounded-full border-2 border-indigo-500 flex items-center justify-center bg-white"
                  whileHover={{ rotate: 5 }}
                >
                  {/* Clutch Logo SVG */}
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-indigo-600"
                  >
                    <path 
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM10 16L15 12L10 8V16Z" 
                      fill="currentColor"
                    />
                  </svg>
                </motion.div>
                
                {/* Vertical Line */}
                <div className="h-10 w-px bg-gradient-to-b from-gray-300 to-gray-100" />
                
                {/* Reviews Text */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">80+</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">Reviews</span>
                  <span className="text-xs text-gray-500 mt-1">On Clutch</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: Updated Mission Statement */}
          <div className="lg:w-2/3">
            {/* Updated mission statement */}
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
                We&apos;ve helped{' '}
                <span className="relative inline-block group">
                  <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text font-bold">
                    hundreds of partners
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
                , ranging from startups to medium-sized businesses to achieve their goals. And{' '}
                <span className="relative inline-block group">
                  <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text font-bold">
                    stellar feedback
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
                — is our reward!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBanner;