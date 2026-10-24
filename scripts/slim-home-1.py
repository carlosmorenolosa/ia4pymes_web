"""Home slimming pass 1: collapse "Qué hacemos" and drop the newsletter block.

Line-range based so the operation is exact and reversible by git.
"""
import io

PATH = "app/page.tsx"
lines = io.open(PATH, encoding="utf-8").read().split("\n")


def at(n):
    return lines[n - 1]


# --- guards -----------------------------------------------------------------
assert at(247).lstrip().startswith("<section id=\"que-hacemos\""), at(247)
assert at(303).strip() == "</section>", at(303)
assert at(319).strip() == "{/* Newsletter Section */}", at(319)
assert at(320).lstrip().startswith("<section"), at(320)
assert at(391).strip() == "</section>", at(391)
assert at(393).strip() == "{/* Process Section */}", at(393)

NEW_QUE_HACEMOS = '''        <section id="que-hacemos" className="py-20 sm:py-28 relative" aria-labelledby="que-hacemos-heading">
          <div className="container mx-auto px-5 sm:px-8 max-w-[1360px]">
            <FadeIn>
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <h2
                  id="que-hacemos-heading"
                  className="lg:col-span-4 text-[clamp(1.7rem,3.2vw,2.6rem)] font-black leading-[1.02] tracking-[-0.035em] text-ink"
                >
                  Qué hacemos: <span className="text-signal">software con IA</span> para tu PYME
                </h2>

                <ul className="lg:col-span-8 w-full border-t border-line">
                  {[
                    { title: "Software a medida", benefit: "Código propio, sin lock-in" },
                    { title: "Automatización de procesos", benefit: "Ahorro cuantificado en euros" },
                    { title: "Agentes de IA privados", benefit: "Nube europea u on-premise" },
                  ].map((item) => (
                    <li
                      key={item.title}
                      className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-line py-6"
                    >
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-ink">
                        {item.title}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                        {item.benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>'''

# Replace bottom-up so the earlier line numbers stay valid.
out = lines[:318] + lines[391:]                 # drop newsletter (319-391)
out = out[:246] + NEW_QUE_HACEMOS.split("\n") + out[303:]   # replace 247-303

io.open(PATH, "w", encoding="utf-8").write("\n".join(out))
print("ok, lines now:", len(out))
