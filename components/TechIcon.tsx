"use client";

import { useState } from "react";

const SLUG: Record<string, string> = {
  "Next.js": "nextdotjs",
  React: "react",
  "Tailwind CSS": "tailwindcss",
  Vercel: "vercel",
  MediaPipe: "google",
  "Canvas API": "html5",
  "Node.js": "nodedotjs",
  Express: "express",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  Git: "git",
  GitHub: "github",
  Docker: "docker",
  "JavaScript (ES6+)": "javascript",
  "HTML5 / CSS3": "html5",
  "Vue.js": "vuedotjs",
};

type TechIconProps = {
  label: string;
};

export default function TechIcon({ label }: TechIconProps) {
  const [failed, setFailed] = useState(false);
  const slug = SLUG[label];
  if (!slug || failed) {
    return (
      <span className="font-ui text-[8px] font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">
        {label}
      </span>
    );
  }

  const src = `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${slug}.svg`;

  return (
    <span className="inline-flex h-[18px] w-[18px] items-center justify-center" title={label}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={16}
        height={16}
        className="opacity-90"
        onError={() => setFailed(true)}
      />
    </span>
  );
}
