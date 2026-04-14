"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useBookNav } from "@/contexts/BookNavigationContext";
import { useMainScroll } from "@/contexts/MainScrollContext";

import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { pageId, goToPage } = useBookNav();
  const { scrollEl } = useMainScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!scrollEl) return;
    const onScroll = () => setScrolled(scrollEl.scrollTop > 20);
    onScroll();
    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, [scrollEl]);

  return (
    <nav
      className={`sticky top-0 z-[200] flex shrink-0 items-center justify-between border-b bg-[var(--nav-bg)] px-5 py-4 backdrop-blur-[14px] transition-[border-color] duration-300 sm:px-12 ${
        scrolled
          ? "border-[rgba(204,0,0,0.45)] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          : "border-[rgba(204,0,0,0.2)]"
      }`}
    >
      <button
        type="button"
        onClick={() => goToPage("hero")}
        className="cursor-none border-none bg-transparent p-0"
        aria-label="Home"
      >
        <span className="relative block h-10 w-10 shrink-0 sm:h-11 sm:w-11">
          <Image
            src="/images/dd-navbar-logo.png"
            alt=""
            fill
            className="object-contain drop-shadow-[0_0_12px_rgba(204,0,0,0.35)]"
            sizes="44px"
            priority
          />
        </span>
      </button>
      <div className="hidden items-center gap-6 sm:flex">
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => goToPage(link.id)}
            className={`cursor-none border-none bg-transparent p-0 font-ui text-[0.85rem] uppercase tracking-[0.15em] transition-colors duration-300 ${
              pageId === link.id
                ? "text-[var(--crimson)]"
                : "text-[var(--text-muted)] hover:text-[var(--crimson)]"
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <ThemeToggle />
        <a
          href="/resume.pdf"
          download
          className="hidden cursor-none rounded-full border border-[rgba(204,0,0,0.35)] px-3 py-2 font-ui text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] no-underline transition-colors hover:border-[var(--crimson)] hover:text-[var(--crimson)] sm:inline-flex sm:items-center"
        >
          CV
        </a>
        <button
          type="button"
          onClick={() => goToPage("contact")}
          className="dd-btn dd-btn-filled cursor-none border-none px-4 py-2.5 text-[0.7rem] sm:px-5 sm:text-[0.75rem]"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}
