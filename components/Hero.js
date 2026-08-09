 "use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

const HeroSection = () => {
  // Animations are CSS-driven and start on load (no JS required to see content).
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <section className="relative overflow-hidden">
      {/* Background: subtle grid + gradient blobs */}
      <div className="absolute inset-0 z-0">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:56px_56px]"
        />
        <div
          aria-hidden
          className={`absolute -left-16 -top-24 h-80 w-80 rounded-full bg-blue-500 blur-3xl ${isAnimating ? 'animate-pulse-in opacity-20' : 'opacity-20'}`}
        />
        <div
          aria-hidden
          className={`absolute right-1/4 top-0 h-72 w-72 rounded-full bg-purple-500 blur-3xl ${isAnimating ? 'animate-pulse-in opacity-20 delay-300' : 'opacity-20'}`}
        />
        <div
          aria-hidden
          className={`absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-pink-500 blur-3xl ${isAnimating ? 'animate-pulse-in opacity-20 delay-600' : 'opacity-20'}`}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">

          {/* Left card */}
          <div className={`w-full lg:w-7/12 ${isAnimating ? 'animate-card-slide-left' : ''}`}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/60 bg-white/90 p-5 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.25)] backdrop-blur-sm sm:p-7 md:p-9 lg:p-10">
              {/* Glow border */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 blur-xl animate-glow"
              />

              <div className="relative">
                {/* Eyebrow */}
                <div
                  className={`mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 md:mb-5 ${isAnimating ? 'animate-fade-in-up' : ''}`}
                >
                  <span className="relative flex h-2 w-2" aria-hidden>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
                  </span>
                  Digital Growth Agency
                </div>

                {/* Headline */}
                <h1
                  className={`mb-4 overflow-hidden text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl ${isAnimating ? 'animate-headline-reveal' : ''}`}
                >
                  <span className={`block ${isAnimating ? 'animate-text-slide-up delay-100' : ''}`}>
                    Empowering Your
                  </span>
                  <span
                    className={`mt-2 block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ${isAnimating ? 'animate-gradient-reveal delay-300' : ''}`}
                  >
                    Digital Presence
                  </span>
                </h1>

                {/* Subheadline */}
                <div
                  className={`relative mb-4 inline-block ${isAnimating ? 'animate-fade-in-up delay-500' : ''}`}
                >
                  <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                    10X Faster Growth
                  </h2>
                  <div
                    aria-hidden
                    className="absolute -bottom-1.5 left-0 h-1 w-full rounded-full bg-gradient-to-r from-blue-400 to-pink-400"
                  />
                  <div
                    aria-hidden
                    className={`absolute -bottom-1.5 left-0 h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ${isAnimating ? 'animate-expand-width delay-700' : ''}`}
                  />
                </div>

                {/* Description */}
                <p className={`mb-5 max-w-xl text-base text-gray-600 md:text-lg ${isAnimating ? 'animate-text-reveal delay-600' : ''}`}>
                  The Stockit provides expert web development, SEO, and digital marketing services to
                  accelerate your online growth and success. We deliver measurable results, not just promises.
                </p>

                {/* Divider */}
                <div
                  aria-hidden
                  className={`my-5 md:my-6 ${isAnimating ? 'animate-expand-width-slow delay-800' : ''}`}
                >
                  <div className="w-full border-t border-gray-200" />
                </div>

                {/* Experience box */}
                <div className={`${isAnimating ? 'animate-card-pop delay-900' : ''}`}>
                  <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:flex-row md:p-5">
                    <div className="flex w-full items-center gap-3 sm:w-auto md:gap-4">
                      {/* Experience badge */}
                      <div className="relative shrink-0" aria-hidden>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md md:h-14 md:w-14">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm md:h-10 md:w-10">
                            <svg className="h-5 w-5 text-blue-600 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute -inset-1 rounded-full border-2 border-blue-300 animate-ping-slow"></div>
                      </div>

                      {/* Experience text */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                          <span className="text-lg font-bold text-gray-800 md:text-xl">12+ Years Experience</span>
                          <span className="hidden h-4 w-px bg-gray-300 sm:block" aria-hidden />
                          <span className="text-sm text-gray-600 md:text-base">Design-driven B2B development</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className={`flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto ${isAnimating ? 'animate-button-glow delay-1000' : ''}`}
                    >
                      <span className="text-sm font-medium md:text-base">Book Consultation</span>
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                    </Link>
                  </div>
                </div>

                {/* Trust row */}
                <div
                  className={`mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 ${isAnimating ? 'animate-fade-in-up delay-1000' : ''}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex" aria-hidden>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </span>
                    <span className="text-sm font-medium text-gray-700">4.9/5 client rating</span>
                  </div>
                  <div className="hidden h-4 w-px bg-gray-300 sm:block" aria-hidden />
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Sparkles className="h-4 w-4 text-purple-500" aria-hidden />
                    <span>Trusted by 120+ brands worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right video card */}
          <div className={`w-full lg:w-5/12 ${isAnimating ? 'animate-card-slide-right' : ''}`}>
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl bg-black shadow-xl sm:min-h-[340px] lg:min-h-[480px]">
              {/* Glow border */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px z-10 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 blur-xl animate-glow-slow"
              />

              {/* Showreel image (static, lightweight, LCP-friendly) */}
              <Image
                src="/hero-showreel.webp"
                alt="The Stockit UI/UX showreel banner"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />

              {/* Readability overlay */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10"
              />

              {/* Status chip */}
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-lg backdrop-blur">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Showreel
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">Our showreel</p>
                    <p className="text-xs text-white/70">Web, SEO &amp; marketing in 60 seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes cardSlideLeft {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes cardSlideRight {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes headlineReveal {
          0% { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        }

        @keyframes textSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
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
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes expandWidth {
          0% { width: 0; }
          100% { width: 50%; }
        }

        @keyframes expandWidthSlow {
          0% { width: 0; opacity: 0; }
          100% { width: 100%; opacity: 1; }
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
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
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
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 0.2; transform: scale(1); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.5; }
        }

        @keyframes glowSlow {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.3; }
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-card-slide-left {
          animation: cardSlideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-card-slide-right {
          animation: cardSlideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }

        .animate-headline-reveal {
          animation: headlineReveal 0.8s cubic-bezier(0.87, 0, 0.13, 1) both;
        }

        .animate-text-slide-up {
          animation: textSlideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        .animate-gradient-reveal {
          animation: gradientReveal 1s ease-out both;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        .animate-expand-width {
          animation: expandWidth 1.2s cubic-bezier(0.87, 0, 0.13, 1) both;
        }

        .animate-expand-width-slow {
          animation: expandWidthSlow 1s cubic-bezier(0.87, 0, 0.13, 1) both;
        }

        .animate-text-reveal {
          animation: textReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        .animate-card-pop {
          animation: cardPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        .animate-button-glow {
          animation: buttonGlow 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        .animate-pulse-in {
          animation: pulseIn 1s ease-out both;
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
