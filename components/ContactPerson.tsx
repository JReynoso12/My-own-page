"use client";

import dynamic from "next/dynamic";

const ThreeContactScene = dynamic(() => import("./ThreeContactScene"), {
  ssr: false,
});

const contactLinks = [
  {
    label: "rjimueltorrecampo@gmail.com",
    href: "mailto:rjimueltorrecampo@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jimuel-reynoso",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/JReynoso12",
    external: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/jimuel.torrecampo.1",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rjmuuuel/",
    external: true,
  },
];

export default function ContactPerson() {
  return (
    <section
      className="relative text-center py-[90px] px-6 sm:px-12 overflow-hidden"
      id="contact"
      style={{ background: "var(--bg)" }}
    >
      <ThreeContactScene />
      <div className="relative z-[2]">
        <div className="inline-block mx-auto text-[10px] tracking-[0.2em] uppercase text-[var(--dd-red)] font-ui font-semibold mb-4 px-3 py-1.5 rounded-full border border-[rgba(229,9,20,0.35)] bg-[rgba(229,9,20,0.08)]">
          Contact
        </div>
        <h2 className="font-comic text-[clamp(36px,6vw,64px)] leading-[1.05] mb-5 text-white">
          Let&apos;s make
          <br />
          something <span className="text-[var(--dd-red)]">great</span>
        </h2>
        <p className="text-[14px] text-[var(--muted)] font-ui mb-10">
          Open to full-time roles, consulting, and select freelance projects.
        </p>
        <div className="flex justify-center gap-7 flex-wrap">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-[11px] tracking-[0.12em] uppercase text-[var(--muted)] font-ui font-medium cursor-pointer py-2 px-4 rounded-full border border-transparent transition-all duration-200 hover:text-white hover:border-white/20 hover:bg-white/5 no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
