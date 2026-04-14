"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

import { useBookNav } from "@/contexts/BookNavigationContext";

import MagneticButton from "./MagneticButton";

const ThreeHeroScene = dynamic(() => import("./ThreeHeroScene"), { ssr: false });

const taglineWords = ["The", "Man", "Without", "Fear"];

export default function Hero() {
  const { goToPage } = useBookNav();

  return (
    <section
      className="hero-noir relative flex min-h-[620px] flex-col overflow-hidden border-b border-[rgba(204,0,0,0.12)]"
      id="hero"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-bg-kenburns pointer-events-none absolute inset-0">
          <Image
            src="/images/daredevil-cowl-hero.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_38%,rgba(5,5,5,0.35)_0%,rgba(10,0,8,0.55)_45%,rgba(5,0,0,0.88)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#0a0000]/95"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-black/65"
          aria-hidden
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2] opacity-[0.06]">
        <ThreeHeroScene />
      </div>

      <div className="dd-emblem pointer-events-none z-[4] select-none" aria-hidden>
        DD
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-14 sm:px-12">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <p className="hero-tagline-cinematic mb-0 flex flex-wrap justify-center gap-x-[0.35em] gap-y-1">
            {taglineWords.map((w, i) => (
              <motion.span
                key={`${w}-${i}`}
                className="inline-block"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </p>
          <h1 className="hero-name-title mb-0 flex flex-wrap justify-center gap-x-4 gap-y-1">
            <motion.span
              className="hero-name-first inline-block"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Jimuel
            </motion.span>
            <motion.span
              className="hero-name-last inline-block"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              Reynoso
            </motion.span>
          </h1>

          <motion.div
            className="comic-panel mt-2 w-full max-w-xl p-6 text-left sm:p-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={() => goToPage("contact")}
              className="group mb-4 flex w-full cursor-none items-center gap-3 border-none bg-transparent p-0 text-left transition-opacity hover:opacity-95"
            >
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
              </span>
              <span className="font-ui text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-400 sm:text-[12px]">
                Available for projects
              </span>
            </button>
            <p className="font-ui mb-6 text-[0.9rem] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Full-Stack Developer
            </p>
            <p
              className="mb-8 text-[1.05rem] leading-[1.75] text-[var(--text-muted)]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              I build scalable, user-friendly web applications using modern full-stack
              technologies. Transforming ideas into secure, high-performance digital
              products from concept to deployment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
              <MagneticButton
                onClick={() => goToPage("work")}
                className="dd-btn dd-btn-filled border-none"
              >
                View Work
              </MagneticButton>
              <MagneticButton
                onClick={() => goToPage("contact")}
                className="dd-btn border-none"
              >
                Get in Touch
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-auto w-full px-6 pb-8 pt-4 sm:px-12">
        <hr className="dd-divider" />
      </div>
    </section>
  );
}
