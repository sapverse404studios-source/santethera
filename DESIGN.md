# SanteThera Design System

## Purpose
Premium door-to-door massage therapy wellness brand. Calm, healing, luxurious digital presence that converts visitors to bookings.

## Tone & Differentiation
Soft, elegant, feminine wellness aesthetic. Minimal yet visually rich with organic curves, wave shapes, and floating decorative elements. Every interaction whispers—smooth fade-ins, gentle parallax, hover glow. Anti-corporate; no hard edges or aggressive CTAs.

## Palette (Light Mode)
| Token | L | C | H | Usage |
|-------|---|---|---|-------|
| Primary (Magenta) | 0.60 | 0.22 | 330 | Brand focal point, headings, CTAs |
| Secondary (Lavender) | 0.70 | 0.18 | 280 | Supporting content, accents |
| Accent (Gold) | 0.72 | 0.19 | 60 | Sparingly: highlights, badges, premium markers |
| Background | 0.98 | 0.01 | 320 | Off-white warmth |
| Foreground | 0.25 | 0.02 | 330 | Text, soft charcoal |
| Card | 0.99 | 0.01 | 320 | Elevation via shadow, not color |
| Muted | 0.92 | 0.01 | 320 | Soft surfaces, secondary UI |
| Border | 0.88 | 0.02 | 320 | Subtle division |

## Palette (Dark Mode)
| Token | L | C | H | Usage |
|-------|---|---|---|-------|
| Primary | 0.72 | 0.19 | 330 | Lifted magenta for dark backgrounds |
| Secondary | 0.65 | 0.16 | 280 | Softer lavender |
| Accent | 0.78 | 0.17 | 60 | Lifted gold for visibility |
| Background | 0.12 | 0.01 | 320 | Deep charcoal warmth |
| Foreground | 0.94 | 0.02 | 320 | Off-white text |

## Typography
| Role | Font | Weight | Scale |
|------|------|--------|-------|
| Display (H1–H3) | Fraunces (serif) | 400–700 | 2.5rem, 2rem, 1.5rem |
| Body | Figtree (sans-serif) | 400–600 | 1rem base, 0.875rem small |
| Mono | System monospace | 400 | Labels, code |

Hierarchy via scale + weight. Serif brings elegance; sans-serif ensures warmth and readability on screen.

## Structural Zones
| Zone | Treatment | Notes |
|------|-----------|-------|
| Header/Nav | `bg-background` with subtle `border-b border-border/30` | Sticky, minimal. Logo + nav links only. |
| Hero | Gradient overlay on image: `from-primary/25 via-secondary/15 to-accent/5` | Large serif heading, subheading, CTA. Parallax scroll trigger. |
| Content Sections | Alternate `bg-background` and `bg-muted/40` for rhythm | Cards on muted sections use `glass-soft` + `shadow-wellness`. |
| Cards | `glass-soft` utility: `backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl` | Glassmorphism. Hover lifts via `shadow-elevated`. |
| CTA Buttons | `bg-gradient-to-r from-primary via-secondary to-accent` with `hover:shadow-elevated` | Glow effect on hover. Transitions via `transition-smooth`. |
| Footer | `bg-muted/50` with `border-t border-border/30` | Breathing room. Contact info + links. |

## Spacing & Rhythm
- **Gap base:** 1rem, 1.5rem, 2rem, 3rem (4-step scale)
- **Padding:** Cards 1.5rem–2rem. Sections 3rem–4rem vertical (mobile 2rem–2.5rem)
- **Grid:** Mobile-first: 1 col → sm:2 col → md:3 col → lg:4 col services. Breathing room over density.

## Component Patterns
- **Buttons:** Gradient fill, soft shadow, hover scale (1.02x), glow on focus. No borders unless secondary.
- **Cards:** Always use `glass-soft`. Image + gradient overlay. Hover: lift shadow, slight scale.
- **Forms:** Input `bg-white/50` border-b only (no rounded). Label serif, small. Error state red. Success state green (chart-1).
- **Testimonials:** Avatar + serif quote + name. Carousel with fade transitions between slides.
- **Service Items:** Large image, title serif, price accent-gold, description body. Hover glow on border.

## Motion & Animations
- **Entrance:** Fade-in (0.6s), fade-in-up (0.7s) on scroll trigger via Framer Motion.
- **Micro:** Button hover scale, card lift, text glow. All 0.3s ease-out.
- **Ambient:** Floating leaves/curves via `animate-float` (6s loop). Pulsing badge via `animate-pulse-soft`.
- **Scroll:** Parallax hero image (50% speed). Section reveals on intersection.
- **No bouncy animations.** All easing: `cubic-bezier(0.4, 0, 0.2, 1)` (Material Design standard).

## Constraints
- Glassmorphism only on cards/overlays; no full-page blur.
- Max 3 font weights per font (400, 600, 700).
- Accent gold used sparingly: pricing, badges, premium highlights only.
- Shadows: only `shadow-wellness` (subtle) and `shadow-elevated` (on hover). No glow or neon.
- No black text on magenta; always check WCAG AA+ contrast before shipping.

## Signature Detail
**Organic wave dividers between sections.** SVG curves (not straight lines) flowing from magenta → lavender → accent. Subtle parallax on scroll. Floating leaf shapes in footer using `animate-float`. These elements reinforce the "healing energy" brand story without screaming.
