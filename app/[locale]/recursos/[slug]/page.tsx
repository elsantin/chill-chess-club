"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  FaArrowLeft,
  FaClock,
  FaCalendar,
  FaUser,
  FaGraduationCap,
} from "react-icons/fa";
import { getLocalizedResource } from "@/lib/resources-data";
import { NeumorphicCard } from "../../components/neumorphic/NeumorphicCard";
import { blurPlaceholders } from "@/lib/image-blur";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import { notFound } from "next/navigation";

export default function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = use(params);
  const locale = useLocale();
  const t = useTranslations("resources");
  const resource = getLocalizedResource(slug, locale);

  if (!resource) {
    notFound();
  }

  const difficultyColors: Record<string, string> = {
    Principiante: "from-green-500 to-emerald-500",
    Intermedio: "from-sunset-500 to-rose-500",
    Avanzado: "from-purple-500 to-pink-500",
  };

  return (
    // Accessibility: Restructured to place Header and Footer outside main landmark (WCAG 2.0)
    <div className="bg-warmGray-950 min-h-screen">
      <Header />

      <main>
        <article className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Back button */}
            <div className="mb-8">
              <Link
                href={`/${locale}/recursos`}
                className="inline-flex items-center gap-2 text-sunset-400 hover:text-sunset-300 transition-colors"
              >
                <FaArrowLeft />
                <span>{t("backToResources")}</span>
              </Link>
            </div>

            {/* Resource Header */}
            <div>
              <NeumorphicCard
                className="bg-warmGray-900 overflow-hidden mb-8"
                interactive={false}
              >
                {/* Featured Image */}
                <div className="relative h-96 overflow-hidden bg-warmGray-800">
                  {/* Performance: Hero image with priority loading, quality control, and blur placeholder */}
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                    quality={90}
                    placeholder="blur"
                    blurDataURL={blurPlaceholders.hero}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warmGray-900 via-warmGray-900/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-sunset-500/20 via-rose-500/10 to-purple-500/20 mix-blend-overlay" />

                  {/* Difficulty badge */}
                  <div
                    className={`absolute top-6 right-6 px-4 py-2 bg-gradient-to-r ${
                      difficultyColors[resource.difficulty]
                    } text-white font-semibold rounded-full flex items-center gap-2`}
                  >
                    <FaGraduationCap />
                    <span>{resource.difficulty}</span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-warmGray-900/80 backdrop-blur-sm text-sunset-400 font-semibold rounded-full">
                    {resource.category}
                  </div>
                </div>

                {/* Resource Meta */}
                <div className="p-8">
                  <h1
                    className="text-3xl md:text-5xl font-playfair font-bold mb-6 pb-2"
                    style={{
                      background:
                        "linear-gradient(135deg, #fafaf9 0%, #fde68a 50%, #fafaf9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: "none",
                      lineHeight: "1.5",
                    }}
                  >
                    {resource.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-warmGray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-sunset-400" />
                      <span>{resource.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-sunset-400" />
                      <span>
                        {new Date(resource.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    {resource.readTime && (
                      <div className="flex items-center gap-2">
                        <FaClock className="text-sunset-400" />
                        <span>{resource.readTime} de lectura</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xl text-warmGray-300 leading-relaxed">
                    {resource.excerpt}
                  </p>
                </div>
              </NeumorphicCard>
            </div>

            {/* Resource Content */}
            <div>
              <NeumorphicCard
                className="bg-warmGray-900 p-8 md:p-12"
                interactive={false}
              >
                <div
                  className="prose prose-lg prose-invert max-w-none [&_*]:!animate-none [&_h1]:!animate-none [&_h2]:!animate-none [&_h3]:!animate-none [&_h4]:!animate-none"
                  style={{ animation: "none" }}
                  dangerouslySetInnerHTML={{ __html: resource.content }}
                />
              </NeumorphicCard>
            </div>

            {/* Back to resources CTA */}
            <div className="mt-12 text-center">
              <Link href={`/${locale}/recursos`}>
                <button className="px-8 py-4 bg-gradient-to-r from-sunset-500 via-rose-500 to-pink-600 text-white font-bold rounded-xl shadow-neumorphic-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 active:scale-95">
                  <FaArrowLeft />
                  <span>{t("viewMoreResources")}</span>
                </button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
