"use client";

import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { PAGE_ORDER, useBookNav } from "@/contexts/BookNavigationContext";

const flipEase = [0.22, 1, 0.36, 1] as const;

const flipVariants = {
  initial: (direction: number) => ({
    rotateY: direction > 0 ? 82 : -82,
    opacity: 0.4,
  }),
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.52, ease: flipEase },
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -82 : 82,
    opacity: 0.4,
    transition: { duration: 0.44, ease: flipEase },
  }),
};

const fadeVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.28 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

type BookFlipStageProps = {
  pages: ReactNode[];
};

export default function BookFlipStage({ pages }: BookFlipStageProps) {
  const { pageIndex, direction, nextPage, prevPage, totalPages } = useBookNav();
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeVariants : flipVariants;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        nextPage();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prevPage();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextPage, prevPage]);

  return (
    <div className="relative flex-1 min-h-0 [perspective:1400px]" role="main">
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          key={pageIndex}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          aria-label={`Page ${pageIndex + 1} of ${pages.length}: ${PAGE_ORDER[pageIndex]}`}
          className="absolute inset-0 overflow-y-auto overflow-x-hidden bg-[var(--bg)] [transform-style:preserve-3d] [backface-visibility:hidden]"
          style={
            reduceMotion
              ? undefined
              : { transformOrigin: "left center", translateZ: 0 }
          }
        >
          {pages[pageIndex]}
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-30 flex justify-center px-4">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/[0.08] bg-black/70 px-2 py-1.5 font-ui text-[11px] text-[var(--muted)] shadow-lg backdrop-blur-md">
          <button
            type="button"
            aria-label="Previous page"
            onClick={prevPage}
            disabled={pageIndex <= 0}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 disabled:pointer-events-none disabled:opacity-25"
          >
            <FaChevronLeft className="h-3.5 w-3.5" aria-hidden />
          </button>
          <span className="min-w-[4.5rem] text-center tabular-nums">
            {pageIndex + 1} / {totalPages}
          </span>
          <button
            type="button"
            aria-label="Next page"
            onClick={nextPage}
            disabled={pageIndex >= totalPages - 1}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 disabled:pointer-events-none disabled:opacity-25"
          >
            <FaChevronRight className="h-3.5 w-3.5" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
