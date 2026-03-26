"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export default function Hero({ onViewProjects, onContact }: HeroProps) {
  return (
    <section className="w-full py-4 sm:py-6 md:py-10 px-1">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Anime-style floating availability badge */}
          <motion.span
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
              bg-gradient-to-r from-anime-pink/20 to-anime-purple/20 
              text-anime-pink text-sm font-bold border border-anime-pink/40
              backdrop-blur-md shadow-anime-pink/20"
          >
            <motion.span 
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-anime-pink shadow-anime-pink" 
            />
            Available for projects
          </motion.span>

          {/* Name with anime spring animation */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 font-display tracking-tight"
          >
            <span className="gradient-text glow-text">Jimuel</span>{" "}
            <span className="text-white">Reynoso</span>
          </motion.h1>

          {/* Title with gradient effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.25,
              type: "spring",
              stiffness: 80
            }}
            className="font-display font-semibold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5"
          >
            <span className="text-anime-cyan">Full-Stack</span>{" "}
            <span className="text-anime-purple">Web</span>{" "}
            <span className="text-anime-pink">Developer</span>
          </motion.p>

          {/* Value statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              type: "spring"
            }}
            className="text-glass-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-1"
          >
            I build scalable, user-friendly web applications using modern full-stack technologies, transforming ideas into secure, high-performance digital products. From concept and design to development and deployment, I focus on creating real-world solutions that solve real problems, deliver great user experiences, and grow seamlessly with your business or idea.
          </motion.p>

          {/* CTA Buttons – Anime style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.55,
              type: "spring"
            }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <motion.button
              onClick={onViewProjects}
              whileHover={{ 
                y: -3, 
                boxShadow: "0 10px 30px rgba(255, 107, 157, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 btn-active text-white font-bold text-sm sm:text-base rounded-full"
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                className="flex items-center gap-2"
              >
                View Projects
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.span>
            </motion.button>

            <motion.button
              onClick={onContact}
              whileHover={{ 
                y: -3,
                boxShadow: "0 8px 25px rgba(255, 107, 157, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 anime-btn-secondary font-bold text-sm sm:text-base rounded-full backdrop-blur-md"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Tech strip with anime styling */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 text-glass-muted text-sm flex flex-wrap justify-center gap-x-5 gap-y-2"
          >
            {["Vue.js", "Node.js", "MySQL", "Tailwind CSS", "REST APIs", "Next.js"].map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                <span className={i % 2 === 0 ? "text-anime-pink" : "text-anime-cyan"}>◆</span>
                {tech}
              </span>
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
