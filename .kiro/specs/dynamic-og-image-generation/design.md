# Design Document

## Overview

This design implements a dynamic Open Graph image generation system for the Chill Chess Club Next.js application. The solution replaces the current static `og-image.jpg` approach with a dynamic API route powered by `@vercel/og` that generates personalized preview images for each page, blog post, and resource in both Spanish and English.

The system integrates seamlessly with Next.js App Router's metadata API, requiring minimal changes to existing page components while providing maximum flexibility for customization.

## Architecture

### High-Level Architecture

```mermaid
graph TB
    A[Page Component] --> B[generateMetadata Function]
    B --> C[Metadata Provider]
    C --> D[OG Image URL Constructor]
    D --> E[/api/og Route Handler]
    E --> F[ImageResponse from @vercel/og]
    F --> G[PNG Image Output]
    G --> H[Social Media Crawler]

    I[Translation Files] --> B
    J[Blog/Resource Data] --> B
```

### Component Interaction Flow

1. **Page Rendering**: When a page is requested, Next.js calls the `generateMetadata` function
2. **Metadata Construction**: The function constructs an OG image URL pointing to `/api/og` with query parameters (title, locale, type)
3. **Image Request**: Social media crawlers request the OG image URL
4. **Dynamic Generation**: The API route receives parameters and generates a custom image using `@vercel/og`
5. **Image Delivery**: The generated PNG is returned with appropriate cache headers

## Components and Interfaces

### 1. API Route Handler (`app/api/og/route.tsx`)

**Purpose**: Generate dynamic OG images using `@vercel/og`

**Interface**:

```typescript
// Query Parameters
interface OGImageParams {
  title?: string; // Page/post title
  locale?: "es" | "en"; // Language
  type?: "default" | "blog" | "resource"; // Image template type
}

// Response
type OGImageResponse = ImageResponse; // PNG image with 1200x630 dimensions
```

**Implementation Details**:

- Uses `ImageResponse` from `@vercel/og` to generate images
- Accepts query parameters via `request.nextUrl.searchParams`
- Returns PNG with `Content-Type: image/png`
- Implements three template types:
  - **default**: Site branding with title
  - **blog**: Blog post styling with title and date indicator
  - **resource**: Resource guide styling with title
- Uses Tailwind CSS for styling within the JSX template
- Loads custom fonts (Inter) for consistent branding
- Implements text truncation for long titles (max 80 characters)

**Design Pattern**:

```typescript
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Default Title";
  const locale = searchParams.get("locale") || "en";
  const type = searchParams.get("type") || "default";

  return new ImageResponse(
    (
      <div
        style={
          {
            /* Tailwind-like styles */
          }
        }
      >
        {/* Dynamic content based on parameters */}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

### 2. Enhanced Metadata Utilities (`lib/metadata-utils.ts`)

**Purpose**: Provide helper functions to construct OG image URLs

**New Functions**:

```typescript
/**
 * Constructs dynamic OG image URL
 */
function buildOGImageUrl(params: {
  title: string;
  locale: string;
  type?: "default" | "blog" | "resource";
}): string;

/**
 * Enhanced metadata generator with dynamic images
 */
function generatePageMetadata(params: GenerateMetadataParams): Metadata;
```

**Implementation Details**:

- `buildOGImageUrl` encodes parameters and constructs the `/api/og` URL
- Updated `generatePageMetadata` to use dynamic images by default
- Falls back to static image if title is not provided
- Properly encodes special characters in URLs

### 3. Updated Layout Metadata (`app/[locale]/layout.tsx`)

**Purpose**: Integrate dynamic OG images into the root layout

**Changes Required**:

- Import `buildOGImageUrl` from metadata utilities
- Construct dynamic image URL using site title and locale
- Update `openGraph.images` and `twitter.images` arrays
- Maintain all existing metadata fields

**Example Integration**:

```typescript
const ogImage = buildOGImageUrl({
  title: metadata.title,
  locale,
  type: 'default'
});

// Use in metadata object
openGraph: {
  images: [{ url: ogImage, width: 1200, height: 630, ... }]
}
```

### 4. Blog Post Metadata (`app/[locale]/blog/[slug]/page.tsx`)

**Purpose**: Generate unique OG images for each blog post

**Implementation Strategy**:

- Use `generateMetadata` function (Next.js convention)
- Extract post title from blog data
- Call `buildOGImageUrl` with `type: 'blog'`
- Include locale-specific title

**Example**:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getBlogPost(slug, locale);

  return generateBlogMetadata({
    title: post.title,
    description: post.excerpt,
    locale,
    slug,
    image: buildOGImageUrl({
      title: post.title,
      locale,
      type: "blog",
    }),
    // ... other metadata
  });
}
```

