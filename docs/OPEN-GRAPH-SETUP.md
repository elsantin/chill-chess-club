# 🚀 Open Graph y Meta Tags - Setup Completo

## 📋 Resumen

Se ha implementado un sistema completo de Open Graph y meta tags para optimizar cómo se comparte tu sitio en redes sociales (WhatsApp, Facebook, Twitter/X, LinkedIn).

---

## ✅ ¿Qué se implementó?

### 1. Meta Tags Completos

**Open Graph (Facebook, WhatsApp, LinkedIn):**

- ✅ `og:title` - Título dinámico por idioma
- ✅ `og:description` - Descripción dinámica por idioma
- ✅ `og:url` - URL canónica
- ✅ `og:type` - Tipo de contenido
- ✅ `og:image` - Imagen 1200x630px
- ✅ `og:image:width` / `og:image:height` - Dimensiones
- ✅ `og:image:type` - Tipo de imagen
- ✅ `og:image:alt` - Texto alternativo
- ✅ `og:site_name` - Nombre del sitio
- ✅ `og:locale` - Idioma (es_ES / en_US)
- ✅ `og:locale:alternate` - Idioma alternativo

**Twitter Card:**

- ✅ `twitter:card` - summary_large_image
- ✅ `twitter:title` - Título
- ✅ `twitter:description` - Descripción
- ✅ `twitter:image` - Imagen
- ✅ `twitter:creator` - @handle
- ✅ `twitter:site` - @handle

**SEO Básico:**

- ✅ `title` - Título de página
- ✅ `description` - Meta descripción
- ✅ `keywords` - Palabras clave por idioma
- ✅ `canonical` - URL canónica
- ✅ `alternate` - URLs alternativas (idiomas)
- ✅ `robots` - Instrucciones para bots

### 2. Archivos Creados

```
✅ app/[locale]/layout.tsx          - Metadata mejorada
✅ lib/metadata-utils.ts             - Utilidades para metadata
✅ scripts/generate-og-image.js      - Script para generar imagen
✅ scripts/verify-og-tags.md         - Guía de verificación
✅ docs/OG-IMAGE-QUICK-GUIDE.md      - Guía rápida de imagen
✅ docs/OPEN-GRAPH-SETUP.md          - Este archivo
✅ public/og-image.jpg               - Placeholder (REEMPLAZAR)
```

### 3. Configuración Next.js

- ✅ Headers para caché de imagen OG
- ✅ Metadata base URL configurada
- ✅ Alternates para idiomas
- ✅ Soporte multiidioma automático

---

## 🎯 Próximos Pasos (IMPORTANTE)

### Paso 1: Crear Imagen Open Graph

**DEBES crear una imagen de 1200x630px.**

**Opción A: Canva (5 minutos - RECOMENDADO)**

1. Ve a: https://www.canva.com/
2. Crea diseño: 1200 x 630 px
3. Diseña con:
   - Fondo: Gradiente sunset (naranja → rosa → púrpura)
   - Título: "Chill Chess Club" (grande, blanco, bold)
   - Subtítulo: "Personalized Online Chess Classes"
   - Texto: "AI-Assisted Learning • Flexible Schedule"
4. Descarga como JPG (alta calidad)
5. Guarda como: `public/og-image.jpg`

**Guía detallada:** Ver `docs/OG-IMAGE-QUICK-GUIDE.md`

**Opción B: Usar generador automático**

```bash
# Si tienes Node.js
node scripts/generate-og-image.js
```

**Opción C: Usar Vercel OG Image**

1. Ve a: https://og-image.vercel.app/
2. Escribe: "Chill Chess Club"
3. Descarga y guarda como `public/og-image.jpg`

---

### Paso 2: Verificar Imagen

```bash
# Verificar que existe
ls public/og-image.jpg

# Commit y push
git add public/og-image.jpg
git commit -m "feat: add Open Graph image"
git push
```

---

### Paso 3: Esperar Deploy

Vercel desplegará automáticamente (2-3 minutos).

---

### Paso 4: Verificar en Redes Sociales

#### Facebook/WhatsApp/LinkedIn

1. Ve a: https://developers.facebook.com/tools/debug/
2. Pega: `https://chill-chess-club.vercel.app/es`
3. Click "Debug"
4. Verifica que aparezca:
   - ✅ Imagen correcta
   - ✅ Título correcto
   - ✅ Descripción correcta

#### Twitter

1. Ve a: https://cards-dev.twitter.com/validator
2. Pega: `https://chill-chess-club.vercel.app/en`
3. Verifica preview

#### WhatsApp (Prueba Real)

1. Envía tu URL a un chat de WhatsApp
2. Verifica que aparezca preview con imagen

---

## 🌐 Soporte Multiidioma

El sistema detecta automáticamente el idioma de la URL:

**Español:**

```
https://chill-chess-club.vercel.app/es
```

- `og:locale`: es_ES
- `og:title`: "Clases de Ajedrez Online Personalizadas | Chill Chess Club"
- `og:description`: "Aprende ajedrez online con el método personalizado..."

**Inglés:**

```
https://chill-chess-club.vercel.app/en
```

- `og:locale`: en_US
- `og:title`: "Personalized Online Chess Classes | Chill Chess Club"
- `og:description`: "Learn chess online with Chill Chess Club's personalized method..."

---

## 🔧 Personalización Avanzada

### Metadata por Página

