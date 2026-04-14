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
    <section className="py-[72px] px-6 sm:px-12 bg-[var(--surface)]" id="experience">
      <div className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--dd-red)] font-ui font-semibold mb-3 px-3 py-1.5 rounded-full border border-[rgba(229,9,20,0.35)] bg-[rgba(229,9,20,0.08)]">
        Experience
      </div>
      <h2 className="font-comic text-[clamp(32px,4vw,52px)] leading-[1.05] mb-11 text-white">
        The Journey
        <br />
        <span className="text-[var(--muted)]">So Far</span>
      </h2>
      <div className="relative pl-[22px] border-l-2 border-[rgba(229,9,20,0.35)]">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={i === experiences.length - 1 ? "relative" : "relative mb-11"}
          >
            <div className="absolute left-[-26px] top-[6px] w-3 h-3 rounded-full bg-[var(--dd-red)] ring-2 ring-black" />
            <div className="text-[10px] tracking-[0.12em] text-[var(--dd-red)] font-ui font-semibold mb-[6px]">
              {exp.year}
            </div>
            <div className="font-comic text-[20px] mb-1 tracking-tight text-white">
              {exp.role}
            </div>
            <div className="text-[13px] text-[var(--muted)] font-ui mb-[10px]">
              {exp.company}
            </div>
            <div className="text-[13px] text-[var(--muted)] font-ui leading-[1.7]">
              {exp.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