### 5. Resource Page Metadata (`app/[locale]/recursos/[slug]/page.tsx`)

**Purpose**: Generate unique OG images for each resource guide

**Implementation Strategy**:

- Similar to blog posts but with `type: 'resource'`
- Extract resource title from resource data
- Use locale-specific content

## Data Models

### OG Image Template Data

```typescript
interface OGTemplateData {
  title: string; // Main title text (max 80 chars)
  locale: "es" | "en"; // Language for any locale-specific text
  type: "default" | "blog" | "resource";

  // Optional branding elements
  siteName?: string; // "Chill Chess Club"
  tagline?: string; // Locale-specific tagline

  // Visual styling
  backgroundColor: string; // Hex color
  textColor: string; // Hex color
  accentColor: string; // Hex color for highlights
}
```

### Image Generation Configuration

```typescript
interface ImageConfig {
  width: 1200;
  height: 630;
  fonts: Array<{
    name: string;
    data: ArrayBuffer;
    weight: number;
    style: "normal" | "italic";
  }>;
  headers: {
    "Content-Type": "image/png";
    "Cache-Control": string;
  };
}
```

## Error Handling

### API Route Error Handling

1. **Missing Parameters**: Use sensible defaults

   - No title → Use site name
   - Invalid locale → Default to 'en'
   - Invalid type → Default to 'default'

2. **Font Loading Failures**:

   - Catch font fetch errors
   - Fall back to system fonts
   - Log error for monitoring

3. **Image Generation Failures**:
   - Return 500 status with error message
   - Log detailed error information
   - Metadata provider falls back to static image

### Metadata Provider Error Handling

1. **API Route Unavailable**:

   - Use static fallback image (`/og-image.jpg`)
   - Log warning for monitoring

2. **Invalid Data**:
   - Sanitize title text (remove special characters)
   - Truncate long titles
   - Validate locale values

## Testing Strategy

### Unit Tests

1. **URL Construction Tests** (`lib/metadata-utils.test.ts`):

   - Test `buildOGImageUrl` with various parameters
   - Verify proper URL encoding
   - Test special character handling
   - Validate query parameter construction

2. **Metadata Generation Tests**:
   - Test `generatePageMetadata` output structure
   - Verify fallback behavior
   - Test locale-specific metadata

### Integration Tests

1. **API Route Tests** (`app/api/og/route.test.ts`):

   - Test image generation with valid parameters
   - Test default parameter handling
   - Verify response headers
   - Test image dimensions (1200x630)
   - Validate PNG output format

2. **End-to-End Tests**:
   - Test OG image rendering in actual pages
   - Verify social media preview using debugging tools
   - Test both Spanish and English locales
   - Validate blog and resource page images

### Manual Testing

1. **Social Media Validators**:

   - Facebook Sharing Debugger
   - Twitter Card Validator
   - LinkedIn Post Inspector
   - WhatsApp link preview

2. **Visual Regression**:
   - Screenshot comparison of generated images
   - Verify text truncation
   - Check color consistency
   - Validate responsive text sizing

## Performance Considerations

### Caching Strategy

1. **CDN Caching**:

   - Set `Cache-Control: public, max-age=31536000, immutable` for generated images
   - Images are content-addressed (same params = same URL)
   - Vercel Edge Network caches responses globally

2. **Font Caching**:
   - Load fonts once at module initialization
   - Store in memory for reuse across requests
   - Use Vercel's font optimization

### Generation Performance

1. **Target Metrics**:

   - Image generation: < 500ms (p95)
   - Total response time: < 1000ms (p95)
   - Image file size: < 300KB

2. **Optimization Techniques**:
   - Use efficient font formats (woff2)
   - Minimize font subsets (Latin only)
   - Optimize image complexity (simple gradients)
   - Avoid heavy computations in render

### Monitoring

1. **Key Metrics**:

   - API route response time
   - Error rate
   - Cache hit ratio
   - Image file sizes

2. **Logging**:
   - Log all image generation requests
   - Track parameter usage patterns
   - Monitor error conditions

## Design Decisions and Rationales

### Decision 1: Use @vercel/og Instead of Canvas/Sharp

**Rationale**:

- `@vercel/og` is optimized for Vercel's Edge Runtime
- Simpler API using JSX and Tailwind CSS
- Better performance on serverless functions
- No need for external dependencies or system libraries
- Native support in Next.js ecosystem

### Decision 2: Query Parameters vs. Path Parameters

**Rationale**:

