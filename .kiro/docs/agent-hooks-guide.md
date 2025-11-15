# Guía de Agent Hooks - Chill Chess Club

Esta guía te ayudará a crear los Agent Hooks recomendados para este proyecto.

## Hook #1: Pre-Deploy Check ✅

### Configuración:

**Nombre del Hook:**

```
Pre-Deploy Check
```

**Descripción:**

```
Verifica que el proyecto esté listo para deployment, revisando build, imágenes, links y traducciones.
```

**Trigger (Disparador):**

```
Manual (botón)
```

**Modo de Ejecución:**

```
Report Only (Solo reportar, no modificar)
```

**Prompt/Instrucciones para el Agente:**

```
Ejecuta las siguientes verificaciones y genera un reporte detallado:

1. BUILD CHECK:
   - Ejecuta `npm run build` y verifica que no haya errores
   - Reporta cualquier warning importante

2. CODE QUALITY:
   - Busca console.log() en archivos de producción (app/, lib/, components/)
   - Busca comentarios TODO o FIXME
   - Verifica que no haya código comentado extenso

3. IMAGES:
   - Verifica que todas las imágenes en imagePlaceholders (lib/utils.ts) existan en /public/images/
   - Lista las imágenes faltantes con sus rutas esperadas

4. TRANSLATIONS:
   - Compara messages/es.json y messages/en.json
   - Verifica que tengan las mismas keys
   - Reporta keys faltantes en cualquiera de los dos archivos

5. LINKS:
   - Verifica que todos los imports en componentes existan
   - Verifica que las rutas internas (Link href) sean válidas

Genera un reporte con formato:
✅ [Categoría]: Todo correcto
❌ [Categoría]: X problemas encontrados
  - Detalle del problema 1
  - Detalle del problema 2

Al final, indica: "✅ Listo para deploy" o "❌ Corrige X problemas antes de deploy"

NO modifiques ningún archivo, solo reporta.
```

**Cuándo usarlo:**

- Antes de hacer `git push` a producción
- Antes de hacer deploy a Vercel
- Después de implementar una feature grande

---

## Hook #2: Update Documentation 📝

### Configuración:

**Nombre del Hook:**

```
Update Documentation
```

**Descripción:**

```
Actualiza automáticamente PROJECT-CONTEXT.md con cambios recientes en el proyecto.
```

**Trigger (Disparador):**

```
Manual (botón)
```

**Modo de Ejecución:**

```
Auto-Fix (Modificar automáticamente)
```

**Prompt/Instrucciones para el Agente:**

```
Actualiza el archivo PROJECT-CONTEXT.md con la información más reciente del proyecto:

1. COMPONENTES:
   - Escanea app/[locale]/components/ y cuenta los componentes
   - Actualiza la sección "Componentes Principales" si hay nuevos componentes
   - Agrega descripción breve de componentes nuevos

2. DEPENDENCIAS:
   - Lee package.json
   - Actualiza la sección "Stack Tecnológico" si hay nuevas dependencias importantes
   - Actualiza versiones si cambiaron (Next.js, React, etc.)

3. ESTRUCTURA:
   - Verifica si se agregaron nuevas carpetas o archivos importantes
   - Actualiza la sección "Estructura del Proyecto" si es necesario

4. VERSIÓN:
   - Incrementa la versión del proyecto (ej: 1.3.0 → 1.4.0)
   - Agrega entrada en "Historial de Cambios" con fecha actual

5. MÉTRICAS:
   - Cuenta archivos de componentes, páginas, utilidades
   - Actualiza la sección "Métricas del Proyecto"

6. ESTADO:
   - Actualiza la sección "Estado de Implementación" si hay nuevas features completadas

Formato de entrada en Historial de Cambios:
```

### vX.X.X (YYYY-MM-DD) - Título del cambio

**Cambios principales:**

- ✅ [Descripción del cambio 1]
- ✅ [Descripción del cambio 2]

**Archivos modificados:**

- [Lista de archivos principales]

```

Modifica PROJECT-CONTEXT.md directamente y muestra un resumen de los cambios realizados.
```

**Cuándo usarlo:**

- Después de completar una feature nueva
- Después de agregar componentes importantes
- Antes de hacer un release
- Periódicamente (cada semana o dos)

---

## Cómo Crear los Hooks:

### Método 1: Command Palette (Recomendado)

1. Presiona `Ctrl+Shift+P`
2. Escribe "Open Kiro Hook UI"
3. Selecciona la opción
4. Sigue el wizard:
   - Pega el nombre del hook
   - Pega la descripción
   - Selecciona el trigger (Manual)
   - Pega las instrucciones completas
5. Guarda el hook

### Método 2: Panel de Agent Hooks

1. Busca el panel "AGENT HOOKS" en el explorador lateral
2. Haz clic en el botón "+" o "Create New Hook"
3. Llena los campos con la información de arriba
4. Guarda

---

## Cómo Usar los Hooks:

### Una vez creados:

1. Ve al panel "AGENT HOOKS" en el explorador
2. Verás tus hooks listados:
   ```
   📋 AGENT HOOKS
     ├─ 🔍 Pre-Deploy Check        [▶️ Run]
     └─ 📝 Update Documentation     [▶️ Run]
   ```
3. Haz clic en `[▶️ Run]` cuando quieras ejecutarlos
4. El agente se ejecutará en el chat y te mostrará los resultados

---

## Hooks Adicionales (Opcionales)

Si estos dos te funcionan bien, puedes crear más adelante:

### Hook #3: Performance Audit

- Analiza oportunidades de optimización
- Detecta componentes que deberían ser Server Components
- Reporta bundles grandes

### Hook #4: Accessibility Check

- Verifica alt text en imágenes
- Verifica aria-labels
- Verifica contraste de colores

### Hook #5: Validate Links

- Verifica que todos los links internos funcionen
- Detecta archivos huérfanos (no usados)

---

## Notas Importantes:

- Los hooks consumen tokens de IA cada vez que se ejecutan
- Puedes activar/desactivar hooks sin eliminarlos
- Puedes editar las instrucciones de un hook después de crearlo
- Los hooks manuales no se ejecutan automáticamente, solo cuando presionas el botón

---

## Troubleshooting:

**Si un hook no aparece:**

- Verifica que lo hayas guardado correctamente
- Reinicia Kiro si es necesario
- Revisa el panel de Agent Hooks

**Si un hook da error:**

- Revisa las instrucciones (puede que sean muy complejas)
- Simplifica las instrucciones
- Prueba ejecutarlo de nuevo

**Si un hook modifica algo que no debería:**

- Usa `Ctrl+Z` para deshacer
- Edita las instrucciones para ser más específico
- Cambia el modo a "Report Only"

---

Creado: 2025-11-14
Última actualización: 2025-11-14
