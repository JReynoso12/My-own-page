"use client";

import Image from "next/image";

import { useBookNav } from "@/contexts/BookNavigationContext";

const links = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { pageId, goToPage } = useBookNav();

  return (
    <nav className="sticky top-0 z-[200] flex shrink-0 items-center justify-between border-b border-[rgba(204,0,0,0.2)] bg-[rgba(6,6,8,0.85)] px-5 py-4 backdrop-blur-[8px] sm:px-12">
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
      <div className="hidden gap-8 sm:flex">
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
      <button
        type="button"
        onClick={() => goToPage("contact")}
        className="dd-btn dd-btn-filled cursor-none border-none px-5 py-2.5 text-[0.75rem]"
      >
        Hire Me
      </button>
    </nav>
  );
}
