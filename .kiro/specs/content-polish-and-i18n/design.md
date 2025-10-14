# Design Document

## Overview

Este documento detalla el diseño técnico para implementar las tres mejoras finales del sitio Chill Chess Club:

1. **Content Formatting System**: Sistema de estilos tipográficos para el contenido de artículos y recursos
2. **About Section Spacing Adjustment**: Ajuste de espaciado en la sección "Sobre Mí"
3. **Bilingual Content Architecture**: Arquitectura para soportar contenido de blog y recursos en español e inglés

El diseño prioriza la simplicidad, mantenibilidad y consistencia con la estética neumórfica existente del sitio.

---

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    User Interface Layer                      │
├─────────────────────────────────────────────────────────────┤
│  Blog/Resource Pages                                         │
│  ├─ Hero Section (existing, no changes)                     │
│  └─ Article Content (new: formatted with prose styles)      │
├─────────────────────────────────────────────────────────────┤
│  About Section (adjusted spacing)                            │
├─────────────────────────────────────────────────────────────┤
│                    Data Layer                                │
├─────────────────────────────────────────────────────────────┤
│  Bilingual Content System                                    │
│  ├─ blog-data.ts (refactored for i18n)                      │
│  ├─ resources-data.ts (refactored for i18n)                 │
│  └─ Content selection based on locale                       │
└─────────────────────────────────────────────────────────────┘
```

---

## Components and Interfaces

### 1. Content Formatting System

#### Approach: Tailwind Typography Plugin + Custom Prose Styles

**Decision Rationale:**

- Tailwind's `@tailwindcss/typography` plugin provides a robust foundation for prose styling
- Custom configuration allows us to match the neumorphic sunset aesthetic
- Minimal code changes required in components
- Consistent styling across all content

#### Implementation Strategy

**Option A: Tailwind Typography Plugin (RECOMMENDED)**

```typescript
// tailwind.config.ts
module.exports = {
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Base prose styles
            color: theme("colors.warmGray.200"),
            maxWidth: "none",

            // Headings
            h2: {
              color: theme("colors.warmGray.100"),
              fontFamily: theme("fontFamily.playfair"),
              fontWeight: "700",
              fontSize: theme("fontSize.3xl"),
              marginTop: theme("spacing.12"),
              marginBottom: theme("spacing.6"),
            },
            h3: {
              color: theme("colors.warmGray.100"),
              fontFamily: theme("fontFamily.playfair"),
              fontWeight: "600",
              fontSize: theme("fontSize.2xl"),
              marginTop: theme("spacing.8"),
              marginBottom: theme("spacing.4"),
            },

            // Paragraphs
            p: {
              color: theme("colors.warmGray.200"),
              lineHeight: theme("lineHeight.relaxed"),
              marginBottom: theme("spacing.4"),
            },

            // Lists
            ul: {
              color: theme("colors.warmGray.200"),
              listStyleType: "disc",
              paddingLeft: theme("spacing.6"),
              marginBottom: theme("spacing.4"),
            },
            ol: {
              color: theme("colors.warmGray.200"),
              listStyleType: "decimal",
              paddingLeft: theme("spacing.6"),
              marginBottom: theme("spacing.4"),
            },
            li: {
              color: theme("colors.warmGray.200"),
              marginBottom: theme("spacing.2"),
            },

            // Strong and emphasis
            strong: {
              color: theme("colors.warmGray.100"),
              fontWeight: "700",
            },
            em: {
              color: theme("colors.warmGray.200"),
              fontStyle: "italic",
            },

            // Blockquotes
            blockquote: {
              borderLeftColor: theme("colors.sunset.500"),
              borderLeftWidth: "4px",
              paddingLeft: theme("spacing.6"),
              fontStyle: "italic",
              color: theme("colors.warmGray.200"),
              backgroundColor: theme("colors.warmGray.900"),
              padding: theme("spacing.6"),
              borderRadius: theme("borderRadius.lg"),
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.6"),
            },

            // Links (if any in content)
            a: {
              color: theme("colors.sunset.400"),
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.sunset.300"),
              },
            },
          },
        },
      }),
    },
  },
};
```

**Component Usage:**

```tsx
// app/[locale]/blog/[slug]/page.tsx
<article className="prose prose-lg prose-invert max-w-none">
  <div dangerouslySetInnerHTML={{ __html: post.content }} />
</article>
```

**Option B: Custom CSS Classes (Alternative)**

If we don't want to add the typography plugin, we can create custom utility classes:

```css
/* app/globals.css */
.article-content h2 {
  @apply text-3xl font-playfair font-bold text-warmGray-100 mt-12 mb-6;
}

