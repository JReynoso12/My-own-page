"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiExternalLink, HiCode } from "react-icons/hi";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  role: string;
  challenges: string;
  features: string[];
  techStack: string[];
  demoUrl?: string | null;
  repoUrl?: string | null;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Product Order Web App",
    image: "/images/project-1.png",
    demoUrl: null,
    repoUrl: "https://github.com/JReynoso12",
    description:
      "Full-stack e-commerce app with user and admin roles. Solves the need for a single place to browse products, manage cart and checkout, and for admins to manage inventory and orders.",
    role: "End-to-end development: frontend, backend, database design, authentication, and deployment.",
    challenges: "Auth flows (JWT/sessions), database schema for orders and cart, admin dashboard permissions, mobile-friendly UI.",
    features: [
      "User & Admin roles",
      "Login / Authentication",
      "Product listing",
      "Cart & Checkout",
      "Order confirmation",
      "Admin dashboard",
      "Mobile-friendly UI",
    ],
    techStack: ["Vue.js", "Node.js", "MySQL", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Business Website + Admin CMS",
    image: "/images/project-2.png",
    demoUrl: null,
    repoUrl: null,
    description:
      "Client-facing business website with an admin panel to update content without touching code. Delivers real business value: always up-to-date content and a professional online presence.",
    role: "Design and build of the public site, admin CMS, and contact form with backend handling.",
    challenges: "Content structure for CMS, secure admin auth, contact form validation and email/API handling.",
    features: [
      "Client website",
      "Admin panel to update content",
      "Contact form with backend handling",
    ],
    techStack: ["Vue.js", "Node.js", "MySQL", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "API-Driven App (Activity Monitor Dashboard)",
    image: "/images/project-3.png",
    demoUrl: null,
    repoUrl: null,
    description:
      "Data management and activity monitoring dashboard powered by RESTful APIs. Highlights API design and integration—ideal for teaching Introduction to APIs and showing production-ready API skills.",
    role: "RESTful API design, CRUD operations, secure endpoints, and dashboard UI consuming the API.",
    challenges: "RESTful API design, secure endpoints, CRUD consistency, and real-time or periodic data updates.",
    features: [
      "RESTful API design",
      "CRUD operations",
      "Secure endpoints",
      "Activity / data dashboard",
    ],
    techStack: ["Vue.js", "Node.js", "Express", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section className="w-full px-1">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Projects
          </h2>
          <p className="text-glass-muted text-base">
            Quality over quantity—here are solid projects that show what I build.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden transition-all"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 relative aspect-video md:aspect-auto md:min-h-[260px] bg-[#0f1a2e]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-glass-secondary text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  <p className="text-glass-secondary text-sm mb-2">
                    <span className="font-semibold text-white">My role:</span>{" "}
                    {project.role}
                  </p>
                  <p className="text-glass-muted text-sm mb-4">
                    <span className="font-semibold text-white">Challenges:</span>{" "}
                    {project.challenges}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1.5 rounded-lg bg-neon-blue/20 text-neon-blue text-sm border border-neon-blue/30"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white/10 text-glass-muted text-sm border border-white/20 backdrop-blur-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project.demoUrl || project.repoUrl) && (
                    <div className="flex flex-wrap gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full btn-active text-white text-sm font-medium transition-all"
                        >
                          <HiExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full btn-glass text-glass-secondary text-sm font-medium transition-all"
                        >
                          <HiCode className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
