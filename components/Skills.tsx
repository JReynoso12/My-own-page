"use client";

import { motion } from "framer-motion";
import { HiCode, HiServer, HiDatabase, HiCog } from "react-icons/hi";

const skillGroups = [
  {
    title: "Frontend",
    icon: HiCode,
    items: ["Vue.js", "React", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3"],
    color: "#FF6B9D",
    gradient: "from-anime-pink/20 to-anime-purple/20",
  },
  {
    title: "Backend",
    icon: HiServer,
    items: ["Node.js", "Express.js", "REST APIs", "Authentication (JWT / sessions)"],
    color: "#C084FC",
    gradient: "from-anime-purple/20 to-anime-cyan/20",
  },
  {
    title: "Database",
    icon: HiDatabase,
    items: ["MySQL", "MSSQL", "SQL optimization"],
    color: "#22D3EE",
    gradient: "from-anime-cyan/20 to-anime-mint/20",
  },
  {
    title: "Tools",
    icon: HiCog,
    items: ["Git / GitHub", "Postman", "Docker", "Deployment (Vercel, Netlify, VPS)"],
    color: "#FBBF24",
    gradient: "from-anime-amber/20 to-anime-pink/20",
  },
];

export default function Skills() {
  return (
    <section className="w-full py-2 px-1">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-anime-pink to-anime-purple rounded-full mb-4"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-2">
            <span className="gradient-text">Skills</span>{" "}
            <span className="text-white">& Technologies</span>
          </h2>
          <p className="text-glass-muted text-base">
            Technologies and tools I use to build and ship products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20, rotateX: -5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: groupIndex * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="anime-glass-card p-4 sm:p-5 md:p-6 cursor-default"
              style={{
                boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${group.color}10`
              }}
            >
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${group.color}20`,
                    border: `1px solid ${group.color}40`,
                  }}
                >
                  <group.icon className="w-5 h-5" style={{ color: group.color }} />
                </motion.div>
                <h3 
                  className="font-bold text-lg font-display"
                  style={{ color: group.color }}
                >
                  {group.title}
                </h3>
              </div>

              {/* Skills list */}
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + groupIndex * 0.1 + i * 0.03 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: `0 0 15px ${group.color}30`
                    }}
                    className="px-3 py-1.5 rounded-xl text-sm font-medium border backdrop-blur-md transition-all cursor-default"
                    style={{
                      background: `${group.color}15`,
                      borderColor: `${group.color}30`,
                      color: group.color,
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
