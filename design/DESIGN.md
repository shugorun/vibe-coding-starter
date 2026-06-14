---
name: Tomoshibi
description: >
  Tomoshibi (灯) is a utility-density design language for focused productivity apps.
  Built on a neutral off-white ground (--bg). Teal (--primary) is the ONLY affordance
  colour — buttons, controls, links, nav, focus, hover. Gold is the flame: identity and
  status only (wordmark, gold badge, action-required, glow on dark surfaces) — it never
  signals interactivity. Headings default to sans (Inter + Noto Sans JP); editorial serif
  (Cormorant Garamond + Shippori Mincho) is an explicit opt-in for brand/reading surfaces
  only. Shadows are soft and ink-tinted; the header merges with the page (no border, no chrome).

# Read first. These 11 rules override anything below. Token definitions follow in `colors`/`typography`/etc.
absolute_rules:
  - "1. Ground is --bg #F9F8F5; card/input faces are --surface #FFFEFB. NEVER use pure #FFFFFF (on-teal text is --on-primary #FAF6EC)."
  - "2. Teal --primary is the ONLY affordance colour: buttons, controls, links, nav, focus, hover."
  - "3. Gold is identity/status ONLY — wordmark, gold badge, action-required, glow on dark. Never on buttons, links, focus, or hover."
  - "4. Headings default to SANS. Serif (--font-serif) is an explicit opt-in for brand/reading surfaces only — never below 18px, never on UI labels."
  - "5. Hover LIFTS, never recolours: --shadow-hover + translateY(-1px). Exceptions: icon-btn uses a grounded shadow (no lift); btn-on-dark brightens its teal; nav has no hover."
  - "6. Sunken surfaces (search, code chips, --surface-sunken) carry NO box-shadow. They recede by colour."
  - "7. Header merges with the ground: no border-bottom, no shadow."
  - "8. Dark surfaces are rare and intentional — toast, .card.ink, feature-night, full dark mode only. Never add a dark header/nav/footer to an otherwise-light page."
  - "9. Outline interactive controls with --border-control; keep --border for structural hairlines. Derived status accents are exactly two: terracotta and indigo."
  - "10. Reference tokens for all values (--content-max, --sidebar-width, etc.). No hardcoded pixel widths or hex."
  - "11. Apps with >=2 persistent panels use the app shell (h-svh) — never a centred max-width column. max-w-content / .wrap is for reading & marketing only."

colors:
  # Light ground
  --bg: "#F9F8F5"                       # page background
  --surface: "#FFFEFB"                  # card / input faces (never #FFFFFF)
  --surface-sunken: "#F2EBD9"           # thumbnail + light code-chip background
  --surface-control-sunken: "#F6FAF8"   # search well (cooled, teal-leaning)
  # Text
  --text: "#1B2A2B"                     # primary, near-black with teal cast
  --text-strong: "#234E4D"             # bold body/caption ink
  --text-secondary: "#4A6968"          # supporting copy, nav links
  --text-muted: "#5A7D7B"              # placeholders + icons ONLY (4.40:1 — never text <18px)
  # Interactive (teal) — sole affordance colour
  --primary: "#2F6E70"
  --on-primary: "#FAF6EC"              # text on teal (never #FFFFFF)
  --ink-teal: "#183330"               # utility-button fill (darker than --dark-bg)
  # Borders
  --border: "#D8CFB6"                  # structural hairline (cards, dividers)
  --border-strong: "#5A7D7B"          # emphatic divider
  --border-control: "#9DB7B5"         # interactive-control outline (input/search/icon-btn)
  # Gold — identity/status only, never affordance
  --gold-text: "#8A5E12"              # wordmark + action-required text on light
  --gold-text-strong: "#6B470C"       # logo hover + gold-badge text (AA)
  --gold-fill: "#E8C56A"              # glow/fill on dark only (alias: --gold-on-dark)
  --gold-deco: "#B8862F"              # decorative strokes only — never text
  --gold-badge-fill: "#F1D89B"        # gold-badge background
  --gold-border-muted: "#AC9159"      # .card.ink emphasis border (status, not affordance)
  --gold-moon: "#F3E6BD"              # feature-night moon orb
  --gold-on-dark: "#E8C56A"           # = --gold-fill
  # Derived status accents — these two only
  --terracotta: "#A8472B"
  --terracotta-fill: "#F6E2DA"
  --indigo: "#34466E"
  --indigo-fill: "#E2E6F2"
  # Dark surfaces
  --dark-bg: "#142322"                # deepest — feature-night, dark-mode body
  --dark-surface: "#20302E"           # elevated dark surface
  --dark-raised: "#2A3A35"            # toast surface (lightest of the dark trio)
  --dark-border: "#0C1817"            # hairline on dark panels
  --dark-text: "#ECE6D2"
  --dark-text-secondary: "#9FBDB8"
  --dark-text-muted: "#7E9F99"
  --dark-primary: "#6BB5B0"           # teal links/buttons on dark
  --dark-primary-hover: "#8ECBC5"     # btn-on-dark hover

