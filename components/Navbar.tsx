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
    <nav className="sticky top-0 z-[200] flex items-center justify-between px-5 sm:px-9 py-4 bg-[rgba(8,8,16,0.9)] border-b border-[var(--border)] backdrop-blur-2xl">
      <button
        onClick={() => scrollTo("hero")}
        className="text-[17px] font-bold tracking-[3px] text-[var(--gold)] cursor-pointer bg-transparent border-none"
      >
        JR.
      </button>
      <div className="hidden sm:flex gap-7">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`text-[10px] tracking-[2px] uppercase cursor-pointer font-ui transition-colors duration-200 border-none bg-transparent p-0 ${
              active === link.id ? "text-[var(--gold)]" : "text-[var(--muted)] hover:text-[var(--gold)]"
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
      <button
        onClick={() => scrollTo("contact")}
        className="text-[10px] tracking-[2px] uppercase border border-[var(--gold)] text-[var(--gold)] px-[18px] py-[7px] cursor-pointer font-ui bg-transparent transition-all duration-200 hover:bg-[var(--gold)] hover:text-[var(--bg)]"
      >
        Hire Me
      </button>
    </nav>
  );
}
