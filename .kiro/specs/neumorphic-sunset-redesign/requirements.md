# Requirements Document - Neumorphic Sunset UI Redesign

## Introduction

Este documento define los requisitos para el rediseño completo de la interfaz del sitio web de Chill Chess Club, implementando un sistema de diseño moderno basado en neumorfismo con una paleta "Chill Sunset" que evoca calma, profesionalismo y calidez. El objetivo es crear una experiencia visual ASMR (suave, relajante) mientras se mantiene la funcionalidad existente y se mejora la usabilidad.

## Requirements

### Requirement 1: Sistema de Diseño Neumórfico

**User Story:** Como visitante del sitio, quiero experimentar una interfaz visualmente atractiva y relajante que utilice efectos neumórficos sutiles, para sentirme cómodo y enfocado mientras exploro los servicios de ajedrez.

#### Acceptance Criteria

1. WHEN el usuario visualiza cualquier sección THEN el sistema SHALL aplicar sombras neumórficas suaves (inner y outer shadows) a los elementos interactivos
2. WHEN el usuario interactúa con elementos (hover, focus) THEN el sistema SHALL mostrar transiciones suaves de al menos 300ms
3. IF un elemento es clickeable THEN el sistema SHALL aplicar un efecto de "presión" neumórfico al hacer click
4. WHEN se renderizan cards o contenedores THEN el sistema SHALL usar bordes redondeados consistentes (12-24px) y elevaciones sutiles
5. WHEN el usuario navega por el sitio THEN el sistema SHALL mantener una jerarquía visual clara usando profundidad neumórfica en lugar de colores contrastantes agresivos

### Requirement 2: Paleta de Colores "Chill Sunset"

**User Story:** Como visitante, quiero ver una paleta de colores cálida y relajante inspirada en atardeceres, para sentir una atmósfera acogedora y profesional que refleje la filosofía "chill" del instructor.

#### Acceptance Criteria

1. WHEN el sitio se carga THEN el sistema SHALL usar una paleta base de tonos sunset (naranjas suaves, rosas, púrpuras, dorados)
2. WHEN se muestran fondos THEN el sistema SHALL usar gradientes suaves de sunset en lugar de colores planos
3. IF se necesita contraste THEN el sistema SHALL usar variaciones de luminosidad dentro de la paleta sunset
4. WHEN se muestran elementos interactivos THEN el sistema SHALL usar acentos dorados/amber para CTAs principales
5. WHEN se renderiza texto THEN el sistema SHALL mantener legibilidad AAA usando tonos claros sobre fondos oscuros cálidos

### Requirement 3: Integración de shadcn/ui

**User Story:** Como desarrollador, quiero integrar shadcn/ui en el proyecto existente, para tener acceso a componentes accesibles y personalizables que aceleren el desarrollo del nuevo diseño.

#### Acceptance Criteria

1. WHEN se instala shadcn/ui THEN el sistema SHALL mantener la configuración existente de Tailwind CSS
2. WHEN se agregan componentes de shadcn THEN el sistema SHALL personalizarlos con la paleta Chill Sunset
3. IF existe un componente custom THEN el sistema SHALL migrar gradualmente a la versión shadcn cuando sea beneficioso
4. WHEN se usa un componente shadcn THEN el sistema SHALL mantener compatibilidad con next-intl para i18n
5. WHEN se construye el proyecto THEN el sistema SHALL incluir solo los componentes shadcn utilizados (tree-shaking)

### Requirement 4: Navegación Superior Mejorada

**User Story:** Como visitante, quiero una navegación superior más sofisticada y funcional, para poder moverme fácilmente por el sitio con una experiencia visual premium.

#### Acceptance Criteria

1. WHEN el usuario hace scroll THEN el sistema SHALL aplicar un efecto glassmorphism al header con blur y transparencia
2. WHEN el header está en la parte superior THEN el sistema SHALL mostrar una versión más transparente con efecto neumórfico sutil
3. IF el usuario está en mobile THEN el sistema SHALL mostrar un menú hamburguesa con animación suave de slide-in
4. WHEN el usuario cambia de idioma THEN el sistema SHALL usar un toggle elegante con animación de transición
5. WHEN el usuario hace hover sobre items del menú THEN el sistema SHALL mostrar un indicador visual neumórfico suave

### Requirement 5: Footer de Agencia

**User Story:** Como propietario del sitio, quiero incluir un footer que acredite a la agencia de desarrollo, para dar reconocimiento profesional y potencialmente generar referencias.

