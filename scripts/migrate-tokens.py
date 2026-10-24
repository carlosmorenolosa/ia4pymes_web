"""One-shot migration of legacy slate/blue utilities to the warm art-direction tokens.

Only maps utilities that are unambiguous on light surfaces. Dark-surface utilities
(text-white, text-slate-300/400, bg-slate-900) are deliberately untouched because
they are used on the footer, the splash and the dialog overlays.
"""
import io
import pathlib
import re

MAP = {
    # Text on light surfaces
    "text-slate-900": "text-ink",
    "text-slate-800": "text-ink",
    "text-slate-700": "text-ink-soft",
    "text-slate-600": "text-ink-soft",
    "text-slate-500": "text-ink-faint",
    "text-gray-900": "text-ink",
    "text-gray-600": "text-ink-soft",
    # Surfaces
    "bg-white": "bg-card",
    "bg-slate-50": "bg-sunken",
    "bg-slate-100": "bg-sunken",
    "bg-gray-50": "bg-sunken",
    "hover:bg-slate-50": "hover:bg-sunken",
    "hover:bg-slate-100": "hover:bg-sunken",
    # Lines
    "border-slate-200": "border-line",
    "border-slate-100": "border-line",
    "border-slate-300": "border-line",
    "divide-slate-200": "divide-line",
    "divide-slate-100": "divide-line",
    # Signal (blue)
    "bg-blue-600": "bg-signal",
    "bg-blue-700": "bg-signal-deep",
    "bg-blue-500": "bg-signal",
    "hover:bg-blue-700": "hover:bg-signal-deep",
    "hover:bg-blue-600": "hover:bg-signal",
    "text-blue-600": "text-signal",
    "text-blue-700": "text-signal-deep",
    "text-blue-500": "text-signal",
    "hover:text-blue-700": "hover:text-signal-deep",
    "hover:text-blue-600": "hover:text-signal",
    "bg-blue-50": "bg-signal-wash",
    "bg-blue-100": "bg-signal-wash",
    "border-blue-600": "border-signal",
    "border-blue-500": "border-signal",
    "border-blue-200": "border-signal/25",
    "border-blue-100": "border-signal/15",
    "ring-blue-600": "ring-signal",
    "decoration-blue-600": "decoration-signal",
    "decoration-blue-500": "decoration-signal",
    # Signal (red)
    "text-red-500": "text-signal-red",
    "text-red-600": "text-signal-red",
    "decoration-red-500": "decoration-signal-red",
}

ROOTS = ["app", "components"]
SKIP = {"components/ui"}

total = 0
changed_files = 0
for root in ROOTS:
    for path in pathlib.Path(root).rglob("*.tsx"):
        rel = path.as_posix()
        if any(rel.startswith(s) for s in SKIP):
            continue
        src = io.open(path, encoding="utf-8").read()
        out = src
        for old, new in MAP.items():
            # word boundary so bg-white never touches bg-white/80 and
            # text-slate-900 never touches text-slate-900/70
            out = re.sub(r"(?<![\w-])" + re.escape(old) + r"(?![\w-])", new, out)
        if out != src:
            hits = sum(1 for o in MAP if re.search(r"(?<![\w-])" + re.escape(o) + r"(?![\w-])", src))
            total += hits
            changed_files += 1
            io.open(path, "w", encoding="utf-8").write(out)

print(f"files changed: {changed_files}, utility kinds touched: {total}")
