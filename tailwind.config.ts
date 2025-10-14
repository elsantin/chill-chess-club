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
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            // Base prose styles
            color: theme("colors.warmGray.200"),
            maxWidth: "none",

            // Headings
            h2: {
              color: theme("colors.warmGray.100"),
              fontFamily: "var(--font-playfair), serif",
              fontWeight: "700",
              fontSize: theme("fontSize.3xl"),
              marginTop: theme("spacing.12"),
              marginBottom: theme("spacing.6"),
              lineHeight: theme("lineHeight.tight"),
            },
            h3: {
              color: theme("colors.warmGray.100"),
              fontFamily: "var(--font-playfair), serif",
              fontWeight: "600",
              fontSize: theme("fontSize.2xl"),
              marginTop: theme("spacing.8"),
              marginBottom: theme("spacing.4"),
              lineHeight: theme("lineHeight.snug"),
            },

            // Paragraphs
            p: {
              color: theme("colors.warmGray.200"),
              lineHeight: theme("lineHeight.relaxed"),
              marginBottom: theme("spacing.4"),
            },

            // Lists
            ul: {
              color: theme("colors.warmGray.200"),
              listStyleType: "disc",
              paddingLeft: theme("spacing.6"),
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
            },
            ol: {
              color: theme("colors.warmGray.200"),
              listStyleType: "decimal",
              paddingLeft: theme("spacing.6"),
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
            },
            li: {
              color: theme("colors.warmGray.200"),
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.2"),
            },
            "ul > li": {
              paddingLeft: theme("spacing.2"),
            },
            "ol > li": {
              paddingLeft: theme("spacing.2"),
            },

            // Strong and emphasis
            strong: {
              color: theme("colors.warmGray.100"),
              fontWeight: "700",
            },
            em: {
              color: theme("colors.warmGray.200"),
              fontStyle: "italic",
            },

            // Blockquotes
            blockquote: {
              borderLeftColor: theme("colors.sunset.500"),
              borderLeftWidth: "4px",
              paddingLeft: theme("spacing.6"),
              paddingTop: theme("spacing.4"),
              paddingBottom: theme("spacing.4"),
              paddingRight: theme("spacing.6"),
              fontStyle: "italic",
              color: theme("colors.warmGray.200"),
              backgroundColor: theme("colors.warmGray.900"),
              borderRadius: theme("borderRadius.lg"),
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.6"),
              quotes: "none",
            },
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:last-of-type::after": {
              content: "none",
            },

            // Links
            a: {
              color: theme("colors.sunset.400"),
              textDecoration: "underline",
              fontWeight: "500",
              "&:hover": {
                color: theme("colors.sunset.300"),
              },
            },

            // Code (if present)
            code: {
              color: theme("colors.sunset.300"),
              backgroundColor: theme("colors.warmGray.900"),
              padding: theme("spacing.1"),
              borderRadius: theme("borderRadius.sm"),
              fontWeight: "500",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};

export default config;
