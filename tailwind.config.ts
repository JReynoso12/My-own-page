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
          dark: "#0A0E27",
          darker: "#1A1F3A",
        },
        neon: {
          blue: "#00D9FF",
          purple: "#A855F7",
          green: "#10B981",
        },
        "neon-blue": "#00D9FF",
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 217, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        'neon-green': '0 0 20px rgba(16, 185, 129, 0.5)',
        'neon-blue-lg': '0 0 30px rgba(0, 217, 255, 0.7)',
      },
    },
  },
  plugins: [],
};
export default config;
