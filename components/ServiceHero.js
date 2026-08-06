"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Layers, CheckCircle2, Zap, Monitor, Smartphone, Rocket, Palette, Brush, Code2, TerminalSquare, LayoutDashboard, ShoppingBag, Globe2, TrendingUp, Share2, Target, Mail, FileText, Users, Bot, Phone, Workflow, Search, Briefcase, FileSearch, Clapperboard, Sparkles, PenTool, Type, BookOpen, Mic } from 'lucide-react';

const ICONS = {
  layers: Layers,
  check: CheckCircle2,
  zap: Zap,
  monitor: Monitor,
  smartphone: Smartphone,
  rocket: Rocket,
  palette: Palette,
  brush: Brush,
  code: Code2,
  terminal: TerminalSquare,
  layout: LayoutDashboard,
  'shopping-bag': ShoppingBag,
  globe: Globe2,
  'trending-up': TrendingUp,
  share: Share2,
  target: Target,
  mail: Mail,
  'file-text': FileText,
  users: Users,
  bot: Bot,
  phone: Phone,
  workflow: Workflow,
  search: Search,
  briefcase: Briefcase,
  'file-search': FileSearch,
  clapperboard: Clapperboard,
  sparkles: Sparkles,
  'pen-tool': PenTool,
  type: Type,
  'book-open': BookOpen,
  mic: Mic,
};

const defaultInfoItems = [
  {
    icon: 'layers',
    lines: ['Our unique framework + AI tools', 'deliver results 2x faster'],
  },
  {
    icon: 'check',
    lines: ['Based on 500+ finished projects', '& 12 years of experience'],
  },
];

const ServiceHero = ({
  titleBefore = 'UI/UX design that gets your B2B product to market',
  gradientText = '40% faster',
  titleAfter = '— no quality tradeoffs',
  videoSrc = 'https://res.cloudinary.com/ddndoajjw/video/upload/v1767090936/UIUX-Showreel_online-video-cutter.com_uujuxb.mp4',
  mediaIcon = 'layers',
  infoItems = defaultInfoItems,
  ctaText = 'BOOK A CALL',
  trustLine = 'Trusted by global brands & SMBs in the US and Europe',
}) => {
  const videoRef = useRef(null);
  const MediaIcon = ICONS[mediaIcon] || Layers;

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
          
          {/* Top Section: Content & Media with Equal Height */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Content Column - Full height matching media */}
            <div className="lg:w-2/3">
              <div className="h-full flex flex-col justify-center min-h-[320px] md:min-h-[400px]">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  {titleBefore}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">{gradientText}</span>{' '}
                  <span className="text-gray-700">{titleAfter}</span>
                </h1>
              </div>
            </div>

            {/* Media Column - Fixed height */}
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
                {videoSrc ? (
                  <>
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
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent flex items-center justify-center">
                      <div className="absolute bottom-6 left-6 bg-white rounded-full p-4 shadow-md hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-gray-900 border-b-[8px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MediaIcon className="h-24 w-24 text-white/90" aria-hidden />
                    </div>
                    <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                      Premium design
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section: Info & Button */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {infoItems.map(({ icon, lines }) => {
                const Icon = ICONS[icon] || Layers;
                return (
                  <div key={lines[0]} className="flex items-center gap-4 text-gray-800">
                    <div className="p-2 bg-gradient-to-r from-indigo-100 to-pink-100 rounded-lg border border-gray-200">
                      <Icon size={24} className="text-indigo-600" />
                    </div>
                    <p className="text-sm font-medium leading-tight">
                      {lines[0]}<br />{lines[1]}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Smaller Button */}
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap text-sm md:text-base"
            >
              <Zap size={18} className="text-white" />
              {ctaText}
            </Link>
          </div>
        </div>

        {/* Social Proof Logos */}
        <div className="mt-8 md:mt-12 px-4">
          <p className="text-center text-gray-600 text-sm mb-8 flex items-center justify-center gap-4 before:h-px before:w-12 before:bg-gray-300 after:h-px after:w-12 after:bg-gray-300 uppercase tracking-widest font-medium">
            {trustLine}
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
