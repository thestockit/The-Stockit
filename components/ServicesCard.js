"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const ServicesCard = ({ index, elm }) => {
    const router = useRouter()
    const [isHovered, setIsHovered] = useState(false)

    const handleClick = () => {
        if (elm.path) {
            router.push(elm.path)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
        >
            {/* Main Card */}
            <div 
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden"
            >
                {/* Top Gradient Bar */}
                <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                
                {/* Content */}
                <div className="p-8">
                    {/* Icon - Fixed Hover */}
                    <div className="relative mb-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-50 to-pink-50 flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 shadow-md' : 'shadow-sm'}`}>
                            <div className="text-2xl text-indigo-600">
                                {elm.icon}
                            </div>
                        </div>
                        
                        {/* Floating Dots on Hover */}
                        {isHovered && (
                            <>
                                <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 animate-ping"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 animate-ping delay-100"></div>
                            </>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                        {elm.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {elm.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-sm font-medium text-indigo-600 group-hover:text-pink-600 transition-colors duration-300">
                        <span>Learn more</span>
                        <svg 
                            className={`w-4 h-4 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </div>
                </div>

                {/* Subtle Hover Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>

            {/* Number Badge */}
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                {index + 1}
            </div>
        </motion.div>
    )
}

export default ServicesCard