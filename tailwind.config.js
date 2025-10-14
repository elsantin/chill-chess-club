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
        dark: {
          bg: "#0f172a",
          darker: "#020617",
          card: "#1e293b",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#cbd5e1",
        },
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
  plugins: [],
};
