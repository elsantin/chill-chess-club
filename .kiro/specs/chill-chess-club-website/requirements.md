# Requirements Document

## Introduction

Chill Chess Club es un sitio web profesional para un instructor de ajedrez que ofrece clases personalizadas online. El sitio debe ser bilingüe (español/inglés), moderno, elegante y completamente responsive. Utilizará Next.js 14 con App Router, TypeScript, Tailwind CSS, y next-intl para internacionalización. El objetivo es crear una presencia web profesional que inspire confianza y facilite la conversión de visitantes en estudiantes.

## Requirements

### Requirement 1: Configuración del Proyecto y Stack Tecnológico

**User Story:** Como desarrollador, quiero configurar el proyecto con el stack tecnológico correcto, para que el sitio tenga una base sólida y moderna.

#### Acceptance Criteria

1. WHEN se inicializa el proyecto THEN el sistema SHALL usar Next.js 14 con App Router
2. WHEN se configura el lenguaje THEN el sistema SHALL usar TypeScript en todos los archivos
3. WHEN se configura el styling THEN el sistema SHALL usar Tailwind CSS con la paleta de colores especificada
4. WHEN se instalan dependencias THEN el sistema SHALL incluir next-intl, framer-motion, react-hook-form, zod, y react-icons
5. WHEN se configura Tailwind THEN el sistema SHALL incluir los colores personalizados (primary pink-500, secondary purple-500, accent amber-500, dark slate-900/950/800)
6. WHEN se configuran las fuentes THEN el sistema SHALL usar Playfair Display para headings y Roboto para body text

### Requirement 2: Sistema de Internacionalización (i18n)

**User Story:** Como visitante del sitio, quiero poder cambiar entre español e inglés, para que pueda leer el contenido en mi idioma preferido.

#### Acceptance Criteria

1. WHEN el usuario visita el sitio THEN el sistema SHALL detectar automáticamente el idioma del navegador
2. WHEN el usuario cambia de idioma THEN el sistema SHALL actualizar todo el contenido sin recargar la página
3. WHEN se configura next-intl THEN el sistema SHALL soportar rutas con locale ([locale])
4. WHEN se crean archivos de traducción THEN el sistema SHALL tener messages/es.json y messages/en.json completos
5. WHEN se navega entre páginas THEN el sistema SHALL mantener el idioma seleccionado
6. IF el idioma es español THEN el sistema SHALL mostrar todo el contenido en español
7. IF el idioma es inglés THEN el sistema SHALL mostrar todo el contenido en inglés

### Requirement 3: Header y Navegación

**User Story:** Como visitante, quiero una navegación clara y accesible, para que pueda encontrar fácilmente las secciones del sitio.

#### Acceptance Criteria

1. WHEN el usuario hace scroll THEN el header SHALL permanecer fijo en la parte superior (sticky)
2. WHEN el header está visible THEN el sistema SHALL mostrar el logo de Chill Chess Club
3. WHEN el header está visible THEN el sistema SHALL mostrar enlaces a: Sobre Mí, Cursos, Método, FAQ, Contacto
4. WHEN el usuario hace clic en un enlace de navegación THEN el sistema SHALL hacer smooth scroll a la sección correspondiente
5. WHEN el header está visible THEN el sistema SHALL incluir un selector de idioma (ES/EN)
6. WHEN el usuario hace clic en un enlace de idioma THEN el sistema SHALL cambiar el idioma sin recargar
7. WHEN el sitio se ve en mobile THEN el sistema SHALL mostrar un menú hamburguesa responsive
8. WHEN el usuario hace scroll hacia abajo THEN el header SHALL cambiar su fondo para mejor visibilidad

### Requirement 4: Sección Hero

**User Story:** Como visitante nuevo, quiero ver inmediatamente de qué trata el sitio, para que pueda decidir si me interesa.

#### Acceptance Criteria

1. WHEN el usuario carga la página THEN el sistema SHALL mostrar un título principal impactante
2. WHEN la sección hero está visible THEN el sistema SHALL mostrar un subtítulo descriptivo
3. WHEN la sección hero está visible THEN el sistema SHALL incluir dos CTAs: "Solicita tu Clase Gratuita" y "Conoce el Método"
4. WHEN el usuario hace clic en el CTA principal THEN el sistema SHALL hacer scroll a la sección de contacto
5. WHEN el usuario hace clic en el CTA secundario THEN el sistema SHALL hacer scroll a la sección de método
6. WHEN la sección hero se carga THEN el sistema SHALL mostrar animaciones suaves de entrada (fade-in)
7. WHEN la sección hero está visible THEN el sistema SHALL tener un fondo con gradiente oscuro

### Requirement 5: Sección About (Sobre Mí)

**User Story:** Como visitante interesado, quiero conocer al instructor, para que pueda confiar en su experiencia y método de enseñanza.

