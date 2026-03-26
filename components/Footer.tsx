"use client";

import { motion } from "framer-motion";
import { HiHeart } from "react-icons/hi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-auto pt-8 border-t border-gradient-to-r from-anime-pink/30 via-anime-purple/30 to-anime-cyan/30"
      style={{
        borderImage: "linear-gradient(90deg, rgba(255,107,157,0.3), rgba(192,132,252,0.3), rgba(34,211,238,0.3)) 1",
      }}
      role="contentinfo"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-glass-muted text-xs sm:text-sm text-center sm:text-left">
        <p className="flex items-center gap-1">
          © {year} Jimuel Reynoso. Made with
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <HiHeart className="w-4 h-4 text-anime-pink inline" />
          </motion.span>
        </p>
        <p className="text-center sm:text-right">
          <span className="text-anime-pink">Next.js</span> +{" "}
          <span className="text-anime-purple">Tailwind</span> +{" "}
          <span className="text-anime-cyan">Framer Motion</span>
        </p>
      </div>
    </motion.footer>
  );
}
