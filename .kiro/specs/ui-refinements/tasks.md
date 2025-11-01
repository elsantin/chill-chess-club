# Plan de Implementación

- [x] 1. Crear rama de desarrollo para ajustes visuales

  - Crear nueva rama `ui-refinements` desde la rama principal
  - Asegurar que el entorno de desarrollo esté limpio
  - _Requirements: 1.1, 2.1, 3.1_

- [x] 2. Ajustar espaciado en la sección About

  - Abrir el archivo `app/[locale]/components/About.tsx`
  - Localizar el div con clase `grid md:grid-cols-2 gap-8` (línea ~52)
  - Cambiar `gap-8` a `gap-4` para reducir el espacio entre imagen y texto
  - Verificar visualmente en vista desktop que el cambio mejora la armonía
  - _Requirements: 1.1, 1.2, 1.3_

- [x] 3. Aumentar padding superior en contenido del acordeón FAQ

  - Abrir el archivo `components/ui/accordion.tsx`
  - Localizar el componente `AccordionContent` (línea ~52)
  - Cambiar `pt-0` a `pt-4` en la clase del div interno
  - Verificar que el degradado superior sea visible al expandir preguntas
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 4. Aplicar estilos personalizados al dropdown del formulario

  - Abrir el archivo `app/[locale]/components/Contact.tsx`
  - Localizar el elemento `<select>` del campo subject (línea ~115)
  - Añadir clases arbitrarias de Tailwind para estilizar las opciones: `[&>option]:bg-warmGray-800 [&>option]:text-warmGray-100 [&>option:checked]:bg-sunset-500 [&>option:hover]:bg-warmGray-700`
  - Verificar que las opciones del dropdown usen los colores del tema
  - _Requirements: 3.1, 3.2, 3.3_

- [x] 5. Implementar scrollbar personalizada global

  - Abrir el archivo `app/globals.css`
  - Añadir estilos CSS al final del archivo para scrollbar webkit y Firefox
  - Usar colores warmGray-800 para el track y sunset-500 para el thumb
  - Implementar efecto hover con sunset-400
  - Verificar en elementos con scroll (textarea del formulario, lista de FAQ)
  - _Requirements: 3.4, 3.5_

- [ ]\* 6. Realizar pruebas visuales en múltiples navegadores
  - Probar en Chrome/Edge para verificar scrollbar webkit
  - Probar en Firefox para verificar scrollbar estándar
  - Verificar responsive en mobile, tablet y desktop
  - Confirmar que todos los cambios mantienen la coherencia visual
  - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3, 3.4, 3.5_
