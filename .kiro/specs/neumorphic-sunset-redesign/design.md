# Design Document - Neumorphic Sunset UI Redesign

## Overview

Este documento describe el diseño técnico completo para transformar el sitio web de Chill Chess Club en una experiencia visual premium usando neumorfismo con paleta "Chill Sunset". El rediseño mantiene toda la funcionalidad existente mientras eleva significativamente la calidad visual y la experiencia de usuario.

### Objetivos del Diseño

1. **Estética Neumórfica:** Implementar sombras suaves, superficies elevadas y profundidad visual
2. **Paleta Sunset:** Colores cálidos y relajantes (naranjas, rosas, púrpuras, dorados)
3. **Experiencia ASMR:** Animaciones ultra-suaves, transiciones lentas, sin movimientos bruscos
4. **Profesionalismo Sleek:** Minimalista, espaciado generoso, tipografía refinada
5. **Rendimiento:** Mantener velocidad de carga y fluidez a pesar de efectos visuales

---

## Architecture

### Sistema de Diseño en Capas

```
┌─────────────────────────────────────────────────────────┐
│                    Design System Layer                   │
│  - Tokens (colors, spacing, shadows, radii)             │
│  - Neumorphic utilities (mixins, classes)               │
│  - Animation presets (easing, durations)                │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                  Component Library Layer                 │
│  - shadcn/ui base components                            │
│  - Custom neumorphic wrappers                           │
│  - Composed components (cards, forms, etc)              │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   Application Layer                      │
│  - Page sections (Hero, About, Courses, etc)            │
│  - Layout components (Header, Footer)                   │
│  - Utility components (ScrollIndicator, etc)            │
└─────────────────────────────────────────────────────────┘
```

### Estructura de Archivos Propuesta

```
app/
├── [locale]/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── neumorphic/            # Custom neumorphic wrappers
│   │   │   ├── NeumorphicCard.tsx
│   │   │   ├── NeumorphicButton.tsx
│   │   │   ├── GlassmorphicHeader.tsx
│   │   │   └── SunsetGradient.tsx
│   │   ├── Header.tsx             # Rediseñado
│   │   ├── Hero.tsx               # Rediseñado
│   │   ├── About.tsx              # Rediseñado
│   │   ├── Courses.tsx            # Rediseñado
│   │   ├── Method.tsx             # Rediseñado
│   │   ├── Blog.tsx               # Rediseñado
│   │   ├── FAQ.tsx                # Rediseñado
│   │   ├── Contact.tsx            # Rediseñado
│   │   └── Footer.tsx             # Nuevo (con agencia)
│   └── ...
├── styles/
│   ├── neumorphic.css            # Utilidades neumórficas
│   └── animations.css            # Animaciones ASMR
└── ...

lib/
├── design-tokens.ts              # Tokens del sistema de diseño
├── neumorphic-utils.ts           # Utilidades para efectos
└── ...
```

---

## Components and Interfaces

### 1. Design Tokens System

**Archivo:** `lib/design-tokens.ts`