#### Acceptance Criteria

1. WHEN se renderiza el footer THEN el sistema SHALL incluir una sección dedicada a la agencia de desarrollo
2. WHEN se muestra la información de la agencia THEN el sistema SHALL incluir logo, nombre y enlace al sitio web
3. IF el usuario hace click en el enlace de la agencia THEN el sistema SHALL abrir el sitio en una nueva pestaña
4. WHEN se visualiza en mobile THEN el sistema SHALL mantener el footer legible y bien organizado
5. WHEN se aplica el diseño neumórfico THEN el sistema SHALL integrar el footer con el mismo estilo visual del resto del sitio

### Requirement 6: Componentes con Efectos ASMR

**User Story:** Como visitante, quiero que las interacciones y animaciones sean extremadamente suaves y relajantes, para tener una experiencia casi meditativa mientras navego.

#### Acceptance Criteria

1. WHEN ocurre cualquier animación THEN el sistema SHALL usar easing curves suaves (ease-in-out, cubic-bezier)
2. WHEN el usuario hace scroll THEN el sistema SHALL aplicar parallax sutil en elementos de fondo (máximo 20% de velocidad diferencial)
3. IF un elemento entra en viewport THEN el sistema SHALL animarlo con fade-in y slide suave (no bounce)
4. WHEN el usuario interactúa con botones THEN el sistema SHALL proporcionar feedback táctil visual con micro-animaciones
5. WHEN se cargan imágenes THEN el sistema SHALL usar blur-up placeholder con transición suave

### Requirement 7: Cards y Contenedores Rediseñados

**User Story:** Como visitante, quiero ver las secciones de cursos, blog y método presentadas en cards neumórficas elegantes, para una experiencia visual cohesiva y moderna.

#### Acceptance Criteria

1. WHEN se muestran cards de cursos THEN el sistema SHALL aplicar efecto neumórfico con sombras internas y externas
2. WHEN el usuario hace hover sobre una card THEN el sistema SHALL elevar la card sutilmente con transición suave
3. IF una card contiene imagen THEN el sistema SHALL aplicar border-radius consistente y overlay gradient sutil
4. WHEN se muestran múltiples cards THEN el sistema SHALL mantener spacing consistente y alineación perfecta
5. WHEN se visualiza en mobile THEN el sistema SHALL adaptar el tamaño de las cards manteniendo proporciones armónicas

### Requirement 8: Formulario de Contacto Premium

**User Story:** Como visitante interesado, quiero un formulario de contacto visualmente atractivo y fácil de usar, para sentirme confiado al enviar mi información.

#### Acceptance Criteria

1. WHEN se muestran los inputs THEN el sistema SHALL usar estilo neumórfico con sombras internas
2. WHEN el usuario enfoca un input THEN el sistema SHALL aplicar un glow sutil en color sunset
3. IF hay un error de validación THEN el sistema SHALL mostrar mensajes con animación suave y colores cálidos (no rojo agresivo)
4. WHEN el usuario envía el formulario THEN el sistema SHALL mostrar un loading state con animación elegante
5. WHEN el envío es exitoso THEN el sistema SHALL mostrar confirmación con animación celebratoria sutil

### Requirement 9: Sección FAQ Mejorada

**User Story:** Como visitante con dudas, quiero un acordeón de preguntas frecuentes más elegante y fácil de usar, para encontrar respuestas rápidamente en un formato visualmente agradable.

#### Acceptance Criteria

1. WHEN se muestra el FAQ THEN el sistema SHALL usar componente Accordion de shadcn con estilo neumórfico
2. WHEN el usuario expande una pregunta THEN el sistema SHALL animar la apertura con ease-in-out suave
3. IF una pregunta está abierta THEN el sistema SHALL aplicar un highlight sutil con glow sunset
4. WHEN se colapsa una respuesta THEN el sistema SHALL animar el cierre sin saltos bruscos
5. WHEN el usuario hace hover sobre una pregunta THEN el sistema SHALL mostrar feedback visual inmediato

### Requirement 10: Optimización de Rendimiento

**User Story:** Como visitante, quiero que el sitio cargue rápidamente y funcione suavemente a pesar de los efectos visuales, para no experimentar lag o tiempos de espera.

#### Acceptance Criteria

