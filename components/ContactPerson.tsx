"use client";

import dynamic from "next/dynamic";

const ThreeContactScene = dynamic(() => import("./ThreeContactScene"), {
  ssr: false,
});

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jimuel-reynoso",
  },
  {
    label: "GitHub",
    href: "https://github.com/JReynoso12",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/jimuel.torrecampo.1",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rjmuuuel/",
  },
];

export default function ContactPerson() {
  return (
    <section
      className="relative overflow-hidden border-t border-[rgba(204,0,0,0.1)] px-6 py-[90px] text-center sm:px-12"
      id="contact"
      style={{ background: "var(--night)" }}
    >
      <ThreeContactScene />
      <div className="relative z-[2]">
        <p className="section-label">Contact</p>
        <h2 className="section-title mx-auto max-w-xl">
          Let&apos;s make <em>something great</em>
        </h2>
        <p className="mx-auto mb-10 max-w-md font-ui text-[14px] text-[var(--text-muted)]">
          Open to full-time roles, consulting, and select freelance projects.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="/resume.pdf"
            download="JIMUEL-Reynoso-resume.pdf"
            className="dd-btn dd-btn-filled cursor-none border-none px-5 py-2.5 text-[0.75rem] no-underline"
          >
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-7">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none rounded-full border border-[rgba(204,0,0,0.35)] px-4 py-2 font-ui text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)] no-underline transition-all duration-200 hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
