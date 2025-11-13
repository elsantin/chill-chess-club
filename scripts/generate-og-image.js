/**
 * Script para generar imagen Open Graph (1200x630px)
 *
 * OPCIÓN 1: Usar este script con node-canvas (requiere instalación)
 * npm install canvas
 * node scripts/generate-og-image.js
 *
 * OPCIÓN 2: Usar herramientas online (RECOMENDADO):
 * - Canva: https://www.canva.com/create/open-graph/
 * - Figma: https://www.figma.com/
 * - OG Image Generator: https://og-image.vercel.app/
 *
 * ESPECIFICACIONES:
 * - Dimensiones: 1200x630px (ratio 1.91:1)
 * - Formato: JPG o PNG
 * - Tamaño: <300KB (idealmente <200KB)
 * - Contenido sugerido:
 *   * Logo de Chill Chess Club
 *   * Título: "Chill Chess Club"
 *   * Subtítulo: "Personalized Online Chess Classes"
 *   * Fondo: Gradiente sunset (naranja/rosa/púrpura)
 *   * Iconos: Piezas de ajedrez
 */

const fs = require("fs");
const path = require("path");

// Verificar si node-canvas está instalado
try {
  const { createCanvas, loadImage } = require("canvas");

  async function generateOGImage() {
    const width = 1200;
    const height = 630;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    // Fondo con gradiente sunset
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#f59e0b"); // amber-500
    gradient.addColorStop(0.5, "#ec4899"); // pink-500
    gradient.addColorStop(1, "#8b5cf6"); // purple-500

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Overlay oscuro para legibilidad
    ctx.fillStyle = "rgba(15, 23, 42, 0.7)"; // slate-900 con opacidad
    ctx.fillRect(0, 0, width, height);

    // Título principal
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 80px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Chill Chess Club", width / 2, height / 2 - 50);

    // Subtítulo
    ctx.font = "40px Arial";
    ctx.fillText(
      "Personalized Online Chess Classes",
      width / 2,
      height / 2 + 50
    );

    // Texto adicional
    ctx.font = "30px Arial";
    ctx.fillText(
      "AI-Assisted Learning • Flexible Schedule",
      width / 2,
      height / 2 + 120
    );

    // Guardar imagen
    const buffer = canvas.toBuffer("image/jpeg", { quality: 0.9 });
    const outputPath = path.join(__dirname, "..", "public", "og-image.jpg");
    fs.writeFileSync(outputPath, buffer);

    console.log("✅ Imagen OG generada exitosamente en:", outputPath);
    console.log("📏 Dimensiones: 1200x630px");
    console.log("📦 Tamaño:", (buffer.length / 1024).toFixed(2), "KB");
  }

  generateOGImage().catch(console.error);
} catch (error) {
  console.log("⚠️  node-canvas no está instalado.");
  console.log("");
  console.log("OPCIONES PARA CREAR TU IMAGEN OG:");
  console.log("");
  console.log("1. CANVA (Recomendado - Fácil):");
  console.log("   - Ve a: https://www.canva.com/");
  console.log("   - Crea diseño personalizado: 1200x630px");
  console.log('   - Usa plantilla "Open Graph" o empieza desde cero');
  console.log(
    '   - Agrega: Logo + "Chill Chess Club" + "Personalized Online Chess Classes"'
  );
  console.log("   - Descarga como JPG (calidad alta)");
  console.log("   - Guarda en: public/og-image.jpg");
  console.log("");
  console.log("2. FIGMA (Profesional):");
  console.log("   - Crea frame de 1200x630px");
  console.log("   - Diseña con gradiente sunset");
  console.log("   - Exporta como JPG (2x quality)");
  console.log("");
  console.log("3. VERCEL OG IMAGE (Automático):");
  console.log("   - Ve a: https://og-image.vercel.app/");
  console.log('   - Escribe: "Chill Chess Club"');
  console.log("   - Personaliza y descarga");
  console.log("");
  console.log("4. INSTALAR NODE-CANVAS (Avanzado):");
  console.log("   npm install canvas");
  console.log("   node scripts/generate-og-image.js");
  console.log("");
}
