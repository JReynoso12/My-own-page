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
          DEFAULT: "#facc15",
          dark: "#eab308",
        },
      },
      fontFamily: {
        comic: ["var(--font-comic-display)", "Impact", "Arial Black", "sans-serif"],
        ui: ["var(--font-comic-body)", "Comic Neue", "cursive"],
      },
      boxShadow: {
        comic: "6px 6px 0 0 #7f1d1d",
        "comic-sm": "3px 3px 0 0 #7f1d1d",
      },
    },
  },
  plugins: [],
};

export default config;
