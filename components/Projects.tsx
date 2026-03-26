"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";

interface Project {
  id: number;
  title: string;
  image: string;
  liveUrl: string;
  description: string;
  category: string;
  status: "Active" | "Live";
  features: string[];
  techStack: string[];
  accentColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Running App",
    image: "/images/project-running-app.png",
    liveUrl: "https://running-app-peach.vercel.app/",
    category: "Fitness / Tracking",
    status: "Active",
    description:
      "A modern running-focused web app for active users, with a clean interface built for smooth interactions and quick access to workout-related content.",
    features: [
      "Fast, responsive UI",
      "Fitness-focused flow",
      "Clean and modern design",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    accentColor: "#22D3EE",
  },
  {
    id: 2,
    title: "Recurring Bliss",
    image: "/images/project-recurring-bliss.png",
    liveUrl: "https://recurring-bliss.vercel.app/login",
    category: "Productivity / Habit",
    status: "Live",
    description:
      "A beautifully designed web application focused on recurring routines and habits with polished UI and consistent user experience.",
    features: [
      "Authentication entry flow",
      "Elegant and consistent UI",
      "Responsive across devices",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    accentColor: "#C084FC",
  },
  {
    id: 3,
    title: "Humanize",
    image: "/images/project-humanize.png",
    liveUrl: "https://humanize-nine.vercel.app/",
    category: "Computer Vision",
    status: "Active",
    description:
      "Real-time pose detection app with movement visualization using body landmarks and heatmap-style rendering.",
    features: [
      "Pose landmark detection",
      "Motion heatmap visual",
      "Interactive controls",
    ],
    techStack: ["Next.js", "MediaPipe", "Canvas API", "Vercel"],
    accentColor: "#FF6B9D",
  },
  {
    id: 4,
    title: "Badminton",
    image: "/images/project-badminton.png",
    liveUrl: "https://badminton-neon-eta.vercel.app/",
    category: "Booking Platform",
    status: "Live",
    description:
      "A fast and intuitive court-booking experience that helps users check availability and reserve sessions quickly.",
    features: [
      "Booking-first user flow",
      "Availability-focused layout",
      "Mobile-friendly interactions",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    accentColor: "#FBBF24",
  },
  {
    id: 5,
    title: "Vet App",
    image: "/images/project-vet-app.png",
    liveUrl: "https://vet-app-one.vercel.app/",
    category: "Healthcare / Veterinary",
    status: "Live",
    description:
      "Veterinary clinic website designed to present services clearly and give pet owners a professional, trustworthy experience.",
    features: [
      "Clinic service presentation",
      "Professional healthcare UI",
      "Responsive page structure",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    accentColor: "#34D399",
  },
  {
    id: 6,
    title: "Health Hub",
    image: "/images/project-health-hub.png",
    liveUrl: "https://health-hub-zq3d.vercel.app/",
    category: "Mental Health / Wellness",
    status: "Active",
    description:
      "Mental health and wellness platform that organizes helpful content into an accessible and calming experience.",
    features: [
      "Organized wellness resources",
      "Accessibility-minded layout",
      "Comfort-focused interface",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    accentColor: "#FB7185",
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-2">
            <span className="gradient-text">Running & Active</span>{" "}
            <span className="text-white">Projects</span>
          </h2>
          <p className="text-glass-muted text-base">
            These are my currently running projects and live deployments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              className="anime-glass-card overflow-hidden group cursor-pointer"
              style={{
                boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${project.accentColor}15`
              }}
            >
              <div className="flex flex-col">
                {/* Image with anime zoom effect */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                  
                  {/* Gradient overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to top, ${project.accentColor}60, transparent)`
                    }}
                  />

                  {/* Status badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="absolute top-3 right-3"
                  >
                    <span 
                      className="px-3 py-1 text-xs rounded-full font-bold border backdrop-blur-md"
                      style={{
                        background: project.status === "Active" 
                          ? "rgba(52, 211, 153, 0.25)"
                          : "rgba(34, 211, 238, 0.25)",
                        color: project.status === "Active" ? "#34D399" : "#22D3EE",
                        borderColor: project.status === "Active" 
                          ? "rgba(52, 211, 153, 0.5)"
                          : "rgba(34, 211, 238, 0.5)",
                      }}
                    >
                      {project.status}
                    </span>
                  </motion.div>
                </div>

                <div className="p-4 sm:p-6">
                  {/* Category badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span 
                      className="px-3 py-1 text-xs rounded-full font-bold border backdrop-blur-md"
                      style={{
                        background: `${project.accentColor}25`,
                        color: project.accentColor,
                        borderColor: `${project.accentColor}50`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-glass-secondary text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1.5 rounded-lg text-sm border backdrop-blur-md"
                        style={{
                          background: `${project.accentColor}15`,
                          color: project.accentColor,
                          borderColor: `${project.accentColor}30`,
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white/10 text-glass-muted text-sm border border-white/20 backdrop-blur-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live project button */}
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor}dd, ${project.accentColor})`,
                      boxShadow: `0 4px 15px ${project.accentColor}40`,
                    }}
                  >
                    <HiExternalLink className="w-4 h-4" />
                    Open Live Project
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
