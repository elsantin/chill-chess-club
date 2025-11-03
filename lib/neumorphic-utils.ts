/**
 * Neumorphic Utilities
 * Helper functions para crear efectos neumórficos consistentes
 */

import { type ClassValue } from "clsx";
import { cn } from "./utils";

/**
 * Genera clases para un elemento neumórfico elevado (raised)
 * @param size - Tamaño de la sombra (sm, md, lg, xl)
 * @returns String de clases Tailwind
 */
export function neumorphicElevated(
  size: "sm" | "md" | "lg" | "xl" = "md"
): string {
  const baseClasses = "rounded-xl transition-all duration-300";

  const sizeClasses = {
    sm: "shadow-neumorphic-sm",
    md: "shadow-neumorphic-md",
    lg: "shadow-neumorphic-lg",
    xl: "shadow-neumorphic-xl",
  };

  return cn(baseClasses, sizeClasses[size]);
}

/**
 * Genera clases para un elemento neumórfico presionado (inset)
 * @param size - Tamaño de la sombra (sm, md, lg)
 * @returns String de clases Tailwind
 */
export function neumorphicInset(size: "sm" | "md" | "lg" = "md"): string {
  const baseClasses = "rounded-xl transition-all duration-300";

  const sizeClasses = {
    sm: "shadow-neumorphic-inset-sm",
    md: "shadow-neumorphic-inset-md",
    lg: "shadow-neumorphic-inset-lg",
  };

  return cn(baseClasses, sizeClasses[size]);
}

/**
 * Genera clases para efecto glassmorphism
 * @param blur - Intensidad del blur (sm, md, lg)
 * @returns String de clases Tailwind
 */
export function glassmorphic(blur: "sm" | "md" | "lg" = "md"): string {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  };

  return cn(
    blurClasses[blur],
    "bg-warmGray-900/95",
    "border border-warmGray-800/50",
    "rounded-xl"
  );
}

/**
 * Genera clases para gradientes sunset
 * @param direction - Dirección del gradiente
 * @param variant - Variante de colores
 * @returns String de clases Tailwind
 */
export function sunsetGradient(
  direction: "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" = "to-r",
  variant: "sunset" | "rose-purple" | "amber-rose" | "full" = "sunset"
): string {
  const variants = {
    sunset: `bg-gradient-${direction} from-sunset-500 to-sunset-700`,
    "rose-purple": `bg-gradient-${direction} from-rose-500 to-purple-500`,
    "amber-rose": `bg-gradient-${direction} from-amber-500 to-rose-500`,
    full: `bg-gradient-${direction} from-sunset-500 via-rose-500 to-purple-500`,
  };

  return variants[variant];
}

/**
 * Genera clases para hover con glow effect
 * @param color - Color del glow
 * @param strong - Si usar versión más intensa
 * @returns String de clases Tailwind
 */
export function glowOnHover(
  color: "sunset" | "rose" | "purple" | "amber" = "sunset",
  strong: boolean = false
): string {
  const suffix = strong ? "-strong" : "";
  const glowClasses = {
    sunset: `hover:shadow-glow-sunset${suffix}`,
    rose: `hover:shadow-glow-rose${suffix}`,
    purple: `hover:shadow-glow-purple${suffix}`,
    amber: `hover:shadow-glow-amber${suffix}`,
  };

  return cn("transition-shadow duration-300", glowClasses[color]);
}

/**
 * Genera clases para texto con gradiente sunset
 * @param variant - Variante del gradiente
 * @returns String de clases Tailwind
 */
export function gradientText(
  variant: "sunset" | "rose-purple" | "amber-rose" | "full" = "sunset"
): string {
  const variants = {
    sunset: "from-sunset-400 via-sunset-500 to-sunset-600",
    "rose-purple": "from-rose-400 via-rose-500 to-purple-500",
    "amber-rose": "from-amber-400 via-amber-500 to-rose-500",
    full: "from-sunset-400 via-rose-400 to-purple-400",
  };

  return cn(
    "bg-gradient-to-r",
    variants[variant],
    "bg-clip-text text-transparent"
  );
}

/**
 * Genera clases para botones neumórficos
 * @param variant - Estilo del botón
 * @param size - Tamaño del botón
 * @returns String de clases Tailwind
 */
