#!/usr/bin/env node
/**
 * QA smoke suite.
 *
 * Covers the five pages a visitor lands on, every link they can follow from
 * those pages, the anchors inside them, and the widgets that need JavaScript:
 * cookie banner, mobile menu, header CTA, language switch, FAQ, calculator,
 * contact form and chat.
 *
 * The form and the chat are exercised against intercepted responses, so the
 * suite never sends an email and never calls the real chatbot backend. The
 * endpoints themselves are checked separately with curl.
 *
 * Usage:
 *   pnpm qa:smoke                 build required; owns the server lifecycle
 *   QA_BASE_URL=http://host:port pnpm qa:smoke     against a running server
 *   QA_CHROMIUM=/path/to/chrome pnpm qa:smoke      explicit browser binary
 */
import { spawn } from "node:child_process"
import { existsSync, readdirSync } from "node:fs"
import { createServer } from "node:net"
import { join } from "node:path"
import { chromium } from "playwright-core"

const PAGES = ["/", "/en", "/blog", "/en/blog", "/politica-privacidad"]
const VIEWPORT_DESKTOP = { width: 1440, height: 900 }
const VIEWPORT_MOBILE = { width: 390, height: 844 }
const REAL_USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"

const results = []
const record = (ok, name, detail = "") => {
  results.push({ ok, name, detail })
  console.log(`  ${ok ? "OK   " : "FALLO"} ${name}${detail ? `  (${detail})` : ""}`)
}

/* ------------------------------------------------------------------ browser */

function findChromium() {
  if (process.env.QA_CHROMIUM) return process.env.QA_CHROMIUM
  const candidates = []

  // Playwright's own cache, newest build first.
  const cache = process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, "ms-playwright")
  if (cache && existsSync(cache)) {
    for (const dir of readdirSync(cache).filter((d) => d.startsWith("chromium-")).sort().reverse()) {
      candidates.push(join(cache, dir, "chrome-win64", "chrome.exe"))
    }
  }
  // Browsers already installed on the machine: no download needed.
  candidates.push(
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  )
  const found = candidates.find((c) => c && existsSync(c))
  if (!found) {
    console.error(
      "No Chromium found. Install Chrome or Edge, or point QA_CHROMIUM at a browser binary.",
    )
    process.exit(2)
  }
  return found
}

/* ------------------------------------------------------------------- server */

function freePort() {
  return new Promise((resolve, reject) => {
    const srv = createServer()
    srv.on("error", reject)
    srv.listen(0, "127.0.0.1", () => {
      const { port } = srv.address()
      srv.close(() => resolve(port))
    })
  })
}

async function waitForServer(base, timeoutMs = 90000) {
  const started = Date.now()
  while (Date.now() - started < timeoutMs) {
    try {
      const res = await fetch(base, { redirect: "manual" })
      if (res.status > 0) return true
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500))
  }
  return false
}

