# Implementation Plan

- [x] 1. Set up @vercel/og and create API route foundation

  - Install @vercel/og package as a project dependency
  - Create the `/app/api/og/route.tsx` file with basic structure
  - Implement GET handler that accepts query parameters (title, locale, type)
  - Return a simple test image to verify the setup works
  - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [x] 2. Implement dynamic image generation with templates

  - [x] 2.1 Create the default template for home page and general pages

    - Design JSX template with Tailwind-style inline styles
    - Implement gradient background matching brand colors (Sunset #f97316 to Rose #f43f5e)
    - Add site name "Chill Chess Club" with proper typography
    - Render dynamic title text with proper sizing (72px, bold)
    - Implement text truncation for titles exceeding 80 characters
    - Set image dimensions to exactly 1200x630 pixels
    - _Requirements: 1.3, 2.5, 3.3, 3.5_

  - [x] 2.2 Create the blog template variant

    - Extend default template with blog-specific styling
    - Add "Blog" badge or indicator in the design
    - Adjust layout to accommodate blog post titles
    - Ensure proper text wrapping for multi-line titles
    - _Requirements: 1.1, 1.2, 2.5_

  - [x] 2.3 Create the resource template variant

    - Extend default template with resource-specific styling
    - Add "Resource" or "Guide" badge in the design
    - Adjust visual elements to distinguish from blog posts
    - _Requirements: 3.2, 2.5_

  - [x] 2.4 Implement locale-specific customization

    - Add conditional rendering based on locale parameter
    - Include locale-specific taglines or text if needed
    - Ensure proper font rendering for Spanish characters
    - _Requirements: 1.4, 2.3_

  - [x] 2.5 Add font loading and optimization

    - Fetch Inter font from Google Fonts or local source
    - Configure font weights (400, 600, 700)
    - Implement error handling for font loading failures
    - Add fallback to system fonts if font loading fails
    - _Requirements: 2.5, 5.4_

  - [x] 2.6 Implement caching headers for performance

    - Set Cache-Control header to "public, max-age=31536000, immutable"
    - Add appropriate Content-Type header (image/png)
    - _Requirements: 5.1, 5.2_

- [x] 3. Create utility functions for OG image URL construction

  - [x] 3.1 Implement buildOGImageUrl function in lib/metadata-utils.ts

    - Accept parameters: title, locale, type
    - Construct URL pointing to /api/og endpoint
    - Properly encode query parameters (handle special characters)
    - Return fully qualified URL with site domain
    - _Requirements: 4.1, 4.2_

  - [x] 3.2 Update generatePageMetadata function

    - Integrate buildOGImageUrl into existing metadata generation
    - Use dynamic image URL by default
    - Implement fallback to static /og-image.jpg when title is missing
    - Ensure both openGraph.images and twitter.images use the dynamic URL
    - _Requirements: 4.3, 4.4, 1.5_

  - [x] 3.3 Update generateBlogMetadata function

    - Call buildOGImageUrl with type: 'blog'
    - Pass blog post title and locale
    - Ensure proper integration with existing blog metadata
    - _Requirements: 1.1, 4.2_

  - [x] 3.4 Update generateResourceMetadata function

    - Call buildOGImageUrl with type: 'resource'
    - Pass resource title and locale
    - Ensure proper integration with existing resource metadata
    - _Requirements: 3.2, 4.2_

- [x] 4. Integrate dynamic OG images into layout and pages

  - [x] 4.1 Update root layout metadata (app/[locale]/layout.tsx)

    - Import buildOGImageUrl from metadata utilities
    - Construct dynamic OG image URL using site title and locale
    - Replace static og-image.jpg reference with dynamic URL
    - Preserve all existing metadata fields (keywords, authors, etc.)
    - Test that metadata generates correctly for both /es and /en routes
    - _Requirements: 3.1, 3.3, 3.4, 4.3_

  - [x] 4.2 Identify and update blog post pages

    - Locate blog post page file (app/[locale]/blog/[slug]/page.tsx)
    - Implement or update generateMetadata function
    - Use generateBlogMetadata with dynamic image URL
    - Extract post title from blog data source
    - Test with multiple blog post slugs in both locales
    - _Requirements: 1.1, 1.4, 4.2, 4.4_

  - [x] 4.3 Identify and update resource pages

    - Locate resource page file (app/[locale]/recursos/[slug]/page.tsx)
    - Implement or update generateMetadata function
    - Use generateResourceMetadata with dynamic image URL
    - Extract resource title from resource data source
    - Test with multiple resource slugs in both locales
    - _Requirements: 3.2, 4.2, 4.4_

- [x] 5. Testing and validation

  - [x] 5.1 Test API route functionality

    - Test /api/og endpoint with various title parameters
    - Test with different locale values (es, en)
    - Test with different type values (default, blog, resource)
    - Verify image dimensions are exactly 1200x630
    - Verify response Content-Type is image/png
    - Test with missing or invalid parameters
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 1.3_

  - [x] 5.2 Validate social media previews

    - Test home page OG tags using Facebook Sharing Debugger
    - Test blog post OG tags using Twitter Card Validator
    - Test resource page OG tags using LinkedIn Post Inspector
    - Verify images display correctly in WhatsApp link previews
    - Test both Spanish (/es) and English (/en) routes
    - _Requirements: 1.1, 3.1, 3.2, 1.4_

  - [x] 5.3 Performance testing

    - Measure API route response time (target < 1000ms)
    - Verify generated image file sizes (target < 500KB)
    - Test cache headers are properly set
    - Verify CDN caching behavior on Vercel
    - _Requirements: 5.1, 5.2, 5.3, 5.5_

  - [x] 5.4 Error handling validation

    - Test behavior when API route is unavailable
    - Verify fallback to static image works correctly
    - Test with extremely long titles (> 200 characters)
    - Test with special characters in titles (emojis, accents)
    - Verify error logging for debugging
    - _Requirements: 1.5, 1.2_

- [x] 6. Documentation and cleanup

  - Update existing OG documentation files to reflect dynamic approach
  - Document the new API route parameters and usage
  - Add code comments explaining template customization
  - Create examples of how to use buildOGImageUrl in new pages
  - Update README with information about dynamic OG images
  - _Requirements: All requirements (documentation support)_
