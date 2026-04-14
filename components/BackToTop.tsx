"use client";

import { useEffect, useState } from "react";

import { useMainScroll } from "@/contexts/MainScrollContext";

export default function BackToTop() {
  const { scrollEl } = useMainScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!scrollEl) return;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollEl;
      const max = Math.max(1, scrollHeight - clientHeight);
      const ratio = scrollTop / max;
      setVisible(ratio >= 0.4);
    };

    onScroll();
    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(onScroll);
    ro.observe(scrollEl);

    return () => {
      scrollEl.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [scrollEl]);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => scrollEl?.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-5 z-[240] flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(204,0,0,0.45)] bg-[rgba(6,6,8,0.92)] font-ui text-[11px] uppercase tracking-[0.15em] text-[var(--crimson)] shadow-lg backdrop-blur-md transition-opacity duration-300 hover:bg-[rgba(204,0,0,0.15)] sm:bottom-28 sm:right-8"
    >
      ↑
    </button>
  );
}