async function startServer() {
  if (process.env.QA_BASE_URL) {
    const base = process.env.QA_BASE_URL.replace(/\/$/, "")
    if (!(await waitForServer(base, 15000))) {
      console.error(`QA_BASE_URL is not responding: ${base}`)
      process.exit(2)
    }
    console.log(`Using running server at ${base}`)
    return { base, stop: async () => {} }
  }

  if (!existsSync(".next/BUILD_ID")) {
    console.error("No build found. Run `pnpm build` first, or set QA_BASE_URL.")
    process.exit(2)
  }
  const port = await freePort()
  const base = `http://127.0.0.1:${port}`
  const nextBin = join("node_modules", "next", "dist", "bin", "next")
  const child = spawn(process.execPath, [nextBin, "start", "-p", String(port)], {
    stdio: ["ignore", "pipe", "pipe"],
  })
  // next writes its startup banner on stdout; keep it out of the report.
  child.stdout.resume()
  child.stderr.resume()

  const stop = async () => {
    if (child.exitCode !== null) return
    if (process.platform === "win32") {
      await new Promise((r) => spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" }).on("exit", r))
    } else {
      child.kill("SIGTERM")
    }
    await new Promise((r) => setTimeout(r, 500))
  }

  if (!(await waitForServer(base))) {
    await stop()
    console.error("The site did not start within 90s.")
    process.exit(2)
  }
  console.log(`Started the site at ${base}`)
  return { base, stop }
}

/* ------------------------------------------------------------------- checks */

const IGNORED_CONSOLE = [/_vercel\/insights/, /Failed to load resource: the server responded with a status of 404 \(Not Found\)$/]

async function visitEachPage(browser, base) {
  const ctx = await browser.newContext({ viewport: VIEWPORT_DESKTOP, ignoreHTTPSErrors: true })
  const page = await ctx.newPage()
  const collected = { links: new Map(), anchors: [], console: [], sections: {} }

  console.log("\n=== Páginas: estado, HTML crítico y consola ===")
  for (const path of PAGES) {
    const errors = []
    const onConsole = (msg) => {
      if (msg.type() !== "error") return
      const text = msg.text()
      if (IGNORED_CONSOLE.some((re) => re.test(text))) return
      errors.push(text.slice(0, 120))
    }
    const onError = (err) => errors.push(`pageerror: ${String(err.message).slice(0, 100)}`)
    page.on("console", onConsole)
    page.on("pageerror", onError)

    const res = await page.goto(base + path, { waitUntil: "domcontentloaded" })
    await page.waitForTimeout(600)
    const info = await page.evaluate(() => {
      const h1 = document.querySelector("h1")
      const anchors = [...document.querySelectorAll("a[href]")]
        .map((a) => a.getAttribute("href"))
        .filter(Boolean)
      const hashIds = anchors.filter((h) => h.startsWith("#")).map((h) => h.slice(1))
      return {
        h1: h1 ? h1.innerText.replace(/\s+/g, " ").trim() : "",
        sections: [...document.querySelectorAll("section[id]")].map((s) => s.id),
        body: (document.body.innerText || "").trim(),
        internal: anchors.filter((h) => h.startsWith("/")),
        hashes: hashIds,
        missingHash: hashIds.filter((id) => !document.getElementById(id)),
      }
    })

    record(res && res.status() === 200, `${path} responde 200`, res ? String(res.status()) : "sin respuesta")
    record(info.h1.length > 0, `${path} entrega su h1 en el HTML`, info.h1.slice(0, 48))
    if (path === "/" || path === "/en") {
      record(info.sections.length >= 5, `${path} entrega sus secciones`, `${info.sections.length} secciones`)
    } else {
      record(info.body.length > 400, `${path} entrega contenido en el HTML`, `${info.body.length} caracteres`)
    }
    record(info.missingHash.length === 0, `${path} no tiene anclas rotas`, info.missingHash.join(", "))
    record(errors.length === 0, `${path} sin errores de consola`, errors[0] || "")
    collected.sections[path] = info.sections
    for (const href of info.internal) {
      const clean = href.split("#")[0]
      if (clean && clean !== path) collected.links.set(clean, path)
    }
    collected.anchors.push(...info.hashes.map((id) => `${path}#${id}`))

    page.off("console", onConsole)
    page.off("pageerror", onError)
  }

  // Both languages must render the same sections: this is what caught the
  // English home silently missing a whole section.
  const es = collected.sections["/"] || []
  const en = collected.sections["/en"] || []
  record(
    es.length === en.length && es.length > 0,
    "las dos homes entregan el mismo número de secciones",
    `es=${es.length} en=${en.length}`,
  )

  console.log(`\n=== Enlaces internos encontrados en esas páginas (${collected.links.size}) ===`)
  let broken = []
  for (const [path, from] of collected.links) {
    try {
      const res = await page.goto(base + path, { waitUntil: "domcontentloaded", timeout: 20000 })
      if (!res || res.status() >= 400) broken.push(`${path} -> ${res ? res.status() : "?"} (desde ${from})`)
    } catch (err) {
      broken.push(`${path} no resolvió (desde ${from})`)
    }
  }
  record(broken.length === 0, "todos los enlaces internos responden", broken.slice(0, 3).join(" | "))

  await ctx.close()
}

async function checkDesktopWidgets(browser, base) {
  const ctx = await browser.newContext({ viewport: VIEWPORT_DESKTOP, userAgent: REAL_USER_AGENT })
  // The site swaps the chat for a placeholder when it detects automation.
  await ctx.addInitScript(() => {
    Object.defineProperty(navigator, "webdriver", { get: () => false })
  })
  const page = await ctx.newPage()

  console.log("\n=== Banner de cookies ===")
  await page.goto(base + "/", { waitUntil: "domcontentloaded" })
  const banner = page.locator("text=/Aceptar|Accept/i").first()
  const visible = await banner.waitFor({ state: "visible", timeout: 6000 }).then(() => true).catch(() => false)
  record(visible, "el banner de cookies aparece")
  if (visible) {
    await page.getByRole("button", { name: /Aceptar|Accept/i }).first().click()
    await page.waitForTimeout(700)
    const stored = await page.evaluate(() => JSON.stringify(localStorage))
    record(!(await page.locator("text=/Aceptar|Accept/i").first().isVisible().catch(() => false)), "al aceptar desaparece")
    record(/accept/i.test(stored), "el consentimiento queda guardado", stored.slice(0, 40))
  }

  console.log("\n=== Cabecera y navegación ===")
  const cta = page.locator('a[href*="#consultoria"]').first()
  record((await cta.count()) > 0, "el CTA de la cabecera apunta a consultoría")
  if (await cta.count()) {
    await cta.click()
    await page.waitForTimeout(1200)
    record(await page.locator("#consultoria").isVisible(), "al pulsarlo se ve la sección de consultoría")
  }
  await page.goto(base + "/", { waitUntil: "domcontentloaded" })
  await page.waitForTimeout(500)
  const switcher = page.locator('a[href="/en"]').first()
  record((await switcher.count()) > 0, "hay conmutador de idioma")
  if (await switcher.count()) {
    await switcher.click()
    await page.waitForTimeout(1200)
    record(page.url().includes("/en"), "el conmutador lleva a /en", page.url())
  }

  console.log("\n=== FAQ ===")
  const questions = page.locator("#faq button, #faq [role=button]")
  const nQuestions = await questions.count()
  record(nQuestions >= 5, `el FAQ tiene preguntas desplegables`, String(nQuestions))
  if (nQuestions > 0) {
    const first = questions.first()
    const before = await first.getAttribute("aria-expanded")
    await first.click()
    await page.waitForTimeout(500)
    const after = await first.getAttribute("aria-expanded")
    record(before !== after, "al pulsar una pregunta cambia su estado", `${before} -> ${after}`)
  }

  console.log("\n=== Calculadora ===")
  await page.goto(base + "/", { waitUntil: "domcontentloaded" })
  await page.waitForTimeout(800)
  await page.locator("#calculadora").scrollIntoViewIfNeeded()
  const readFigures = () =>
    page.evaluate(() => {
      const sec = document.getElementById("calculadora")
      return [...sec.querySelectorAll("span")]
        .map((s) => s.textContent.trim())
        .filter((t) => /^[\d.]+ €$/.test(t))
        .join(" / ")
    })
  const beforeFigures = await readFigures()
  const range = page.locator("#calculadora input[type=range]").first()
  await range.focus()
  for (let i = 0; i < 5; i++) await page.keyboard.press("ArrowRight")
  await page.waitForTimeout(800)
  record(beforeFigures !== (await readFigures()), "mover un campo cambia la cifra", `${beforeFigures} -> ${await readFigures()}`)

  console.log("\n=== Formulario de contacto (respuesta simulada) ===")
  await page.route("**/api/contact", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' }),
  )
  await page.goto(base + "/", { waitUntil: "domcontentloaded" })
  await page.waitForTimeout(900)
  const form = page.locator("#contacto")
  await form.scrollIntoViewIfNeeded()
  const fields = form.locator("input:visible, textarea:visible")
  const nFields = await fields.count()
  for (let i = 0; i < nFields; i++) {
    const field = fields.nth(i)
    const type = (await field.getAttribute("type")) || "text"
    if (type === "email") await field.fill("qa@example.com")
    else if (type === "tel") await field.fill("600123456")
    else if (type === "checkbox") await field.check({ force: true })
    else if (type !== "hidden") {
      const tag = await field.evaluate((el) => el.tagName.toLowerCase())
      await field.fill(tag === "textarea" ? "Mensaje de prueba automatizada con longitud suficiente." : "Datos QA")
    }
  }
  const select = form.locator("select")
  if (await select.count()) await select.first().selectOption({ index: 1 })
  await form.locator("button[type=submit]").click()
  await page.waitForTimeout(1500)
  record(
    (await page.locator("text=/Solicitud Enviada|Request Sent/i").count()) > 0,
    "el formulario envía y muestra la confirmación",
    `${nFields} campos`,
  )

  console.log("\n=== Chat (respuesta simulada) ===")
  await page.route("**/api/chat", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ response: "Respuesta de prueba del asistente." }),
    }),
  )
  await page.goto(base + "/", { waitUntil: "networkidle" })
  await page.waitForTimeout(2500)
  const input = page.locator('input[placeholder*="mensaje"], input[placeholder*="message"]').first()
  const hasChat = (await input.count()) > 0
  record(hasChat, "el chat está disponible para un visitante normal")
  if (hasChat) {
    await input.fill("¿Qué hacéis?")
    const send = page.locator('[aria-label*="Enviar"], [aria-label*="Send"]').first()
    if (await send.count()) await send.click()
    else await input.press("Enter")
    await page.waitForTimeout(2000)
    record((await page.locator("text=/Respuesta de prueba del asistente/").count()) > 0, "el chat envía y pinta la respuesta")
  }

  await ctx.close()
}

