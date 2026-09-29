Design & Style Guide: Dahlia’s Bakehouse Website

This repository serves as the core brand and design specification for generating and styling the official website for Dahlia’s Bakehouse. Design agents and UI generators should follow the instructions, design system token specifications, and layout structures detailed below.

1. Brand Identity & Aesthetic Direction

⚬ Brand Name: Dahlia’s Bakehouse
⚬ Vibe / Tone: Warm, artisanal, cozy, high-end boutique bakery, handcrafted with care.
⚬ Target Audience: Local sweet treat lovers, custom cake clients, gift buyers, and event caterers.
⚬ Visual Theme: Warm earthy pastels, soft florals, organic curves, rich baker tones (warm cream, soft sage, dahlia blush pink, dark chocolate brown accents).

2. Design System Tokens & Assets

Color Palette

:root {
  /* Primary Brand Colors */
  --color-cream-bg: #FAF6F0;      /* Primary soft background */
  --color-dahlia-pink: #E8A598;   /* Accent, highlights, CTA */
  --color-sage-green: #A3B18A;    /* Secondary accent, foliage/floral touch */
  
  /* Neutral / Typography Colors */
  --color-chocolate-dark: #3D2314;/* Primary text, headers, strong CTA background */
  --color-warm-taupe: #8C7A6B;     /* Subtitles, secondary text, borders */
  --color-white-surface: #FFFFFF;  /* Card backgrounds, elevated panels */
}


Typography

⚬ Primary / Heading Font: Elegant Display Serif or Soft Playful Serif (e.g., Playfair Display, Fraunces, or Oswald/Cinzel depending on modern vs. vintage editorial style).
⚬ Body / Secondary Font: Warm Clean Sans-Serif (e.g., Plus Jakarta Sans, Inter, or Lora for longer descriptions).

3. Recommended Site Architecture & Page Sections

The single-page landing or multi-page site should feature the following key sections:

A. Navigation Header

⚬ Logo/Wordmark: Dahlia’s Bakehouse (Left aligned or Centered)
⚬ Nav Links: Menu / Bakes, About Dahlia, Custom Orders, Contact / Find Us
⚬ Action: Order Now or Inquire CTA button.

B. Hero Section

⚬ Headline: Freshly Baked, Handcrafted with Love.
⚬ Subheadline: Artisanal cakes, pastries, and custom baked goods crafted daily at Dahlia’s Bakehouse.
⚬ Primary CTA: Explore Our Menu
⚬ Secondary CTA: Request Custom Order
⚬ Visuals: High-resolution product showcase banner or grid of featured bakes (e.g., cupcakes, custom celebratory cakes, cookies).

C. Featured Bakes & Menu Showcase

⚬ Filterable grid/cards with smooth hover effects:
  ⚬ Categories: Signature Cakes, Daily Pastries, Cupcakes, Seasonal Specials.
  ⚬ Card Elements: High-res image, bake title, brief description, tag (e.g., Best Seller, Gluten-Free Option), and price/order badge.

D. Custom Order Inquiry Workflow

⚬ Simple step-by-step custom order guide:
  1. Pick Your Flavor & Size
  2. Share Your Theme / Inspo
  3. Pick Up or Delivery
⚬ Interactive inquiry form or link to direct messaging/Instagram DM.

E. Brand Story / Meet the Baker

⚬ Short paragraph introducing Dahlia and the story behind the Bakehouse.
⚬ Warm photo of the baking process or shop atmosphere.

F. Instagram Live Feed / Social Gallery

⚬ Dynamic grid displaying recent Instagram posts (linking to @dahliasbakehouse).
⚬ Section Header: Fresh from the Shed — Follow us on Instagram.

G. Footer

⚬ Operating hours & pickup location/address.
⚬ Social links (Instagram: @dahliasbakehouse).
⚬ Copyright and newsletter subscription for seasonal drop alerts.

4. UI/UX & Styling Guidelines for Design Agents

1. Card Component Styling:
  ⚬ Use soft rounded corners (border-radius: 16px to 24px).
  ⚬ Subtle soft drop shadows (box-shadow: 0 4px 20px rgba(61, 35, 20, 0.06)).
2. Buttons & Interactivity:
  ⚬ Primary Button: --color-chocolate-dark background with --color-cream-bg text, rounded pill style (border-radius: 9999px). Hover state transitions smoothly to --color-dahlia-pink.
3. Animations:
  ⚬ Subtle fade-in on scroll.
  ⚬ Micro-interactions on food cards (gentle zoom/hover uplift).
