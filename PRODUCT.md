# Product

<!-- impeccable:product-schema 1 -->

Source: the user directed that [README.md](README.md) (the brand and design spec) answers the init interview. Facts below come from it; anything it leaves open is marked **Open**.

## Platform

web

## Stack

Delegated: static HTML/CSS with no framework or build step. The user scoped the site to information and contact details only, with no ordering and no form capture, so nothing needs a server. Hosting is **Open**. Any static host will work.

## Users

- **Local sweet-treat lovers:** want to know what's being baked, when the Bakehouse is open, and where to pick up.
- **Custom cake clients:** planning a birthday, wedding or other celebration and need to get a flavour, size, theme and pickup/delivery request to Dahlia.
- **Gift buyers:** looking for something handmade to give.
- **Event caterers:** named in README.md as an audience. **Open:** whether this means caterers buying from Dahlia or customers who want Dahlia to cater their event.

## Product Purpose

The official website for Dahlia's Bakehouse, a baker offering artisanal cakes, pastries and custom baked goods that are "crafted daily". It exists so that locals can find the bakes and how to get them, so that celebration customers can start a custom order, and so that followers stay connected through Instagram and seasonal-drop alerts.

Success means visitors can quickly find what's baking and how to get it, custom-order inquiries arrive complete enough to quote, and the audience grows on Instagram and the newsletter.

## Positioning

A small, personal, high-end boutique bakery run by a named baker, Dahlia. Everything is handcrafted, and custom celebration cakes and seasonal specials are the core of the offer. **Open:** the specific story or mechanism that sets Dahlia's apart (training, tradition, ingredients, what "the Shed" actually is). README.md reserves a "Meet the Baker" section for it, but the story itself hasn't been supplied.

## Operating Context

- **Getting bakes:** the Bakehouse opens once a week, every Friday, at 131 Dee Rd, Reading RG30 4JQ (confirmed by the user on 2026-09-29). Delivery is offered for custom orders. **Open:** Friday opening times.
- **Custom order flow, as specified:** (1) pick flavour and size → (2) share theme or inspiration → (3) choose pickup or delivery. For now, customers start this by contacting Dahlia directly through the listed contact details or an Instagram DM. The site does not capture it.
- **Menu categories:** Signature Cakes, Daily Pastries, Cupcakes, Seasonal Specials.
- **Instagram:** the brand's active channel and the source of the site's social gallery.
- **Seasonal drops:** limited releases, announced on Instagram for now.

## Capabilities and Constraints

Current scope, confirmed by the user: an information website whose main job is to give visitors the contact details. **Out of scope for now:** online ordering, checkout, inquiry forms and newsletter sign-up, or any other form that captures data. Every call to action leads to a way of contacting Dahlia (phone, email, Instagram DM) or to finding the pickup location.

Features:
- Navigation: Cake of the week, Bakes, About Dahlia, Find us. The main action is "Get in touch", not "Order Now".
- Menu showcase using the four categories. Each card shows the bake's name, a short description and an optional tag. Prices appear only once Dahlia supplies them.
- Cake of the week: one featured cake, directly under the cover, labelled with the current week, with a link to ask about it.
- **No custom-cakes section.** The user removed it on 2026-09-29. Custom orders still arrive through the contact details and Instagram DM.
- Meet the Baker story section.
- Instagram gallery linking to the account.
- Contact and Find Us: phone, email, Instagram, pickup address and operating hours.
- Footer with hours, location, social links and copyright.

Open decisions:
- **Instagram feed:** README.md asks for a "live feed". A live feed needs an Instagram Business or Creator account connected through Meta's API, or a third-party embed widget. For now the site uses a static gallery that links to the account.
- **Contact details:** the address is confirmed (131 Dee Rd, Reading RG30 4JQ). The phone number, email and Friday opening times haven't been supplied yet.

## Brand Commitments

- **Name:** Dahlia's Bakehouse. The user renamed it from "Dahlia's Bakehouse" on 2026-09-29, and it matches the repository folder `dahlias-bakehouse`. The place keeps its nickname "the Shed" ("Find the Shed", "Fresh from the Shed"). The user asked for that on the same day.
- **Instagram handle:** `@dahliasbakeshouse`, recorded exactly as README.md gives it. **Unverified:** it is close to the brand name ("bakes house" vs "bakehouse") but not an exact match. Confirm the real handle before any link ships.
- **Voice:** warm, artisanal and cozy; a high-end boutique bakery, handcrafted with care.
- **Supplied copy:** the hero headline, subheadline and call-to-action labels, plus the Instagram section header, all in README.md §3.
- **Visual spec:** README.md §1, §2 and §4 set the brand's vibe, visual theme, type direction and card, button and motion guidelines. Future visual work follows them. This file does not restate them, so that there is only one source of truth.
- **Palette may be adjusted:** the user has allowed the README's colour values to change where design requirements such as contrast demand it. The colour families stay the same: cream, dahlia pink, sage and chocolate brown.

## Evidence on Hand

- `images/dahlia-at-work-{720,1100}.webp`: a photo of Dahlia icing a cake, supplied by the user on 2026-09-29 and printed as a chocolate-on-paper duotone. Its origin is recorded in the `.webp.json` sidecars.

Still missing: product photos, logo or wordmark files, menu items, prices, Friday opening times, the story about Dahlia, and testimonials. Future work must use clearly marked placeholders for these and must never invent real-looking substitutes.

## Product Principles

1. **Real bakes, real facts.** Never invent menu items, prices, hours, addresses, reviews or Dahlia's story. Dietary and allergen tags (such as "Gluten-Free Option") appear only when Dahlia has confirmed them; for a food business they are safety claims, not decoration.
2. **The custom order is the high-value path.** Since 2026-09-29 the homepage has no dedicated custom-cakes section, by the user's choice, so this principle now runs through the contact details. The business's most important online job is turning celebration intent into an inquiry that includes flavour, size, theme and pickup/delivery details, with nothing left to chase.
3. **Practical before pretty for locals.** Hours, pickup location and how to order must be reachable within seconds from anywhere on the site.
4. **Dahlia is the brand.** The site should feel like one baker's work, not a chain, and the handcrafted claim needs her real voice and real photos to back it up.
