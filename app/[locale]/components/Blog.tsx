"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { imagePlaceholders } from "@/lib/utils";
import { AnimatedTitle } from "./neumorphic/AnimatedTitle";

export default function Blog() {
  const t = useTranslations("blog");

  const blogImages = [
    imagePlaceholders.blog.echoesFromTheBoard,
    imagePlaceholders.blog.rediscoverVibrantEssence,
    imagePlaceholders.blog.fiveStepsToOnlineChess,
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-slate-900">
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
            delay={0.6}
          >
            {t("title")}
          </AnimatedTitle>
          <p className="text-xl text-slate-300">{t("subtitle")}</p>
        </motion.div>

        {/* Blog Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(
            t.raw("articles") as Array<{
              id: string;
              title: string;
              excerpt: string;
              date: string;
              author: string;
            }>
          ).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 group"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                {/* TODO: Reemplazar placeholder con imagen real en /public/images/ */}
                <Image
                  src={blogImages[index].src}
                  alt={blogImages[index].alt}
                  width={blogImages[index].width}
                  height={blogImages[index].height}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-pink-500" />
                    <span>
                      {new Date(article.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUser className="text-purple-500" />
                    <span>{article.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-playfair font-bold text-white mb-3 group-hover:text-pink-500 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={`#blog-${article.id}`}
                  className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 font-semibold transition-colors group/link"
                >
                  <span>{t("readMore")}</span>
                  <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
