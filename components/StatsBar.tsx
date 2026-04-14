"use client";

import { useEffect, useRef } from "react";

const stats = [
  { target: 3, suffix: "+", label: "Projects Shipped" },
  { target: 5, suffix: "+", label: "Years Experience" },
  { target: 100, suffix: "%", label: "Dedication" },
];

export default function StatsBar() {
  const intervalIdsRef = useRef<number[]>([]);

  useEffect(() => {
    intervalIdsRef.current = [];

    const startDelay = window.setTimeout(() => {
      stats.forEach((stat, i) => {
        const el = document.getElementById(`counter-${i}`);
        if (!el) return;

        let value = 0;
        const step = Math.max(1, Math.ceil(stat.target / 50));
        const id = window.setInterval(() => {
          value = Math.min(value + step, stat.target);
          el.textContent = `${value}${stat.suffix}`;
          if (value >= stat.target) {
            window.clearInterval(id);
          }
        }, 35);
        intervalIdsRef.current.push(id);
      });
    }, 500);

    return () => {
      window.clearTimeout(startDelay);
      intervalIdsRef.current.forEach((id) => window.clearInterval(id));
      intervalIdsRef.current = [];
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-4 sm:gap-8 px-6 sm:px-12 py-6 bg-[var(--surface)] border-b border-[var(--ink)]">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="comic-panel-flat flex flex-col flex-1 min-w-[140px] px-5 py-4"
        >
          <span
            id={`counter-${i}`}
            className="font-comic text-[34px] text-[var(--dd-red)] tracking-tight"
          >
            {stat.suffix === "%" ? "0%" : "0"}
          </span>
          <span className="text-[10px] tracking-[2px] uppercase text-[var(--muted)] font-ui font-bold">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
