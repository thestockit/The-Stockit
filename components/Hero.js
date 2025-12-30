 "use client";

import React, { useRef, useEffect, useState } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Start animations after component mounts
  useEffect(() => {
    // Start video
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.log("Autoplay prevented, user interaction required");
      });
    }

    // Trigger card animations
    setIsAnimating(true);

    // Reset animation state for re-trigger on component remount
    return () => setIsAnimating(false);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background elements with animation */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-0 ${isAnimating ? 'animate-pulse-in opacity-20' : ''}`}></div>
        <div className={`absolute top-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-0 ${isAnimating ? 'animate-pulse-in opacity-20 delay-300' : ''}`}></div>
        <div className={`absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-0 ${isAnimating ? 'animate-pulse-in opacity-20 delay-600' : ''}`}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6">
          
          {/* Left Card - 70% width with professional animation */}
          <div className={`w-full lg:w-10/12 transform ${isAnimating ? 'animate-card-slide-left' : 'opacity-0 translate-x-[-30px]'}`}>
            <div className="h-full bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-7 lg:p-8 border border-gray-200/50 shadow-lg md:shadow-xl">
              {/* Glow effect border */}
              <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-0 animate-glow"></div>
              
              {/* Card content */}
              <div className="relative max-w-2xl mx-auto lg:mx-0">
                {/* Main headline with staggered animation */}
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 md:mb-4 overflow-hidden ${isAnimating ? 'animate-headline-reveal' : ''}`}>
                  <span className={`block text-gray-900 ${isAnimating ? 'animate-text-slide-up delay-100' : 'opacity-0 translate-y-4'}`}>
                    Empowering Your
                  </span>
                  <span className={`block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-1 md:mt-2 ${isAnimating ? 'animate-gradient-reveal delay-300' : 'opacity-0'}`}>
                    Digital Presence
                  </span>
                </h1>
                
                {/* Subheadline with animation */}
                <div className={`relative inline-block mb-3 md:mb-4 ${isAnimating ? 'animate-fade-in-up delay-500' : 'opacity-0 translate-y-4'}`}>
                  <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                    10X Faster Growth
                  </h2>
                  <div className="absolute -bottom-1.5 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full"></div>
                  <div className={`absolute -bottom-1.5 md:-bottom-2 left-0 h-0.5 md:h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ${isAnimating ? 'animate-expand-width delay-700' : 'w-0'}`}></div>
                </div>
                
                {/* Description with animation */}
                <p className={`text-base sm:text-lg md:text-lg text-gray-600 mb-4 md:mb-6 max-w-xl ${isAnimating ? 'animate-text-reveal delay-600' : 'opacity-0 translate-y-4'}`}>
                  The Stockit provides expert web development, SEO, and digital marketing services to accelerate your online growth and success. We deliver measurable results, not just promises.
                </p>
                
                {/* Full line divider with animation */}
                <div className={`my-4 md:my-6 ${isAnimating ? 'animate-expand-width-slow delay-800' : 'w-0 opacity-0'}`}>
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                
                {/* Professional Experience Section - Compact and Professional */}
                <div className={`mt-4 md:mt-5 transform ${isAnimating ? 'animate-card-pop delay-900' : 'opacity-0 scale-95'}`}>
                  {/* Professional Experience Box */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 md:p-5 border border-blue-100">
                    {/* Experience Content */}
                    <div className="flex items-center space-x-3 md:space-x-4 w-full sm:w-auto">
                      {/* Experience Badge */}
                      <div className="relative">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
                          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                          </div>
                        </div>
                        {/* Pulsing animation ring */}
                        <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-full border-2 border-blue-300 animate-ping-slow"></div>
                      </div>
                      
                      {/* Experience Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                          <div className="text-lg md:text-xl font-bold text-gray-800">12+ Years Experience</div>
                          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                          <div className="text-sm md:text-base text-gray-600 mt-1 sm:mt-0">Design-driven B2B development</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button - Professional Style */}
                    <button className={`w-full sm:w-auto px-4 py-2.5 md:px-5 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 flex-shrink-0 shadow-md hover:shadow-xl ${isAnimating ? 'animate-button-glow delay-1000' : 'opacity-0'}`}>
                      <span className="text-sm md:text-base font-medium">Book Consultation</span>
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Card - 30% width with professional video animation */}
          <div className={`w-full lg:w-5/12 transform ${isAnimating ? 'animate-card-slide-right' : 'opacity-0 translate-x-[30px]'}`}>
            <div className="h-full bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl relative">
              {/* Animated border glow */}
              <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 animate-glow-slow"></div>
              
              {/* Video container - fills the entire card with no gaps */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-full lg:min-h-[450px] xl:min-h-[500px] overflow-hidden">
                {/* Video element - full screen cover with fade in */}
                <div className={`absolute inset-0 w-full h-full ${isAnimating ? 'animate-video-reveal' : 'opacity-0 scale-110'}`}>
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    {/* Add your video source here */}
                    <source src="https://res.cloudinary.com/ddndoajjw/video/upload/v1767090936/UIUX-Showreel_online-video-cutter.com_uujuxb.mp4" type="video/mp4" />
                    {/* Fallback text */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      Your browser does not support the video tag.
                    </div>
                  </video>
                </div>
                
                {/* Video overlay for better contrast with animation */}
                <div className={`absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-black/5 pointer-events-none ${isAnimating ? 'animate-overlay-fade' : 'opacity-0'}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes slide {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes ping-slow-delayed {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        /* Card animations */
        @keyframes cardSlideLeft {
          0% { 
            opacity: 0;
            transform: translateX(-30px);
          }
          100% { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes cardSlideRight {
          0% { 
            opacity: 0;
            transform: translateX(30px);
          }
          100% { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes headlineReveal {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
        
        @keyframes textSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradientReveal {
          0% {
            opacity: 0;
            background-size: 200% 200%;
            background-position: 200% center;
          }
          100% {
            opacity: 1;
            background-size: 200% 200%;
            background-position: 0 center;
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expandWidth {
          0% {
            width: 0;
          }
          100% {
            width: 50%;
          }
        }
        
        @keyframes expandWidthSlow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }
        
        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(10px);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
        
        @keyframes cardPop {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes buttonGlow {
          0% {
            opacity: 0;
            transform: translateY(5px);
            box-shadow: 0 0 0 rgba(59, 130, 246, 0);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3);
          }
        }
        
        @keyframes pulseIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
        }
        
        @keyframes videoReveal {
          0% {
            opacity: 0;
            transform: scale(1.1);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
        
        @keyframes overlayFade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes glowSlow {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        .animate-slide {
          animation: slide 3s ease-in-out infinite alternate;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-ping-slow-delayed {
          animation: ping-slow-delayed 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-card-slide-left {
          animation: cardSlideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-card-slide-right {
          animation: cardSlideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }
        
        .animate-headline-reveal {
          animation: headlineReveal 0.8s cubic-bezier(0.87, 0, 0.13, 1) forwards;
        }
        
        .animate-text-slide-up {
          animation: textSlideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-gradient-reveal {
          animation: gradientReveal 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-expand-width {
          animation: expandWidth 1.2s cubic-bezier(0.87, 0, 0.13, 1) forwards;
        }
        
        .animate-expand-width-slow {
          animation: expandWidthSlow 1s cubic-bezier(0.87, 0, 0.13, 1) forwards;
        }
        
        .animate-text-reveal {
          animation: textReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-card-pop {
          animation: cardPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-button-glow {
          animation: buttonGlow 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-pulse-in {
          animation: pulseIn 1s ease-out forwards;
        }
        
        .animate-video-reveal {
          animation: videoReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-overlay-fade {
          animation: overlayFade 1.5s ease-out forwards;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-glow-slow {
          animation: glowSlow 4s ease-in-out infinite;
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;