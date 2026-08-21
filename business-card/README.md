# Business Card — Julie Stromwall

Front carries the name, positioning line, contact, and a headshot. Back is the `js.` monogram
on charcoal in every variant.

## Files

Five fronts, one back. Every front is the same source file with a different class on
`.front` — pick one, and I'll cut the matching trim-size PDF.

| PDF | Front |
|---|---|
| `card-cream-circle_PRINT-with-bleed.pdf` | Cream, 0.95" circular photo |
| `card-black-circle_PRINT-with-bleed.pdf` | Black, 0.95" circular photo |
| `card-black-circle-lg_PRINT-with-bleed.pdf` | Black, 1.18" circular photo |
| `card-black-panel_PRINT-with-bleed.pdf` | Black, full-bleed photo panel with teal edge |
| `card-black-panel-fade_PRINT-with-bleed.pdf` | Black, photo panel fading into the black |

All are 3.75×2.25" (3.5×2 trim + 0.125" bleed), p1 front / p2 back.

| Other file | Use |
|---|---|
| `preview-photo-options.png` | The four black variants side by side |
| `card.html` | Source. Photos embedded as base64, so it's self-contained. |
| `julie-headshot.jpg` / `-circle.png` / `-panel.jpg` | Cropped headshots for reuse elsewhere |

### Switching variants

```
class="card front"                    cream, small circle
class="card front dark"               black, small circle
class="card front dark photo-lg"      black, large circle
class="card front dark photo-panel"   black, full-bleed panel
class="card front dark photo-fade"    black, faded panel
```

## Print specs

- **Trim:** 3.5" × 2" (US standard) · **Bleed:** 0.125" all edges · **Safe margin:** 0.25" inside trim
- **Sides:** double-sided
- **Stock:** 16pt+ uncoated or soft-touch matte. Gloss makes the black look plasticky.
- **Color:** files are RGB; most online printers convert. CMYK equivalents:

| Color | Hex | Approx CMYK |
|---|---|---|
| Cream | `#FAF7F2` | 1 / 2 / 4 / 0 |
| Charcoal | `#1A1A1A` | 0 / 0 / 0 / 90 |
| Teal | `#2D9B8A` | 71 / 12 / 51 / 1 |
| Terracotta | `#C4714E` | 17 / 63 / 74 / 3 |

> **Ask for a rich black build, not 100% K.** The black variants are black on both sides —
> heavy ink coverage. Flat 100% K prints as a washed-out dark gray at that scale.

> **Photo resolution.** Circle variants embed a 760px image (~800 dpi at 0.95", ~640 dpi at
> 1.18"). Panel variants embed 810×1349 (~600 dpi at 1.35" wide). All well above the 300 dpi
> minimum, so every option prints sharp.

## Re-rendering after edits

```bash
cd business-card
python3 - <<'PY'
from playwright.sync_api import sync_playwright
import pathlib
u = 'file://' + str(pathlib.Path('card.html').resolve())
PDF = dict(print_background=True, margin={'top':'0','bottom':'0','left':'0','right':'0'})
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(device_scale_factor=4)
    for tag, dark in (('A_cream-front', False), ('B_black-front', True)):
        pg.goto(u); pg.wait_for_load_state('networkidle')
        if dark:
            pg.evaluate("document.querySelector('.front').classList.add('dark')")
            pg.wait_for_timeout(150)
        pg.pdf(path=f'{tag}_PRINT-with-bleed.pdf', width='3.75in', height='2.25in', **PDF)
        pg.locator('.front').screenshot(path=f"v-{'dark' if dark else 'light'}-front.png")
        if not dark: pg.locator('.back').screenshot(path='v-back.png')
        pg.add_style_tag(content=':root{--bleed:0in !important;}')
        pg.pdf(path=f'{tag}_TRIM-3.5x2.pdf', width='3.5in', height='2in', **PDF)
    b.close()
PY
```

## Design notes

- Palette, type (Inter), and the `js.` monogram match the portfolio site and the invoice
  template in `../invoices/` — the three pieces read as one brand.
- The teal spine bleeds off the left edge, so a slightly off cut won't leave a sliver.
- The terracotta dot on the circular portraits sits at 45° on the ring, echoing the monogram's dot.
- Panel variants bleed the photo off the top, right, and bottom edges, so a shifted cut can't
  leave a white sliver beside it.
- Bleed is a CSS variable, so the trim and bleed PDFs fall out of the same markup.
