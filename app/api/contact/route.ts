import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, "Selecciona un asunto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // TODO: Implement email sending logic here
    // For now, we'll just log the data and return success
    console.log("Contact form submission:", validatedData);

    // In production, you would send an email here using a service like:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - AWS SES

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje enviado exitosamente",
      },
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
      {
        success: false,
        error: "Error al procesar el formulario",
      },
      { status: 500 }
    );
  }
}
