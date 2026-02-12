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
        background: {
          dark: "#0f1729",
          darker: "#1a2a4b",
        },
        neon: {
          blue: "#007AFF",
          purple: "#A855F7",
          green: "#10B981",
        },
        "neon-blue": "#007AFF",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "text-secondary": "#A0B0C0",
        "text-muted": "#C0D0E0",
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(0, 122, 255, 0.35)",
        "neon-purple": "0 0 20px rgba(168, 85, 247, 0.35)",
        "neon-green": "0 0 20px rgba(16, 185, 129, 0.35)",
        "neon-blue-lg": "0 0 28px rgba(0, 122, 255, 0.4)",
        glass: "0 4px 24px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
