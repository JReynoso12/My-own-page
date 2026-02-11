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
    <main className="relative min-h-screen bg-background-dark">
      {/* JR Logo - Top Left (always visible) */}
      <div className="fixed top-8 left-8 z-50">
        <Image
          src="/images/logo-jr.png"
          alt="JR Logo"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      <div className="pt-20 pb-20">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === "profil" && <AboutMe />}
        {activeTab === "project" && <Projects />}
        {activeTab === "contact" && <ContactPerson />}
      </div>
    </main>
  );
}
