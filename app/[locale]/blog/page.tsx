"use client";

import { motion } from "framer-motion";
import { AnimatedTitle } from "../components/neumorphic/AnimatedTitle";
import { BlogCard } from "../components/BlogCard";
import { blogPosts } from "@/lib/blog-data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function BlogPage() {
  return (
    <main className="bg-warmGray-950 min-h-screen">
      <Header />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <AnimatedTitle className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              📚 Blog de Ajedrez
            </AnimatedTitle>
            <p className="text-xl text-warmGray-200 max-w-3xl mx-auto">
              Artículos, reflexiones y estrategias para mejorar tu juego y
              disfrutar más del ajedrez
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Empty state if no posts */}
          {blogPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-warmGray-400">
                Próximamente nuevos artículos...
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
