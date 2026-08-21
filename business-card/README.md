# Business Card — Julie Stromwall

## Files

| File | Use |
|---|---|
| `JulieStromwall_Card_PRINT-with-bleed.pdf` | **Send this to the printer.** 3.75" × 2.25" (3.5×2 trim + 0.125" bleed all around). Page 1 = front, page 2 = back. |
| `JulieStromwall_Card_TRIM-3.5x2.pdf` | Exact 3.5" × 2", no bleed. Use only if your printer explicitly asks for trim size. |
| `preview-front.png` / `preview-back.png` | On-screen previews (4× scale). |
| `card.html` | Source. Edit and re-render to change anything. |

## Print specs

- **Trim size:** 3.5" × 2" (US standard)
- **Bleed:** 0.125" on all four edges
- **Safe margin:** 0.25" inside the trim — no text sits closer than this
- **Sides:** double-sided (front = info, back = monogram on charcoal)
- **Recommended stock:** 16pt+ uncoated or soft-touch matte. The cream (#FAF7F2) and charcoal
  read best on uncoated; gloss will make the charcoal back look plasticky.
- **Color:** file is RGB. Most online printers (Moo, Vistaprint, Jukebox) convert automatically.
  If your printer requires CMYK, hand them these values:

| Color | Hex | Approx CMYK |
|---|---|---|
| Cream | `#FAF7F2` | 1 / 2 / 4 / 0 |
| Charcoal | `#1A1A1A` | 0 / 0 / 0 / 90 |
| Teal | `#2D9B8A` | 71 / 12 / 51 / 1 |
| Terracotta | `#C4714E` | 17 / 63 / 74 / 3 |

> The charcoal back is a heavy ink coverage area — ask the printer for a rich black build
> rather than 100% K if you want it to look deep rather than washed-out gray.

## Re-rendering after edits

```bash
cd business-card
python3 - <<'PY'
from playwright.sync_api import sync_playwright
import pathlib
u = 'file://' + str(pathlib.Path('card.html').resolve())
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(device_scale_factor=4)
    pg.goto(u); pg.wait_for_load_state('networkidle')
    pg.pdf(path='JulieStromwall_Card_PRINT-with-bleed.pdf', width='3.75in', height='2.25in',
           print_background=True, margin={'top':'0','bottom':'0','left':'0','right':'0'})
    pg.locator('.front').screenshot(path='preview-front.png')
    pg.locator('.back').screenshot(path='preview-back.png')
    pg.add_style_tag(content=':root{--bleed:0in !important;}')
    pg.pdf(path='JulieStromwall_Card_TRIM-3.5x2.pdf', width='3.5in', height='2in',
           print_background=True, margin={'top':'0','bottom':'0','left':'0','right':'0'})
    b.close()
PY
```

## Design notes

- Palette, type (Inter), and the `js.` monogram all match the portfolio site and the
  invoice template in `../invoices/` — the three pieces read as one brand.
- The teal spine runs off the left edge as a full bleed, so a slightly off cut won't
  leave a sliver or a crooked stripe.
- Back is monogram only, no URL — deliberate, per the brief.
