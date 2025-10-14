import type { Config } from "tailwindcss";
import { sunsetPalette } from "./lib/design-tokens";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sunset: sunsetPalette.sunset,
        rose: sunsetPalette.rose,
        purple: sunsetPalette.purple,
        amber: sunsetPalette.amber,
        warmGray: sunsetPalette.warmGray,
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
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
      animation: {
        "fade-in": "fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up": "slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-down": "slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "glow-pulse": "glowPulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        float: "float 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
