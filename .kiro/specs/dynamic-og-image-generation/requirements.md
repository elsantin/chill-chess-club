# Requirements Document

## Introduction

This feature implements dynamic Open Graph (OG) image generation for a Next.js application using the App Router architecture. The system will replace the current static OG image approach with a dynamic solution that generates personalized preview images for each page, blog post, and resource. The implementation must support multi-language content (Spanish and English) and integrate seamlessly with the existing Next.js metadata API.

## Glossary

- **OG System**: The Open Graph image generation system being implemented
- **Image Generator**: The API route component that creates dynamic OG images using @vercel/og
- **Metadata Provider**: The Next.js metadata configuration that supplies OG tags to pages
- **Content Page**: Any page in the application that requires a unique OG image (blog posts, resources, home page)
- **Locale Route**: A URL path segment indicating language (either /es or /en)
- **Static Fallback**: The existing og-image.jpg file used when dynamic generation is unavailable

## Requirements

### Requirement 1

**User Story:** As a content creator, I want each blog post to have its own unique Open Graph image with the post title, so that social media shares are visually distinctive and accurately represent the content.

#### Acceptance Criteria

1. WHEN a blog post page is rendered, THE OG System SHALL generate a unique image containing the post title in the correct language
2. WHEN the blog post title exceeds 80 characters, THE OG System SHALL truncate the text with ellipsis to maintain visual layout
3. THE OG System SHALL render the generated image at exactly 1200x630 pixels to comply with Open Graph specifications
4. WHERE a blog post exists in both Spanish and English, THE OG System SHALL generate separate images for each locale route
5. IF the Image Generator fails to create an image, THEN THE Metadata Provider SHALL fall back to the static fallback image

### Requirement 2

**User Story:** As a developer, I want an API route that generates OG images dynamically using @vercel/og, so that I can serve personalized images without manual creation.

#### Acceptance Criteria

1. THE OG System SHALL expose an API endpoint at /api/og that accepts query parameters for customization
2. WHEN the /api/og endpoint receives a request with a "title" parameter, THE Image Generator SHALL render an image containing that title text
3. WHEN the /api/og endpoint receives a request with a "locale" parameter, THE Image Generator SHALL apply language-specific styling or text
4. THE Image Generator SHALL return the generated image with a Content-Type header of "image/png"
5. THE Image Generator SHALL use Tailwind CSS utility classes for styling the image layout

### Requirement 3

**User Story:** As a site administrator, I want the home page and main sections to have branded OG images, so that the site maintains a professional appearance when shared on social media.

#### Acceptance Criteria

1. THE OG System SHALL generate a home page OG image that includes the site title from the locale-specific translation files
2. WHEN a main section page (like Resources) is accessed, THE OG System SHALL generate an image with the section title
3. THE Metadata Provider SHALL include the dynamically generated image URL in the og:image meta tag
4. THE Metadata Provider SHALL include the dynamically generated image URL in the twitter:image meta tag
5. THE OG System SHALL maintain consistent branding elements (colors, fonts) across all generated images

### Requirement 4

**User Story:** As a developer, I want the existing layout.tsx metadata configuration to integrate with the new dynamic image system, so that all pages automatically receive the correct OG tags without manual updates.

#### Acceptance Criteria

1. THE Metadata Provider SHALL construct image URLs pointing to the /api/og endpoint with appropriate query parameters
2. WHEN a Content Page is rendered, THE Metadata Provider SHALL pass the page title and locale to the Image Generator URL
3. THE Metadata Provider SHALL preserve all existing OG meta tags (og:title, og:description, og:type, og:url)
4. THE OG System SHALL not require modifications to individual page components to enable dynamic images
5. WHERE the Static Fallback exists, THE Metadata Provider SHALL use it as the default when no dynamic parameters are provided

### Requirement 5

**User Story:** As a performance-conscious developer, I want generated OG images to be optimized and cached, so that social media crawlers receive fast responses and server load is minimized.

#### Acceptance Criteria

1. THE Image Generator SHALL set appropriate cache headers to enable CDN caching of generated images
2. THE Image Generator SHALL complete image generation within 2000 milliseconds for 95% of requests
3. WHEN the same image parameters are requested multiple times, THE OG System SHALL serve cached versions when available
4. THE Image Generator SHALL use efficient font loading to minimize generation time
5. THE OG System SHALL generate images with a file size under 500KB to ensure fast social media crawler downloads
