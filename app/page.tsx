"use client";

import { useState } from "react";
import Image from "next/image";
import TabNavigation from "@/components/TabNavigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactPerson from "@/components/ContactPerson";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-8 md:px-6 md:py-10">
      {/* JR Logo - Top Left (always visible) */}
      <div className="fixed top-8 left-8 z-50">
        <Image
          src="/images/logo-jr.png"
          alt="JR Logo"
          width={56}
          height={56}
          className="object-contain drop-shadow-lg"
        />
      </div>

      {/* Main frosted glass panel – scaled up for more presence */}
      <div className="relative w-full max-w-7xl min-h-[min(85vh,720px)] neon-glass-card px-6 py-10 md:px-12 md:py-12 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Vertical navigation */}
        <aside className="flex md:flex-col items-center justify-between md:justify-center gap-4 md:gap-5 md:w-28">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </aside>

        {/* Content area */}
        <section className="flex-1 pr-1 md:pr-3 space-y-0">
          {activeTab === "home" && <Hero onViewProjects={() => setActiveTab("project")} onContact={() => setActiveTab("contact")} />}
          {activeTab === "profil" && <AboutMe />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "project" && <Projects />}
          {activeTab === "contact" && <ContactPerson />}
        </section>
      </div>
    </main>
  );
}
