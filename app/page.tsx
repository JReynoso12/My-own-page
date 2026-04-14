"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ContactPerson from "@/components/ContactPerson";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative z-[1] min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <div className="comic-divider" aria-hidden />
      <Projects />
      <div className="comic-divider" aria-hidden />
      <Skills />
      <div className="comic-divider" aria-hidden />
      <Experience />
      <div className="comic-divider" aria-hidden />
      <ContactPerson />
      <Footer />
    </div>
  );
}
