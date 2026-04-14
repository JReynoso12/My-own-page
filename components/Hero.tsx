"use client";

import dynamic from "next/dynamic";

const ThreeHeroScene = dynamic(() => import("./ThreeHeroScene"), { ssr: false });

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-[620px] overflow-hidden flex items-center bg-[var(--bg)] border-b-[3px] border-[var(--ink)]"
      id="hero"
    >
      <ThreeHeroScene />
      <div className="relative z-[2] px-6 sm:px-12 max-w-[560px]">
        <div
          className="comic-panel p-6 sm:p-8 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div
            className="inline-block text-[10px] tracking-[3px] uppercase text-[var(--on-gold)] font-ui font-bold mb-4 px-3 py-1 bg-[var(--gold)] border-2 border-[var(--on-gold)] shadow-[2px_2px_0_0_var(--marvel-red)]"
            style={{ animationDelay: "0.35s" }}
          >
            THWIP! Available for projects
          </div>
          <h1
            className="font-comic text-[clamp(42px,7vw,76px)] leading-[0.95] mb-2 animate-fade-up uppercase"
            style={{ animationDelay: "0.4s" }}
          >
            Jimuel{" "}
            <span className="text-[var(--marvel-red)]">Reynoso</span>
          </h1>
          <p
            className="font-comic text-[clamp(28px,5vw,44px)] leading-none text-[var(--spider-blue-glow)] mb-6 animate-fade-up uppercase"
            style={{ animationDelay: "0.5s" }}
          >
            Full-Stack Dev
          </p>
          <p
            className="text-[15px] leading-[1.75] text-[var(--muted)] font-ui mb-8 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            I build scalable, user-friendly web applications using modern
            full-stack technologies. Transforming ideas into secure,
            high-performance digital products from concept to deployment.
          </p>
          <div
            className="flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <button
              onClick={() => scrollTo("work")}
              className="px-7 py-3 bg-[var(--gold)] text-[var(--on-gold)] text-[11px] tracking-[2px] uppercase font-ui font-bold cursor-pointer border-[3px] border-[var(--on-gold)] shadow-comic transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            >
              View Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-7 py-3 border-[3px] border-[var(--spider-blue-bright)] text-[var(--comic-blue)] text-[11px] tracking-[2px] uppercase font-ui font-bold cursor-pointer bg-[var(--surface)] shadow-comic transition-all duration-200 hover:border-[var(--marvel-red)] hover:text-[var(--text)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