typography:
  # Families. Heading default is --font-sans; --font-serif is an explicit opt-in (rule 4).
  --font-sans: '"Inter","Noto Sans JP",system-ui,-apple-system,"Segoe UI",sans-serif'
  --font-serif: '"Cormorant Garamond","Shippori Mincho",Georgia,"Times New Roman",serif'
  --font-mono: '"JetBrains Mono",ui-monospace,"SFMono-Regular",Menlo,monospace'
  # Roles (class = .t-<name>). Colour, when listed, is part of the token — do not override without cause.
  hero:           { class: t-hero,           fontFamily: "{typography.--font-sans}", fontSize: 28px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.3px }
  display:        { class: t-display,        fontFamily: "{typography.--font-sans}", fontSize: 22px, fontWeight: 600, lineHeight: 1.30, letterSpacing: -0.2px }
  display-md:     { class: t-display-md,     fontFamily: "{typography.--font-sans}", fontSize: 18px, fontWeight: 600, lineHeight: 1.40, letterSpacing: -0.1px }
  lead:           { class: t-lead,           fontFamily: "{typography.--font-sans}", fontSize: 16px, fontWeight: 400, lineHeight: 1.55, color: "{colors.--text-secondary}" }
  tagline:        { class: t-tagline,        fontFamily: "{typography.--font-sans}", fontSize: 15px, fontWeight: 500, lineHeight: 1.40 }
  body-strong:    { class: t-body-strong,    fontFamily: "{typography.--font-sans}", fontSize: 14px, fontWeight: 600, lineHeight: 1.50, letterSpacing: 0.02em, color: "{colors.--text-strong}" }
  body:           { class: t-body,           fontFamily: "{typography.--font-sans}", fontSize: 14px, fontWeight: 400, lineHeight: 1.75 }
  caption:        { class: t-caption,        fontFamily: "{typography.--font-sans}", fontSize: 13px, fontWeight: 400, lineHeight: 1.65, color: "{colors.--text-secondary}" }
  caption-strong: { class: t-caption-strong, fontFamily: "{typography.--font-sans}", fontSize: 13px, fontWeight: 600, lineHeight: 1.40, letterSpacing: 0.02em, color: "{colors.--text-strong}" }
  fine:           { class: t-fine,           fontFamily: "{typography.--font-sans}", fontSize: 12px, fontWeight: 400, lineHeight: 1.50, color: "{colors.--text-secondary}" }  # NOT --text-muted (fails AA <18px)
  code:           { element: code,           fontFamily: "{typography.--font-mono}", fontSize: 0.92em, background: "{colors.--surface-sunken}", border: "1px solid {colors.--border}", borderRadius: "{rounded.xs}", padding: "1px 5px" }
  # Serif opt-in: reuse hero/display/display-md sizes with fontFamily {typography.--font-serif} on brand/reading surfaces only (>=18px, never UI labels).

rounded:
  xs: 5px      # code chips, inline labels
  sm: 8px      # thumbnail crops; btn-utility (lower hierarchy)
  md: 11px     # text inputs, toast
  lg: 18px     # cards, dark-zone, feature-night
  pill: 9999px # all action buttons, search bar, icon-btn, badges, header CTA

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 72px

