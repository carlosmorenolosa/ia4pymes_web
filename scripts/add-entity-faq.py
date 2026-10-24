"""Make the entity question visible in the Spanish FAQ.

Reads the answer straight out of homeFaqs in app/page.tsx with a small manual
parser instead of a regex, because the shell heredoc keeps eating the escape
sequences in the pattern.
"""
import io

# ---------------------------------------------------------------- extract
src = io.open("app/page.tsx", encoding="utf-8").read()
q_at = src.index("¿Qué es IA4PYMES?")
a_at = src.index("answer:", q_at)
quote = src.index('"', a_at)
i = quote + 1
buf = []
while True:
    ch = src[i]
    if ch == "\\":
        buf.append(src[i : i + 2])
        i += 2
        continue
    if ch == '"':
        break
    buf.append(ch)
    i += 1
answer = "".join(buf)
assert 40 < len(answer) < 700, f"implausible answer length: {len(answer)}"
print("answer chars:", len(answer))
print("starts:", answer[:80])

# ---------------------------------------------------------------- insert
p = "components/faq-section.tsx"
s = io.open(p, encoding="utf-8").read()
assert "¿Qué es IA4PYMES?" not in s, "already present; refusing to duplicate"

pos = s.index("faqs: [", s.index("es: {")) + len("faqs: [")
entry = f'\n      {{\n        question: "¿Qué es IA4PYMES?",\n        answer:\n          "{answer}",\n      }},'
s = s[:pos] + entry + s[pos:]
io.open(p, "w", encoding="utf-8").write(s)
print("inserted into the Spanish visible list")
