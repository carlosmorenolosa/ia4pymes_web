"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

// Validación del formulario
const contactFormSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    company: z.string().min(2, { message: "El nombre de la empresa es obligatorio." }),
    email: z.string().email({ message: "Por favor, introduce un email válido." }),
    phone: z.string().min(9, { message: "El número de teléfono es obligatorio." }),
    budget: z.string().min(1, { message: "Por favor, selecciona un rango de presupuesto." }),
    message: z.string().min(10, { message: "Por favor, cuéntanos un poco más sobre tu idea (mínimo 10 caracteres)." }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState<string>("")

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            budget: "",
            message: "",
        },
    })

    async function onSubmit(data: ContactFormValues) {
        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                let errorText = result.details || result.error || "Ocurrió un error al enviar el formulario";

                // Si Resend dice que falta API key:
                if (response.status === 401 && typeof errorText === "string" && errorText.toLowerCase().includes("key")) {
                    errorText = "Missing Resend API Key in Server";
                }

                throw new Error(errorText);
            }

            setSubmitStatus("success")
            form.reset()
            setErrorMessage("")
        } catch (error) {
            console.error("Error submitting form:", error)
            setSubmitStatus("error")
            setErrorMessage(error instanceof Error ? error.message : "Error desconocido")
        } finally {
            setIsSubmitting(false)
        }
    }

    // Si el formulario se ha enviado con éxito
    if (submitStatus === "success") {
        return (
            <div className="w-full max-w-2xl mx-auto my-16">
                <div className="bg-white/50 backdrop-blur-xl border border-white/20 p-8 sm:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center transform transition-all animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">¡Solicitud Enviada!</h3>
                    <p className="text-slate-600 text-lg mb-8">
                        Gracias por tu propuesta. Nos pondremos en contacto contigo lo antes posible.
                    </p>
                    <button
                        onClick={() => setSubmitStatus("idle")}
                        className="text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium"
                    >
                        Enviar otra solicitud
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-3xl mx-auto mb-16 px-4">
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-6 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 left-0 -mt-4 -ml-4 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Nombre */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-slate-700">Nombre</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Tu nombre"
                                className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${form.formState.errors.name ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:border-blue-400 focus:ring-blue-100'} outline-none focus:ring-4 transition-all duration-200 text-slate-800 placeholder:text-slate-400`}
                                {...form.register("name")}
                            />
                            {form.formState.errors.name && (
                                <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    {form.formState.errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Empresa */}
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-semibold text-slate-700">Empresa</label>
                            <input
                                id="company"
                                type="text"
                                placeholder="Nombre de tu empresa o proyecto"
                                className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${form.formState.errors.company ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:border-blue-400 focus:ring-blue-100'} outline-none focus:ring-4 transition-all duration-200 text-slate-800 placeholder:text-slate-400`}
                                {...form.register("company")}
                            />
                            {form.formState.errors.company && (
                                <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    {form.formState.errors.company.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Tu correo electrónico de contacto"
                                className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${form.formState.errors.email ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:border-blue-400 focus:ring-blue-100'} outline-none focus:ring-4 transition-all duration-200 text-slate-800 placeholder:text-slate-400`}
                                {...form.register("email")}
                            />
                            {form.formState.errors.email && (
                                <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    {form.formState.errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Teléfono */}
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Teléfono</label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Tu número de teléfono"
                                className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${form.formState.errors.phone ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:border-blue-400 focus:ring-blue-100'} outline-none focus:ring-4 transition-all duration-200 text-slate-800 placeholder:text-slate-400`}
                                {...form.register("phone")}
                            />
                            {form.formState.errors.phone && (
                                <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    {form.formState.errors.phone.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Presupuesto */}
                    <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-semibold text-slate-700">Presupuesto</label>
                        <div className="relative">
                            <select
                                id="budget"
                                className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${form.formState.errors.budget ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:border-blue-400 focus:ring-blue-100'} outline-none focus:ring-4 transition-all duration-200 text-slate-800 appearance-none cursor-pointer`}
                                {...form.register("budget")}
                            >
                                <option value="" disabled className="text-slate-400">Elige tu rango de inversión...</option>
                                <option value="Automatización Inicial (1.000€ - 3.000€)">Automatización Inicial (1.000€ - 3.000€)</option>
                                <option value="Sistema Avanzado (3.000€ - 6.000€)">Sistema Avanzado (3.000€ - 6.000€)</option>
                                <option value="Transformación Integral (6.000€ - 10.000€)">Transformación Integral (6.000€ - 10.000€)</option>
                                <option value="Solución a Gran Escala (+10.000€)">Solución a Gran Escala (+10.000€)</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {form.formState.errors.budget && (
                            <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {form.formState.errors.budget.message}
                            </p>
                        )}
                    </div>

                    {/* Mensaje */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-slate-700">Cuéntame más sobre tu idea</label>
                        <textarea
                            id="message"
                            placeholder="Comparte algunos detalles sobre lo que necesitas. Cuanto más sepamos, mejor podremos ayudarte."
                            rows={4}
                            className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${form.formState.errors.message ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:border-blue-400 focus:ring-blue-100'} outline-none focus:ring-4 transition-all duration-200 text-slate-800 placeholder:text-slate-400 resize-none`}
                            {...form.register("message")}
                        ></textarea>
                        {form.formState.errors.message && (
                            <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {form.formState.errors.message.message}
                            </p>
                        )}
                    </div>

                    {/* Error general */}
                    {submitStatus === "error" && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex flex-col gap-2 transition-all">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold mb-1">Error al enviar la solicitud:</p>
                                    <p className="font-mono text-xs bg-white/50 p-2 rounded border border-red-100">{errorMessage}</p>
                                    <p className="mt-2 text-xs">Por favor, contáctanos directamente a nuestro correo: alejandro@ia4pymes.tech</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Botón enviar */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative overflow-hidden group bg-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer focus:ring-4 focus:ring-slate-200"
                    >
                        <div className="absolute inset-0 w-full h-full border border-white/10 rounded-xl"></div>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin text-white/80" />
                                <span>Enviando...</span>
                            </>
                        ) : (
                            <>
                                <span>ENVIAR SOLICITUD</span>
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                        )}
                        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 pointer-events-none"></div>
                    </button>

                    <p className="text-center text-xs text-slate-500 mt-4">
                        Al enviar este formulario, confirmas que has leído y aceptas nuestra política de privacidad.
                    </p>
                </form>
            </div>
        </div>
    )
}
