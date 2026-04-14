"use client";

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
    <nav className="sticky top-0 z-[200] flex shrink-0 items-center justify-between px-5 py-4 sm:px-9 bg-black/75 backdrop-blur-xl border-b border-white/[0.06]">
      <button
        type="button"
        onClick={() => goToPage("hero")}
        className="font-ui text-[18px] font-bold tracking-[0.12em] text-white cursor-pointer bg-transparent border-none uppercase"
      >
        JR.
      </button>
      <div className="hidden sm:flex gap-8">
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => goToPage(link.id)}
            className={`text-[12px] tracking-[0.06em] cursor-pointer font-ui font-medium transition-colors duration-200 border-none bg-transparent p-0 ${
              pageId === link.id
                ? "text-white"
                : "text-[var(--muted)] hover:text-white"
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => goToPage("contact")}
        className="rounded-full text-[11px] tracking-[0.12em] uppercase bg-[var(--gold)] text-white px-5 py-2.5 cursor-pointer font-ui font-semibold border-none transition-all duration-200 hover:bg-[#f40612] hover:scale-[1.02]"
      >
        Hire Me
      </button>
    </nav>
  );
}
