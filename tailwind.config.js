/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sunset: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        warmGray: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        primary: {
          DEFAULT: "#ec4899",
          dark: "#be185d",
          light: "#f9a8d4",
        },
        secondary: {
          DEFAULT: "#8b5cf6",
          dark: "#6d28d9",
          light: "#c4b5fd",
        },
        accent: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
        },
        sunsetlabs: {
          orange: "#FDAD1F",
          pink: "#C682B1",
          magenta: "#FE1784",
          blue: "#3E7FF1",
          dark: "#070C20",
        },
      },
      boxShadow: {
        "neumorphic-sm":
          "2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.05)",
        "neumorphic-md":
          "4px 4px 8px rgba(0, 0, 0, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.05)",
        "neumorphic-lg":
          "8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.05)",
        "neumorphic-xl":
          "12px 12px 24px rgba(0, 0, 0, 0.4), -12px -12px 24px rgba(255, 255, 255, 0.05)",
        "neumorphic-inset-sm":
          "inset 2px 2px 4px rgba(0, 0, 0, 0.3), inset -2px -2px 4px rgba(255, 255, 255, 0.03)",
        "neumorphic-inset-md":
          "inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.03)",
        "neumorphic-inset-lg":
          "inset 6px 6px 12px rgba(0, 0, 0, 0.4), inset -6px -6px 12px rgba(255, 255, 255, 0.03)",
        "glow-sunset": "0 0 20px rgba(249, 115, 22, 0.3)",
        "glow-sunset-strong": "0 0 30px rgba(249, 115, 22, 0.5)",
        "glow-rose": "0 0 20px rgba(244, 63, 94, 0.3)",
        "glow-rose-strong": "0 0 30px rgba(244, 63, 94, 0.5)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.3)",
        "glow-purple-strong": "0 0 30px rgba(168, 85, 247, 0.5)",
        "glow-amber": "0 0 20px rgba(245, 158, 11, 0.3)",
        "glow-amber-strong": "0 0 30px rgba(245, 158, 11, 0.5)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)",
        "gradient-sunset":
          "linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #ee5a6f 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
