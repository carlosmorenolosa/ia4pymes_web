import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react"

export const metadata = {
  title: "Política de Privacidad | IA4PYMES",
  description: "Política de privacidad y protección de datos personales de IA4PYMES.",
}

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/50 p-6 sm:p-10 md:p-12 relative overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Política de Privacidad</h1>
            <p className="text-sm text-slate-500 mt-1">Última actualización: Julio de 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-600 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-lg">
              <Lock className="w-4 h-4 text-blue-600" />
              <h2>1. Identidad del Responsable del Tratamiento</h2>
            </div>
            <p>
              El responsable del tratamiento de sus datos de carácter personal obtenidos a través de esta plataforma es <strong>IA4PYMES</strong>. Puede ponerse en contacto con nuestro Delegado de Protección de Datos a través de la siguiente dirección de correo electrónico: <a href="mailto:contacto@ia4pymes.tech" className="text-blue-600 hover:underline">contacto@ia4pymes.tech</a>.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-lg">
              <Eye className="w-4 h-4 text-blue-600" />
              <h2>2. Finalidad del Tratamiento de Datos</h2>
            </div>
            <p>
              En IA4PYMES tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gestionar el envío de información solicitada a través del formulario de contacto y agendamientos de consultoría.</li>
              <li>Prestar los servicios de integración de Inteligencia Artificial contratados por su organización.</li>
              <li>Remitir boletines informativos y comunicaciones comerciales sobre nuestros servicios (newsletter) siempre que haya otorgado su consentimiento explícito previo.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-lg">
              <FileText className="w-4 h-4 text-blue-600" />
              <h2>3. Legitimación del Tratamiento</h2>
            </div>
            <p>
              La base legal para el tratamiento de sus datos depende de la finalidad correspondiente:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Consentimiento del interesado:</strong> Para responder a sus solicitudes de información, consultas a través del formulario de contacto y suscripciones a boletines.</li>
              <li><strong>Relación contractual:</strong> Para la ejecución del contrato de prestación de servicios de desarrollo de software y consultoría tecnológica.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-lg">
              <Shield className="w-4 h-4 text-blue-600" />
              <h2>4. Conservación de los Datos</h2>
            </div>
            <p>
              Los datos personales proporcionados se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recaban y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-lg">
              <Lock className="w-4 h-4 text-blue-600" />
              <h2>5. Confidencialidad y Seguridad</h2>
            </div>
            <p>
              En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la normativa local vigente, IA4PYMES se compromete al cumplimiento de su obligación de secreto de los datos de carácter personal y de su deber de guardarlos. Adoptamos las medidas de seguridad técnicas y organizativas necesarias para evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
            <p className="bg-blue-50 border-l-4 border-blue-600 p-4 text-slate-700 text-sm italic rounded-r-xl">
              <strong>Compromiso IA:</strong> Los datos y código sensible que integramos en los flujos de inteligencia artificial de nuestros clientes jamás se utilizan para el entrenamiento de modelos de lenguaje públicos de terceros.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-lg">
              <FileText className="w-4 h-4 text-blue-600" />
              <h2>6. Derechos de los Usuarios</h2>
            </div>
            <p>
              Usted tiene derecho a obtener confirmación sobre si en IA4PYMES estamos tratando sus datos personales. Puede ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición enviando un correo electrónico a <a href="mailto:contacto@ia4pymes.tech" className="text-blue-600 hover:underline">contacto@ia4pymes.tech</a> adjuntando copia de su documento de identidad.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">© 2026 IA4PYMES. Todos los derechos reservados.</p>
        </div>

      </div>
    </div>
  )
}
