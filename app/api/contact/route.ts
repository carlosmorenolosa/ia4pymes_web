import { NextResponse } from "next/server";
import { Resend } from "resend";

// Usar variable de entorno si existe, pero proporcionar un fallback por si Vercel no lo ha inyectado en local
const apiKey = process.env.RESEND_API_KEY || "re_63Rwmc6M_9g6cPY1zydQHvybzom96gL6b";
const resend = new Resend(apiKey);

export async function POST(request: Request) {
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

        const emailSubject = `Nueva Consulta I4PYMES - ${company}`;

        // Configuración del correo
        const result = await resend.emails.send({
            from: "I4PYMES Web <onboarding@resend.dev>", // Resend test domain (solo sirve para enviar al propio email registrado en resend si no tienes dominio verificado)
            to: "alejandro@ia4pymes.tech",
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
        });

        if (result.error) {
            console.error("Resend error:", result.error);
            return NextResponse.json(
                { error: "Error al enviar el correo a través de Resend" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        console.error("Error en el endpoint de contacto:", error);
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}
