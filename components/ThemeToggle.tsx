"use client";

import { useEffect, useState } from "react";

function getPreferred(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("dd-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setMode(getPreferred());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "light") {
      root.classList.add("dd-light");
    } else {
      root.classList.remove("dd-light");
    }
    localStorage.setItem("dd-theme", mode);
  }, [mode]);

  return (
    <button
      type="button"
      onClick={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
      className="cursor-none rounded-full border border-[rgba(204,0,0,0.35)] bg-transparent px-3 py-1.5 font-ui text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] transition-colors hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
      aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mode === "dark" ? "Light" : "Dark"}
    </button>
  );
}
