# Implementation Plan - Accessibility Audit Fixes

- [ ] 1. Restructure main landmark on all pages

  - [x] 1.1 Update home page (app/[locale]/page.tsx) to move Header and Footer outside main element

    - Move `<Header />` before `<main>`
    - Move `<Footer />` and `<ScrollToTop />` after `</main>`
    - Keep background class on main or move to parent wrapper
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [x] 1.2 Update blog listing page (app/[locale]/blog/page.tsx) with correct main landmark structure

    - Restructure to place Header outside main
    - Ensure BlogPageClient content is within main
    - Move Footer and ScrollToTop outside main
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [x] 1.3 Update resources listing page (app/[locale]/recursos/page.tsx) with correct main landmark structure

    - Restructure to place Header outside main
    - Ensure RecursosPageClient content is within main
    - Move Footer and ScrollToTop outside main
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [x] 1.4 Update blog detail page (app/[locale]/blog/[slug]/page.tsx) with correct main landmark structure

    - Restructure to place Header outside main
    - Ensure article content is within main
    - Move Footer and ScrollToTop outside main
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [x] 1.5 Update resource detail page (app/[locale]/recursos/[slug]/page.tsx) with correct main landmark structure

    - Restructure to place Header outside main
    - Ensure resource content is within main
    - Move Footer and ScrollToTop outside main
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [x] 1.6 Update legal pages (privacidad and terminos) with correct main landmark structure

    - Update app/[locale]/privacidad/page.tsx
    - Update app/[locale]/terminos/page.tsx
    - Ensure consistent landmark structure
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [-] 1.7 Verify CSS selectors and background styling after main restructuring

    - Check if any CSS rules target main element directly
    - Ensure bg-warmGray-950 background is maintained
    - Update globals.css if needed
    - Test responsive layouts at all breakpoints
    - _Requirements: 1.4, 1.5_

- [ ] 2. Audit and fix focus management for aria-hidden elements

  - [ ] 2.1 Search codebase for all aria-hidden attributes

    - Use grep/search to find all instances of aria-hidden
    - Document each occurrence with file path and context
    - Identify which elements are decorative vs interactive
    - _Requirements: 2.1, 2.2, 2.3_

  - [ ] 2.2 Fix TwinklingStars component if it has aria-hidden

    - Ensure decorative stars cannot receive focus
    - Add tabIndex={-1} if aria-hidden is present
    - Verify no interactive children exist
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [ ] 2.3 Audit third-party components (Framer Motion, Radix UI) for aria-hidden focus issues

    - Check GlassmorphicHeader for decorative elements
    - Review Accordion components from shadcn/ui
    - Inspect any modal or dialog implementations
    - Fix any focusable elements with aria-hidden
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [ ] 2.4 Verify ScrollToTop button is not marked as aria-hidden
    - Ensure button is keyboard accessible
    - Verify proper focus management
    - Test with keyboard navigation
    - _Requirements: 2.1, 2.4_

- [ ] 3. Fix color contrast issues to meet WCAG 2.0 AA standards

  - [ ] 3.1 Run Lighthouse audit to identify specific contrast failures

    - Document all failing elements with current colors
    - Calculate current contrast ratios
    - Determine minimum required adjustments
    - _Requirements: 3.1, 3.2, 3.3_

  - [ ] 3.2 Update Footer component text colors for sufficient contrast

    - Change text-warmGray-300 to text-warmGray-200 or lighter
    - Update text-warmGray-400 to text-warmGray-300 minimum
    - Change text-warmGray-500 to text-warmGray-400 minimum
    - Verify copyright text meets 4.5:1 ratio
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ] 3.3 Audit and fix contrast in all page components

    - Check Hero component text colors
    - Review About, Courses, Method sections
    - Verify FAQ and Contact form text
    - Update BlogCard and ResourceCard text colors
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ] 3.4 Update Header component navigation text for contrast compliance

    - Verify nav link colors meet contrast requirements
    - Check mobile menu text colors
    - Ensure language selector buttons have sufficient contrast
    - Test hover and active states
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ] 3.5 Verify sunset accent colors maintain sufficient contrast
    - Test sunset-400, sunset-300, sunset-500 on dark backgrounds
    - Ensure CTA buttons meet contrast requirements
    - Check gradient text readability
    - Validate focus indicators are visible
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 4. Validate and document accessibility improvements

  - [ ] 4.1 Run Lighthouse accessibility audit on all pages

    - Test home page
    - Test blog and recursos listing pages
    - Test blog and resource detail pages
    - Test legal pages (privacy, terms)
    - Document scores and remaining issues
    - _Requirements: 4.2, 4.3_

  - [ ] 4.2 Perform keyboard navigation testing

    - Tab through all interactive elements on each page
    - Verify focus indicators are visible
    - Test Escape key functionality for modals
    - Ensure no focus traps exist
    - _Requirements: 4.2, 4.4_

  - [ ] 4.3 Add code comments documenting accessibility changes

    - Comment main landmark restructuring
    - Document aria-hidden focus fixes
    - Note color contrast adjustments
    - Add WCAG compliance references
    - _Requirements: 4.1_

  - [ ]\* 4.4 Perform visual regression testing

    - Take screenshots of all pages before and after
    - Compare layouts at mobile, tablet, desktop breakpoints
    - Verify no unintended visual changes
    - Test responsive behavior
    - _Requirements: 4.3_

  - [ ]\* 4.5 Test with screen reader (NVDA or VoiceOver)
    - Verify main landmark is announced
    - Check heading hierarchy
    - Validate link text clarity
    - Test form labels and error messages
    - _Requirements: 4.2_
