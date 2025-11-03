"use client";

import { useEffect, useRef } from "react";

/**
 * TwinklingStars - Animación minimalista de estrellas titilando
 *
 * Pequeños puntos de luz que aparecen y desaparecen suavemente,
 * como estrellas encendiéndose en una constelación.
 * Versión simplificada sin interacción con el mouse.
 */
export function TwinklingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Star configuration
    interface Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      fadeSpeed: number;
      fadeDirection: number;
      color: { r: number; g: number; b: number };
      delay: number;
      currentDelay: number;
      maxOpacity: number;
    }

    const colors = [
      { r: 251, g: 146, b: 60 }, // sunset-400
      { r: 252, g: 165, b: 165 }, // rose-300
      { r: 216, g: 180, b: 254 }, // purple-300
      { r: 253, g: 224, b: 71 }, // amber-300
    ];

    // Create stars distributed across the screen
    const starCount = 40;
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.8,
        opacity: 0,
        fadeSpeed: Math.random() * 0.008 + 0.003,
        fadeDirection: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 200,
        currentDelay: 0,
        maxOpacity: Math.random() * 0.3 + 0.3,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Handle delay before starting animation
        if (star.currentDelay < star.delay) {
          star.currentDelay++;
          return;
        }

        // Fade in/out
        star.opacity += star.fadeSpeed * star.fadeDirection;

        // Reverse direction at limits
        if (star.opacity >= star.maxOpacity) {
          star.fadeDirection = -1;
        } else if (star.opacity <= 0) {
          star.fadeDirection = 1;
          // Add new random delay when fully faded
          star.delay = Math.random() * 100;
          star.currentDelay = 0;
        }

        // Clamp opacity
        star.opacity = Math.max(0, Math.min(star.maxOpacity, star.opacity));

        // Draw star with glow
        if (star.opacity > 0) {
          // Outer glow
          const gradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.size * 3
          );
          gradient.addColorStop(
            0,
            `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${
              star.opacity * 0.8
            })`
          );
          gradient.addColorStop(
            0.5,
            `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${
              star.opacity * 0.2
            })`
          );
          gradient.addColorStop(
            1,
            `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0)`
          );

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // Core star
          ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${
            star.color.b
          }, ${star.opacity * 0.9})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    // Accessibility: Decorative canvas, hidden from screen readers and not focusable
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
