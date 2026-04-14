"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const PAGE_ORDER = [
  "hero",
  "work",
  "skills",
  "experience",
  "contact",
] as const;

export type PageId = (typeof PAGE_ORDER)[number];

type BookNavContextValue = {
  pageIndex: number;
  pageId: PageId;
  direction: number;
  totalPages: number;
  goToPage: (id: string) => void;
  nextPage: () => void;
  prevPage: () => void;
};

const BookNavContext = createContext<BookNavContextValue | null>(null);

export function BookNavigationProvider({ children }: { children: ReactNode }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToIndex = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(PAGE_ORDER.length - 1, next));
      if (clamped === pageIndex) return;
      setDirection(clamped > pageIndex ? 1 : -1);
      setPageIndex(clamped);
    },
    [pageIndex]
  );

  const goToPage = useCallback(
    (id: string) => {
      const i = PAGE_ORDER.indexOf(id as PageId);
      if (i >= 0) goToIndex(i);
    },
    [goToIndex]
  );

  const nextPage = useCallback(() => {
    goToIndex(pageIndex + 1);
  }, [pageIndex, goToIndex]);

  const prevPage = useCallback(() => {
    goToIndex(pageIndex - 1);
  }, [pageIndex, goToIndex]);

  const value = useMemo(
    () => ({
      pageIndex,
      pageId: PAGE_ORDER[pageIndex],
      direction,
      totalPages: PAGE_ORDER.length,
      goToPage,
      nextPage,
      prevPage,
    }),
    [pageIndex, direction, goToPage, nextPage, prevPage]
  );

  return (
    <BookNavContext.Provider value={value}>{children}</BookNavContext.Provider>
  );
}

export function useBookNav() {
  const ctx = useContext(BookNavContext);
  if (!ctx) {
    throw new Error("useBookNav must be used within BookNavigationProvider");
  }
  return ctx;
}