shadows:
  --shadow-sm: "0 1px 2px rgba(27,42,43,.06)"
  --shadow: "0 1px 2px rgba(27,42,43,.05), 0 10px 24px -14px rgba(27,42,43,.22)"
  --shadow-lg: "0 2px 6px rgba(27,42,43,.06), 0 20px 48px -22px rgba(27,42,43,.30)"
  --shadow-hover: "0 1px 2px rgba(27,42,43,.08), 0 4px 12px -3px rgba(27,42,43,.18)"
  # Shadow base rgba(27,42,43) = --text. Every dark-surface glow = --gold-fill at reduced alpha.

components:
  header:
    note: "Merges with --bg — no border, no shadow. Structure: logo -> nav -> spacer -> meta -> cta. Only logo + cta are affordances."
    height: 56px
    background: "{colors.--bg}"
    padding: "0 {spacing.xl}"
    logo:   { fontFamily: "{typography.--font-serif}", fontWeight: 700, fontSize: 21px, letterSpacing: 0.2px, color: "{colors.--gold-text}", hover: "color {colors.--gold-text-strong}" }
    nav:    { color: "{colors.--text-secondary}", fontSize: 14px, fontWeight: 500, hover: "none — no colour change, no underline, no animation" }
    cta:    { extends: button-primary, padding: "8px 18px" }

  button-primary:
    note: "Main action. Teal pill. Hover lifts; colour unchanged."
    background: "{colors.--primary}"
    color: "{colors.--on-primary}"
    border: none
    borderRadius: "{rounded.pill}"
    fontSize: 14px
    fontWeight: 500
    padding: "9px 22px"
    shadow: "{shadows.--shadow-sm}"
    hover: "{shadows.--shadow-hover} + translateY(-1px)"
    active: "scale(0.97)"
    transition: "transform .18s ease, background .32s ease, color .32s ease, box-shadow .32s ease"

  button-ghost:
    note: "Secondary action. Teal outline, no fill. Same lift as primary; neither fill nor border recolours."
    background: transparent
    color: "{colors.--primary}"
    border: "1px solid {colors.--primary}"
    borderRadius: "{rounded.pill}"
    fontSize: 14px
    fontWeight: 500
    padding: "8px 21px"
    hover: "{shadows.--shadow-hover} + translateY(-1px)"
    active: "scale(0.97)"

  button-utility:
    note: "Compact, lower-hierarchy action — rounded.sm (not pill) signals the reduced rank."
    background: "{colors.--ink-teal}"
    color: "{colors.--on-primary}"
    border: none
    borderRadius: "{rounded.sm}"
    fontSize: 13px
    fontWeight: 500
    padding: "8px 16px"
    hover: "{shadows.--shadow-hover} + translateY(-1px)"
    active: "scale(0.97)"

  button-on-dark:
    note: "Primary action on a dark surface. Brightens instead of lifting."
    background: "{colors.--dark-primary}"
    color: "{colors.--dark-bg}"
    border: none
    borderRadius: "{rounded.pill}"
    fontSize: 14px
    fontWeight: 500
    padding: "9px 22px"
    hover: "background {colors.--dark-primary-hover}"

  icon-btn:
    note: "Circular. Grounded ink-tinted shadow on hover — NO translateY."
    width: 38px
    height: 38px
    borderRadius: "{rounded.pill}"
    background: "{colors.--surface}"
    color: "{colors.--text}"
    border: "1px solid {colors.--border-control}"
    fontSize: 18px
    shadow: "{shadows.--shadow-sm}"
    hover: "box-shadow 0 1px 6px rgba(27,42,43,.18)"

  link:
    note: "Inline teal link. Wrap the arrow in <span class='arw'> so only the glyph slides."
    color: "{colors.--primary}"
    fontWeight: 500
    textDecoration: none
    arrow-hover: "translateX(4px); transition transform .3s cubic-bezier(.4,0,.2,1)"
    on-dark: "color {colors.--dark-primary}"

  card:
    note: "Standard content card. Lifts on hover."
    background: "{colors.--surface}"
    border: "1px solid {colors.--border}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.lg}"
    shadow: "{shadows.--shadow}"
    hover: "{shadows.--shadow-lg} + translateY(-2px); transition .35s ease"
    thumb: { aspectRatio: "4/3", borderRadius: "{rounded.sm}", background: "{colors.--surface-sunken}", border: "1px solid {colors.--border}", fontFamily: "{typography.--font-mono}", fontSize: 12px, color: "{colors.--text-secondary}" }

  card-ink:
    note: "Emphasis card — muted-gold border (status emphasis, NOT affordance), pre-deepened shadow. One per group."
    extends: card
    border: "1px solid {colors.--gold-border-muted}"
    shadow: "{shadows.--shadow-lg}"

  input:
    note: "Standard text input. Lifted --surface face. The ONLY filled input; this is what most forms use."
    width: 100%
    background: "{colors.--surface}"
    color: "{colors.--text}"
    border: "1px solid {colors.--border-control}"
    borderRadius: "{rounded.md}"
    fontSize: 14px
    padding: "9px 14px"
    shadow: "{shadows.--shadow-sm}"
    placeholder: "color {colors.--text-muted}"
    focus: "border-color {colors.--primary}; box-shadow 0 2px 12px -5px rgba(47,110,112,.28); no outline"

  search:
    note: "Search bar only — cooled sunken well. NO shadow ever (wells don't lift). Inner <input> is background:transparent to avoid a double fill — it is an implementation detail of .search, NOT a standalone borderless input."
    display: flex
    background: "{colors.--surface-control-sunken}"
    border: "1px solid {colors.--border-control}"
    borderRadius: "{rounded.pill}"
    padding: "9px 14px"
    icon: "color {colors.--text-muted}"
    focusWithin: "border-color {colors.--primary}; no box-shadow"

  textarea:
    note: "Multi-line input that grows with content (never shows a scrollbar during normal typing). Visually identical to input."
    extends: input
    borderRadius: "{rounded.md}"
    minHeight: "4.5rem"
    resize: none
    autogrow: "Prefer field-sizing:content (Chrome 123+/Safari 17.4+); fallback = reset height to auto then set to scrollHeight on input. Never set a fixed height."

  badge:
    borderRadius: "{rounded.pill}"
    padding: "5px 11px"
    fontSize: 12px
    fontWeight: 600
    letterSpacing: 0.02em
    display: inline-flex

  gold-badge:
    note: "The primary 'point' use of gold on light. Used sparingly."
    extends: badge
    background: "{colors.--gold-badge-fill}"
    color: "{colors.--gold-text-strong}"

  status-badge:
    note: "Six work-states by hue (fill + matching dark text). Always pair with the icon for colour-blind users."
    states:
      not-started:     { icon: "○", label: "未着手",   background: "#E5E7E1", color: "#445250" }
      in-progress:     { icon: "◐", label: "進行中",   background: "#DCEAE9", color: "{colors.--primary}" }
      on-hold:         { icon: "⏸", label: "保留",     background: "{colors.--indigo-fill}", color: "{colors.--indigo}" }
      action-required: { icon: "!", label: "要対応",   background: "#FAEED9", color: "{colors.--gold-text}" }
      overdue:         { icon: "⚠", label: "期限超過", background: "{colors.--terracotta-fill}", color: "{colors.--terracotta}" }
      done:            { icon: "✓", label: "完了",     background: "#E8EDE9", color: "{colors.--text-secondary}" }

  feature-night:
    note: "Dark editorial hero. Gold reads as moonlight. Never for utility navigation."
    background: "{colors.--dark-bg}"
    color: "{colors.--dark-text}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.--dark-border}"
    shadow: "{shadows.--shadow-lg}, 0 0 70px -18px rgba(232,197,106,.30)"
    corona: "::before radial-gradient(120% 80% at 78% -10%, rgba(232,197,106,.18), rgba(232,197,106,0) 55%)"
    moon: { width: 42px, height: 42px, borderRadius: "{rounded.pill}", background: "{colors.--gold-moon}", shadow: "0 0 38px 6px rgba(232,197,106,.55)", position: "absolute; top 24px; right 34px" }
    kicker: { color: "{colors.--gold-on-dark}", textShadow: "0 0 14px rgba(232,197,106,.4)", fontWeight: 600, letterSpacing: 1.5px, textTransform: uppercase, fontSize: 12px }

  dark-zone:
    note: "Neutral dark container (toast host, dark preview). Same as feature-night but no glow."
    background: "{colors.--dark-bg}"
    color: "{colors.--dark-text}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.--dark-border}"
    shadow: "{shadows.--shadow-lg}"
    link: "color {colors.--dark-primary}"

  toast:
    note: "Notification on a dark surface; gold icon glows."
    display: inline-flex
    background: "{colors.--dark-raised}"
    color: "{colors.--dark-text}"
    borderRadius: "{rounded.md}"
    padding: "11px 16px"
    gap: "{spacing.sm}"
    border: "1px solid rgba(236,230,210,.1)"
    shadow: "{shadows.--shadow-lg}, 0 0 40px -16px rgba(232,197,106,.4)"
    icon: { color: "{colors.--gold-on-dark}", textShadow: "0 0 12px rgba(232,197,106,.5)", fontSize: 16px }
