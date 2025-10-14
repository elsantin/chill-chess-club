"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";
import { AnimatedTitle } from "./neumorphic/AnimatedTitle";
import { BlogCard } from "./BlogCard";
import { getRecentBlogPosts } from "@/lib/blog-data";

export default function BlogPreview() {
  const locale = useLocale();
  const t = useTranslations("blog");
  const recentPosts = getRecentBlogPosts(3);

  return (
    <section id="blog-preview" className="py-20 px-4 bg-warmGray-950">
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
          <p className="text-xl text-warmGray-200 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href={`/${locale}/blog`}>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-sunset-500 via-rose-500 to-pink-600 text-white font-bold rounded-xl shadow-neumorphic-lg transition-all duration-300 inline-flex items-center gap-3"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t("viewAll")}</span>
              <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
