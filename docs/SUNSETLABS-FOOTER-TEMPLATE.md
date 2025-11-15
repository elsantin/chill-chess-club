# 🌅 Template: Sunset Labs Footer

## 📋 Descripción

Footer reutilizable con branding de **Sunset Labs** - exactamente como está en Chill Chess Club.

**Características:**

- ✅ Animación de hover con glow effects
- ✅ Colores específicos (naranja #FDAD1F y rosa #C682B1)
- ✅ Brackets con efecto de código `{SunsetLabs}`
- ✅ Transiciones suaves (300ms)
- ✅ Responsive
- ✅ Accesible (WCAG 2.0 AA)

---

## 🎨 Preview

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    {SunsetLabs}                         │
│   Web Development from Margarita Island, Venezuela 🏝️  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Colores:**

- `{` y `}` → Rosa (#C682B1) → Magenta (#FE1784) on hover
- `Sunset` → Naranja (#FDAD1F) con glow
- `Labs` → Rosa (#C682B1) → Magenta (#FE1784) on hover

---

## 🚀 Implementación (EXACTA del proyecto)

### Paso 1: Agregar Colores a Tailwind

**Archivo:** `tailwind.config.js` o `tailwind.config.ts`

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        sunsetlabs: {
          orange: "#FDAD1F",
          pink: "#C682B1",
          magenta: "#FE1784",
        },
      },
    },
  },
};
```

---

### Paso 2: Componente Footer (VERSIÓN ORIGINAL)

**Archivo:** `components/SunsetLabsFooter.tsx`

```tsx
"use client";

export default function SunsetLabsFooter() {
  return (
    <div className="text-center pt-6 border-t border-gray-800/50">
      <a
        href="https://sunsetlabs.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block group"
      >
        <div className="flex items-center justify-center gap-1 mb-2">
          {/* Opening Bracket */}
          <span
            className="text-[#C682B1] text-lg font-mono group-hover:text-[#FE1784] transition-all duration-300"
            style={{ textShadow: "0 0 10px rgba(198, 130, 177, 0.3)" }}
          >
            {"{"}
          </span>

          {/* Sunset - Orange */}
          <span
            className="text-[#FDAD1F] font-bold text-base tracking-wide group-hover:text-[#FDAD1F] transition-all duration-300"
            style={{
              textShadow: "0 0 15px rgba(253, 173, 31, 0.4)",
              fontFamily: "var(--font-roboto)",
            }}
          >
            Sunset
          </span>

          {/* Labs - Pink */}
          <span
            className="text-[#C682B1] font-bold text-base tracking-wide group-hover:text-[#FE1784] transition-all duration-300"
            style={{
              textShadow: "0 0 15px rgba(198, 130, 177, 0.4)",
              fontFamily: "var(--font-roboto)",
            }}
          >
            Labs
          </span>

          {/* Closing Bracket */}
          <span
            className="text-[#C682B1] text-lg font-mono group-hover:text-[#FE1784] transition-all duration-300"
            style={{ textShadow: "0 0 10px rgba(198, 130, 177, 0.3)" }}
          >
            {"}"}
          </span>
        </div>

        {/* Subtitle - TEXTO ORIGINAL */}
        <p className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors">
          Web Development from Margarita Island, Venezuela 🏝️
        </p>
      </a>
    </div>
  );
}
```

---

### Paso 3: Usar en tu Layout

**Archivo:** `app/layout.tsx`

```tsx
import SunsetLabsFooter from "@/components/SunsetLabsFooter";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>{children}</main>

        <footer className="bg-gray-950 border-t border-gray-800 py-8">
          <div className="container mx-auto px-4">
            {/* Tu contenido de footer aquí */}

            {/* Sunset Labs Branding */}
            <SunsetLabsFooter />
          </div>
        </footer>
      </body>
    </html>
  );
}
```

---

## 🎨 Variantes

### Variante 1: Footer Completo (Como en Chill Chess Club)

```tsx
"use client";

