import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF7",
        navy: { DEFAULT: "#1a1a2e", light: "#2d2d4a" },
        gold: { DEFAULT: "#C9A96E", light: "#F5EFE4", dark: "#A68B56" },
        accent: { DEFAULT: "#4F46E5", light: "#EEF2FF" },
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"DM Serif Display"', "Georgia", "serif"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
    },
  },
  plugins: [],
};
export default config;
