"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  const softwareSkills = [
    { name: "React", color: "bg-neon-blue" },
    { name: "Node", color: "bg-neon-blue" },
    { name: "TS", label: "TypeScript", color: "bg-neon-blue" },
    { name: "AI", label: "AI Tools", color: "bg-neon-blue" },
    { name: "Next", color: "bg-pink-500" },
  ];

  return (
    <section className="min-h-screen px-4 md:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* JR Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/images/logo-jr.png"
            alt="JR Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              HELLO,IM JIMUEL REYNOSO
            </h2>
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/images/avatar.png"
                alt="Yudha Pradana"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* About Me */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">ABOUT ME</h3>
              <p className="text-gray-300 leading-relaxed">
              I am a web developer who builds modern, scalable, and user-focused applications by combining clean code with the power of AI. I leverage AI tools to streamline development, improve performance, and create smarter, more efficient solutions—from UI design to backend logic. My goal is to deliver web applications that are not only functional, but intelligent, reliable, and built for real-world impact.
              </p>
            </div>

            {/* Software Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">SOFTWARE SKILLS</h3>
              <div className="flex flex-wrap gap-4">
                {softwareSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className={`w-16 h-16 min-w-[4rem] ${skill.color} flex items-center justify-center text-black font-bold text-xs rounded`}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">EDUCATION</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold">2018-2019</p>
                <p>Golden State College</p>
                <p>Information Technology</p>
                <p>Junior Application Lead</p>
                <p>Full Stack Developer</p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">EXPERIENCE</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold">WEB DEVELOPMENT</p>
                <p>Building modern web applications with React, Next.js, and AI-assisted development</p>
                <p>Full-stack projects • UI/UX • Performance optimization</p>
              </div>
            </div>

            {/* Programming Languages */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">PROGRAMMING LANGUAGES</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">JAVASCRIPT</span>
                    <span className="text-gray-300">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-neon-blue h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">TYPESCRIPT</span>
                    <span className="text-gray-300">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-neon-blue h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">PYTHON</span>
                    <span className="text-gray-300">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-neon-blue h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
