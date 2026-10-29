import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Black & Warm Champagne Gold brand palette (matching reference)
        primary: {
          DEFAULT: "#C5A880", // Warm Champagne Gold
          hover: "#B89355",
          light: "#F7F3EC",
        },
        secondary: "#8E9AA8", // Sleek Architectural Steel wire accent
        canvas: "#080B11", // Deep Obsidian Black Canvas
        surface: "#111622", // Refined Card Surface
        cta: {
          DEFAULT: "#C9A86A", // Warm Luxury Gold CTA (as in ref screenshot)
          hover: "#B89355",
          text: "#0B0F17",
        },

        // Theme and compatibility tokens
        ink: "#FFFFFF",
        body: "#94A3B8",
        border: "#1E2738",
        paper: "#111622",
        "dark-bg": "#080B11",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "system-ui", "-apple-system", "sans-serif"],
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(20, 35, 31, 0.04), 0 4px 12px rgba(20, 35, 31, 0.03)",
        elevated: "0 6px 24px -4px rgba(20, 35, 31, 0.08)",
        raised: "0 2px 8px -2px rgba(20, 35, 31, 0.06), 0 16px 36px -8px rgba(20, 35, 31, 0.12)",
      },
      maxWidth: {
        page: "1240px",
        prose: "68ch",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration, 40s) linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap, 6px)))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
