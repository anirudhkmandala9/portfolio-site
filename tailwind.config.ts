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
          DEFAULT: "#050a0e",
          card: "#0a1018",
          hover: "#0d1520",
        },
        line: {
          DEFAULT: "#1a2332",
          hover: "#243044",
        },
        t: {
          green: "#00ff88",
          amber: "#ffb800",
          red: "#ff4444",
        },
        txt: {
          DEFAULT: "#e2e8f0",
          secondary: "#8892a4",
          muted: "#4a5568",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
