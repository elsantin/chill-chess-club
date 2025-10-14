# Implementation Plan

## Overview

Este plan de implementación divide el trabajo en tareas discretas y manejables, priorizando cambios de bajo riesgo primero y construyendo incrementalmente hacia las funcionalidades más complejas.

---

## Task List

- [x] 1. Setup: Install Tailwind Typography Plugin

  - Install `@tailwindcss/typography` package via npm
  - Verify installation in package.json
  - _Requirements: 1.1, 1.2_

- [x] 2. Configure Custom Prose Styles for Neumorphic Aesthetic

  - [x] 2.1 Add typography plugin to tailwind.config.ts

    - Add plugin to plugins array
    - Create custom typography theme configuration
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.8_

  - [x] 2.2 Configure heading styles (h2, h3)

    - Set Playfair Display font family
    - Configure font sizes (3xl for h2, 2xl for h3)
    - Set warmGray-100 color
    - Configure spacing (mt-12/mb-6 for h2, mt-8/mb-4 for h3)
    - _Requirements: 1.3_

  - [x] 2.3 Configure paragraph styles

    - Set warmGray-200 color (#e7e5e4)
    - Set leading-relaxed line height
    - Configure mb-4 spacing
    - _Requirements: 1.4_

  - [x] 2.4 Configure list styles (ul, ol, li)

    - Set warmGray-200 color
    - Configure list style types (disc for ul, decimal for ol)
    - Set padding-left for indentation
    - Configure spacing between items
    - _Requirements: 1.5_

  - [x] 2.5 Configure strong and emphasis styles

    - Set strong to warmGray-100 with font-bold
    - Set em to italic with warmGray-200
    - _Requirements: 1.6_

  - [x] 2.6 Configure blockquote styles

    - Set sunset-500 left border (4px)
    - Configure warmGray-900 background
    - Set padding and border radius
    - Configure spacing
    - _Requirements: 1.8_

  - [x] 2.7 Configure link styles (if present in content)

    - Set sunset-400 color with underline
    - Configure hover state (sunset-300)
    - _Requirements: 1.1_

- [x] 3. Apply Prose Styles to Blog Post Pages

  - [x] 3.1 Update blog post page component

    - Open `app/[locale]/blog/[slug]/page.tsx`
    - Locate the content rendering section (after hero/header)
    - Wrap content div with prose classes: `prose prose-lg prose-invert max-w-none`
    - Ensure hero section (image, title, metadata) remains unchanged
    - _Requirements: 1.1, 1.9, 1.10_

  - [x] 3.2 Test blog post formatting

    - Navigate to each of the 3 blog posts
    - Verify hero section is unchanged
    - Verify content body has proper formatting
    - Test on desktop, tablet, and mobile
    - _Requirements: 1.7, 1.11_

- [x] 4. Apply Prose Styles to Resource Pages

  - [x] 4.1 Update resource page component

    - Open `app/[locale]/recursos/[slug]/page.tsx`
    - Locate the content rendering section (after hero/header)
    - Wrap content div with prose classes: `prose prose-lg prose-invert max-w-none`
    - Ensure hero section remains unchanged
    - _Requirements: 1.2, 1.9, 1.10_

  - [x] 4.2 Test resource formatting

    - Navigate to each of the 3 resources
    - Verify hero section is unchanged
    - Verify content body has proper formatting
    - Test on desktop, tablet, and mobile
    - _Requirements: 1.7, 1.11_

- [x] 5. Adjust About Section Spacing

  - [x] 5.1 Update About component spacing

    - Open `app/[locale]/components/About.tsx`
    - Locate the grid container (line ~48)
    - Change `gap-12` to `gap-8`
    - _Requirements: 2.1, 2.2_

  - [x] 5.2 Test About section on multiple screen sizes

    - Test on desktop (1920px, 1440px, 1280px)
    - Test on tablet (768px, 1024px)
    - Test on mobile (375px, 414px)
    - Verify photo and text are better integrated
    - Verify decorative glow doesn't overlap text
    - _Requirements: 2.3, 2.4, 2.5, 2.6_

- [x] 6. Refactor Data Structure for Bilingual Support

  - [x] 6.1 Update TypeScript interfaces

    - Open `lib/blog-data.ts`
    - Create `LocalizedContent` interface with `es` and `en` properties
    - Update `BlogPost` interface to use `LocalizedContent` for title, excerpt, content, and category
    - _Requirements: 3.10_

  - [x] 6.2 Update blog data with bilingual structure (keep Spanish)

    - Refactor existing blog posts to use nested locale objects
    - Keep all Spanish content in `es` property
    - Add empty `en` properties (to be filled later)
    - Verify no data is lost during refactoring
    - _Requirements: 3.1_

  - [x] 6.3 Create helper functions for blog data

    - Create `getLocalizedBlogPost(slug, locale)` function
    - Update `getBlogPost()` to work with new structure
    - Update `getRecentBlogPosts()` to accept locale parameter
    - Add fallback logic (default to Spanish if English missing)
    - _Requirements: 3.4, 3.6_

  - [x] 6.4 Update blog components to use locale

    - Update `app/[locale]/blog/page.tsx` to pass locale to data functions
    - Update `app/[locale]/blog/[slug]/page.tsx` to use `getLocalizedBlogPost()`
    - Update `BlogCard.tsx` to display localized content
    - Update `BlogPreview.tsx` to display localized content
    - _Requirements: 3.3, 3.4, 3.11_

  - [x] 6.5 Test blog with Spanish locale

    - Navigate to `/es/blog`
    - Verify all blog posts show Spanish content
    - Click on each post and verify Spanish content
    - _Requirements: 3.3, 3.4_

- [ ] 7. Add English Translations for Blog Posts

  - [x] 7.1 Translate "Ecos del Tablero" to English

    - Translate title, excerpt, content, and category
    - Maintain professional but accessible tone
    - Use standard chess terminology in English
    - Add translation to `en` property in blog-data.ts
    - _Requirements: 3.1, 3.7, 3.8_

  - [x] 7.2 Translate "Redescubre su Vibrante Esencia" to English

    - Translate title, excerpt, content, and category
    - Adapt cultural references for English-speaking audience
    - Add translation to `en` property in blog-data.ts
    - _Requirements: 3.1, 3.7, 3.9_

  - [x] 7.3 Translate "5 Pasos Hacia el Ajedrez Online" to English

    - Translate title, excerpt, content, and category
    - Ensure step-by-step instructions are clear
    - Add translation to `en` property in blog-data.ts
    - _Requirements: 3.1, 3.7, 3.8_

  - [x] 7.4 Test blog with English locale

    - Navigate to `/en/blog`
    - Verify all blog posts show English titles and excerpts
    - Click on each post and verify English content
    - Verify formatting is correct with prose styles
    - _Requirements: 3.3, 3.4, 3.6_

- [x] 8. Refactor Resources Data for Bilingual Support

  - [ ] 8.1 Update TypeScript interfaces for resources

    - Open `lib/resources-data.ts`
    - Import or create `LocalizedContent` interface
    - Update `Resource` interface to use `LocalizedContent` for title, excerpt, content, category, and difficulty
    - _Requirements: 3.10_

  - [ ] 8.2 Update resources data with bilingual structure (keep Spanish)

    - Refactor existing resources to use nested locale objects
    - Keep all Spanish content in `es` property
    - Add empty `en` properties (to be filled later)
    - Verify no data is lost during refactoring
    - _Requirements: 3.2_

  - [ ] 8.3 Create helper functions for resources data

    - Create `getLocalizedResource(slug, locale)` function
    - Update `getResource()` to work with new structure
    - Update `getRecentResources()` to accept locale parameter
    - Update `getResourcesByCategory()` to accept locale parameter
    - Add fallback logic (default to Spanish if English missing)
    - _Requirements: 3.5, 3.6_

  - [ ] 8.4 Update resource components to use locale

    - Update `app/[locale]/recursos/page.tsx` to pass locale to data functions
    - Update `app/[locale]/recursos/[slug]/page.tsx` to use `getLocalizedResource()`
    - Update `ResourceCard.tsx` to display localized content
    - _Requirements: 3.5, 3.11_

  - [ ] 8.5 Test resources with Spanish locale
    - Navigate to `/es/recursos`
    - Verify all resources show Spanish content
    - Click on each resource and verify Spanish content
    - _Requirements: 3.5_

- [x] 9. Add English Translations for Resources

  - [ ] 9.1 Translate "Iniciación al Ajedrez" to English

    - Translate title, excerpt, content, category, and difficulty
    - Use standard chess terminology
    - Add translation to `en` property in resources-data.ts
    - _Requirements: 3.2, 3.7, 3.8_

  - [ ] 9.2 Translate "Fundamentos Estratégicos" to English

    - Translate title, excerpt, content, category, and difficulty
    - Ensure strategic concepts are clear in English
    - Add translation to `en` property in resources-data.ts
    - _Requirements: 3.2, 3.7, 3.8_

  - [ ] 9.3 Translate "Anatomía del Ajedrez" to English

    - Translate title, excerpt, content, category, and difficulty
    - Maintain technical accuracy in English
    - Add translation to `en` property in resources-data.ts
    - _Requirements: 3.2, 3.7, 3.8_

  - [ ] 9.4 Test resources with English locale
    - Navigate to `/en/recursos`
    - Verify all resources show English titles and excerpts
    - Click on each resource and verify English content
    - Verify formatting is correct with prose styles
    - _Requirements: 3.5, 3.6_

- [ ] 10. End-to-End Testing and Verification

  - [ ] 10.1 Test language switching functionality

    - Start on Spanish homepage
    - Navigate to blog, verify Spanish content
    - Switch to English, verify blog shows English
    - Navigate to resources, verify English content
    - Switch back to Spanish, verify Spanish content
    - _Requirements: 3.6_

  - [ ] 10.2 Test direct URL access with locale

    - Access `/en/blog/echoes-from-the-board` directly
    - Verify English content loads
    - Access `/es/blog/echoes-from-the-board` directly
    - Verify Spanish content loads
    - Repeat for resources
    - _Requirements: 3.4, 3.5_

  - [ ] 10.3 Verify all content formatting across languages

    - Check that prose styles work correctly for English content
    - Check that prose styles work correctly for Spanish content
    - Verify hero sections remain unchanged in both languages
    - _Requirements: 1.1, 1.2, 1.9, 1.10_

  - [ ] 10.4 Cross-browser testing

    - Test in Chrome, Firefox, Safari, Edge
    - Verify content formatting is consistent
    - Verify About section spacing looks good
    - Verify language switching works
    - _Requirements: All_

  - [ ] 10.5 Mobile responsiveness verification
    - Test all pages on mobile devices (or dev tools)
    - Verify content is readable and well-formatted
    - Verify About section looks good on mobile
    - Verify language switcher is accessible
    - _Requirements: 1.7, 2.3_

- [ ] 11. Documentation Updates

  - [ ] 11.1 Update PROJECT-CONTEXT.md

    - Document completion of content formatting
    - Document completion of About section adjustment
    - Document completion of bilingual content system
    - Update "Estado Actual" section
    - _Requirements: All_

  - [ ] 11.2 Create docs/PROJECT_STATUS.md

    - Create comprehensive project status document
    - Include all milestones and decisions from project history
    - Document current state and architecture
    - Include information about bilingual content structure
    - _Requirements: All_

  - [ ] 11.3 Update README.md
    - Add note about bilingual content structure
    - Document how to add new blog posts and resources
    - Include information about content formatting
    - _Requirements: All_

---

## Notes

### Translation Guidelines

When translating blog posts and resources to English:

1. **Tone**: Maintain the professional yet accessible tone of the Spanish original
2. **Chess Terminology**: Use standard English chess terms:

   - "apertura" → "opening"
   - "medio juego" → "middlegame"
   - "final" → "endgame"
   - "táctica" → "tactics"
   - "estrategia" → "strategy"
   - "peón" → "pawn"
   - "torre" → "rook"
   - "alfil" → "bishop"
   - "caballo" → "knight"
   - "dama/reina" → "queen"
   - "rey" → "king"

3. **Cultural Adaptation**:

   - Spanish idioms should be adapted to English equivalents
   - References to Spanish-speaking culture should be made universal
   - Maintain the philosophical and reflective tone

4. **Technical Accuracy**:
   - Chess concepts must be technically accurate
   - Historical references should be verified
   - Strategic principles should be clearly explained

### Testing Checklist

Before marking tasks as complete, verify:

- [ ] Content formatting works on all blog posts
- [ ] Content formatting works on all resources
- [ ] Hero sections are unchanged
- [ ] About section spacing looks good on all screen sizes
- [ ] Spanish content displays correctly
- [ ] English content displays correctly
- [ ] Language switching works smoothly
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Mobile responsive
- [ ] Cross-browser compatible

### Rollback Plan

If issues arise:

1. **Content Formatting**: Remove prose classes, revert tailwind.config.ts
2. **About Section**: Change gap-8 back to gap-12
3. **i18n**: Revert to original data structure, restore from git history

Each phase is independent and can be rolled back separately.

---

## Estimated Effort

| Task Group                           | Estimated Time  | Complexity |
| ------------------------------------ | --------------- | ---------- |
| 1-2: Tailwind Typography Setup       | 1-2 hours       | Low        |
| 3-4: Apply Prose Styles              | 1-2 hours       | Low        |
| 5: About Section Adjustment          | 30 minutes      | Low        |
| 6: Refactor Blog Data Structure      | 2-3 hours       | Medium     |
| 7: Translate Blog Posts              | 4-6 hours       | Medium     |
| 8: Refactor Resources Data Structure | 2-3 hours       | Medium     |
| 9: Translate Resources               | 4-6 hours       | Medium     |
| 10: E2E Testing                      | 2-3 hours       | Low        |
| 11: Documentation                    | 1-2 hours       | Low        |
| **Total**                            | **18-28 hours** | **Medium** |

---

## Success Criteria

This implementation will be considered successful when:

1. ✅ All blog posts and resources display with beautiful, readable formatting
2. ✅ The About section has improved visual balance
3. ✅ All content is available in both Spanish and English
4. ✅ Language switching works seamlessly
5. ✅ No regressions in existing functionality
6. ✅ Site is ready for production deployment
7. ✅ Documentation is up to date
