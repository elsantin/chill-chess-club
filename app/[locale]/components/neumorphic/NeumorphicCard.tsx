"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { neumorphicCard } from "@/lib/neumorphic-utils";

interface NeumorphicCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  elevated?: boolean;
  interactive?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

/**
 * NeumorphicCard - Componente base para cards con efecto neumórfico
 *
 * @param children - Contenido de la card
 * @param className - Clases adicionales
 * @param size - Tamaño de la elevación (sm, md, lg)
 * @param elevated - Si usar efecto elevado (default: true)
 * @param interactive - Si la card es interactiva con hover effects (default: true)
 * @param gradient - Si aplicar gradiente de fondo (default: false)
 * @param onClick - Handler para clicks
 */
export function NeumorphicCard({
  children,
  className,
  size = "md",
  elevated = true,
  interactive = true,
  gradient = false,
  onClick,
  ...motionProps
}: NeumorphicCardProps) {
  const isClickable = !!onClick;

  return (
    <motion.div
      whileHover={
        interactive
          ? {
              scale: 1.02,
              y: -4,
            }
          : undefined
      }
      whileTap={
        isClickable
          ? {
              scale: 0.98,
            }
          : undefined
      }
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(
        neumorphicCard(elevated, interactive),
        gradient && "bg-gradient-to-br from-warmGray-800 to-warmGray-900",
        isClickable && "cursor-pointer",
        className
      )}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
