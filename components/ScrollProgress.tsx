"use client";

import { useEffect, useState } from "react";

import { useMainScroll } from "@/contexts/MainScrollContext";

export default function ScrollProgress() {
  const { scrollEl } = useMainScroll();
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (!scrollEl) return;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollEl;
      const max = Math.max(1, scrollHeight - clientHeight);
      setPct(Math.min(100, (scrollTop / max) * 100));
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

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[250] h-[3px] bg-[rgba(204,0,0,0.12)]"
      aria-hidden
    >
      <div
        className="h-full bg-[var(--crimson)] shadow-[0_0_12px_rgba(204,0,0,0.45)] transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
