"use client";

import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Main container */}
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* Gradient CTA Card Background */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
            {/* Main gradient background for the entire card */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-pink-50/80 to-indigo-50/80 backdrop-blur-sm" />
            
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-pink-500/5 to-indigo-500/5" />
            
            {/* Content container with padding */}
            <div className="relative p-8 md:p-12">
              {/* Notched Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div 
                  className="absolute -top-1 -right-1 w-20 h-20 rotate-45"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(236, 72, 153, 0.9) 100%)',
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="max-w-2xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Ready to discuss your project with us?
                </h2>
                
                {/* Description */}
                <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                  Let&apos;s talk about how we can craft a user experience that not only looks great but drives real growth for your product.
                </p>
                
                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group relative bg-[#4318FF] text-white font-semibold
                    px-6 py-3 md:px-8 md:py-4 rounded-full
                    flex items-center justify-center gap-2 mx-auto
                    shadow-md shadow-indigo-500/30
                    hover:shadow-lg hover:shadow-indigo-500/40
                    transition-all duration-300
                    hover:bg-[#5b37ff]
                  "
                >
                  <span className="text-sm md:text-base tracking-wide">
                    BOOK A CALL
                  </span>
                  
                  {/* Calendar Icon in White Circle */}
                  <span className="relative">
                    <span className="absolute inset-0 bg-white rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <span className="relative w-8 h-8 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 md:w-4.5 md:h-4.5 text-[#4318FF]" />
                    </span>
                  </span>
                  
                  {/* Button Hover Gradient Effect */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.button>
                
                {/* Trust Indicator */}
                <div className="mt-6 flex items-center justify-center gap-2 text-xs md:text-sm text-gray-600">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No strings attached • 30-minute consultation</span>
                </div>
              </div>
            </div>
            
            {/* Decorative gradient corners */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-full blur-xl -translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-indigo-500/10 rounded-full blur-xl translate-x-1/4 translate-y-1/4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;