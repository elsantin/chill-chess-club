# Chill Chess Club - Website

Sitio web profesional para clases de ajedrez online personalizadas con asistencia de IA.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl (Español/Inglés)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: React Icons (Font Awesome)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

## 🌐 Idiomas Soportados

- Español (es) - Idioma por defecto
- Inglés (en)

El sitio detecta automáticamente el idioma del navegador y redirige a la versión apropiada.

## 📁 Estructura del Proyecto

```
chill-chess-club/
├── app/
│   ├── [locale]/              # Rutas internacionalizadas
│   │   ├── components/        # Componentes de la página
│   │   ├── layout.tsx         # Layout con fuentes y i18n
│   │   └── page.tsx           # Página principal
│   ├── api/
│   │   └── contact/           # API endpoint para formulario
│   └── globals.css            # Estilos globales
├── messages/
│   ├── es.json                # Traducciones en español
│   └── en.json                # Traducciones en inglés
├── lib/
│   ├── i18n.ts                # Configuración de next-intl
│   └── utils.ts               # Utilidades y helpers
├── public/
│   └── images/                # Imágenes del sitio
└── middleware.ts              # Middleware para i18n routing
```

## 🎨 Paleta de Colores

- **Primary**: Pink (#ec4899)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Amber (#f59e0b)
- **Background**: Slate-950 (#020617)
- **Cards**: Slate-800 (#1e293b)

## 🖼️ Imágenes

Las imágenes actualmente usan placeholders de placehold.co. Para usar imágenes reales:

1. Coloca las imágenes en `public/images/`:

   - `logo.svg` (200x60)
   - `santiago-profile.webp` (600x800)
   - `beginner-course.webp` (800x600)
   - `intermediate-course.webp` (800x600)

2. Los componentes están configurados para usar estas rutas automáticamente.

## 🔧 Configuración

### Tailwind CSS

La configuración personalizada incluye:

- Colores del tema
- Fuentes personalizadas (Playfair Display, Roboto)
- Gradientes predefinidos

### next-intl

El sistema de internacionalización está configurado para:

- Detección automática de idioma
- Rutas con prefijo de locale (/es, /en)
- Mensajes de traducción en archivos JSON

## 📝 Desarrollo

### Agregar una nueva sección

1. Crear componente en `app/[locale]/components/`
2. Usar `useTranslations()` hook para textos
3. Agregar traducciones en `messages/es.json` y `messages/en.json`
4. Importar y usar en `page.tsx`

### Agregar nuevas traducciones

1. Editar `messages/es.json` para español
2. Editar `messages/en.json` para inglés
3. Usar en componentes con `t('key.path')`

## 🚀 Deployment

### Vercel (Recomendado)

1. Push el código a GitHub
2. Conectar el repositorio en Vercel
3. Vercel detectará automáticamente la configuración
4. Deploy

### Otras plataformas

```bash
# Compilar
npm run build

# El output estará en .next/
```

## 📧 Formulario de Contacto

El formulario actualmente registra los datos en la consola. Para implementar envío de emails:

1. Elegir un servicio (SendGrid, Resend, etc.)
2. Agregar credenciales en variables de entorno
3. Implementar la lógica en `app/api/contact/route.ts`

## 🎯 Próximos Pasos

- [ ] Implementar todos los componentes (Header, Hero, About, etc.)
- [ ] Agregar animaciones con Framer Motion
- [ ] Implementar formulario de contacto completo
- [ ] Agregar imágenes reales
- [ ] Testing
- [ ] SEO optimization

## 📄 Licencia

© 2025 Chill Chess Club. Todos los derechos reservados.
