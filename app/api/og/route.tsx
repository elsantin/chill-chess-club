import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

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
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract query parameters with defaults
    const title = searchParams.get("title") || "Chill Chess Club";
    const locale = searchParams.get("locale") || "en";
    const type = searchParams.get("type") || "default";

    // Load Inter font for better typography
    let interFont: ArrayBuffer | null = null;
    try {
      const fontResponse = await fetch(
        "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
      );
      if (fontResponse.ok) {
        interFont = await fontResponse.arrayBuffer();
      }
    } catch {
      console.warn("Failed to load Inter font, falling back to system fonts");
    }

    // Validate type
    const validType = type === "blog" || type === "resource" ? type : "default";

    // Brand colors (Neumorphic Sunset theme)
    const colors = {
      sunset: "#f97316",
      rose: "#f43f5e",
      warmGray50: "#fafaf9",
      warmGray900: "#1c1917",
      warmGray950: "#0c0a09", // Darkest for better logo contrast
    };

    // Truncate title if too long (max 80 characters)
    const truncatedTitle =
      title.length > 80 ? title.substring(0, 77) + "..." : title;

    // Logo URL (using public icon)
    const logoUrl = "https://chill-chess-club.vercel.app/icon.png";

    // Font family (use Inter if loaded, otherwise system fonts)
    const fontFamily = interFont
      ? "Inter, system-ui, -apple-system, sans-serif"
      : "system-ui, -apple-system, sans-serif";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: `linear-gradient(135deg, ${colors.warmGray950} 0%, ${colors.sunset} 50%, ${colors.rose} 100%)`,
            padding: "60px",
          }}
        >
          {/* Header with logo and site name - CENTERED */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoUrl}
              width="180"
              height="180"
              alt="Chill Chess Club Logo"
              style={{
                borderRadius: "28px",
              }}
            />
            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: colors.warmGray50,
                fontFamily,
                textAlign: "center",
              }}
            >
              Chill Chess Club
            </div>
          </div>

          {/* Main title - LEFT ALIGNED */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: colors.warmGray50,
                lineHeight: 1.2,
                textAlign: "left",
                maxWidth: "1000px",
                fontFamily,
              }}
            >
              {truncatedTitle}
            </div>
          </div>

          {/* Footer - Type badge (only for blog/resource) */}
          {validType !== "default" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: colors.warmGray900,
                  color: colors.warmGray50,
                  padding: "8px 20px",
                  borderRadius: "8px",
                  fontSize: 20,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily,
                }}
              >
                {validType === "blog"
                  ? "📝 Blog"
                  : locale === "es"
                  ? "📚 Recurso"
                  : "📚 Resource"}
              </div>
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: interFont
          ? [
              {
                name: "Inter",
                data: interFont,
                weight: 700,
                style: "normal",
              },
            ]
          : undefined,
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
