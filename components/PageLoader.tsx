"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    const t = window.setTimeout(() => setDone(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[30000] flex flex-col items-center justify-center bg-[var(--night)] transition-opacity duration-500 pointer-events-none data-[exit=true]:opacity-0"
      aria-hidden
    >
      <div className="font-comic text-[clamp(2.5rem,12vw,5rem)] tracking-[0.2em] text-[var(--crimson)] logo-dd-pulse">
        DD
      </div>
      <div className="mt-6 h-0.5 w-40 overflow-hidden bg-[rgba(204,0,0,0.2)]">
        <div className="dd-page-loader-bar h-full w-1/3 bg-[var(--crimson)]" />
      </div>
    </div>
  );
}
