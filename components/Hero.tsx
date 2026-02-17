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
          {/* Availability badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/12 text-neon-green text-sm font-medium border border-white/25 backdrop-blur-md mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            Available for projects
          </motion.span>

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
            className="text-glass-secondary text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build scalable, user-friendly web applications using modern full-stack technologies, transforming ideas into secure, high-performance digital products. From concept and design to development and deployment, I focus on creating real-world solutions that solve real problems, deliver great user experiences, and grow seamlessly with your business or idea.
          </motion.p>

          {/* CTA Buttons – Neo-Tactile pill style */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              onClick={onViewProjects}
              whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(0, 122, 255, 0.45)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 btn-active text-white font-semibold text-base rounded-full transition-shadow"
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={onContact}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 btn-glass text-glass-secondary font-semibold text-base rounded-full border-2 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/15 hover:border-neon-blue/70 transition-all"
            >
              Contact Me
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download="resume.pdf"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 btn-glass text-glass-secondary font-semibold text-base rounded-full hover:bg-white/15 hover:border-white/30 transition-all inline-block"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Tech strip */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-8 text-glass-muted text-sm flex flex-wrap justify-center gap-x-4 gap-y-1"
          >
            <span>Vue.js</span>
            <span className="text-white/40">·</span>
            <span>Node.js</span>
            <span className="text-white/40">·</span>
            <span>MySQL</span>
            <span className="text-white/40">·</span>
            <span>Tailwind CSS</span>
            <span className="text-white/40">·</span>
            <span>REST APIs</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
