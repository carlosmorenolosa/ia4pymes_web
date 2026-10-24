"""Align FAQPage with what the page actually shows.

Three defects, one fix:
1. layout.tsx was injecting a FAQPage into every one of the 390 URLs, including
   pages with no FAQ on them. Removed: structured data must describe the page it
   is on.
2. That left two FAQPage blocks on the home. Now only the home emits one.
3. The page showed 6 questions while the schema declared 7. The entity question
   "¿Qué es IA4PYMES?" is added to the visible list, so the markup and the page
   say exactly the same thing.
"""
import io
import re

# ---------------------------------------------------------------- 1. layout
p = "app/layout.tsx"
s = io.open(p, encoding="utf-8").read()
start = s.index("        {/* FAQPage Schema for Rich Snippets */}")
end = s.index("</script>", start) + len("</script>")
removed = s[start:end]
assert "FAQPage" in removed and len(removed) < 8000, "unexpected block size"
s = s[:start] + s[end:]
io.open(p, "w", encoding="utf-8").write(s)
print(f"layout: removed {removed.count(chr(10)) + 1} lines of global FAQPage")

# --------------------------------------------------- 2. entity answers
def grab(path, question, lang_label):
    src = io.open(path, encoding="utf-8").read()
    m = re.search(
        r'\{\s*question:\s*"' + re.escape(question) + r'",\s*answer:\s*\n?\s*"((?:[^"\\]|\\.)*)"',
        src,
    )
    assert m, f"{lang_label}: question not found -> {question}"
    return m.group(1)


es_answer = grab("app/page.tsx", "¿Qué es IA4PYMES?", "es")
en_answer = grab("app/en/page.tsx", "What is IA4PYMES?", "en")
print("es answer:", es_answer[:70], "...")
print("en answer:", en_answer[:70], "...")

# --------------------------------------------------- 3. make it visible
p = "components/faq-section.tsx"
s = io.open(p, encoding="utf-8").read()

es_pos = s.index("faqs: [", s.index("es: {")) + len("faqs: [")
s = (
    s[:es_pos]
    + f'\n      {{\n        question: "¿Qué es IA4PYMES?",\n        answer:\n          "{es_answer}",\n      }},'
    + s[es_pos:]
)

en_start = s.index("en: {")
en_pos = s.index("faqs: [", en_start) + len("faqs: [")
s = (
    s[:en_pos]
    + f'\n      {{\n        question: "What is IA4PYMES?",\n        answer:\n          "{en_answer}",\n      }},'
    + s[en_pos:]
)

io.open(p, "w", encoding="utf-8").write(s)
print("faq-section: entity question added to es and en")
