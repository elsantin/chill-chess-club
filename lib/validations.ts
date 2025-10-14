import { z } from "zod";

/**
 * Contact form validation schema
 */
export const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, "Selecciona un asunto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

/**
 * Type inference from schema
 */
export type ContactFormData = z.infer<typeof contactSchema>;
