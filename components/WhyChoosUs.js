"use client";

import React from 'react';
import { 
  Users, 
  Lightbulb, 
  LayoutTemplate, 
  Zap, 
  Target, 
  RefreshCw 
} from 'lucide-react';

const features = [
  {
    title: "Team of 120 full-time professionals",
    description: "With 120 in-house experts, we manage projects efficiently and ensure high-quality results without relying on freelancers.",
    icon: Users,
  },
  {
    title: "Data-driven decisions",
    description: "Every design decision is backed by user research and data, ensuring visually appealing designs that drive results.",
    icon: Lightbulb,
  },
  {
    title: "User-centered design for higher engagement",
    description: "We focus on users' needs, creating intuitive interfaces that boost engagement and seamless exploration.",
    icon: LayoutTemplate,
  },
  {
    title: "Improved developer efficiency",
    description: "We deliver clear, well-documented docs, streamline dev ops, and save your team time.",
    icon: Zap,
  },
  {
    title: "Customized solutions for your business goals",
    description: "We design solutions tailored to your product's needs and goals, focusing on boosting conversions and improving onboarding.",
    icon: Target,
  },
  {
    title: "Ongoing optimization and support",
    description: "We design and continuously optimize, using real-time data and feedback to refine your product and meet evolving user needs.",
    icon: RefreshCw,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">6 REASONS</span> TO WORK WITH US
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Discover why industry leaders choose The Stockit for their digital transformation journey
          </p>
        </div>

        {/* The Grid - Original border-separated design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            // Logic to handle borders so they look like a single continuous grid
            const isLastInRow = (index + 1) % 3 === 0;
            const isInFirstRow = index < 3;

            return (
              <div
                key={index}
                className={`
                  relative p-8 md:p-10 lg:p-12 
                  border-gray-200
                  ${index < 3 ? 'border-t' : ''} /* Top border for first row only */
                  border-b 
                  ${!isLastInRow ? 'lg:border-r' : ''} /* Right border for all except last in row */
                  ${(index + 1) % 2 !== 0 ? 'md:border-r lg:border-r-inherit' : ''} /* Right border for medium grid */
                  transition-colors duration-300
                  hover:bg-gray-50/50
                  group
                `}
              >
                {/* Icon Container with Gradient */}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600">
                  <feature.icon 
                    size={20} 
                    strokeWidth={1.5} 
                    className="text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>

                {/* Corner Accent */}
                <div 
                  className="absolute top-0 right-0 w-4 h-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}