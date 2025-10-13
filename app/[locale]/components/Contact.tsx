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
    <section id="contact" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-4xl">
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
          <p className="text-2xl text-pink-500 font-semibold mb-4">
            {t("subtitle")}
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-800 rounded-xl p-8 md:p-12 shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-white font-medium mb-2"
              >
                {t("form.name")}
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder={t("form.namePlaceholder")}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all text-white placeholder-slate-500"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-white font-medium mb-2"
              >
                {t("form.email")}
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder={t("form.emailPlaceholder")}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all text-white placeholder-slate-500"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-white font-medium mb-2"
              >
                {t("form.subject")}
              </label>
              <select
                {...register("subject")}
                id="subject"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all text-white"
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
                <p className="text-red-400 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-white font-medium mb-2"
              >
                {t("form.message")}
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={6}
                placeholder={t("form.messagePlaceholder")}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all text-white placeholder-slate-500 resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 flex items-center justify-center gap-2"
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
            </button>

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
