# 🎣 Plantillas de Hooks Genéricas para Kiro

Este documento describe hooks útiles de forma genérica para que puedan ser adaptados a cualquier proyecto.

---

## 📊 Hook 1: Project Status Report

### Propósito

Generar un reporte completo del estado actual del proyecto, incluyendo estructura de archivos, dependencias, TODOs, y métricas generales.

### Descripción Genérica

Este hook debe analizar el proyecto y generar un reporte en formato markdown con las siguientes secciones:

#### Secciones del Reporte:

1. **Componentes/Módulos**

   - Detectar la estructura del proyecto (React, Vue, Angular, Python, etc.)
   - Contar y listar los archivos principales de componentes/módulos
   - Adaptar según el tipo de proyecto:
     - React/Next.js: archivos `.tsx`, `.jsx` en carpetas de componentes
     - Vue: archivos `.vue`
     - Python: archivos `.py` en módulos
     - Java: archivos `.java` en paquetes

2. **Páginas/Rutas**

   - Detectar el sistema de routing del proyecto
   - Listar las páginas o endpoints principales
   - Adaptar según framework:
     - Next.js: archivos `page.tsx` en `app/`
     - React Router: archivos en `pages/` o `routes/`
     - Express: rutas en archivos de router
     - Django: archivos `views.py` y `urls.py`

3. **Traducciones/i18n** (si aplica)

   - Buscar archivos de traducción comunes:
     - `messages/*.json`, `locales/*.json`, `i18n/*.json`
     - `*.po`, `*.mo` (gettext)
     - `*.yml`, `*.yaml` (Rails i18n)
   - Verificar sincronización entre idiomas
   - Reportar claves faltantes

4. **Assets/Recursos**

   - Listar imágenes, videos, fuentes, etc.
   - Ubicaciones comunes: `public/`, `static/`, `assets/`, `resources/`
   - Verificar referencias rotas (si es posible)

5. **Dependencias**

   - Leer archivo de dependencias según el proyecto:
     - Node.js: `package.json`
     - Python: `requirements.txt`, `pyproject.toml`, `Pipfile`
     - Java: `pom.xml`, `build.gradle`
     - Ruby: `Gemfile`
     - PHP: `composer.json`
   - Listar dependencias principales con versiones
   - Separar dependencias de desarrollo

6. **TODOs & FIXMEs**

   - Buscar comentarios TODO, FIXME, HACK en todos los archivos de código
   - Adaptar extensiones según lenguaje:
     - JavaScript/TypeScript: `.js`, `.ts`, `.jsx`, `.tsx`
     - Python: `.py`
     - Java: `.java`
     - Ruby: `.rb`
     - PHP: `.php`
   - Listar con ubicación y contexto

7. **Tamaño del Proyecto**

   - Contar archivos por categoría
   - Estimar líneas de código
   - Excluir siempre: `node_modules/`, `venv/`, `.git/`, `dist/`, `build/`, `target/`

8. **Versión** (si aplica)
   - Buscar versión en:
     - `package.json` (version)
     - `pyproject.toml` (version)
     - `pom.xml` (version)
     - Archivos README o CHANGELOG
     - Archivos de contexto del proyecto

### Reglas Críticas

- NUNCA usar comandos de shell (executePwsh)
- SOLO usar herramientas Kiro: fileSearch, grepSearch, readFile, listDirectory
- NO usar tablas markdown (se ven mal en chat)
- Usar listas con bullets y texto simple
- Formato legible en interfaz de chat

### Ejemplo de Uso

```
"Crea un hook de Project Status Report adaptado a este proyecto"
```

---

## ✅ Hook 2: Pre-Deploy Check

### Propósito

Verificar que el proyecto está listo para deployment, detectando problemas comunes antes de subir a producción.

### Descripción Genérica

Este hook debe ejecutar una serie de verificaciones según el tipo de proyecto:

#### Verificaciones Universales:

1. **Build Verification**

   - Detectar el comando de build del proyecto:
     - Node.js: `npm run build`, `yarn build`, `pnpm build`
     - Python: `python setup.py build`, `poetry build`
     - Java: `mvn package`, `gradle build`
     - Ruby: `bundle exec rake build`
   - Ejecutar el build y reportar errores

2. **Debug Code Detection**

   - Buscar código de debug que no debería estar en producción:
     - JavaScript/TypeScript: `console.log(`, `console.debug(`, `debugger`
     - Python: `print(`, `pdb.set_trace()`, `breakpoint()`
     - Java: `System.out.println(`, `printStackTrace()`
     - Ruby: `puts`, `binding.pry`
   - Excluir archivos de test
   - Reportar ubicaciones encontradas

