"""Align FAQPage with what the page actually shows (v2).

The v1 attempt failed because the JSON-LD tag in layout.tsx is self-closing
(`/>`), not `</script>`; this version detects the terminator instead of assuming
it.

Fixes three defects:
1. layout.tsx injected a FAQPage into every one of the 390 URLs, including pages
   with no FAQ. Structured data must describe the page it is on.
2. That left two FAQPage blocks on the home; now only the home emits one.
3. The page showed 6 questions while the schema declared 7. The entity question
   "¿Qué es IA4PYMES?" becomes visible, so markup and page say the same thing.
"""
import io
import re

# ---------------------------------------------------------------- 1. layout
p = "app/layout.tsx"
s = io.open(p, encoding="utf-8").read()
start = s.index("        {/* FAQPage Schema for Rich Snippets */}")

if "</script>" in s[start : start + 9000]:
    end = s.index("</script>", start) + len("</script>")
    terminator = "</script>"
else:
    end = s.index("/>", start) + len("/>")
    terminator = "/>"

removed = s[start:end]
assert "FAQPage" in removed, "the block does not look like a FAQPage schema"
assert removed.rstrip().endswith(terminator), "unexpected terminator"
assert len(removed) < 9000, f"block too large: {len(removed)}"

io.open(p, "w", encoding="utf-8").write(s[:start] + s[end:])
print(f"layout: removed {removed.count(chr(10)) + 1} lines (closed with {terminator})")


# --------------------------------------------------- 2. entity answers
def grab(path, question):
    src = io.open(path, encoding="utf-8").read()
    m = re.search(
        r'\{\s*question:\s*"' + re.escape(question) + r'",\s*answer:\s*\n?\s*"((?:[^"\\]|\\.)*)"',
        src,
    )
    assert m, f"answer not found for: {question}"
    return m.group(1)


es_answer = grab("app/page.tsx", "¿Qué es IA4PYMES?")
en_answer = grab("app/en/page.tsx", "What is IA4PYMES?")
print("es:", es_answer[:60], "...")
print("en:", en_answer[:60], "...")


# --------------------------------------------------- 3. make it visible
p = "components/faq-section.tsx"
s = io.open(p, encoding="utf-8").read()
assert "¿Qué es IA4PYMES?" not in s, "already inserted; refusing to duplicate"

es_pos = s.index("faqs: [", s.index("es: {")) + len("faqs: [")
s = (
    s[:es_pos]
    + f'\n      {{\n        question: "¿Qué es IA4PYMES?",\n        answer:\n          "{es_answer}",\n      }},'
    + s[es_pos:]
)

en_start = s.index("en: {")
assert "What is IA4PYMES?" not in s[en_start:], "already inserted in en"
en_pos = s.index("faqs: [", en_start) + len("faqs: [")
s = (
    s[:en_pos]
    + f'\n      {{\n        question: "What is IA4PYMES?",\n        answer:\n          "{en_answer}",\n      }},'
    + s[en_pos:]
)

io.open(p, "w", encoding="utf-8").write(s)
print("faq-section: entity question added to es and en")
