"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Reusable SVG icons
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

// Default expert profile data
const defaultExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Great UI/UX design is not just about aesthetics—it\'s about solving user problems, creating intuitive experiences, and driving measurable business results through thoughtful interaction design.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez'
};

// Default FAQ items for UI/UX design service
const defaultFaqItems = [
  {
    id: 1,
    question: 'How long does a typical UI/UX design project take?',
    answer: 'Project timelines vary based on complexity. A complete redesign typically takes 6-12 weeks, including research, wireframing, design, and testing phases. We break projects into sprints with clear deliverables and regular check-ins.'
  },
  {
    id: 2,
    question: 'What\'s included in your UI/UX design process?',
    answer: 'Our comprehensive process includes: 1) User Research & Analysis, 2) Information Architecture, 3) Wireframing & Prototyping, 4) Visual Design, 5) User Testing & Iteration, and 6) Design System & Handoff. We tailor each phase to your specific needs.'
  },
  {
    id: 3,
    question: 'Do you work with existing design systems or create new ones?',
    answer: 'We work with both! We can enhance existing design systems for consistency or create comprehensive new design systems from scratch that ensure scalability, maintainability, and developer handoff efficiency.'
  },
  {
    id: 4,
    question: 'How do you ensure designs are developer-friendly?',
    answer: 'We provide detailed design handoff packages including organized Figma files, component specs, responsive guidelines, interaction documentation, and direct collaboration with your development team to ensure seamless implementation.'
  },
  {
    id: 5,
    question: 'What metrics do you track to measure design success?',
    answer: 'We track both qualitative and quantitative metrics: User engagement rates, task completion times, error rates, conversion rates, user satisfaction scores (SUS/NPS), and ROI on design investments to ensure measurable business impact.'
  }
];

// Default section content
const defaultSectionTitle = 'FAQ';
const defaultSectionDescription = 'Common questions about our UI/UX design process and services answered by our design experts.';

const ServiceFaqs = ({
  expertProfile = defaultExpertProfile,
  faqItems = defaultFaqItems,
  sectionTitle = defaultSectionTitle,
  sectionDescription = defaultSectionDescription
}) => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [imageError, setImageError] = useState(false);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleLinkedInClick = () => {
    window.open(expertProfile.linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 h-fit shadow-sm border border-gray-200"
            >
              {/* Decorative gradient accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 rounded-full -translate-y-12 translate-x-12" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 rounded-full translate-y-16 -translate-x-16" />
              
              {/* Avatar */}
              <div className="relative flex justify-center mb-6">
                <div className="relative w-32 h-32">
                  {/* Gradient ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 blur-md" />
                  <div className="absolute inset-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                      {/* Image with error handling */}
                      {!imageError && expertProfile.avatarUrl ? (
                        <Image
                          src={expertProfile.avatarUrl}
                          alt={expertProfile.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 128px, 128px"
                          priority
                          onError={handleImageError}
                          unoptimized={true}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-gray-900 text-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                          LP
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                  {expertProfile.name}
                </h3>
                <p className="text-sm font-medium text-gray-600">
                  {expertProfile.title}
                </p>
              </div>

              {/* Quote Section */}
              <div className="relative mb-8 p-5 bg-gradient-to-r from-indigo-50/50 to-pink-50/50 rounded-lg border border-gray-100">
                <div className="absolute top-3 left-3 text-indigo-400">
                  <QuoteIcon />
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed pl-2">
                  {expertProfile.quote}
                </blockquote>
              </div>

              {/* LinkedIn Button */}
              <button
                onClick={handleLinkedInClick}
                className="group relative w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-4 h-4 bg-white/20 rounded p-0.5">
                  <LinkedInIcon />
                </div>
                <span className="text-sm">Connect on LinkedIn</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column - FAQ Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              {/* Section Header */}
              <div className="mb-10 md:mb-12">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-8 h-px bg-gradient-to-r from-indigo-600 to-pink-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
                    FREQUENTLY ASKED
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                  {sectionTitle}
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  {sectionDescription}
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-2">
                <AnimatePresence initial={false}>
                  {faqItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={false}
                      animate={{
                        marginBottom: activeFaq === item.id ? '12px' : '0px',
                      }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      {/* FAQ Item Container */}
                      <div
                        className={`
                          relative overflow-hidden
                          ${activeFaq === item.id 
                            ? 'rounded-xl bg-gradient-to-br from-white to-gray-50/50 shadow-sm border border-gray-200' 
                            : 'rounded-lg hover:bg-gray-50/50 transition-colors duration-200 border border-gray-200'
                          }
                        `}
                      >
                        {/* Gradient indicator for active FAQ */}
                        {activeFaq === item.id && (
                          <>
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-pink-600" />
                            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 rounded-full -translate-y-6 translate-x-6" />
                          </>
                        )}
                        
                        {/* FAQ Header */}
                        <button
                          onClick={() => toggleFaq(item.id)}
                          className={`
                            w-full flex items-start justify-between text-left p-5 md:p-6
                            ${activeFaq === item.id ? 'pb-3' : ''}
                          `}
                          aria-expanded={activeFaq === item.id}
                          aria-controls={`faq-content-${item.id}`}
                        >
                          <div className="flex-1 pr-6">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 flex items-center justify-center text-xs font-semibold text-gray-700">
                                0{index + 1}
                              </span>
                              <h3 className={`
                                text-base md:text-lg font-semibold leading-snug
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
                            flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200
                            ${activeFaq === item.id 
                              ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white' 
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
                                    duration: 0.3,
                                    ease: "easeInOut" 
                                  }
                                },
                                collapsed: { 
                                  opacity: 0, 
                                  height: 0,
                                  transition: { 
                                    duration: 0.25,
                                    ease: "easeInOut" 
                                  }
                                }
                              }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                                <div className="pl-10">
                                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
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