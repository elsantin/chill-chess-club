"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AnimatedTitle } from "../components/neumorphic/AnimatedTitle";
import LegalFooter from "../components/LegalFooter";

export default function TermsPage() {
  const t = useTranslations("terms");

  return (
    // Accessibility: Restructured to place Footer outside main landmark (WCAG 2.0)
    <div className="min-h-screen bg-warmGray-950">
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedTitle className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-center">
              {t("title")}
            </AnimatedTitle>

            <p className="text-warmGray-300 mb-8 text-center">
              {t("lastUpdated")}: {t("date")}
            </p>

            <div className="prose prose-invert prose-orange max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold text-sunset-400 mb-4">
                  {t("section1.title")}
                </h2>
                <p className="text-warmGray-200 leading-relaxed mb-4">
                  {t("section1.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold text-sunset-400 mb-4">
                  {t("section2.title")}
                </h2>
                <p className="text-warmGray-200 leading-relaxed mb-4">
                  {t("section2.content")}
                </p>
                <ul className="list-disc list-inside text-warmGray-200 space-y-2 ml-4">
                  {(t.raw("section2.items") as string[]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold text-sunset-400 mb-4">
                  {t("section3.title")}
                </h2>
                <p className="text-warmGray-200 leading-relaxed mb-4">
                  {t("section3.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold text-sunset-400 mb-4">
                  {t("section4.title")}
                </h2>
                <p className="text-warmGray-200 leading-relaxed mb-4">
                  {t("section4.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold text-sunset-400 mb-4">
                  {t("section5.title")}
                </h2>
                <p className="text-warmGray-200 leading-relaxed mb-4">
                  {t("section5.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold text-sunset-400 mb-4">
                  {t("section6.title")}
                </h2>
                <p className="text-warmGray-200 leading-relaxed mb-4">
                  {t("section6.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold text-sunset-400 mb-4">
                  {t("section7.title")}
                </h2>
                <p className="text-warmGray-200 leading-relaxed mb-4">
                  {t("section7.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-playfair font-bold text-sunset-400 mb-4">
                  {t("section8.title")}
                </h2>
                <p className="text-warmGray-200 leading-relaxed mb-4">
                  {t("section8.content")}
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <LegalFooter />
    </div>
  );
}
