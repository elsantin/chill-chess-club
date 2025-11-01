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

  const siteUrl = "https://chillchessclub.com"; // TODO: Update with your actual domain
  const ogImage = `${siteUrl}/og-image.jpg`; // TODO: Create OG image

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: [
      "ajedrez online",
      "clases de ajedrez",
      "chess lessons",
      "online chess",
      "chess coaching",
      "IA chess",
      "personalized chess training",
    ],
    authors: [{ name: "Santiago Narváez - Chill Chess Club" }],
    creator: "Santiago Narváez",
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
    openGraph: {
      type: "website",
      locale: locale,
      url: siteUrl,
      title: metadata.title,
      description: metadata.description,
      siteName: "Chill Chess Club",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Chill Chess Club - Clases de Ajedrez Online",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [ogImage],
    },
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
    verification: {
      // TODO: Add verification codes when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
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
      <body className="font-roboto antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
