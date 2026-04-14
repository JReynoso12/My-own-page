"use client";

import { useState, useCallback } from "react";

import ProjectPreview from "./ProjectPreview";

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
  modal: {
    cat: string;
    desc: string;
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
    modal: {
      cat: "Fitness · 2024",
      desc: "A modern running-focused web app for active users, with a clean interface built for smooth interactions and quick access to workout-related content. Features fast responsive UI, fitness-focused flow, and clean modern design.",
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
    modal: {
      cat: "Productivity · 2024",
      desc: "A beautifully designed web application focused on recurring routines and habits with polished UI and consistent user experience. Features authentication entry flow, elegant UI, and responsive design across devices.",
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
    modal: {
      cat: "AI / Vision · 2024",
      desc: "Real-time pose detection app with movement visualization using body landmarks and heatmap-style rendering. Features pose landmark detection, motion heatmap visuals, and interactive controls.",
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
    modal: {
      cat: "Booking · 2024",
      desc: "A fast and intuitive court-booking experience that helps users check availability and reserve sessions quickly. Booking-first user flow with availability-focused layout and mobile-friendly interactions.",
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
    modal: {
      cat: "Healthcare · 2024",
      desc: "Veterinary clinic website designed to present services clearly and give pet owners a professional, trustworthy experience. Features clinic service presentation, professional healthcare UI, and responsive page structure.",
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
    modal: {
      cat: "Wellness · 2024",
      desc: "Mental health and wellness platform that organizes helpful content into an accessible and calming experience. Features organized wellness resources, accessibility-minded layout, and comfort-focused interface.",
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
      <section className="py-[72px] px-6 sm:px-12 bg-[var(--bg)]" id="work">
        <div className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--dd-red)] font-ui font-semibold mb-3 px-3 py-1.5 rounded-full border border-[rgba(229,9,20,0.35)] bg-[rgba(229,9,20,0.08)]">
          Selected Work
        </div>
        <h2 className="font-comic text-[clamp(32px,4vw,52px)] leading-[1.05] mb-11 text-white">
          Projects That
          <br />
          <span className="text-[var(--muted)]">Actually Shipped</span>
        </h2>

        {/* Filter buttons */}
        <div className="flex gap-1 mb-8 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-5 py-2 text-[10px] tracking-[0.12em] uppercase font-ui font-semibold border border-[var(--ink)] cursor-pointer transition-all duration-200 ${
                filter === f.id
                  ? "bg-[var(--gold)] text-white border-transparent"
                  : "bg-transparent text-[var(--muted)] hover:text-white hover:border-white/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project grid with perspective */}
        <div
          className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4"
          style={{ perspective: "1000px" }}
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => setModalProject(project)}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className={`bg-[var(--surface)] p-7 cursor-pointer transition-all duration-[250ms] relative overflow-hidden rounded-lg border border-[var(--ink)] shadow-comic hover:border-white/15 will-change-transform group ${
                project.featured
                  ? "sm:col-span-full sm:grid sm:grid-cols-2 sm:gap-8 sm:items-center"
                  : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(229,9,20,0.12)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {project.featured && (
                <div className="relative">
                  <ProjectPreview title={project.title} liveUrl={project.liveUrl} />
                </div>
              )}

              <div className="relative z-[1]">
                <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--dd-red)] font-ui font-semibold mb-[14px]">
                  {project.category} &middot; {project.year}
                </div>
                <div className="font-comic text-[22px] mb-[10px] tracking-tight text-white">
                  {project.title}
                </div>
                <div className="text-[13px] text-[var(--muted)] font-ui leading-[1.7] mb-5">
                  {project.shortDesc}
                </div>
                <div className="flex gap-[6px] flex-wrap mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] tracking-[0.08em] px-2 py-1 bg-[var(--s2)] text-[var(--muted)] font-ui font-medium uppercase rounded border border-[var(--ink)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-[var(--muted)] font-ui font-bold">
                    {project.year}
                  </span>
                  <span className="text-[16px] text-[var(--dd-red)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    &#8599;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project detail modal */}
      {modalProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[300] flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalProject(null);
          }}
        >
          <div className="comic-panel max-w-[520px] w-full p-11 relative max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setModalProject(null)}
              className="absolute top-[18px] right-[18px] bg-[var(--surface)] border border-[var(--ink)] rounded-full w-9 h-9 text-[var(--text)] text-[18px] cursor-pointer leading-none hover:bg-[var(--s2)]"
              aria-label="Close"
            >
              &#10005;
            </button>
            <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--dd-red)] font-ui font-semibold mb-[14px]">
              {modalProject.modal.cat}
            </div>
            <div className="font-comic text-[28px] tracking-tight mb-[14px] text-white">
              {modalProject.title}
            </div>
            <div className="text-[14px] text-[var(--muted)] font-ui leading-[1.8] mb-6">
              {modalProject.modal.desc}
            </div>
            <div className="grid grid-cols-2 gap-[14px] border-t border-[var(--ink)] pt-5 mb-6">
              {modalProject.modal.meta.map(([key, value]) => (
                <div key={key}>
                  <div className="text-[10px] tracking-[2px] uppercase text-[var(--muted)] font-ui font-bold mb-[3px]">
                    {key}
                  </div>
                  <div className="text-[13px] text-[var(--text)] font-ui">
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <a
              href={modalProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-8 py-3 bg-[var(--gold)] text-white text-[11px] tracking-[0.12em] uppercase font-ui font-semibold cursor-pointer border-none shadow-lg transition-all duration-200 hover:bg-[#f40612] no-underline"
            >
              View Live Project &#8599;
            </a>
          </div>
        </div>
      )}
    </>
  );
}
