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
    <div className="flex flex-wrap gap-4 border-b border-[rgba(204,0,0,0.12)] bg-[var(--night2)] px-6 py-6 sm:gap-8 sm:px-12">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="feature-card-shell min-w-[140px] flex-1 rounded-sm px-5 py-4"
        >
          <span
            id={`counter-${i}`}
            className="font-comic text-[34px] tracking-tight text-[var(--crimson)]"
          >
            {stat.suffix === "%" ? "0%" : "0"}
          </span>
          <span className="mt-1 block font-ui text-[10px] font-bold uppercase tracking-[2px] text-[var(--text-muted)]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