```typescript
export const sunsetPalette = {
  // Base colors
  sunset: {
    50: "#fff7ed", // Lightest cream
    100: "#ffedd5", // Light peach
    200: "#fed7aa", // Soft peach
    300: "#fdba74", // Light orange
    400: "#fb923c", // Medium orange
    500: "#f97316", // Sunset orange
    600: "#ea580c", // Deep orange
    700: "#c2410c", // Darker orange
    800: "#9a3412", // Dark rust
    900: "#7c2d12", // Darkest rust
  },
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
  // Neutral warm tones
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

export const neumorphicShadows = {
  // Elevated (raised) elements
  elevated: {
    sm: `
      2px 2px 4px rgba(0, 0, 0, 0.3),
      -2px -2px 4px rgba(255, 255, 255, 0.05)
    `,
    md: `
      4px 4px 8px rgba(0, 0, 0, 0.3),
      -4px -4px 8px rgba(255, 255, 255, 0.05)
    `,
    lg: `
      8px 8px 16px rgba(0, 0, 0, 0.4),
      -8px -8px 16px rgba(255, 255, 255, 0.05)
    `,
  },
  // Pressed (inset) elements
  inset: {
    sm: `
      inset 2px 2px 4px rgba(0, 0, 0, 0.3),
      inset -2px -2px 4px rgba(255, 255, 255, 0.03)
    `,
    md: `
      inset 4px 4px 8px rgba(0, 0, 0, 0.3),
      inset -4px -4px 8px rgba(255, 255, 255, 0.03)
    `,
  },
  // Glow effects for interactive elements
  glow: {
    sunset: `0 0 20px rgba(249, 115, 22, 0.3)`,
    rose: `0 0 20px rgba(244, 63, 94, 0.3)`,
    purple: `0 0 20px rgba(168, 85, 247, 0.3)`,
    amber: `0 0 20px rgba(245, 158, 11, 0.3)`,
  },
};

export const animations = {
  // ASMR-friendly easing
  easing: {
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    smoothIn: "cubic-bezier(0.4, 0, 1, 1)",
    smoothOut: "cubic-bezier(0, 0, 0.2, 1)",
    butter: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  },
  // Duration presets
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
  },
};

export const spacing = {
  section: {
    mobile: "4rem", // 64px
    tablet: "6rem", // 96px
    desktop: "8rem", // 128px
  },
  container: {
    padding: {
      mobile: "1rem",
      tablet: "2rem",
      desktop: "4rem",
    },
  },
};

export const borderRadius = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "32px",
  full: "9999px",
};
```

### 2. Neumorphic Utilities

**Archivo:** `lib/neumorphic-utils.ts`

```typescript
import { type ClassValue } from "clsx";
import { cn } from "./utils";

/**
 * Genera clases para un elemento neumórfico elevado
 */
export function neumorphicElevated(size: "sm" | "md" | "lg" = "md"): string {
  const baseClasses = "rounded-xl transition-all duration-300";

  const sizeClasses = {
    sm: "shadow-[2px_2px_4px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(255,255,255,0.05)]",
    md: "shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]",
    lg: "shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]",
  };

  return cn(baseClasses, sizeClasses[size]);
}

/**
 * Genera clases para un elemento neumórfico presionado (inset)
 */
export function neumorphicInset(size: "sm" | "md" = "md"): string {
  const baseClasses = "rounded-xl transition-all duration-300";

  const sizeClasses = {
    sm: "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.03)]",
    md: "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.03)]",
  };

  return cn(baseClasses, sizeClasses[size]);
}

/**
 * Genera clases para efecto glassmorphism
 */
export function glassmorphic(blur: "sm" | "md" | "lg" = "md"): string {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  };

  return cn(
    blurClasses[blur],
    "bg-warmGray-900/80",
    "border border-white/10",
    "rounded-xl"
  );
}

/**
 * Genera clases para gradientes sunset
 */
export function sunsetGradient(
  direction: "to-r" | "to-br" | "to-b" = "to-r"
): string {
  return `bg-gradient-${direction} from-sunset-500 via-rose-500 to-purple-500`;
}

/**
 * Genera clases para hover con glow
 */
export function glowOnHover(
  color: "sunset" | "rose" | "purple" | "amber" = "sunset"
): string {
  const glowClasses = {
    sunset: "hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    rose: "hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]",
    purple: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    amber: "hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
  };

  return cn("transition-shadow duration-300", glowClasses[color]);
}
```

### 3. Componente Base: NeumorphicCard

**Archivo:** `app/[locale]/components/neumorphic/NeumorphicCard.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { neumorphicElevated } from "@/lib/neumorphic-utils";

interface NeumorphicCardProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

export function NeumorphicCard({
  children,
  className,
  size = "md",
  hover = true,
  gradient = false,
  onClick,
}: NeumorphicCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        neumorphicElevated(size),
        "bg-warmGray-800",
        gradient && "bg-gradient-to-br from-warmGray-800 to-warmGray-900",
        "overflow-hidden",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
```

### 4. Componente: GlassmorphicHeader

**Archivo:** `app/[locale]/components/neumorphic/GlassmorphicHeader.tsx`

