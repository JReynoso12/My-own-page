"use client";

import { useEffect } from "react";

const frontendSkills = [
  { name: "Vue.js", width: "92%" },
  { name: "React / Next.js", width: "88%" },
  { name: "JavaScript (ES6+)", width: "95%" },
  { name: "Tailwind CSS", width: "90%" },
  { name: "HTML5 / CSS3", width: "96%" },
];

const backendSkills = [
  { name: "Node.js / Express", width: "85%" },
  { name: "REST APIs", width: "90%" },
  { name: "MySQL / PostgreSQL", width: "82%" },
  { name: "Git / GitHub", width: "88%" },
  { name: "Docker / Deploy", width: "72%" },
];

export default function Skills() {
  useEffect(() => {
    const el = document.getElementById("skills-grid");
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLDivElement>("[data-width]")
              .forEach((bar) => {
                bar.style.width = bar.dataset.width || "0%";
                bar.classList.add("dd-heartbeat");
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const renderSkillRow = (skill: { name: string; width: string }) => (
    <div key={skill.name} className="mb-5 flex items-center gap-6">
      <span className="w-[160px] flex-shrink-0 font-ui text-[0.75rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
        {skill.name}
      </span>
      <div className="dd-skill-track rounded-none">
        <div
          data-width={skill.width}
          className="dd-skill-fill w-0 rounded-none transition-[width] duration-[1200ms] ease-[cubic-bezier(.4,0,.2,1)]"
        />
      </div>
      <span className="w-[38px] flex-shrink-0 text-right font-comic text-[1rem] text-[var(--crimson)]">
        {skill.width.replace("%", "")}
      </span>
    </div>
  );

  return (
    <section
      className="border-t border-[rgba(204,0,0,0.1)] px-6 py-[72px] sm:px-12"
      id="skills"
      style={{ background: "var(--night)" }}
    >
      <p className="section-label">Capabilities</p>
      <h2 className="section-title">
        What I Bring <em>to the Table</em>
      </h2>
      <div className="grid gap-10 md:grid-cols-2" id="skills-grid">
        <div>
          <div className="mb-5 font-ui text-[0.65rem] uppercase tracking-[0.2em] text-[var(--crimson)]">
            Frontend
          </div>
          {frontendSkills.map(renderSkillRow)}
        </div>
        <div>
          <div className="mb-5 font-ui text-[0.65rem] uppercase tracking-[0.2em] text-[var(--crimson)]">
            Backend &amp; Tools
          </div>
          {backendSkills.map(renderSkillRow)}
        </div>
      </div>
    </section>
  );
}