.article-content h3 {
  @apply text-2xl font-playfair font-semibold text-warmGray-100 mt-8 mb-4;
}

.article-content p {
  @apply text-warmGray-200 leading-relaxed mb-4;
}

/* ... etc */
```

**Recommendation:** Use Option A (Tailwind Typography) for better maintainability and consistency.

#### Component Changes Required

**Files to modify:**

1. `app/[locale]/blog/[slug]/page.tsx` - Add prose classes to content container
2. `app/[locale]/recursos/[slug]/page.tsx` - Add prose classes to content container
3. `tailwind.config.ts` - Add typography plugin and custom configuration
4. `package.json` - Add `@tailwindcss/typography` dependency

---

### 2. About Section Spacing Adjustment

#### Current State Analysis

```tsx
// Current: app/[locale]/components/About.tsx (line 48)
<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
  {/* Image */}
  <motion.div>...</motion.div>

  {/* Text Content */}
  <motion.div>...</motion.div>
</div>
```

#### Proposed Change

```tsx
// Proposed: Reduce gap from 12 to 8
<div className="grid md:grid-cols-2 gap-8 items-center mb-16">
  {/* Image */}
  <motion.div>...</motion.div>

  {/* Text Content */}
  <motion.div>...</motion.div>
</div>
```

#### Visual Impact

- **Desktop (md and up):** Gap reduces from 3rem (48px) to 2rem (32px)
- **Mobile:** No change (grid stacks vertically, gap applies to vertical spacing)
- **Composition:** Photo appears more integrated with text, creating a tighter visual unit

#### Testing Considerations

- Verify spacing looks good on:
  - Desktop (1920px, 1440px, 1280px)
  - Tablet (768px, 1024px)
  - Mobile (375px, 414px)
- Ensure text remains readable and not cramped
- Check that decorative glow effect doesn't overlap text

---

### 3. Bilingual Content Architecture

#### Current Data Structure

```typescript
// Current: lib/blog-data.ts
export interface BlogPost {
  id: string;
  slug: string;
  title: string; // Only Spanish
  excerpt: string; // Only Spanish
  content: string; // Only Spanish
  date: string;
  author: string;
  image: string;
  category?: string;
  readTime?: string;
}

export const blogPosts: BlogPost[] = [
  // Array of Spanish posts
];
```

#### Proposed Data Structure (Option A: Nested Locale Objects)

```typescript
// Proposed: lib/blog-data.ts
export interface LocalizedContent {
  es: string;
  en: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: LocalizedContent;
  excerpt: LocalizedContent;
  content: LocalizedContent;
  date: string;
  author: string;
  image: string;
  category?: LocalizedContent; // Category names may differ
  readTime?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "echoes-from-the-board",
    title: {
      es: "Ecos del Tablero: Una Crónica del Ajedrez y su Alma Humana",
      en: "Echoes from the Board: A Chronicle of Chess and its Human Soul",
    },
    excerpt: {
      es: "Sesenta y cuatro escaques...",
      en: "Sixty-four squares...",
    },
    content: {
      es: "<p>Existen juegos diseñados...</p>",
      en: "<p>There are games designed...</p>",
    },
    date: "2025-05-14",
    author: "Santiagovskiy",
    image: "/images/blog-1-echoes-from-the-board.webp",
    category: {
      es: "Historia",
      en: "History",
    },
    readTime: "15 min",
  },
  // ...
];
```

#### Helper Functions

```typescript
// lib/blog-data.ts
import { useLocale } from "next-intl";

export function getBlogPost(
  slug: string,
  locale: string = "es"
): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getLocalizedBlogPost(slug: string, locale: string = "es") {
  const post = getBlogPost(slug);
  if (!post) return undefined;

  return {
    ...post,
    title: post.title[locale as "es" | "en"],
    excerpt: post.excerpt[locale as "es" | "en"],
    content: post.content[locale as "es" | "en"],
    category: post.category?.[locale as "es" | "en"],
  };
}

