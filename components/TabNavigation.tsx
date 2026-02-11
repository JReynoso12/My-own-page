"use client";

import { motion } from "framer-motion";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "profil", label: "PROFIL" },
  { id: "project", label: "PROJECT" },
  { id: "contact", label: "CONTACT PERSON" },
];

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex justify-center gap-2 mb-8">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 text-sm font-semibold transition-all duration-300 ${
            activeTab === tab.id
              ? "bg-neon-blue text-black"
              : "bg-transparent text-white border border-gray-600 hover:border-gray-400"
          }`}
        >
          {tab.label}
        </motion.button>
      ))}
    </div>
  );
}
