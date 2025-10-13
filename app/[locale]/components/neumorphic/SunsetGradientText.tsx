import { cn } from "@/lib/utils";
import { gradientText } from "@/lib/neumorphic-utils";

interface SunsetGradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "sunset" | "rose-purple" | "amber-rose" | "full";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

/**
 * SunsetGradientText - Componente para texto con gradiente sunset
 *
 * @param children - Texto a mostrar
 * @param className - Clases adicionales
 * @param variant - Variante del gradiente (sunset, rose-purple, amber-rose, full)
 * @param as - Elemento HTML a renderizar (default: span)
 */
export function SunsetGradientText({
  children,
  className,
  variant = "sunset",
  as: Component = "span",
}: SunsetGradientTextProps) {
  return (
    <Component
      className={cn(gradientText(variant), className)}
      style={{
        textShadow: `
          0 0 15px rgba(249, 115, 22, 0.4),
          0 0 30px rgba(251, 146, 60, 0.25),
          0 0 45px rgba(253, 186, 116, 0.15),
          0 2px 4px rgba(0, 0, 0, 0.6),
          0 4px 8px rgba(0, 0, 0, 0.4)
        `,
      }}
    >
      {children}
    </Component>
  );
}
