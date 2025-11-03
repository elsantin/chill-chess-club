# Design Document - Accessibility Audit Fixes

## Overview

This design document outlines the technical approach for correcting accessibility issues identified by the Vercel accessibility audit. The solution focuses on three critical areas: implementing proper semantic HTML landmarks, managing keyboard focus for hidden elements, and ensuring WCAG 2.0 AA color contrast compliance. All corrections will be implemented without breaking existing functionality or visual design.

## Architecture

### Current State Analysis

The application is a Next.js 14+ app using:

- App Router with internationalization (`[locale]` dynamic routes)
- Server and client components
- Framer Motion for animations
- Tailwind CSS with custom neumorphic design system
- Dark theme with warm gray backgrounds (warmGray-950, warmGray-900)

**Current Issues:**

1. Pages use `<main>` element but it wraps Header and Footer components (incorrect semantic structure)
2. No aria-hidden elements found in current codebase (may be in third-party components or dynamically generated)
3. Color contrast issues reported by Vercel audit (specific elements not yet identified)

### Design Principles

1. **Semantic HTML First**: Use native HTML5 landmarks before ARIA roles
2. **Progressive Enhancement**: Maintain all existing functionality
3. **Visual Consistency**: Preserve the neumorphic sunset design aesthetic
4. **Performance**: No additional runtime overhead
5. **Maintainability**: Clear documentation and comments for future developers

## Components and Interfaces

### 1. Main Landmark Implementation

#### Affected Files

- `app/[locale]/page.tsx` (Home page)
- `app/[locale]/blog/page.tsx` (Blog listing)
- `app/[locale]/recursos/page.tsx` (Resources listing)
- `app/[locale]/blog/[slug]/page.tsx` (Blog detail - if exists)
- `app/[locale]/recursos/[slug]/page.tsx` (Resource detail)
- `app/[locale]/privacidad/page.tsx` (Privacy policy)
- `app/[locale]/terminos/page.tsx` (Terms of service)

#### Current Structure (Incorrect)

```tsx
<main className="bg-warmGray-950">
  <Header />
  <Hero />
  <About />
  {/* ... other sections ... */}
  <Footer />
  <ScrollToTop />
</main>
```

#### Proposed Structure (Correct)

```tsx
<>
  <Header />
  <main className="bg-warmGray-950">
    <Hero />
    <About />
    {/* ... other sections ... */}
  </main>
  <Footer />
  <ScrollToTop />
</>
```

#### Implementation Strategy

1. Move `<main>` element to wrap only primary content
2. Extract Header and Footer outside of main
3. Move background class from main to body or root layout if needed
4. Ensure ScrollToTop remains outside main (it's a utility component)
5. Verify no CSS selectors break (check for `main > *` selectors)

#### CSS Considerations

- The `bg-warmGray-950` class currently on `<main>` provides the dark background
- This should be moved to the `<body>` element in `layout.tsx` or applied to a wrapper div
- Check `globals.css` for any direct `main` element selectors

### 2. Focus Management for aria-hidden Elements

#### Detection Strategy

1. Audit all components for `aria-hidden="true"` attributes
2. Check third-party libraries (Framer Motion, Radix UI components)
3. Inspect decorative elements (TwinklingStars, background effects)
4. Review modal/dialog implementations

#### Implementation Rules

For any element with `aria-hidden="true"`:

- Add `tabIndex={-1}` to prevent keyboard focus
- Ensure no interactive children (buttons, links, inputs)
- If interactive elements exist, remove aria-hidden or restructure
- Add `inert` attribute for modern browsers (progressive enhancement)

#### Common Patterns to Fix

```tsx
// BEFORE (Incorrect)
<div aria-hidden="true">
  <button onClick={handler}>Click me</button>
</div>

// AFTER (Correct - Option 1: Remove aria-hidden)
<div>
  <button onClick={handler}>Click me</button>
</div>

// AFTER (Correct - Option 2: Make non-interactive)
<div aria-hidden="true" tabIndex={-1}>
  <div className="decorative-element" />
</div>
```

#### Components to Audit

- `TwinklingStars` - Decorative background element
- `ScrollToTop` - Interactive button (should NOT have aria-hidden)
- `GlassmorphicHeader` - Check for decorative blur effects
- Modal/Dialog components (if any)
- Accordion components from shadcn/ui

### 3. Color Contrast Corrections

#### Audit Process

1. Run Lighthouse accessibility audit to identify specific elements
2. Use browser DevTools contrast checker
3. Test with WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)

#### WCAG 2.0 AA Requirements

- Normal text (< 18pt): 4.5:1 minimum contrast ratio
- Large text (≥ 18pt or ≥ 14pt bold): 3:1 minimum contrast ratio
- UI components and graphical objects: 3:1 minimum

#### Likely Problem Areas (Based on Code Review)

**1. warmGray-300 text on warmGray-950 background**