Si quieres metadata diferente para blog o recursos:

```typescript
// En app/[locale]/blog/[slug]/page.tsx
import { generateBlogMetadata } from "@/lib/metadata-utils";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;

  return generateBlogMetadata({
    title: "Título del artículo",
    description: "Descripción del artículo",
    locale,
    slug,
    publishedTime: "2025-01-15",
    tags: ["ajedrez", "estrategia"],
  });
}
```

### Imagen OG por Página

```typescript
// Crear imagen específica para blog
public / og - image - blog.jpg;

// Usar en metadata
image: `${siteUrl}/og-image-blog.jpg`;
```

### Twitter Handle Real

Actualiza en `app/[locale]/layout.tsx`:

```typescript
twitter: {
  creator: "@tu_handle_real",
  site: "@tu_handle_real",
}
```

---

## 📊 Verificación de Resultados

### Herramientas de Testing

1. **Facebook Debugger** (Principal)

   - https://developers.facebook.com/tools/debug/
   - Verifica OG tags
   - Limpia caché

2. **Twitter Card Validator**

   - https://cards-dev.twitter.com/validator
   - Verifica Twitter Card

3. **LinkedIn Post Inspector**

   - https://www.linkedin.com/post-inspector/
   - Verifica preview en LinkedIn

4. **OpenGraph.xyz**

   - https://www.opengraph.xyz/
   - Verifica todos los tags
   - Preview en múltiples plataformas

5. **Meta Tags Checker**
   - https://metatags.io/
   - Preview en tiempo real

---

## 🐛 Solución de Problemas

### Problema: Imagen no aparece

**Soluciones:**

1. Verificar que `public/og-image.jpg` existe
2. Verificar URL: `https://chill-chess-club.vercel.app/og-image.jpg`
3. Limpiar caché en Facebook Debugger → "Scrape Again"
4. Esperar 5-10 minutos después de deploy
5. Verificar que imagen es <300KB

### Problema: Imagen antigua en caché

**Soluciones:**

1. Cambiar nombre: `og-image-v2.jpg`
2. Agregar query: `og-image.jpg?v=2`
3. Usar Facebook Debugger → "Scrape Again"
4. Esperar 24-48 horas

### Problema: Título/descripción incorrectos

**Soluciones:**

1. Verificar `messages/es.json` y `messages/en.json`
2. Verificar que `metadata.title` existe
3. Rebuild: `npm run build`
4. Redeploy a Vercel

---

## 📐 Especificaciones de Imagen

```
Dimensiones:  1200 x 630 px
Ratio:        1.91:1
Formato:      JPG (recomendado) o PNG
Tamaño:       < 300 KB (idealmente < 200 KB)
Calidad:      80-85% (JPG)
```

**Contenido visible:**

- Área segura: Centro 1200 x 600 px
- Evitar texto en bordes (puede cortarse)
- Tamaño mínimo de texto: 60px

**Colores del sitio:**

```css
Naranja: #f59e0b
Rosa:    #ec4899
Púrpura: #8b5cf6
Blanco:  #ffffff
```

---

## ✅ Checklist Final

Antes de considerar completo:

- [ ] Imagen OG creada (1200x630px)
- [ ] Imagen guardada en `public/og-image.jpg`
- [ ] Imagen <300KB
- [ ] Deploy realizado
- [ ] URL accesible: `https://chill-chess-club.vercel.app/og-image.jpg`
- [ ] Verificado en Facebook Debugger (ES)
- [ ] Verificado en Facebook Debugger (EN)
- [ ] Verificado en Twitter Card Validator
- [ ] Verificado en WhatsApp (enviar link)
- [ ] Preview se ve bien en todas las plataformas
- [ ] No hay errores en consola

---

## 📚 Documentación Adicional

- **Guía rápida de imagen:** `docs/OG-IMAGE-QUICK-GUIDE.md`
- **Guía de verificación:** `scripts/verify-og-tags.md`
- **Utilidades de metadata:** `lib/metadata-utils.ts`

---

## 🎉 Resultado Esperado

Cuando compartas tu sitio en redes sociales, verás:

```
┌─────────────────────────────────────┐
│  [Imagen OG con tu diseño]         │
│   Chill Chess Club                  │
│   Personalized Classes              │
├─────────────────────────────────────┤
│ Chill Chess Club                    │
│ Personalized Online Chess Classes   │
│ Learn chess online with...          │
│ chill-chess-club.vercel.app         │
└─────────────────────────────────────┘
```

---

## 🚀 Próximas Mejoras (Opcional)

1. **Structured Data (Schema.org)**

   - Agregar JSON-LD para mejor SEO
   - Tipo: EducationalOrganization

2. **Imágenes OG Dinámicas**

   - Diferentes imágenes por sección
   - Blog, Cursos, Recursos

3. **Verificación de Sitio**

   - Google Search Console
   - Bing Webmaster Tools

4. **Analytics**
   - Google Analytics
   - Plausible Analytics

---

## 📞 Soporte

Si tienes problemas:

1. Revisa `scripts/verify-og-tags.md`
2. Usa las herramientas de debugging
3. Verifica la consola del navegador
4. Contacta al desarrollador

---

**¡Listo! Tu sitio ahora tiene Open Graph completo y se verá profesional en todas las redes sociales.** 🎉

**Última actualización:** 2025-11-03
**Versión:** 1.0
