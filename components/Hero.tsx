"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { useBookNav } from "@/contexts/BookNavigationContext";

const ThreeHeroScene = dynamic(() => import("./ThreeHeroScene"), { ssr: false });

export default function Hero() {
  const { goToPage } = useBookNav();

  return (
    <section
      className="relative flex min-h-[620px] items-center overflow-hidden border-b border-[rgba(204,0,0,0.12)]"
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-[#060608]/88 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/90 via-transparent to-[#060608]/50" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.15]">
        <ThreeHeroScene />
      </div>

      <div className="dd-emblem hidden lg:block">DD</div>

      <div className="relative z-[2] w-full max-w-[640px] px-6 sm:px-12">
        <div className="comic-panel p-6 sm:p-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          <p
            className="mb-4 font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--crimson)] animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Available for projects
          </p>
          <p
            className="font-serif-italic mb-4 animate-fade-up text-[1rem] uppercase tracking-[0.3em] text-[var(--crimson)]"
            style={{ animationDelay: "0.32s" }}
          >
            The Man Without Fear
          </p>
          <h1
            className="font-comic mb-3 animate-fade-up text-[clamp(3rem,10vw,5.5rem)] leading-[0.92] text-[var(--text-primary)]"
            style={{ animationDelay: "0.38s" }}
          >
            Jimuel{" "}
            <span className="dd-accent-glitch text-[var(--crimson)]">Reynoso</span>
          </h1>
          <p
            className="font-ui mb-6 animate-fade-up text-[0.9rem] uppercase tracking-[0.25em] text-[var(--text-muted)]"
            style={{ animationDelay: "0.45s" }}
          >
            Full-Stack Developer
          </p>
          <p
            className="mb-8 animate-fade-up text-[1.05rem] leading-[1.75] text-[var(--text-muted)]"
            style={{
              animationDelay: "0.52s",
              fontFamily: "var(--font-serif), Georgia, serif",
            }}
          >
            I build scalable, user-friendly web applications using modern full-stack
            technologies. Transforming ideas into secure, high-performance digital
            products from concept to deployment.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              type="button"
              onClick={() => goToPage("work")}
              className="dd-btn dd-btn-filled border-none"
            >
              View Work
            </button>
            <button
              type="button"
              onClick={() => goToPage("contact")}
              className="dd-btn border-none"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-[3] mt-12 w-full px-6 sm:px-12">
        <hr className="dd-divider" />
      </div>
    </section>
  );
}
