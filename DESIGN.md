---
name: Dahlia's Bakehouse
description: A small-batch bakery's menu, printed as a grower's seed catalogue in five flat inks.
colors:
  paper: "#FAF6F0"
  surface: "#FFFFFF"
  pink: "#E8A598"
  sage: "#A3B18A"
  choc: "#3D2314"
  rose: "#A8405A"
  taupe: "#74604F"
  sage-ink: "#56663F"
  choc-soft: "#5E3A28"
typography:
  display:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(3.5rem, 10vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(2.3rem, 5.5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "1.4rem"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  card: "16px"
  panel: "24px"
  pill: "9999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  section: "clamp(4.5rem, 10vw, 8rem)"
  masthead: "3.75rem"
  content-max: "76rem"
components:
  button-primary:
    backgroundColor: "{colors.choc}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.choc}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.choc}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  button-ghost-hover:
    backgroundColor: "{colors.choc}"
    textColor: "{colors.paper}"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.choc}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.1rem"
    height: "2.75rem"
  filter-chip-active:
    backgroundColor: "{colors.choc}"
    textColor: "{colors.paper}"
  packet-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.choc}"
    rounded: "{rounded.card}"
    padding: "1.15rem 1.25rem 1.35rem"
  enquiry-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.choc}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.5rem, 3vw, 2.25rem)"
---

# Design System: Dahlia's Bakehouse

## Overview

**Creative North Star: "The Grower's Seed Catalogue"**

Dahlia's Bakehouse is printed like a seed catalogue. Every bake is a numbered variety on a seed packet, each year is a new edition, and the page is a run of flat, full-bleed ink bands: a pink cover, a paper catalogue, a sage custom-cakes spread, a pink Instagram band and a chocolate back cover. There are no gradients and no photographic hero. The dahlia prints carry the imagery. They are authored two-tone flowers with a chocolate key line, and their form tells you the category.

The type pairing is a soft, sturdy display serif over a warm grotesque. Density is generous and editorial, with wide section padding and a single content edge that runs from the masthead through every band. Depth is paper-soft. Packets sit a little above the page and lift when you reach for them, while bands never cast shadows onto each other.

This system descends from the README brand guide. It keeps that guide's palette families, 16px card radius, soft card shadow, white card surface and chocolate pill button, and it deepens values where text needs AA contrast.

**Key Characteristics:**
- Five inks (paper, pink, sage, chocolate, rose) laid as flat full-bleed bands.
- Seed-packet cards: a colour field over a white label, a dashed glue fold, and a pinked top seal.
- Authored dahlia prints in four forms, recoloured through three ink slots.
- Young Serif display over Schibsted Grotesk text; pill-shaped controls.
- One content edge shared by the masthead, the cover and every `.wrap`.
- Exponential ease-out motion that starts from a visible state.

## Colors

A spot-colour print palette: four README inks plus one deep dahlia rose, with three deepened text inks for legibility.