export function neumorphicButton(
  variant: "primary" | "secondary" | "ghost" = "primary",
  size: "sm" | "md" | "lg" = "md"
): string {
  const baseClasses = cn(
    "rounded-lg font-semibold transition-all duration-300",
    "hover:scale-105 active:scale-95",
    "focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:ring-offset-2 focus:ring-offset-warmGray-900"
  );

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: cn(
      sunsetGradient("to-r", "full"),
      "text-white",
      glowOnHover("sunset"),
      neumorphicElevated("sm")
    ),
    secondary: cn(
      "bg-warmGray-800",
      "text-sunset-400",
      "border-2 border-sunset-500",
      glowOnHover("sunset"),
      neumorphicElevated("sm")
    ),
    ghost: cn("bg-transparent", "text-sunset-400", "hover:bg-warmGray-800/50"),
  };

  return cn(baseClasses, sizeClasses[size], variantClasses[variant]);
}

/**
 * Genera clases para cards neumórficas
 * @param elevated - Si usar efecto elevado o plano
 * @param interactive - Si la card es interactiva (hover effects)
 * @returns String de clases Tailwind
 */
export function neumorphicCard(
  elevated: boolean = true,
  interactive: boolean = false
): string {
  const baseClasses = cn("bg-warmGray-800", "rounded-xl", "overflow-hidden");

  const elevationClasses = elevated ? neumorphicElevated("md") : "";

  const interactiveClasses = interactive
    ? cn(
        "hover:scale-[1.02]",
        "hover:-translate-y-1",
        "transition-all duration-300",
        glowOnHover("sunset")
      )
    : "";

  return cn(baseClasses, elevationClasses, interactiveClasses);
}

/**
 * Genera clases para inputs neumórficos
 * @param hasError - Si el input tiene error
 * @returns String de clases Tailwind
 */
export function neumorphicInput(hasError: boolean = false): string {
  const baseClasses = cn(
    "w-full",
    "px-4 py-3",
    "bg-warmGray-900",
    "text-warmGray-100",
    "rounded-lg",
    neumorphicInset("md"),
    "transition-all duration-300",
    "focus:outline-none",
    "placeholder:text-warmGray-500"
  );

  const focusClasses = hasError
    ? "focus:shadow-glow-rose focus:border-rose-500"
    : "focus:shadow-glow-sunset focus:border-sunset-500";

  const borderClasses = hasError
    ? "border-2 border-rose-500"
    : "border border-warmGray-700";

  return cn(baseClasses, focusClasses, borderClasses);
}

/**
 * Genera clases para badges/pills neumórficos
 * @param color - Color del badge
 * @returns String de clases Tailwind
 */
export function neumorphicBadge(
  color: "sunset" | "rose" | "purple" | "amber" = "sunset"
): string {
  const baseClasses = cn(
    "inline-flex items-center",
    "px-3 py-1",
    "rounded-full",
    "text-sm font-semibold",
    neumorphicElevated("sm")
  );

  const colorClasses = {
    sunset: cn(sunsetGradient("to-r", "sunset"), "text-white"),
    rose: cn(sunsetGradient("to-r", "rose-purple"), "text-white"),
    purple: "bg-purple-500 text-white",
    amber: "bg-amber-500 text-warmGray-900",
  };

  return cn(baseClasses, colorClasses[color]);
}

/**
 * Genera clases para overlays con gradiente
 * @param opacity - Opacidad del overlay
 * @returns String de clases Tailwind
 */
export function sunsetOverlay(
  opacity: "light" | "medium" | "dark" = "medium"
): string {
  const opacityClasses = {
    light:
      "bg-gradient-to-t from-warmGray-900/60 via-warmGray-900/30 to-transparent",
    medium:
      "bg-gradient-to-t from-warmGray-900/80 via-warmGray-900/50 to-transparent",
    dark: "bg-gradient-to-t from-warmGray-900/95 via-warmGray-900/70 to-warmGray-900/30",
  };

  return cn("absolute inset-0", opacityClasses[opacity]);
}

/**
 * Genera clases para animaciones suaves (ASMR)
 * @param animation - Tipo de animación
 * @returns String de clases Tailwind
 */
export function smoothAnimation(
  animation: "fade-in" | "slide-up" | "slide-down" | "float" = "fade-in"
): string {
  const animations = {
    "fade-in": "animate-fade-in",
    "slide-up": "animate-slide-up",
    "slide-down": "animate-slide-down",
    float: "animate-float",
  };

  return animations[animation];
}
