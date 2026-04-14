"use client";

import Image from "next/image";

function hostFromUrl(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}

export default function ProjectPreview({
  title,
  liveUrl,
}: {
  title: string;
  liveUrl: string;
}) {
  const host = hostFromUrl(liveUrl);
  const faviconSrc = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=128`;

  return (
    <div className="relative w-full min-h-[200px] overflow-hidden border-[3px] border-[var(--ink)] bg-[var(--surface)]">
      {/* Scaled live page preview (some sites block iframes; favicon still shows) */}
      <div className="relative h-[220px] w-full overflow-hidden bg-[var(--s2)]">
        <iframe
          src={liveUrl}
          title={`${title} live preview`}
          className="pointer-events-none absolute left-0 top-0 h-[440px] w-[200%] max-w-none origin-top-left scale-50 border-0"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex items-center gap-3 border-t-[3px] border-[var(--on-gold)] bg-[var(--gold)] px-4 py-3">
        <Image
          src={faviconSrc}
          alt=""
          width={40}
          height={40}
          unoptimized
          className="h-10 w-10 shrink-0 border-[3px] border-[var(--on-gold)] bg-[var(--surface)] shadow-[2px_2px_0_0_var(--marvel-red)]"
        />
        <div className="min-w-0 flex-1">
          <p className="font-comic text-[13px] uppercase leading-tight text-[var(--on-gold)] truncate">
            {title}
          </p>
          <p className="font-ui text-[10px] font-bold tracking-wide text-[var(--spider-blue)] truncate">
            {host}
          </p>
        </div>
      </div>
    </div>
  );
}
