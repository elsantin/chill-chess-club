import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

/**
 * Dynamic Open Graph Image Generator
 * Generates personalized OG images for social media sharing
 *
 * Query Parameters:
 * - title: Page/post title (default: "Chill Chess Club")
 * - locale: Language (es | en, default: "en")
 * - type: Template type (default | blog | resource, default: "default")
 *
 * Note: Uses system fonts (system-ui, -apple-system) for optimal performance
 * and reliability in Edge Runtime. These fonts render consistently across platforms.
 */
export async function GET() {
  try {
    // Logo URL (using public icon)
    const logoUrl = "https://chill-chess-club.vercel.app/icon.png";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0c0a09",
          }}
        >
          {/* Logo que ocupa todo el espacio disponible */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUrl}
            width="1200"
            height="630"
            alt="Chill Chess Club Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          // Cache for 1 year (immutable content-addressed by URL params)
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      }
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
