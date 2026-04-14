"use client";

import BackToTop from "@/components/BackToTop";
import BookFlipStage from "@/components/BookFlipStage";
import DaredevilAtmosphere from "@/components/DaredevilAtmosphere";
import ContactPerson from "@/components/ContactPerson";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeAboutStrip from "@/components/HomeAboutStrip";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Skills from "@/components/Skills";
import StatsBar from "@/components/StatsBar";
import TestimonialStrip from "@/components/TestimonialStrip";
import { BookNavigationProvider } from "@/contexts/BookNavigationContext";
import { MainScrollProvider } from "@/contexts/MainScrollContext";

export default function Home() {
  return (
    <BookNavigationProvider>
      <MainScrollProvider>
        <PageLoader />
        <ScrollProgress />
        <BackToTop />
        <DaredevilAtmosphere />
        <div className="relative z-[1] flex h-[100dvh] flex-col overflow-hidden">
          <Navbar />
          <BookFlipStage
            pages={[
              <div key="home" className="flex min-h-full flex-col">
                <Hero />
                <StatsBar />
                <TestimonialStrip />
                <HomeAboutStrip />
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
      </MainScrollProvider>
    </BookNavigationProvider>
  );
}
