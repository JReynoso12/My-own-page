"use client";

import { motion } from "framer-motion";
import { HiHome, HiUser, HiCog, HiCollection, HiUserGroup } from "react-icons/hi";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "home", label: "Home", icon: HiHome },
  { id: "profil", label: "About", icon: HiUser },
  { id: "skills", label: "Skills", icon: HiCog },
  { id: "project", label: "Projects", icon: HiCollection },
  { id: "contact", label: "Contact", icon: HiUserGroup },
];

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav
      aria-label="Main navigation"
      className="flex md:flex-col gap-2 glass-card rounded-2xl md:rounded-3xl p-2 md:p-3 border border-white/25 overflow-x-auto md:overflow-visible scrollbar-hide"
    >
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          aria-current={activeTab === tab.id ? "page" : undefined}
          aria-label={`Go to ${tab.label}`}
          className={`flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-full px-3 py-2 sm:px-5 sm:py-2.5 text-sm font-semibold transition-all duration-300 flex-shrink-0
            ${
              activeTab === tab.id
                ? "btn-active text-white"
                : "btn-glass text-glass-secondary hover:text-neon-blue hover:bg-white/15"
            }`}
        >
          {(() => {
            const Icon = tab.icon;
            return <Icon className="w-5 h-5 md:w-6 md:h-6" />;
          })()}
          <span className="hidden md:inline">{tab.label}</span>
        </motion.button>
      ))}
    </nav>
  );
}
