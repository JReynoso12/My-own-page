import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#dc2626",
          dark: "#991b1b",
        },
      },
      fontFamily: {
        comic: ["var(--font-display)", "Bebas Neue", "sans-serif"],
        ui: ["var(--font-ui)", "Oswald", "sans-serif"],
        serif: ["var(--font-serif)", "Crimson Text", "Georgia", "serif"],
      },
      boxShadow: {
        comic: "0 4px 24px rgba(0,0,0,0.45)",
        "comic-sm": "0 2px 12px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
