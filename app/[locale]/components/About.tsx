"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChess, FaExternalLinkAlt } from "react-icons/fa";
import { SiChessdotcom, SiLichess } from "react-icons/si";
import { imagePlaceholders } from "@/lib/utils";
import { NeumorphicCard } from "./neumorphic/NeumorphicCard";
import { AnimatedTitle } from "./neumorphic/AnimatedTitle";

export default function About() {
  const t = useTranslations("about");

  const handleCTAClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-warmGray-950">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedTitle className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            {t("title")}
          </AnimatedTitle>
          <p
            className="text-xl !text-warmGray-200"
            style={{ color: "#e7e5e4" }}
          >
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-2 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-sunset-500/50 shadow-neumorphic-lg hover:shadow-glow-sunset transition-all duration-300 max-w-xs">
              <Image
                src={imagePlaceholders.profile.src}
                alt={imagePlaceholders.profile.alt}
                width={350}
                height={467}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Sunset gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sunset-500/20 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-sunset-500/30 to-purple-500/30 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quote */}
            <NeumorphicCard
              elevated={false}
              interactive={false}
              className="p-6 bg-warmGray-900/50 backdrop-blur-sm shadow-neumorphic-inset-md"
            >
              <blockquote className="border-l-4 border-sunset-500 pl-6 italic">
                <p
                  className="text-lg mb-2 !text-warmGray-200"
                  style={{ color: "#e7e5e4" }}
                >
                  &ldquo;{t("quote.text")}&rdquo;
                </p>
                <footer
                  className="text-sm !text-sunset-300"
                  style={{ color: "#fdba74" }}
                >
                  — {t("quote.author")}
                </footer>
              </blockquote>
            </NeumorphicCard>

            {/* Paragraphs */}
            <p
              className="!text-warmGray-200 leading-relaxed"
              style={{ color: "#e7e5e4" }}
            >
              {t("paragraph1")}
            </p>
            <p
              className="!text-warmGray-200 leading-relaxed"
              style={{ color: "#e7e5e4" }}
            >
              {t("paragraph2")}
            </p>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <NeumorphicCard className="p-8 md:p-12 mb-16 bg-warmGray-900">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-sunset-500 to-rose-500 shadow-glow-sunset">
                <FaChess className="text-3xl text-white" />
              </div>
              <AnimatedTitle
                as="h3"
                className="text-2xl md:text-3xl font-playfair font-semibold"
                delay={0.5}
              >
                {t("philosophyTitle")}
              </AnimatedTitle>
            </div>
            <p
              className="!text-warmGray-200 leading-relaxed text-lg"
              style={{ color: "#e7e5e4" }}
            >
              {t("philosophyText")}
            </p>
          </NeumorphicCard>
        </motion.div>

        {/* Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <AnimatedTitle
            as="h3"
            className="text-2xl md:text-3xl font-playfair font-semibold mb-4"
            delay={1}
          >
            {t("platformsTitle")}
          </AnimatedTitle>
          <p
            className="!text-warmGray-200 mb-8 max-w-2xl mx-auto"
            style={{ color: "#e7e5e4" }}
          >
            {t("platformsDesc")}
          </p>

          {/* Platform Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://www.chess.com/member/santiagovskiy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-warmGray-800 rounded-xl shadow-neumorphic-md transition-all duration-300 hover:shadow-glow-sunset group w-full sm:w-auto justify-center border border-warmGray-700/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiChessdotcom className="text-2xl text-green-500" />
              <span
                className="!text-warmGray-200 font-medium"
                style={{ color: "#e7e5e4" }}
              >
                {t("chesscomLink")}
              </span>
              <FaExternalLinkAlt
                className="!text-warmGray-400 group-hover:!text-sunset-400 transition-colors"
                style={{ color: "#a8a29e" }}
              />
            </motion.a>

            <motion.a
              href="https://lichess.org/@/Santiagovskiy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-warmGray-800 rounded-xl shadow-neumorphic-md transition-all duration-300 hover:shadow-glow-sunset group w-full sm:w-auto justify-center border border-warmGray-700/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiLichess
                className="text-2xl !text-warmGray-200"
                style={{ color: "#e7e5e4" }}
              />
              <span
                className="!text-warmGray-200 font-medium"
                style={{ color: "#e7e5e4" }}
              >
                {t("lichessLink")}
              </span>
              <FaExternalLinkAlt
                className="!text-warmGray-400 group-hover:!text-sunset-400 transition-colors"
                style={{ color: "#a8a29e" }}
              />
            </motion.a>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={handleCTAClick}
            className="px-8 py-4 bg-gradient-to-r from-sunset-500 via-rose-500 to-pink-600 text-white font-bold rounded-xl shadow-neumorphic-lg transition-all duration-300"
            style={{
              background:
                "linear-gradient(to right, #f97316, #f43f5e, #ec4899)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t("cta")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
