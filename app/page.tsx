"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import TabNavigation from "@/components/TabNavigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy-load tab content so initial dev compile is smaller and faster
const AboutMe = dynamic(() => import("@/components/AboutMe"), {
  loading: () => <div className="min-h-[200px] animate-pulse rounded-2xl glass-card" aria-hidden />,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <div className="min-h-[200px] animate-pulse rounded-2xl glass-card" aria-hidden />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="min-h-[200px] animate-pulse rounded-2xl glass-card" aria-hidden />,
});
const ContactPerson = dynamic(() => import("@/components/ContactPerson"), {
  loading: () => <div className="min-h-[200px] animate-pulse rounded-2xl glass-card" aria-hidden />,
});


export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <main className="relative min-h-dvh flex items-center justify-center px-3 py-6 sm:px-5 sm:py-8 md:px-8 md:py-12 overflow-x-hidden pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <a
        href="#main-content"
        className="absolute left-4 top-4 -translate-y-full focus:translate-y-0 focus:outline-none px-4 py-2 bg-neon-blue text-white rounded-lg z-[60] transition-transform"
      >
        Skip to main content
      </a>

      {/* JR Logo - Top Left (always visible) */}
      <div className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 z-50 pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)]">
        <a href="/" aria-label="Home" className="block">
          <Image
            src="/images/logo-jr.png"
            alt="JR Logo"
            width={56}
            height={56}
            className="object-contain drop-shadow-lg w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            priority
          />
        </a>
      </div>

      {/* Main Neo-Tactile glass panel with neon glow */}
      <div className="relative z-10 w-full max-w-7xl min-h-[min(calc(100dvh-3rem),800px)] neon-glass-card px-4 py-6 sm:px-6 sm:py-8 md:px-14 md:py-14 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-14 overflow-hidden mx-2 sm:mx-4">
        {/* Navigation: horizontal on mobile, vertical on desktop */}
        <aside className="flex md:flex-col items-center justify-center md:justify-center gap-2 md:gap-6 md:w-32 flex-shrink-0">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </aside>

        {/* Content area */}
        <section id="main-content" className="flex-1 pr-0 sm:pr-2 md:pr-6 space-y-0 min-w-0 flex flex-col min-h-0 overflow-x-hidden" tabIndex={-1}>
          <div className="flex-1 overflow-auto">
            {activeTab === "home" && <Hero onViewProjects={() => setActiveTab("project")} onContact={() => setActiveTab("contact")} />}
            {activeTab === "profil" && <AboutMe onNavigateToContact={() => setActiveTab("contact")} />}
            {activeTab === "skills" && <Skills />}
            {activeTab === "project" && <Projects />}
            {activeTab === "contact" && <ContactPerson />}
          </div>
          <Footer />
        </section>
      </div>
    </main>
  );
}
