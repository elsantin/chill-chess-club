/**
 * Metadata Utilities
 * Helper functions para generar metadata consistente en todas las páginas
 */

import { Metadata } from "next";

interface GenerateMetadataParams {
  title: string;
  description: string;
  locale: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

/**
 * Genera metadata completa para una página
 * @param params - Parámetros de metadata
 * @returns Objeto Metadata de Next.js
 */
export function generatePageMetadata({
  title,
  description,
  locale,
  path = "",
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Santiago Narváez",
  tags = [],
}: GenerateMetadataParams): Metadata {
  const siteUrl = "https://chill-chess-club.vercel.app";
  const ogImage = image || `${siteUrl}/og-image.jpg`;
  const siteName = "Chill Chess Club";
  const fullUrl = `${siteUrl}/${locale}${path}`;

  // Locale mapping
  const ogLocale = locale === "es" ? "es_ES" : "en_US";
  const alternateLocale = locale === "es" ? "en_US" : "es_ES";

  const metadata: Metadata = {
    title,
    description,

    // Canonical and alternates
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        es: `/es${path}`,
        en: `/en${path}`,
      },
    },

    // Open Graph
    openGraph: {
      type,
      locale: ogLocale,
      alternateLocale: [alternateLocale],
      url: fullUrl,
      title,
      description,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt:
            locale === "es"
              ? `${title} - Chill Chess Club`
              : `${title} - Chill Chess Club`,
          type: "image/jpeg",
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@chillchessclub",
      site: "@chillchessclub",
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  // Add article-specific metadata
  if (type === "article") {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [author],
      tags,
    };

    metadata.authors = [{ name: author, url: siteUrl }];
  }

  return metadata;
}

/**
 * Genera metadata para artículos de blog
 */
export function generateBlogMetadata({
  title,
  description,
  locale,
  slug,
  publishedTime,
  modifiedTime,
  author = "Santiago Narváez",
  tags = [],
  image,
}: {
  title: string;
  description: string;
  locale: string;
  slug: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  image?: string;
}): Metadata {
  return generatePageMetadata({
    title: `${title} | Chill Chess Club Blog`,
    description,
    locale,
    path: `/blog/${slug}`,
    image,
    type: "article",
    publishedTime,
    modifiedTime,
    author,
    tags,
  });
}

/**
 * Genera metadata para páginas de recursos
 */
export function generateResourceMetadata({
  title,
  description,
  locale,
  slug,
  image,
}: {
  title: string;
  description: string;
  locale: string;
  slug: string;
  image?: string;
}): Metadata {
  return generatePageMetadata({
    title: `${title} | Chill Chess Club Resources`,
    description,
    locale,
    path: `/recursos/${slug}`,
    image,
    type: "article",
  });
}

/**
 * Genera structured data (JSON-LD) para SEO
 */
export function generateStructuredData(
  type: "Organization" | "Article",
  data: any
) {
  const baseUrl = "https://chill-chess-club.vercel.app";

  if (type === "Organization") {
    return {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Chill Chess Club",
      description:
        "Personalized online chess classes for beginners and intermediates with AI assistance",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      sameAs: [
        "https://www.chess.com/member/chillchessclub",
        "https://lichess.org/@/chillchessclub",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        availableLanguage: ["Spanish", "English"],
      },
      founder: {
        "@type": "Person",
        name: "Santiago Narváez",
      },
    };
  }

  if (type === "Article") {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.title,
      description: data.description,
      image: data.image || `${baseUrl}/og-image.jpg`,
      datePublished: data.publishedTime,
      dateModified: data.modifiedTime || data.publishedTime,
      author: {
        "@type": "Person",
        name: data.author || "Santiago Narváez",
      },
      publisher: {
        "@type": "Organization",
        name: "Chill Chess Club",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
        },
      },
    };
  }

  return {};
}