3. **Environment Variables Check**

   - Verificar que existan archivos de configuración:
     - `.env.example` o `.env.template`
     - Documentación de variables requeridas
   - Advertir si faltan

4. **Dependency Security** (opcional)

   - Verificar si hay dependencias con vulnerabilidades conocidas
   - Sugerir actualizar dependencias obsoletas

5. **Test Execution** (si aplica)

   - Detectar framework de testing:
     - JavaScript: Jest, Vitest, Mocha
     - Python: pytest, unittest
     - Java: JUnit
   - Ejecutar tests y reportar fallos

6. **Linting** (si aplica)

   - Detectar linter configurado:
     - JavaScript: ESLint
     - Python: pylint, flake8
     - Ruby: RuboCop
   - Ejecutar y reportar errores críticos

7. **Import/Dependency Validation**
   - Verificar que todos los imports/requires existan
   - Detectar imports rotos o archivos faltantes

### Reglas Críticas

- NUNCA usar comandos de shell EXCEPTO para build y tests
- SOLO usar herramientas Kiro para búsquedas
- NO modificar archivos, solo reportar
- Formato de reporte claro con ✅ y ❌

### Ejemplo de Uso

```
"Crea un hook de Pre-Deploy Check adaptado a este proyecto"
```

---

## 📝 Hook 3: Update Documentation

### Propósito

Actualizar automáticamente la documentación del proyecto con información actual (componentes, dependencias, versión, changelog).

### Descripción Genérica

Este hook debe actualizar archivos de documentación del proyecto:

#### Acciones a Realizar:

1. **Detectar Archivo de Documentación Principal**

   - Buscar archivos comunes:
     - `README.md`
     - `PROJECT-CONTEXT.md`
     - `DOCUMENTATION.md`
     - `docs/index.md`
   - Si no existe, preguntar al usuario cuál crear

2. **Escanear Estructura del Proyecto**

   - Contar componentes/módulos principales
   - Detectar nuevas carpetas importantes
   - Identificar cambios en estructura

3. **Actualizar Dependencias**

   - Leer archivo de dependencias
   - Listar dependencias nuevas o actualizadas
   - Actualizar sección de dependencias en documentación

4. **Incrementar Versión** (si aplica)

   - Detectar esquema de versionado:
     - Semantic Versioning (1.2.3)
     - CalVer (2024.11.1)
     - Otro formato
   - Incrementar versión según tipo de cambio:
     - Major: cambios breaking
     - Minor: nuevas features
     - Patch: bug fixes
   - Actualizar en archivos correspondientes

5. **Agregar Entrada de Changelog**

   - Buscar archivo de changelog:
     - `CHANGELOG.md`
     - Sección en README
     - Sección en documentación principal
   - Agregar entrada con:
     - Fecha actual
     - Nueva versión
     - Resumen de cambios detectados

6. **Actualizar Métricas del Proyecto**
   - Número de archivos
   - Número de componentes/módulos
   - Número de dependencias
   - Tamaño aproximado del código

### Reglas Críticas

- NUNCA usar comandos de shell
- SOLO usar herramientas Kiro: fileSearch, readFile, strReplace, fsWrite
- SÍ modificar archivos (este hook escribe)
- Preservar formato existente de documentación
- Pedir confirmación antes de cambios grandes

### Ejemplo de Uso

```
"Crea un hook de Update Documentation adaptado a este proyecto"
```

---

## 🎯 Cómo Usar Este Archivo

### Para Crear Hooks en un Proyecto Nuevo:

1. Abre el proyecto en Kiro
2. Dile al agente:

   ```
   "Lee el archivo .kiro/docs/hook-templates.md y crea los 3 hooks
   adaptados a este proyecto. Detecta el tipo de proyecto y ajusta
   las rutas, extensiones de archivo y comandos según corresponda."
   ```

3. El agente analizará tu proyecto y creará hooks personalizados

### Para Adaptar un Hook Específico:

```
"Lee la plantilla del hook 'Project Status Report' en hook-templates.md
y créalo para este proyecto Python/Django"
```

---

## 📋 Notas Importantes

- **Estos hooks son plantillas conceptuales**, no código ejecutable
- Cada proyecto requiere adaptación según su estructura y tecnología
- El agente debe detectar automáticamente el tipo de proyecto
- Siempre usar herramientas Kiro, nunca comandos de shell (excepto build/test)
- Priorizar legibilidad en chat sobre formato complejo

---

## 🔄 Mantenimiento

Este archivo debe actualizarse cuando:

- Se descubran nuevos patrones útiles
- Se agreguen nuevos tipos de proyectos
- Se mejoren las verificaciones existentes
- Se encuentren bugs o limitaciones

**Última actualización:** 2025-11-14