#### Acceptance Criteria

1. WHEN la sección About está visible THEN el sistema SHALL mostrar una foto del instructor (placeholder)
2. WHEN la sección About está visible THEN el sistema SHALL mostrar una cita inspiradora sobre ajedrez
3. WHEN la sección About está visible THEN el sistema SHALL mostrar dos párrafos sobre Santiago Narváez
4. WHEN la sección About está visible THEN el sistema SHALL incluir una subsección sobre el método de enseñanza
5. WHEN la sección About está visible THEN el sistema SHALL mostrar las plataformas utilizadas (Chess.com y Lichess)
6. WHEN la sección About está visible THEN el sistema SHALL incluir enlaces a los perfiles del instructor
7. WHEN la sección About está visible THEN el sistema SHALL incluir un CTA "Comienza tu Aprendizaje"
8. WHEN el usuario hace scroll a esta sección THEN el sistema SHALL animar los elementos con fade-in

### Requirement 6: Sección Courses (Cursos)

**User Story:** Como estudiante potencial, quiero ver los cursos disponibles y sus características, para que pueda elegir el que se adapte a mi nivel.

#### Acceptance Criteria

1. WHEN la sección Courses está visible THEN el sistema SHALL mostrar dos cards de cursos: Principiante e Intermedio
2. WHEN cada card está visible THEN el sistema SHALL mostrar una imagen representativa (placeholder)
3. WHEN cada card está visible THEN el sistema SHALL mostrar el título, nivel, y lista de características
4. WHEN cada card está visible THEN el sistema SHALL mostrar el precio por hora
5. WHEN cada card está visible THEN el sistema SHALL incluir una nota sobre flexibilidad de pago
6. WHEN cada card está visible THEN el sistema SHALL incluir un botón CTA "Empezar Ahora"
7. WHEN el usuario hace hover sobre una card THEN el sistema SHALL aplicar un efecto visual (scale, shadow)
8. WHEN la sección está visible THEN el sistema SHALL mostrar trust signals (1-a-1, Bilingüe, IA, Horarios Flexibles)
9. WHEN el usuario hace clic en un CTA de curso THEN el sistema SHALL hacer scroll a la sección de contacto

### Requirement 7: Sección Method (Método)

**User Story:** Como estudiante potencial, quiero entender el método de enseñanza, para que pueda saber cómo aprenderé.

#### Acceptance Criteria

1. WHEN la sección Method está visible THEN el sistema SHALL mostrar 5 pasos del método numerados
2. WHEN cada paso está visible THEN el sistema SHALL mostrar un icono representativo
3. WHEN cada paso está visible THEN el sistema SHALL mostrar un título y descripción
4. WHEN cada paso está visible THEN el sistema SHALL usar los números 01, 02, 03, 04, 05
5. WHEN la sección está visible THEN el sistema SHALL incluir una subsección "¿Por Qué Funciona Este Método?"
6. WHEN la sección está visible THEN el sistema SHALL incluir un CTA "Descubre los Beneficios del Ajedrez"
7. WHEN el usuario hace scroll a esta sección THEN el sistema SHALL animar los pasos secuencialmente

### Requirement 8: Sección FAQ

**User Story:** Como visitante con dudas, quiero encontrar respuestas a preguntas comunes, para que pueda tomar una decisión informada.

#### Acceptance Criteria

1. WHEN la sección FAQ está visible THEN el sistema SHALL mostrar 7 preguntas frecuentes
2. WHEN cada pregunta está visible THEN el sistema SHALL estar en formato acordeón (colapsable)
3. WHEN el usuario hace clic en una pregunta THEN el sistema SHALL expandir/colapsar la respuesta
4. WHEN una respuesta se expande THEN el sistema SHALL animar la transición suavemente
5. WHEN la sección está visible THEN el sistema SHALL incluir un CTA final "¿Listo para Comenzar tu Viaje en el Ajedrez?"
6. WHEN el usuario hace clic en el CTA THEN el sistema SHALL hacer scroll a la sección de contacto

### Requirement 9: Sección Contact (Contacto)

**User Story:** Como visitante interesado, quiero poder contactar al instructor fácilmente, para que pueda solicitar mi clase gratuita.

#### Acceptance Criteria

1. WHEN la sección Contact está visible THEN el sistema SHALL mostrar un formulario con campos: nombre, email, asunto, mensaje
2. WHEN el usuario completa el formulario THEN el sistema SHALL validar cada campo en tiempo real
3. WHEN el campo nombre está vacío THEN el sistema SHALL mostrar un error de validación
4. WHEN el campo email es inválido THEN el sistema SHALL mostrar un error de formato
5. WHEN el usuario selecciona un asunto THEN el sistema SHALL mostrar opciones: Clase de Prueba, Curso Principiante, Curso Intermedio, Otro
6. WHEN el usuario envía el formulario THEN el sistema SHALL validar todos los campos usando Zod
7. WHEN el formulario es válido THEN el sistema SHALL mostrar un mensaje de éxito
8. WHEN hay un error al enviar THEN el sistema SHALL mostrar un mensaje de error
9. WHEN el formulario se envía exitosamente THEN el sistema SHALL limpiar los campos

