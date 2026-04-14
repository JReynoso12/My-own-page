"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type MainScrollContextValue = {
  scrollEl: HTMLElement | null;
  setScrollEl: (el: HTMLElement | null) => void;
};

const MainScrollContext = createContext<MainScrollContextValue | null>(null);

export function MainScrollProvider({ children }: { children: ReactNode }) {
  const [scrollEl, setScrollElState] = useState<HTMLElement | null>(null);

  const setScrollEl = useCallback((el: HTMLElement | null) => {
    setScrollElState(el);
  }, []);

  const value = useMemo(
    () => ({ scrollEl, setScrollEl }),
    [scrollEl, setScrollEl]
  );

  return (
    <MainScrollContext.Provider value={value}>
      {children}
    </MainScrollContext.Provider>
  );
}

export function useMainScroll() {
  const ctx = useContext(MainScrollContext);
  if (!ctx) {
    throw new Error("useMainScroll must be used within MainScrollProvider");
  }
  return ctx;
}
