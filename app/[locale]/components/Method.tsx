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

export default function Method() {
  const t = useTranslations("method");

  // Icons mapping
  const stepIcons: Record<string, React.ReactNode> = {
    FaComments: <FaComments className="text-4xl text-purple-500 mb-4" />,
    FaBrain: <FaBrain className="text-4xl text-purple-500 mb-4" />,
    FaChalkboardTeacher: (
      <FaChalkboardTeacher className="text-4xl text-purple-500 mb-4" />
    ),
    FaChess: <FaChess className="text-4xl text-purple-500 mb-4" />,
    FaChartLine: <FaChartLine className="text-4xl text-purple-500 mb-4" />,
  };

  const handleCTAClick = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="method" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedTitle
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            delay={0.3}
          >
            {t("title")}
          </AnimatedTitle>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative pl-12 pb-12 ${
                index < 4 ? "border-l-2 border-pink-500" : ""
              }`}
            >
              {/* Number Circle */}
              <div className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                {step.number}
              </div>

              {/* Content */}
              <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-750 transition-colors">
                {/* Icon */}
                <div className="mb-4">{stepIcons[step.icon]}</div>

                {/* Title */}
                <h3 className="text-2xl font-playfair font-semibold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-xl p-8 md:p-12 text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-4">
            {t("benefitsTitle")}
          </h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t("benefitsDesc")}
          </p>
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