- Current: `text-warmGray-300` (#d6d3d1) on `bg-warmGray-950` (#0c0a09)
- Usage: Footer links, secondary text
- Solution: Upgrade to `warmGray-200` (#e7e5e4) or `warmGray-100` (#f5f5f4)

**2. warmGray-400 text on warmGray-950 background**

- Current: `text-warmGray-400` (#a8a29e) on `bg-warmGray-950` (#0c0a09)
- Usage: Muted text, labels
- Solution: Upgrade to `warmGray-300` (#d6d3d1) minimum

**3. warmGray-500 text on warmGray-950 background**

- Current: `text-warmGray-500` (#78716c) on `bg-warmGray-950` (#0c0a09)
- Usage: Footer copyright, very muted text
- Solution: Upgrade to `warmGray-400` (#a8a29e) minimum

**4. Sunset colors on dark backgrounds**

- Current sunset palette should be sufficient, but verify:
  - `sunset-400` (#fb923c) on `warmGray-950` - likely OK
  - `sunset-300` (#fdba74) on `warmGray-950` - likely OK
  - `sunset-500` (#f97316) on `warmGray-950` - likely OK

#### Color Adjustment Strategy

1. Create a contrast mapping table
2. Define minimum acceptable shades for each background
3. Update Tailwind classes systematically
4. Test in both light and dark modes (if applicable)
5. Verify brand consistency

#### Contrast Mapping Table

```
Background: warmGray-950 (#0c0a09)
├─ Normal text (4.5:1): warmGray-200+ (#e7e5e4)
├─ Large text (3:1): warmGray-300+ (#d6d3d1)
└─ UI components (3:1): warmGray-300+ (#d6d3d1)

Background: warmGray-900 (#1c1917)
├─ Normal text (4.5:1): warmGray-100+ (#f5f5f4)
├─ Large text (3:1): warmGray-200+ (#e7e5e4)
└─ UI components (3:1): warmGray-200+ (#e7e5e4)

Background: warmGray-800 (#292524)
├─ Normal text (4.5:1): warmGray-50 (#fafaf9)
├─ Large text (3:1): warmGray-100+ (#f5f5f4)
└─ UI components (3:1): warmGray-100+ (#f5f5f4)
```

## Data Models

No data model changes required. All changes are presentational.

## Error Handling

### Validation Strategy

1. **Pre-deployment checks**:

   - Run Lighthouse accessibility audit
   - Verify no console errors
   - Test keyboard navigation
   - Validate with screen reader (NVDA/JAWS)

2. **Fallback patterns**:

   - If `<main>` causes layout issues, use `role="main"` on a div
   - If color adjustments break design, use intermediate shades
   - Document any compromises in code comments

3. **Browser compatibility**:
   - Test in Chrome, Firefox, Safari, Edge
   - Verify `inert` attribute support (progressive enhancement)
   - Ensure Framer Motion animations don't interfere with focus

## Testing Strategy

### Automated Testing

1. **Lighthouse CI**:

   - Run accessibility audit on all pages
   - Set minimum score threshold (90+)
   - Fail build if score drops

2. **axe-core integration** (optional):
   - Add @axe-core/react for runtime checks
   - Run in development mode only

### Manual Testing

1. **Keyboard navigation**:

   - Tab through all interactive elements
   - Verify focus indicators visible
   - Test Escape key for modals/dialogs
   - Verify no focus traps

2. **Screen reader testing**:

   - NVDA (Windows) or VoiceOver (Mac)
   - Verify main landmark announced
   - Check heading hierarchy
   - Validate link text clarity

3. **Visual regression**:

   - Screenshot comparison before/after
   - Verify layout consistency
   - Check responsive breakpoints
   - Test dark mode (if applicable)

4. **Contrast verification**:
   - Use browser DevTools contrast checker
   - Verify all text meets WCAG AA
   - Check focus indicators
   - Test with color blindness simulators

### Test Checklist

- [ ] All pages have exactly one `<main>` landmark
- [ ] Header and Footer outside of `<main>`
- [ ] No aria-hidden elements are focusable
- [ ] All text meets 4.5:1 contrast (normal) or 3:1 (large)
- [ ] Keyboard navigation works on all pages
- [ ] Screen reader announces landmarks correctly
- [ ] No visual regressions in layout
- [ ] No console errors or warnings
- [ ] Lighthouse accessibility score 90+

## Implementation Notes

### Code Comments

Add comments to document accessibility changes:

```tsx
// Accessibility: Main landmark wraps only primary content (WCAG 2.0)
// Header and Footer are separate landmarks
<main className="bg-warmGray-950">{/* Primary content */}</main>
```

### Git Commit Strategy

1. Commit 1: Main landmark restructuring
2. Commit 2: Focus management fixes
3. Commit 3: Color contrast adjustments
4. Commit 4: Documentation and tests

### Rollback Plan

If issues arise:

1. Revert specific commits
2. Use feature flags for gradual rollout
3. Document known issues in GitHub issues

## Performance Considerations

- No performance impact expected
- Semantic HTML improves parsing speed
- Color changes are CSS-only (no runtime cost)
- Focus management is declarative (no JS overhead)

## Browser Support

- Modern browsers: Full support
- IE11: Graceful degradation (no `inert` attribute)
- Mobile browsers: Full support
- Screen readers: NVDA, JAWS, VoiceOver, TalkBack

## Future Enhancements

1. Add skip navigation links
2. Implement focus-visible polyfill for older browsers
3. Add ARIA live regions for dynamic content
4. Consider WCAG 2.1 AAA compliance for critical text
5. Add automated accessibility testing in CI/CD pipeline
