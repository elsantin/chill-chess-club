# Requirements Document

## Introduction

Este spec documenta las mejoras finales necesarias para llevar el sitio web "Chill Chess Club" a un estado production-ready. El proyecto ha completado exitosamente su rediseño neumórfico y la implementación de las secciones de Blog y Recursos. Sin embargo, quedan pendientes tres áreas críticas que afectan la experiencia del usuario y la completitud del sitio bilingüe:

1. **Formato de contenido en artículos**: El contenido de los artículos de blog y recursos se muestra actualmente como texto plano sin estilos, lo que dificulta la legibilidad y no se alinea con la estética neumórfica del resto del sitio.

2. **Ajuste de espaciado en la sección "Sobre Mí"**: Existe un espaciado excesivo entre la foto de perfil y el texto adyacente que rompe la composición visual y hace que la sección se sienta desbalanceada.

3. **Traducción de contenido al inglés**: Todo el contenido de blog y recursos está actualmente solo en español, pero el sitio es bilingüe (español/inglés). Los usuarios que navegan en inglés no tienen acceso a este contenido educativo.

Este spec aborda estas tres áreas para completar el pulido final del sitio.

---

## Requirements

### Requirement 1: Formato de Contenido en Artículos y Recursos

**Clarificación Visual:**

La página de un artículo/recurso tiene DOS secciones distintas:

1. **ENCABEZADO (Hero Section) - NO TOCAR:**

   - Imagen destacada con efectos neumórficos
   - Título principal del artículo
   - Metadata (autor, fecha, categoría, tiempo de lectura)
   - Excerpt/descripción breve
   - Efectos visuales, gradientes, sombras
   - **Estado: Ya está perfectamente estilizado**

2. **CONTENIDO DEL ARTÍCULO - FORMATEAR:**
   - El texto largo que viene del campo `content` en los datos
   - Actualmente se muestra como texto blanco plano sin formato
   - Incluye h2, h3, párrafos, listas, etc.
   - **Estado: Necesita estilos tipográficos**

### Requirement 1: Formato de Contenido en Artículos y Recursos

**User Story:** Como usuario que lee un artículo de blog o recurso educativo, quiero que el contenido del cuerpo del artículo tenga un formato visual claro y atractivo, para que pueda leer cómodamente y distinguir entre títulos, párrafos, listas y otros elementos del texto.

**IMPORTANTE:** Esta mejora aplica ÚNICAMENTE al contenido del artículo (el texto que viene del campo `content` en los datos). El encabezado de la página (que incluye la imagen destacada, título principal, metadata como fecha/autor/categoría, y el excerpt) ya está correctamente estilizado y NO debe ser modificado.

#### Acceptance Criteria

