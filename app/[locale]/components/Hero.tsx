"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { imagePlaceholders } from "@/lib/utils";

export default function Hero() {
  const t = useTranslations("hero");

  const handleCTAClick = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      {/* TODO: Reemplazar placeholder con imagen real en /public/images/hero.webp */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imagePlaceholders.hero.src}
          alt={imagePlaceholders.hero.alt}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-pink-500/10 via-transparent to-transparent opacity-50 z-10" />

      <div className="container mx-auto px-4 py-32 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <button
              onClick={() => handleCTAClick("#contact")}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 w-full sm:w-auto"
            >
              {t("cta1")}
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => handleCTAClick("#method")}
              className="px-8 py-4 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              {t("cta2")}
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-pink-500 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-pink-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
