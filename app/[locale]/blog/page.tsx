import { getTranslations } from "next-intl/server";
import { getRecentBlogPosts } from "@/lib/blog-data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { BlogPageClient } from "../components/BlogPageClient";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("blog");
  const blogPosts = getRecentBlogPosts(10, locale);
  return (
    <main className="bg-warmGray-950 min-h-screen">
      <Header />
      <BlogPageClient
        blogPosts={blogPosts}
        pageTitle={t("pageTitle")}
        pageSubtitle={t("pageSubtitle")}
        comingSoon={t("comingSoon")}
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
