"use client";

const experiences = [
  {
    year: "2024 — Present",
    role: "Full-Stack Web Developer",
    company: "Freelance · Philippines",
    detail:
      "Building and deploying modern web applications with Vue.js, Next.js, Node.js, and MySQL. Shipped 6+ production projects with focus on performance and UX.",
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
      <div className="text-[10px] tracking-[4px] uppercase text-[var(--gold)] font-ui mb-[14px]">
        Experience
      </div>
      <h2 className="text-[clamp(30px,4vw,48px)] font-normal tracking-[-1px] leading-[1.15] mb-11">
        The Journey
        <br />
        <em className="text-[var(--muted)] italic">So Far</em>
      </h2>
      <div className="relative pl-[22px] border-l border-[var(--border)]">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={i === experiences.length - 1 ? "relative" : "relative mb-11"}
          >
            <div className="absolute left-[-27px] top-[5px] w-[9px] h-[9px] border-2 border-[var(--gold)] bg-[var(--bg)] rounded-full shadow-[0_0_12px_rgba(232,201,106,0.3)]" />
            <div className="text-[10px] tracking-[2px] text-[var(--gold)] font-ui mb-[6px]">
              {exp.year}
            </div>
            <div className="text-[19px] font-normal mb-1 tracking-[-0.3px]">
              {exp.role}
            </div>
            <div className="text-[13px] text-[var(--muted)] font-ui mb-[10px]">
              {exp.company}
            </div>
            <div className="text-[13px] text-[#555570] font-ui leading-[1.7]">
              {exp.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
