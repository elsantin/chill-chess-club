"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCheck,
  FaUserCheck,
  FaGlobe,
  FaRobot,
  FaCalendarAlt,
} from "react-icons/fa";
import { imagePlaceholders } from "@/lib/utils";
import { AnimatedTitle } from "./neumorphic/AnimatedTitle";
import { NeumorphicCard } from "./neumorphic/NeumorphicCard";

export default function Courses() {
  const t = useTranslations("courses");

  const handleCTAClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Trust signals icons mapping
  const trustSignalIcons: Record<string, React.ReactNode> = {
    FaUserCheck: <FaUserCheck className="text-2xl" />,
    FaGlobe: <FaGlobe className="text-2xl" />,
    FaLanguage: <FaGlobe className="text-2xl" />,
    FaRobot: <FaRobot className="text-2xl" />,
    FaCalendarAlt: <FaCalendarAlt className="text-2xl" />,
  };

  const courses = [
    {
      key: "beginner",
      image: imagePlaceholders.beginnerCourse,
      gradient: "from-sunset-500 via-rose-500 to-pink-600",
    },
    {
      key: "intermediate",
      image: imagePlaceholders.intermediateCourse,
      gradient: "from-sunset-500 via-rose-500 to-pink-600",
    },
  ];

  return (
    <section id="courses" className="py-20 px-4 bg-warmGray-950">
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
            className="text-xl !text-warmGray-200 max-w-3xl mx-auto"
            style={{ color: "#e7e5e4" }}
          >
            {t("intro")}
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              <NeumorphicCard
                className="bg-warmGray-900 overflow-hidden flex flex-col h-full"
                interactive={true}
              >
                {/* Course Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={course.image.src}
                    alt={course.image.alt}
                    width={course.image.width}
                    height={course.image.height}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Sunset gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-warmGray-900 via-warmGray-900/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-sunset-500/20 via-rose-500/10 to-purple-500/20 mix-blend-overlay" />

                  {/* Level Badge */}
                  <div
                    className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-sunset-500 to-rose-500 text-white font-semibold rounded-full shadow-glow-sunset"
                    style={{
                      background: "linear-gradient(to right, #f97316, #f43f5e)",
                    }}
                  >
                    {t(`${course.key}.level`)}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-8 flex flex-col h-full">
                  {/* Title */}
                  <h3
                    className="text-2xl md:text-3xl font-playfair font-bold !text-warmGray-50 mb-6"
                    style={{ color: "#fafaf9" }}
                  >
                    {t(`${course.key}.title`)}
                  </h3>

                  {/* Features List - grows to fill space */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {(t.raw(`${course.key}.features`) as string[]).map(
                      (feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheck className="text-sunset-400 mt-1 flex-shrink-0" />
                          <span
                            className="!text-warmGray-200"
                            style={{ color: "#e7e5e4" }}
                          >
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>

                  {/* Price and Button - always at bottom */}
                  <div className="mt-auto space-y-6">
                    {/* Price */}
                    <div className="border-t border-warmGray-700/50 pt-6 text-center">
                      <div
                        className="text-3xl font-bold !text-warmGray-50 mb-2"
                        style={{ color: "#fafaf9" }}
                      >
                        {t(`${course.key}.price`)}
                      </div>
                      <p
                        className="text-sm !text-warmGray-400"
                        style={{ color: "#a8a29e" }}
                      >
                        {t(`${course.key}.priceNote`)}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      onClick={handleCTAClick}
                      className="w-full px-6 py-4 !text-white font-bold rounded-xl shadow-neumorphic-lg transition-all duration-300"
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
                      {t(`${course.key}.cta`)}
                    </motion.button>
                  </div>
                </div>
              </NeumorphicCard>
            </motion.div>
          ))}
        </div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {(t.raw("trustSignals") as Array<{ icon: string; text: string }>).map(
            (signal, index) => (
              <NeumorphicCard
                key={index}
                className="flex flex-col items-center justify-center text-center p-6 bg-warmGray-900 min-h-[120px]"
                interactive={true}
              >
                <div
                  className="mb-3 flex items-center justify-center !text-warmGray-50"
                  style={{ color: "#fafaf9" }}
                >
                  {trustSignalIcons[signal.icon]}
                </div>
                <span
                  className="!text-warmGray-200 font-medium block w-full"
                  style={{
                    color: "#e7e5e4",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  {signal.text}
                </span>
              </NeumorphicCard>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
