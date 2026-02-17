"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    items: ["Vue.js", "React", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3"],
    color: "text-neon-blue",
    borderColor: "border-blue-500/30",
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication (JWT / sessions)"],
    color: "text-neon-purple",
    borderColor: "border-purple-500/30",
  },
  {
    title: "Database",
    items: ["MySQL", "MSSQL", "SQL optimization"],
    color: "text-neon-green",
    borderColor: "border-emerald-500/30",
  },
  {
    title: "Tools",
    items: ["Git / GitHub", "Postman", "Docker", "Deployment (Vercel, Netlify, VPS, etc.)"],
    color: "text-amber-400",
    borderColor: "border-amber-500/30",
  },
];

export default function Skills() {
  return (
    <section className="w-full py-2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Skills
          </h2>
          <p className="text-glass-muted text-base">
            Technologies and tools I use to build and ship products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: groupIndex * 0.08 }}
              className={`glass-card p-6 rounded-2xl border ${group.borderColor}`}
            >
              <h3 className={`font-bold text-lg mb-4 ${group.color}`}>
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item, i) => (
                  <li
                    key={item}
                    className="px-3.5 py-2 rounded-xl bg-white/12 text-glass-secondary text-base border border-white/25 backdrop-blur-md"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
