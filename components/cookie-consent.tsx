"use client"

import { useState, useEffect } from "react"
import { Cookie, X } from "lucide-react"
import Script from "next/script"

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [consentGiven, setConsentGiven] = useState(false)

    useEffect(() => {
        try {
            // Check if user has already made a choice
            const consent = localStorage.getItem("cookie-consent")
            if (consent === null) {
                // Delay showing banner for better UX
                const timer = setTimeout(() => {
                    setShowBanner(true)
                    setTimeout(() => setIsVisible(true), 100)
                }, 1500)
                return () => clearTimeout(timer)
            } else if (consent === "accepted") {
                setConsentGiven(true)
            }
        } catch (e) {
            console.warn("localStorage is not accessible:", e)
        }
    }, [])

    const handleAccept = () => {
        try {
            localStorage.setItem("cookie-consent", "accepted")
        } catch (e) {
            console.warn("localStorage write blocked:", e)
        }
        setConsentGiven(true)
        setIsVisible(false)
        setTimeout(() => setShowBanner(false), 300)
    }

    const handleReject = () => {
        try {
            localStorage.setItem("cookie-consent", "rejected")
        } catch (e) {
            console.warn("localStorage write blocked:", e)
        }
        setConsentGiven(false)
        setIsVisible(false)
        setTimeout(() => setShowBanner(false), 300)
    }

    return (
        <>
            {consentGiven && (
                <>
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-ZLTFRCVCDZ"
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-ZLTFRCVCDZ');
                        `}
                    </Script>
                </>
            )}

            {showBanner && (
                <div
                    className={`fixed bottom-0 left-0 right-0 z-[9999] p-4 transition-all duration-300 cookie-banner ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                        }`}
                    style={{ cursor: "default" }}
                >
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            {/* Icon */}
                            <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full flex-shrink-0">
                                <Cookie className="w-6 h-6 text-blue-600" />
                            </div>

                            {/* Text */}
                            <div className="flex-grow">
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Utilizamos cookies para analizar el tráfico y mejorar tu experiencia.
                                    Al aceptar, nos ayudas a entender cómo usas la web.{" "}
                                    <button
                                        className="text-blue-600 hover:underline font-medium"
                                        onClick={() => window.open("/politica-privacidad", "_blank")}
                                    >
                                        Más información
                                    </button>
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3 w-full sm:w-auto flex-shrink-0">
                                <button
                                    onClick={handleReject}
                                    className="flex-1 sm:flex-none px-4 py-2.5 text-gray-600 hover:text-gray-800 font-medium text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Rechazar
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 sm:flex-none px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors shadow-sm"
                                >
                                    Aceptar
                                </button>
                            </div>

                            {/* Close button for mobile */}
                            <button
                                onClick={handleReject}
                                className="absolute top-2 right-2 sm:hidden p-1 text-gray-400 hover:text-gray-600"
                                aria-label="Cerrar"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

// Extend window type for dataLayer
declare global {
    interface Window {
        dataLayer: unknown[]
    }
}
