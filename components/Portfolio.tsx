"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ui/ProjectCard";
import { Project } from "@/types";

const projects: Project[] = [
  {
    id: "1",
    title: "Modern E-Commerce Platform",
    description:
      "A fully responsive e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    image: "/images/project-placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind", "Stripe"],
    category: "Modern & Responsive Website",
    buildStatus: "complete",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/images/project-placeholder.svg",
    technologies: ["Vue.js", "Firebase", "Tailwind", "TypeScript"],
    category: "Modern & Responsive Website",
    buildStatus: "complete",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts and interactive charts.",
    image: "/images/project-placeholder.svg",
    technologies: ["React", "Next.js", "API", "Charts", "CSS3"],
    category: "Modern & Responsive Website",
    buildStatus: "complete",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A modern portfolio website with dark/light mode toggle and smooth animations.",
    image: "/images/project-placeholder.svg",
    technologies: ["React", "Next.js", "Tailwind", "Framer Motion"],
    category: "Modern & Responsive Website",
    buildStatus: "complete",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:ml-20 pb-24 md:pb-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neon-blue mb-4">
            My Portfolio
          </h2>
          <p className="text-gray-300 text-lg">
            A collection of my recent projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
