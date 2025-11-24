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
        primary: "#000000",
        accent: "#C4A254",
        bg: "#FFFFFF",
        soft: "#F7F7F7",
        line: "#EDEDED",
        gold: {
          50: "#fef9e7",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#C4A254",
          600: "#b8944a",
          700: "#9a7a3e",
          800: "#7c6032",
          900: "#5e4626",
        },
        premium: {
          black: "#000000",
          white: "#FFFFFF",
          gold: "#C4A254",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        button: "10px",
        card: "12px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.05)",
        soft: "0 2px 10px rgba(0,0,0,0.03)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

