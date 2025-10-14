"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { imagePlaceholders } from "@/lib/utils";
import { SunsetGradientText } from "./neumorphic/SunsetGradientText";
import { TwinklingStars } from "./neumorphic/TwinklingStars";

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
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={imagePlaceholders.hero.src}
          alt={imagePlaceholders.hero.alt}
          fill
          className="object-cover"
          priority
        />
        {/* Sunset gradient overlay - Más luminoso */}
        <div className="absolute inset-0 bg-gradient-to-t from-warmGray-950/70 via-warmGray-950/40 to-warmGray-900/30" />
        {/* Sunset color overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sunset-500/25 via-rose-500/15 to-purple-500/25 mix-blend-overlay" />
      </motion.div>

      {/* Twinkling Stars Animation - Minimalista */}
      <div className="absolute inset-0 z-10">
        <TwinklingStars />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-5xl ml-auto mr-0 md:mr-8"
        >
          {/* Title with Sunset Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight"
          >
            <SunsetGradientText variant="full" className="drop-shadow-2xl">
              {t("title")}
            </SunsetGradientText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl lg:text-2xl !text-warmGray-100 mb-12 mx-auto leading-relaxed drop-shadow-lg"
            style={{ color: "#f5f5f4" }}
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center"
          >
            {/* Primary CTA */}
            <motion.button
              onClick={() => handleCTAClick("#contact")}
              className="px-8 py-4 bg-gradient-to-r from-sunset-500 via-rose-500 to-pink-600 !text-white font-bold rounded-xl transition-all duration-300 shadow-neumorphic-lg w-full sm:w-auto"
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f43f5e, #ec4899)",
                color: "#ffffff",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t("cta1")}
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              onClick={() => handleCTAClick("#method")}
              className="px-8 py-4 border-2 border-sunset-400 !text-sunset-300 hover:bg-sunset-500/10 font-bold rounded-xl transition-all duration-300 backdrop-blur-sm bg-warmGray-900/30 w-full sm:w-auto"
              style={{ color: "#fdba74" }}
              whileHover={{
                scale: 1.05,
                borderColor: "#fb923c",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t("cta2")}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator with sunset colors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-6 h-10 border-2 border-sunset-400 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ height: ["8px", "16px", "8px"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="w-1 bg-gradient-to-b from-sunset-400 to-rose-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