### Primary
- **Bakehouse Chocolate** (#3D2314): the key ink. Body text, headings, every rule and outline, the dahlia key line, the primary button, and the back-cover ground. It is the only text colour on pink and sage grounds.
- **Dahlia Blush** (#E8A598): the cover and masthead ground, the Instagram band, the primary button's hover fill, selection, and today's row in the hours table. On chocolate grounds it becomes the accent ink for links, labels, focus rings and placeholder marks.

### Secondary
- **Soft Sage** (#A3B18A): the custom-cakes band, the pastries packet field, and the leaves around the cover bloom. On chocolate it serves as quiet footer text.
- **Sage Ink** (#56663F): sage deep enough to read on light grounds. It is reserved for the "open now" status dot.

### Tertiary
- **Deep Dahlia Rose** (#A8405A): the deepest ink. It fills the seasonal packets and the "Seasonal drops" tile, and it colours the placeholder underline, the season tag, the sample note and list markers. It is the build's addition to the README palette.

### Neutral
- **Cream Paper** (#FAF6F0): the page ground, and the text colour on chocolate and rose.
- **White Surface** (#FFFFFF): packet labels and the enquiry panel. It is always a raised surface, never a band.
- **Warm Taupe** (#74604F): secondary text on paper and white, such as packet descriptions, section intros, captions and the empty-state border. It is deepened from the README's taupe to reach 5.5:1 on paper.
- **Soft Chocolate** (#5E3A28): secondary text on pink (4.9:1), used for the cover lede, the today note and the Instagram intro.
- Hairlines on chocolate grounds are cream at 22% alpha (`rgba(250, 246, 240, 0.22)`).

### Named Rules
**The Chocolate-On-Colour Rule.** Text on pink or sage is always chocolate or soft chocolate. Cream on pink measures 1.9:1, so the pink hover of the primary button switches its text to chocolate.

**The Deepest Ink Rule.** Rose marks what matters most this season: seasonal specials, placeholder proof marks and the season tag. Do not spend it on decoration.

**The Flat Ink Rule.** Grounds are solid full-bleed bands of a single ink. There are no gradients and no tints between inks.

## Typography

**Display Font:** Young Serif (with Georgia, serif)
**Body Font:** Schibsted Grotesk (with system-ui, sans-serif)

**Character:** Young Serif is a sturdy, soft-shouldered serif with a printed, catalogue voice, and it is used at a single weight (400). Schibsted Grotesk carries all running text and controls with a warm, even texture.

### Hierarchy
- **Display** (400, clamp(3.5rem, 10vw, 6rem), 0.92): the cover wordmark only. The second line indents 0.55em (0.4em on mobile).
- **Headline** (400, clamp(2.3rem, 5.5vw, 3.75rem), 1.1): section titles, balanced wrapping.
- **Title** (400, 1.35–1.85rem, 1.1–1.15): packet names (1.35rem; 1.85rem on the wide seasonal packet), step titles (1.55rem), the enquiry and back-cover subheads. Serif pull lines such as the tagline, the baker intro, the Instagram handle and today's status also sit in Young Serif.
- **Body** (400, 1.0625rem, 1.6): running text, kept to 34–60ch. Secondary body text runs at 0.9–0.95rem.
- **Label** (600, 0.75–0.8rem, 0.08–0.12em tracking, uppercase): catalogue apparatus only, meaning the packet number and category, the season tag, the edition line and contact field names.
- **Step numerals** (Young Serif 400, 3.25rem, 0.9): the large custom-cake step numbers.

### Named Rules
**The Catalogue Apparatus Rule.** Uppercase tracked labels belong to the print apparatus of a catalogue: variety numbers, the edition line, tags and field names. They never sit above a heading as a kicker or eyebrow.

**The One Weight Serif Rule.** Young Serif is set at 400 everywhere. Hierarchy comes from size, never from bolding the serif.

## Layout

Content sits in a 76rem column with a fluid gutter of `clamp(1rem, 4vw, 3rem)`. Bands run full-bleed, and their content aligns to one edge. The masthead and cover use `--inset`, calculated as `max(gutter, (100% - 76rem) / 2 + gutter)`, so they line up with `.wrap` exactly. Sections are separated by `clamp(4.5rem, 10vw, 8rem)` of padding. The sticky masthead is 3.75rem tall, and anchors scroll-pad past it.

The catalogue is an auto-fill grid of packets with a 15.5rem minimum and dense packing. From 56rem up, seasonal packets span two columns and lay the field beside the label. Two-column splits are asymmetric (7fr/5fr for custom cakes, 5fr/6fr for the baker) and collapse to one column at 52rem. The Instagram tiles run six across and drop to three at 52rem. Below 36rem, packets turn sideways with the field on the left at 38%, and the filter becomes a horizontal scroller that bleeds to the gutter.

Breakpoints in use: 36rem, 52rem, 56rem and 72rem.

## Elevation & Depth

Depth is soft and paper-like: shadows are low, warm and chocolate-tinted, and full-bleed bands stay flat. Raised things (packets, tiles, the enquiry panel, the baker plate) float slightly at rest and lift on hover.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 4px 20px rgba(61, 35, 20, 0.06)`): the README card shadow, used on the enquiry panel, the baker plate and Instagram tiles.
- **Card lift** (`box-shadow: 0 16px 36px rgba(61, 35, 20, 0.14)`): the hovered Instagram tile.
- **Packet rest** (`filter: drop-shadow(0 4px 10px rgba(61, 35, 20, 0.08))`): a drop-shadow rather than a box-shadow, so the shadow follows the crimped top.
- **Packet lift** (`filter: drop-shadow(0 14px 16px rgba(61, 35, 20, 0.16))`): the hovered packet.

### Named Rules
**The Bands Don't Float Rule.** Full-bleed ink bands never cast shadows. Only objects laid on the page are elevated.

## Shapes

Corners are gently rounded and controls are fully round: 16px for cards, tiles and the today card, 24px for larger panels (the enquiry and the baker plate), and pills for every button, chip and tag. Rules are chocolate at 1.5px, used for step dividers, the edition line, outlined controls and the masthead's bottom edge (1px). Dashes carry meaning: a dashed 1.5px line is the packet's glue fold, and a dashed taupe border marks the empty state. The packet's top edge is pinked with a scalloped CSS mask (a 6px crimp). The dahlia is the recurring silhouette, drawn in four forms (decorative, cactus, pompon and waterlily) from shared petal paths with a non-scaling chocolate stroke.

## Components

### Buttons
Confident chocolate pills that blush on hover.
- **Shape:** full pill (9999px), with a minimum height of 3rem and a 1.5px chocolate border.
- **Primary:** chocolate fill with cream text, Schibsted 600 at 1rem, 0.75rem × 1.5rem padding.
- **Hover / Focus:** the fill changes to pink and the text to chocolate over 0.35s ease-out. Press scales to 0.97. Focus is a 2.5px chocolate outline at a 3px offset (pink on chocolate grounds).
- **Ghost:** transparent fill with chocolate text and border. It fills with chocolate on hover.
- **Small:** 2.5rem minimum height, used in the masthead.

### Chips
- **Style:** the category filter uses transparent pills with a 1.5px chocolate border, Schibsted 600 at 0.95rem and a 2.75rem minimum height.
- **State:** a pink fill on hover. The pressed state (`aria-pressed="true"`) is a chocolate fill with cream text. Filtering reflows the packets with a 0.5s view transition.
- **Tag:** a small outlined rose pill with rose uppercase label text, used for the season.

### Cards / Containers
- **Corner Style:** 16px for cards and 24px for panels.
- **Background:** white surface for labels and panels. Instagram tiles are solid ink squares in choc, paper, sage or rose.
- **Shadow Strategy:** see Elevation & Depth.
- **Border:** none on raised cards. The today card is an unfilled 1.5px chocolate outline.
- **Internal Padding:** 1.15–1.75rem.

### Navigation
The masthead is a sticky pink running head with a 1px chocolate bottom rule. It holds the Young Serif wordmark (1.35rem) on the left, then Schibsted 500 links without underlines (the underline appears on hover), then the small primary button. The links hide below 52rem, leaving the wordmark and the button.

### Seed Packet (signature)
The seed packet is the catalogue's unit. The white sheet has a 16px radius and a pinked top seal. The colour field sits above the label at a 5:4 ratio, and a dashed glue fold in the field's ink separates the two. The field carries the variety number and category in uppercase in the top corners, plus a dahlia print at 64% width. The label holds the name, a taupe description, an optional tag and a bold "ask for" line pinned to the bottom. The category sets the field ink and the flower form: cakes are pink with the decorative form, pastries are sage with cactus, cupcakes are chocolate with pompon, and seasonal specials are rose with waterlily. Alternate packets swap the print's three ink slots. On hover the packet lifts 6px and tilts -0.6deg while its flower turns 20deg. On scroll, packets "deal" in from 3.5rem below at a 3deg tilt.

### Dahlia Print (signature)
The dahlia print is an inline SVG symbol with rings of petals filled from `--d1`/`--d2` (alternating) and a `--d3` centre, stroked in chocolate at 1.1–1.4 with a non-scaling stroke and round joins. The recolouring must always come from the palette inks. The cover bloom is the largest print, bleeding off the right edge with sage leaves, and it opens ring by ring on load (1.8s ease-out, staggered 0.11s per ring).

### Placeholder Proof Mark
Any fact that has not been supplied yet (hours, contact, address, handle, story) carries a 1px wavy rose underline, offset 0.3em. On chocolate grounds the underline is pink. A footer legend explains the mark.

## Do's and Don'ts

### Do:
- **Do** lay each section on one solid ink band and keep content on the shared 76rem / `--inset` edge.
- **Do** set text on pink or sage in chocolate (secondary in soft chocolate), and switch the primary button's text to chocolate when it turns pink.
- **Do** give seasonal specials the rose field and, from 56rem up, a two-column span.
- **Do** mark every unsupplied fact with the wavy rose proof mark (pink on chocolate).
- **Do** recolour dahlia prints only through `--d1`/`--d2`/`--d3` using palette inks, with the chocolate non-scaling key line.
- **Do** animate with the exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`) from a visible starting state, using transform-only entrances, and turn authored motion off under reduced motion.

### Don't:
- **Don't** use gradients or tints between inks. The world is flat spot colour.
- **Don't** put cream or white text on pink (1.9:1).
- **Don't** place uppercase kicker or eyebrow labels above headings. Tracked labels are packet and catalogue apparatus only.
- **Don't** bold Young Serif. Use size for hierarchy.
- **Don't** cast shadows from full-bleed bands, or use box-shadow on crimped packets, because it ignores the seal. Use drop-shadow instead.
