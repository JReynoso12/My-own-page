export default function Footer() {
  return (
    <footer className="px-6 sm:px-12 py-5 flex flex-wrap gap-3 justify-between items-center border-t-[3px] border-[var(--marvel-red)] bg-[var(--spider-blue)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
      <span className="text-[11px] text-[var(--muted)] font-ui font-bold">
        &copy; 2026 Jimuel Reynoso &mdash; All rights reserved
      </span>
      <span className="font-comic text-[14px] text-[var(--gold)] tracking-[3px] uppercase drop-shadow-sm">
        Portfolio
      </span>
    </footer>
  );
}