1. WHEN un usuario navega a la página de un artículo individual (`/blog/[slug]`) THEN el contenido del cuerpo del artículo (campo `content`) SHALL mostrar estilos tipográficos consistentes con la estética neumórfica del sitio
2. WHEN un usuario navega a la página de un recurso individual (`/recursos/[slug]`) THEN el contenido del cuerpo del recurso (campo `content`) SHALL mostrar los mismos estilos tipográficos que los artículos de blog
3. WHEN el contenido del cuerpo incluye títulos (h2, h3) THEN estos SHALL tener un tamaño de fuente mayor, la tipografía Playfair Display, color sunset/warmGray apropiado, y un espaciado superior e inferior apropiado
4. WHEN el contenido del cuerpo incluye párrafos THEN estos SHALL tener un interlineado cómodo (leading-relaxed), color de texto warmGray-200 (#e7e5e4), y espaciado entre párrafos (mb-4 o similar)
5. WHEN el contenido del cuerpo incluye listas (ul, ol) THEN estas SHALL mostrar viñetas o números apropiados, indentación, color warmGray-200, y espaciado entre items
6. WHEN el contenido del cuerpo incluye elementos strong o em THEN estos SHALL tener el peso de fuente o estilo apropiado con color que mantenga contraste
7. WHEN un usuario lee el contenido en dispositivos móviles THEN el formato SHALL ser responsive y mantener la legibilidad
8. IF el contenido del cuerpo incluye blockquotes THEN estos SHALL tener un estilo distintivo con borde lateral sunset, fondo sutil warmGray, y padding apropiado
9. WHEN se aplican los estilos THEN estos SHALL afectar SOLO al contenido renderizado del campo `content`, NO al encabezado de la página (hero section con imagen, título, metadata)
10. WHEN se implementa el formato THEN el encabezado existente (imagen destacada, título principal, autor, fecha, categoría, excerpt) SHALL permanecer sin cambios
11. WHEN se aplican los estilos THEN estos SHALL crear una clara separación visual entre el encabezado de la página y el inicio del contenido del artículo

### Requirement 2: Ajuste de Espaciado en Sección "Sobre Mí"

**User Story:** Como visitante del sitio que lee la sección "Sobre Mí", quiero que la foto de perfil y el texto estén visualmente integrados y balanceados, para que la sección se sienta cohesiva y profesional.

#### Acceptance Criteria

1. WHEN un usuario visualiza la sección "Sobre Mí" en desktop THEN el espaciado horizontal (gap) entre la foto de perfil y el contenido de texto SHALL ser reducido de 12 unidades (gap-12) a 8 unidades (gap-8)
2. WHEN un usuario visualiza la sección en desktop THEN la foto de perfil SHALL estar visualmente más cerca del centro de la composición
3. WHEN un usuario visualiza la sección en dispositivos móviles THEN el espaciado SHALL permanecer apropiado para la vista vertical (stacked)
4. WHEN se realiza el ajuste THEN la foto de perfil SHALL mantener su tamaño, bordes, sombras y efectos de hover actuales
5. WHEN se realiza el ajuste THEN el contenido de texto (quote y párrafos) SHALL mantener su estructura y estilos actuales
6. WHEN un usuario visualiza la sección después del ajuste THEN la composición general SHALL sentirse más integrada y compacta sin perder legibilidad

### Requirement 3: Traducción de Contenido de Blog y Recursos al Inglés

**User Story:** Como usuario que navega el sitio en inglés, quiero acceder a los artículos de blog y recursos educativos en mi idioma, para que pueda aprender sobre ajedrez sin barreras lingüísticas.

#### Acceptance Criteria

1. WHEN el sistema de datos de blog es actualizado THEN cada entrada de blog SHALL incluir versiones en español e inglés del título, excerpt y contenido completo
2. WHEN el sistema de datos de recursos es actualizado THEN cada entrada de recurso SHALL incluir versiones en español e inglés del título, excerpt y contenido completo
3. WHEN un usuario navega el sitio con locale 'en' THEN las páginas de listado de blog y recursos SHALL mostrar títulos y excerpts en inglés
4. WHEN un usuario navega a un artículo individual con locale 'en' THEN el contenido completo del artículo SHALL mostrarse en inglés
5. WHEN un usuario navega a un recurso individual con locale 'en' THEN el contenido completo del recurso SHALL mostrarse en inglés
6. WHEN un usuario cambia el idioma del sitio THEN el contenido de blog y recursos SHALL cambiar al idioma correspondiente
7. WHEN se traduce el contenido THEN las traducciones SHALL mantener el tono profesional pero accesible del original en español
8. WHEN se traduce el contenido THEN los términos técnicos de ajedrez SHALL usar la terminología estándar en inglés (e.g., "opening" no "aperture", "endgame" no "final game")
9. IF el contenido incluye referencias culturales específicas del español THEN estas SHALL ser adaptadas apropiadamente para audiencia anglófona
10. WHEN se implementa la traducción THEN la estructura de datos (interfaces TypeScript) SHALL ser actualizada para soportar contenido multilingüe
11. WHEN se implementa la traducción THEN los componentes que consumen estos datos SHALL ser actualizados para seleccionar el idioma correcto basado en el locale actual

---

## Technical Considerations

### Content Formatting

- Los estilos deben aplicarse mediante clases de Tailwind CSS para mantener consistencia
- Se debe considerar crear una clase de utilidad o componente wrapper para el contenido formateado
- Los estilos deben respetar la paleta de colores neumórfica (warmGray, sunset)

### About Section Spacing

- El ajuste es mínimo (gap-12 → gap-8) para evitar cambios drásticos
- Se debe verificar en múltiples tamaños de pantalla (mobile, tablet, desktop)

### i18n Implementation

- La estructura de datos actual usa un array simple; necesitará ser refactorizada para soportar múltiples idiomas
- Opciones de implementación:
  - Opción A: Objetos con propiedades `es` y `en` para cada campo traducible
  - Opción B: Arrays separados por idioma (`blogPostsEs`, `blogPostsEn`)
  - Opción C: Archivos de datos separados por idioma (`blog-data.es.ts`, `blog-data.en.ts`)
- Los componentes necesitarán acceso al locale actual (disponible via `useLocale()` de next-intl)

### Translation Quality

- Las traducciones deben ser realizadas por alguien con conocimiento de:
  - Terminología de ajedrez en inglés
  - Tono y estilo del contenido original
  - Contexto cultural apropiado
- Se recomienda revisión por hablante nativo de inglés

---

## Success Metrics

1. **Legibilidad mejorada**: Los usuarios pueden leer artículos completos sin fatiga visual
2. **Composición visual balanceada**: La sección "Sobre Mí" se siente cohesiva y profesional
3. **Paridad de contenido bilingüe**: Los usuarios en inglés tienen acceso al 100% del contenido educativo
4. **Consistencia de diseño**: Todo el contenido respeta la estética neumórfica del sitio
5. **Experiencia responsive**: El contenido se ve bien en todos los tamaños de pantalla

---

## Out of Scope

- Creación de nuevo contenido de blog o recursos
- Traducción de otros elementos del sitio (ya están traducidos via messages/es.json y messages/en.json)
- Implementación de un CMS o sistema de gestión de contenido
- Optimización SEO específica para contenido multilingüe
- Implementación de comentarios o interacción en artículos
