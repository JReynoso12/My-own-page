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
    <div className="flex md:flex-col gap-3 glass-card rounded-full md:rounded-3xl p-2.5 md:p-4 border border-white/10">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center justify-center gap-2.5 rounded-full px-5 py-2.5 text-sm md:text-base font-semibold transition-all duration-300
            ${
              activeTab === tab.id
                ? "bg-neon-blue text-white shadow-neon-blue"
                : "text-[#C0D0E0] hover:text-neon-blue hover:bg-white/5"
            }`}
        >
          {(() => {
            const Icon = tab.icon;
            return <Icon className="w-5 h-5 md:w-6 md:h-6" />;
          })()}
          <span className="hidden md:inline">{tab.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
