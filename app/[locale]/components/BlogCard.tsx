"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FaClock, FaCalendar, FaArrowRight } from "react-icons/fa";
import { NeumorphicCard } from "./neumorphic/NeumorphicCard";
import { LocalizedBlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: LocalizedBlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const locale = useLocale();
  const t = useTranslations("blog");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link href={`/${locale}/blog/${post.slug}`}>
        <NeumorphicCard
          className="bg-warmGray-900 overflow-hidden h-full flex flex-col"
          interactive={true}
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden bg-warmGray-800">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-warmGray-900 via-warmGray-900/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-sunset-500/20 via-rose-500/10 to-purple-500/20 mix-blend-overlay" />

            {/* Category badge */}
            {post.category && (
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-sunset-500 to-rose-500 text-white text-sm font-semibold rounded-full">
                {post.category}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-warmGray-400 mb-3">
              <div className="flex items-center gap-1">
                <FaCalendar className="text-sunset-400" />
                <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-1">
                  <FaClock className="text-sunset-400" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-playfair font-bold text-warmGray-50 mb-3">
              {post.title}
            </h3>

            {/* Excerpt */}
            {/* Accessibility: Changed from warmGray-300 to warmGray-200 for WCAG 2.0 AA contrast */}
            <p className="text-warmGray-200 mb-4 flex-grow line-clamp-3">
              {post.excerpt}
            </p>

            {/* Read more */}
            <div className="flex items-center gap-2 text-sunset-400 font-semibold">
              <span>{t("readMore")}</span>
              <FaArrowRight />
            </div>
          </div>
        </NeumorphicCard>
      </Link>
    </motion.div>
  );
}
