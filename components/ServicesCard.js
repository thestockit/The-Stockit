"use client"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"

const ServicesCard = ({ elm, index }) => {
  const router = useRouter()
  const [hovered, setHovered] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#f7f7f8] rounded-2xl border border-gray-200 overflow-hidden"
    >
      {/* Card Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
        <h3
          className="text-xl font-semibold
          bg-gradient-to-r from-indigo-600 to-pink-600
          text-transparent bg-clip-text"
        >
          {elm.title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600">
            ↗
          </span>

          <span
            className="w-9 h-9 flex items-center justify-center rounded-full text-white
            bg-gradient-to-br from-indigo-600 to-pink-600"
          >
            {elm.icon}
          </span>
        </div>
      </div>

      {/* Services List */}
      <div className="divide-y divide-gray-200">
        {elm.subServices.map((sub, i) => (
          <motion.button
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => router.push(sub.path)}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group w-full px-6 py-4 flex items-center justify-between text-left
          hover:bg-white/70"
        >
          <span className="text-gray-800 font-medium">
            {sub.name}
          </span>
        
          <motion.span
            animate={{
              rotate: hovered === i ? 45 : 0,
              x: hovered === i ? 4 : 0,
            }}
            transition={{ duration: 0.25 }}
            className="text-gray-400 group-hover:text-indigo-500"
          >
            ↗
          </motion.span>
        </motion.button>
        
        ))}
      </div>
    </motion.div>
  )
}

export default ServicesCard