export default function FullFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">Tu Sitio</h3>
            <p className="text-gray-200 text-sm">
              Descripción de tu sitio web o aplicación.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-orange-400 mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-400 text-sm"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-400 text-sm"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-400 text-sm"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-orange-400 mb-4">
              Contacto
            </h4>
            <p className="text-gray-200 text-sm mb-4">contacto@tusitio.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-gray-400 text-xs">
              © {currentYear} Tu Sitio. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 text-xs"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 text-xs"
              >
                Términos
              </a>
            </div>
          </div>

          {/* Sunset Labs Branding - VERSIÓN ORIGINAL */}
          <div className="text-center pt-6 border-t border-gray-800/50">
            <a
              href="https://sunsetlabs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                <span
                  className="text-[#C682B1] text-lg font-mono group-hover:text-[#FE1784] transition-all duration-300"
                  style={{ textShadow: "0 0 10px rgba(198, 130, 177, 0.3)" }}
                >
                  {"{"}
                </span>
                <span
                  className="text-[#FDAD1F] font-bold text-base tracking-wide transition-all duration-300"
                  style={{
                    textShadow: "0 0 15px rgba(253, 173, 31, 0.4)",
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  Sunset
                </span>
                <span
                  className="text-[#C682B1] font-bold text-base tracking-wide group-hover:text-[#FE1784] transition-all duration-300"
                  style={{
                    textShadow: "0 0 15px rgba(198, 130, 177, 0.4)",
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  Labs
                </span>
                <span
                  className="text-[#C682B1] text-lg font-mono group-hover:text-[#FE1784] transition-all duration-300"
                  style={{ textShadow: "0 0 10px rgba(198, 130, 177, 0.3)" }}
                >
                  {"}"}
                </span>
              </div>
              <p className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors">
                Web Development from Margarita Island, Venezuela 🏝️
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

### Variante 2: Footer Minimalista (Para páginas legales)

```tsx
"use client";

export default function MinimalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <div className="text-center mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Volver al Inicio
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mb-6">
          <p className="text-gray-500 text-xs">
            © {currentYear} Tu Sitio. Todos los derechos reservados.
          </p>
        </div>

        {/* Sunset Labs Branding - VERSIÓN ORIGINAL */}
        <div className="text-center pt-6 border-t border-gray-800/50">
          <a
            href="https://sunsetlabs.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <div className="flex items-center justify-center gap-1 mb-2">
              <span
                className="text-[#C682B1] text-lg font-mono group-hover:text-[#FE1784] transition-all duration-300"
                style={{ textShadow: "0 0 10px rgba(198, 130, 177, 0.3)" }}
              >
                {"{"}
              </span>
              <span
                className="text-[#FDAD1F] font-bold text-base tracking-wide transition-all duration-300"
                style={{
                  textShadow: "0 0 15px rgba(253, 173, 31, 0.4)",
                  fontFamily: "var(--font-roboto)",
                }}
              >
                Sunset
              </span>
              <span
                className="text-[#C682B1] font-bold text-base tracking-wide group-hover:text-[#FE1784] transition-all duration-300"
                style={{
                  textShadow: "0 0 15px rgba(198, 130, 177, 0.4)",
                  fontFamily: "var(--font-roboto)",
                }}
              >
                Labs
              </span>
              <span
                className="text-[#C682B1] text-lg font-mono group-hover:text-[#FE1784] transition-all duration-300"
                style={{ textShadow: "0 0 10px rgba(198, 130, 177, 0.3)" }}
              >
                {"}"}
              </span>
            </div>
            <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors">
              Web Development from Margarita Island, Venezuela 🏝️
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
}
```

---

### Variante 3: Solo el Branding (Para agregar a footer existente)

```tsx
export default function SunsetLabsBranding() {
  return (
    <div className="text-center pt-6 border-t border-gray-800/50">
      <a
        href="https://sunsetlabs.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block group"
      >
        <div className="flex items-center justify-center gap-1 mb-2">
          <span
            className="text-[#C682B1] text-lg font-mono group-hover:text-[#FE1784] transition-all duration-300"
            style={{ textShadow: "0 0 10px rgba(198, 130, 177, 0.3)" }}
          >
            {"{"}
          </span>
          <span
            className="text-[#FDAD1F] font-bold text-base tracking-wide transition-all duration-300"
            style={{
              textShadow: "0 0 15px rgba(253, 173, 31, 0.4)",
              fontFamily: "var(--font-roboto)",
            }}
          >
            Sunset
          </span>
          <span
            className="text-[#C682B1] font-bold text-base tracking-wide group-hover:text-[#FE1784] transition-all duration-300"
            style={{
              textShadow: "0 0 15px rgba(198, 130, 177, 0.4)",
              fontFamily: "var(--font-roboto)",
            }}
          >
            Labs
          </span>
          <span
            className="text-[#C682B1] text-lg font-mono group-hover:text-[#FE1784] transition-all duration-300"
            style={{ textShadow: "0 0 10px rgba(198, 130, 177, 0.3)" }}
          >
            {"}"}
          </span>
        </div>
        <p className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors">
          Web Development from Margarita Island, Venezuela 🏝️
        </p>
      </a>
    </div>
  );
}
```

---

## 🎨 Personalización

### Cambiar el Texto del Subtítulo

```tsx
// Español
<p className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors">
  Desarrollo Web desde la Isla de Margarita, Venezuela 🏝️
</p>

// Inglés (original)
<p className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors">
  Web Development from Margarita Island, Venezuela 🏝️
</p>

// Tu texto personalizado
<p className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors">
  Tu texto aquí
</p>
```

### Cambiar Colores

```tsx
// Naranja → Tu color
className="text-[#FDAD1F]"  // Cambia a text-[#TU_COLOR]
style={{ textShadow: "0 0 15px rgba(253, 173, 31, 0.4)" }}  // Ajusta RGB

// Rosa → Tu color
className="text-[#C682B1]"  // Cambia a text-[#TU_COLOR]
style={{ textShadow: "0 0 10px rgba(198, 130, 177, 0.3)" }}  // Ajusta RGB

// Magenta hover → Tu color
group-hover:text-[#FE1784]  // Cambia a group-hover:text-[#TU_COLOR]
```

### Cambiar Tamaño

```tsx
// Texto más grande
text-lg → text-xl
text-base → text-lg
text-xs → text-sm

// Texto más pequeño
text-lg → text-base
text-base → text-sm
text-xs → text-[10px]
```

### Sin Fuente Roboto

```tsx
// Remover esta línea si no tienes Roboto
fontFamily: "var(--font-roboto)",

// O cambiar a tu fuente
fontFamily: "var(--font-tu-fuente)",
```

---

## 📐 Especificaciones Exactas

```
Colores:
- Naranja:  #FDAD1F
- Rosa:     #C682B1
- Magenta:  #FE1784 (hover)

Efectos:
- Text shadow brackets: 0 0 10px rgba(198, 130, 177, 0.3)
- Text shadow texto: 0 0 15px rgba(253, 173, 31, 0.4) / rgba(198, 130, 177, 0.4)
- Transition: all 300ms

Fuente:
- Brackets: font-mono, text-lg
- Texto: font-bold, text-base, tracking-wide
- Subtítulo: text-xs

Texto:
- Español: "Desarrollo Web desde la Isla de Margarita, Venezuela 🏝️"
- Inglés: "Web Development from Margarita Island, Venezuela 🏝️"
```

---

## 🧪 Testing

### Visual Testing

1. ✅ Hover sobre el logo → Rosa cambia a magenta
2. ✅ Glow effect → Resplandor visible
3. ✅ Transición → Suave (300ms)
4. ✅ Responsive → Se ve bien en móvil
5. ✅ Link funciona → Abre sunsetlabs.dev

### Accesibilidad

```bash
# Contraste verificado
# Rosa #C682B1 sobre fondo oscuro → ✅ WCAG AA
# Naranja #FDAD1F sobre fondo oscuro → ✅ WCAG AA
# Gris #d1d5db sobre fondo oscuro → ✅ WCAG AA
```

---

## ✅ Checklist

- [ ] Colores agregados a Tailwind
- [ ] Componente creado
- [ ] Importado en layout
- [ ] Hover funciona correctamente
- [ ] Glow effect visible
- [ ] Link a sunsetlabs.dev funciona
- [ ] Texto correcto (con emoji 🏝️)
- [ ] Responsive en móvil
- [ ] Contraste accesible

---

## 💡 Notas Importantes

1. **El texto DEBE incluir el emoji 🏝️** - Es parte del diseño original
2. **La fuente Roboto es opcional** - Si no la tienes, el sistema usará sans-serif
3. **Los brackets `{}` son esenciales** - Le dan el toque de "código"
4. **El glow effect funciona mejor en fondos oscuros** - Usa bg-gray-950 o similar
5. **El hover solo afecta rosa → magenta** - El naranja se mantiene igual

---

## 📚 Código CSS Puro (Sin Tailwind)

Si no usas Tailwind:

```css
.sunsetlabs-footer {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(31, 41, 55, 0.5);
}

.sunsetlabs-link {
  display: inline-block;
  text-decoration: none;
}

.sunsetlabs-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.bracket {
  color: #c682b1;
  font-size: 1.125rem;
  font-family: monospace;
  text-shadow: 0 0 10px rgba(198, 130, 177, 0.3);
  transition: all 0.3s;
}

.sunsetlabs-link:hover .bracket {
  color: #fe1784;
}

.sunset-text {
  color: #fdad1f;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-shadow: 0 0 15px rgba(253, 173, 31, 0.4);
  font-family: "Roboto", sans-serif;
  transition: all 0.3s;
}

.labs-text {
  color: #c682b1;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-shadow: 0 0 15px rgba(198, 130, 177, 0.4);
  font-family: "Roboto", sans-serif;
  transition: all 0.3s;
}

.sunsetlabs-link:hover .labs-text {
  color: #fe1784;
}

.subtitle {
  color: #d1d5db;
  font-size: 0.75rem;
  transition: color 0.3s;
}

.sunsetlabs-link:hover .subtitle {
  color: #e5e7eb;
}
```

```html
<div class="sunsetlabs-footer">
  <a href="https://sunsetlabs.dev" target="_blank" class="sunsetlabs-link">
    <div class="sunsetlabs-logo">
      <span class="bracket">{</span>
      <span class="sunset-text">Sunset</span>
      <span class="labs-text">Labs</span>
      <span class="bracket">}</span>
    </div>
    <p class="subtitle">Web Development from Margarita Island, Venezuela 🏝️</p>
  </a>
</div>
```

---

## 🎯 Resultado Final

Al hacer hover sobre el logo:

- `{` y `}` cambian de rosa (#C682B1) a magenta (#FE1784)
- `Sunset` mantiene el naranja (#FDAD1F) con glow
- `Labs` cambia de rosa (#C682B1) a magenta (#FE1784)
- Subtítulo cambia de gris claro a más claro
- Transición suave de 300ms
- Efecto de resplandor (glow) visible

---

**Creado:** 2025-11-14
**Versión:** 2.0 (Corregida con texto original)
**Proyecto base:** Chill Chess Club
**Texto:** "Web Development from Margarita Island, Venezuela 🏝️"
