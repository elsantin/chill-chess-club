# Implementation Plan

- [x] 1. Configurar proyecto Next.js y dependencias base

  - Inicializar proyecto Next.js 14 con TypeScript, Tailwind CSS y App Router
  - Instalar dependencias: next-intl, framer-motion, react-hook-form, zod, react-icons
  - Configurar estructura de carpetas según diseño
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 2. Configurar Tailwind CSS con tema personalizado

  - Configurar tailwind.config.ts con paleta de colores personalizada (pink, purple, amber, slate)
  - Agregar variables de fuentes personalizadas (Playfair Display, Roboto)
  - Configurar clases de utilidad para gradientes
  - Crear archivo globals.css con estilos base
  - _Requirements: 1.5, 1.6_

- [x] 3. Configurar sistema de internacionalización (i18n)

  - Configurar next-intl en lib/i18n.ts
  - Crear middleware.ts para detección de idioma y routing
  - Crear estructura de carpetas [locale] en app
  - Configurar next.config.ts para i18n
  - _Requirements: 2.1, 2.3_

- [x] 4. Crear archivos de traducción completos

  - Crear messages/es.json con todo el contenido en español
  - Crear messages/en.json con todo el contenido en inglés
  - Verificar que todas las keys estén presentes en ambos archivos
  - _Requirements: 2.4_

- [x] 5. Configurar layout principal y fuentes

  - Crear app/[locale]/layout.tsx con configuración de fuentes Google
  - Configurar metadata dinámica basada en locale
  - Integrar NextIntlClientProvider
  - Aplicar variables de fuente al elemento HTML
  - _Requirements: 1.6, 2.5_

- [x] 6. Crear utilidades y helpers

  - Crear lib/utils.ts con función cn() para merge de clases
  - Crear tipos TypeScript para mensajes de traducción
  - Crear constantes para URLs de placeholders de imágenes
  - _Requirements: 15.1, 15.2_

- [x] 7. Implementar componente Header con navegación

  - Crear app/[locale]/components/Header.tsx
  - Implementar navegación sticky con backdrop blur
  - Agregar logo y enlaces de navegación
  - Implementar selector de idioma (ES/EN)
  - Agregar efecto de cambio de background al hacer scroll
  - Implementar menú hamburguesa responsive para mobile
  - Agregar smooth scroll a secciones
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

- [x] 8. Implementar componente Hero

  - Crear app/[locale]/components/Hero.tsx
  - Implementar título con gradiente de texto
  - Agregar subtítulo descriptivo
  - Crear dos botones CTA con estilos diferentes
  - Implementar animaciones de entrada con Framer Motion
  - Agregar background con gradiente radial
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7_

- [x] 9. Implementar componente About

  - Crear app/[locale]/components/About.tsx
  - Implementar layout grid responsive (imagen | texto)
  - Agregar imagen del instructor con placeholder y comentario TODO
  - Mostrar quote inspiradora con estilo especial
  - Agregar dos párrafos biográficos
  - Crear subsección de filosofía de enseñanza
  - Agregar sección de plataformas con enlaces
  - Implementar CTA button
  - Agregar animaciones de scroll con Framer Motion
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 14.1, 14.2, 14.3, 14.4_

- [x] 10. Implementar componente Courses

  - Crear app/[locale]/components/Courses.tsx
  - Implementar grid responsive para dos cards de cursos
  - Crear card de curso Principiante con todas las características
  - Crear card de curso Intermedio con todas las características
  - Agregar imágenes de cursos con placeholders y comentarios TODO
  - Implementar badges de nivel
  - Agregar listas de características con iconos de checkmark
  - Mostrar precios y notas de flexibilidad
  - Implementar hover effects (scale, shadow)
  - Agregar trust signals en la parte inferior
  - Implementar CTAs que hacen scroll a contacto
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 14.1, 14.2, 14.3, 14.7_

- [x] 11. Implementar componente Method

  - Crear app/[locale]/components/Method.tsx
  - Implementar layout de 5 pasos con números grandes
  - Agregar iconos de React Icons para cada paso
  - Crear diseño de timeline vertical para mobile
  - Implementar grid para desktop
  - Agregar animaciones secuenciales con Framer Motion
  - Crear subsección "¿Por Qué Funciona Este Método?"
  - Implementar CTA button
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7_

- [x] 12. Implementar componente FAQ

  - Crear app/[locale]/components/FAQ.tsx
  - Implementar acordeón con estado para pregunta abierta
  - Crear 7 items de FAQ con preguntas y respuestas
  - Implementar animaciones de expansión/colapso con Framer Motion
  - Agregar iconos que rotan al abrir/cerrar
  - Implementar hover effects en preguntas
  - Agregar CTA al final de la sección
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

