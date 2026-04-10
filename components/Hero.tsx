"use client";

import dynamic from "next/dynamic";

const ThreeHeroScene = dynamic(() => import("./ThreeHeroScene"), { ssr: false });

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[620px] overflow-hidden flex items-center" id="hero">
      <ThreeHeroScene />
      <div className="relative z-[2] px-6 sm:px-12 max-w-[560px]">
        <div
          className="text-[10px] tracking-[4px] uppercase text-[var(--gold)] font-ui mb-5 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          &#9679; Available for projects
        </div>
        <h1
          className="text-[clamp(48px,7vw,80px)] font-normal leading-none tracking-[-2px] mb-[6px] animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Jimuel <em className="text-[var(--gold)] italic">Reynoso</em>
        </h1>
        <p
          className="text-[clamp(48px,7vw,80px)] font-normal leading-none tracking-[-2px] text-[var(--muted)] mb-7 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Full-Stack Dev
        </p>
        <p
          className="text-[15px] leading-[1.8] text-[#8888aa] font-ui mb-9 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          I build scalable, user-friendly web applications using modern
          full-stack technologies. Transforming ideas into secure,
          high-performance digital products from concept to deployment.
        </p>
        <div
          className="flex gap-[14px] animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <button
            onClick={() => scrollTo("work")}
            className="px-[30px] py-3 bg-[var(--gold)] text-[var(--bg)] text-[11px] tracking-[2px] uppercase font-ui cursor-pointer border-none font-bold transition-colors duration-200 hover:bg-[var(--gold2)]"
          >
            View Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-[30px] py-3 border border-[#2a2a44] text-[var(--muted)] text-[11px] tracking-[2px] uppercase font-ui cursor-pointer bg-transparent transition-all duration-200 hover:border-[var(--text)] hover:text-[var(--text)]"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
