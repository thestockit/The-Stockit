"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const EASE = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    id: 1,
    rating: 5.0,
    content:
      'The Stockit transformed our digital presence completely. Their attention to detail and strategic approach resulted in a 300% increase in our online conversions. Truly exceptional work that exceeded all our expectations and delivered measurable results.',
    author: {
      name: 'Alex Johnson',
      title: 'Marketing Director',
      company: 'TechCorp Inc.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    source: 'Clutch',
  },
  {
    id: 2,
    rating: 4.8,
    content:
      'Working with The Stockit was a game-changer for our startup. They delivered a user experience that perfectly captures our brand identity while optimizing for conversion. The team was responsive, creative, and truly understood our vision.',
    author: {
      name: 'Sarah Miller',
      title: 'Founder & CEO',
      company: 'InnovateLabs',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
    },
    source: 'GoodFirms',
  },
  {
    id: 3,
    rating: 5.0,
    content:
      'Exceptional team with deep expertise in modern web technologies. They not only delivered a beautiful product but also educated our team on best practices for maintenance and growth. A true partnership from start to finish.',
    author: {
      name: 'Michael Chen',
      title: 'CTO',
      company: 'DataStream Solutions',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    source: 'Upwork',
  },
  {
    id: 4,
    rating: 4.9,
    content:
      'From initial concept to final deployment, The Stockit demonstrated professionalism and creativity at every step. Our new platform has received overwhelming positive feedback from users and stakeholders alike.',
    author: {
      name: 'Elena Rodriguez',
      title: 'Product Manager',
      company: 'Growth Dynamics',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    },
    source: 'Dribbble',
  },
  {
    id: 5,
    rating: 5.0,
    content:
      'The Stockit team delivered beyond our expectations. Their innovative approach and technical expertise helped us achieve a 40% faster load time and improved user engagement metrics significantly.',
    author: {
      name: 'David Wilson',
      title: 'Digital Director',
      company: 'Global Retail Group',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    source: 'Clutch',
  },
  {
    id: 6,
    rating: 4.9,
    content:
      'Professional, timely, and incredibly talented. The Stockit understood our complex requirements and delivered a solution that perfectly balances aesthetics with functionality.',
    author: {
      name: 'Lisa Thompson',
      title: 'E-commerce Manager',
      company: 'StyleHub',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
    },
    source: 'GoodFirms',
  },
];

const featuredStats = {
  rating: '4.9',
  reviews: '80+',
  description:
    'Clutch average based on 80+ reviews from satisfied clients worldwide.',
};

const Stars = ({ rating, className = 'h-4 w-4' }) => {
  return (
    <span
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <span key={i} className={`relative inline-flex ${className}`} aria-hidden>
            <Star
              className={`absolute inset-0 ${className} text-gray-200`}
              fill="currentColor"
              strokeWidth={0}
            />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                className={`${className} text-yellow-400`}
                fill="currentColor"
                strokeWidth={0}
              />
            </span>
          </span>
        );
      })}
    </span>
  );
};

