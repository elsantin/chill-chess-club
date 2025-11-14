import { Metadata } from "next";
import { getLocalizedBlogPost } from "@/lib/blog-data";
import { generateBlogMetadata } from "@/lib/metadata-utils";
import BlogPostClient from "./BlogPostClient";

/**
 * Generate metadata for blog post pages
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getLocalizedBlogPost(slug, locale);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return generateBlogMetadata({
    title: post.title,
    description: post.excerpt,
    locale,
    slug,
    publishedTime: post.date,
    author: post.author,
  });
}

/**
 * Blog post page - Server component with metadata
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  return <BlogPostClient slug={slug} locale={locale} />;
}
