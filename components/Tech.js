"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import wordpress from '@/public/wordpress.webp';
import webflow from '@/public/channels4_profile.webp';
import shopify from '@/public/shopify.webp';
import figma from '@/public/1578556490672.webp';
import code from '@/public/codecraft.webp';

const technologies = [
  { src: webflow, alt: 'Webflow', name: 'Webflow' },
  { src: wordpress, alt: 'WordPress', name: 'WordPress' },
  { src: shopify, alt: 'Shopify', name: 'Shopify' },
  { src: figma, alt: 'Figma', name: 'Figma' },
  { src: code, alt: 'Codecrafters', name: 'Codecrafters' },
];

const Tech = () => {
  return (
    <div id='tech' className="max-w-5xl mb-10 mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <!-- Left Column: Text --> */}
        <div>
          <div className="relative mx-auto max-w-5xl">
            <span className="text-black my-3 flex items-center justify-center font-medium uppercase tracking-wider">
              Technologies We Use
            </span>
            <h2 className="block w-full text-center lg:text-start text-black font-bold text-3xl sm:text-4xl">
              Innovative Technologies for Optimal Results
            </h2>
            <p className="mx-auto my-4 w-full text-center lg:text-start max-w-xl bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
              Here are some of the advanced technologies we utilize to deliver exceptional results for our clients. From website development to e-commerce platforms, we leverage the latest tools and frameworks to ensure your projects are not only functional but also scalable and future-proof.
            </p>
          </div>
        </div>

        {/* <!-- Right Column: Timeline --> */}
        <div className="relative">
          <div className="border-r-2 border-gray-300 absolute h-full top-0 left-4"></div>

          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + 0.2  * index }}              
              viewport={{ once: false, amount: 0.8 }}
              className="mb-8 flex items-center"
            >
              <div className="bg-gradient-to-br from-indigo-400 to-pink-600 p-1 rounded-lg relative w-full">
                <div className="bg-white shadow-lg rounded-lg flex items-center p-4 w-full">
                  <div className="flex-shrink-0">
                    <Image
                      src={tech.src}
                      width={48}
                      height={48}
                      alt={tech.alt}
                      loading='lazy'
                      className="h-12 w-12 rounded-full border-4 border-gradient-to-br from-indigo-400 to-pink-600"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{tech.name}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