export function getRecentBlogPosts(count: number = 3, locale: string = "es") {
  return blogPosts.slice(0, count).map((post) => ({
    ...post,
    title: post.title[locale as "es" | "en"],
    excerpt: post.excerpt[locale as "es" | "en"],
    content: post.content[locale as "es" | "en"],
    category: post.category?.[locale as "es" | "en"],
  }));
}
```

#### Alternative Approach (Option B: Separate Files)

```
lib/
├── blog-data.es.ts
├── blog-data.en.ts
├── resources-data.es.ts
└── resources-data.en.ts
```

**Pros:**

- Cleaner separation of concerns
- Easier to manage large content
- Simpler data structure

**Cons:**

- More files to maintain
- Need to keep slugs synchronized
- More complex import logic

**Recommendation:** Use Option A (Nested Locale Objects) for better maintainability and single source of truth.

#### Component Integration

```tsx
// app/[locale]/blog/[slug]/page.tsx
import { useLocale } from "next-intl";
import { getLocalizedBlogPost } from "@/lib/blog-data";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const locale = params.locale;
  const post = getLocalizedBlogPost(params.slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      <div className="prose prose-lg prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}
```

---

## Data Models

### Updated TypeScript Interfaces

```typescript
// lib/blog-data.ts
export interface LocalizedContent {
  es: string;
  en: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: LocalizedContent;
  excerpt: LocalizedContent;
  content: LocalizedContent;
  date: string;
  author: string;
  image: string;
  category?: LocalizedContent;
  readTime?: string;
}

// lib/resources-data.ts
export interface Resource {
  id: string;
  slug: string;
  title: LocalizedContent;
  excerpt: LocalizedContent;
  content: LocalizedContent;
  date: string;
  author: string;
  image: string;
  category: LocalizedContent;
  difficulty: LocalizedContent; // "Principiante" / "Beginner"
  readTime?: string;
}
```

---

## Error Handling

### Content Formatting

- **Missing content:** If `content` field is empty, show a placeholder message
- **Invalid HTML:** Sanitize HTML content to prevent XSS (consider using DOMPurify if needed)
- **Broken styles:** Fallback to basic text rendering if prose styles fail to load

### i18n

- **Missing translation:** Fallback to Spanish if English translation is not available
- **Invalid locale:** Default to 'es' if locale is not 'es' or 'en'
- **Missing post:** Show 404 page if slug doesn't exist

```typescript
export function getLocalizedBlogPost(slug: string, locale: string = "es") {
  const post = getBlogPost(slug);
  if (!post) return undefined;

  // Fallback to Spanish if English not available
  const safeLocale = locale === "en" || locale === "es" ? locale : "es";

  return {
    ...post,
    title: post.title[safeLocale] || post.title.es,
    excerpt: post.excerpt[safeLocale] || post.excerpt.es,
    content: post.content[safeLocale] || post.content.es,
    category: post.category?.[safeLocale] || post.category?.es,
  };
}
```

---

## Testing Strategy

### Content Formatting Testing

**Manual Testing:**

1. Navigate to each blog post and resource
2. Verify all content elements render with proper styles:
   - H2 headings (large, Playfair, proper spacing)
   - H3 headings (medium, Playfair, proper spacing)
   - Paragraphs (warmGray-200, relaxed leading, spacing)
   - Lists (bullets/numbers, indentation, spacing)
   - Strong/em (proper weight/style)
   - Blockquotes (border, background, padding)
3. Test on multiple screen sizes (mobile, tablet, desktop)
4. Verify hero section remains unchanged

**Visual Regression:**

- Take screenshots of hero sections before/after to ensure no changes
- Compare content area before/after to verify improvements

### About Section Testing

**Manual Testing:**

1. View About section on desktop (1920px, 1440px, 1280px)
2. Verify gap is visually smaller but not cramped
3. View on tablet (768px, 1024px)
4. View on mobile (375px, 414px)
5. Ensure decorative elements don't overlap

**Measurement:**

- Use browser dev tools to verify gap is 2rem (32px) on desktop
- Verify mobile stacking still works correctly

### i18n Testing

**Functional Testing:**

1. Switch language to English
2. Navigate to blog listing - verify English titles/excerpts
3. Click on a blog post - verify English content
4. Navigate to resources listing - verify English titles/excerpts
5. Click on a resource - verify English content
6. Switch back to Spanish - verify Spanish content
7. Test direct URL access with locale prefix (e.g., `/en/blog/echoes-from-the-board`)

**Data Integrity:**

- Verify all 3 blog posts have complete English translations
- Verify all 3 resources have complete English translations
- Check that slugs remain the same across languages
- Verify metadata (dates, authors, images) are consistent

**Edge Cases:**

- Test with invalid locale in URL
- Test with non-existent slug
- Test with missing translation (should fallback to Spanish)

---

## Performance Considerations

### Content Formatting

- **Impact:** Minimal - only adds CSS classes
- **Bundle size:** +~10KB if using Tailwind Typography plugin
- **Runtime:** No performance impact

### About Section

- **Impact:** None - only changes a Tailwind class
- **Rendering:** No change in rendering performance

### i18n

- **Impact:** Moderate - data structure becomes larger
- **Bundle size:** Approximately doubles the size of blog-data.ts and resources-data.ts
- **Mitigation:**
  - Content is already client-side, no additional network requests
  - Consider code-splitting if content grows significantly
  - Future: Move to CMS or separate JSON files if needed

**Current estimated sizes:**

- blog-data.ts: ~50KB (Spanish only) → ~100KB (bilingual)
- resources-data.ts: ~40KB (Spanish only) → ~80KB (bilingual)
- Total increase: ~90KB (acceptable for current scale)

---

## Security Considerations

### HTML Content Rendering

**Risk:** XSS attacks through malicious HTML in content field

**Mitigation:**

1. Content is controlled by site owner (not user-generated)
2. Using `dangerouslySetInnerHTML` is acceptable for trusted content
3. If future content comes from external sources, implement HTML sanitization:

```typescript
import DOMPurify from "isomorphic-dompurify";

<div
  className="prose prose-lg prose-invert max-w-none"
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(post.content),
  }}
