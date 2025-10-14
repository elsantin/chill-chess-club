/**
 * Design Tokens - Neumorphic Sunset UI System
 * Paleta de colores cálidos inspirada en atardeceres
 */

export const sunsetPalette = {
  // Sunset oranges - Color principal
  sunset: {
    50: "#fff7ed", // Lightest cream
    100: "#ffedd5", // Light peach
    200: "#fed7aa", // Soft peach
    300: "#fdba74", // Light orange
    400: "#fb923c", // Medium orange
    500: "#f97316", // Sunset orange (primary)
    600: "#ea580c", // Deep orange
    700: "#c2410c", // Darker orange
    800: "#9a3412", // Dark rust
    900: "#7c2d12", // Darkest rust
  },

  // Rose pinks - Color secundario
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e", // Primary rose
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
  },

  // Purple - Color de acento
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7", // Primary purple
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
  },

  // Amber gold - Acentos dorados
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b", // Accent gold
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },

  // Warm grays - Tonos neutros cálidos
  warmGray: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524", // Card background
    900: "#1c1917", // Main background
    950: "#0c0a09", // Darkest background
  },
};

/**
 * Sombras neumórficas para diferentes estados
 */
export const neumorphicShadows = {
  // Elementos elevados (raised)
  elevated: {
    sm: "2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.05)",
    md: "4px 4px 8px rgba(0, 0, 0, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.05)",
    lg: "8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.05)",
    xl: "12px 12px 24px rgba(0, 0, 0, 0.4), -12px -12px 24px rgba(255, 255, 255, 0.05)",
  },

  // Elementos presionados (inset)
  inset: {
    sm: "inset 2px 2px 4px rgba(0, 0, 0, 0.3), inset -2px -2px 4px rgba(255, 255, 255, 0.03)",
    md: "inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.03)",
    lg: "inset 6px 6px 12px rgba(0, 0, 0, 0.4), inset -6px -6px 12px rgba(255, 255, 255, 0.03)",
  },

  // Efectos de glow para elementos interactivos
  glow: {
    sunset: "0 0 20px rgba(249, 115, 22, 0.3)",
    sunsetStrong: "0 0 30px rgba(249, 115, 22, 0.5)",
    rose: "0 0 20px rgba(244, 63, 94, 0.3)",
    roseStrong: "0 0 30px rgba(244, 63, 94, 0.5)",
    purple: "0 0 20px rgba(168, 85, 247, 0.3)",
    purpleStrong: "0 0 30px rgba(168, 85, 247, 0.5)",
    amber: "0 0 20px rgba(245, 158, 11, 0.3)",
    amberStrong: "0 0 30px rgba(245, 158, 11, 0.5)",
  },
};

/**
 * Configuración de animaciones ASMR (suaves y relajantes)
 */
export const animations = {
  // Easing curves suaves
  easing: {
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)", // Ease in-out estándar
    smoothIn: "cubic-bezier(0.4, 0, 1, 1)", // Ease in
    smoothOut: "cubic-bezier(0, 0, 0.2, 1)", // Ease out
    butter: "cubic-bezier(0.25, 0.1, 0.25, 1)", // Extra suave
    silk: "cubic-bezier(0.33, 1, 0.68, 1)", // Bounce sutil
  },

  // Duraciones predefinidas
  duration: {
    instant: "100ms",
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
    slowest: "1000ms",
  },
};

/**
 * Sistema de espaciado
 */
export const spacing = {
  section: {
    mobile: "4rem", // 64px
    tablet: "6rem", // 96px
    desktop: "8rem", // 128px
  },
  container: {
    padding: {
      mobile: "1rem", // 16px
      tablet: "2rem", // 32px
      desktop: "4rem", // 64px
    },
    maxWidth: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  gap: {
    xs: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "3rem", // 48px
    "2xl": "4rem", // 64px
  },
};

/**
 * Border radius para consistencia
 */
export const borderRadius = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "32px",
  full: "9999px",
};

/**
 * Tipografía
 */
export const typography = {
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
    loose: "2",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

/**
 * Breakpoints responsive
 */
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
