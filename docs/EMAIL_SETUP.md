# 📧 Configuración de Email para Formulario de Contacto

El formulario de contacto está completamente funcional en el frontend, pero necesita configuración de un servicio de email para enviar mensajes reales.

## Estado Actual

✅ Formulario funcional con validación
✅ Endpoint API `/api/contact` funcionando
⚠️ **Emails no se envían** (solo se hace `console.log`)

---

## Opción Recomendada: Resend

**Por qué Resend:**

- Más fácil de configurar
- 100 emails gratis al mes
- Excelente para Next.js
- Buena deliverability

### Pasos para Configurar Resend:

#### 1. Crear cuenta en Resend

```bash
# Visita: https://resend.com/signup
```

#### 2. Instalar dependencia

```bash
npm install resend
```

#### 3. Obtener API Key

- Ve a https://resend.com/api-keys
- Crea una nueva API key
- Cópiala

#### 4. Agregar a variables de entorno

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

#### 5. Actualizar `/app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, "Selecciona un asunto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Enviar email con Resend
    const { data, error } = await resend.emails.send({
      from: "Chill Chess Club <onboarding@resend.dev>", // Cambiar cuando tengas dominio verificado
      to: ["santiago.narvaez.84@gmail.com"], // Tu email
      replyTo: validatedData.email,
      subject: `Nuevo mensaje: ${validatedData.subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Asunto:</strong> ${validatedData.subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { success: false, error: "Error al enviar el email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Mensaje enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Datos de formulario inválidos",
          details: error.issues,
        },
        { status: 400 }
      );
    }

    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
}
```

#### 6. Verificar dominio (Opcional pero recomendado)

- Agrega tu dominio en Resend
- Configura los registros DNS
- Cambia el `from` a tu dominio: `from: "Contacto <contacto@chillchessclub.com>"`

---

## Alternativas

### SendGrid

- Más establecido
- 100 emails gratis al día
- Más complejo de configurar

### Nodemailer + Gmail

- Gratis
- Requiere configuración de "App Password"
- Límites de Gmail (500 emails/día)

### AWS SES

- Muy barato
- Más complejo
- Requiere cuenta AWS

---

## Testing

Una vez configurado, prueba el formulario:

1. Llena el formulario en el sitio
2. Envía un mensaje de prueba
3. Verifica que llegue a tu email
4. Verifica que el reply-to funcione

---

## Notas Importantes

- ⚠️ **No commitees** el archivo `.env.local` con tu API key
- ✅ El `.env.local` ya está en `.gitignore`
- 📧 Configura un email profesional para recibir mensajes
- 🔒 Considera agregar rate limiting para prevenir spam

---

## Soporte

Si tienes problemas:

- Docs de Resend: https://resend.com/docs
- Verifica que la API key esté correcta
- Revisa los logs en el dashboard de Resend
