import { NextResponse } from "next/server";

// Simple in-memory store for rate limiting
// Tracks IP -> { count: number, resetTime: number }
const rateLimit = new Map<string, { count: number; resetTime: number }>();

const MAX_REQUESTS = 3; // Max 3 form submissions per window (forms are heavier than chat)
const WINDOW_MS = 60 * 1000; // 1 minute window

export async function POST(request: Request) {
  // Get IP for rate limiting
  const ip = request.headers.get("x-forwarded-for") || "unknown_ip";

  // Check rate limit
  const now = Date.now();
  const limitInfo = rateLimit.get(ip);

  if (limitInfo) {
    if (now < limitInfo.resetTime) {
      limitInfo.count++;
      if (limitInfo.count > MAX_REQUESTS) {
        return NextResponse.json(
          { error: "Demasiadas peticiones. Por favor, espera un momento antes de enviar otra solicitud." },
          { status: 429 }
        );
      }
    } else {
      // Reset window if time has passed
      rateLimit.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    }
  } else {
    // First request from this IP
    rateLimit.set(ip, { count: 1, resetTime: now + WINDOW_MS });
  }

  // Evaluamos en runtime para asegurar que Vercel inyecte la variable
  const apiKey = process.env.RESEND_API_KEY;

  try {
    const data = await request.json();
    const { name, company, email, phone, budget, message } = data;

    // Validación básica en el backend
    if (!name || !company || !email || !phone || !budget || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Sanitización básica: limitar longitudes para prevenir abuso
    if (name.length > 100 || company.length > 100 || email.length > 254 || phone.length > 20 || message.length > 5000) {
      return NextResponse.json(
        { error: "Algunos campos exceden la longitud máxima permitida" },
        { status: 400 }
      );
    }

    const emailSubject = `Nueva Consulta IA4PYMES - ${company}`;

    // Configuración del correo usando fetch nativo en lugar del SDK
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // IMPORTANTE: Resend requiere que el From sea de un dominio verificado o onboarding@resend.dev para pruebas
        from: "IA4PYMES Web <onboarding@resend.dev>",
        to: "alejandro@ia4pymes.tech",
        reply_to: email, // Permite contestar al lead directamente
        subject: emailSubject,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Nueva Solicitud de Despliegue de IA</h2>
            
            <div style="margin-top: 20px;">
              <p><strong>🙋‍♂️ Nombre:</strong> ${name}</p>
              <p><strong>🏢 Empresa:</strong> ${company}</p>
              <p><strong>✉️ Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>📱 Teléfono:</strong> ${phone}</p>
              <p><strong>💰 Rango de Inversión:</strong> <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-weight: bold;">${budget}</span></p>
            </div>
            
            <div style="margin-top: 30px; background-color: #f8fafc; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 0 4px 4px 0;">
              <p style="margin-top: 0; color: #64748b; font-size: 14px; text-transform: uppercase; font-weight: bold;">📝 Detalles del Proyecto:</p>
              <p style="color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 40px; font-size: 12px; color: #94a3b8; text-align: center;">
              Este mensaje fue enviado desde el formulario de contacto automatizado de ia4pymes.tech.
            </div>
          </div>
        `,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend error:", result);
      return NextResponse.json(
        { error: "Error al enviar el correo a través de Resend" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Error en el endpoint de contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor", details: error instanceof Error ? error.message : "Desconocido" },
      { status: 500 }
    );
  }
}
