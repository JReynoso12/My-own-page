"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export default function Hero({ onViewProjects, onContact }: HeroProps) {
  return (
    <section className="w-full py-6 md:py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Jimuel Reynoso
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-neon-blue font-semibold text-xl md:text-2xl mb-5"
          >
            Full-Stack Web Developer
          </motion.p>

          {/* Value statement */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-[#A0B0C0] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build scalable, user-friendly web applications using modern full-stack technologies, transforming ideas into secure, high-performance digital products. From concept and design to development and deployment, I focus on creating real-world solutions that solve real problems, deliver great user experiences, and grow seamlessly with your business or idea.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              onClick={onViewProjects}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-neon-blue text-white font-semibold text-base rounded-xl hover:opacity-90 transition-opacity shadow-lg"
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={onContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 border-2 border-neon-blue text-neon-blue font-semibold text-base rounded-xl hover:bg-neon-blue/10 transition-colors"
            >
              Contact Me
            </motion.button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
