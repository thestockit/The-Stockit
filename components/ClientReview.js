"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const ClientReview = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      rating: 5.0,
      content: "The Stockit transformed our digital presence completely. Their attention to detail and strategic approach resulted in a 300% increase in our online conversions. Truly exceptional work that exceeded all our expectations and delivered measurable results.",
      author: {
        name: "Alex Johnson",
        title: "Marketing Director",
        company: "TechCorp Inc.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      },
      source: "Clutch"
    },
    {
      id: 2,
      rating: 4.8,
      content: "Working with The Stockit was a game-changer for our startup. They delivered a user experience that perfectly captures our brand identity while optimizing for conversion. The team was responsive, creative, and truly understood our vision.",
      author: {
        name: "Sarah Miller",
        title: "Founder & CEO",
        company: "InnovateLabs",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop"
      },
      source: "GoodFirms"
    },
    {
      id: 3,
      rating: 5.0,
      content: "Exceptional team with deep expertise in modern web technologies. They not only delivered a beautiful product but also educated our team on best practices for maintenance and growth. A true partnership from start to finish.",
      author: {
        name: "Michael Chen",
        title: "CTO",
        company: "DataStream Solutions",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
      },
      source: "Upwork"
    },
    {
      id: 4,
      rating: 4.9,
      content: "From initial concept to final deployment, The Stockit demonstrated professionalism and creativity at every step. Our new platform has received overwhelming positive feedback from users and stakeholders alike.",
      author: {
        name: "Elena Rodriguez",
        title: "Product Manager",
        company: "Growth Dynamics",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
      },
      source: "Dribbble"
    },
    {
      id: 5,
      rating: 5.0,
      content: "The Stockit team delivered beyond our expectations. Their innovative approach and technical expertise helped us achieve a 40% faster load time and improved user engagement metrics significantly.",
      author: {
        name: "David Wilson",
        title: "Digital Director",
        company: "Global Retail Group",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
      },
      source: "Clutch"
    },
    {
      id: 6,
      rating: 4.9,
      content: "Professional, timely, and incredibly talented. The Stockit understood our complex requirements and delivered a solution that perfectly balances aesthetics with functionality.",
      author: {
        name: "Lisa Thompson",
        title: "E-commerce Manager",
        company: "StyleHub",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop"
      },
      source: "GoodFirms"
    }
  ];

  // Featured stats
  const featuredStats = {
    rating: "4.9",
    reviews: "80+",
    description: "Clutch average based on 80+ reviews from satisfied clients worldwide."
  };

  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Handle clutch click
  const handleClutchClick = () => {
    window.open("https://clutch.co/profile/stockit", '_blank', 'noopener,noreferrer');
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  // Scroll functions for horizontal scrolling
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.testimonial-card').offsetWidth + 20;
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.testimonial-card').offsetWidth + 20;
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Initialize scroll position check
  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
    return () => {
      container?.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Message Banner Section - Replacing the header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
            
            {/* LEFT COLUMN: Professional Clutch Button */}
            <div className="lg:w-1/2">
              <div className="flex flex-col items-start">
                {/* Professional Clutch Button - Wider with inline layout */}
                <motion.div
                  className="flex items-center gap-6 p-5 pl-6 border border-gray-300 rounded-xl hover:border-indigo-500 transition-all duration-300 cursor-pointer group hover:shadow-md w-full max-w-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleClutchClick}
                >
                  {/* Clutch Logo Container */}
                  <div className="flex items-center gap-6 flex-1">
                    {/* Clutch Logo - Small Text Logo */}
                    <div className="flex items-center">
                      <div className="relative">
                        <span className="text-xl font-bold text-[#ee3a43] tracking-tight">clutch</span>
                        <span className="absolute -top-1 -right-2 text-xs text-[#ee3a43] font-bold">®</span>
                      </div>
                    </div>
                    
                    {/* Vertical Line - Thicker and shorter */}
                    <div className="h-8 w-px bg-gradient-to-b from-gray-400 to-gray-200" />
                    
                    {/* Reviews Text - Inline with logo */}
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl md:text-4xl font-bold text-gray-900 leading-none">80+</span>
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-600 leading-tight">Reviews</span>
                        <span className="text-xs text-gray-500 mt-0.5">On Clutch</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow Indicator */}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" />
                </motion.div>
                
                {/* Rating below button */}
                <div className="mt-4 pl-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-base font-bold text-gray-900 ml-1">4.9</span>
                    <span className="text-sm text-gray-500">/ 5.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Updated Mission Statement - Starting before middle */}
            <div className="lg:w-1/2 lg:-ml-16 mt-8 lg:mt-0">
              {/* Updated mission statement - Starting earlier */}
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

        {/* Main Testimonial Content - Image and Cards */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mt-8 lg:mt-12">
          {/* Left Hero Column - No Border, No Card */}
          <div className="lg:w-2/5 flex flex-col">
            {/* Image Container - No Border, No Card, Clean Layout */}
            <div className="relative h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
              <Image
                src="/Clientreview.avif"
                alt="Happy client from The Stockit"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                style={{ objectPosition: 'center 25%' }}
              />
              
              {/* Gradient Overlay at Bottom - 30% Height */}
              <div className="absolute inset-0">
                {/* 30% Height Gradient Shadow */}
                <div 
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: '30%',
                    background: 'linear-gradient(to top, rgba(99, 102, 241, 0.5) 0%, rgba(236, 72, 153, 0.3) 60%, transparent 100%)',
                  }}
                />
                
                {/* Content Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 30%, transparent 60%)'
                  }}
                >
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-end gap-4">
                      <div>
                        <div className="text-5xl md:text-6xl font-bold text-white leading-none">
                          {featuredStats.rating}
                        </div>
                        <div className="flex items-center gap-1 mt-2">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="mb-1">
                        <p className="text-white/90 text-sm md:text-base max-w-md">
                          {featuredStats.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons Below Image Only */}
            <div className="flex items-center justify-center gap-4 mt-6">
              {/* Left Arrow Button */}
              <button
                onClick={scrollLeft}
                className={`
                  w-12 h-12 rounded-full
                  border-2 ${showLeftArrow ? 'border-indigo-600 text-indigo-600 bg-white' : 'border-gray-300 text-gray-400 bg-gray-100'}
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${showLeftArrow ? 'hover:border-indigo-700 hover:text-indigo-700 hover:bg-indigo-50' : ''}
                `}
                disabled={!showLeftArrow}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Right Arrow Button */}
              <button
                onClick={scrollRight}
                className={`
                  w-12 h-12 rounded-full
                  border-2 ${showRightArrow ? 'border-indigo-600 text-indigo-600 bg-white' : 'border-gray-300 text-gray-400 bg-gray-100'}
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${showRightArrow ? 'hover:border-indigo-700 hover:text-indigo-700 hover:bg-indigo-50' : ''}
                `}
                disabled={!showRightArrow}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Testimonial Cards - Horizontal Scroll */}
          <div className="lg:w-3/5">
            {/* Horizontal Scroll Container - Show 2 cards + start of 3rd */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide gap-5 pb-4"
              style={{ 
                height: '500px',
                scrollBehavior: 'smooth'
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[360px]"
                >
                  {/* Testimonial Card */}
                  <div className="
                    relative bg-white
                    rounded-xl
                    border border-gray-200
                    shadow-lg hover:shadow-xl
                    transition-all duration-300
                    overflow-hidden
                    h-full
                    flex flex-col
                  ">
                    {/* Gradient Accent Top Border */}
                    <div className="h-1 w-full bg-gradient-to-r from-indigo-600 to-pink-600" />

                    {/* Card Content */}
                    <div className="p-6 flex flex-col h-full">
                      {/* Top: Rating & Stars */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">
                            {testimonial.rating.toFixed(1)}
                          </span>
                          <div className="flex items-center gap-0.5">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                          {testimonial.source}
                        </span>
                      </div>

                      {/* Testimonial Text */}
                      <div className="relative mb-4 flex-grow">
                        <Quote className="absolute -top-1 -left-1 w-5 h-5 text-gray-200" />
                        <p className="text-gray-700 leading-relaxed text-sm pl-4 line-clamp-5">
                          "{testimonial.content}"
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow">
                          <Image
                            src={testimonial.author.avatar}
                            alt={testimonial.author.name}
                            width={40}
                            height={40}
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-1">
                            <h4 className="font-bold text-gray-900 text-sm truncate">
                              {testimonial.author.name}
                            </h4>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-xs text-gray-600 truncate">
                              {testimonial.author.title}
                            </span>
                          </div>
                          {testimonial.author.company && (
                            <p className="text-xs text-gray-500 mt-0.5 truncate">
                              {testimonial.author.company}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6 lg:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      const cardWidth = scrollContainerRef.current.querySelector('.testimonial-card').offsetWidth + 20;
                      scrollContainerRef.current.scrollTo({
                        left: cardWidth * index,
                        behavior: 'smooth'
                      });
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Custom scrollbar hide */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Smooth hover transitions */
        * {
          transition-property: color, background-color, border-color, transform, box-shadow;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 200ms;
        }
      `}</style>
    </section>
  );
};

export default ClientReview;