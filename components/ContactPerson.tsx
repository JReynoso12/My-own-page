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
        <div className="text-[10px] tracking-[4px] uppercase text-[var(--gold)] font-ui mb-[14px] text-center">
          Contact
        </div>
        <h2 className="text-[clamp(36px,6vw,68px)] font-normal tracking-[-2px] leading-[1.1] mb-5">
          Let&apos;s make
          <br />
          something <em className="text-[var(--gold)] italic">great</em>
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
              className="text-[11px] tracking-[2px] uppercase text-[var(--muted)] font-ui cursor-pointer py-[10px] border-b border-transparent transition-all duration-200 hover:text-[var(--gold)] hover:border-[var(--gold)] no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
