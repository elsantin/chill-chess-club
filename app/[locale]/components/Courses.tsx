"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCheck,
  FaUserCheck,
  FaLanguage,
  FaRobot,
  FaCalendarAlt,
} from "react-icons/fa";
import { imagePlaceholders } from "@/lib/utils";
import { AnimatedTitle } from "./neumorphic/AnimatedTitle";

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
    FaLanguage: <FaLanguage className="text-2xl" />,
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
    <section id="courses" className="py-20 px-4 bg-slate-950">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedTitle className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            {t("title")}
          </AnimatedTitle>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 group flex flex-col"
            >
              {/* Course Image */}
              <div className="relative h-64 overflow-hidden">
                {/* TODO: Reemplazar placeholder con imagen real en /public/images/ */}
                <Image
                  src={course.image.src}
                  alt={course.image.alt}
                  width={course.image.width}
                  height={course.image.height}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Level Badge */}
                <div
                  className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${course.gradient} text-white font-semibold rounded-full shadow-lg`}
                >
                  {t(`${course.key}.level`)}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-8 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-6">
                  {t(`${course.key}.title`)}
                </h3>

                {/* Features List - grows to fill space */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {(t.raw(`${course.key}.features`) as string[]).map(
                    (feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    )
                  )}
                </ul>

                {/* Price and Button - always at bottom */}
                <div className="mt-auto space-y-6">
                  {/* Price */}
                  <div className="border-t border-slate-700 pt-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      {t(`${course.key}.price`)}
                    </div>
                    <p className="text-sm text-slate-400">
                      {t(`${course.key}.priceNote`)}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={handleCTAClick}
                    className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 !text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-105"
                    style={{
                      background: "linear-gradient(to right, #ec4899, #f43f5e)",
                      color: "#ffffff",
                    }}
                  >
                    {t(`${course.key}.cta`)}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {(t.raw("trustSignals") as Array<{ icon: string; text: string }>).map(
            (signal, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <div className="text-pink-500 mb-3">
                  {trustSignalIcons[signal.icon]}
                </div>
                <span className="text-slate-300 font-medium">
                  {signal.text}
                </span>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
