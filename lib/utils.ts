import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Image placeholders with exact dimensions
 * TODO: Replace these with actual images in /public/images/
 */
export const imagePlaceholders = {
  logo: {
    src: "/images/logo.webp",
    placeholder:
      "https://placehold.co/200x60/ec4899/ffffff?text=Chill+Chess+Club",
    alt: "Logo de Chill Chess Club: Siluetas de piezas de ajedrez con sol poniente",
    width: 200,
    height: 60,
  },
  hero: {
    src: "/images/hero.webp",
    placeholder:
      "https://placehold.co/1920x1080/0f172a/ffffff?text=Hero+Background",
    alt: "Fondo hero - Ajedrez",
    width: 1920,
    height: 1080,
  },
  profile: {
    src: "/images/santiago-profile.webp",
    placeholder:
      "https://placehold.co/600x800/1e293b/ffffff?text=Santiago+Profile",
    alt: "Santiago Narváez, instructor de Chill Chess Club, jugando ajedrez en la playa",
    width: 600,
    height: 800,
  },
  beginnerCourse: {
    src: "/images/beginner-course.webp",
    placeholder:
      "https://placehold.co/800x600/ec4899/ffffff?text=Beginner+Course",
    alt: "Peón derribando al rey, representando el curso de principiantes",
    width: 800,
    height: 600,
  },
  intermediateCourse: {
    src: "/images/intermediate-course.webp",
    placeholder:
      "https://placehold.co/800x600/8b5cf6/ffffff?text=Intermediate+Course",
    alt: "Caballo de ajedrez con explosión de colores, simbolizando estrategia dinámica",
    width: 800,
    height: 600,
  },
  blog: {
    echoesFromTheBoard: {
      src: "/images/blog-1-echoes-from-the-board.webp",
      placeholder:
        "https://placehold.co/800x600/f59e0b/ffffff?text=Echoes+from+the+Board",
      alt: "Echoes from the Board - Chess blog article",
      width: 800,
      height: 600,
    },
    rediscoverVibrantEssence: {
      src: "/images/blog-2-rediscover-vibrant-essence.webp",
      placeholder:
        "https://placehold.co/800x600/ec4899/ffffff?text=Rediscover+Vibrant+Essence",
      alt: "Rediscover Vibrant Essence - Chess blog article",
      width: 800,
      height: 600,
    },
    fiveStepsToOnlineChess: {
      src: "/images/blog-3-5-steps-to-online-chess.webp",
      placeholder:
        "https://placehold.co/800x600/8b5cf6/ffffff?text=5+Steps+to+Online+Chess",
      alt: "5 Steps to Online Chess - Chess blog article",
      width: 800,
      height: 600,
    },
  },
};
