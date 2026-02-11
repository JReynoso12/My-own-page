"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiHome,
  HiDocumentText,
  HiCog,
  HiViewGrid,
  HiMail,
} from "react-icons/hi";
import { scrollToSection } from "@/lib/utils";
import { NavigationItem } from "@/types";

const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", icon: HiHome, sectionId: "hero" },
  { id: "about", label: "About", icon: HiDocumentText, sectionId: "about" },
  { id: "skills", label: "Skills", icon: HiCog, sectionId: "skills" },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: HiViewGrid,
    sectionId: "portfolio",
  },
  { id: "contact", label: "Contact", icon: HiMail, sectionId: "contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.sectionId);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-20 z-50 flex-col items-center justify-center bg-background-darker/80 backdrop-blur-sm border-r border-gray-800">
        <nav className="flex flex-col gap-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.sectionId;

            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.sectionId)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? "bg-neon-blue text-white shadow-neon-blue"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
                aria-label={item.label}
              >
                <Icon className="w-6 h-6" />
                {isActive && (
                  <span className="absolute left-full ml-3 px-2 py-1 bg-neon-blue text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                )}
              </motion.button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <aside className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background-darker/95 backdrop-blur-sm border-t border-gray-800">
        <nav className="flex justify-around items-center py-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.sectionId;

            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.sectionId)}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-neon-blue"
                    : "text-gray-400"
                }`}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </motion.button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
