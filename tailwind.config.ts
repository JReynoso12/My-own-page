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
        // Anime-style neon palette
        anime: {
          pink: "#FF6B9D",
          purple: "#C084FC",
          cyan: "#22D3EE",
          amber: "#FBBF24",
          rose: "#FB7185",
          indigo: "#818CF8",
          mint: "#34D399",
          magenta: "#E879F9",
        },
        // Legacy neon colors (keeping for compatibility)
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
      fontFamily: {
        anime: ["var(--font-noto)", "'M PLUS Rounded 1c'", "sans-serif"],
        display: ["var(--font-orbitron)", "'Rajdhani'", "sans-serif"],
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(0, 122, 255, 0.35)",
        "neon-purple": "0 0 20px rgba(168, 85, 247, 0.35)",
        "neon-green": "0 0 20px rgba(16, 185, 129, 0.35)",
        "neon-blue-lg": "0 0 28px rgba(0, 122, 255, 0.4)",
        glass: "0 4px 24px rgba(0, 0, 0, 0.25)",
        // Anime glows
        "anime-pink": "0 0 25px rgba(255, 107, 157, 0.5)",
        "anime-purple": "0 0 25px rgba(192, 132, 252, 0.5)",
        "anime-cyan": "0 0 25px rgba(34, 211, 238, 0.5)",
      },
      animation: {
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 3s ease infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
