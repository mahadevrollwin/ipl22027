from pathlib import Path

out = Path(__file__).resolve().parents[1] / "public" / "ads"
out.mkdir(parents=True, exist_ok=True)
sizes = [(300, 250), (728, 90), (336, 280), (320, 50), (320, 100)]

for w, h in sizes:
    label = f"{w}x{h}"
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="Advertisement placeholder {label}">
  <rect width="{w}" height="{h}" fill="#e4eaf8"/>
  <rect x="1.5" y="1.5" width="{w - 3}" height="{h - 3}" fill="none" stroke="#8a97b0" stroke-width="1.5" stroke-dasharray="7 5"/>
  <text x="{w / 2}" y="{h / 2 - 6}" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#132e73">Advertisement</text>
  <text x="{w / 2}" y="{h / 2 + 14}" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#5b6b8c">{label} placeholder</text>
</svg>
"""
    (out / f"{label}.svg").write_text(svg, encoding="utf-8")
    print("wrote", label)
