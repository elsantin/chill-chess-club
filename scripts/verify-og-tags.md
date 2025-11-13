# 🔍 Guía de Verificación de Open Graph y Meta Tags

## 📋 Checklist de Implementación

### ✅ Archivos Creados/Modificados

- [x] `app/[locale]/layout.tsx` - Metadata mejorada con OG completo
- [x] `public/og-image.jpg` - Imagen Open Graph (1200x630px)
- [x] `scripts/generate-og-image.js` - Script para generar imagen
- [x] `scripts/verify-og-tags.md` - Esta guía

### ✅ Meta Tags Implementados

#### Open Graph (Facebook, WhatsApp, LinkedIn)

- [x] `og:title` - Título del sitio
- [x] `og:description` - Descripción del sitio
- [x] `og:url` - URL canónica
- [x] `og:type` - Tipo de contenido (website)
- [x] `og:image` - Imagen principal (1200x630px)
- [x] `og:image:width` - Ancho de imagen (1200)
- [x] `og:image:height` - Alto de imagen (630)
- [x] `og:image:type` - Tipo de imagen (image/jpeg)
- [x] `og:image:alt` - Texto alternativo
- [x] `og:site_name` - Nombre del sitio
- [x] `og:locale` - Idioma principal (es_ES / en_US)
- [x] `og:locale:alternate` - Idioma alternativo

#### Twitter Card

- [x] `twitter:card` - Tipo de tarjeta (summary_large_image)
- [x] `twitter:title` - Título
- [x] `twitter:description` - Descripción
- [x] `twitter:image` - Imagen
- [x] `twitter:creator` - Creador (@handle)
- [x] `twitter:site` - Sitio (@handle)

#### SEO Básico

- [x] `title` - Título de la página
- [x] `description` - Meta descripción
- [x] `keywords` - Palabras clave
- [x] `canonical` - URL canónica
- [x] `alternate` - URLs alternativas (idiomas)
- [x] `robots` - Instrucciones para bots

---

## 🧪 Herramientas de Verificación

### 1. Facebook Sharing Debugger (Recomendado)

**URL:** https://developers.facebook.com/tools/debug/

**Cómo usar:**

1. Pega tu URL: `https://chill-chess-club.vercel.app/es`
2. Click en "Debug"
3. Verifica que aparezcan:
   - Título correcto
   - Descripción correcta
   - Imagen OG (1200x630px)
4. Click en "Scrape Again" si hiciste cambios

**Qué verificar:**

- ✅ Imagen se muestra correctamente
- ✅ Título y descripción son correctos
- ✅ No hay errores o warnings
- ✅ Preview se ve bien

---

### 2. Twitter Card Validator

**URL:** https://cards-dev.twitter.com/validator

**Cómo usar:**

1. Pega tu URL: `https://chill-chess-club.vercel.app/en`
2. Click en "Preview card"
3. Verifica el preview

**Nota:** Necesitas estar logueado en Twitter

---

### 3. LinkedIn Post Inspector

**URL:** https://www.linkedin.com/post-inspector/

**Cómo usar:**

1. Pega tu URL
2. Click en "Inspect"
3. Verifica el preview

---

### 4. WhatsApp Link Preview

**Cómo verificar:**

1. Envía tu URL a un chat de WhatsApp (puedes enviártela a ti mismo)
2. Verifica que aparezca:
   - Imagen
   - Título
   - Descripción

**Nota:** WhatsApp usa los mismos tags que Facebook (Open Graph)

---

### 5. Herramientas Online Generales

#### OpenGraph.xyz

**URL:** https://www.opengraph.xyz/

- Verifica todos los tags OG
- Muestra preview en múltiples plataformas
- Detecta errores

#### Meta Tags Checker

**URL:** https://metatags.io/

- Preview en tiempo real
- Verifica OG, Twitter, y SEO
- Genera código si falta algo

#### Social Share Preview

**URL:** https://socialsharepreview.com/

- Preview en Facebook, Twitter, LinkedIn
- Verifica múltiples URLs a la vez

---

## 🖼️ Crear/Optimizar Imagen OG

### Opción 1: Canva (Recomendado - Fácil)

1. **Ir a Canva:**

   - https://www.canva.com/

2. **Crear diseño personalizado:**

   - Click en "Create a design"
   - Dimensiones: 1200 x 630 px
   - O buscar "Open Graph" en plantillas

3. **Diseñar:**

   - Fondo: Gradiente sunset (naranja → rosa → púrpura)
   - Logo: Chill Chess Club (si tienes)
   - Título: "Chill Chess Club" (grande, bold)
   - Subtítulo: "Personalized Online Chess Classes"
   - Iconos: Piezas de ajedrez (opcional)

4. **Descargar:**

   - File → Download
   - Tipo: JPG
   - Calidad: Alta
   - Guardar como: `og-image.jpg`

5. **Colocar en proyecto:**
   - Mover archivo a: `public/og-image.jpg`

---

### Opción 2: Figma (Profesional)

1. **Crear frame:**

   - Dimensiones: 1200 x 630 px

2. **Diseñar:**

   - Usar componentes y estilos
   - Gradiente sunset
   - Tipografía clara y legible

3. **Exportar:**
   - Seleccionar frame
   - Export → JPG
   - 2x quality
   - Guardar como `og-image.jpg`

---

### Opción 3: Vercel OG Image (Automático)

1. **Ir a:**

   - https://og-image.vercel.app/

2. **Configurar:**

   - Texto: "Chill Chess Club"
   - Subtexto: "Personalized Online Chess Classes"
   - Tema: Dark
   - Fuente: Bold

3. **Descargar:**
   - Click derecho en preview
   - "Save image as..."
   - Guardar como `og-image.jpg`

---

