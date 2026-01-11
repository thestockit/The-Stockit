"use client";

import React, { useRef, useEffect } from 'react';
import { Layers, CheckCircle2, Zap } from 'lucide-react';

const ServiceHero = () => {
  const videoRef = useRef(null);

  // Auto-play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Card with Light Gradient */}
        <div className="relative bg-gradient-to-br from-indigo-50 via-white to-pink-50 rounded-[40px] overflow-hidden p-8 md:p-12 border border-gray-200 shadow-sm">
          
          {/* Top Section: Content & Video with Equal Height */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Content Column - Full height matching video */}
            <div className="lg:w-2/3">
              <div className="h-full flex flex-col justify-center min-h-[320px] md:min-h-[400px]">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  UI/UX design <span className="text-gray-700">that gets your B2B product to market</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">40% faster</span> <span className="text-gray-700">— no quality tradeoffs</span>
                </h1>
              </div>
            </div>

            {/* Video Column - Fixed height */}
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
                {/* Auto-playing Video */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent flex items-center justify-center">
                  <div className="absolute bottom-6 left-6 bg-white rounded-full p-4 shadow-md hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-gray-900 border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Info & Button */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex items-center gap-4 text-gray-800">
                <div className="p-2 bg-gradient-to-r from-indigo-100 to-pink-100 rounded-lg border border-gray-200">
                  <Layers size={24} className="text-indigo-600" />
                </div>
                <p className="text-sm font-medium leading-tight">
                  Our unique framework + AI tools<br />deliver results 2x faster
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-gray-800">
                <div className="p-2 bg-gradient-to-r from-indigo-100 to-pink-100 rounded-lg border border-gray-200">
                  <CheckCircle2 size={24} className="text-pink-600" />
                </div>
                <p className="text-sm font-medium leading-tight">
                  Based on 500+ finished projects<br />& 12 years of experience
                </p>
              </div>
            </div>

            {/* Smaller Button */}
            <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap text-sm md:text-base">
              <Zap size={18} className="text-white" />
              BOOK A CALL
            </button>
          </div>
        </div>

        {/* Social Proof Logos */}
        <div className="mt-8 md:mt-12 px-4">
          <p className="text-center text-gray-600 text-sm mb-8 flex items-center justify-center gap-4 before:h-px before:w-12 before:bg-gray-300 after:h-px after:w-12 after:bg-gray-300 uppercase tracking-widest font-medium">
            Trusted by global brands & SMBs in the US and Europe
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center">
            <div className="flex justify-center text-gray-800 text-base md:text-lg font-bold italic tracking-tighter p-3 md:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">NOKIA</div>
            <div className="flex justify-center text-gray-800 text-base md:text-lg font-bold tracking-tight p-3 md:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">Bumble</div>
            <div className="flex justify-center text-gray-800 text-base md:text-lg font-serif font-bold p-3 md:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">Schibsted</div>
            <div className="flex justify-center text-gray-800 text-base md:text-lg font-semibold italic p-3 md:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">Opera</div>
            <div className="flex justify-center text-gray-800 text-base md:text-lg font-bold p-3 md:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">Bonterra</div>
            <div className="flex justify-center text-gray-800 text-base md:text-lg font-black lowercase tracking-tighter p-3 md:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">zoom</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;