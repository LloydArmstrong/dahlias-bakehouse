---
version: 1
slug: "allergens-index-html"
primary_target: "allergens/index.html"
related_targets: []
---

# Allergens (allergens/index.html)

**Scope:** one static page. **Mode:** Read/Operate. Visitors arrive by scanning the printed QR code at the counter, usually on a phone, and need to find a bake and see what it contains within seconds.

- **Fixed address:** the page lives at `allergens/` and must never move or be renamed, because the printed QR code encodes that address (`qr/allergens.svg` and `qr/allergens.png`).
- **Weekly update by hand:** Zaarah edits the date and the bake blocks; the steps are in the comment at the top of the file. The date is typed by hand, never computed. There is no JavaScript, and there is no "safe for me" filter, because typos in the free-text chips could make a bake look safe.
- **Content:** the UK's 14 allergens, listed with "Contains" and "May contain" for each bake, plus a warning to tell Zaarah about any allergy. Sample data sits under a visible notice until the real list arrives.
- **World:** inherits DESIGN.md. It has a pink head band, a paper list of white allergen cards, and a chocolate footer; see the Allergen Card component.
- **Unresolved:** the real allergen data, which allergens the kitchen handles, and the site's final address (the QR code currently assumes GitHub Pages).
