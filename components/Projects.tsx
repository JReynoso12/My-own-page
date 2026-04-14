"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";

import ProjectPreview from "./ProjectPreview";
import TechIcon from "./TechIcon";

interface Project {
  id: string;
  title: string;
  liveUrl: string;
  shortDesc: string;
  category: string;
  filterCat: string;
  techStack: string[];
  year: string;
  featured?: boolean;
  image: string;
  modal: {
    cat: string;
    desc: string;
    problem: string;
    solution: string;
    result: string;
    meta: [string, string][];
  };
}

const projects: Project[] = [
  {
    id: "running",
    title: "Running App",
    liveUrl: "https://running-app-peach.vercel.app/",
    shortDesc:
      "Modern fitness web app for active users with fast, responsive UI and workout-focused flow.",
    category: "Fitness / Tracking",
    filterCat: "app",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    year: "2024",
    featured: true,
    image: "/images/project-running-app.png",
    modal: {
      cat: "Fitness · 2024",
      desc: "A modern running-focused web app for active users, with a clean interface built for smooth interactions and quick access to workout-related content.",
      problem:
        "Runners needed a fast, focused place to plan sessions without clutter or slow loads on mobile.",
      solution:
        "A Next.js app with a workout-first flow, responsive layout, and deployment on Vercel for instant global delivery.",
      result:
        "Shipped a live product with a smooth daily-use experience and room to extend features over time.",
      meta: [
        ["Role", "Full-Stack Developer"],
        ["Platform", "Web (Next.js)"],
        ["Stack", "Next.js, React, Tailwind CSS"],
        ["Status", "Active / Live"],
      ],
    },
  },
  {
    id: "recurring",
    title: "Recurring Bliss",
    liveUrl: "https://recurring-bliss.vercel.app/login",
    shortDesc:
      "Habit tracking app with polished UX, authentication, and responsive design.",
    category: "Productivity",
    filterCat: "app",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    year: "2024",
    image: "/images/project-recurring-bliss.png",
    modal: {
      cat: "Productivity · 2024",
      desc: "A beautifully designed web application focused on recurring routines and habits with polished UI and consistent user experience.",
      problem:
        "Users struggled to stay consistent when habit apps felt cluttered or slow on first load.",
      solution:
        "Built a focused habit flow with auth, clear UI hierarchy, and responsive layouts across breakpoints.",
      result:
        "A live app that demonstrates end-to-end product thinking—from login to daily use.",
      meta: [
        ["Role", "Full-Stack Developer"],
        ["Platform", "Web (Next.js)"],
        ["Stack", "Next.js, React, Tailwind CSS"],
        ["Status", "Live"],
      ],
    },
  },
  {
    id: "humanize",
    title: "Humanize",
    liveUrl: "https://humanize-nine.vercel.app/",
    shortDesc:
      "Real-time pose detection with body landmarks and heatmap rendering.",
    category: "Computer Vision",
    filterCat: "tech",
    techStack: ["Next.js", "MediaPipe", "Canvas API", "Vercel"],
    year: "2024",
    image: "/images/project-humanize.png",
    modal: {
      cat: "AI / Vision · 2024",
      desc: "Real-time pose detection app with movement visualization using body landmarks and heatmap-style rendering.",
      problem:
        "Movement feedback needed to feel immediate and readable—not buried in dense controls.",
      solution:
        "Integrated MediaPipe with canvas rendering for landmarks and heatmap-style motion visuals.",
      result:
        "An interactive demo that showcases real-time vision UX in the browser.",
      meta: [
        ["Role", "Full-Stack Developer"],
        ["Platform", "Web (Next.js)"],
        ["Stack", "Next.js, MediaPipe, Canvas API"],
        ["Status", "Active"],
      ],
    },
  },
  {
    id: "badminton",
    title: "Badminton",
    liveUrl: "https://badminton-neon-eta.vercel.app/",
    shortDesc:
      "Court-booking experience with availability-focused layout and mobile-friendly design.",
    category: "Booking Platform",
    filterCat: "app",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    year: "2024",
    image: "/images/project-badminton.png",
    modal: {
      cat: "Booking · 2024",
      desc: "A fast and intuitive court-booking experience that helps users check availability and reserve sessions quickly.",
      problem:
        "Booking flows often add friction—users needed availability-first navigation on mobile.",
      solution:
        "Designed a booking-first layout with clear availability cues and touch-friendly interactions.",
      result:
        "A production-ready booking experience that communicates trust and speed.",
      meta: [
        ["Role", "Full-Stack Developer"],
        ["Platform", "Web (Next.js)"],
        ["Stack", "Next.js, React, Tailwind CSS"],
        ["Status", "Live"],
      ],
    },
  },
  {
    id: "vet",
    title: "Vet App",
    liveUrl: "https://vet-app-one.vercel.app/",
    shortDesc:
      "Veterinary clinic site designed for clear service presentation and trust.",
    category: "Healthcare",
    filterCat: "health",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    year: "2024",
    image: "/images/project-vet-app.png",
    modal: {
      cat: "Healthcare · 2024",
      desc: "Veterinary clinic website designed to present services clearly and give pet owners a professional, trustworthy experience.",
      problem:
        "Pet owners need clarity fast—services, trust signals, and contact paths must be obvious.",
      solution:
        "Structured clinic content with professional presentation and responsive layouts for every device.",
      result:
        "A credible healthcare web presence that supports real clinic workflows.",
      meta: [
        ["Role", "Full-Stack Developer"],
        ["Platform", "Web (Next.js)"],
        ["Stack", "Next.js, React, Tailwind CSS"],
        ["Status", "Live"],
      ],
    },
  },
  {
    id: "health",
    title: "Health Hub",
    liveUrl: "https://health-hub-zq3d.vercel.app/",
    shortDesc:
      "Mental wellness platform with calming, accessible design.",
    category: "Wellness",
    filterCat: "health",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    year: "2024",
    image: "/images/project-health-hub.png",
    modal: {
      cat: "Wellness · 2024",
      desc: "Mental health and wellness platform that organizes helpful content into an accessible and calming experience.",
      problem:
        "Wellness content can overwhelm users—navigation and tone must stay calm and accessible.",
      solution:
        "Calming layout patterns, readable typography, and organized resources for low-friction browsing.",
      result:
        "A supportive experience that demonstrates empathy-first UI decisions.",
      meta: [
        ["Role", "Full-Stack Developer"],
        ["Platform", "Web (Next.js)"],
        ["Stack", "Next.js, React, Tailwind CSS"],
        ["Status", "Active"],
      ],
    },
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "app", label: "App" },
  { id: "health", label: "Health" },
  { id: "tech", label: "Tech" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.filterCat === filter);

  const handleCardMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 18;
      const y = -((e.clientY - r.top) / r.height - 0.5) * 12;
      card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateZ(6px)`;
    },
    []
  );

  const handleCardMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.transform =
        "perspective(600px) rotateX(0) rotateY(0) translateZ(0)";
    },
    []
  );

  return (
    <>
      <section
        className="border-t border-[rgba(204,0,0,0.15)] bg-[var(--night2)] px-6 py-[72px] sm:px-12"
        id="work"
      >
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">
          Projects That <em>Actually Shipped</em>
        </h2>

        <div className="mb-8 flex flex-wrap gap-1">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`cursor-none rounded-full border px-5 py-2 font-ui text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
                filter === f.id
                  ? "border-transparent bg-[var(--crimson)] text-[var(--night)]"
                  : "border-[var(--ink)] bg-transparent text-[var(--text-muted)] hover:border-[rgba(204,0,0,0.35)] hover:text-[var(--crimson)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4"
          style={{ perspective: "1000px" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setModalProject(project)}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className={`feature-card-shell group relative cursor-none overflow-hidden rounded-sm p-7 shadow-comic transition-all duration-[250ms] will-change-transform ${
                  project.featured
                    ? "sm:col-span-full sm:grid sm:grid-cols-2 sm:gap-8 sm:items-center"
                    : ""
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover opacity-35"
                    sizes="(max-width: 640px) 100vw, 400px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--night)] via-[var(--night)]/80 to-transparent" />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(204,0,0,0.1)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {project.featured && (
                  <div className="relative z-[1]">
                    <ProjectPreview title={project.title} liveUrl={project.liveUrl} />
                  </div>
                )}

                <div className="relative z-[1]">
                  <div className="mb-[14px] font-ui text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--crimson)]">
                    {project.category} &middot; {project.year}
                  </div>
                  <div className="mb-[10px] font-comic text-[22px] tracking-tight text-[var(--text-primary)]">
                    {project.title}
                  </div>
                  <div className="mb-5 font-ui text-[13px] leading-[1.7] text-[var(--text-muted)]">
                    {project.shortDesc}
                  </div>
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded border border-[rgba(204,0,0,0.25)] bg-[var(--night3)] px-2 py-1"
                      >
                        <TechIcon label={tech} />
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-ui text-[11px] font-bold text-[var(--text-muted)]">
                      {project.year}
                    </span>
                    <span className="text-[16px] text-[var(--crimson)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                      &#8599;
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {modalProject && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalProject(null);
          }}
        >
          <div className="comic-panel relative max-h-[85vh] w-full max-w-[520px] overflow-y-auto p-11">
            <button
              type="button"
              onClick={() => setModalProject(null)}
              className="absolute right-[18px] top-[18px] h-9 w-9 cursor-pointer rounded-full border border-[var(--ink)] bg-[var(--surface)] text-[18px] leading-none text-[var(--text)] hover:bg-[var(--s2)]"
              aria-label="Close"
            >
              &#10005;
            </button>
            <div className="mb-[14px] font-ui text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--crimson)]">
              {modalProject.modal.cat}
            </div>
            <div className="mb-[14px] font-comic text-[28px] tracking-tight text-[var(--text-primary)]">
              {modalProject.title}
            </div>
            <div className="mb-6 font-ui text-[14px] leading-[1.8] text-[var(--text-muted)]">
              {modalProject.modal.desc}
            </div>

            <div className="mb-6 space-y-4 border-t border-[var(--ink)] pt-5">
              <div>
                <div className="mb-1 font-ui text-[10px] font-bold uppercase tracking-[2px] text-[var(--crimson)]">
                  Problem
                </div>
                <p className="font-ui text-[13px] leading-[1.75] text-[var(--text-muted)]">
                  {modalProject.modal.problem}
                </p>
              </div>
              <div>
                <div className="mb-1 font-ui text-[10px] font-bold uppercase tracking-[2px] text-[var(--crimson)]">
                  Solution
                </div>
                <p className="font-ui text-[13px] leading-[1.75] text-[var(--text-muted)]">
                  {modalProject.modal.solution}
                </p>
              </div>
              <div>
                <div className="mb-1 font-ui text-[10px] font-bold uppercase tracking-[2px] text-[var(--crimson)]">
                  Result
                </div>
                <p className="font-ui text-[13px] leading-[1.75] text-[var(--text-muted)]">
                  {modalProject.modal.result}
                </p>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-[14px] border-t border-[var(--ink)] pt-5">
              {modalProject.modal.meta.map(([key, value]) => (
                <div key={key}>
                  <div className="mb-[3px] font-ui text-[10px] font-bold uppercase tracking-[2px] text-[var(--text-muted)]">
                    {key}
                  </div>
                  <div className="font-ui text-[13px] text-[var(--text-primary)]">
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <a
              href={modalProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dd-btn dd-btn-filled inline-block border-none px-8 py-3 no-underline"
            >
              View Live Project &#8599;
            </a>
          </div>
        </div>
      )}
    </>
  );
}