- [x] 13. Implementar validación de formulario con Zod

  - Crear schema de validación con Zod para formulario de contacto
  - Definir reglas: nombre (min 2 chars), email (válido), asunto (requerido), mensaje (min 10 chars)
  - Crear tipo TypeScript ContactFormData desde schema
  - _Requirements: 9.6, 15.2, 15.3_

- [x] 14. Implementar componente Contact con formulario

  - Crear app/[locale]/components/Contact.tsx
  - Configurar React Hook Form con resolver de Zod
  - Implementar campos: nombre, email, asunto (select), mensaje (textarea)
  - Agregar validación en tiempo real
  - Mostrar mensajes de error inline debajo de cada campo
  - Implementar estados de loading durante envío
  - Agregar mensajes de éxito/error después de envío
  - Implementar reset de formulario después de éxito
  - Estilizar inputs con focus states
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.7, 9.8, 9.9_

- [x] 15. Implementar API endpoint para formulario de contacto

  - Crear app/api/contact/route.ts
  - Implementar POST handler que recibe datos del formulario
  - Validar datos en el servidor con Zod
  - Retornar respuestas JSON apropiadas (success/error)
  - Agregar manejo de errores
  - _Requirements: 9.6, 9.7, 9.8_

- [x] 16. Implementar componente Footer

  - Crear app/[locale]/components/Footer.tsx
  - Agregar copyright con año actual
  - Agregar enlaces a Política de Privacidad y Términos
  - Estilizar con background oscuro y border superior
  - _Requirements: 10.1, 10.2, 10.3_

- [x] 17. Crear página principal que compone todos los componentes

  - Crear app/[locale]/page.tsx
  - Importar y componer todos los componentes en orden
  - Aplicar background oscuro al main
  - Verificar que el orden de secciones sea correcto
  - _Requirements: Todos los componentes_

- [x] 18. Implementar smooth scroll y navegación

  - Agregar IDs a cada sección para navegación
  - Configurar smooth scroll behavior en globals.css
  - Implementar funciones de scroll en Header
  - Verificar que todos los CTAs hagan scroll correctamente
  - _Requirements: 3.4, 4.4, 4.5, 6.9, 7.6, 8.6, 12.5_

- [x] 19. Implementar diseño responsive completo

  - Verificar layout mobile (< 768px) en todas las secciones
  - Verificar layout tablet (768px - 1024px) en todas las secciones
  - Verificar layout desktop (> 1024px) en todas las secciones
  - Ajustar tamaños de texto para cada breakpoint
  - Verificar que imágenes sean responsive
  - Verificar que cards se apilen correctamente en mobile
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_

- [x] 20. Implementar animaciones con Framer Motion

  - Agregar animaciones fade-in al hacer scroll en todas las secciones
  - Implementar hover effects en botones
  - Implementar hover effects en cards
  - Configurar duraciones apropiadas para animaciones
  - Verificar que smooth scroll funcione correctamente
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_

- [x] 21. Implementar accesibilidad

  - Usar semantic HTML en todos los componentes (header, nav, main, section, footer)
  - Agregar atributos alt descriptivos a todas las imágenes
  - Verificar que todos los botones sean accesibles por teclado
  - Agregar labels apropiados a campos de formulario
  - Agregar ARIA labels donde sea necesario
  - Verificar contraste de colores con herramientas
  - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6_

- [x] 22. Configurar placeholders de imágenes

  - Crear constantes para URLs de placeholders en lib/utils.ts
  - Agregar comentarios TODO en cada uso de imagen
  - Verificar dimensiones correctas: logo (200x60), perfil (600x800), cursos (800x600)
  - Agregar alt text descriptivo a todas las imágenes
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7_

- [x] 23. Verificar TypeScript y linting

  - Ejecutar TypeScript compiler para verificar errores de tipo
  - Corregir cualquier error de TypeScript
  - Ejecutar linter y corregir warnings
  - Verificar que todas las props tengan tipos definidos
  - Verificar que todos los hooks estén tipados correctamente
  - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5_

- [x] 24. Testing y verificación final

  - Probar cambio de idioma en todas las secciones
  - Probar navegación smooth scroll desde Header
  - Probar todos los CTAs y verificar que hagan scroll correcto
  - Probar formulario de contacto con datos válidos e inválidos
  - Probar menú hamburguesa en mobile
  - Verificar responsive design en diferentes tamaños de pantalla
  - Verificar que todas las animaciones funcionen correctamente
  - Probar navegación por teclado
  - _Requirements: Todos_

- [x] 25. Preparar para deployment

  - Crear README.md con instrucciones de instalación y ejecución
  - Verificar que package.json tenga todos los scripts necesarios
  - Ejecutar build de producción y verificar que no haya errores
  - Documentar variables de entorno necesarias (si las hay)
  - Agregar instrucciones para reemplazar placeholders con imágenes reales
  - _Requirements: Todos_
