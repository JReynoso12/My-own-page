"use client";

import { useState, useEffect } from "react";

const links = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(links[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-[200] flex items-center justify-between px-5 sm:px-9 py-4 bg-[var(--marvel-red)] border-b-[3px] border-[var(--ink)] shadow-[0_4px_0_0_rgba(0,0,0,0.35)]">
      <button
        onClick={() => scrollTo("hero")}
        className="font-comic text-[22px] tracking-[2px] text-[var(--on-marvel-red)] cursor-pointer bg-transparent border-none uppercase drop-shadow-sm"
      >
        JR.
      </button>
      <div className="hidden sm:flex gap-7">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`text-[11px] tracking-[2px] uppercase cursor-pointer font-ui font-bold transition-colors duration-200 border-none bg-transparent p-0 ${
              active === link.id
                ? "text-[var(--gold)] underline decoration-2 underline-offset-4"
                : "text-white/80 hover:text-[var(--gold)]"
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
      <button
        onClick={() => scrollTo("contact")}
        className="text-[10px] tracking-[2px] uppercase border-[3px] border-[var(--gold)] text-[var(--gold)] px-[18px] py-[7px] cursor-pointer font-ui font-bold bg-transparent shadow-comic-sm transition-all duration-200 hover:bg-[var(--gold)] hover:text-[var(--on-gold)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
      >
        Hire Me
      </button>
    </nav>
  );
}
