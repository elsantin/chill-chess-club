"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChess, FaExternalLinkAlt } from "react-icons/fa";
import { SiChessdotcom, SiLichess } from "react-icons/si";
import { imagePlaceholders } from "@/lib/utils";

export default function About() {
  const t = useTranslations("about");

  const handleCTAClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-slate-300">{t("subtitle")}</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="relative rounded-xl overflow-hidden border-4 border-sunset-500 shadow-neumorphic-lg shadow-glow-sunset max-w-sm">
              <Image
                src={imagePlaceholders.profile.src}
                alt={imagePlaceholders.profile.alt}
                width={400}
                height={533}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-sunset-500 to-purple-500 rounded-xl opacity-20 -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quote */}
            <blockquote className="border-l-4 border-purple-500 pl-6 italic text-slate-300 mb-8">
              <p className="text-lg mb-2">&ldquo;{t("quote.text")}&rdquo;</p>
              <footer className="text-sm text-slate-400">
                — {t("quote.author")}
              </footer>
            </blockquote>

            {/* Paragraphs */}
            <p className="text-slate-300 leading-relaxed">{t("paragraph1")}</p>
            <p className="text-slate-300 leading-relaxed">{t("paragraph2")}</p>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-800 rounded-xl p-8 md:p-12 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaChess className="text-4xl text-pink-500" />
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-white">
              {t("philosophyTitle")}
            </h3>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg">
            {t("philosophyText")}
          </p>
        </motion.div>

        {/* Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-white mb-4">
            {t("platformsTitle")}
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            {t("platformsDesc")}
          </p>

          {/* Platform Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.chess.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors group w-full sm:w-auto justify-center"
            >
              <SiChessdotcom className="text-2xl text-green-500" />
              <span className="text-white font-medium">
                {t("chesscomLink")}
              </span>
              <FaExternalLinkAlt className="text-slate-400 group-hover:text-pink-500 transition-colors" />
            </a>

            <a
              href="https://lichess.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors group w-full sm:w-auto justify-center"
            >
              <SiLichess className="text-2xl text-white" />
              <span className="text-white font-medium">{t("lichessLink")}</span>
              <FaExternalLinkAlt className="text-slate-400 group-hover:text-pink-500 transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={handleCTAClick}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
          >
            {t("cta")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