```typescript
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { glassmorphic } from "@/lib/neumorphic-utils";

interface GlassmorphicHeaderProps {
  children: React.ReactNode;
  threshold?: number;
}

export function GlassmorphicHeader({
  children,
  threshold = 50,
}: GlassmorphicHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(28, 25, 23, 0.8)"
          : "rgba(28, 25, 23, 0.3)",
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        isScrolled && glassmorphic("md"),
        !isScrolled && "backdrop-blur-sm"
      )}
    >
      {children}
    </motion.header>
  );
}
```

### 5. Componente: SunsetGradientText

**Archivo:** `app/[locale]/components/neumorphic/SunsetGradientText.tsx`

```typescript
import { cn } from "@/lib/utils";

interface SunsetGradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "sunset" | "rose-purple" | "amber-rose";
}

export function SunsetGradientText({
  children,
  className,
  variant = "sunset",
}: SunsetGradientTextProps) {
  const gradients = {
    sunset: "from-sunset-400 via-rose-400 to-purple-400",
    "rose-purple": "from-rose-400 to-purple-500",
    "amber-rose": "from-amber-400 to-rose-500",
  };

  return (
    <span
      className={cn(
        "bg-gradient-to-r",
        gradients[variant],
        "bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
```

---

## Data Models

### Theme Configuration

```typescript
// types/theme.ts

export interface NeumorphicTheme {
  colors: {
    primary: ColorScale;
    secondary: ColorScale;
    accent: ColorScale;
    neutral: ColorScale;
  };
  shadows: {
    elevated: ShadowScale;
    inset: ShadowScale;
    glow: GlowScale;
  };
  animations: {
    easing: EasingPresets;
    duration: DurationPresets;
  };
  spacing: SpacingScale;
  borderRadius: RadiusScale;
}

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950?: string;
}

export interface ShadowScale {
  sm: string;
  md: string;
  lg: string;
  xl?: string;
}

export interface GlowScale {
  sunset: string;
  rose: string;
  purple: string;
  amber: string;
}

export interface EasingPresets {
  smooth: string;
  smoothIn: string;
  smoothOut: string;
  butter: string;
}

export interface DurationPresets {
  fast: string;
  normal: string;
  slow: string;
  slower: string;
}

export interface SpacingScale {
  section: ResponsiveValue;
  container: {
    padding: ResponsiveValue;
  };
}

export interface ResponsiveValue {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface RadiusScale {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  full: string;
}
```

---

## Error Handling

### Graceful Degradation

1. **Animaciones:** Si `prefers-reduced-motion` está activo, deshabilitar todas las animaciones
2. **Efectos visuales:** Si el dispositivo tiene GPU limitada, reducir complejidad de sombras
3. **Imágenes:** Usar blur-up placeholders con fallback a color sólido
4. **Fuentes:** Usar system fonts como fallback si Google Fonts falla

```typescript
// lib/feature-detection.ts

export function supportsBackdropFilter(): boolean {
  return CSS.supports("backdrop-filter", "blur(10px)");
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function hasGPUAcceleration(): boolean {
  const canvas = document.createElement("canvas");
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  return !!gl;
}

// Uso en componentes
export function getAnimationConfig() {
  if (prefersReducedMotion()) {
    return {
      initial: {},
      animate: {},
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  };
}
```

---

## Testing Strategy

### Visual Regression Testing

1. **Chromatic:** Capturar screenshots de cada componente en diferentes estados
2. **Percy:** Testing visual en múltiples navegadores y viewports
3. **Manual QA:** Verificar efectos neumórficos en dispositivos reales

### Performance Testing

1. **Lighthouse:** Mantener scores > 90 en todas las métricas
2. **WebPageTest:** Verificar tiempos de carga en conexiones lentas
3. **Chrome DevTools:** Profiling de animaciones (mantener 60fps)

### Accessibility Testing

1. **axe DevTools:** Verificar contraste y estructura semántica
2. **NVDA/JAWS:** Testing con screen readers
3. **Keyboard Navigation:** Verificar todos los flujos sin mouse

### Cross-browser Testing

1. **Chrome/Edge:** Navegadores principales (Chromium)
2. **Firefox:** Verificar compatibilidad de efectos CSS
3. **Safari:** Testing en iOS y macOS
4. **Mobile:** Testing en dispositivos Android e iOS reales

---

## Implementation Phases

### Phase 1: Foundation (Días 1-2)

