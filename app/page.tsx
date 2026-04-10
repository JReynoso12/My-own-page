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
    <div>
      <Navbar />
      <Hero />
      <StatsBar />
      <div className="h-px bg-[var(--border)] mx-6 sm:mx-12" />
      <Projects />
      <div className="h-px bg-[var(--border)] mx-6 sm:mx-12" />
      <Skills />
      <div className="h-px bg-[var(--border)] mx-6 sm:mx-12" />
      <Experience />
      <div className="h-px bg-[var(--border)] mx-6 sm:mx-12" />
      <ContactPerson />
      <Footer />
    </div>
  );
}
