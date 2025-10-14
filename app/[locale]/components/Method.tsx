"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  FaComments,
  FaBrain,
  FaChalkboardTeacher,
  FaChess,
  FaChartLine,
} from "react-icons/fa";
import { AnimatedTitle } from "./neumorphic/AnimatedTitle";
import { NeumorphicCard } from "./neumorphic/NeumorphicCard";

export default function Method() {
  const t = useTranslations("method");

  // Icons mapping
  const stepIcons: Record<string, React.ReactNode> = {
    FaComments: (
      <FaComments
        className="text-4xl !text-warmGray-50 mb-4"
        style={{ color: "#fafaf9" }}
      />
    ),
    FaBrain: (
      <FaBrain
        className="text-4xl !text-warmGray-50 mb-4"
        style={{ color: "#fafaf9" }}
      />
    ),
    FaChalkboardTeacher: (
      <FaChalkboardTeacher
        className="text-4xl !text-warmGray-50 mb-4"
        style={{ color: "#fafaf9" }}
      />
    ),
    FaChess: (
      <FaChess
        className="text-4xl !text-warmGray-50 mb-4"
        style={{ color: "#fafaf9" }}
      />
    ),
    FaChartLine: (
      <FaChartLine
        className="text-4xl !text-warmGray-50 mb-4"
        style={{ color: "#fafaf9" }}
      />
    ),
  };

  const handleCTAClick = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="method" className="py-20 px-4 bg-warmGray-950">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedTitle
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            delay={0.3}
          >
            {t("title")}
          </AnimatedTitle>
          <p
            className="text-xl !text-warmGray-200 max-w-3xl mx-auto"
            style={{ color: "#e7e5e4" }}
          >
            {t("intro")}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          {(
            t.raw("steps") as Array<{
              number: string;
              icon: string;
              title: string;
              description: string;
            }>
          ).map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className={`relative pl-12 pb-12 ${
                index < 4 ? "border-l-2 border-sunset-500/50" : ""
              }`}
            >
              {/* Number Circle */}
              <div
                className="absolute -left-6 top-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-glow-sunset"
                style={{
                  background: "linear-gradient(135deg, #f97316, #f43f5e)",
                }}
              >
                {step.number}
              </div>

              {/* Content */}
              <NeumorphicCard
                className="bg-warmGray-950 p-6"
                interactive={true}
              >
                {/* Icon */}
                <div className="mb-4">{stepIcons[step.icon]}</div>

                {/* Title */}
                <h3
                  className="text-2xl font-playfair font-semibold !text-warmGray-50 mb-3"
                  style={{ color: "#fafaf9" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="!text-warmGray-200 leading-relaxed"
                  style={{ color: "#e7e5e4" }}
                >
                  {step.description}
                </p>
              </NeumorphicCard>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <NeumorphicCard className="bg-gradient-to-br from-sunset-500/10 to-rose-500/10 border border-sunset-500/20 p-8 md:p-12 text-center mb-12">
            <h3
              className="text-2xl md:text-3xl font-playfair font-bold !text-warmGray-50 mb-4"
              style={{ color: "#fafaf9" }}
            >
              {t("benefitsTitle")}
            </h3>
            <p
              className="text-lg !text-warmGray-200 max-w-2xl mx-auto"
              style={{ color: "#e7e5e4" }}
            >
              {t("benefitsDesc")}
            </p>
          </NeumorphicCard>
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
            className="px-8 py-4 text-white font-bold rounded-xl shadow-neumorphic-lg transition-all duration-300"
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
