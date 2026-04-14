import FooterSkyline from "./FooterSkyline";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(204,0,0,0.15)] bg-[var(--night2)] text-center">
      <div className="relative pt-10">
        <p className="section-label text-center">Hell&apos;s Kitchen, New York</p>
        <h2 className="section-title mb-8 text-center">
          The <em>City</em> Never Sleeps
        </h2>
        <FooterSkyline />
      </div>
      <p className="font-serif-italic px-6 py-6 text-[0.85rem] text-[rgba(204,0,0,0.5)] tracking-[0.25em]">
        — The Man Without Fear —
      </p>
      <div className="border-t border-[rgba(204,0,0,0.15)] px-6 py-10">
        <p className="font-ui text-[0.75rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
          &copy; 2026 Jimuel Reynoso &mdash; All rights reserved
        </p>
      </div>
    </footer>
  );
}
