"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { id: "start", label: "START" },
    { id: "options", label: "OPTIONS" },
    { id: "exit", label: "EXIT" },
  ];

  const handleMenuClick = (id: string) => {
    if (id === "start") {
      onStart();
    } else if (id === "exit") {
      // Handle exit - could close window or show message
      if (typeof window !== "undefined") {
        window.close();
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative bg-background-dark">
      {/* JR Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 left-8 z-10"
      >
        <Image
          src="/images/logo-jr.png"
          alt="JR Logo"
          width={56}
          height={56}
          className="object-contain"
          priority
        />
      </motion.div>

      <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#8B0000] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/avatar.png"
              alt="Yudha Pradana"
              width={256}
              height={256}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-2" style={{ fontFamily: "serif", letterSpacing: "0.05em" }}>
              PORTFOLIO
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">2025</p>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 bg-white"></div>
              <p className="text-white text-lg">Web Developer</p>
            </div>

            {/* Menu */}
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleMenuClick(item.id)}
                  className={`block text-left text-white text-xl hover:text-neon-blue transition-colors duration-300 ${
                    hoveredItem === item.id ? "text-neon-blue" : ""
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
