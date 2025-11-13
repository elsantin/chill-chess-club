# 🎨 Guía Rápida: Crear Imagen Open Graph

## ⚡ Opción Más Rápida (5 minutos)

### Usar Canva (RECOMENDADO)

1. **Ir a Canva:**

   ```
   https://www.canva.com/create/open-graph/
   ```

2. **Crear diseño:**

   - Click en "Create a design"
   - Buscar "Open Graph" o crear custom: 1200 x 630 px

3. **Diseñar tu imagen:**

   **Fondo:**

   - Gradiente de izquierda a derecha
   - Color 1: `#f59e0b` (naranja)
   - Color 2: `#ec4899` (rosa)
   - Color 3: `#8b5cf6` (púrpura)

   **Texto Principal (Centro):**

   - "Chill Chess Club"
   - Fuente: Playfair Display o similar (serif, elegante)
   - Tamaño: 80-100px
   - Color: Blanco (#ffffff)
   - Bold

   **Subtítulo (Debajo del título):**

   - "Personalized Online Chess Classes"
   - Fuente: Roboto o similar (sans-serif)
   - Tamaño: 40-50px
   - Color: Blanco (#ffffff)

   **Texto Adicional (Abajo):**

   - "AI-Assisted Learning • Flexible Schedule"
   - Tamaño: 30px
   - Color: Blanco con 80% opacidad

   **Elementos Opcionales:**

   - Iconos de piezas de ajedrez (rey, reina)
   - Logo si lo tienes
   - Overlay oscuro (negro con 30% opacidad) para mejor legibilidad

4. **Descargar:**

   - File → Download
   - Tipo: JPG
   - Calidad: Alta (no comprimir demasiado)

5. **Guardar en proyecto:**
   - Renombrar a: `og-image.jpg`
   - Mover a carpeta: `public/og-image.jpg`

---

## 🎯 Especificaciones Exactas

```
Dimensiones: 1200 x 630 px
Formato: JPG
Tamaño: < 300 KB (idealmente < 200 KB)
Ratio: 1.91:1
```

---

## 🎨 Paleta de Colores del Sitio

```css
/* Gradiente Sunset */
Naranja: #f59e0b (amber-500)
Rosa:    #ec4899 (pink-500)
Púrpura: #8b5cf6 (purple-500)

/* Fondo Oscuro */
Slate 900: #0f172a
Slate 800: #1e293b

/* Texto */
Blanco: #ffffff
Gris claro: #cbd5e1
```

---

## 📐 Layout Sugerido

```
┌─────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│                                                 │
│            Chill Chess Club                     │
│     Personalized Online Chess Classes           │
│                                                 │
│    AI-Assisted Learning • Flexible Schedule     │
│                                                 │
│                                                 │
└─────────────────────────────────────────────────┘
     1200px x 630px
```

---

## ✅ Checklist

- [ ] Dimensiones: 1200 x 630 px
- [ ] Formato: JPG
- [ ] Tamaño: < 300 KB
- [ ] Texto legible (mínimo 60px)
- [ ] Colores del brand (sunset gradient)
- [ ] Guardado como `og-image.jpg`
- [ ] Colocado en `public/og-image.jpg`
- [ ] Verificado que se ve bien en preview

---

## 🚀 Después de Crear la Imagen

1. **Colocar en proyecto:**

   ```bash
   # Mover imagen a public
   mv og-image.jpg public/
   ```

2. **Verificar que existe:**

   ```bash
   ls public/og-image.jpg
   ```

3. **Commit y push:**

   ```bash
   git add public/og-image.jpg
   git commit -m "feat: add Open Graph image"
   git push
   ```

4. **Esperar deploy de Vercel** (2-3 minutos)

5. **Verificar URL:**

   ```
   https://chill-chess-club.vercel.app/og-image.jpg
   ```

6. **Testear en Facebook Debugger:**
   ```
   https://developers.facebook.com/tools/debug/
   ```
   - Pegar: `https://chill-chess-club.vercel.app/es`
   - Click "Debug"
   - Verificar que imagen aparece

---

## 🎨 Plantilla de Texto para Canva

Copia y pega esto en Canva:

**Título:**

```
Chill Chess Club
```

**Subtítulo:**

```
Personalized Online Chess Classes
```

**Descripción:**

```
AI-Assisted Learning • Flexible Schedule
```

---

## 💡 Tips Profesionales

1. **Mantén el texto centrado** - Más fácil de leer
2. **Usa contraste alto** - Texto blanco sobre fondo oscuro
3. **No pongas texto en los bordes** - Puede cortarse en móviles
4. **Prueba en móvil** - Verifica que se ve bien en pantalla pequeña
5. **Usa fuentes del sitio** - Playfair Display + Roboto
6. **Agrega overlay oscuro** - Si el gradiente es muy claro

---

## 🔗 Enlaces Útiles

- **Canva:** https://www.canva.com/
- **Verificar OG:** https://developers.facebook.com/tools/debug/
- **Comprimir imagen:** https://tinypng.com/
- **Preview OG:** https://www.opengraph.xyz/

---

## ❓ ¿Necesitas Ayuda?

Si no puedes crear la imagen, puedes:

1. **Usar generador automático:**

   ```
   https://og-image.vercel.app/
   ```

   - Escribe: "Chill Chess Club"
   - Descarga y usa

2. **Usar imagen temporal:**

   - Busca "chess online" en Unsplash
   - Descarga imagen 1200x630
   - Agrega texto con Canva

3. **Contratar diseñador:**
   - Fiverr: $5-20
   - Upwork: $10-50
   - 99designs: $50-200

---

**¡Listo! En 5 minutos tendrás tu imagen OG profesional.**
