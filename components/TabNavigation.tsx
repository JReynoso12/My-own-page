"use client";

import { motion } from "framer-motion";
import { HiHome, HiUser, HiCog, HiCollection, HiUserGroup } from "react-icons/hi";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "home", label: "Home", icon: HiHome, color: "#FF6B9D" },
  { id: "profil", label: "About", icon: HiUser, color: "#C084FC" },
  { id: "skills", label: "Skills", icon: HiCog, color: "#22D3EE" },
  { id: "project", label: "Projects", icon: HiCollection, color: "#FBBF24" },
  { id: "contact", label: "Contact", icon: HiUserGroup, color: "#34D399" },
];

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav
      aria-label="Main navigation"
      className="nav-shell flex md:flex-col gap-2 glass-card rounded-2xl md:rounded-3xl p-2 md:p-3 
        border border-white/25 overflow-x-auto md:overflow-visible scrollbar-hide
        backdrop-blur-xl"
    >
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            whileHover={{ 
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 25 
            }}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Go to ${tab.label}`}
            className={`nav-tab flex items-center justify-center gap-2 rounded-2xl px-4 py-3 
              text-sm font-bold transition-all duration-300 flex-shrink-0 relative overflow-hidden
              ${isActive
                ? "nav-tab-active text-white shadow-lg"
                : "nav-tab-inactive text-white/90 hover:text-white hover:bg-white/20"
              }`}
            style={{
              background: isActive 
                ? `linear-gradient(135deg, ${tab.color}dd, ${tab.color})`
                : undefined,
              boxShadow: isActive 
                ? `0 4px 20px ${tab.color}50`
                : undefined,
            }}
          >
            {/* Shimmer effect for active tab */}
            {isActive && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 2 
                }}
              />
            )}

            <motion.div
              animate={isActive ? { 
                rotate: [0, -5, 5, 0],
                scale: [1, 1.1, 1]
              } : {}}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <Icon className="w-5 h-5" />
            </motion.div>
            
            <span className="relative z-10 text-xs sm:text-sm md:inline">{tab.label}</span>

            {/* Active indicator dot */}
            {isActive && (
              <motion.span
                layoutId="activeTab"
                className="absolute -bottom-1 md:bottom-auto md:-right-1 w-2 h-2 rounded-full bg-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </nav>
  );
}
