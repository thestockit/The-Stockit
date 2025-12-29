"use client"
import { ServicesData } from "@/Data/ServicesData";
import ServicesCard from "./ServicesCard";
import { motion } from 'framer-motion'

const Services = () => {
    return (
        <section
            id="services"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-pink-50 mb-6 border border-indigo-100"
                    >
                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                            Our Services
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Services That Drive
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                            Digital Excellence
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-lg text-gray-600"
                    >
                        We provide comprehensive digital solutions that help businesses grow, innovate, 
                        and succeed in today's competitive landscape.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ServicesData.map((elm, i) => (
                        <ServicesCard key={i} elm={elm} index={i} />
                    ))}
                </div>

                {/* Glass Morphism CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    {/* Glass Effect Container */}
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl overflow-hidden">
                        {/* Animated Gradient Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 animate-gradient-border"></div>
                        
                        {/* Content */}
                        <div className="relative p-8 md:p-12">
                            <div className="text-center">
                                {/* Main Heading as requested */}
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Need bold design or reliable code or both? 
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                                        You're in the right place.
                                    </span>
                                </h3>
                                
                                {/* Book a Call Button - Inline with heading */}
                                <div className="mt-8">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300"
                                    >
                                        <span>Book a Call</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </motion.button>
                                </div>
                                
                                {/* Supporting Text */}
                                <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
                                    Let's discuss how we can bring your vision to life with expert solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;