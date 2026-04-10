"use client";

import { useEffect, useRef } from "react";

const stats = [
  { target: 6, suffix: "+", label: "Projects Shipped" },
  { target: 3, suffix: "+", label: "Years Experience" },
  { target: 100, suffix: "%", label: "Dedication" },
];

function animateCounter(el: HTMLElement, target: number, suffix: string) {
  let value = 0;
  const step = Math.ceil(target / 50);
  const interval = setInterval(() => {
    value = Math.min(value + step, target);
    el.textContent = value + suffix;
    if (value >= target) clearInterval(interval);
  }, 35);
}

export default function StatsBar() {
  const countedRef = useRef(false);

  useEffect(() => {
    if (countedRef.current) return;
    countedRef.current = true;
    const timer = setTimeout(() => {
      stats.forEach((stat, i) => {
        const el = document.getElementById(`counter-${i}`);
        if (el) animateCounter(el, stat.target, stat.suffix);
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex gap-10 px-6 sm:px-12 py-6 bg-[rgba(14,14,26,0.95)] border-t border-b border-[var(--border)]">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex flex-col">
          <span
            id={`counter-${i}`}
            className="text-[30px] text-[var(--gold)] tracking-[-1px]"
          >
            0
          </span>
          <span className="text-[10px] tracking-[2px] uppercase text-[var(--muted)] font-ui">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
