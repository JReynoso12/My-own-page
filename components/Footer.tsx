export default function Footer() {
  return (
    <footer className="px-6 sm:px-12 py-6 flex flex-wrap gap-3 justify-between items-center border-t border-white/[0.06] bg-black">
      <span className="text-[12px] text-[var(--muted)] font-ui">
        &copy; 2026 Jimuel Reynoso &mdash; All rights reserved
      </span>
      <span className="font-ui text-[12px] font-semibold text-[var(--dd-red)] tracking-[0.2em] uppercase">
        Portfolio
      </span>
    </footer>
  );
}
