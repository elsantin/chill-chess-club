"use client";

import { motion } from "framer-motion";

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function AnimatedTitle({
  children,
  className = "",
  delay = 0,
  as: Component = "h2",
}: AnimatedTitleProps) {
  const MotionComponent = motion[Component];

  return (
    <MotionComponent
      className={`${className} overflow-visible`}
      animate={{
        opacity: [0.92, 1, 0.92],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{
        background:
          "linear-gradient(135deg, #fafaf9 0%, #fde68a 50%, #fafaf9 100%)",
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        paddingTop: "0.15em",
        paddingBottom: "0.35em",
        lineHeight: "1.3",
      }}
    >
      {children}
    </MotionComponent>
  );
}
