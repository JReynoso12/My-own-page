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
  { name: "MySQL / MSSQL", width: "82%" },
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
      <div className="flex-1 h-[2px] bg-[#1a1a30]">
        <div
          data-width={skill.width}
          className="h-[2px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold2)] w-0 transition-[width] duration-[1200ms] ease-[cubic-bezier(.4,0,.2,1)] relative"
        >
          <span className="absolute right-[-2px] top-[-3px] w-[7px] h-[7px] bg-[var(--gold)] rounded-full shadow-[0_0_8px_var(--gold)]" />
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
      <div className="text-[10px] tracking-[4px] uppercase text-[var(--gold)] font-ui mb-[14px]">
        Capabilities
      </div>
      <h2 className="text-[clamp(30px,4vw,48px)] font-normal tracking-[-1px] leading-[1.15] mb-11">
        What I Bring
        <br />
        <em className="text-[var(--muted)] italic">to the Table</em>
      </h2>
      <div className="grid md:grid-cols-2 gap-10" id="skills-grid">
        <div>
          <div className="text-[10px] tracking-[3px] uppercase text-[var(--gold)] font-ui mb-5">
            Frontend
          </div>
          {frontendSkills.map(renderSkillRow)}
        </div>
        <div>
          <div className="text-[10px] tracking-[3px] uppercase text-[var(--gold)] font-ui mb-5">
            Backend &amp; Tools
          </div>
          {backendSkills.map(renderSkillRow)}
        </div>
      </div>
    </section>
  );
}
