"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { scrollToSection } from "@/lib/utils";

const jobTitles = [
  "UI/UX Designer",
  "Web Developer",
  "Frontend Developer",
  "React Developer",
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = jobTitles[currentTitleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      }, 100);
    } else if (!isDeleting && displayedText.length === currentTitle.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
      }, 50);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:ml-20 pb-24 md:pb-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-32 h-32 rounded-full border-4 border-neon-blue shadow-neon-blue-lg overflow-hidden group">
            <Image
              src="/images/avatar.png"
              alt="Profile Avatar"
              width={128}
              height={128}
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 rounded-full border-4 border-neon-purple opacity-50 animate-pulse" />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-neon-blue">Jimuel Reynoso</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl mb-6 h-10"
        >
          I'm a{" "}
          <span className="text-neon-blue font-semibold">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
I am a web developer who builds modern, scalable, and user-focused applications by combining clean code with the power of AI. I leverage AI tools to streamline development, improve performance, and create smarter, more efficient solutions—from UI design to backend logic. My goal is to deliver web applications that are not only functional, but intelligent, reliable, and built for real-world impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={() => scrollToSection("portfolio")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-neon-blue text-black font-bold rounded-lg hover:bg-neon-blue/80 transition-all duration-300 shadow-neon-blue hover:shadow-neon-blue-lg"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => {
              // Download CV functionality
              const link = document.createElement("a");
              link.href = "/cv.pdf";
              link.download = "cv.pdf";
              link.click();
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-neon-blue text-neon-blue font-bold rounded-lg hover:bg-neon-blue/10 transition-all duration-300"
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
