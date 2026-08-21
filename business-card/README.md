# Business Card — Julie Stromwall

Two variants of the same layout. Pick one and print it; the other is there so you can compare.

| Variant | Front | Back |
|---|---|---|
| **A** | Cream (#FAF7F2) | Black `js.` monogram |
| **B** | Black (#1A1A1A) | Black `js.` monogram |

## Files

| File | Use |
|---|---|
| `A_cream-front_PRINT-with-bleed.pdf` | Variant A — **send to printer.** 3.75×2.25" (3.5×2 trim + 0.125" bleed). p1 front, p2 back. |
| `B_black-front_PRINT-with-bleed.pdf` | Variant B — **send to printer.** Same specs. |
| `A_cream-front_TRIM-3.5x2.pdf` / `B_black-front_TRIM-3.5x2.pdf` | Exact 3.5×2", no bleed. Only if the printer asks for trim size. |
| `preview-options.png` | Both variants side by side. |
| `card.html` | Source. The photo is embedded as base64, so the file is self-contained. |
| `julie-headshot.jpg` / `julie-headshot-circle.png` | Cropped headshot (square + circular alpha) for reuse elsewhere. |

The two variants come from **one** source file — variant B is variant A with `class="dark"`
added to `.front`. Edit `card.html` once and both re-render.

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

> **Ask for a rich black build, not 100% K.** Variant B is black on both sides — heavy ink
> coverage. Flat 100% K prints as a washed-out dark gray at that scale.

> **Photo check.** The headshot prints at 0.95" across; the embedded image is 760px, ~800 dpi.
> Well above the 300 dpi minimum, so it'll be sharp.

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
- The terracotta dot on the portrait sits at 45° on the ring, echoing the dot in the monogram.
- Bleed is a CSS variable, so the trim and bleed PDFs fall out of the same markup.
