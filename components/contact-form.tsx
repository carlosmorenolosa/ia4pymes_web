"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const i18n = {
  es: {
    name: "Nombre", namePlaceholder: "Tu nombre",
    nameMin: "El nombre debe tener al menos 2 caracteres.",
    company: "Empresa", companyPlaceholder: "Nombre de tu empresa o proyecto",
    companyMin: "El nombre de la empresa es obligatorio.",
    email: "Email", emailPlaceholder: "Tu correo electrónico de contacto",
    emailInvalid: "Por favor, introduce un email válido.",
    phone: "Teléfono", phonePlaceholder: "Tu número de teléfono",
    phoneMin: "El número de teléfono es obligatorio.",
    budget: "Presupuesto", budgetPlaceholder: "Elige tu rango de inversión...",
    budgetMin: "Por favor, selecciona un rango de presupuesto.",
    budgetOptions: ["2.000€-10.000€", "10.000€-30.000€", "30.000€-50.000€", "Más de 50.000€"],
    message: "Cuéntame más sobre tu idea",
    messagePlaceholder: "Comparte algunos detalles sobre lo que necesitas. Cuanto más sepamos, mejor podremos ayudarte.",
    messageMin: "Por favor, cuéntanos un poco más sobre tu idea (mínimo 10 caracteres).",
    submit: "ENVIAR SOLICITUD", submitting: "Enviando...",
    successTitle: "¡Solicitud Enviada!",
    successText: "Gracias por tu propuesta. Nos pondremos en contacto contigo lo antes posible.",
    calendarCta: "Agendar Llamada en Calendly",
    anotherReq: "Enviar otra solicitud",
    errorTitle: "Error al enviar la solicitud:",
    errorContact: "Por favor, contáctanos directamente a nuestro correo: alejandro@ia4pymes.tech",
    privacyNote: "Al enviar este formulario, confirmas que has leído y aceptas nuestra política de privacidad.",
    unknownError: "Error desconocido",
  },
  en: {
    name: "Name", namePlaceholder: "Your name",
    nameMin: "Name must be at least 2 characters.",
    company: "Company", companyPlaceholder: "Your company or project name",
    companyMin: "Company name is required.",
    email: "Email", emailPlaceholder: "Your contact email address",
    emailInvalid: "Please enter a valid email address.",
    phone: "Phone", phonePlaceholder: "Your phone number",
    phoneMin: "Phone number is required.",
    budget: "Budget", budgetPlaceholder: "Choose your investment range...",
    budgetMin: "Please select a budget range.",
    budgetOptions: ["2,000€-10,000€", "10,000€-30,000€", "30,000€-50,000€", "More than 50,000€"],
    message: "Tell us more about your idea",
    messagePlaceholder: "Share some details about what you need. The more we know, the better we can help you.",
    messageMin: "Please tell us a bit more about your idea (minimum 10 characters).",
    submit: "SEND REQUEST", submitting: "Sending...",
    successTitle: "Request Sent!",
    successText: "Thank you for your proposal. We will get in touch with you as soon as possible.",
    calendarCta: "Schedule a Call on Calendly",
    anotherReq: "Send another request",
    errorTitle: "Error sending the request:",
    errorContact: "Please contact us directly at: alejandro@ia4pymes.tech",
    privacyNote: "By submitting this form, you confirm that you have read and accept our privacy policy.",
    unknownError: "Unknown error",
  },
}

type ContactFormValues = {
    name: string
    company: string
    email: string
    phone: string
    budget: string
    message: string
}

