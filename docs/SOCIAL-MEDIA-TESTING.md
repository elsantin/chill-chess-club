# Social Media OG Image Testing Guide

## 🎯 Objetivo

Verificar que las imágenes Open Graph se muestran correctamente en diferentes plataformas de redes sociales.

## 📋 Herramientas de Testing

### 1. Facebook Sharing Debugger

**URL:** https://developers.facebook.com/tools/debug/

**Cómo usar:**

1. Pega la URL de tu sitio (ej: `https://chill-chess-club.vercel.app/es`)
2. Click en "Debug"
3. Verifica que aparezca tu imagen OG dinámica
4. Click en "Scrape Again" si necesitas refrescar

**URLs para probar:**

- Página principal ES: `https://chill-chess-club.vercel.app/es`
- Página principal EN: `https://chill-chess-club.vercel.app/en`
- Blog post: `https://chill-chess-club.vercel.app/es/blog/echoes-from-the-board`
- Recurso: `https://chill-chess-club.vercel.app/es/recursos/[slug]`

---

### 2. Twitter Card Validator

**URL:** https://cards-dev.twitter.com/validator

**Cómo usar:**

1. Pega la URL de tu sitio
2. Click en "Preview card"
3. Verifica que la imagen se muestre correctamente

**Nota:** Necesitas estar logueado en Twitter

---

### 3. LinkedIn Post Inspector

**URL:** https://www.linkedin.com/post-inspector/

**Cómo usar:**

1. Pega la URL de tu sitio
2. Click en "Inspect"
3. Verifica la preview

---

### 4. WhatsApp Link Preview

**Cómo probar:**

1. Envía un mensaje a ti mismo con la URL
2. Verifica que aparezca la imagen OG
3. Prueba con diferentes páginas

**Nota:** WhatsApp cachea agresivamente. Si no ves cambios:

- Espera 24 horas
- O usa una URL con parámetro: `?v=1`, `?v=2`, etc.

---

## ✅ Checklist de Pruebas

### Página Principal

- [ ] Facebook muestra imagen con logo y título
- [ ] Twitter muestra imagen correctamente
- [ ] LinkedIn muestra imagen correctamente
- [ ] WhatsApp muestra preview con imagen
- [ ] Imagen en español (/es) funciona
- [ ] Imagen en inglés (/en) funciona

### Blog Posts

- [ ] Facebook muestra imagen con badge "📝 Blog"
- [ ] Twitter muestra imagen del post
- [ ] Título del post aparece en la imagen
- [ ] Badge de blog visible
- [ ] Funciona en ambos idiomas

### Recursos

- [ ] Facebook muestra imagen con badge "📚 Recurso/Resource"
- [ ] Badge cambia según idioma (Recurso/Resource)
- [ ] Título del recurso aparece correctamente
- [ ] Funciona en ambos idiomas

---

## 🔍 Qué Verificar en Cada Imagen

1. **Logo visible:** El logo de 180x180px debe verse claramente
2. **Texto legible:** "Chill Chess Club" debe ser legible
3. **Título correcto:** El título de la página debe aparecer
4. **Badge apropiado:** Blog/Recurso según el tipo de página
5. **Colores correctos:** Gradiente oscuro → sunset → rose
6. **Dimensiones:** 1200x630px (las plataformas lo manejan automáticamente)
7. **Sin truncamiento:** Títulos largos deben truncarse con "..."

---

## 🐛 Troubleshooting

### La imagen no aparece

1. Verifica que el sitio esté en producción (no localhost)
2. Usa las herramientas de debug para ver qué URL está leyendo
3. Verifica que `/api/og` esté accesible públicamente

### La imagen es vieja

1. Usa "Scrape Again" en Facebook Debugger
2. En WhatsApp, agrega `?v=2` al final de la URL
3. Espera 24 horas para que expire el caché

### La imagen se ve cortada

1. Verifica que las dimensiones sean 1200x630
2. Revisa el código del API route
3. Prueba la URL directa: `https://chill-chess-club.vercel.app/api/og?title=Test`

---

## 📊 Resultados Esperados

### Página Principal

```
┌─────────────────────────────────────┐
│        [Logo 180x180]               │
│     Chill Chess Club                │
│                                     │
│ Clases de Ajedrez Online           │
│ Personalizadas                      │
└─────────────────────────────────────┘
```

### Blog Post

```
┌─────────────────────────────────────┐
│        [Logo 180x180]               │
│     Chill Chess Club                │
│                                     │
│ 5 Pasos hacia el                   │
│ Ajedrez Online                      │
│                                     │
│ 📝 Blog                             │
└─────────────────────────────────────┘
```

### Recurso

```
┌─────────────────────────────────────┐
│        [Logo 180x180]               │
│     Chill Chess Club                │
│                                     │
│ Guía de Aperturas                  │
│                                     │
│ 📚 Recurso                          │
└─────────────────────────────────────┘
```

---

## 🎨 Testing Local (Antes de Deploy)

Puedes probar las imágenes localmente visitando:

```
http://localhost:3000/api/og?title=Test&locale=es&type=default
http://localhost:3000/api/og?title=Blog%20Post&locale=en&type=blog
http://localhost:3000/api/og?title=Resource&locale=es&type=resource
```

**Nota:** Las herramientas de redes sociales solo funcionan con URLs públicas (HTTPS).

---

## ✅ Criterios de Éxito

- ✅ Todas las plataformas muestran la imagen
- ✅ Logo visible y claro
- ✅ Texto legible
- ✅ Badges correctos según tipo
- ✅ Idiomas funcionan correctamente
- ✅ Sin errores en las herramientas de debug
- ✅ Imágenes se cargan en < 2 segundos

---

## 📝 Notas Adicionales

- Las imágenes se cachean por 1 año (`max-age=31536000`)
- Cada combinación de parámetros genera una URL única
- El sistema funciona automáticamente, no requiere regeneración manual
- Si cambias el diseño, las nuevas imágenes se generan automáticamente
