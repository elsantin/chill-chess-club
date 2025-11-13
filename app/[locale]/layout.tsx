import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadata = messages.metadata as { title: string; description: string };

  // Site configuration
  const siteUrl = "https://chill-chess-club.vercel.app";
  const ogImage = `${siteUrl}/og-image.jpg`;
  const siteName = "Chill Chess Club";

  // Locale mapping for Open Graph
  const ogLocale = locale === "es" ? "es_ES" : "en_US";
  const alternateLocale = locale === "es" ? "en_US" : "es_ES";

  return {
    // Basic metadata
    title: metadata.title,
    description: metadata.description,

    // Keywords for SEO
    keywords: [
      locale === "es" ? "ajedrez online" : "online chess",
      locale === "es" ? "clases de ajedrez" : "chess lessons",
      locale === "es" ? "instructor de ajedrez" : "chess instructor",
      locale === "es" ? "aprender ajedrez" : "learn chess",
      "chess coaching",
      "AI chess",
      "personalized chess training",
      "Santiago Narváez",
      "Chill Chess Club",
      locale === "es" ? "ajedrez para principiantes" : "chess for beginners",
      locale === "es" ? "clases particulares ajedrez" : "private chess lessons",
    ],

    // Authors and creator
    authors: [{ name: "Santiago Narváez", url: siteUrl }],
    creator: "Santiago Narváez",
    publisher: "Chill Chess Club",

    // Canonical URL
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },

    // Icons
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        {
          rel: "android-chrome-192x192",
          url: "/android-chrome-192x192.png",
        },
        {
          rel: "android-chrome-512x512",
          url: "/android-chrome-512x512.png",
        },
      ],
    },

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: [alternateLocale],
      url: `${siteUrl}/${locale}`,
      title: metadata.title,
      description: metadata.description,
      siteName: siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt:
            locale === "es"
              ? "Chill Chess Club - Clases de Ajedrez Online Personalizadas"
              : "Chill Chess Club - Personalized Online Chess Classes",
          type: "image/jpeg",
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [ogImage],
      creator: "@chillchessclub", // TODO: Update with actual Twitter handle
      site: "@chillchessclub", // TODO: Update with actual Twitter handle
    },

    // Robots and indexing
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Verification codes (add when available)
    verification: {
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // other: 'your-other-verification-code',
    },

    // Additional metadata
    category: "Education",
    classification: "Chess Education, Online Learning",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${roboto.variable}`}>
      {/* Performance: Preload critical fonts for smooth animations */}
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-roboto antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