/>;
```

### Locale Validation

**Risk:** Injection attacks through locale parameter

**Mitigation:**

```typescript
const VALID_LOCALES = ["es", "en"] as const;
type ValidLocale = (typeof VALID_LOCALES)[number];

function isValidLocale(locale: string): locale is ValidLocale {
  return VALID_LOCALES.includes(locale as ValidLocale);
}

// In component
const safeLocale = isValidLocale(params.locale) ? params.locale : "es";
```

---

## Accessibility Considerations

### Content Formatting

- Proper heading hierarchy (h2, h3) for screen readers
- Sufficient color contrast (warmGray-200 on warmGray-950 meets WCAG AA)
- Readable line height and spacing
- Semantic HTML elements (article, section, etc.)

### Language Switching

- Proper `lang` attribute on HTML element
- Clear indication of current language
- Accessible language switcher in header

```tsx
<html lang={locale}>
  <body>
    <article lang={locale}>{/* Content */}</article>
  </body>
</html>
```

---

## Migration Strategy

### Phase 1: Content Formatting (Low Risk)

1. Install Tailwind Typography plugin
2. Configure custom prose styles
3. Add prose classes to blog post page
4. Test and verify
5. Add prose classes to resource page
6. Test and verify

### Phase 2: About Section (Low Risk)

1. Change gap-12 to gap-8 in About.tsx
2. Test on multiple screen sizes
3. Deploy

### Phase 3: i18n (Medium Risk)

1. Update TypeScript interfaces
2. Refactor blog-data.ts with bilingual structure (keep Spanish content)
3. Add English translations for blog posts
4. Update helper functions
5. Update blog components to use locale
6. Test thoroughly
7. Repeat for resources-data.ts
8. Update resource components
9. Test thoroughly
10. Deploy

**Rollback Plan:**

- Each phase is independent and can be rolled back separately
- Git commits should be atomic per phase
- Keep backup of original data files before refactoring

---

## Future Enhancements

### Content Management

- Move content to a headless CMS (Contentful, Sanity, etc.)
- Implement markdown support instead of HTML
- Add content preview functionality

### i18n

- Add more languages (Portuguese, French, etc.)
- Implement automatic translation suggestions
- Add language-specific SEO metadata

### Content Formatting

- Add syntax highlighting for chess notation
- Implement interactive chess diagrams
- Add table of contents for long articles

---

## Design Decisions Summary

| Decision           | Chosen Approach            | Rationale                                  |
| ------------------ | -------------------------- | ------------------------------------------ |
| Content Formatting | Tailwind Typography Plugin | Robust, maintainable, consistent           |
| About Spacing      | gap-12 → gap-8             | Minimal change, better visual balance      |
| i18n Structure     | Nested locale objects      | Single source of truth, easier maintenance |
| Content Storage    | TypeScript files           | Simple, no infrastructure needed           |
| Fallback Strategy  | Spanish as default         | Original language, always complete         |
| HTML Rendering     | dangerouslySetInnerHTML    | Acceptable for trusted content             |

---

## Dependencies

### New Dependencies

```json
{
  "@tailwindcss/typography": "^0.5.10"
}
```

### Optional Dependencies (if sanitization needed)

```json
{
  "isomorphic-dompurify": "^2.9.0",
  "@types/dompurify": "^3.0.5"
}
```

---

## Documentation Updates Needed

1. **README.md**: Add note about bilingual content structure
2. **CONTRIBUTING.md** (if exists): Guidelines for adding new content in both languages
3. **docs/CONTENT_GUIDE.md** (new): How to add/edit blog posts and resources
4. **docs/PROJECT_STATUS.md** (update): Reflect completion of these features
