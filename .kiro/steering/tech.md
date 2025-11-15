# Technology Stack

## Core Framework

- **Next.js 15.5.5** with App Router (not Pages Router)
- **React 19.1.0** with Server Components where possible
- **TypeScript 5** for type safety
- **Node.js** LTS versions

## Styling & UI

- **Tailwind CSS v3** (stable, not v4 beta)
- **Framer Motion** for animations
- **Radix UI** for accessible components (accordion, labels, slots)
- **Lucide React** and **React Icons** for iconography
- **Custom neumorphic design system** with sunset color palette

## Forms & Validation

- **React Hook Form** for form state management
- **Zod** for schema validation
- **@hookform/resolvers** for integration

## Internationalization

- **next-intl v4** for i18n
- Supported locales: `es` (default), `en`
- Locale prefix routing: `/es/*` and `/en/*`
- Translation files in `messages/` directory

## Image Handling

- **Next.js Image** component with optimization
- **@vercel/og** for dynamic Open Graph image generation
- Remote patterns configured for `placehold.co` (temporary)
- Formats: AVIF and WebP

## Utilities

- **clsx** and **tailwind-merge** for className composition
- **class-variance-authority** for component variants

## Development Tools

- **ESLint** with Next.js config
- **PostCSS** with Autoprefixer
- **TypeScript** strict mode enabled

## Common Commands

```bash
# Development
npm run dev              # Start dev server at localhost:3000

# Production
npm run build            # Build for production
npm start                # Run production build

# Code Quality
npm run lint             # Run ESLint

# Cleanup
rm -rf .next             # Clear Next.js cache (Windows: rmdir /s /q .next)
```

## Build Configuration

- **Target:** ES2017
- **Module Resolution:** bundler
- **Path Alias:** `@/*` maps to project root
- **Strict Mode:** Enabled
- **Incremental Builds:** Enabled

## Deployment

- **Recommended:** Vercel (auto-detects Next.js)
- **Edge Runtime:** Used for OG image generation API route
- **Static Assets:** Served from `/public` directory