export function ContactForm({ lang = "es" }: { lang?: "es" | "en" }) {
    const t = i18n[lang]

    const schema = z.object({
        name: z.string().min(2, { message: t.nameMin }),
        company: z.string().min(2, { message: t.companyMin }),
        email: z.string().email({ message: t.emailInvalid }),
        phone: z.string().min(9, { message: t.phoneMin }),
        budget: z.string().min(1, { message: t.budgetMin }),
        message: z.string().min(10, { message: t.messageMin }),
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState<string>("")

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(schema),
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
            setErrorMessage(error instanceof Error ? error.message : t.unknownError)
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
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{t.successTitle}</h3>
                    <p className="text-slate-600 text-lg mb-8">
                        {t.successText}
                    </p>
                    <div className="flex flex-col gap-4 max-w-sm mx-auto">
                        <Link
                            href="https://calendly.com/ia4pymes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                        >
                            {t.calendarCta}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <button
                            onClick={() => setSubmitStatus("idle")}
                            className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold mt-4"
                            aria-label={t.anotherReq}
                        >
                            {t.anotherReq}
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-3xl mx-auto mb-16 px-4">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white/70 backdrop-blur-xl border border-white/40 p-6 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative"
            >
                {/* Decorative elements removed for pure white theme */}

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {/* Name */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-slate-700">{t.name}</label>
                            <input
                                id="name"
                                type="text"
                                placeholder={t.namePlaceholder}
                                className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${form.formState.errors.name ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600/10'} outline-none focus:ring-4 transition-all duration-200 text-slate-800 placeholder:text-slate-400`}
                                {...form.register("name")}
                            />
                            {form.formState.errors.name && (
                                <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    {form.formState.errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Company */}
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-semibold text-slate-700">{t.company}</label>
                            <input
                                id="company"
                                type="text"
                                placeholder={t.companyPlaceholder}
                                className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${form.formState.errors.company ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600/10'} outline-none focus:ring-4 transition-all duration-200 text-slate-800 placeholder:text-slate-400`}
                                {...form.register("company")}
                            />
                            {form.formState.errors.company && (
                                <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    {form.formState.errors.company.message}
                                </p>
                            )}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-slate-700">{t.email}</label>
                            <input
                                id="email"
                                type="email"
                                placeholder={t.emailPlaceholder}
                                className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${form.formState.errors.email ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600/10'} outline-none focus:ring-4 transition-all duration-200 text-slate-800 placeholder:text-slate-400`}
                                {...form.register("email")}
                            />
                            {form.formState.errors.email && (
                                <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    {form.formState.errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-semibold text-slate-700">{t.phone}</label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder={t.phonePlaceholder}
                                className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${form.formState.errors.phone ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600/10'} outline-none focus:ring-4 transition-all duration-200 text-slate-800 placeholder:text-slate-400`}
                                {...form.register("phone")}
                            />
                            {form.formState.errors.phone && (
                                <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    {form.formState.errors.phone.message}
                                </p>
                            )}
                        </div>
                    </motion.div>

                    {/* Presupuesto */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-2"
                    >
                        <label htmlFor="budget" className="text-sm font-semibold text-slate-700">{t.budget}</label>
                        <div className="relative">
                            <select
                                id="budget"
                                className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${form.formState.errors.budget ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600/10'} outline-none focus:ring-4 transition-all duration-200 text-slate-800 appearance-none cursor-pointer`}
                                {...form.register("budget")}
                                aria-label={t.budget}
                            >
                                <option value="" disabled className="text-slate-500">{t.budgetPlaceholder}</option>
                                {t.budgetOptions.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
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
                    </motion.div>

                    {/* Mensaje */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="space-y-2"
                    >
                        <label htmlFor="message" className="text-sm font-semibold text-slate-700">{t.message}</label>
                        <textarea
                            id="message"
                            placeholder={t.messagePlaceholder}
                            rows={4}
                            className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${form.formState.errors.message ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600/10'} outline-none focus:ring-4 transition-all duration-200 text-slate-800 placeholder:text-slate-400 resize-none`}
                            {...form.register("message")}
                        ></textarea>
                        {form.formState.errors.message && (
                            <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {form.formState.errors.message.message}
                            </p>
                        )}
                    </motion.div>

                    {/* Error general */}
                    {submitStatus === "error" && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex flex-col gap-2 transition-all">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold mb-1">{t.errorTitle}</p>
                                    <p className="font-mono text-xs bg-white/50 p-2 rounded border border-red-100">{errorMessage}</p>
                                    <p className="mt-2 text-xs">{t.errorContact}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Botón enviar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full relative overflow-hidden group bg-blue-600 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.39)] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer focus:ring-4 focus:ring-blue-600/10"
                        >
                            <div className="absolute inset-0 w-full h-full border border-white/10 rounded-full"></div>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin text-white/80" />
                                    <span>{t.submitting}</span>
                                </>
                            ) : (
                                <>
                                    <span>{t.submit}</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 pointer-events-none"></div>
                        </motion.button>
                    </motion.div>

                    <p className="text-center text-xs text-slate-600 mt-4 font-medium">
                        {t.privacyNote}
                    </p>
                </form>
            </motion.div>
        </div>
    )
}
