# Implementation Plan - Neumorphic Sunset UI Redesign

- [x] 1. Setup: Configurar shadcn/ui y sistema de diseño

  - Instalar shadcn/ui CLI y dependencias necesarias
  - Configurar components.json para shadcn
  - Crear archivo de design tokens con paleta Sunset completa
  - Actualizar tailwind.config.ts con colores, sombras y animaciones personalizadas
  - _Requirements: 3.1, 3.2, 2.1, 2.2_

- [x] 2. Crear utilidades y componentes base neumórficos

- [x] 2.1 Implementar utilidades neumórficas

  - Crear lib/neumorphic-utils.ts con funciones helper
  - Implementar neumorphicElevated(), neumorphicInset(), glassmorphic()
  - Implementar sunsetGradient() y glowOnHover()
  - _Requirements: 1.1, 1.2, 2.3_

- [x] 2.2 Crear componente NeumorphicCard

  - Implementar app/[locale]/components/neumorphic/NeumorphicCard.tsx
  - Agregar props para size, hover, gradient
  - Integrar animaciones Framer Motion suaves
  - _Requirements: 1.1, 1.3, 7.1, 7.2_

- [x] 2.3 Crear componente SunsetGradientText

  - Implementar app/[locale]/components/neumorphic/SunsetGradientText.tsx
  - Agregar variantes de gradiente (sunset, rose-purple, amber-rose)
  - _Requirements: 2.1, 2.2, 12.2_

- [x] 2.4 Crear componente GlassmorphicHeader

  - Implementar app/[locale]/components/neumorphic/GlassmorphicHeader.tsx
  - Agregar detección de scroll con threshold configurable
  - Implementar transición suave entre estados
  - _Requirements: 4.1, 4.2, 6.2_

- [x] 3. Instalar componentes shadcn necesarios

  - Instalar Button component de shadcn
  - Instalar Card component de shadcn
  - Instalar Accordion component de shadcn (para FAQ)
  - Instalar Input, Label, Textarea components (para formulario)
  - Personalizar cada componente con estilos neumórficos
  - _Requirements: 3.3, 3.4_

- [x] 4. Rediseñar Header/Navigation

- [x] 4.1 Actualizar Header con glassmorphism

  - Integrar GlassmorphicHeader en Header.tsx
  - Aplicar backdrop-blur y transparencia dinámica
  - Mejorar transiciones de scroll
  - _Requirements: 4.1, 4.2, 6.1, 6.2_

- [x] 4.2 Mejorar navegación y selector de idioma

  - Rediseñar items del menú con hover effects neumórficos
  - Crear toggle elegante para selector de idioma
  - Mejorar menú móvil con animación slide-in suave
  - Agregar indicadores visuales de sección activa
  - _Requirements: 4.3, 4.4, 4.5, 13.1_

- [x] 5. Rediseñar Hero section

- [x] 5.1 Actualizar Hero con efectos sunset

  - Aplicar overlay gradient sunset sobre imagen de fondo
  - Usar SunsetGradientText para el título principal
  - Mejorar CTAs con efectos neumórficos y glow
  - _Requirements: 1.1, 2.1, 2.2, 6.1_

- [x] 5.2 Optimizar animaciones Hero

  - Suavizar animaciones de entrada (fade-in, slide-up)
  - Agregar parallax sutil al fondo
  - Mejorar scroll indicator con animación butter-smooth
  - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 6. Rediseñar About section

  - Envolver contenido en NeumorphicCard
  - Aplicar border neumórfico a imagen de perfil
  - Mejorar quote box con estilo inset
  - Actualizar botones de plataformas con hover glow
  - Suavizar animaciones de entrada
  - _Requirements: 1.1, 7.1, 7.2, 13.1, 13.2_

- [x] 7. Rediseñar Courses section

- [ ] 7.1 Actualizar cards de cursos

  - Usar NeumorphicCard para cada curso
  - Aplicar gradient overlay sunset a imágenes
  - Mejorar badges de nivel con efectos neumórficos
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [ ] 7.2 Mejorar interactividad de cursos

  - Agregar hover effect con elevación sutil
  - Implementar glow effect en CTAs
  - Suavizar transiciones de hover
  - Actualizar trust signals con iconos y estilo neumórfico
  - _Requirements: 7.2, 13.1, 13.2, 13.4_

- [ ] 8. Rediseñar Method section

  - Envolver cada paso en NeumorphicCard
  - Aplicar gradientes sunset a números de paso
  - Mejorar timeline visual con línea neumórfica
  - Agregar animaciones secuenciales suaves
  - Actualizar sección de beneficios con cards neumórficas
  - _Requirements: 1.1, 7.1, 6.3, 13.3_

- [ ] 9. Rediseñar Blog section

  - Usar NeumorphicCard para cada artículo
  - Aplicar gradient overlay a imágenes
  - Mejorar metadata con iconos sunset
  - Agregar hover effect con elevación y glow
  - Suavizar animaciones de entrada escalonadas
  - _Requirements: 7.1, 7.2, 7.3, 6.3, 13.1_

