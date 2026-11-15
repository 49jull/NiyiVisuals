# Aponic typography reference — 15 November 2026

Source: https://docs.aponic.org, inspected in the rendered browser. The computed family for H1, H2, body and navigation was "Plus Jakarta Sans Variable" with system sans-serif fallbacks. H1: 48px / 57.6px, weight 700, -0.96px tracking. H2: 24px / 28.8px, weight 600, -0.48px tracking. Body: 16px / 26.4px, weight 400. Navigation: 16px, weight 400.

The portfolio adopts the same variable font family, self-hosted from the official Fontsource package @fontsource-variable/plus-jakarta-sans 5.3.0, licensed under OFL. Its local CSS family alias is Plus Jakarta Sans. It uses 600 headings, 400 body and 500 actions at the portfolio’s existing editorial scale. Sparse Roboto Mono metadata remains a separate role. No layout, business copy or branding was copied from the reference.

Coral #DFA080 is the primary action fill and small arrow accent; #EFB99A is its hover fill; #984B30 is the dark arrow variant on paper #F3EFE9. Ink remains #0C0C0C. Color is paired with action text and arrow shape, never the sole navigation cue.

Contrast calculation (sRGB relative luminance):

- #0c0c0c / #dfa080: 8.83:1
- #0c0c0c / #efb99a: 11.25:1
- #984b30 / #f3efe9: 5.42:1
- #dfa080 / #0c0c0c: 8.83:1

Focus rings remain offset onto the surrounding ink/paper ground, rather than relying on contrast against the filled button.
