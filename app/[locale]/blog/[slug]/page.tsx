"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { FaArrowLeft, FaClock, FaCalendar, FaUser } from "react-icons/fa";
import { getLocalizedBlogPost } from "@/lib/blog-data";
import { NeumorphicCard } from "../../components/neumorphic/NeumorphicCard";
import { AnimatedTitle } from "../../components/neumorphic/AnimatedTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import { notFound } from "next/navigation";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = use(params);
  const locale = useLocale();
  const post = getLocalizedBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-warmGray-950 min-h-screen">
      <Header />

      <article className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-sunset-400 hover:text-sunset-300 transition-colors"
            >
              <FaArrowLeft />
              <span>Volver al Blog</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <NeumorphicCard className="bg-warmGray-900 overflow-hidden mb-8">
              {/* Featured Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
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
                <AnimatedTitle className="text-3xl md:text-5xl font-playfair font-bold text-warmGray-50 mb-6">
                  {post.title}
                </AnimatedTitle>

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
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <NeumorphicCard className="bg-warmGray-900 p-8 md:p-12">
              <div
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </NeumorphicCard>
          </motion.div>

          {/* Back to blog CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
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
                <FaArrowLeft />
                <span>Ver Más Artículos</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
