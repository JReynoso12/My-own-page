"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

export default function SakuraParticles() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = [
      "linear-gradient(135deg, #FFB6C1, #FF69B4)", // Pink
      "linear-gradient(135deg, #C084FC, #E879F9)", // Purple
      "linear-gradient(135deg, #22D3EE, #67E8F9)", // Cyan
      "linear-gradient(135deg, #FDA4AF, #FB7185)", // Rose
    ];

    const newPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 8,
      size: 6 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -50, opacity: 0, rotate: 0, x: 0 }}
          animate={{
            y: ["0vh", "120vh"],
            opacity: [0, 0.7, 0.7, 0],
            rotate: [0, 360, 720],
            x: [0, 40, -40, 20, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: petal.left,
            width: petal.size,
            height: petal.size,
            background: petal.color,
            borderRadius: "50% 0 50% 50%",
          }}
        />
      ))}

      {/* Floating orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,107,157,0.15) 0%, transparent 70%)",
          left: "10%",
          top: "20%",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 70%)",
          right: "5%",
          top: "40%",
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)",
          left: "60%",
          bottom: "20%",
        }}
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