- Instalar y configurar shadcn/ui
- Crear sistema de design tokens
- Implementar utilidades neumórficas
- Actualizar Tailwind config con paleta Sunset

### Phase 2: Core Components (Días 3-4)

- Crear componentes neumórficos base (Card, Button, Input)
- Implementar GlassmorphicHeader
- Rediseñar Hero section
- Rediseñar Header/Navigation

### Phase 3: Content Sections (Días 5-6)

- Rediseñar About section
- Rediseñar Courses section con neumorphic cards
- Rediseñar Method section
- Rediseñar Blog section

### Phase 4: Interactive Components (Día 7)

- Rediseñar FAQ con Accordion de shadcn
- Rediseñar Contact form con validación visual mejorada
- Implementar micro-interacciones

### Phase 5: Footer & Polish (Día 8)

- Crear Footer con sección de agencia
- Optimizar animaciones y transiciones
- Testing de accesibilidad
- Performance optimization

### Phase 6: Testing & Refinement (Días 9-10)

- Visual regression testing
- Cross-browser testing
- Mobile testing
- Ajustes finales basados en feedback

---

## Performance Considerations

### CSS Optimization

```css
/* Usar will-change solo cuando sea necesario */
.animated-element {
  will-change: transform, opacity;
}

/* Remover will-change después de la animación */
.animated-element.animation-complete {
  will-change: auto;
}

/* Usar transform en lugar de top/left para animaciones */
.smooth-move {
  transform: translateY(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Optimizar sombras complejas */
.neumorphic-optimized {
  /* Usar una sola sombra cuando sea posible */
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
}
```

### JavaScript Optimization

```typescript
// Lazy load componentes pesados
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <NeumorphicSkeleton />,
  ssr: false,
});

// Debounce scroll handlers
const handleScroll = useMemo(
  () =>
    debounce(() => {
      // Scroll logic
    }, 16), // ~60fps
  []
);

// Usar IntersectionObserver para animaciones
const { ref, inView } = useInView({
  threshold: 0.1,
  triggerOnce: true,
});
```

---

## Migration Strategy

### Componente por Componente

1. **Crear versión nueva** del componente con sufijo `-v2`
2. **Testear en aislamiento** antes de integrar
3. **Reemplazar gradualmente** en la página principal
4. **Mantener versión anterior** hasta confirmar estabilidad
5. **Limpiar código legacy** una vez completada la migración

### Feature Flags (Opcional)

```typescript
// lib/feature-flags.ts
export const features = {
  neumorphicDesign: process.env.NEXT_PUBLIC_ENABLE_NEUMORPHIC === "true",
};

// Uso en componentes
import { features } from "@/lib/feature-flags";

export default function Hero() {
  return features.neumorphicDesign ? <HeroV2 /> : <HeroV1 />;
}
```

---

## Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";
import { sunsetPalette } from "./lib/design-tokens";

const config: Config = {
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
      },
      boxShadow: {
        "neumorphic-sm":
          "2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.05)",
        "neumorphic-md":
          "4px 4px 8px rgba(0, 0, 0, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.05)",
        "neumorphic-lg":
          "8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.05)",
        "neumorphic-inset-sm":
          "inset 2px 2px 4px rgba(0, 0, 0, 0.3), inset -2px -2px 4px rgba(255, 255, 255, 0.03)",
        "neumorphic-inset-md":
          "inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.03)",
        "glow-sunset": "0 0 20px rgba(249, 115, 22, 0.3)",
        "glow-rose": "0 0 20px rgba(244, 63, 94, 0.3)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.3)",
        "glow-amber": "0 0 20px rgba(245, 158, 11, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
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
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)" },
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Conclusion

Este diseño proporciona una base sólida para transformar el sitio web de Chill Chess Club en una experiencia visual premium. La arquitectura en capas permite implementación gradual, testing exhaustivo y fácil mantenimiento. El sistema de design tokens asegura consistencia visual en todo el sitio, mientras que las utilidades neumórficas simplifican la creación de nuevos componentes.

La paleta "Chill Sunset" combinada con efectos neumórficos crea una experiencia única que refleja perfectamente la filosofía relajada del instructor mientras mantiene profesionalismo y modernidad.
