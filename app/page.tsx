"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import TabNavigation from "@/components/TabNavigation";
import Hero from "@/components/Hero";

// Lazy-load tab content so initial dev compile is smaller and faster
const AboutMe = dynamic(() => import("@/components/AboutMe"), {
  loading: () => <div className="min-h-[200px] animate-pulse rounded-2xl bg-white/5" aria-hidden />,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <div className="min-h-[200px] animate-pulse rounded-2xl bg-white/5" aria-hidden />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="min-h-[200px] animate-pulse rounded-2xl bg-white/5" aria-hidden />,
});
const ContactPerson = dynamic(() => import("@/components/ContactPerson"), {
  loading: () => <div className="min-h-[200px] animate-pulse rounded-2xl bg-white/5" aria-hidden />,
});


export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <main className="relative min-h-screen flex items-center justify-center px-5 py-10 md:px-8 md:py-12">
      {/* Animated grid background */}
      
      {/* JR Logo - Top Left (always visible) */}
      <div className="fixed top-10 left-10 z-50">
        <Image
          src="/images/logo-jr.png"
          alt="JR Logo"
          width={56}
          height={56}
          className="object-contain drop-shadow-lg"
          priority
        />
      </div>

      {/* Main frosted glass panel – scaled up for more presence */}
      <div className="relative z-10 w-full max-w-7xl min-h-[min(88vh,800px)] neon-glass-card px-7 py-12 md:px-14 md:py-14 flex flex-col md:flex-row gap-8 md:gap-14">
        {/* Vertical navigation */}
        <aside className="flex md:flex-col items-center justify-between md:justify-center gap-4 md:gap-6 md:w-32">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </aside>

        {/* Content area */}
        <section className="flex-1 pr-2 md:pr-6 space-y-0 min-w-0">
          {activeTab === "home" && <Hero onViewProjects={() => setActiveTab("project")} onContact={() => setActiveTab("contact")} />}
          {activeTab === "profil" && <AboutMe onNavigateToContact={() => setActiveTab("contact")} />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "project" && <Projects />}
          {activeTab === "contact" && <ContactPerson />}
        </section>
      </div>
    </main>
  );
}
