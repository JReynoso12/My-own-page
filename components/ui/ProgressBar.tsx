"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
  color?: string;
  label?: string;
}

export default function ProgressBar({
  percentage,
  color = "neon-blue",
  label,
}: ProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const steps = 60;
      const increment = percentage / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= percentage) {
          setAnimatedPercentage(percentage);
          clearInterval(timer);
        } else {
          setAnimatedPercentage(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, percentage]);

  const colorClasses = {
    "neon-blue": "bg-neon-blue shadow-neon-blue",
    "neon-purple": "bg-neon-purple shadow-neon-purple",
    "neon-green": "bg-neon-green shadow-neon-green",
  };

  return (
    <div ref={ref} className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-white">{label}</span>
          <span className="text-sm text-neon-blue font-bold">
            {Math.round(animatedPercentage)}%
          </span>
        </div>
      )}
      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden relative">
        <motion.div
          className={`h-full rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses["neon-blue"]}`}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${animatedPercentage}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {isInView && animatedPercentage > 0 && (
          <motion.div
            className="absolute top-0 right-0 h-full w-1 bg-white opacity-50"
            initial={{ x: 0 }}
            animate={{ x: [0, -20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ right: `${100 - animatedPercentage}%` }}
          />
        )}
      </div>
    </div>
  );
}
