"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  FaClock,
  FaCalendar,
  FaArrowRight,
  FaGraduationCap,
} from "react-icons/fa";
import { NeumorphicCard } from "./neumorphic/NeumorphicCard";
import { LocalizedResource } from "@/lib/resources-data";

interface ResourceCardProps {
  resource: LocalizedResource;
  index?: number;
}

export function ResourceCard({ resource, index = 0 }: ResourceCardProps) {
  const locale = useLocale();
  const t = useTranslations("resources");

  const difficultyColors: Record<string, string> = {
    Principiante: "from-sunset-400 to-sunset-500",
    Beginner: "from-sunset-400 to-sunset-500",
    Intermedio: "from-sunset-500 to-rose-500",
    Intermediate: "from-sunset-500 to-rose-500",
    Avanzado: "from-rose-500 to-pink-600",
    Advanced: "from-rose-500 to-pink-600",
  };

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
      <Link href={`/${locale}/recursos/${resource.slug}`}>
        <NeumorphicCard
          className="bg-warmGray-900 overflow-hidden h-full flex flex-col"
          interactive={true}
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden bg-warmGray-800">
            <Image
              src={resource.image}
              alt={resource.title}
              width={600}
              height={400}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-warmGray-900 via-warmGray-900/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-sunset-500/20 via-rose-500/10 to-purple-500/20 mix-blend-overlay" />

            {/* Difficulty badge */}
            <div
              className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${
                difficultyColors[resource.difficulty]
              } text-white text-sm font-semibold rounded-full flex items-center gap-2`}
            >
              <FaGraduationCap />
              <span>{resource.difficulty}</span>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-warmGray-900/80 backdrop-blur-sm text-sunset-400 text-sm font-semibold rounded-full">
              {resource.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-warmGray-400 mb-3">
              <div className="flex items-center gap-1">
                <FaCalendar className="text-sunset-400" />
                <span>
                  {new Date(resource.date).toLocaleDateString("es-ES")}
                </span>
              </div>
              {resource.readTime && (
                <div className="flex items-center gap-1">
                  <FaClock className="text-sunset-400" />
                  <span>{resource.readTime}</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-playfair font-bold text-warmGray-50 mb-3">
              {resource.title}
            </h3>

            {/* Excerpt */}
            <p className="text-warmGray-300 mb-4 flex-grow line-clamp-3">
              {resource.excerpt}
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
