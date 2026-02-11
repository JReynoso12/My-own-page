"use client";

import { useState } from "react";
import Image from "next/image";
import Landing from "@/components/Landing";
import TabNavigation from "@/components/TabNavigation";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import ContactPerson from "@/components/ContactPerson";

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState("profil");

  const handleStart = () => {
    setShowLanding(false);
  };

  if (showLanding) {
    return <Landing onStart={handleStart} />;
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-10">
      {/* JR Logo - Top Left (always visible) */}
      <div className="fixed top-8 left-8 z-50">
        <Image
          src="/images/logo-jr.png"
          alt="JR Logo"
          width={52}
          height={52}
          className="object-contain"
        />
      </div>

      {/* Main neon glass panel */}
      <div className="relative w-full max-w-6xl neon-glass-card px-5 py-8 md:px-10 md:py-10 flex flex-col md:flex-row gap-8 md:gap-10">
        {/* Vertical navigation – inspired by left sidebar in reference */}
        <aside className="flex md:flex-col items-center justify-between md:justify-center gap-4 md:gap-6 md:w-24">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </aside>

        {/* Content area */}
        <section className="flex-1 max-h-[70vh] md:max-h-[75vh] overflow-y-auto pr-1 md:pr-3 space-y-0">
          {activeTab === "profil" && <AboutMe />}
          {activeTab === "project" && <Projects />}
          {activeTab === "contact" && <ContactPerson />}
        </section>
      </div>
    </main>
  );
}
