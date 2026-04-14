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
        <div className="inline-block mx-auto text-[10px] tracking-[3px] uppercase text-[var(--on-gold)] font-ui font-bold mb-4 px-3 py-1 bg-[var(--gold)] border-2 border-[var(--on-gold)] shadow-[2px_2px_0_0_var(--marvel-red)]">
          Contact
        </div>
        <h2 className="font-comic text-[clamp(36px,6vw,64px)] leading-[1.05] mb-5 uppercase">
          Let&apos;s make
          <br />
          something <span className="text-[var(--marvel-red)]">great</span>
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
              className="text-[11px] tracking-[2px] uppercase text-[var(--spider-blue-glow)] font-ui font-bold cursor-pointer py-2 px-3 border-[3px] border-transparent transition-all duration-200 hover:border-[var(--marvel-red)] hover:bg-[var(--surface)] hover:shadow-comic-sm no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
