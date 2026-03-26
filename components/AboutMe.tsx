"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiBadgeCheck, HiMail, HiCode } from "react-icons/hi";

const techStack = [
  { name: "Vue.js", color: "#34D399" },
  { name: "Node.js", color: "#22D3EE" },
  { name: "MySQL", color: "#FBBF24" },
  { name: "Tailwind CSS", color: "#22D3EE" },
  { name: "Express", color: "#C084FC" },
  { name: "REST APIs", color: "#FF6B9D" },
  { name: "Next.js", color: "#FB7185" },
  { name: "Git", color: "#FBBF24" },
];

const experiences = [
  {
    title: "Full-Stack Development",
    description: "Building complete web applications from frontend to backend, database design, authentication, and deployment.",
    icon: HiCode,
    color: "#FF6B9D",
  },
  {
    title: "UI/UX Design",
    description: "Creating responsive, intuitive interfaces with modern design principles and smooth user experiences.",
    icon: HiBadgeCheck,
    color: "#C084FC",
  },
];

interface AboutMeProps {
  onNavigateToContact?: () => void;
}

export default function AboutMe({ onNavigateToContact }: AboutMeProps) {
  return (
    <section className="w-full py-2 px-1">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {/* Top: About me card with anime styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="anime-glass-card p-5 sm:p-6 md:p-7">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-anime-pink to-anime-purple rounded-full mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 sm:mb-4">
              About <span className="gradient-text">Me</span>
            </h3>
            <p className="text-glass-secondary leading-relaxed text-sm sm:text-base max-w-3xl">
              I&apos;m a <span className="text-anime-pink font-semibold">Full-Stack Web Developer</span> specializing in 
              <span className="text-anime-cyan font-semibold"> Vue.js</span>, 
              <span className="text-anime-purple font-semibold"> Node.js</span>, and 
              <span className="text-anime-amber font-semibold"> MySQL</span>. 
              I build responsive, secure, and scalable web applications for businesses and startups—from idea to deployment. 
              I focus on clean code, user experience, and delivering solutions that solve real problems.
            </p>
          </div>
        </motion.div>

        {/* Bottom row: Profile (left) + Experience (right) */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Profile card with anime glow effects */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
          >
            <div className="relative rounded-2xl overflow-hidden anime-glass-card p-5 sm:p-6 md:p-7 pb-7 sm:pb-9">
              {/* Animated background glow */}
              <div className="absolute left-1/2 top-16 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute w-32 h-32 rounded-full bg-anime-pink/30 blur-2xl -left-8 top-0" 
                />
                <motion.div 
                  animate={{ 
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute w-28 h-28 rounded-full bg-anime-purple/30 blur-xl left-6 -top-2" 
                />
              </div>

              <div className="relative flex flex-col items-center text-center">
                {/* Avatar with anime ring effect */}
                <motion.div 
                  className="relative mb-4 sm:mb-5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-r from-anime-pink via-anime-purple to-anime-cyan animate-spin-slow opacity-75 blur-sm" />
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/20">
                    <Image
                      src="/images/avatar.png"
                      alt="Jimuel Reynoso"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 160px, 176px"
                    />
                  </div>
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-1 flex items-center justify-center gap-2">
                  Jimuel Reynoso
                  <motion.span 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                    className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-anime-pink to-anime-purple text-white shadow-anime-pink" 
                    title="Verified"
                  >
                    <HiBadgeCheck className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.span>
                </h2>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-base text-white/90 mb-0.5 flex items-center gap-2"
                >
                  <HiMail className="text-anime-pink" />
                  rjimueltorrecampo@gmail.com
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm font-bold font-display"
                >
                  <span className="text-anime-cyan">Full-Stack</span>{" "}
                  <span className="text-anime-purple">Web</span>{" "}
                  <span className="text-anime-pink">Developer</span>
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Experience cards with anime styling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="space-y-4"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="anime-glass-card p-4 sm:p-5 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${exp.color}20`,
                      border: `1px solid ${exp.color}40`,
                    }}
                  >
                    <exp.icon className="w-5 h-5" style={{ color: exp.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold font-display text-white mb-1">{exp.title}</h4>
                    <p className="text-glass-secondary text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { value: "6+", label: "Projects", color: "#FF6B9D" },
                { value: "3+", label: "Years", color: "#C084FC" },
                { value: "100%", label: "Dedication", color: "#22D3EE" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-3 rounded-xl text-center"
                >
                  <p className="text-xl font-bold font-display" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-glass-muted">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Tech stack with anime colorful tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="anime-glass-card p-4 sm:p-5 md:p-6"
        >
          <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2 sm:mb-3">
            Tech <span className="gradient-text">Stack</span>
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3.5 py-2 rounded-xl text-sm font-medium cursor-default backdrop-blur-md transition-all"
                style={{
                  background: `${tech.color}15`,
                  border: `1px solid ${tech.color}40`,
                  color: tech.color,
                  boxShadow: `0 0 10px ${tech.color}10`,
                }}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA with anime button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center py-4"
        >
          <p className="text-glass-muted text-sm mb-4">
            Open to new projects and full-time opportunities.
          </p>
          {onNavigateToContact && (
            <motion.button
              type="button"
              onClick={onNavigateToContact}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full btn-active text-white font-bold text-sm transition-all inline-flex items-center gap-2"
            >
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
              Get in touch
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              >
                →
              </motion.span>
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