### Requirement 10: Footer

**User Story:** Como visitante, quiero ver información adicional en el footer, para que pueda acceder a políticas y copyright.

#### Acceptance Criteria

1. WHEN el footer está visible THEN el sistema SHALL mostrar el copyright "© 2025 Chill Chess Club. Todos los derechos reservados"
2. WHEN el footer está visible THEN el sistema SHALL incluir enlaces a Política de Privacidad y Términos de Servicio
3. WHEN el footer está visible THEN el sistema SHALL usar el esquema de colores oscuro del sitio

### Requirement 11: Diseño Responsive

**User Story:** Como visitante en cualquier dispositivo, quiero que el sitio se vea bien, para que pueda navegar cómodamente.

#### Acceptance Criteria

1. WHEN el sitio se ve en mobile (< 768px) THEN el sistema SHALL adaptar el layout a una columna
2. WHEN el sitio se ve en tablet (768px - 1024px) THEN el sistema SHALL adaptar el layout apropiadamente
3. WHEN el sitio se ve en desktop (> 1024px) THEN el sistema SHALL mostrar el diseño completo
4. WHEN el sitio se ve en mobile THEN el sistema SHALL mostrar un menú hamburguesa
5. WHEN las imágenes se cargan THEN el sistema SHALL usar tamaños responsive
6. WHEN las cards se muestran en mobile THEN el sistema SHALL apilarse verticalmente

### Requirement 12: Animaciones y Efectos Visuales

**User Story:** Como visitante, quiero una experiencia visual atractiva, para que el sitio se sienta moderno y profesional.

#### Acceptance Criteria

1. WHEN el usuario hace scroll a una sección THEN el sistema SHALL animar los elementos con fade-in usando Framer Motion
2. WHEN el usuario hace hover sobre botones THEN el sistema SHALL aplicar efectos de transición suaves
3. WHEN el usuario hace hover sobre cards THEN el sistema SHALL aplicar scale y shadow effects
4. WHEN las animaciones se ejecutan THEN el sistema SHALL usar duraciones apropiadas (no muy rápidas ni lentas)
5. WHEN el usuario navega THEN el sistema SHALL usar smooth scroll behavior

### Requirement 13: Accesibilidad

**User Story:** Como usuario con necesidades de accesibilidad, quiero poder navegar el sitio fácilmente, para que pueda acceder a toda la información.

#### Acceptance Criteria

1. WHEN se renderizan elementos THEN el sistema SHALL usar semantic HTML (header, nav, main, section, footer)
2. WHEN hay imágenes THEN el sistema SHALL incluir atributos alt descriptivos
3. WHEN hay botones THEN el sistema SHALL ser accesibles por teclado
4. WHEN hay formularios THEN el sistema SHALL incluir labels apropiados
5. WHEN hay elementos interactivos THEN el sistema SHALL incluir ARIA labels cuando sea necesario
6. WHEN hay contraste de colores THEN el sistema SHALL cumplir con WCAG AA standards

### Requirement 14: Gestión de Imágenes

**User Story:** Como desarrollador, quiero usar placeholders para imágenes, para que el sitio funcione mientras se obtienen las imágenes reales.

#### Acceptance Criteria

1. WHEN se usa una imagen THEN el sistema SHALL usar un placeholder de placehold.co con dimensiones exactas
2. WHEN se usa un placeholder THEN el sistema SHALL incluir un comentario TODO indicando reemplazar con imagen real
3. WHEN se define una imagen THEN el sistema SHALL especificar la ruta en /public/images/
4. WHEN se usa una imagen THEN el sistema SHALL incluir alt text descriptivo
5. IF la imagen es el logo THEN el sistema SHALL usar dimensiones 200x60
6. IF la imagen es un perfil THEN el sistema SHALL usar dimensiones 600x800
7. IF la imagen es de curso THEN el sistema SHALL usar dimensiones 800x600

### Requirement 15: Configuración de TypeScript y Linting

**User Story:** Como desarrollador, quiero que el código sea type-safe y limpio, para que sea mantenible y sin errores.

#### Acceptance Criteria

1. WHEN se escribe código THEN el sistema SHALL usar TypeScript en todos los archivos
2. WHEN se definen props THEN el sistema SHALL usar interfaces o types
3. WHEN se usan hooks THEN el sistema SHALL tipar correctamente los estados
4. WHEN se compila el proyecto THEN el sistema SHALL no tener errores de TypeScript
5. WHEN se ejecuta el linter THEN el sistema SHALL pasar sin errores
