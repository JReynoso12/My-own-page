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
    <div key={skill.name} className="flex items-center gap-[14px] mb-[14px]">
      <span className="text-[13px] text-[var(--text)] font-ui w-[130px] flex-shrink-0">
        {skill.name}
      </span>
      <div className="flex-1 h-[6px] bg-[var(--s2)] rounded-full overflow-hidden border border-[var(--ink)]">
        <div
          data-width={skill.width}
          className="h-full bg-gradient-to-r from-[var(--dd-red)] to-[#7f1d1d] w-0 transition-[width] duration-[1200ms] ease-[cubic-bezier(.4,0,.2,1)] relative rounded-full"
        >
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
        </div>
      </div>
      <span className="text-[11px] text-[var(--muted)] font-ui w-[34px] text-right">
        {skill.width}
      </span>
    </div>
  );

  return (
    <section
      className="py-[72px] px-6 sm:px-12"
      id="skills"
      style={{ background: "var(--bg)" }}
    >
      <div className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--dd-red)] font-ui font-semibold mb-3 px-3 py-1.5 rounded-full border border-[rgba(229,9,20,0.35)] bg-[rgba(229,9,20,0.08)]">
        Capabilities
      </div>
      <h2 className="font-comic text-[clamp(32px,4vw,52px)] leading-[1.05] mb-11 text-white">
        What I Bring
        <br />
        <span className="text-[var(--muted)]">to the Table</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-10" id="skills-grid">
        <div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--dd-red)] font-ui font-semibold mb-5">
            Frontend
          </div>
          {frontendSkills.map(renderSkillRow)}
        </div>
        <div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--dd-red)] font-ui font-semibold mb-5">
            Backend &amp; Tools
          </div>
          {backendSkills.map(renderSkillRow)}
        </div>
      </div>
    </section>
  );
}
