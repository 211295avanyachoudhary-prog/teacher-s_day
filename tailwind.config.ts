import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F3EBDA",
        ivory: "#FBF7EE",
        espresso: "#3A2A1E",
        charcoal: "#211B16",
        gold: "#B7913F",
        goldsoft: "#D9C08A",
        ink: "#2A211A",
        rose: "#B67A6B",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        serif2: ["var(--font-serif2)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      backgroundImage: {
        paper:
          "radial-gradient(circle at 20% 20%, rgba(183,145,63,0.06), transparent 40%), radial-gradient(circle at 80% 60%, rgba(183,145,63,0.05), transparent 45%)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        drift: {
          "0%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-14px) translateX(6px)" },
          "100%": { transform: "translateY(0px) translateX(0px)" },
        },
      },
      animation: {
        flicker: "flicker 3.5s ease-in-out infinite",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
