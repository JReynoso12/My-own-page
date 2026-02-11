"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-background-darker rounded-xl p-6 border border-gray-800 hover:border-neon-blue transition-all duration-300 hover:shadow-neon-blue-lg overflow-hidden"
    >
      {/* Build Complete Badge */}
      {project.buildStatus === "complete" && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-neon-green text-black text-xs font-bold rounded-full shadow-neon-green">
            BUILD COMPLETE
          </span>
        </div>
      )}

      {/* Category Label */}
      <div className="mb-3">
        <span className="text-xs text-gray-400 uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      {/* Project Image */}
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/project-placeholder.svg";
          }}
        />
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 group-hover:border-neon-blue transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-neon-blue transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
