"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { glassmorphic } from "@/lib/neumorphic-utils";

interface GlassmorphicHeaderProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
}

/**
 * GlassmorphicHeader - Header con efecto glassmorphism que cambia al hacer scroll
 *
 * @param children - Contenido del header
 * @param threshold - Píxeles de scroll antes de activar el efecto (default: 50)
 * @param className - Clases adicionales
 */
export function GlassmorphicHeader({
  children,
  threshold = 50,
  className,
}: GlassmorphicHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(28, 25, 23, 0.95)"
          : "rgba(28, 25, 23, 0.85)",
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        "backdrop-blur-lg",
        "border-b border-warmGray-800/50",
        isScrolled && "shadow-neumorphic-md",
        className
      )}
    >
      {children}
    </motion.header>
  );
}
