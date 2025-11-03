/**
 * Image Blur Placeholder Utilities
 * Generates simple blur data URLs for better image loading UX
 */

/**
 * Generates a simple blur placeholder for images
 * This is a lightweight base64 encoded SVG that creates a blur effect
 *
 * @param width - Image width
 * @param height - Image height
 * @param color - Base color for the blur (default: warmGray-800)
 * @returns Base64 encoded blur data URL
 */
export function generateBlurDataURL(
  width: number = 600,
  height: number = 400,
  color: string = "#292524" // warmGray-800
): string {
  // Create a simple SVG with a gradient blur effect
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.8" />
          <stop offset="50%" style="stop-color:${color};stop-opacity:0.6" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:0.8" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)" />
    </svg>
  `;

  // Convert to base64
  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Preset blur placeholders for common image sizes
 */
export const blurPlaceholders = {
  // Card images (600x400)
  card: generateBlurDataURL(600, 400, "#292524"),

  // Hero/Featured images (1200x600)
  hero: generateBlurDataURL(1200, 600, "#292524"),

  // Thumbnail (300x200)
  thumbnail: generateBlurDataURL(300, 200, "#292524"),
};
