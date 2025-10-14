import { cn } from "@/lib/utils";

interface SunsetGradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "sunset" | "rose-purple" | "amber-rose" | "full";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

/**
 * SunsetGradientText - Componente para texto con gradiente sunset y resplandor
 *
 * Usa una técnica de texto duplicado:
 * - Capa inferior: texto con color sólido y sombras para el resplandor
 * - Capa superior: texto con gradiente transparente para el efecto visual
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
  const gradients = {
    sunset: "from-sunset-400 via-sunset-500 to-sunset-600",
    "rose-purple": "from-rose-400 via-rose-500 to-purple-500",
    "amber-rose": "from-amber-400 via-amber-500 to-rose-500",
    full: "from-sunset-400 via-rose-400 to-purple-400",
  };

  return (
    <Component className={cn("relative inline-block", className)}>
      {/* Capa de sombra/resplandor - texto con color sólido */}
      <span
        className="absolute inset-0"
        style={{
          color: "#fb923c", // sunset-400
          textShadow: `
            0 0 40px rgba(251, 146, 60, 0.4),
            0 0 80px rgba(251, 146, 60, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.8),
            0 4px 8px rgba(0, 0, 0, 0.6)
          `,
        }}
        aria-hidden="true"
      >
        {children}
      </span>

      {/* Capa de gradiente - texto transparente con gradiente */}
      <span
        className={cn(
          "relative bg-gradient-to-r bg-clip-text text-transparent",
          gradients[variant]
        )}
      >
        {children}
      </span>
    </Component>
  );
}
