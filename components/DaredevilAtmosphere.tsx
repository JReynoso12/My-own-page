"use client";

import { useEffect, useRef, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
}

type Ripple = { x: number; y: number; r: number; alpha: number };
type Drop = { x: number; y: number; len: number; speed: number; alpha: number };

function CursorDot({ x, y, visible }: { x: number; y: number; visible: boolean }) {
  if (!visible) return null;
  return (
    <div
      className="pointer-events-none fixed z-[10001] h-2 w-2 rounded-full bg-[var(--crimson)]"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
      aria-hidden
    />
  );
}

function ScanLineVertical() {
  return (
    <div
      className="dd-scan-line-v pointer-events-none fixed left-0 right-0 z-[8000]"
      aria-hidden
    />
  );
}

function ScanLineHorizontal() {
  return <div className="dd-scan-line-h" aria-hidden />;
}

export default function DaredevilAtmosphere() {
  const reduced = usePrefersReducedMotion();
  const radarRef = useRef<HTMLCanvasElement>(null);
  const rainRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const dropsRef = useRef<Drop[]>([]);
  const rafRadar = useRef<number>();
  const rafRain = useRef<number>();
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    if (reduced) return;

    const onMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY, visible: true });
      if (Math.random() < 0.2) {
        ripplesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          r: 0,
          alpha: 0.6,
        });
      }
    };
    const onLeave = () => setCursor((c) => ({ ...c, visible: false }));

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    const rc = radarRef.current;
    const rain = rainRef.current;
    const rctx = rc?.getContext("2d");
    const rctx2 = rain?.getContext("2d");

    if (!rc || !rain || !rctx || !rctx2) {
      return () => {
        window.removeEventListener("mousemove", onMove);
        document.documentElement.removeEventListener("mouseleave", onLeave);
      };
    }

    const resizeRadar = () => {
      rc.width = window.innerWidth;
      rc.height = window.innerHeight;
    };
    const resizeRain = () => {
      rain.width = window.innerWidth;
      rain.height = window.innerHeight;
      dropsRef.current = Array.from({ length: 140 }, () => ({
        x: Math.random() * rain.width,
        y: Math.random() * rain.height,
        len: Math.random() * 18 + 8,
        speed: Math.random() * 4 + 2,
        alpha: Math.random() * 0.4 + 0.1,
      }));
    };

    resizeRadar();
    resizeRain();
    window.addEventListener("resize", resizeRadar);
    window.addEventListener("resize", resizeRain);

    const drawRadar = () => {
      rctx.clearRect(0, 0, rc.width, rc.height);
      ripplesRef.current = ripplesRef.current.filter((r) => r.alpha > 0.01);
      ripplesRef.current.forEach((r) => {
        r.r += 1.6;
        r.alpha *= 0.96;
        rctx.beginPath();
        rctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        rctx.strokeStyle = `rgba(204,0,0,${r.alpha})`;
        rctx.lineWidth = 1.2;
        rctx.stroke();
      });
      rafRadar.current = requestAnimationFrame(drawRadar);
    };

    const drawRain = () => {
      rctx2.clearRect(0, 0, rain.width, rain.height);
      dropsRef.current.forEach((d) => {
        rctx2.beginPath();
        rctx2.moveTo(d.x, d.y);
        rctx2.lineTo(d.x - 1, d.y + d.len);
        rctx2.strokeStyle = `rgba(180,30,30,${d.alpha})`;
        rctx2.lineWidth = 0.7;
        rctx2.stroke();
        d.y += d.speed;
        if (d.y > rain.height) {
          d.y = -d.len;
          d.x = Math.random() * rain.width;
        }
      });
      rafRain.current = requestAnimationFrame(drawRain);
    };

    rafRadar.current = requestAnimationFrame(drawRadar);
    rafRain.current = requestAnimationFrame(drawRain);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resizeRadar);
      window.removeEventListener("resize", resizeRain);
      if (rafRadar.current) cancelAnimationFrame(rafRadar.current);
      if (rafRain.current) cancelAnimationFrame(rafRain.current);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <>
      <canvas
        ref={radarRef}
        className="pointer-events-none fixed inset-0 z-[9000]"
        aria-hidden
      />
      <canvas
        ref={rainRef}
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.22]"
        aria-hidden
      />
      <ScanLineVertical />
      <ScanLineHorizontal />
      <CursorDot x={cursor.x} y={cursor.y} visible={cursor.visible} />
    </>
  );
}
