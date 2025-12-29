"use client"
import ServicesData from "../Data/ServicesData"
import ServicesCard from "./ServicesCard"
import { motion } from "framer-motion"

const Services = () => {
  return (
    <section
  id="services"
  className="pt-32 sm:pt-36 pb-24 px-4 bg-white"
>
      <div className="max-w-[1150px] mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-base md:text-lg font-bold
            bg-gradient-to-r from-indigo-600 to-pink-600
            text-transparent bg-clip-text"            
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Professional digital
            <span className="block bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
              solutions
            </span>
          </motion.h2>
        </div>

        {/* OUTER CONTAINER (Like Screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Gradient border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 blur-xl" />

          {/* Main container */}
          <div className="relative bg-white rounded-3xl border border-gray-200 shadow-xl p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ServicesData.map((elm, i) => (
                <ServicesCard key={i} elm={elm} index={i} />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Services