async function checkMobileWidgets(browser, base) {
  const ctx = await browser.newContext({ viewport: VIEWPORT_MOBILE, userAgent: REAL_USER_AGENT })
  const page = await ctx.newPage()
  console.log("\n=== Móvil 390x844 ===")
  await page.goto(base + "/", { waitUntil: "domcontentloaded" })
  await page.waitForTimeout(1600)

  const close = page.locator("button[aria-label]").first()
  if (await close.count()) {
    const box = await close.boundingBox()
    record(!!box && box.width >= 36 && box.height >= 36, "la X de cookies tiene área táctil suficiente", box ? `${Math.round(box.width)}x${Math.round(box.height)}` : "sin caja")
  }

  const burger = page.locator('button[aria-label*="menú"], button[aria-label*="menu"]').first()
  record((await burger.count()) > 0, "hay menú hamburguesa en móvil")
  if (await burger.count()) {
    const visibles = () =>
      page.locator('a[href*="#"]:visible').count()
    const before = await visibles()
    await burger.click()
    await page.waitForTimeout(900)
    const opened = await visibles()
    record(opened > before, "el menú móvil se abre", `${before} -> ${opened} enlaces visibles`)

    if (opened > before) {
      const y0 = await page.evaluate(() => window.scrollY)
      // Una opción de navegación del menú, no el logo: una ancla concreta.
      let clicked = false
      for (const hash of ["#que-hacemos", "#proceso", "#faq", "#contacto"]) {
        const option = page.locator(`a[href*="${hash}"]:visible`).first()
        if (await option.count()) {
          await option.click({ timeout: 5000 })
          clicked = true
          break
        }
      }
      record(clicked, "el menú ofrece opciones de navegación")
      await page.waitForTimeout(1400)
      const closed = await visibles()
      const y1 = await page.evaluate(() => window.scrollY)
      record(closed === before, "al elegir una opción el menú se cierra", `${closed} enlaces visibles`)
      record(y1 !== y0 || page.url().includes("#"), "y lleva al destino", `scroll ${y0} -> ${y1}`)
    }
  }

  await ctx.close()
}

/* --------------------------------------------------------------------- main */

const browserPath = findChromium()
const server = await startServer()
const browser = await chromium.launch({ executablePath: browserPath })
let failed = true
const runGroup = async (label, fn) => {
  try {
    await fn()
  } catch (err) {
    record(false, `${label} se ejecutó sin romperse`, String(err.message || err).slice(0, 120))
  }
}
try {
  await runGroup("páginas y enlaces", () => visitEachPage(browser, server.base))
  await runGroup("widgets de escritorio", () => checkDesktopWidgets(browser, server.base))
  await runGroup("widgets de móvil", () => checkMobileWidgets(browser, server.base))
  failed = results.some((r) => !r.ok)
} finally {
  await browser.close().catch(() => {})
  await server.stop()
}

const total = results.length
const bad = results.filter((r) => !r.ok)
console.log(`\n================ RESUMEN ================`)
console.log(`comprobaciones  ${total - bad.length}/${total}`)
if (bad.length) {
  console.log("\nfallos:")
  for (const f of bad) console.log(`  - ${f.name}${f.detail ? `: ${f.detail}` : ""}`)
}
console.log(bad.length === 0 ? "\nTodo correcto." : `\n${bad.length} fallo(s).`)
process.exit(failed ? 1 : 0)
