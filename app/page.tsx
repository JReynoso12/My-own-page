"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import TabNavigation from "@/components/TabNavigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SakuraParticles from "@/components/SakuraParticles";

// Lazy-load tab content so initial dev compile is smaller and faster
const AboutMe = dynamic(() => import("@/components/AboutMe"), {
  loading: () => (
    <div className="min-h-[200px] animate-pulse rounded-2xl glass-card flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 border-2 border-anime-pink border-t-transparent rounded-full"
      />
    </div>
  ),
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => (
    <div className="min-h-[200px] animate-pulse rounded-2xl glass-card flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 border-2 border-anime-purple border-t-transparent rounded-full"
      />
    </div>
  ),
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => (
    <div className="min-h-[200px] animate-pulse rounded-2xl glass-card flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 border-2 border-anime-cyan border-t-transparent rounded-full"
      />
    </div>
  ),
});
const ContactPerson = dynamic(() => import("@/components/ContactPerson"), {
  loading: () => (
    <div className="min-h-[200px] animate-pulse rounded-2xl glass-card flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 border-2 border-anime-mint border-t-transparent rounded-full"
      />
    </div>
  ),
});

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <main className="relative min-h-dvh flex items-center justify-center px-3 py-6 sm:px-5 sm:py-8 md:px-8 md:py-12 overflow-x-hidden pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      {/* Sakura particle background */}
      <SakuraParticles />

      <a
        href="#main-content"
        className="absolute left-4 top-4 -translate-y-full focus:translate-y-0 focus:outline-none px-4 py-2 
          bg-gradient-to-r from-anime-pink to-anime-purple text-white rounded-lg z-[60] transition-transform font-bold"
      >
        Skip to main content
      </a>

      {/* JR Logo - Top Left (always visible) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 z-50 pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)]"
      >
        <a href="/" aria-label="Home" className="block group">
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/logo-jr.png"
                alt="JR Logo"
                width={56}
                height={56}
                className="object-contain drop-shadow-lg w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                  group-hover:drop-shadow-[0_0_15px_rgba(255,107,157,0.6)] transition-all duration-300"
                priority
              />
            </motion.div>
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-anime-pink/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </a>
      </motion.div>

      {/* Main Anime-style glass panel */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative z-10 w-full max-w-7xl min-h-[min(calc(100dvh-3rem),800px)] anime-main-panel 
          px-4 py-6 sm:px-6 sm:py-8 md:px-14 md:py-14 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-14 
          overflow-hidden mx-2 sm:mx-4"
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-anime-pink/50 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-anime-purple/50 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-anime-cyan/50 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-anime-mint/50 rounded-br-2xl" />

        {/* Navigation: horizontal on mobile, vertical on desktop */}
        <aside className="flex md:flex-col items-center justify-center md:justify-center gap-2 md:gap-6 md:w-32 flex-shrink-0">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </aside>

        {/* Content area */}
        <section id="main-content" className="flex-1 pr-0 sm:pr-2 md:pr-6 space-y-0 min-w-0 flex flex-col min-h-0 overflow-x-hidden" tabIndex={-1}>
          <div className="flex-1 overflow-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "home" && <Hero onViewProjects={() => setActiveTab("project")} onContact={() => setActiveTab("contact")} />}
                {activeTab === "profil" && <AboutMe onNavigateToContact={() => setActiveTab("contact")} />}
                {activeTab === "skills" && <Skills />}
                {activeTab === "project" && <Projects />}
                {activeTab === "contact" && <ContactPerson />}
              </motion.div>
            </AnimatePresence>
          </div>
          <Footer />
        </section>
      </motion.div>
    </main>
  );
}
