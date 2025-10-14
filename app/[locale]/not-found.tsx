"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { imagePlaceholders } from "@/lib/utils";
import { TwinklingStars } from "./components/neumorphic/TwinklingStars";
import { SunsetGradientText } from "./components/neumorphic/SunsetGradientText";

export default function NotFound() {
  const t = useTranslations("notFound");
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Same background as Hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imagePlaceholders.hero.src}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Sunset gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-warmGray-950 via-warmGray-950/80 to-warmGray-900/60" />
        {/* Sunset color overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sunset-500/20 via-rose-500/10 to-purple-500/20 mix-blend-overlay" />
      </div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0 z-10">
        <TwinklingStars />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <SunsetGradientText
              as="h1"
              variant="full"
              className="text-9xl md:text-[12rem] font-playfair font-bold"
            >
              404
            </SunsetGradientText>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl font-playfair font-bold text-warmGray-50 mb-6"
          >
            {t("title")}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-warmGray-200 mb-12 leading-relaxed"
          >
            {t("description")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center"
          >
            {/* Back Button */}
            <motion.button
              onClick={() => router.back()}
              className="px-8 py-4 border-2 border-warmGray-600 text-warmGray-300 hover:bg-warmGray-800/50 hover:border-warmGray-500 font-bold rounded-xl transition-all duration-300 backdrop-blur-sm bg-warmGray-900/30 w-full sm:w-auto"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t("backButton")}
            </motion.button>

            {/* Primary CTA - Home */}
            <Link href="/">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-sunset-500 via-rose-500 to-pink-600 text-white font-bold rounded-xl shadow-neumorphic-lg transition-all duration-300 w-full sm:w-auto"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t("homeButton")}
              </motion.button>
            </Link>

            {/* Secondary CTA - Courses */}
            <Link href="/#courses">
              <motion.button
                className="px-8 py-4 border-2 border-sunset-400 text-sunset-300 hover:bg-sunset-500/10 font-bold rounded-xl transition-all duration-300 backdrop-blur-sm bg-warmGray-900/30 w-full sm:w-auto"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#fb923c",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t("coursesButton")}
              </motion.button>
            </Link>
          </motion.div>

          {/* Fun chess piece animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 text-6xl"
          >
            <motion.span
              animate={{
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              ♟️
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
