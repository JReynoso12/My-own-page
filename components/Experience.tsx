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
      <div className="inline-block text-[10px] tracking-[3px] uppercase text-[var(--on-gold)] font-ui font-bold mb-3 px-3 py-1 bg-[var(--gold)] border-2 border-[var(--on-gold)] shadow-[2px_2px_0_0_var(--marvel-red)]">
        Experience
      </div>
      <h2 className="font-comic text-[clamp(32px,4vw,52px)] leading-[1.05] mb-11 uppercase">
        The Journey
        <br />
        <span className="text-[var(--spider-blue-glow)]">So Far</span>
      </h2>
      <div className="relative pl-[22px] border-l-[4px] border-[var(--ink)]">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={i === experiences.length - 1 ? "relative" : "relative mb-11"}
          >
            <div className="absolute left-[-27px] top-[5px] w-[14px] h-[14px] border-[3px] border-[var(--on-gold)] bg-[var(--gold)] rotate-45 shadow-[2px_2px_0_0_var(--marvel-red)]" />
            <div className="text-[10px] tracking-[2px] text-[var(--marvel-red)] font-ui font-bold mb-[6px]">
              {exp.year}
            </div>
            <div className="font-comic text-[20px] mb-1 tracking-[0.02em] uppercase">
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
