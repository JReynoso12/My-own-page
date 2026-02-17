"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-auto pt-8 border-t border-white/15"
      role="contentinfo"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-glass-muted text-sm">
        <p>© {year} Jimuel Reynoso. All rights reserved.</p>
        <p className="text-center sm:text-right">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </motion.footer>
  );
}
