import { Metadata } from "next";
import { getLocalizedResource } from "@/lib/resources-data";
import { generateResourceMetadata } from "@/lib/metadata-utils";
import ResourcePageClient from "./ResourcePageClient";

/**
 * Generate metadata for resource pages
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const resource = getLocalizedResource(slug, locale);

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return generateResourceMetadata({
    title: resource.title,
    description: resource.excerpt,
    locale,
    slug,
  });
}

/**
 * Resource page - Server component with metadata
 */
export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  return <ResourcePageClient slug={slug} locale={locale} />;
}
