## Brand & Style

The design system is engineered to evoke the precision, speed, and premium feel of the modern automotive industry. It targets a discerning audience that values efficiency and high-quality care for their vehicles. The brand personality is aggressive yet polished, utilizing high-contrast visuals to guide the user's eye toward critical actions.

The aesthetic follows a **High-Contrast / Modern** direction with subtle **Glassmorphic** influences. It utilizes a deep, nocturnal foundation to make the vibrant brand colors feel like glowing neon or high-performance headlights. The emotional response should be one of confidence, technological sophistication, and clinical cleanliness.

## Layout & Spacing

This design system employs a **Fluid Grid** model with high-density spacing. The rhythm is based on an 8px square grid, ensuring alignment across all components.

- **Mobile:** 4-column grid with 16px margins. Content is mostly stacked to allow for large, tappable touch targets.
- **Tablet:** 8-column grid with 24px margins. Cards begin to form rows to utilize horizontal space.
- **Desktop:** 12-column grid with a max-width of 1440px. Gutters are kept tight (20px) to maintain a compact, "instrument panel" feel.

Spacing should be generous between sections (80px+) to allow the dark background to provide breathing room, while internal component spacing remains tight (12-24px) for a focused, mechanical appearance.

## Elevation & Depth

Depth is achieved through **Tonal Layers** rather than traditional soft shadows. Since the background is nearly black, elevation is communicated by lightening the surface color of the container (e.g., a "Surface" level at #1A1D23).

- **Level 0 (Background):** #0F1115.
- **Level 1 (Cards/Sections):** #1A1D23 with a 1px subtle border (#2D3139).
- **Level 2 (Modals/Popovers):** #262A31 with a thin gradient border (Pink/Orange) at 30% opacity.
- **Interactive States:** Use a glow effect (outer shadow) matching the primary yellow or blue color when an element is active or focused, simulating illuminated controls.

## Components

### Buttons
- **Primary:** Solid Vibrant Yellow background, Black Montserrat Bold text. No shadow, but a subtle inner-glow on hover.
- **Secondary:** Transparent background with a 2px Citrus Green or Bright Blue border.
- **Tertiary:** Ghost style with the Pink/Orange gradient applied only to the text.

### Inputs
Fields should feature a dark background (#090A0C) with a bottom-only border that transitions to the Primary Yellow when focused. Labels should be small, uppercase, and placed above the field.

### Cards
Cards utilize the Level 1 surface. For "Premium" service tiers, apply a 1px border using the Pink/Orange gradient. Use high-quality vehicle photography with a subtle desaturation to make the Yellow CTAs "pop" against the image.

### Chips & Tags
Used for car types (SUV, Sedan, EV) or service status. These should be small, with semi-transparent backgrounds of the accent colors (Blue/Green) and 12px Inter Bold text.

### Progress Indicators
Service status (e.g., "Drying", "Waxing") should use the gradient ring element to indicate completion, providing a visual link to the brand logo.