- [x] 10. Rediseñar FAQ section con shadcn Accordion

- [ ] 10.1 Implementar Accordion de shadcn

  - Reemplazar acordeón custom con componente shadcn
  - Personalizar estilos con efectos neumórficos
  - Aplicar glow sunset a pregunta activa
  - _Requirements: 9.1, 9.3, 3.3_

- [ ] 10.2 Mejorar animaciones FAQ

  - Suavizar animaciones de expansión/colapso
  - Agregar transiciones de color suaves
  - Implementar hover effects neumórficos
  - _Requirements: 9.2, 9.4, 9.5, 6.1_

- [ ] 11. Rediseñar Contact form
- [ ] 11.1 Actualizar inputs con estilo neumórfico

  - Usar componentes Input/Textarea de shadcn
  - Aplicar estilo inset neumórfico a campos
  - Agregar glow sunset en focus state
  - _Requirements: 8.1, 8.2, 3.3_

- [ ] 11.2 Mejorar validación y feedback

  - Personalizar mensajes de error con colores cálidos
  - Implementar loading state con animación elegante
  - Crear confirmación de éxito con animación celebratoria sutil

  - _Requirements: 8.3, 8.4, 8.5, 13.3_

- [ ] 12. Crear Footer con sección de agencia
- [ ] 12.1 Implementar Footer component

  - Crear app/[locale]/components/Footer.tsx
  - Diseñar layout con sección de agencia destacada
  - Aplicar estilo neumórfico consistente

  - _Requirements: 5.1, 5.2_

- [ ] 12.2 Agregar contenido del footer

  - Integrar logo y enlace de la agencia
  - Agregar copyright dinámico
  - Incluir enlaces a políticas (Privacy, Terms)

  - Asegurar apertura en nueva pestaña para enlace externo
  - _Requirements: 5.2, 5.3, 5.4_

- [ ] 12.3 Optimizar footer responsive

  - Adaptar layout para mobile/tablet/desktop
  - Mantener legibilidad en todos los tamaños
  - Integrar con diseño neumórfico general
  - _Requirements: 5.4, 5.5, 11.4_

- [ ] 13. Implementar micro-interacciones globales

  - Agregar hover effects a todos los botones (scale, glow)
  - Implementar click feedback (scale down)
  - Agregar cursor pointer a elementos interactivos
  - Crear skeleton loaders neumórficos para contenido dinámico
  - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5_

- [ ] 14. Optimización de rendimiento
- [ ] 14.1 Optimizar CSS y animaciones

  - Usar transform/opacity para animaciones (GPU acceleration)
  - Implementar will-change estratégicamente
  - Minimizar uso de box-shadow complejas
  - _Requirements: 10.1, 10.2_

- [ ] 14.2 Implementar lazy loading y code splitting

  - Lazy load componentes pesados con dynamic import
  - Implementar IntersectionObserver para animaciones
  - Debounce scroll handlers
  - _Requirements: 10.3, 10.4_

- [ ] 14.3 Optimizar bundle size

  - Verificar tree-shaking de shadcn components
  - Eliminar dependencias no utilizadas
  - Optimizar imports de Framer Motion
  - _Requirements: 10.4, 3.5_

- [ ] 15. Implementar accesibilidad y responsive
- [ ] 15.1 Asegurar accesibilidad

  - Verificar ratios de contraste WCAG AAA
  - Implementar respeto a prefers-reduced-motion
  - Asegurar focus states visibles en navegación por teclado
  - Mantener atributos ARIA en componentes shadcn
  - _Requirements: 14.1, 14.2, 14.3, 14.4_

- [ ] 15.2 Refinar responsive design

  - Ajustar intensidad de sombras en mobile
  - Optimizar spacing para diferentes viewports
  - Asegurar feedback táctil en dispositivos touch
  - Testear rotación de dispositivo
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_

- [ ] 16. Testing y refinamiento
- [ ] 16.1 Testing funcional

  - Verificar todas las interacciones en cada sección
  - Testear formulario de contacto end-to-end
  - Verificar navegación y smooth scroll
  - Testear cambio de idioma
  - _Requirements: Todos_

- [ ] 16.2 Testing visual y de rendimiento

  - Ejecutar Lighthouse audit (target: >90 en todas las métricas)
  - Verificar animaciones a 60fps con Chrome DevTools
  - Testear en múltiples navegadores (Chrome, Firefox, Safari)
  - Testear en dispositivos móviles reales
  - _Requirements: 10.4, 10.5_

- [ ] 16.3 Testing de accesibilidad

  - Ejecutar axe DevTools para verificar contraste
  - Testear con screen reader (NVDA o JAWS)
  - Verificar navegación completa por teclado
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5_

- [ ] 17. Documentación y limpieza
  - Actualizar PROJECT-CONTEXT.md con nuevo sistema de diseño
  - Documentar componentes neumórficos en README
  - Limpiar código legacy y comentarios TODO
  - Actualizar dependencias a versiones estables
  - _Requirements: 15.5_
