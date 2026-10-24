"""Restore entity density lost by the slimming pass, without restoring filler.

One dense definition sentence replaces the two paragraphs that were removed from
the services block. It is shorter than the original prose but carries more named
entities, which is what both classic search and answer engines read.
"""
import io

PATH = "app/page.tsx"
s = io.open(PATH, encoding="utf-8").read()

OLD = '''                <h2
                  id="que-hacemos-heading"
                  className="lg:col-span-4 text-[clamp(1.7rem,3.2vw,2.6rem)] font-black leading-[1.02] tracking-[-0.035em] text-ink"
                >
                  Qué hacemos: <span className="text-signal">software con IA</span> para tu PYME
                </h2>'''

NEW = '''                <div className="lg:col-span-4">
                  <h2
                    id="que-hacemos-heading"
                    className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-black leading-[1.02] tracking-[-0.035em] text-ink"
                  >
                    Qué hacemos: <span className="text-signal">software con IA</span> para tu PYME
                  </h2>
                  <p className="mt-5 max-w-[42ch] text-[15px] leading-[1.65] text-ink-soft">
                    Desarrollo de software a medida, automatización de procesos y agentes de IA
                    privados para PYMES en España. Integramos con tu ERP o CRM
                    (Holded, Sage, Odoo) y desplegamos en nube europea u on-premise, bajo RGPD.
                  </p>
                </div>'''

assert OLD in s
s = s.replace(OLD, NEW, 1)

# Keep the technical vocabulary of each capability visible as a short mono label.
OLD_ITEMS = '''                    { title: "Software a medida", benefit: "Código propio, sin lock-in" },
                    { title: "Automatización de procesos", benefit: "Ahorro cuantificado en euros" },
                    { title: "Agentes de IA privados", benefit: "Nube europea u on-premise" },'''

NEW_ITEMS = '''                    { title: "Software a medida", benefit: "Código propio, sin lock-in" },
                    { title: "Automatización de procesos", benefit: "Facturas, albaranes, presupuestos" },
                    { title: "Agentes de IA privados", benefit: "Chatbots y voz · RGPD" },'''

assert OLD_ITEMS in s
s = s.replace(OLD_ITEMS, NEW_ITEMS, 1)

io.open(PATH, "w", encoding="utf-8").write(s)
print("entity density restored")
