"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FaClock, FaCalendar, FaArrowRight } from "react-icons/fa";
import { NeumorphicCard } from "./neumorphic/NeumorphicCard";
import { LocalizedBlogPost } from "@/lib/blog-data";
import { blurPlaceholders } from "@/lib/image-blur";

interface BlogCardProps {
  post: LocalizedBlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const locale = useLocale();
  const t = useTranslations("blog");

  return (
    // Performance: Reduced animation duration and delay for faster perceived loading
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        delay: Math.min(index * 0.05, 0.3),
      }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="group h-full"
    >
      {/* Performance: Added prefetch for instant navigation */}
      <Link href={`/${locale}/blog/${post.slug}`} prefetch={true}>
        <NeumorphicCard
          className="bg-warmGray-900 overflow-hidden h-full flex flex-col"
          interactive={true}
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden bg-warmGray-800">
            {/* Performance: Optimized with lazy loading, quality control, and blur placeholder */}
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              loading="lazy"
              quality={85}
              placeholder="blur"
              blurDataURL={blurPlaceholders.card}
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
