"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Landing Page",
    image: "/images/project-1.png",
  },
  {
    id: 2,
    title: "SaaS Landing Page",
    image: "/images/project-2.png",
  },
  {
    id: 3,
    title: "Weather Forecast Dashboard",
    image: "/images/project-3.png",
  },
  {
    id: 4,
    title: "Portfolio Presentation",
    image: "/images/project-4.png",
  },
  {
    id: 5,
    title: "Productivity Dashboard",
    image: "/images/project-5.png",
  },
];

export default function Projects() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neon-blue mb-4 text-left">
            WEB DEVELOPMENT PROJECTS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square bg-slate-900/80 rounded-2xl overflow-hidden cursor-pointer group border border-slate-700/70 hover:border-neon-blue transition-colors duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-semibold">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* JR Logo decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex gap-6"
        >
          <Image
            src="/images/logo-jr.png"
            alt="JR Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <Image
            src="/images/logo-jr.png"
            alt="JR Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
