# Project Structure

## Directory Organization

```
chill-chess-club-nextjs/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Internationalized routes
│   │   ├── layout.tsx            # Root layout with fonts, metadata
│   │   ├── page.tsx              # Homepage (composes all sections)
│   │   ├── blog/                 # Blog listing and posts
│   │   ├── recursos/             # Resources listing and pages
│   │   ├── terminos/             # Terms of service
│   │   ├── privacidad/           # Privacy policy
│   │   └── components/           # Page-specific components
│   ├── api/                      # API routes
│   │   ├── contact/              # Contact form endpoint
│   │   └── og/                   # Dynamic OG image generation
│   ├── globals.css               # Global styles, Tailwind directives
│   └── favicon.ico               # Site favicon
├── lib/                          # Shared utilities and data
│   ├── i18n.ts                   # next-intl configuration
│   ├── utils.ts                  # Helper functions (cn, imagePlaceholders)
│   ├── validations.ts            # Zod schemas
│   ├── design-tokens.ts          # Color palette definitions
│   ├── blog-data.ts              # Blog post data
│   ├── resources-data.ts         # Resource data
│   ├── metadata-utils.ts         # SEO metadata helpers
│   ├── image-blur.ts             # Blur placeholder generator
│   └── neumorphic-utils.ts       # Neumorphic design utilities
├── messages/                     # i18n translation files
│   ├── es.json                   # Spanish translations
│   └── en.json                   # English translations
├── public/                       # Static assets
│   ├── images/                   # Site images (8 required)
│   └── *.png, *.svg              # Favicons and icons
├── components/                   # Shared UI components
│   └── ui/                       # Reusable UI primitives
├── docs/                         # Project documentation
├── scripts/                      # Build and utility scripts
├── .kiro/                        # Kiro IDE configuration
│   ├── specs/                    # Feature specifications
│   └── steering/                 # AI assistant guidelines
└── middleware.ts                 # i18n routing middleware
```

## Key Architectural Patterns

### Server vs Client Components

- **Server Components (default):** Blog pages, resource pages, layouts
- **Client Components:** Interactive sections (Header, Hero, Contact form, animations)
- Pattern: Separate client wrappers (e.g., `BlogPageClient.tsx`) for animations while keeping pages as Server Components

### Internationalization Flow

1. Middleware intercepts requests and determines locale
2. Routes are prefixed with locale (`/es/*`, `/en/*`)
3. Components use `useTranslations()` hook to access messages
4. Translation keys follow dot notation: `section.subsection.key`

### Component Composition

- Homepage (`page.tsx`) imports and composes 9 main sections:
  - Header (navigation)
  - Hero (above-the-fold)
  - About (instructor bio)
  - Courses (offerings)
  - Method (teaching approach)
  - Blog (content preview)
  - FAQ (accordion)
  - Contact (form)
  - Footer (links)

### Styling Conventions

- **Only Tailwind CSS** - No CSS modules or styled-components
- Use `cn()` utility for conditional classes
- Custom design tokens in `lib/design-tokens.ts`
- Neumorphic shadows defined in Tailwind config
- Responsive: mobile-first with `md:` and `lg:` breakpoints

### Data Management

- Static data in `lib/*-data.ts` files (blog posts, resources)
- No external CMS or database currently
- Form submissions handled via API route (`/api/contact`)

### Image Strategy

- All images use Next.js `<Image>` component
- Centralized placeholders in `lib/utils.ts`
- Lazy loading with blur placeholders for performance
- 8 required images documented in `IMAGENES-LISTA-COMPLETA.md`

### Type Safety

- Strict TypeScript enabled
- Zod schemas for runtime validation
- Type inference from Zod schemas: `z.infer<typeof schema>`
- Path alias `@/*` for absolute imports

## File Naming Conventions

- **Components:** PascalCase (e.g., `Header.tsx`, `BlogCard.tsx`)
- **Utilities:** camelCase (e.g., `utils.ts`, `validations.ts`)
- **Routes:** lowercase with hyphens (e.g., `[slug]/page.tsx`)
- **Data files:** kebab-case with suffix (e.g., `blog-data.ts`)

## Import Order (Recommended)

1. React and Next.js imports
2. Third-party libraries
3. Local components
4. Utilities and helpers
5. Types and interfaces
6. Styles (if any)