1. WHEN se aplican efectos neumórficos THEN el sistema SHALL usar CSS puro en lugar de JavaScript cuando sea posible
2. WHEN se cargan animaciones THEN el sistema SHALL usar transform y opacity para aprovechar GPU acceleration
3. IF el dispositivo tiene recursos limitados THEN el sistema SHALL reducir automáticamente la complejidad de animaciones
4. WHEN se construye para producción THEN el sistema SHALL mantener el bundle size por debajo de 300KB (gzipped)
5. WHEN se mide el Lighthouse score THEN el sistema SHALL mantener Performance > 90, Accessibility > 95

### Requirement 11: Responsive Design Refinado

**User Story:** Como visitante móvil, quiero que el diseño neumórfico se adapte perfectamente a mi dispositivo, para tener la misma experiencia premium que en desktop.

#### Acceptance Criteria

1. WHEN se visualiza en mobile THEN el sistema SHALL reducir sutilmente la intensidad de sombras neumórficas
2. WHEN se usan gestos táctiles THEN el sistema SHALL proporcionar feedback visual inmediato
3. IF el viewport es pequeño THEN el sistema SHALL ajustar spacing y tamaños manteniendo proporciones armónicas
4. WHEN se rota el dispositivo THEN el sistema SHALL adaptar el layout sin perder estado
5. WHEN se usa en tablet THEN el sistema SHALL optimizar el layout para aprovechar el espacio intermedio

### Requirement 12: Tipografía Mejorada

**User Story:** Como visitante, quiero que el texto sea extremadamente legible y estéticamente agradable, para poder leer cómodamente todo el contenido.

#### Acceptance Criteria

1. WHEN se muestra texto de cuerpo THEN el sistema SHALL usar line-height de 1.7-1.8 para máxima legibilidad
2. WHEN se muestran headings THEN el sistema SHALL aplicar letter-spacing sutil y font-weight apropiado
3. IF el texto está sobre fondo con textura THEN el sistema SHALL aplicar text-shadow sutil para mejorar legibilidad
4. WHEN se usa Playfair Display THEN el sistema SHALL limitar su uso a headings principales
5. WHEN se renderiza texto largo THEN el sistema SHALL usar max-width de 65-75 caracteres por línea

### Requirement 13: Micro-interacciones

**User Story:** Como visitante, quiero que cada interacción tenga un feedback visual sutil y satisfactorio, para sentir que el sitio responde a mis acciones de forma inteligente.

#### Acceptance Criteria

1. WHEN el usuario hace hover sobre un botón THEN el sistema SHALL aplicar scale sutil (1.02-1.05) y glow
2. WHEN el usuario hace click THEN el sistema SHALL aplicar efecto de "presión" con scale down (0.98)
3. IF el usuario completa una acción THEN el sistema SHALL mostrar confirmación visual con animación
4. WHEN el cursor está sobre elementos interactivos THEN el sistema SHALL cambiar el cursor apropiadamente
5. WHEN se carga contenido dinámico THEN el sistema SHALL usar skeleton loaders neumórficos

### Requirement 14: Accesibilidad Mantenida

**User Story:** Como visitante con necesidades de accesibilidad, quiero que el rediseño mantenga o mejore los estándares de accesibilidad, para poder navegar el sitio sin barreras.

#### Acceptance Criteria

1. WHEN se aplican efectos visuales THEN el sistema SHALL mantener ratios de contraste WCAG AAA
2. WHEN se usan animaciones THEN el sistema SHALL respetar prefers-reduced-motion
3. IF el usuario navega con teclado THEN el sistema SHALL mostrar focus states claros y visibles
4. WHEN se usan componentes shadcn THEN el sistema SHALL mantener atributos ARIA apropiados
5. WHEN se lee con screen reader THEN el sistema SHALL proporcionar descripciones claras de elementos visuales

### Requirement 15: Transición Gradual

**User Story:** Como desarrollador, quiero poder implementar el rediseño de forma gradual y controlada, para minimizar riesgos y poder hacer rollback si es necesario.

#### Acceptance Criteria

1. WHEN se implementa un componente rediseñado THEN el sistema SHALL mantener el componente anterior como fallback
2. WHEN se detectan problemas THEN el sistema SHALL permitir revertir a la versión anterior fácilmente
3. IF se usa feature flag THEN el sistema SHALL permitir activar/desactivar el nuevo diseño por sección
4. WHEN se hace commit THEN el sistema SHALL mantener historial claro de cambios por componente
5. WHEN se completa el rediseño THEN el sistema SHALL limpiar código legacy y dependencias no utilizadas