- Query parameters provide more flexibility
- Easier to add new parameters without route changes
- Better for optional parameters (type, locale)
- Simpler URL construction in metadata functions

### Decision 3: Three Template Types (default, blog, resource)

**Rationale**:

- Provides visual distinction between content types
- Allows for future customization per type
- Keeps implementation simple (not over-engineered)
- Matches the site's content structure

### Decision 4: Client-Side vs. Server-Side Generation

**Rationale**:

- Server-side generation ensures images are ready for crawlers
- No client-side JavaScript required
- Better SEO and social media compatibility
- Leverages Next.js App Router's server components

### Decision 5: Fallback to Static Image

**Rationale**:

- Provides reliability if API route fails
- Ensures social media previews always work
- Graceful degradation strategy
- Maintains existing static image as safety net

## Visual Design Specifications

### Color Palette

Based on the existing Chill Chess Club branding (Neumorphic Sunset theme):

```typescript
const colors = {
  // Primary brand colors (Sunset palette)
  sunset: "#f97316", // Sunset orange (primary)
  rose: "#f43f5e", // Rose pink (secondary)
  purple: "#a855f7", // Purple (accent)
  amber: "#f59e0b", // Amber gold (accent)

  // Background colors
  warmGray900: "#1c1917", // Main dark background
  warmGray800: "#292524", // Card background
  warmGray950: "#0c0a09", // Darkest background

  // Text colors
  textPrimary: "#fafaf9", // warmGray-50 (lightest)
  textSecondary: "#e7e5e4", // warmGray-200

  // Gradient backgrounds
  bgGradientSunset: "linear-gradient(135deg, #f97316 0%, #f43f5e 100%)",
  bgGradientDark: "linear-gradient(135deg, #1c1917 0%, #292524 100%)",
  bgGradientPurple: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)",
};
```

### Typography

```typescript
const typography = {
  title: {
    fontFamily: "Inter",
    fontSize: "72px",
    fontWeight: 700,
    lineHeight: 1.2,
    maxLines: 2,
  },
  subtitle: {
    fontFamily: "Inter",
    fontSize: "32px",
    fontWeight: 400,
    lineHeight: 1.4,
  },
  siteName: {
    fontFamily: "Inter",
    fontSize: "28px",
    fontWeight: 600,
  },
};
```

### Layout Grid

```
┌─────────────────────────────────────────────────────┐
│  1200px × 630px                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │ Padding: 60px                                 │ │
│  │ Background: Sunset gradient (#f97316→#f43f5e) │ │
│  │                                               │ │
│  │  [🏰 Logo Icon]  Chill Chess Club            │ │
│  │  (warmGray-50 text)                           │ │
│  │                                               │ │
│  │  ┌─────────────────────────────────────────┐ │ │
│  │  │                                         │ │ │
│  │  │  [Title Text - Max 2 Lines]            │ │ │
│  │  │  (warmGray-50, bold, 72px)             │ │ │
│  │  │                                         │ │ │
│  │  └─────────────────────────────────────────┘ │ │
│  │                                               │ │
│  │  [📝 Blog Badge] or [📚 Resource Badge]      │ │
│  │  (amber accent with warmGray-900 bg)          │ │
│  │                                               │ │
│  └───────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

## Migration Path

### Phase 1: API Route Implementation

1. Install `@vercel/og` dependency
2. Create `/app/api/og/route.tsx`
3. Implement basic image generation with default template
4. Test locally with various parameters

### Phase 2: Utility Functions

1. Update `lib/metadata-utils.ts` with `buildOGImageUrl`
2. Add helper functions for URL construction
3. Write unit tests for utilities

### Phase 3: Layout Integration

1. Update `app/[locale]/layout.tsx` to use dynamic images
2. Test home page OG tags
3. Validate with social media debuggers

### Phase 4: Content Pages

1. Update blog post pages with dynamic images
2. Update resource pages with dynamic images
3. Test all dynamic routes

### Phase 5: Cleanup

1. Keep static `og-image.jpg` as fallback
2. Update documentation
3. Remove obsolete documentation about manual image creation

## Future Enhancements

1. **Advanced Templates**:

   - Author photos for blog posts
   - Chess position diagrams
   - Course-specific branding

2. **Dynamic Backgrounds**:

   - Gradient variations based on content type
   - Chess-themed patterns

3. **Localized Branding**:

   - Language-specific taglines
   - Locale-specific color schemes

4. **Analytics Integration**:

   - Track which images get the most engagement
   - A/B test different designs

5. **Admin Interface**:
   - Preview OG images before publishing
   - Custom image overrides per post