const ClientReview = () => {
  const reduce = usePrefersReducedMotion();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const getStep = () => {
    const el = scrollRef.current?.querySelector('[data-testimonial-card]');
    return el ? el.getBoundingClientRect().width + 20 : 320;
  };

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    setActiveIndex(Math.round(scrollLeft / getStep()));
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    el?.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el?.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByStep = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * getStep(), behavior: 'smooth' });
  };

  const scrollToIndex = (index) => {
    scrollRef.current?.scrollTo({
      left: getStep() * index,
      behavior: 'smooth',
    });
  };

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      {/* Hairline divider */}
      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 flex flex-col gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <motion.span
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-700"
            >
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-600" />
              </span>
              Client reviews
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
            >
              Trusted by partners
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                worldwide
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg"
            >
              We&apos;ve helped hundreds of partners, from startups to
              medium-sized businesses, achieve their goals. Stellar feedback is
              our reward.
            </motion.p>
          </div>

          {/* Clutch rating card */}
          <motion.a
            variants={fadeUp}
            href="https://clutch.co/profile/stockit"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full max-w-md items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <span
              aria-hidden
              className="text-3xl font-bold lowercase tracking-tight text-[#ee3a43]"
            >
              clutch
              <sup className="text-sm">®</sup>
            </span>

            <span aria-hidden className="h-10 w-px bg-gray-200" />

            <span className="flex-1">
              <span className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold leading-none text-gray-900">
                  {featuredStats.rating}
                </span>
                <span className="text-sm font-medium text-gray-500">/ 5.0</span>
              </span>
              <Stars rating={4.9} className="mt-1.5 h-3.5 w-3.5" />
            </span>

            <span className="text-right">
              <span className="block text-base font-semibold text-gray-900">
                {featuredStats.reviews}
              </span>
              <span className="block text-xs text-gray-500">Reviews</span>
            </span>

            <ArrowUpRight
              aria-hidden
              className="h-5 w-5 shrink-0 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
            />
          </motion.a>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Left: image + controls */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col lg:w-2/5"
          >
            <motion.div
              variants={fadeUp}
              className="relative h-[360px] overflow-hidden rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] md:h-[460px]"
            >
              <Image
                src="/Clientreview.avif"
                alt="Happy client from The Stockit"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectPosition: 'center 25%' }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Rating overlay */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end gap-4 p-7">
                <div>
                  <div className="text-5xl font-extrabold leading-none text-white">
                    {featuredStats.rating}
                  </div>
                  <Stars rating={4.9} className="mt-2 h-4 w-4" />
                </div>
                <p className="mb-0.5 text-sm leading-relaxed text-white/90 md:text-base">
                  {featuredStats.description}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex items-center justify-center gap-4"
            >
              <button
                type="button"
                onClick={() => scrollByStep(-1)}
                disabled={!canScrollLeft}
                aria-label="Previous testimonials"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 text-gray-400 transition-all duration-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>

              <div
                className="flex items-center gap-2"
                role="group"
                aria-label="Testimonial navigation dots"
              >
                {testimonials.map((t, index) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => scrollToIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={activeIndex === index ? 'true' : undefined}
                    className={
                      activeIndex === index
                        ? 'h-2.5 w-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
                        : 'h-2.5 w-2.5 rounded-full bg-gray-300 transition-all duration-300 hover:bg-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
                    }
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollByStep(1)}
                disabled={!canScrollRight}
                aria-label="Next testimonials"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 text-gray-400 transition-all duration-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </motion.div>
          </motion.div>

          {/* Right: carousel */}
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            className="min-w-0 lg:w-3/5"
          >
            <div
              ref={scrollRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{ scrollBehavior: 'smooth' }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  data-testimonial-card
                  className="w-[280px] shrink-0 snap-start sm:w-[320px] md:w-[350px] lg:w-[360px]"
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)]">
                    {/* Hover gradient ring */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                        WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        padding: '1.5px',
                      }}
                    />

                    {/* Accent hairline */}
                    <div
                      aria-hidden
                      className="relative h-1 w-full bg-gradient-to-r from-blue-600 to-purple-600"
                    />

                    <div className="relative flex h-full flex-col p-6 md:p-7">
                      {/* Rating + source */}
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl font-extrabold text-gray-900">
                            {testimonial.rating.toFixed(1)}
                          </span>
                          <Stars rating={testimonial.rating} className="h-4 w-4" />
                        </div>
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                          {testimonial.source}
                        </span>
                      </div>

                      {/* Quote */}
                      <div className="relative flex-1">
                        <Quote
                          aria-hidden
                          className="absolute -top-1 -left-1 h-5 w-5 text-blue-100"
                        />
                        <p className="line-clamp-5 pl-4 text-sm leading-relaxed text-gray-700">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>
                      </div>

                      {/* Author */}
                      <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
                        <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow">
                          <Image
                            src={testimonial.author.avatar}
                            alt={testimonial.author.name}
                            width={44}
                            height={44}
                            className="object-cover"
                            unoptimized
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-bold text-gray-900">
                            {testimonial.author.name}
                          </span>
                          <span className="block truncate text-xs text-gray-500">
                            {testimonial.author.title} ·{' '}
                            {testimonial.author.company}
                          </span>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
