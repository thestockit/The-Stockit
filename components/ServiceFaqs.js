"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Inline SVG icons
const QuoteIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-5 h-5 text-gray-400"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21L10.5 21M10.5 21C13.5376 21 16 18.5376 16 15.5C16 12.4624 13.5376 10 10.5 10H3V21M10.5 21H21M21 21L13.5 21M13.5 21C16.5376 21 19 18.5376 19 15.5C19 12.4624 16.5376 10 13.5 10H3V21" />
  </svg>
);

const LinkedInIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-4 h-4"
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
  </svg>
);

const PlusIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-5 h-5 transition-all duration-300"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const MinusIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
);

const ServiceFaqs = () => {
  // Personal branding data
  const personalBrand = {
    name: 'Luqman Pervez',
    title: 'CEO @ The Stockit',
    quote: 'Success in digital branding comes from consistency, authenticity, and a relentless focus on adding genuine value to every interaction.',
    // FIXED: Added proper image path - adjust based on your actual file location
    // If image is in public folder: '/luqman.7594d0c02542d797b36e.webp'
    // If image is in public/images folder: '/images/luqman.7594d0c02542d797b36e.webp'
    avatarUrl: '/luqman.7594d0c02542d797b36e.webp', // Update this to your correct path
    linkedinUrl: 'https://linkedin.com/pk/thestockit'
  };

  // FAQ data
  const faqData = [
    {
      id: 1,
      question: 'How long does it take to see results from personal branding?',
      answer: 'Consistent personal branding typically shows initial results within 3-6 months, with significant impact building over 12-18 months. The key is consistency across platforms and genuine engagement with your audience.'
    },
    {
      id: 2,
      question: 'What platforms are essential for personal branding?',
      answer: 'LinkedIn for professional networking, Twitter/X for industry conversations, a personal website/portfolio for credibility, and depending on your industry: Instagram for visual storytelling or GitHub for technical portfolios.'
    },
    {
      id: 3,
      question: 'How often should I post content for my personal brand?',
      answer: 'Quality over quantity. Aim for 3-4 high-value posts per week on your primary platform, with daily engagement in comments and conversations. Consistency matters more than frequency.'
    },
    {
      id: 4,
      question: 'Should I separate personal and professional content?',
      answer: 'Strategic integration works best. Share 70% professional insights, 20% personal development learnings, and 10% authentic personal moments. This creates a relatable yet professional presence.'
    },
    {
      id: 5,
      question: 'How do I measure the success of my personal branding efforts?',
      answer: 'Track meaningful metrics: engagement rate (not just followers), inbound opportunities, speaking invitations, collaboration requests, and organic search visibility for your name/expertise.'
    }
  ];

  // State for active FAQ
  const [activeFaq, setActiveFaq] = useState(null);
  const [imageError, setImageError] = useState(false);

  // Toggle FAQ function
  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  // LinkedIn click handler
  const handleLinkedInClick = () => {
    window.open(personalBrand.linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Left Column - Profile Card (30%) */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 h-fit shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)]"
            >
              {/* Decorative gradient accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 rounded-full translate-y-20 -translate-x-20" />
              
              {/* Avatar */}
              <div className="relative flex justify-center mb-8">
                <div className="relative w-36 h-36">
                  {/* Gradient ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 blur-md" />
                  <div className="absolute inset-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                      {/* Image - FIXED: Using proper Next.js Image component */}
                      {!imageError && personalBrand.avatarUrl ? (
                        <Image
                          src={personalBrand.avatarUrl}
                          alt={personalBrand.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 144px, 144px"
                          priority
                          onError={handleImageError}
                          // If you're getting Image Optimization errors, uncomment below:
                          // unoptimized={true}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-gray-900 text-3xl bg-gradient-to-br from-gray-50 to-gray-100">
                          {/* Fallback initials - using LP for Luqman Pervez */}
                          LP
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  {personalBrand.name}
                </h3>
                <p className="text-sm font-medium text-gray-600">
                  {personalBrand.title}
                </p>
              </div>

              {/* Quote Section */}
              <div className="relative mb-10 p-6 bg-gradient-to-r from-indigo-50/50 to-pink-50/50 rounded-xl">
                <div className="absolute top-4 left-4 text-indigo-400">
                  <QuoteIcon />
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed italic pl-2">
                  {personalBrand.quote}
                </blockquote>
              </div>

              {/* LinkedIn Button */}
              <button
                onClick={handleLinkedInClick}
                className="group relative w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative w-5 h-5 bg-white/20 rounded p-1">
                  <LinkedInIcon />
                </div>
                <span>Connect on LinkedIn</span>
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right Column - FAQ Section (70%) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              {/* Section Header */}
              <div className="mb-12 md:mb-16">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-gradient-to-r from-indigo-600 to-pink-600" />
                  <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
                    FREQUENTLY ASKED
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
                  FAQ
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl">
                  Common questions about personal branding and digital presence answered by our experts.
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3">
                <AnimatePresence initial={false}>
                  {faqData.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={false}
                      animate={{
                        marginBottom: activeFaq === item.id ? '16px' : '0px',
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      {/* FAQ Item Container */}
                      <div
                        className={`
                          relative overflow-hidden
                          ${activeFaq === item.id 
                            ? 'rounded-2xl bg-gradient-to-br from-white to-gray-50/50 shadow-[0_8px_30px_rgba(0,0,0,0.06)]' 
                            : 'rounded-xl hover:bg-gray-50/50 transition-colors duration-200'
                          }
                        `}
                      >
                        {/* Gradient indicator for active FAQ */}
                        {activeFaq === item.id && (
                          <>
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-600 to-pink-600" />
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 rounded-full -translate-y-8 translate-x-8" />
                          </>
                        )}
                        
                        {/* FAQ Header */}
                        <button
                          onClick={() => toggleFaq(item.id)}
                          className={`
                            w-full flex items-start justify-between text-left p-6 md:p-7
                            ${activeFaq === item.id ? 'pb-4' : ''}
                          `}
                          aria-expanded={activeFaq === item.id}
                          aria-controls={`faq-content-${item.id}`}
                        >
                          <div className="flex-1 pr-8">
                            <div className="flex items-center gap-4 mb-2">
                              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 flex items-center justify-center text-sm font-semibold text-gray-700">
                                0{index + 1}
                              </span>
                              <h3 className={`
                                text-lg md:text-xl font-semibold leading-snug
                                ${activeFaq === item.id 
                                  ? 'text-gray-900' 
                                  : 'text-gray-800 hover:text-gray-900 transition-colors duration-200'
                                }
                              `}>
                                {item.question}
                              </h3>
                            </div>
                          </div>
                          
                          {/* Toggle Icon */}
                          <div className={`
                            flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                            ${activeFaq === item.id 
                              ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-md' 
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }
                          `}>
                            {activeFaq === item.id ? (
                              <MinusIcon />
                            ) : (
                              <PlusIcon />
                            )}
                          </div>
                        </button>

                        {/* FAQ Content */}
                        <AnimatePresence initial={false}>
                          {activeFaq === item.id && (
                            <motion.div
                              id={`faq-content-${item.id}`}
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { 
                                  opacity: 1, 
                                  height: "auto",
                                  transition: { 
                                    duration: 0.4,
                                    ease: "easeInOut" 
                                  }
                                },
                                collapsed: { 
                                  opacity: 0, 
                                  height: 0,
                                  transition: { 
                                    duration: 0.3,
                                    ease: "easeInOut" 
                                  }
                                }
                              }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0">
                                <div className="pl-12">
                                  <p className="text-gray-600 leading-relaxed">
                                    {item.answer}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFaqs;