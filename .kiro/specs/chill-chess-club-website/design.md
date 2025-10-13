# Design Document

## Overview

Chill Chess Club es un sitio web de una sola página (SPA) con múltiples secciones, construido con Next.js 14 App Router, TypeScript, y Tailwind CSS. El diseño sigue un enfoque moderno y elegante con un esquema de colores oscuro (dark mode) y acentos vibrantes en rosa/púrpura. La arquitectura está optimizada para internacionalización (i18n) usando next-intl, con soporte completo para español e inglés.

El sitio está diseñado para convertir visitantes en estudiantes mediante una narrativa clara: presentar al instructor → mostrar los cursos → explicar el método → responder dudas → facilitar el contacto.

## Architecture

### Project Structure

```
chill-chess-club/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Layout con fuentes y metadata
│   │   ├── page.tsx                # Página principal que compone todas las secciones
│   │   └── components/
│   │       ├── Header.tsx          # Navegación sticky con i18n selector
│   │       ├── Hero.tsx            # Sección hero con CTAs
│   │       ├── About.tsx           # Sobre el instructor
│   │       ├── Courses.tsx         # Cards de cursos
│   │       ├── Method.tsx          # 5 pasos del método
│   │       ├── FAQ.tsx             # Acordeón de preguntas
│   │       ├── Contact.tsx         # Formulario de contacto
│   │       └── Footer.tsx          # Footer simple
│   ├── api/
│   │   └── contact/
│   │       └── route.ts            # API endpoint para formulario
│   └── globals.css                 # Estilos globales y Tailwind
├── messages/
│   ├── es.json                     # Traducciones en español
│   └── en.json                     # Traducciones en inglés
├── public/
│   └── images/                     # Imágenes (placeholders)
├── lib/
│   ├── i18n.ts                     # Configuración de next-intl
│   └── utils.ts                    # Utilidades (cn helper, etc.)
├── middleware.ts                   # Middleware para i18n routing
├── next.config.ts                  # Configuración de Next.js
├── tailwind.config.ts              # Configuración de Tailwind
└── tsconfig.json                   # Configuración de TypeScript
```

### Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Animations**: Framer Motion
- **Form Management**: React Hook Form
- **Validation**: Zod
- **Icons**: React Icons (Font Awesome)

### Routing Strategy

El sitio usa el sistema de routing de next-intl con locale prefixes:

- `/es` - Versión en español
- `/en` - Versión en inglés
- `/` - Redirige al idioma detectado del navegador

El middleware detecta el idioma preferido del usuario y redirige apropiadamente.

## Components and Interfaces

### 1. Layout Component (`app/[locale]/layout.tsx`)

**Purpose**: Wrapper principal que configura fuentes, metadata, y providers.

**Props**:

```typescript
interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}
```

**Key Features**:

- Configura Google Fonts (Playfair Display y Roboto)
- Aplica variables de fuente al HTML
- Configura metadata dinámica basada en locale
- Envuelve children con NextIntlClientProvider

**Implementation Details**:

```typescript
import { Playfair_Display, Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});
```

### 2. Page Component (`app/[locale]/page.tsx`)

**Purpose**: Página principal que compone todas las secciones.

**Structure**:

```typescript
export default function HomePage() {
  return (
    <main className="bg-slate-950">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Method />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
```

### 3. Header Component

**Purpose**: Navegación sticky con cambio de idioma.

**Props**:

```typescript
interface HeaderProps {
  // No props - usa useTranslations hook
}
```

**State**:

```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
```

**Key Features**:

- Sticky positioning con backdrop blur
- Cambia background opacity al hacer scroll
- Menú hamburguesa responsive para mobile
- Selector de idioma (ES/EN)
- Smooth scroll a secciones
- Logo clickeable que va al inicio

**Styling**:

- Background: `bg-slate-900/95 backdrop-blur-md`
- Height: `h-20`
- Z-index: `z-50`
- Transition: `transition-all duration-300`

### 4. Hero Component

**Purpose**: Sección de bienvenida con título impactante y CTAs.

**Key Features**:

- Título grande con gradiente de texto
- Subtítulo descriptivo
- Dos botones CTA con diferentes estilos
- Animación de entrada con Framer Motion
- Background con gradiente radial

**Styling**:

```typescript
// Título con gradiente
className =
  "text-5xl md:text-7xl font-playfair font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent";

// CTA primario
className =
  "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600";

// CTA secundario
className =
  "border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white";
```

**Animations**:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

### 5. About Component

**Purpose**: Presentar al instructor con foto, biografía y filosofía.

**Layout**:

- Grid de 2 columnas en desktop (imagen | texto)
- Stack vertical en mobile
- Imagen con border y shadow effect
- Quote destacada con estilo especial

**Key Sections**:

1. Imagen del instructor (placeholder 600x800)
2. Quote inspiradora
3. Dos párrafos biográficos
4. Subsección de filosofía de enseñanza
5. Plataformas utilizadas (Chess.com, Lichess)
6. CTA button

**Styling**:

```typescript
// Container
className = "py-20 px-4 bg-slate-900";

// Image
className = "rounded-lg border-4 border-pink-500 shadow-2xl shadow-pink-500/20";

// Quote
className = "border-l-4 border-purple-500 pl-6 italic text-slate-300";
```

### 6. Courses Component

**Purpose**: Mostrar los dos cursos disponibles con características y precios.

**Data Structure**:

```typescript
interface Course {
  title: string;
  level: string;
  features: string[];
  price: string;
  priceNote: string;
  cta: string;
  image: string;
}
```

**Layout**:

- Grid de 2 columnas en desktop
- Stack vertical en mobile
- Cards con hover effects
- Trust signals en la parte inferior

**Card Features**:

- Imagen de curso (placeholder 800x600)
- Badge de nivel
- Lista de características con checkmarks
- Precio destacado
- Nota sobre flexibilidad
- CTA button

**Styling**:

```typescript
// Card
className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl"

// Hover effect
className="group hover:shadow-2xl hover:shadow-pink-500/20"

// Feature list
className="space-y-3"
// Each feature with icon
<FaCheck className="text-green-500" />
```

**Trust Signals**:

```typescript
const trustSignals = [
  { icon: FaUserCheck, text: "Clases 1-a-1" },
  { icon: FaLanguage, text: "Español e Inglés" },
  { icon: FaRobot, text: "Asistido por IA" },
  { icon: FaCalendarAlt, text: "Horarios Flexibles" },
];
```

### 7. Method Component

**Purpose**: Explicar el método de enseñanza en 5 pasos.

**Data Structure**:

```typescript
interface MethodStep {
  number: string;
  icon: IconType;
  title: string;
  description: string;
}
```

**Layout**:

- Timeline vertical en mobile
- Grid de pasos en desktop
- Cada paso con número grande, icono, título y descripción
- Animación secuencial al hacer scroll

**Step Icons**:

1. FaComments - Evaluación Inicial
2. FaBrain - Material con IA
3. FaChalkboardTeacher - Clases Individuales
4. FaChess - Sesiones Prácticas
5. FaChartLine - Evolución Continua

**Styling**:

```typescript
// Step container
className = "relative pl-12 pb-12 border-l-2 border-pink-500";

// Number
className =
  "absolute -left-6 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold";

// Icon
className = "text-4xl text-purple-500 mb-4";
```

**Animations**:

```typescript
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
>
```

### 8. FAQ Component

**Purpose**: Responder preguntas frecuentes en formato acordeón.

**State**:

```typescript
const [openIndex, setOpenIndex] = useState<number | null>(null);
```

**Data Structure**:

```typescript
interface FAQItem {
  q: string;
  a: string;
}
```

**Key Features**:

- Acordeón con una pregunta abierta a la vez
- Animación suave de expansión/colapso
- Icono que rota al abrir/cerrar
- CTA al final de la sección

**Styling**:

```typescript
// Question button
className="w-full text-left p-6 bg-slate-800 hover:bg-slate-700 transition-colors rounded-lg flex justify-between items-center"

// Answer
className="p-6 bg-slate-900 text-slate-300"

// Icon rotation
<FaChevronDown className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
```

**Animations**:

```typescript
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: "auto", opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.3 }}
>
```

### 9. Contact Component

**Purpose**: Formulario de contacto con validación.

**Form Schema (Zod)**:

```typescript
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, "Selecciona un asunto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;
```

**State**:

```typescript
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
  "idle"
);
```

**Key Features**:

- Validación en tiempo real con React Hook Form + Zod
- Mensajes de error específicos por campo
- Estados de loading durante envío
- Mensajes de éxito/error
- Reset automático después de envío exitoso

**Form Fields**:

1. Nombre (text input)
2. Email (email input)
3. Asunto (select dropdown)
4. Mensaje (textarea)

**Subject Options**:

- Solicitar Clase de Prueba Gratuita
- Información sobre Curso Principiante
- Información sobre Curso Intermedio
- Otro

**Styling**:

```typescript
// Input
className =
  "w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all";

// Error message
className = "text-red-400 text-sm mt-1";

// Submit button
className =
  "w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 disabled:opacity-50";
```

### 10. Footer Component

**Purpose**: Footer simple con copyright y enlaces legales.

**Layout**:

- Centrado
- Links a Política de Privacidad y Términos
- Copyright con año actual

**Styling**:

```typescript
className =
  "bg-slate-950 border-t border-slate-800 py-8 text-center text-slate-400";
```

## Data Models

### Translation Messages Structure

```typescript
interface Messages {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    courses: string;
    method: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  about: {
    title: string;
    subtitle: string;
    quote: {
      text: string;
      author: string;
    };
    paragraph1: string;
    paragraph2: string;
    philosophyTitle: string;
    philosophyText: string;
    platformsTitle: string;
    platformsDesc: string;
    chesscomLink: string;
    lichessLink: string;
    cta: string;
  };
  courses: {
    title: string;
    intro: string;
    beginner: CourseData;
    intermediate: CourseData;
    trustSignals: TrustSignal[];
  };
  method: {
    title: string;
    intro: string;
    steps: MethodStep[];
    benefitsTitle: string;
    benefitsDesc: string;
    cta: string;
  };
  faq: {
    title: string;
    intro: string;
    questions: FAQItem[];
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: FormLabels;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
  };
}
```

### Contact Form Data

```typescript
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

### API Response

```typescript
interface ContactAPIResponse {
  success: boolean;
  message?: string;
  error?: string;
}
```

## Error Handling

### Form Validation Errors

**Strategy**: Mostrar errores inline debajo de cada campo usando React Hook Form.

```typescript
{
  errors.email && (
    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
  );
}
```

### API Errors

**Strategy**: Catch errors en el submit handler y mostrar mensaje genérico al usuario.

```typescript
try {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Failed to send");

  setSubmitStatus("success");
} catch (error) {
  setSubmitStatus("error");
}
```

### Image Loading Errors

**Strategy**: Usar placeholders de placehold.co que siempre funcionan. Incluir comentarios TODO para reemplazar con imágenes reales.

```typescript
// TODO: Reemplazar placeholder con imagen real en /public/images/santiago-profile.webp
<Image
  src="https://placehold.co/600x800/1e293b/ffffff?text=Santiago+Profile"
  alt="Santiago Narváez, instructor de Chill Chess Club"
  width={600}
  height={800}
/>
```

### i18n Missing Translations

**Strategy**: next-intl mostrará la key si falta una traducción. Asegurar que ambos archivos JSON estén completos.

## Testing Strategy

### Unit Testing

**Components to Test**:

1. Form validation logic (Zod schemas)
2. Utility functions (cn helper, etc.)

**Tools**: Jest + React Testing Library

**Example Test**:

```typescript
describe("Contact Form Validation", () => {
  it("should reject invalid email", () => {
    const result = contactSchema.safeParse({
      name: "Test",
      email: "invalid-email",
      subject: "test",
      message: "Test message",
    });
    expect(result.success).toBe(false);
  });
});
```

### Integration Testing

**Scenarios to Test**:

1. Language switching updates all content
2. Form submission sends data to API
3. Smooth scroll navigation works
4. Mobile menu opens/closes

### E2E Testing

**Critical Paths**:

1. User visits site → changes language → content updates
2. User fills form → submits → sees success message
3. User clicks nav link → scrolls to section
4. User clicks CTA → scrolls to contact form

**Tools**: Playwright or Cypress

### Accessibility Testing

**Tools**:

- axe DevTools
- Lighthouse
- Manual keyboard navigation testing

**Checks**:

- All interactive elements keyboard accessible
- Proper heading hierarchy
- Alt text on images
- Color contrast ratios
- ARIA labels where needed

## Design System

### Color Palette

```typescript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: "#ec4899", // pink-500
    dark: "#be185d",    // pink-700
    light: "#f9a8d4",   // pink-300
  },
  secondary: {
    DEFAULT: "#8b5cf6", // purple-500
    dark: "#6d28d9",    // purple-700
    light: "#c4b5fd",   // purple-300
  },
  accent: {
    DEFAULT: "#f59e0b", // amber-500
    dark: "#d97706",    // amber-600
  },
  dark: {
    bg: "#0f172a",      // slate-900
    darker: "#020617",  // slate-950
    card: "#1e293b",    // slate-800
  },
  text: {
    primary: "#f8fafc",   // slate-50
    secondary: "#cbd5e1", // slate-300
  },
}
```

### Typography

**Headings**: Playfair Display (serif, elegant)

- H1: `text-5xl md:text-7xl font-playfair font-bold`
- H2: `text-4xl md:text-5xl font-playfair font-bold`
- H3: `text-2xl md:text-3xl font-playfair font-semibold`

**Body**: Roboto (sans-serif, readable)

- Body: `text-base md:text-lg font-roboto`
- Small: `text-sm font-roboto`

### Spacing

- Section padding: `py-20 px-4`
- Container max-width: `max-w-7xl mx-auto`
- Element spacing: `space-y-8` or `gap-8`

### Buttons

**Primary CTA**:

```typescript
className =
  "px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105";
```

**Secondary CTA**:

```typescript
className =
  "px-8 py-4 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold rounded-lg transition-all duration-300";
```

### Cards

```typescript
className =
  "bg-slate-800 rounded-xl p-8 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl hover:shadow-pink-500/20";
```

### Gradients

**Primary Gradient**:

```css
background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
```

**Secondary Gradient**:

```css
background: linear-gradient(135deg, #f59e0b 0%, #ec4899 100%);
```

**Text Gradient**:

```typescript
className =
  "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent";
```

## Performance Optimizations

### Image Optimization

- Use Next.js Image component for automatic optimization
- Lazy load images below the fold
- Use WebP format for photos
- Provide width and height to prevent layout shift

### Code Splitting

- Automatic with Next.js App Router
- Dynamic imports for heavy components if needed

### Font Loading

- Use `display: swap` for Google Fonts
- Preload critical fonts

### Bundle Size

- Tree-shake unused icons from react-icons
- Use dynamic imports for Framer Motion if bundle is too large

## Responsive Breakpoints

```typescript
// Tailwind breakpoints
sm: '640px'   // Mobile landscape
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large
```

### Mobile (< 768px)

- Single column layout
- Hamburger menu
- Stacked cards
- Smaller text sizes

### Tablet (768px - 1024px)

- 2 column grid for courses
- Expanded navigation
- Medium text sizes

### Desktop (> 1024px)

- Full layout
- Horizontal navigation
- Large text sizes
- Hover effects enabled

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Deployment

**Platform**: Vercel (recommended for Next.js)

**Environment Variables**:

```env
# No environment variables needed for initial deployment
# Add email service credentials when implementing contact form backend
```

**Build Command**: `npm run build`

**Output Directory**: `.next`

**Deployment Steps**:

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings (auto-detected)
4. Deploy

## Future Enhancements

1. **Blog Section**: Add a blog for chess tips and strategies
2. **Resources Section**: Downloadable PDFs, cheat sheets
3. **Testimonials**: Student reviews and success stories
4. **Video Integration**: Embed sample lesson videos
5. **Booking System**: Integrate Calendly or similar for scheduling
6. **Payment Integration**: Stripe for course payments
7. **Analytics**: Google Analytics or Plausible
8. **SEO**: Structured data, sitemap, robots.txt
