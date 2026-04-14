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
          DEFAULT: "#e50914",
          dark: "#b20710",
        },
      },
      fontFamily: {
        comic: ["Inter", "system-ui", "sans-serif"],
        ui: ["Inter", "system-ui", "sans-serif"],
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
