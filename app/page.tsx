"use client";

import BookFlipStage from "@/components/BookFlipStage";
import ContactPerson from "@/components/ContactPerson";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StatsBar from "@/components/StatsBar";
import { BookNavigationProvider } from "@/contexts/BookNavigationContext";

export default function Home() {
  return (
    <BookNavigationProvider>
      <div className="relative z-[1] flex h-[100dvh] flex-col overflow-hidden">
        <Navbar />
        <BookFlipStage
          pages={[
            <div key="home" className="flex min-h-full flex-col">
              <Hero />
              <StatsBar />
            </div>,
            <div key="work" className="min-h-full">
              <Projects />
            </div>,
            <div key="skills" className="min-h-full">
              <Skills />
            </div>,
            <div key="experience" className="min-h-full">
              <Experience />
            </div>,
            <div key="contact" className="flex min-h-full flex-col">
              <div className="flex-1">
                <ContactPerson />
              </div>
              <Footer />
            </div>,
          ]}
        />
      </div>
    </BookNavigationProvider>
  );
}
