"use client";

import React from 'react';
import Image from "next/image";

// --- Custom SVGs with updated colors ---
const FlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" x2="4" y1="22" y2="15" />
  </svg>
);

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

// --- Component Data ---
const features = [
  {
    title: "Tailored to Your Business Goals",
    description: "We create designs aligned with your objectives to ensure they deliver meaningful results.",
    icon: <FlagIcon />,
  },
  {
    title: "Stand Out with Unique Design",
    description: "Halo Lab's custom designs set you apart from competitors using generic templates.",
    icon: <TrophyIcon />,
  },
  {
    title: "Optimized for Conversions",
    description: "To engage your audience and drive actions from the start, we carefully craft every detail.",
    icon: <ChartIcon />,
  },
  {
    title: "Scalability and Flexibility",
    description: "Our solutions adapt to your growing needs and changing business requirements.",
    icon: <SunIcon />,
  },
];

const CustomSolutionSection = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-indigo-600 to-pink-600"></div>
            <span className="text-sm font-medium uppercase tracking-wider text-indigo-600">
              Why Invest in Custom
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-indigo-600 to-pink-600"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            WHY IT&apos;S WORTH INVESTING IN A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
              CUSTOM SOLUTION
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Discover the value of tailored solutions that drive business growth and stand out from the competition
          </p>
        </div>

        {/* --- Main Content --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column: Feature List */}
          <div className="space-y-8">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:border-indigo-300 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex gap-5 items-start">
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-4 h-4">
                  <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-br from-indigo-600/0 via-indigo-600/0 to-indigo-600/10"></div>
                </div>
              </div>
            ))}
            
            {/* CTA Card */}
            <div className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-6 border border-indigo-100">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ready for a custom solution?</h4>
                  <p className="text-sm text-gray-600 mt-1">Get a personalized proposal for your project</p>
                </div>
                <button className="ml-auto px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/abida.webp" 
                alt="Custom Solution Dashboard" 
                width={600}
                height={700}
                className="w-full h-auto object-cover rounded-2xl"
                priority 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent pointer-events-none"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">95%</div>
                    <div className="text-xs text-gray-600 mt-1">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">40%</div>
                    <div className="text-xs text-gray-600 mt-1">Faster Time-to-Market</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-xl font-bold">500+</div>
                <div className="text-xs opacity-90">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Stats --- */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "12+", label: "Years Experience", desc: "Industry expertise" },
              { value: "120+", label: "Team Members", desc: "Dedicated professionals" },
              { value: "4.9/5", label: "Avg. Rating", desc: "Client reviews" },
              { value: "100%", label: "Custom Built", desc: "No templates used" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-indigo-600 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutionSection;