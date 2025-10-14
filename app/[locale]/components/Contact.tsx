"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { AnimatedTitle } from "./neumorphic/AnimatedTitle";

export default function Contact() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-warmGray-950">
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
            delay={1.2}
          >
            {t("title")}
          </AnimatedTitle>
          <p className="text-2xl text-sunset-400 font-semibold mb-4">
            {t("subtitle")}
          </p>
          <p className="text-lg text-warmGray-200 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-warmGray-900 rounded-xl p-8 md:p-12 shadow-neumorphic-lg"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-warmGray-200 font-medium mb-2"
              >
                {t("form.name")}
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder={t("form.namePlaceholder")}
                className="w-full px-4 py-3 bg-warmGray-800 border border-warmGray-600 rounded-lg focus:border-sunset-500 focus:ring-2 focus:ring-sunset-500/20 outline-none transition-all text-warmGray-100 placeholder-warmGray-400 shadow-neumorphic-inset-sm"
              />
              {errors.name && (
                <p className="text-rose-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-warmGray-200 font-medium mb-2"
              >
                {t("form.email")}
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder={t("form.emailPlaceholder")}
                className="w-full px-4 py-3 bg-warmGray-800 border border-warmGray-600 rounded-lg focus:border-sunset-500 focus:ring-2 focus:ring-sunset-500/20 outline-none transition-all text-warmGray-100 placeholder-warmGray-400 shadow-neumorphic-inset-sm"
              />
              {errors.email && (
                <p className="text-rose-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-warmGray-200 font-medium mb-2"
              >
                {t("form.subject")}
              </label>
              <select
                {...register("subject")}
                id="subject"
                className="w-full px-4 py-3 bg-warmGray-800 border border-warmGray-600 rounded-lg focus:border-sunset-500 focus:ring-2 focus:ring-sunset-500/20 outline-none transition-all text-warmGray-100 shadow-neumorphic-inset-sm"
              >
                <option value="">{t("form.subjectPlaceholder")}</option>
                {(
                  t.raw("form.subjectOptions") as Array<{
                    value: string;
                    label: string;
                  }>
                ).map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p className="text-rose-400 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-warmGray-200 font-medium mb-2"
              >
                {t("form.message")}
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={6}
                placeholder={t("form.messagePlaceholder")}
                className="w-full px-4 py-3 bg-warmGray-800 border border-warmGray-600 rounded-lg focus:border-sunset-500 focus:ring-2 focus:ring-sunset-500/20 outline-none transition-all text-warmGray-100 placeholder-warmGray-400 resize-none shadow-neumorphic-inset-sm"
              />
              {errors.message && (
                <p className="text-rose-400 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-sunset-500 via-rose-500 to-pink-600 text-white font-bold rounded-xl shadow-neumorphic-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={
                !isSubmitting
                  ? {
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
                    }
                  : {}
              }
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>{t("form.submit")}</span>
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500"
              >
                <FaCheckCircle />
                <span>{t("form.success")}</span>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500"
              >
                <FaExclamationCircle />
                <span>{t("form.error")}</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