### Opción 4: Script Automático (Avanzado)

```bash
# Instalar dependencia
npm install canvas

# Ejecutar script
node scripts/generate-og-image.js
```

---

## 📐 Especificaciones de Imagen OG

### Dimensiones Recomendadas

- **Facebook/LinkedIn/WhatsApp:** 1200 x 630 px (ratio 1.91:1)
- **Twitter:** 1200 x 628 px (casi igual)
- **Mínimo:** 600 x 315 px
- **Máximo:** 8 MB (recomendado <300 KB)

### Formato

- **Recomendado:** JPG (mejor compresión)
- **Alternativo:** PNG (si necesitas transparencia)
- **Evitar:** GIF, WebP (no soportado en todas las plataformas)

### Contenido Visible

- **Área segura:** Centro 1200 x 600 px
- **Evitar texto en bordes:** Puede cortarse en móviles
- **Tamaño de texto:** Mínimo 60px para legibilidad

### Optimización

```bash
# Comprimir con ImageMagick
convert og-image.jpg -quality 85 -strip og-image-optimized.jpg

# Comprimir con TinyPNG (online)
# https://tinypng.com/
```

---

## 🌐 Verificar en Diferentes Idiomas

### Español

```
https://chill-chess-club.vercel.app/es
```

### Inglés

```
https://chill-chess-club.vercel.app/en
```

**Verificar que:**

- Título cambia según idioma
- Descripción cambia según idioma
- `og:locale` es correcto (es_ES / en_US)
- Imagen es la misma (o diferente si tienes versiones por idioma)

---

## 🐛 Problemas Comunes y Soluciones

### Problema: Imagen no aparece

**Soluciones:**

1. Verificar que `og-image.jpg` existe en `public/`
2. Verificar URL completa: `https://chill-chess-club.vercel.app/og-image.jpg`
3. Verificar que imagen es accesible (no bloqueada por robots.txt)
4. Limpiar caché de Facebook: https://developers.facebook.com/tools/debug/
5. Esperar 5-10 minutos después de deploy

---

### Problema: Imagen antigua en caché

**Soluciones:**

1. Cambiar nombre de archivo: `og-image-v2.jpg`
2. Agregar query string: `og-image.jpg?v=2`
3. Usar Facebook Debugger → "Scrape Again"
4. Esperar 24-48 horas para caché global

---

### Problema: Título/descripción incorrectos

**Soluciones:**

1. Verificar `messages/es.json` y `messages/en.json`
2. Verificar que `metadata.title` y `metadata.description` existen
3. Rebuild y redeploy
4. Limpiar caché del navegador

---

### Problema: Imagen muy grande (>300 KB)

**Soluciones:**

1. Comprimir con TinyPNG: https://tinypng.com/
2. Reducir calidad JPG a 80-85%
3. Usar herramientas de optimización:
   ```bash
   npm install -g imagemin-cli
   imagemin og-image.jpg --plugin=mozjpeg > og-image-optimized.jpg
   ```

---

## ✅ Checklist Final

Antes de considerar completo:

- [ ] Imagen OG creada (1200x630px, <300KB)
- [ ] Imagen colocada en `public/og-image.jpg`
- [ ] Imagen accesible en: `https://chill-chess-club.vercel.app/og-image.jpg`
- [ ] Metadata actualizada en `app/[locale]/layout.tsx`
- [ ] Deploy realizado a Vercel
- [ ] Verificado en Facebook Debugger (ES + EN)
- [ ] Verificado en Twitter Card Validator
- [ ] Verificado en LinkedIn Post Inspector
- [ ] Verificado en WhatsApp (enviar link)
- [ ] Preview se ve bien en todas las plataformas
- [ ] Título y descripción correctos en ambos idiomas
- [ ] No hay errores en consola del navegador

---

## 📱 Preview Esperado

### Facebook/WhatsApp/LinkedIn

```
┌─────────────────────────────────────┐
│                                     │
│     [Imagen OG 1200x630]           │
│     Chill Chess Club                │
│     Personalized Classes            │
│                                     │
├─────────────────────────────────────┤
│ Chill Chess Club                    │
│ Personalized Online Chess Classes   │
│ Learn chess online with...          │
│ chill-chess-club.vercel.app         │
└─────────────────────────────────────┘
```

### Twitter

```
┌─────────────────────────────────────┐
│     [Imagen OG 1200x628]           │
│                                     │
├─────────────────────────────────────┤
│ Chill Chess Club                    │
│ Personalized Online Chess Classes   │
│ chill-chess-club.vercel.app         │
└─────────────────────────────────────┘
```

---

## 🚀 Próximos Pasos (Opcional)

### 1. Imágenes OG Dinámicas por Página

Crear imágenes diferentes para:

- Home: `og-image.jpg`
- Blog: `og-image-blog.jpg`
- Cursos: `og-image-courses.jpg`

### 2. Twitter Handle Real

Actualizar en `layout.tsx`:

```typescript
twitter: {
  creator: "@tu_handle_real",
  site: "@tu_handle_real",
}
```

### 3. Verificación de Sitio

Agregar códigos de verificación:

```typescript
verification: {
  google: 'tu-codigo-google',
  yandex: 'tu-codigo-yandex',
}
```

### 4. Structured Data (Schema.org)

Agregar JSON-LD para mejor SEO:

```typescript
// En layout.tsx o page.tsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Chill Chess Club",
  "description": "...",
  "url": "https://chill-chess-club.vercel.app"
}
</script>
```

---

## 📞 Soporte

Si tienes problemas:

1. Revisa esta guía completa
2. Verifica la consola del navegador
3. Usa las herramientas de debugging mencionadas
4. Contacta al desarrollador

---

**Última actualización:** 2025-11-03
**Versión:** 1.0
