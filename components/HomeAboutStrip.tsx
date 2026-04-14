"use client";

import Image from "next/image";

export default function HomeAboutStrip() {
  return (
    <section
      className="border-b border-[rgba(204,0,0,0.12)] bg-[var(--night2)] px-6 py-10 sm:px-12"
      aria-labelledby="home-about-heading"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-sm border border-[rgba(204,0,0,0.25)] bg-[var(--night3)] sm:h-32 sm:w-32">
          <Image
            src="/images/hero-portrait.png"
            alt="Jimuel Reynoso"
            fill
            className="object-cover"
            sizes="128px"
            loading="lazy"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2
            id="home-about-heading"
            className="mb-3 font-comic text-[1.35rem] tracking-tight text-[var(--text-primary)] sm:text-[1.5rem]"
          >
            About
          </h2>
          <p
            className="max-w-2xl font-ui text-[0.95rem] leading-[1.75] text-[var(--text-muted)]"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            I&apos;m Jimuel, a full-stack developer based in the Philippines. I turn
            product ideas into fast, reliable web apps—clear UX on the front, solid
            APIs and data on the back. Open to roles and projects where craft and
            shipping both matter.
          </p>
        </div>
      </div>
    </section>
  );
}
