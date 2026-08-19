"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaArrowLeft, FaClock, FaCalendar, FaUser } from "react-icons/fa";
import { getLocalizedBlogPost } from "@/lib/blog-data";
import { NeumorphicCard } from "../../components/neumorphic/NeumorphicCard";
import { blurPlaceholders } from "@/lib/image-blur";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import { notFound } from "next/navigation";

export default function BlogPostClient({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) {
  const t = useTranslations("blog");
  const post = getLocalizedBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

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
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 text-sunset-400 hover:text-sunset-300 transition-colors"
              >
                <FaArrowLeft />
                <span>{t("backToBlog")}</span>
              </Link>
            </div>

            {/* Article Header */}
            <div>
              <NeumorphicCard
                className="bg-warmGray-900 overflow-hidden mb-8"
                interactive={false}
              >
                {/* Featured Image */}
                <div className="relative h-96 overflow-hidden">
                  {/* Performance: Hero image with priority loading, quality control, and blur placeholder */}
                  <Image
                    src={post.image}
                    alt={post.title}
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

                  {/* Category badge */}
                  {post.category && (
                    <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-sunset-500 to-rose-500 text-white font-semibold rounded-full">
                      {post.category}
                    </div>
                  )}
                </div>

                {/* Article Meta */}
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
                    {post.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-warmGray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-sunset-400" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-sunset-400" />
                      <span>
                        {new Date(post.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    {post.readTime && (
                      <div className="flex items-center gap-2">
                        <FaClock className="text-sunset-400" />
                        <span>{post.readTime} de lectura</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xl text-warmGray-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </NeumorphicCard>
            </div>

            {/* Article Content */}
            <div>
              <NeumorphicCard
                className="bg-warmGray-900 p-8 md:p-12"
                interactive={false}
              >
                <div
                  className="prose prose-lg prose-invert max-w-none 
                    prose-headings:font-playfair prose-headings:tracking-wide
                    prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 
                    prose-h2:border-b prose-h2:border-warmGray-800/80 prose-h2:pb-3 prose-h2:text-sunset-300
                    prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-warmGray-200
                    prose-p:text-warmGray-300 prose-p:leading-relaxed prose-p:text-base prose-p:md:text-lg prose-p:mb-6
                    prose-p:first-of-type:text-xl prose-p:first-of-type:leading-relaxed prose-p:first-of-type:text-warmGray-200 prose-p:first-of-type:border-l-2 prose-p:first-of-type:border-sunset-500/50 prose-p:first-of-type:pl-4 prose-p:first-of-type:my-6
                    prose-blockquote:border-l-4 prose-blockquote:border-sunset-400 prose-blockquote:bg-warmGray-950/40 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-warmGray-200
                    prose-strong:text-warmGray-100 prose-strong:font-semibold
                    prose-li:text-warmGray-300 prose-li:my-2
                    [&_*]:!animate-none [&_h1]:!animate-none [&_h2]:!animate-none [&_h3]:!animate-none [&_h4]:!animate-none"
                  style={{ animation: "none" }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </NeumorphicCard>
            </div>

            {/* Back to blog CTA */}
            <div className="mt-12 text-center">
              <Link href={`/${locale}/blog`}>
                <button className="px-8 py-4 bg-gradient-to-r from-sunset-500 via-rose-500 to-pink-600 text-white font-bold rounded-xl shadow-neumorphic-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 active:scale-95">
                  <FaArrowLeft />
                  <span>{t("viewMoreArticles")}</span>
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
