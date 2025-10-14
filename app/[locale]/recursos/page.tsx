"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { AnimatedTitle } from "../components/neumorphic/AnimatedTitle";
import { ResourceCard } from "../components/ResourceCard";
import { getRecentResources } from "@/lib/resources-data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function RecursosPage() {
  const locale = useLocale();
  const t = useTranslations("resources");
  const resources = getRecentResources(10, locale);
  return (
    <main className="bg-warmGray-950 min-h-screen">
      <Header />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <AnimatedTitle className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              {t("pageTitle")}
            </AnimatedTitle>
            <p className="text-xl text-warmGray-200 max-w-3xl mx-auto">
              {t("pageSubtitle")}
            </p>
          </motion.div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                index={index}
              />
            ))}
          </div>

          {/* Empty state if no resources */}
          {resources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-warmGray-400">{t("comingSoon")}</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
