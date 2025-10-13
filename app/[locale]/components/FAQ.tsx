"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedTitle } from "./neumorphic/AnimatedTitle";

export default function FAQ() {
  const t = useTranslations("faq");

  const handleCTAClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="faq" className="py-20 px-4 bg-warmGray-950">
      <div className="container mx-auto max-w-4xl">
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
            delay={0.9}
          >
            {t("title")}
          </AnimatedTitle>
          <p
            className="text-xl !text-warmGray-200"
            style={{ color: "#e7e5e4" }}
          >
            {t("intro")}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {(t.raw("questions") as Array<{ q: string; a: string }>).map(
              (item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-warmGray-800 to-warmGray-900 shadow-neumorphic-lg rounded-xl p-8 md:p-12 text-center border border-sunset-500/20"
        >
          <h3
            className="text-2xl md:text-3xl font-playfair font-bold !text-white mb-4"
            style={{ color: "#ffffff" }}
          >
            {t("ctaTitle")}
          </h3>
          <p
            className="text-lg !text-warmGray-200 mb-8 max-w-2xl mx-auto"
            style={{ color: "#e7e5e4" }}
          >
            {t("ctaDesc")}
          </p>
          <motion.button
            onClick={handleCTAClick}
            className="px-8 py-4 bg-gradient-to-r from-sunset-500 via-rose-500 to-pink-600 !text-white font-bold rounded-xl transition-all duration-300 shadow-neumorphic-md"
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
            {t("ctaButton")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
