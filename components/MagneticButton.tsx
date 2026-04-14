"use client";

import { useCallback, useRef, type ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  "aria-label"?: string;
};

export default function MagneticButton({
  children,
  className = "",
  onClick,
  type = "button",
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current;
    if (!btn) return;
    const inner = btn.querySelector<HTMLElement>("[data-magnetic-inner]");
    if (!inner) return;
    const r = btn.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width - 0.5;
    const my = (e.clientY - r.top) / r.height - 0.5;
    inner.style.transform = `translate(${mx * 10}px, ${my * 6}px)`;
  }, []);

  const onLeave = useCallback(() => {
    const btn = ref.current;
    if (!btn) return;
    const inner = btn.querySelector<HTMLElement>("[data-magnetic-inner]");
    if (!inner) return;
    inner.style.transform = "";
  }, []);

  return (
    <button
      ref={ref}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      <span
        data-magnetic-inner
        className="relative z-[1] block transition-transform duration-150 ease-out"
      >
        {children}
      </span>
    </button>
  );
}
