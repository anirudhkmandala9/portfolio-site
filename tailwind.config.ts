import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0e17",
          secondary: "#0f1520",
          tertiary: "#141c2b",
        },
        border: "#1e293b",
        terminal: {
          green: "#00ff88",
          "green-dim": "#00cc6a",
          amber: "#ffb800",
          "amber-dim": "#cc9300",
          red: "#ff4444",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
