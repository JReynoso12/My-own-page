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
    <div className="relative w-full min-h-[200px] overflow-hidden rounded-lg border border-[var(--ink)] bg-[var(--surface)]">
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
      <div className="flex items-center gap-3 border-t border-[rgba(229,9,20,0.25)] bg-[#141414] px-4 py-3">
        <Image
          src={faviconSrc}
          alt=""
          width={40}
          height={40}
          unoptimized
          className="h-10 w-10 shrink-0 rounded border border-white/10 bg-[var(--surface)]"
        />
        <div className="min-w-0 flex-1">
          <p className="font-ui text-[13px] font-semibold leading-tight text-white truncate">
            {title}
          </p>
          <p className="font-ui text-[10px] font-medium tracking-wide text-[var(--muted)] truncate">
            {host}
          </p>
        </div>
      </div>
    </div>
  );
}
