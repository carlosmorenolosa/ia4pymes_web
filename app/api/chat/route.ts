import { NextResponse } from "next/server";

// Simple in-memory store for rate limiting
// Tracks IP -> { count: number, resetTime: number }
const rateLimit = new Map<string, { count: number; resetTime: number }>();

const MAX_REQUESTS = 10; // Max requests per window
const WINDOW_MS = 60 * 1000; // 1 minute window

export async function POST(request: Request) {
    try {
        // Get IP for rate limiting
        // In Vercel, x-forwarded-for contains the actual client IP
        const ip = request.headers.get("x-forwarded-for") || "unknown_ip";

        // Check rate limit
        const now = Date.now();
        const limitInfo = rateLimit.get(ip);

        if (limitInfo) {
            if (now < limitInfo.resetTime) {
                limitInfo.count++;
                if (limitInfo.count > MAX_REQUESTS) {
                    return NextResponse.json(
                        { error: "Demasiadas peticiones. Por favor, espera un momento." },
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

        // Read the request body
        const body = await request.json();

        const lambdaUrl = process.env.CHATBOT_LAMBDA_URL;
        const apiKey = process.env.CHATBOT_API_KEY;

        if (!lambdaUrl || !apiKey) {
            console.error("Faltan las variables de entorno CHATBOT_LAMBDA_URL o CHATBOT_API_KEY");
            return NextResponse.json(
                { error: "Error de configuración del servidor" },
                { status: 500 }
            );
        }

        // Forward the request to the backend Lambda
        const response = await fetch(lambdaUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            console.error("Error from Lambda:", response.status, response.statusText);
            return NextResponse.json(
                { error: "Error al comunicarse con el servicio de IA" },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}