---

# Tomoshibi

The `absolute_rules` and token blocks above are the source of truth. Reference tokens by
name; never inline a hex or pixel value that a token already defines. The prose below only
covers what the YAML cannot express.

## Depth model

Two modes, and they never cross: **lifted** surfaces rise with an ink-tinted shadow (cards,
buttons on hover); **sunken** surfaces recede by colour and carry no shadow (search well,
code chips, `--surface-sunken`). Glow is a third, dark-only register: on dark surfaces gold
stops being a pigment and becomes a light source (see `feature-night`, `toast`). The light
face stays gradient-free.

## Layout

Two first-class patterns:

| Pattern | When |
|---|---|
| Container (`.wrap`, `max-w-content` = 1080px) | Marketing, docs, single-entity reading views |
| App shell (`h-svh`, panels) | Productivity apps, dashboards, any UI with >=2 persistent panels |

App shell: root is `h-svh` and never scrolls itself; each panel sets `overflow-y-auto` and
scrolls independently. Panel dividers use structural `--border`. Sidebar width is the
`--sidebar-width` token (18rem) — never hardcode `w-72`. Adding a panel inserts a new
`flex-1`/fixed column; existing panels reflow with no media query.

Section rhythm: each `<section class="block">` is `padding: 72px 0 32px` with a
`border-top: 1px solid --border` (first block omits it). The stack repeats:
eyebrow → heading → sub-copy → content.

