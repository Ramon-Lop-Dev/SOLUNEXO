---
name: Luminous Clay & Glass
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#006229'
  on-tertiary: '#ffffff'
  tertiary-container: '#007e37'
  on-tertiary-container: '#c1ffc5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
  headline-md-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 22px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-md: 2rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an architectural identity for a premier web design and engineering firm operating out of Managua, Nicaragua. It projects modern engineering precision, Caribbean-Pacific coastal clarity, and international design authority. 

The aesthetic merges **luminous glassmorphism** with **subtle, pillowy claymorphism**:
- **Canvas Environment:** Pristine white and faint slate backgrounds (`#FAFAFC` into `#F1F5F9`) create a sunlit, airy workspace.
- **Glassmorphism:** Frosted translucent planes (16px backdrop-blur) deliver layering, modern fluid dynamics, and structured hierarchy without visual weight.
- **Claymorphic Tactility:** Subtle dual-directional inset lights paired with diffused outer drop shadows create tactile, gently extruded surfaces that invite physical interaction.
- **Tone:** Technical competence balanced with warm Latin American hospitality—forward-thinking, optimistic, uncluttered, and precise.

## Colors

The palette balances stark, high-clarity neutrals with high-chroma functional accents:

- **Primary (`#2563EB` Cobalt):** Used strictly for high-impact actions, primary interactive triggers, and core focal indicators. Never overused in large surface areas.
- **Secondary (`#0D9488` Teal Emerald):** Represents engineering craftsmanship, algorithmic stability, and subtle decorative gradient interplay alongside Cobalt.
- **Tertiary (`#22C55E` WhatsApp Green):** Dedicated to live engagement, real-time client connectivity, WhatsApp communication, and verified positive states.
- **Neutral Core (`#0F172A` Slate Dark / `#334155` Slate Medium):** Strict, high-contrast typographic rendering ensuring WCAG AAA legibility against bright backgrounds.
- **Surface Foundations:**
  - Base Body: `#FAFAFC`
  - Subtle Section Fill: `#F1F5F9`
  - Pure Clay Elevation: `#FFFFFF`
  - Translucent Glass Fill: `rgba(255, 255, 255, 0.72)` with hairline perimeter border `rgba(15, 23, 42, 0.06)`

## Typography

Typography relies on **Plus Jakarta Sans** across all hierarchies. Its geometric curves reinforce the rounded clay-and-glass interface language, while crisp terminals guarantee legibility across technical specifications and agency proposals.

- **Headlines & Displays:** Rendered with weights `700` and `800` at negative letter-spacing (`-0.025em`) to evoke authority and tech-native sophistication.
- **Body Copy:** Set in `400` with open line-heights for frictionless reading across desktop case studies and mobile portfolios.
- **Labels & Microcopy:** Weighted at `600` and `700`, with slight positive tracking (`+0.02em`) applied to `label-sm` when displayed in uppercase.

## Layout & Spacing

A disciplined 12-column responsive fluid grid aligns content with structural clarity across all viewports:

- **Desktop (1024px+):** 12-column structure with `margin-lg` (4rem) margins and `gutter-lg` (2rem) gutters. Maximum content canvas capped at 1280px for standard views and 1440px for full-scale dashboards.
- **Tablet (768px - 1023px):** 8-column layout with `margin-md` (2rem) and `gutter` (1.5rem). Multi-column agency case study grids collapse gracefully from 3 or 4 columns down to 2.
- **Mobile (< 768px):** 4-column flow with `margin-sm` (1rem) margin and `gutter-sm` (1rem) gutter. Cards and interactive modules take full canvas width or adopt swipeable horizontal carousels with negative-margin bleed.

## Elevation & Depth

Visual hierarchy combines luminous glass transparency and pillowy clay tactility:

- **Level 0 (Base Canvas):** `#FAFAFC` matte surface without shadows.
- **Level 1 (Glassmorphic Sheeting):** Background `rgba(255, 255, 255, 0.72)`, backdrop filter `blur(16px)`, border `1px solid rgba(15, 23, 42, 0.06)`, and an ambient drop shadow `0 8px 32px 0 rgba(15, 23, 42, 0.04)`.
- **Level 2 (Clay Card Extrusion):** Solid `#FFFFFF` fill with dual-depth construction:
  - Inset specular highlights: `inset 0 1px 2px 0 rgba(255, 255, 255, 1.0), inset 0 -2px 4px 0 rgba(15, 23, 42, 0.03)`
  - Outset diffused pillow shadow: `0 12px 28px -4px rgba(15, 23, 42, 0.06), 0 4px 12px -2px rgba(15, 23, 42, 0.03)`
  - Edge treatment: `1px solid rgba(15, 23, 42, 0.05)`.
- **Level 3 (Floating Action & Modals):** Clay highlights intensified: `inset 0 2px 4px 0 rgba(255, 255, 255, 0.9)`, drop shadow `0 20px 40px -6px rgba(15, 23, 42, 0.10), 0 8px 16px -4px rgba(15, 23, 42, 0.04)`.

## Shapes

The design system uses a rounded corner language (Index `2`) to match the soft, friendly, yet structured clay aesthetic:

- **Standard Elements (Buttons, Inputs, Badges):** `rounded` (0.5rem / 8px).
- **Surface Enclosures (Cards, Modals, Panels):** `rounded-lg` (1rem / 16px) or `rounded-xl` (1.5rem / 24px) for prominent featured showcases.
- **Pill Elements:** Dynamic tags, active status pills, and communication CTAs use fully rounded pill radii (`9999px`).

## Components

- **Buttons:**
  - *Primary:* Background `#2563EB`, text `#FFFFFF`, with `inset 0 1px 1px rgba(255, 255, 255, 0.35)` top highlight and `0 8px 16px -2px rgba(37, 99, 235, 0.3)` colored drop glow. Hover scales subtly (`scale(1.015)`) with deepened shadow.
  - *WhatsApp CTA:* Background `#22C55E`, text `#FFFFFF`, soft green ambient glow `0 8px 20px -2px rgba(34, 197, 94, 0.35)`.
  - *Glass Secondary:* Background `rgba(255, 255, 255, 0.65)`, backdrop-blur `12px`, text `#0F172A`, border `1px solid rgba(15, 23, 42, 0.08)`.
- **Cards:**
  - Standard agency service and project cards use Level 2 Clay specifications. On hover, transform `translateY(-4px)` with an amplified outer shadow and border transition to `rgba(37, 99, 235, 0.2)`.
- **Input Fields:**
  - Background `#FFFFFF`, border `1px solid rgba(15, 23, 42, 0.1)`, inner depth shadow `inset 0 1px 3px rgba(15, 23, 42, 0.04)`. Active focus transitions to border `#2563EB` with an external glow ring `0 0 0 3px rgba(37, 99, 235, 0.15)`.
- **Chips & Badges:**
  - Clay-style pills with faint backgrounds: Teal tint (`rgba(13, 148, 136, 0.08)` with `#0D9488` text) or Cobalt tint (`rgba(37, 99, 235, 0.08)` with `#2563EB` text). Border `1px solid rgba(0, 0, 0, 0.03)`.
- **Selection Controls (Checkboxes & Radios):**
  - Crisp 20px boxes/circles with a smooth clay indent. Checked state fills `#2563EB` with an inset highlight and pure white SVG glyph.
- **Agency Navigation Bar:**
  - Sticky frosted header: `rgba(255, 255, 255, 0.8)`, `backdrop-blur(16px)`, border-bottom `1px solid rgba(15, 23, 42, 0.06)`, and floating container styling.