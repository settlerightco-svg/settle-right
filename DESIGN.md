---
name: SettleRight Aesthetic
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#44474d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f5f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#091c31'
  on-primary-container: '#74859f'
  inverse-primary: '#b6c8e4'
  secondary: '#785a00'
  on-secondary: '#ffffff'
  secondary-container: '#ffd577'
  on-secondary-container: '#795a01'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#b6c8e4'
  on-primary-fixed: '#091c31'
  on-primary-fixed-variant: '#37485f'
  secondary-fixed: '#ffdf9c'
  secondary-fixed-dim: '#eac166'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
typography:
  h1:
    fontFamily: manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 80px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
  section-padding: 120px
---

## Brand & Style

The design system is anchored in the concept of "Guided Luxury." It balances the high-stakes nature of international relocation with the effortless hospitality associated with the UAE. The visual style is a blend of **Minimalism** and subtle **Glassmorphism**, moving away from rigid corporate structures toward a fluid, concierge-like experience. 

The aesthetic is designed to evoke peace of mind. By using expansive whitespace and a restrained color palette, the interface feels less like a logistical tool and more like a premium lifestyle assistant. Interactions should feel deliberate and smooth, mirroring the seamless transition the service provides.

## Colors

The palette uses **Deep Navy** as its foundational anchor to establish trust and authority. **UAE Gold** is used sparingly as a high-end accent for call-to-actions and key milestones, ensuring it feels like a "premium reward" rather than a primary branding element. 

The background hierarchy uses **Soft Off-white** for the page canvas and **Pure White** for content cards. This creates a subtle tonal contrast that defines structure without the need for heavy lines. Gradients should be extremely soft, transitioning from the Gold accent into a transparent wash or from Deep Navy into a slightly lighter midnight blue to add depth to hero sections.

## Typography

**Manrope** is selected for its refined, geometric balance that feels both technical and human. 

Headlines utilize tighter letter spacing and bold weights to command attention, while body text is given generous line heights (1.6) to ensure readability during complex information gathering. For secondary metadata and "step" indicators, use the **Label-caps** style to provide a sophisticated, editorial feel that distinguishes navigational elements from narrative content.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a premium, centered feel. A 12-column grid is used with wide 80px outer margins to create a "breathable" interface. 

Vertical rhythm is intentionally "loose." Sections are separated by large 120px gaps to prevent the user from feeling overwhelmed by the relocation process. Content within cards should use a 32px (stack-md) internal padding to maintain the high-end, spacious aesthetic.

## Elevation & Depth

This design system eschews harsh shadows in favor of **Ambient Shadows** and **Tonal Layers**. Depth is communicated through:

1.  **Level 0 (Canvas):** Soft off-white (#F7F8FA).
2.  **Level 1 (Cards):** Pure White surfaces with a very diffused, low-opacity Navy shadow (8% opacity, 20px blur, 4px Y-offset).
3.  **Level 2 (Overlays):** Modals and dropdowns use a slightly stronger shadow and a background blur (Backdrop Filter: 12px) to create a glassmorphic effect, suggesting they are floating above the main experience.

Avoid "lifting" elements too high; the goal is a soft, tactile feel rather than high-contrast layering.

## Shapes

The design system uses **Rounded** geometry to soften the tech-heavy aspect of the relocation assistant. 

Standard components like input fields and buttons use a 0.5rem (8px) radius. Larger containers, such as info cards and modal windows, utilize 1rem (16px) or 1.5rem (24px) for a more modern, friendly silhouette. Gold-accented icons or small badges may use "pill" shapes (full round) to stand out as distinct interactive chips.

## Components

### Buttons
Primary buttons are Deep Navy with White text, transitioning to a subtle Gold border on hover. Tertiary buttons use the Gold color for text with no background, emphasizing the premium accent.

### Cards
Cards are the primary container. They must have a Pure White background, a 1px border (Navy at 8% opacity), and the standard Level 1 ambient shadow. They should never be crowded; use internal margins of 32px.

### Inputs & Fields
Input fields use the Soft Off-white background to blend into the canvas when inactive, gaining a 1px Gold border and White background when focused. This "active light" effect guides the user's attention.

### Progress Indicators
Given the relocation context, progress steps are vital. Use thin Navy lines with Gold circular "completed" nodes. This creates a clear, high-contrast visual path for the user’s journey.

### Additional Components
- **Status Badges:** Soft-tinted pills (e.g., Gold at 10% opacity with Gold text) for "In Progress" or "Approved" statuses.
- **Concierge Floating Action Button:** A small, pill-shaped FAB in Deep Navy with a Gold icon to provide instant access to support.