"use client";

import { motion } from "framer-motion";
import { HiUser, HiCollection, HiUserGroup } from "react-icons/hi";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "profil", label: "Profile", icon: HiUser },
  { id: "project", label: "Projects", icon: HiCollection },
  { id: "contact", label: "Contact", icon: HiUserGroup },
];

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex md:flex-col gap-3 bg-black/40 md:bg-black/30 border border-slate-700/60 rounded-full md:rounded-3xl p-2 md:p-3 backdrop-blur">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-all duration-300
            ${
              activeTab === tab.id
                ? "bg-neon-blue text-black shadow-neon-blue"
                : "text-slate-200 hover:text-neon-blue hover:bg-slate-800/70"
            }`}
        >
          {(() => {
            const Icon = tab.icon;
            return <Icon className="w-4 h-4 md:w-5 md:h-5" />;
          })()}
          <span className="hidden md:inline">{tab.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
