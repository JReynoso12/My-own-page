"use client";

const experiences = [
  {
    year: "2024 — Present",
    role: "Full-Stack Web Developer",
    company: "Freelance · Philippines",
    detail:
      "Building and deploying modern web applications with Vue.js, Next.js, Node.js, and MySQL. Shipped 5+ production projects with focus on performance and UX.",
  },
  {
    year: "2023 — 2024",
    role: "Web Application Development",
    company: "Self-Directed Projects",
    detail:
      "Developed full-stack applications including fitness trackers, booking platforms, and health-tech tools. End-to-end from database design to deployment.",
  },
  {
    year: "2022 — 2023",
    role: "Frontend Development & UI Design",
    company: "Skill Building & Projects",
    detail:
      "Deep focus on React, Vue.js, responsive design, and REST API integration. Built responsive, user-centered interfaces from scratch.",
  },
  {
    year: "Ongoing",
    role: "Self-Taught Developer",
    company: "Continuous Learning",
    detail:
      "Mastered full-stack technologies through hands-on project work. Focused on clean code, scalable architecture, and real-world problem solving.",
  },
];

export default function Experience() {
  return (
    <section
      className="border-t border-[rgba(204,0,0,0.1)] bg-[var(--night2)] px-6 py-[72px] sm:px-12"
      id="experience"
    >
      <p className="section-label">Experience</p>
      <h2 className="section-title">
        The Journey <em>So Far</em>
      </h2>
      <div className="relative border-l-2 border-[rgba(204,0,0,0.25)] pl-[22px]">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={i === experiences.length - 1 ? "relative" : "relative mb-11"}
          >
            <div className="absolute left-[-26px] top-[6px] h-3 w-3 rounded-full bg-[var(--crimson)] ring-2 ring-[var(--night)]" />
            <div className="mb-[6px] font-ui text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--crimson)]">
              {exp.year}
            </div>
            <div className="mb-1 font-comic text-[20px] tracking-tight text-[var(--text-primary)]">
              {exp.role}
            </div>
            <div className="mb-[10px] font-ui text-[13px] text-[var(--text-muted)]">
              {exp.company}
            </div>
            <div className="font-ui text-[13px] leading-[1.7] text-[var(--text-muted)]">
              {exp.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