## Patterns not in tokens

- **Eyebrow:** `12px / 600 / letter-spacing 1.5px / uppercase / color --primary`. Compositional, not a named role.
- **Focus ring:** `2px` ring at `--primary` / 30% opacity on both `button` and `input` (softer than shadcn default).
- **Code chip on dark:** switch to `background rgba(236,230,210,.10); border rgba(236,230,210,.20); color --dark-text` — never a bright box on dark.
- **Negative tracking** belongs to heading sizes only; never apply it to body or caption.

## Responsive

| Breakpoint | Width | Changes |
|---|---|---|
| Mobile | <= 680px | Header nav + meta label hidden |
| Tablet | <= 820px | `.cols-2` / `.cols-3` collapse to one column; wrap padding 32px -> 24px |
| Desktop | > 820px | Full multi-column; 1080px max-width container |

Cards go full-width on mobile (thumb aspect-ratio preserved); the input row stacks. Touch:
buttons measure ~35px tall at `9px 22px` — bump vertical padding (e.g. `13px 22px`) for
touch-primary contexts; icon buttons should be >=40x40.

## Undefined — do not improvise

Out of scope; do not invent these without an explicit spec:

- Input components are exactly `input`, `search`, `textarea`. No transparent/borderless input exists.
- Form validation states (error border, message style, required marker).
- Full dark mode as a system (only the component-level dark surfaces above are defined).
- Focus-ring colour on dark surfaces (default teal ring is invisible there).
- Animation tokens — durations/easings live per-component, not as `:root` variables.
- `--text-muted` is for placeholders/icons only; it fails AA for text below 18px.
