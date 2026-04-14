"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { useBookNav } from "@/contexts/BookNavigationContext";

const ThreeHeroScene = dynamic(() => import("./ThreeHeroScene"), { ssr: false });

export default function Hero() {
  const { goToPage } = useBookNav();

  return (
    <section
      className="relative min-h-[620px] overflow-hidden flex items-center border-b border-[var(--ink)]"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/daredevil-hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-[72%_center] sm:object-right"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/35" />
      </div>

      <div className="absolute inset-0 z-[1] opacity-[0.2] pointer-events-none">
        <ThreeHeroScene />
      </div>

      <div className="relative z-[2] px-6 sm:px-12 max-w-[560px]">
        <div
          className="comic-panel p-6 sm:p-8 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div
            className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--dd-red)] font-ui font-semibold mb-5 px-3 py-1.5 rounded-full border border-[rgba(229,9,20,0.35)] bg-[rgba(229,9,20,0.08)]"
            style={{ animationDelay: "0.35s" }}
          >
            Available for projects
          </div>
          <h1
            className="font-comic text-[clamp(40px,7vw,80px)] leading-[0.95] mb-3 animate-fade-up text-white"
            style={{ animationDelay: "0.4s" }}
          >
            Jimuel{" "}
            <span className="text-[var(--dd-red)]">Reynoso</span>
          </h1>
          <p
            className="text-[clamp(18px,3vw,26px)] leading-tight text-[var(--muted)] font-ui font-medium mb-6 animate-fade-up uppercase tracking-[0.08em]"
            style={{ animationDelay: "0.5s" }}
          >
            Full-Stack Developer
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
              type="button"
              onClick={() => goToPage("work")}
              className="rounded-full px-8 py-3 bg-[var(--gold)] text-white text-[11px] tracking-[0.15em] uppercase font-ui font-semibold cursor-pointer border-none shadow-lg shadow-red-950/40 transition-all duration-200 hover:bg-[#f40612] hover:scale-[1.02]"
            >
              View Work
            </button>
            <button
              type="button"
              onClick={() => goToPage("contact")}
              className="rounded-full px-8 py-3 border border-white/40 text-white text-[11px] tracking-[0.15em] uppercase font-ui font-semibold cursor-pointer bg-transparent transition-all duration-200 hover:bg-white/10 hover:border-white/60"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
