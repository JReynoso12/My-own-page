"use client";

export default function TestimonialStrip() {
  return (
    <section
      className="border-b border-[rgba(204,0,0,0.12)] bg-[var(--night)] px-6 py-10 sm:px-12"
      aria-label="Testimonial"
    >
      <blockquote
        className="mx-auto max-w-2xl text-center font-ui text-[0.95rem] leading-[1.75] text-[var(--text-muted)]"
        style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
      >
        <p className="mb-4 italic">
          &ldquo;Jimuel communicates clearly, ships on time, and cares about the details—
          exactly what you want in a developer on your project.&rdquo;
        </p>
        <footer className="font-ui text-[10px] font-semibold uppercase tracking-[0.2em] not-italic text-[var(--crimson)]">
          — Collaborator, freelance build
        </footer>
      </blockquote>
    </section>
  );
}
