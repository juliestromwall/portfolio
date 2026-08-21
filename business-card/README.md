# Business Card — Julie Stromwall

Black card, double-sided. Back is the `js.` monogram on charcoal in every variant. The right
third of the front is a swappable panel — photo or graphic — driven by a class on `.front`.

**Currently choosing a design direction.** `card-explore.html` holds four unrelated
directions — different typefaces, palettes, and structures — compared in
`preview-directions.png`. `card.html` holds the earlier Inter/teal system and its variants.

## Files

| PDF | Use |
|---|---|
| `dir-A-editorial-serif_PRINT-with-bleed.pdf` | Fraunces on cream, hairline rules, italic kicker |
| `dir-B-spec-sheet_PRINT-with-bleed.pdf` | IBM Plex Mono, key/value rows on near-black |
| `dir-C-colour-block_PRINT-with-bleed.pdf` | Anton on a full terracotta field |
| `dir-D-swiss-grid_PRINT-with-bleed.pdf` | Archivo Narrow, hairline column grid on cream |
| `card-final_PRINT-with-bleed.pdf` | **Send this to the printer.** 3.75×2.25" (3.5×2 trim + 0.125" bleed). p1 front, p2 back. |
| `card-final_TRIM-3.5x2.pdf` | Exact 3.5×2", no bleed. Only if the printer asks for trim size. |

| Other file | Use |
|---|---|
| `preview-final.png` | Front + back at trim size — what you actually get after cutting |
| `card.html` | Source. Photos embedded as base64, so it's self-contained. |
| `julie-headshot*.{jpg,png}` | Cropped headshots (square, circular, panel) for reuse elsewhere |

## Print specs

- **Trim:** 3.5" × 2" (US standard) · **Bleed:** 0.125" all edges · **Safe margin:** 0.25" inside trim
- **Sides:** double-sided
- **Stock:** 16pt+ uncoated or soft-touch matte. Gloss makes the black look plasticky.
- **Color:** files are RGB; most online printers convert. CMYK equivalents:

| Color | Hex | Approx CMYK |
|---|---|---|
| Charcoal | `#1A1A1A` | 0 / 0 / 0 / 90 |
| Teal | `#2D9B8A` | 71 / 12 / 51 / 1 |
| Terracotta | `#C4714E` | 17 / 63 / 74 / 3 |
| Cream (type) | `#FAF7F2` | 1 / 2 / 4 / 0 |

> **Ask for a rich black build, not 100% K.** The card is black on both sides — heavy ink
> coverage. Flat 100% K prints as washed-out dark gray at this scale.

> **All vector.** The shipping card has no raster art — type and SVG icons only, so it's
> resolution-independent. (The photo variants embed 930×1350, ~600 dpi at print size.)

> **Support icon.** Currently a headset. A wrench, chat bubble, and shield were also mocked
> up and read clearly at 0.155" — swap the third `<svg>` in `.icons` to change it.


## Two source files

- `card-explore.html` — the four new directions (A/B/C/D). Each is a self-contained pair of
  `.card` sections; there is no shared variant system, deliberately, so they can diverge.
- `card.html` — the earlier Inter/teal/charcoal system with its `lay-*`, `art-*`, and
  `photo-*` variants.

Fonts come from Google Fonts at render time: Fraunces, IBM Plex Mono, Anton, Archivo Narrow.

> **`Est. Colorado`** on the back of direction A is copy I wrote, inferred from the 970 area
> code. Change or drop it — it is not sourced from anything you gave me.

## Editing

Everything lives in `card.html`. The layout is driven by classes on `.front`:

```
class="card front dark art-icons no-tag"   <- what ships
```

| Class | Effect |
|---|---|
| `dark` | black front (omit for cream) |
| `photo-panel` | full-bleed photo panel; hides the left accent bar, moves text left |
| `no-edge` | drops the teal hairline beside the photo |
| `photo-lg` | large circular photo instead of the panel |
| `photo-fade` | photo panel gradient-faded into the black |
| `art-mono` | oversized `js.` monogram, cropped by the right edge |
| `art-browser` | abstract browser window |
| `art-rail` | 01 Build / 02 Launch / 03 Support rail |
| `art-rail2` | same rail plus a descriptor under each step (widens the panel to 1.5in) |
| `art-icons` | icon + word rail |
| `art-words` | words only, dot markers |
| `art-band` | services as a band across the bottom (no side panel) |
| `lay-footer` | icon trio as a footer row |
| `lay-center` | everything centred |
| `lay-mirror` | icon rail on the left |
| `lay-stack` | single column, big name |

The `lay-*` classes use a standalone `.trio` element rather than the `.art` panel, so they
reposition the icons freely; each `lay-*` hides `.art`, `.spine`, and `.photo` automatically.
| `no-tag` | hides the "Built, launched, and supported." line |
| `art-term` | terminal |

Any `art-*` class hides the photo and the left accent bar automatically. `--art-w` in
`:root` controls the panel width.

> **The rail fronts always pair with `no-tag`.** "Built, launched, and supported." and
> "01 Build / 02 Launch / 03 Support" say the same thing twice.

`--panel-w` in `:root` controls how wide the photo is; `--bleed` set to `0in` yields the
trim-size render. Both PDFs come from the same markup.

### Re-rendering after edits

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
    pg.goto(u); pg.wait_for_load_state('networkidle')
    pg.evaluate("document.querySelector('.front').className = 'card front dark photo-panel no-edge'")
    pg.wait_for_timeout(180)
    pg.pdf(path='card-final_PRINT-with-bleed.pdf', width='3.75in', height='2.25in', **PDF)
    pg.add_style_tag(content=':root{--bleed:0in !important;}')
    pg.wait_for_timeout(150)
    pg.pdf(path='card-final_TRIM-3.5x2.pdf', width='3.5in', height='2in', **PDF)
    pg.locator('.front').screenshot(path='card-final-front.png')
    pg.locator('.back').screenshot(path='card-final-back.png')
    b.close()
PY
```

## Design notes

- Palette, type (Inter), and the `js.` monogram match the portfolio site and the invoice
  template in `../invoices/` — the three pieces read as one brand.
- The photo bleeds off the top, right, and bottom, so a shifted cut can't leave a white sliver.
- The panel crop is deliberately tighter than the panel's aspect ratio, so widening the frame
  scales the subject up rather than just revealing more background.
- The teal in the shirt is close enough to the brand teal that the photo reads as part of the
  system rather than a snapshot dropped into a layout.
