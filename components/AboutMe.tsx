"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiBadgeCheck } from "react-icons/hi";

const techStack = ["Vue.js", "Node.js", "MySQL", "Tailwind CSS", "Express", "REST APIs", "Git"];

interface AboutMeProps {
  onNavigateToContact?: () => void;
}

export default function AboutMe({ onNavigateToContact }: AboutMeProps) {
  return (
    <section className="w-full py-2">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top: About me (full width, read first) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card p-7 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">About me</h3>
            <p className="text-[#A0B0C0] leading-relaxed text-base max-w-3xl">
              I&apos;m a Full-Stack Web Developer specializing in Vue.js, Node.js, and MySQL. I build responsive, secure, and scalable web applications for businesses and startups—from idea to deployment.
            </p>
          </div>
        </motion.div>

        {/* Bottom row: Profile (left) + Experience (right) */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#0f1a2e] border border-white/10 shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_4px_24px_rgba(0,0,0,0.3)] p-7 pb-9">
              <div className="absolute left-1/2 top-16 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="absolute w-32 h-32 rounded-full bg-blue-500/25 blur-2xl -left-8 top-0" />
                <div className="absolute w-28 h-28 rounded-full bg-blue-400/20 blur-xl left-6 -top-2" />
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/10 ring-2 ring-blue-500/20 mb-5">
                  <Image
                    src="/images/avatar.png"
                    alt="Jimuel Reynoso"
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 768px) 160px, 176px"
                    style={{ color: "rgba(188, 78, 78, 0)" }}
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                  Jimuel Reynoso
                  <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-neon-blue text-white" title="Verified">
                    <HiBadgeCheck className="w-4 h-4 md:w-5 md:h-5" />
                  </span>
                </h2>
                <p className="text-base text-white/90 mb-0.5">
                  rjimueltorrecampo@gmail.com
                </p>
                <p className="text-sm text-neon-blue font-medium">
                  Full-Stack Web Developer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-7 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-white mb-3">Experience</h3>
              <div className="space-y-1 text-[#A0B0C0] text-base">
                <p className="font-semibold text-[#C0D0E0]">Web development</p>
                <p className="leading-relaxed">
                  Building full-stack web applications with Vue.js, Node.js, and MySQL—from UI to backend, auth, and deployment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech I use */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-lg font-bold text-white mb-3">Tech I use</h3>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-2 rounded-lg bg-white/5 text-[#C0D0E0] text-sm border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center py-4"
        >
          <p className="text-[#A0B0C0] text-sm mb-3">Open to new projects and full-time opportunities.</p>
          {onNavigateToContact && (
            <button
              type="button"
              onClick={onNavigateToContact}
              className="px-6 py-2.5 rounded-xl bg-neon-blue/20 text-neon-blue font-semibold text-sm border border-neon-blue/40 hover:bg-neon-blue/30 transition-colors"
            >
              Get in touch
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
