---
name: Tomoshibi
description: >
  A utility-density interface built on a neutral off-white ground. Teal is the only
  affordance colour (buttons, controls, links, nav, focus). Gold is the flame —
  the wordmark, status highlights (gold badge and action-required), and glow on dark
  surfaces — and never signals interactivity. Headings default to sans (Inter + Noto
  Sans JP); editorial serif/mincho (Cormorant Garamond + Shippori Mincho) is available
  as an optional overlay for reading-mode and brand surfaces. Buttons, cards, links,
  and nav recolour or lift only within teal — nothing shifts to gold. Shadows are soft
  and ink-tinted. The header merges with the background — no border, no chrome.

colors:
  # Light surface
  --bg: "#F7F7F5"  # ws5: ニュートラル極薄グレー（旧 #FDFCF8 暖白）
  --surface: "#FFFFFC"
  --surface-sunken: "#F2EBD9"
  # Text
  --text: "#1B2A2B"
  --text-secondary: "#4A6968"
  --text-muted: "#5A7D7B"
  # Interactive (teal)
  --primary: "#2F6E70"
  --primary-hover: "#265A5C"
  --on-primary: "#FAF6EC"
  # Borders
  --border: "#D8CFB6"
  --border-strong: "#5A7D7B"
  # Interactive control outlines and surfaces — teal-leaning, distinct from structural --border
  --border-control: "#9DB7B5"       # input / search / icon-btn outline (rest state)
  --surface-control-sunken: "#F6FAF8" # cooled sunken surface for the search well
  # Gold — three-way split by placement luminance
  --gold-text: "#8A5E12"            # wordmark + action-required status text on light (NOT links)
  --gold-fill: "#E8C56A"            # fill and glow on dark surfaces; also named --gold-on-dark
  --gold-deco: "#B8862F"            # decorative strokes only
  # Derived accent pair (Ver.1 — hue-based status differentiation)
  --terracotta: "#A8472B"
  --terracotta-fill: "#F6E2DA"
  --indigo: "#34466E"
  --indigo-fill: "#E2E6F2"
  # Dark surface / dark mode
  --dark-bg: "#142322"
  --dark-surface: "#20302E"
  --dark-text: "#ECE6D2"
  --dark-text-secondary: "#9FBDB8"
  --dark-text-muted: "#7E9F99"
  --dark-primary: "#6BB5B0"
  --gold-on-dark: "#E8C56A"
  # Promoted tokens — palette is now closed
  --text-strong: "#234E4D"          # bold body/caption ink (t-body-strong, t-caption-strong)
  --gold-text-strong: "#6B470C"     # logo hover + gold-badge text (AA)
  --gold-badge-fill: "#F1D89B"      # gold-badge background
  --gold-border-muted: "#AC9159"    # emphasis-card border (status emphasis, not affordance)
  --ink-teal: "#183330"             # utility-button fill (darker than --dark-bg, teal-leaning)
  --dark-border: "#0c1817"          # hairline on dark panels
  --dark-raised: "#2A3A35"          # toast surface (lightest of the dark trio)
  --dark-primary-hover: "#8ECBC5"   # btn-on-dark hover (one step lighter teal)
  --gold-moon: "#F3E6BD"            # decorative moon orb on feature-night

typography:
  # Heading — editorial/display (optional serif/mincho: Cormorant Garamond + Shippori Mincho)
  # Default in UI contexts: sans (Inter + Noto Sans JP). Apply font-serif explicitly on brand/reading surfaces only.
  hero:
    fontFamily: '"Cormorant Garamond","Shippori Mincho",Georgia,"Times New Roman",serif'
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.3px
    class: t-hero
  display:
    fontFamily: '"Cormorant Garamond","Shippori Mincho",Georgia,"Times New Roman",serif'
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.2px
    class: t-display
  display-md:
    fontFamily: '"Cormorant Garamond","Shippori Mincho",Georgia,"Times New Roman",serif'
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.1px
    class: t-display-md
  # Body / UI — sans-serif (Inter + Noto Sans JP)
  lead:
    fontFamily: '"Inter","Noto Sans JP","system-ui","-apple-system","Segoe UI",sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    color: "{colors.--text-secondary}"
    class: t-lead
  tagline:
    fontFamily: '"Inter","Noto Sans JP","system-ui","-apple-system","Segoe UI",sans-serif'
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    class: t-tagline
  body-strong:
    fontFamily: '"Inter","Noto Sans JP","system-ui","-apple-system","Segoe UI",sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0.02em
    color: "{colors.--text-strong}"  # #234E4D — dark teal, harder than --text, softer than --dark-bg
    class: t-body-strong
  body:
    fontFamily: '"Inter","Noto Sans JP","system-ui","-apple-system","Segoe UI",sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.75
    class: t-body
  caption:
    fontFamily: '"Inter","Noto Sans JP","system-ui","-apple-system","Segoe UI",sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.65
    color: "{colors.--text-secondary}"
    class: t-caption
  caption-strong:
    fontFamily: '"Inter","Noto Sans JP","system-ui","-apple-system","Segoe UI",sans-serif'
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.02em
    color: "{colors.--text-strong}"  # #234E4D
    class: t-caption-strong
  fine:
    fontFamily: '"Inter","Noto Sans JP","system-ui","-apple-system","Segoe UI",sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    color: "{colors.--text-secondary}"  # AA at 12px; --text-muted (4.40:1) fails below 18px
    class: t-fine
  # Code — monospace
  code:
    fontFamily: '"JetBrains Mono",ui-monospace,"SFMono-Regular",Menlo,monospace'
    fontSize: 0.92em                 # relative to parent, ~12.9px at body scale
    element: code
    background: "{colors.--surface-sunken}"
    border: "1px solid {colors.--border}"
    borderRadius: "{rounded.xs}"
    padding: "1px 5px"

rounded:
  xs: 5px
  sm: 8px
  md: 11px
  lg: 18px
  pill: 9999px

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

components:
  header:
    description: >
      Sticky header merges with the page background — no divider, no shadow.
      Height 56px. Background {colors.--bg}. Padding 0 {spacing.xl}.
    logo:
      fontFamily: "{typography.hero.fontFamily}"
      fontWeight: 700
      fontSize: 21px
      letterSpacing: 0.2px
      color: "{colors.--gold-text}"
      hover: color {colors.--gold-text-strong}; transition color 0.25s ease, opacity 0.25s ease
    nav:
      link:
        color: "{colors.--text-secondary}"
        fontSize: 14px
        fontWeight: 500
        hover: no decoration — colour and underline are unchanged on hover
    cta:
      # Primary pill in the header — same hover rule as button-primary
      background: "{colors.--primary}"
      color: "{colors.--on-primary}"
      borderRadius: "{rounded.pill}"
      padding: "8px 18px"
      fontSize: 14px
      fontWeight: 500
      shadow: "{shadows.--shadow-sm}"
      hover: shadow {shadows.--shadow-hover} + translateY(-1px); no color change
      active: scale(0.97)
    responsive: nav and meta hidden below 680px

  button-primary:
    description: Main action. Teal pill on warm off-white.
    background: "{colors.--primary}"
    color: "{colors.--on-primary}"
    border: none
    borderRadius: "{rounded.pill}"
    fontSize: 14px
    fontWeight: 500
    padding: "9px 22px"
    shadow: "{shadows.--shadow-sm}"
    hover: shadow {shadows.--shadow-hover} + translateY(-1px); color unchanged
    active: scale(0.97)
    transition: "transform .18s ease, background .32s ease, color .32s ease, box-shadow .32s ease"

  button-ghost:
    description: Secondary action. Teal outline pill; no fill.
    background: transparent
    color: "{colors.--primary}"
    border: "1px solid {colors.--primary}"
    borderRadius: "{rounded.pill}"
    fontSize: 14px
    fontWeight: 500
    padding: "8px 21px"
    hover: shadow {shadows.--shadow-hover} + translateY(-1px); border and text color unchanged
    active: scale(0.97)

  button-utility:
    description: >
      Compact utility action. Ink-teal background (darker than --dark-bg, pulled toward teal).
    background: "{colors.--ink-teal}"
    color: "{colors.--on-primary}"
    border: none
    borderRadius: "{rounded.sm}"
    fontSize: 13px
    fontWeight: 500
    padding: "8px 16px"
    hover: shadow {shadows.--shadow-hover} + translateY(-1px)
    active: scale(0.97)

  button-on-dark:
    description: Primary action on a dark (feature-night) surface. Uses light teal.
    background: "{colors.--dark-primary}"
    color: "{colors.--dark-bg}"
    border: none
    borderRadius: "{rounded.pill}"
    fontSize: 14px
    fontWeight: 500
    padding: "9px 22px"
    hover: background {colors.--dark-primary-hover} (one step lighter teal)

  icon-btn:
    description: >
      Circular icon button. Hovers with a grounded ink-tinted shadow — not a lift.
      No translateY. The shadow is deliberately anchored ("grounded glow").
    width: 38px
    height: 38px
    borderRadius: "{rounded.pill}"
    border: "1px solid {colors.--border-control}"
    background: "{colors.--surface}"
    color: "{colors.--text}"
    fontSize: 18px
    shadow: "{shadows.--shadow-sm}"
    hover: box-shadow 0 1px 6px rgba(27,42,43,.18)  # ink-tinted, grounded (no translateY)

  link:
    description: Inline text link. Teal; arrow slides right on hover.
    color: "{colors.--primary}"
    fontWeight: 500
    textDecoration: none
    arrow: >
      Wrap arrow in <span class="arw">. On hover: translateX(4px);
      transition transform 0.3s cubic-bezier(.4,0,.2,1). No underline.
    on-dark: color {colors.--dark-primary} (light teal)

  card:
    description: Standard content card. Warm surface, ink hairline, soft shadow. Lifts on hover.
    background: "{colors.--surface}"
    border: "1px solid {colors.--border}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.lg}"
    shadow: "{shadows.--shadow}"
    hover: shadow {shadows.--shadow-lg} + translateY(-2px); transition 0.35s ease
    thumb:
      aspectRatio: "4/3"
      borderRadius: "{rounded.sm}"
      background: "{colors.--surface-sunken}"
      border: "1px solid {colors.--border}"
      fontFamily: "{typography.code.fontFamily}"
      fontSize: 12px
      color: "{colors.--text-muted}"

  card-ink:
    description: >
      Emphasis card variant. Muted-gold border replaces hairline; shadow pre-deepened.
      Use for exactly one card per group to pull it forward.
    extends: card
    border: "1px solid {colors.--gold-border-muted}"  # status emphasis (allowed gold), not affordance
    shadow: "{shadows.--shadow-lg}"

  input:
    description: >
      Standard text input. Lifted surface (--surface), control outline (--border-control).
      Focus: thin teal border + soft teal shadow.
    width: 100%
    background: "{colors.--surface}"
    color: "{colors.--text}"
    border: "1px solid {colors.--border-control}"
    borderRadius: "{rounded.md}"
    fontSize: 14px
    padding: "9px 14px"
    shadow: "{shadows.--shadow-sm}"
    placeholder: color {colors.--text-muted}
    focus: >
      border-color {colors.--primary}; box-shadow 0 2px 12px -5px rgba(47,110,112,.28);
      no outline
    transition: "border-color .3s ease, box-shadow .3s ease"

  search:
    description: >
      Search bar. Cooled sunken control surface (--surface-control-sunken, pill shape),
      control outline (--border-control). Focus: teal border only — no shadow.
      Shadows are not applied to sunken surfaces.
    display: flex
    background: "{colors.--surface-control-sunken}"
    border: "1px solid {colors.--border-control}"
    borderRadius: "{rounded.pill}"
    padding: "9px 14px"
    focusWithin: border-color {colors.--primary}; no box-shadow
    icon: color {colors.--text-muted}
    input:
      background: transparent
      border: none
      outline: none
      fontSize: 14px
      color: "{colors.--text}"

  badge:
    description: Generic badge. Pill, bold, upper-spaced.
    borderRadius: "{rounded.pill}"
    padding: "5px 11px"
    fontSize: 12px
    fontWeight: 600
    letterSpacing: 0.02em
    display: inline-flex

  gold-badge:
    description: Gold accent badge — the primary "point" use of gold on light surfaces.
    extends: badge
    background: "{colors.--gold-badge-fill}"
    color: "{colors.--gold-text-strong}"  # AA on the badge fill

  status-badge:
    description: >
      Six work-states encoded by hue (Ver.1). Each badge = fill + matching dark text.
      Icon accompaniment recommended for colour-blind users.
    states:
      not-started:
        icon: "○"
        label: 未着手
        background: "#E5E7E1"
        color: "#445250"
      in-progress:
        icon: "◐"
        label: 進行中
        background: "#DCEAE9"
        color: "#2F6E70"       # --primary
      on-hold:
        icon: "⏸"
        label: 保留
        background: "#E2E6F2"
        color: "#34466E"       # --indigo
      action-required:
        icon: "!"
        label: 要対応
        background: "#FAEED9"
        color: "#8A5E12"       # --gold-text
      overdue:
        icon: "⚠"
        label: 期限超過
        background: "#F6E2DA"
        color: "#A8472B"       # --terracotta
      done:
        icon: "✓"
        label: 完了
        background: "#E8EDE9"
        color: "#4A6968"       # --text-secondary

  feature-night:
    description: >
      Dark hero panel. Gold glows as moonlight — radial gradient corona + outer glow shadow.
      Use for editorial emphasis; never for utility navigation.
    background: "{colors.--dark-bg}"
    color: "{colors.--dark-text}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.--dark-border}"
    shadow: "{shadows.--shadow-lg}, 0 0 70px -18px rgba(232,197,106,.30)"
    pseudoBefore: >
      radial-gradient(120% 80% at 78% -10%, rgba(232,197,106,.18), rgba(232,197,106,0) 55%)
      — the corona that implies a moon off-canvas
    moon:
      width: 42px
      height: 42px
      borderRadius: "{rounded.pill}"
      background: "{colors.--gold-moon}"
      shadow: "0 0 38px 6px rgba(232,197,106,.55)"
      position: "absolute; top 24px right 34px"
    kicker:
      color: "{colors.--gold-on-dark}"
      textShadow: "0 0 14px rgba(232,197,106,.4)"
      fontWeight: 600
      letterSpacing: 1.5px
      textTransform: uppercase
      fontSize: 12px

  dark-zone:
    description: >
      General dark container (toast host, dark-mode preview). Slightly lighter than
      feature-night — background --dark-bg, no glow gradient.
    background: "{colors.--dark-bg}"
    color: "{colors.--dark-text}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.--dark-border}"
    shadow: "{shadows.--shadow-lg}"
    secondary: color {colors.--dark-text-secondary}
    link: color {colors.--dark-primary}

  toast:
    description: >
      Notification toast. Sits on a dark surface; gold icon glows.
      Background --dark-raised (#2A3A35) — lighter than both --dark-bg and --dark-surface
      (the lightest of the dark trio).
    display: inline-flex
    background: "{colors.--dark-raised}"
    color: "{colors.--dark-text}"
    borderRadius: "{rounded.md}"
    padding: "11px 16px"
    gap: "{spacing.sm}"
    border: "1px solid rgba(236,230,210,.1)"
    shadow: "{shadows.--shadow-lg}, 0 0 40px -16px rgba(232,197,106,.4)"
    icon:
      color: "{colors.--gold-on-dark}"
      textShadow: "0 0 12px rgba(232,197,106,.5)"
      fontSize: 16px
---


## Revision note — gold discipline (v2)

This revision narrows gold from five overlapping jobs to one coherent role. Previously
gold also marked **text links, nav-link hover, input-focus borders, and the icon-button
hover shadow** — i.e. it signalled _interactivity_, the job teal already owns. With one
accent meaning "brand", "hover", "link", and "focus" at once, gold stopped reading as an
accent.

Now: **teal is the only affordance colour** (buttons, controls, links, nav, focus,
hover), and **gold is reserved for the flame** — the wordmark (identity), status
highlights (gold badge, action-required), and glow on dark surfaces. Gold never signals
interactivity. Nine former one-off literals were promoted to tokens (see "Promoted
Tokens") so the palette is closed. Two control tokens — `--border-control` (#9DB7B5) and
`--surface-control-sunken` (#F6FAF8) — separate interactive outlines (teal-leaning) from
structural hairlines (parchment `--border`). No sizes, spacing, or component geometry
changed.


## Overview

Tomoshibi ("灯") is a utility-density design language for focused productivity apps.
The name describes its core visual metaphor: **a small flame lit in darkness** — warmth
against stillness, purpose amid quiet.

The daylight face is built on a neutral off-white grey (`--bg` #F7F7F5). Teal (`--primary`) is the
sole affordance colour — buttons, controls, links, nav, focus, eyebrow. Gold plays a
second, narrower role and never signals interactivity: as `--gold-text` (#8A5E12, AA on
`--bg`) it marks the wordmark and the "action-required" status, with `--gold-badge-fill`
behind the gold badge; as `--gold-fill` it becomes a _point of light_ — glowing only on
dark surfaces, the way a lamp or moon punctuates night. Buttons, cards, links, and nav
recolour or lift only within teal — nothing shifts to gold. Borders are ink hairlines,
shadows are soft and ink-tinted, and the header disappears into the page background.

**Heading typography defaults to sans** (Inter + Noto Sans JP) — concise, dense, and
screen-native. Cormorant Garamond / Shippori Mincho (serif/mincho) is available as an
optional editorial overlay via `font-serif`; apply it explicitly on brand surfaces, landing
pages, or reading-mode contexts. The body type stack is Inter + Noto Sans JP at 14px.

**Key principles:**

- **Teal is affordance; gold is the flame.** Everything a user can act on — buttons,
  controls, links, nav, focus rings, eyebrow — is teal (`--primary`). Gold appears only
  as the wordmark, status highlights (gold badge, action-required), and glow on dark
  surfaces. Gold never signals interactivity and is never a button _fill_.
- **Control outlines lean teal; structure stays parchment.** Interactive control borders
  (input, search, icon-btn) use `--border-control` (#9DB7B5, teal-leaning) so they read
  as touchable at rest; structural hairlines (cards, dividers) keep `--border` (#D8CFB6).
  The search well uses the cooled `--surface-control-sunken` (#F6FAF8).
- **Nav is static.** Nav links render in `--text-secondary` at rest and have no hover
  decoration — no colour change, no underline, no animation. Only the logo and CTA button
  in the header are interactive affordances.
- **Lift, don't recolour (buttons & cards).** Every button/card hover elevates with
  `--shadow-hover` + `translateY(-1px)`; the colour stays. (Exceptions: icon-btn uses a
  grounded ink-tinted shadow; btn-on-dark brightens its teal. Nothing recolours to gold.)
- **Header merges with ground.** No border, no shadow between header and page.
- **Shadows are ink-tinted.** The shadow base colour is `rgba(27,42,43,...)` — the same
  near-black as `--text`, keeping shadows warm rather than cold.
- **Sunken surfaces carry no shadow.** `--surface-sunken` and `--surface-control-sunken`
  are wells; giving them a shadow would contradict the depth model.
- **Pure white is banned.** The lightest surface is `#FFFFFC`. Background is `#F7F7F5`
  (neutral off-white grey). `#FFFFFF` is not a valid token.
- **Headings default to sans.** Inter + Noto Sans JP is the heading default in UI contexts.
  Serif/mincho is an optional editorial overlay — apply via `font-serif` explicitly only
  on landing pages, brand surfaces, and reading-mode layouts.
- **Dark surfaces are rare and intentional.** Toast, emphasis card, feature hero, dark
  mode — that is the complete list. The main header stays light.


## Colors

### Light Surface

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#F7F7F5` | Page background — neutral off-white grey (ws5: app-shell ground) |
| `--surface` | `#FFFFFC` | Card and input faces — near-white, floats subtly above the grey ground |
| `--surface-sunken` | `#F2EBD9` | Thumbnail placeholder, code chip bg on light |

### Text

| Token | Hex | Role |
|---|---|---|
| `--text` | `#1B2A2B` | Primary — near-black with a teal cast |
| `--text-secondary` | `#4A6968` | Supporting copy and nav links |
| `--text-muted` | `#5A7D7B` | Placeholders and icon colour (UI). 4.40:1 on `--bg` — do NOT use for text below 18px (use `--text-secondary` instead) |

### Interactive (Teal)

| Token | Hex | Role |
|---|---|---|
| `--primary` | `#2F6E70` | All interactive elements on light surfaces |
| `--primary-hover` | `#265A5C` | Reserved for future explicit hover colour use |
| `--on-primary` | `#FAF6EC` | Text on teal buttons — warm off-white |

### Borders

| Token | Hex | Role |
|---|---|---|
| `--border` | `#D8CFB6` | Default hairline — parchment tone |
| `--border-strong` | `#5A7D7B` | Emphatic dividers, ink-line feel |
| `--border-control` | `#9DB7B5` | Rest-state outline for interactive controls (input, search, icon-btn) — teal-leaning, distinct from structural `--border` |
| `--surface-control-sunken` | `#F6FAF8` | Cooled sunken surface for the search well (vs warm `--surface-sunken` used for thumbnails / code chips) |

### Gold — Three-Way Split

Gold is split by placement luminance. Never use the wrong register in the wrong context.

| Token | Hex | Placement |
|---|---|---|
| `--gold-text` | `#8A5E12` | Wordmark + action-required status text on light (NOT links) |
| `--gold-fill` | `#E8C56A` | Glow/fill on dark surfaces and gold-badge family; never on light affordances. Also named `--gold-on-dark` on dark |
| `--gold-deco` | `#B8862F` | Decorative strokes only (e.g. warning note border-left) |

Special cases:

- **Logo hover:** `--gold-text-strong` (#6B470C) — one step darker than `--gold-text`.
- **Gold badge text:** `--gold-text-strong` (#6B470C) — AA against `--gold-badge-fill` (#F1D89B).
- **Emphasis card border:** `--gold-border-muted` (#AC9159) — muted gold as _status emphasis_ (not affordance), only on `.card.ink`.

### Derived Accent Pair (Ver.1)

| Token | Hex | Role |
|---|---|---|
| `--terracotta` | `#A8472B` | Warning / overdue text |
| `--terracotta-fill` | `#F6E2DA` | Warning / overdue badge fill |
| `--indigo` | `#34466E` | On-hold / information text |
| `--indigo-fill` | `#E2E6F2` | On-hold badge fill |

Limit to these two derived hues. Adding a third breaks the chromatic harmony of the
palette when photographs appear alongside UI.

### Dark Surface / Dark Mode

| Token | Hex | Role |
|---|---|---|
| `--dark-bg` | `#142322` | Deepest dark — feature-night, dark-mode body |
| `--dark-surface` | `#20302E` | Elevated dark surface |
| `--dark-text` | `#ECE6D2` | Primary text on dark |
| `--dark-text-secondary` | `#9FBDB8` | Supporting text on dark |
| `--dark-text-muted` | `#7E9F99` | Muted/fine text on dark |
| `--dark-primary` | `#6BB5B0` | Light teal — links and buttons on dark surfaces |
| `--gold-on-dark` | `#E8C56A` | Same hex as `--gold-fill`; named separately for clarity |

`--dark-raised` (#2A3A35) is the toast surface — lighter than both `--dark-bg` and
`--dark-surface` (the lightest of the dark trio, by measured luminance). Formerly a
one-off component value; now a named token.

## Promoted Tokens (this revision)

Nine values that were formerly inline literals are now `:root` tokens, so the palette is
closed and every colour decision lives in one place.

| Token | Hex | Replaces / Role |
|---|---|---|
| `--text-strong` | `#234E4D` | Bold body/caption ink (`t-body-strong`, `t-caption-strong`) |
| `--gold-text-strong` | `#6B470C` | Logo hover + gold-badge text (AA) |
| `--gold-badge-fill` | `#F1D89B` | Gold-badge background |
| `--gold-border-muted` | `#AC9159` | Emphasis-card (`.card.ink`) border — status emphasis |
| `--ink-teal` | `#183330` | Utility-button fill (darker than `--dark-bg`, teal-leaning) |
| `--dark-border` | `#0c1817` | Hairline on dark panels |
| `--dark-raised` | `#2A3A35` | Toast surface (lightest of the dark trio) |
| `--dark-primary-hover` | `#8ECBC5` | `btn-on-dark` hover (lighter teal) |
| `--gold-moon` | `#F3E6BD` | Decorative moon orb on `feature-night` |

Glows and shadows are not floating colours: every dark-surface glow is `--gold-fill`
(#E8C56A) at reduced alpha, and every soft shadow is `--text` (#1B2A2B) at reduced alpha.


## Typography

Three font families; no mixing within a role.

| Role | Stack |
|---|---|
| Body / UI / Heading (default) | `"Inter","Noto Sans JP","system-ui","-apple-system","Segoe UI",sans-serif` |
| Editorial / Display (serif opt-in) | `"Cormorant Garamond","Shippori Mincho",Georgia,"Times New Roman",serif` |
| Code | `"JetBrains Mono",ui-monospace,"SFMono-Regular",Menlo,monospace` |

### Type Scale

| Class | Family | Size | Weight | Line-h | Tracking | Notes |
|---|---|---|---|---|---|---|
| `.t-hero` | serif (editorial opt-in) | 28px | 600 | 1.25 | -0.3px | Page-level hero headline; default sans in app UI |
| `.t-display` | serif (editorial opt-in) | 22px | 600 | 1.30 | -0.2px | Section heading; default sans in app UI |
| `.t-display-md` | serif (editorial opt-in) | 18px | 600 | 1.40 | -0.1px | Sub-section heading; default sans in app UI |
| `.t-lead` | sans | 16px | 400 | 1.55 | — | Intro paragraph; colour `--text-secondary` |
| `.t-tagline` | sans | 15px | 500 | 1.40 | — | Label, eyebrow, navigation title |
| `.t-body-strong` | sans | 14px | 600 | 1.50 | +0.02em | Bold body; colour `--text-strong` (#234E4D) |
| `.t-body` | sans | 14px | 400 | 1.75 | — | Default body copy |
| `.t-caption` | sans | 13px | 400 | 1.65 | — | Metadata; colour `--text-secondary` |
| `.t-caption-strong` | sans | 13px | 600 | 1.40 | +0.02em | Emphatic caption; colour `--text-strong` (#234E4D) |
| `.t-fine` | sans | 12px | 400 | 1.50 | — | Fine print; colour `--text-secondary` (5.83:1 AA — `--text-muted` is only 4.40:1 at this size) |

### Principles

- **Heading default is sans; serif/mincho is editorial opt-in.** In UI / app contexts,
  headings use Inter + Noto Sans JP (the same `--font-ui` as body). Cormorant Garamond
  and Shippori Mincho are editorial anchors for reading-mode and brand surfaces — apply
  via `class="font-serif"` explicitly; never set globally on `h*` elements. Body and
  generic UI labels are always sans.
- **Negative tracking on serifs.** -0.3 → -0.1px at heading sizes prevents optical spread.
  Never apply negative tracking to body or caption sizes.
- **Bold utility pair.** `t-body-strong` and `t-caption-strong` use weight 600 +
  letter-spacing +0.02em + colour `--text-strong` (#234E4D). This triad is a unit — do
  not break it.
- **Colour is part of the token.** `t-lead` is always `--text-secondary`; `t-caption` is
  always `--text-secondary`; `t-fine` is `--text-secondary` (NOT `--text-muted`, which
  fails AA below 18px). Do not override without cause.
- **Eyebrow / section label.** Use `font-size:12px; font-weight:600; letter-spacing:1.5px;
  text-transform:uppercase; color:--primary` (the `.eyebrow` pattern). Not a named type
  token but a consistent compositional pattern.
- **Code chips.** `font-family: --font-mono; font-size: 0.92em; background: --surface-sunken;
  border: 1px solid --border; border-radius: --r-xs; padding: 1px 5px`. On dark surfaces,
  switch to `background: rgba(236,230,210,.10); border-color: rgba(236,230,210,.20);
  color: --dark-text` — dark code chips never show a bright white box.


## Layout

### Container

```
.wrap { max-width: 1080px; margin: 0 auto; padding: 0 32px; }
```

The 1080px value is the canonical width for reading/document layouts. It is defined in
`tokens.css` as `--content-max: 1080px` and exposed in Tailwind via the `max-w-content`
utility (generated from `--spacing-content` in `index.css @theme`).
**Always reference `--content-max` (or the `max-w-content` utility) — never hardcode a
pixel value.** Using `max-w-2xl`, `max-w-4xl`, or similar shortcuts diverges from the
design and is not permitted.

Below 820px: padding collapses to 24px and multi-column grids become single-column.

### Section Rhythm

Each thematic section is a `<section class="block">` with `padding: 72px 0 32px` and a
`border-top: 1px solid --border`. The first block removes its top border.

The eyebrow → heading → sub-copy → content stack repeats across every section:

```
.eyebrow      12px / 600 / +1.5px / uppercase / --primary
.section-h    .t-display or .t-hero
.section-sub  .t-body / secondary / max-width 64ch
[content]
```

### Grid System

```css
.grid  { display: grid; gap: 24px; }
.cols-2 { grid-template-columns: repeat(2, 1fr); }
.cols-3 { grid-template-columns: repeat(3, 1fr); }
.row   { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }
.stack { display: flex; flex-direction: column; gap: 16px; }
```

### App Shell Layout (ws5 — second canonical pattern)

The **app shell** is a first-class layout pattern alongside the reading-mode container.
Use it for any productivity tool where content should fill the viewport (VS Code /
Claude-style), not sit centred in a reading column.

**Core structure:**

```
<div class="h-svh flex flex-col">            <!-- full viewport, no outer padding -->
  <header class="shrink-0 border-b border-border">…</header>
  <div class="flex flex-1 min-h-0 overflow-hidden">
    <aside class="w-[var(--sidebar-width)] shrink-0 border-r border-border overflow-y-auto">…</aside>
    <main class="flex-1 min-w-0 overflow-y-auto">…</main>
    <!-- additional panels slot here; each compresses existing columns via flex -->
  </div>
</div>
```

**Rules:**
- Root element uses `h-svh` (100svh) — fills the viewport, never scrolls itself.
- Top bar is optional (`shrink-0`); without it, panels begin at the top edge.
- Panel dividers are `border-r border-border` (structural `--border`, not control border).
- **Each panel scrolls independently** (`overflow-y-auto`). The root does NOT scroll.
- Outer padding is **minimal** (panel contents set their own inner padding, typically
  `--s-sm` to `--s-md`). Do not add a container wrapper inside an app-shell panel.
- Adding a new panel inserts a new `flex-1` or fixed-width column; existing panels
  reflow (compress) automatically — no media query change required.
- Sidebar width is governed by the token `--sidebar-width` (18rem), exposed as the
  `w-sidebar` Tailwind utility (from `--spacing-sidebar` in `@theme`). Never hardcode
  `w-72`, `w-64`, or similar values.

**When to choose each pattern:**

| Pattern | When to use |
|---|---|
| Container (`.wrap`, `max-w-content`) | Marketing pages, docs, single-entity reading views |
| App shell (`h-svh`, panels) | Productivity apps, dashboards, any UI with ≥ 2 persistent panels |

### Spacing Tokens

| Token | Value | Typical Use |
|---|---|---|
| `--s-xxs` | 4px | Inline micro-gap |
| `--s-xs` | 8px | Label-to-field, icon gap |
| `--s-sm` | 12px | Tight internal padding |
| `--s-md` | 16px | Card internal, field gap |
| `--s-lg` | 24px | Card padding, grid gap |
| `--s-xl` | 32px | Section sub-padding, button row |
| `--s-xxl` | 48px | Hero sub-sections |
| `--s-section` | 72px | Section top padding |

Base unit is 8px. Structural layout snaps to the scale above; fine typographic
adjustments may use 4px sub-base values.

### Whitespace Philosophy

Tomoshibi treats whitespace as breath between objects of meaning — not dead space. The
72px section top padding enforces a reading pause between thematic areas. Internally,
cards use 24px padding to give content room without wasting space. The overall density
sits between editorial (Apple) and dense SaaS (Linear) — it reads calm but is not sparse.


## Elevation & Depth

Tomoshibi's depth model has two modes: **lifted** (light surfaces rise with shadow) and
**sunken** (search / code backgrounds recede with colour, never shadow).

### Shadow Tokens

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(27,42,43,.06)` | Resting state of buttons, icon-btn, cards |
| `--shadow` | `0 1px 2px rgba(27,42,43,.05), 0 10px 24px -14px rgba(27,42,43,.22)` | Default card resting shadow |
| `--shadow-lg` | `0 2px 6px rgba(27,42,43,.06), 0 20px 48px -22px rgba(27,42,43,.30)` | Hover card, dark-zone, feature-night |
| `--shadow-hover` | `0 1px 2px rgba(27,42,43,.08), 0 4px 12px -3px rgba(27,42,43,.18)` | All hover lifts (buttons + cards) |

The shadow base `rgba(27,42,43,…)` is derived from `--text` (#1B2A2B) — ink-warm, not
cold blue-grey.

### Hover Behaviour

**Universal lift rule (primary / ghost / utility / cta / cards):**

```css
:hover { box-shadow: var(--shadow-hover); transform: translateY(-1px); }
/* colour stays exactly the same */
```

**Exception — icon-btn:** does not lift. Applies a narrow, ink-tinted shadow anchored
at the base:

```css
.icon-btn:hover { box-shadow: 0 1px 6px rgba(27,42,43,.18); }
/* no translateY — the button stays grounded */
```

**Exception — btn-on-dark:** brightens its teal background instead of lifting:

```css
.btn-on-dark:hover { background: var(--dark-primary-hover); }
```

### Dark Surface Glow

On dark surfaces, gold operates as a light source rather than a pigment:

- `feature-night` outer glow: `0 0 70px -18px rgba(232,197,106,.30)` added to shadow-lg.
- `feature-night` corona: `::before` pseudo with a radial gradient implying an off-canvas
  moon at top-right.
- Moon orb: `box-shadow: 0 0 38px 6px rgba(232,197,106,.55)`.
- Toast glow: `0 0 40px -16px rgba(232,197,106,.4)`.
- Kicker text glow: `text-shadow: 0 0 14px rgba(232,197,106,.4)`.
- Icon glow: `text-shadow: 0 0 12px rgba(232,197,106,.5)`.

**Philosophy:** soft shadows are permitted on the light face (quiet). On dark surfaces,
gold becomes the glow itself — light source, not decoration.

### Sunken Surface Rule

`--surface-sunken` (#F2EBD9), `--surface-control-sunken` (#F6FAF8), and `--dark-raised`
(#2A3A35, toast) are concave surfaces. They must not carry `box-shadow`. The search
input confirms this: on focus it gains only `border-color: --primary` — no shadow is
added.


## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `--r-xs` | 5px | Code chips, inline labels |
| `--r-sm` | 8px | Thumbnail crops inside cards |
| `--r-md` | 11px | Text inputs, toast, note-warn |
| `--r-lg` | 18px | Cards, dark-zone, feature-night |
| `--r-pill` | 9999px | All action buttons, search bar, icon-btn, badges, header CTA |

Pill radius is the universal action signal. If it is interactive and primary, it is a
pill. Utility buttons (`btn-utility`) are the single exception: they use `--r-sm` to
visually signal lower hierarchy.

### Thumbnail Geometry

Card thumbnails use a `4:3` aspect ratio, `--r-sm` inner radius, `--surface-sunken`
background, and mono font for placeholder text — simulating an image slot without an
actual image.


## Components

### Header

The header has no border-bottom and no shadow. It is contiguous with `--bg`. This is
intentional: the page begins at the first content section, not below a chrome rail.

Structure: logo (left) → nav links → spacer → meta label → CTA button (right).

The logo uses Cormorant Garamond 700 at 21px in `--gold-text` — the wordmark is the one
identity use of gold on the light face. Hover darkens to `--gold-text-strong` with a
0.25s ease transition on both colour and opacity. Nav links are styled in
`--text-secondary` and have no hover decoration — hover produces no colour change, no
underline, and no animation. The CTA button is the only interactive affordance on the
right side of the header.

### Buttons

All buttons share a base class `.ui` that sets `display:inline-flex`, `align-items:center`,
`line-height:1.2`, `white-space:nowrap`, and `flex:0 0 auto`. The transition declaration is
shared: `transform .18s ease, background .32s ease, color .32s ease, box-shadow .32s ease`.

Active state for all buttons except `btn-on-dark`: `transform: scale(0.97)`.

Focus ring (ws5): `focus-visible:ring-2 focus-visible:ring-ring/30` in Tailwind terms —
2px width, `--ring` colour at 30% opacity. This is softer than shadcn's default
(`ring-[3px] / ring-ring/50`), which reads as too heavy at Tomoshibi's density.
Apply this to both `button` and `input` components; the pattern is `focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-2`.

**Primary** (`btn-primary`): Teal pill. `--primary` fill, `--on-primary` text, `--r-pill`,
`padding: 9px 22px`. Hover: `--shadow-hover` + `translateY(-1px)`.

**Ghost** (`btn-ghost`): Transparent fill, teal border and text, `--r-pill`,
`padding: 8px 21px`. Hover: same lift as primary — neither fill nor border colour changes.

**Utility** (`btn-utility`): `--ink-teal` (#183330) fill (darker than `--dark-bg`),
`--on-primary` text, `--r-sm`, `padding: 8px 16px`, `font-size: 13px`.
Hover: `--shadow-hover` + `translateY(-1px)`.

**On Dark** (`btn-on-dark`): `--dark-primary` fill, `--dark-bg` text, `--r-pill`.
Hover: background `--dark-primary-hover`. No lift.

**Icon Button** (`icon-btn`): 38×38px, `--r-pill`, `--surface` fill,
`--border-control` border, `--shadow-sm` resting. Hover:
`0 1px 6px rgba(27,42,43,.18)` — ink-tinted grounded shadow, no translateY.

**CTA in Header**: same visual as `btn-primary` but `padding: 8px 18px`, `font-size: 14px`.

### Links

`.link` uses `--primary` (teal), no underline, `font-weight: 500`. Arrow (`→`) must be
wrapped in `<span class="arw">` with `display:inline-block`. On hover:
`transform: translateX(4px)` with `transition: transform .3s cubic-bezier(.4,0,.2,1)`.
No other hover effect.

On dark surfaces, link colour is `--dark-primary` (light teal).

### Cards

**Standard** (`.card`): `--surface` background, `1px solid --border`, `--r-lg`, `--s-lg`
padding, `--shadow` resting. Hover: `--shadow-lg` + `translateY(-2px)`,
`transition: 0.35s ease`.

**Ink emphasis** (`.card.ink`): extends standard card with
`border-color: --gold-border-muted` (#AC9159, muted gold used as status emphasis — not
affordance) and `--shadow-lg` as the resting shadow (already pre-elevated). Use for
exactly one card per group.

Card body order: optional badge → `t-body-strong` title → `t-caption` meta/price → `.link`
call-to-action.

### Inputs

**Text input** (`.input`): `--surface` background (lifted), `--border-control` outline,
`--r-md`, `padding: 9px 14px`, `--shadow-sm` resting. Focus: `border-color: --primary`,
soft teal drop shadow `0 2px 12px -5px rgba(47,110,112,.28)`. No outline on focus.

**Search** (`.search`): `--surface-control-sunken` background (cooled sunken),
`--border-control` outline, `--r-pill`, same padding as text input (`9px 14px`).
Focus-within: `border-color: --primary` only — **no shadow**. The search bar is a well;
wells do not cast shadows.

### Textarea (ws5)

A multi-line text input that grows with its content instead of scrolling.

**Visual spec:** identical to the text input — `--surface` background, `--border-control`
outline, `--r-md` radius, `--shadow-sm` resting, same focus treatment (teal border + soft
drop shadow). Set `resize: none` to prevent manual resize handles, which break auto-grow.

**Min height:** `min-height: 4.5rem` (approximately 3 lines at default body size).
Do not set a fixed `height` — the element must be free to grow.

**Auto-grow implementation:** two options:

1. **`field-sizing: content` (CSS, no JS):** supported in Chrome 123+ / Safari 17.4+.
   Add `field-sizing: content` to the textarea styles. Pair with a `min-height` to
   prevent collapsing to a single line when empty.

   ```css
   textarea {
     field-sizing: content;
     min-height: 4.5rem;
     resize: none;
   }
   ```

2. **JS `scrollHeight` sync (universal fallback):** on every `input` event, reset the
   height to `auto` then set it to `element.scrollHeight` in pixels.

   ```ts
   function autoGrow(el: HTMLTextAreaElement) {
     el.style.height = "auto";
     el.style.height = `${el.scrollHeight}px`;
   }
   textarea.addEventListener("input", () => autoGrow(textarea));
   ```

The component must never show a vertical scrollbar during normal typing. If content
exceeds a project-defined maximum height, clip at that height and allow scroll only above
the max.

### Badges

**Standard** (`.badge`): `--r-pill`, `padding: 5px 11px`, `font-size: 12px`,
`font-weight: 600`, `letter-spacing: 0.02em`. Icon child uses `.ic` with `font-weight: 700`.

**Gold badge** (`.gold-badge`): background `--gold-badge-fill` (#F1D89B), text
`--gold-text-strong` (#6B470C). Communicates "new / featured" — used sparingly as the
only gold surface element on the light face.

**Status badges**: six states, each with a dedicated fill + text colour pair (see
components YAML above). States are distinguished by hue, not just value — the six hues
span grey, teal (primary), indigo, gold, terracotta, and muted teal — in-progress and
done are both teal at different values, so this is five hues, not six.

### Dark Surfaces

**Feature-night** (`.feature-night`): Full editorial dark panel. `--dark-bg` background,
`--r-lg`, `padding: --s-xl`. Shadow: `--shadow-lg` + outer gold glow
`0 0 70px -18px rgba(232,197,106,.30)`. `::before` corona radial gradient (gold from
top-right fading to transparent). Moon orb positioned `top:24px, right:34px`.

**Dark zone** (`.dark-zone`): Container for toast examples and dark previews. `--dark-bg`,
`--r-lg`, `1px solid --dark-border`, `--shadow-lg`. No glow — it is a neutral dark
container, not a hero.

**Toast** (`.toast`): background `--dark-raised`, `--r-md`, `padding: 11px 16px`,
`border: 1px solid rgba(236,230,210,.1)`. Shadow: `--shadow-lg` + gold ambient
`0 0 40px -16px rgba(232,197,106,.4)`. Icon colour `--gold-on-dark` with text-shadow glow.


## Do's and Don'ts

### Do

- Use `--primary` (#2F6E70) for everything interactive — buttons, controls, links, focus
  rings, and eyebrow text. Use `--gold-text` (#8A5E12) only for the wordmark and the
  action-required status. The split is by job: teal = affordance, gold = identity/status.
- Outline interactive controls with `--border-control` (#9DB7B5), not `--border`. Keep
  `--border` (#D8CFB6) for structural hairlines (cards, dividers), and use
  `--surface-control-sunken` (#F6FAF8) for the search well.
- Lift on hover: `box-shadow: --shadow-hover; transform: translateY(-1px)`. Never change
  the background colour of a button on hover (except `btn-on-dark`).
- Keep the header at `--bg` with no border and no shadow. It merges with the page.
- Use gold only as the wordmark, status highlights (gold badge, action-required), and
  glowing fill on dark surfaces. Gold never marks links, nav, focus, or hover, and is
  never a button colour.
- Reserve dark surfaces for: notification toasts, emphasis card (`.card.ink`), feature
  hero (`.feature-night`), and full dark mode. Avoid dark zones in navigation.
- When using editorial serif headings (on brand/landing surfaces), always pair with sans
  body copy. Never use Cormorant or Shippori Mincho below 18px or for UI labels.
- Wrap `.link` arrows in `<span class="arw">` so the slide animation targets only the
  glyph.
- Use only two derived accent hues: `--terracotta` and `--indigo`. More breaks chromatic
  harmony.
- Apply `--shadow-sm` as the resting state; step up to `--shadow-hover` on hover.
- Use `#F7F7F5` as the page background — never `#FFFFFF` and never `#FDFCF8` (the old
  warm-white is superseded by the neutral grey as of ws5).
- Use sans (Inter + Noto Sans JP) for headings in UI/app contexts. Reserve `font-serif`
  (Cormorant Garamond + Shippori Mincho) for landing pages, brand surfaces, and
  reading-mode layouts — always apply it explicitly, never globally.

### Don't

- Don't recolour buttons on hover. The lift is the feedback; the colour is the identity.
- Don't add `box-shadow` to sunken surfaces (`--surface-sunken`, `--surface-control-sunken`,
  `.search`). Sunken elements recede by colour, not by lifting.
- Don't use `--gold-fill` (#E8C56A) as a text colour on light backgrounds — it fails
  contrast. Use `--gold-text` (#8A5E12) instead.
- Don't apply `--gold-deco` (#B8862F) to text — it is for decorative strokes only
  (e.g. the left border of a warning note).
- Don't use gold to signal interactivity. Links, input focus, and icon-button hover are
  all teal. Nav links have no hover treatment at all. Gold marks identity and status
  only — never "you can act on this".
- Don't add dark headers, dark nav bars, or dark footers to pages that are otherwise
  light. Dark surfaces are rare and purposeful.
- Don't use `translateY` on `.icon-btn` hover. Its ink-tinted shadow is a grounded glow,
  not a lift.
- Don't use serif for UI headings by default. Serif/mincho is an editorial opt-in for
  reading-mode and brand surfaces only. Body paragraphs are always sans.
- Don't mix serif and sans within a single typographic role in the same component.
- Don't add a third status hue beyond terracotta and indigo in Ver.1.
- Don't use `#FFFFFF` anywhere — not for backgrounds, not for `--on-primary` (which is
  `#FAF6EC`). Pure white is outside the palette.
- Don't add decorative gradients to light surfaces. Gold glow on dark is earned; the
  light face is gradient-free.
- Don't add hover colour to nav links. Nav is a static label; only the logo and CTA are
  affordances in the header.


## Responsive

| Breakpoint | Width | Key changes |
|---|---|---|
| Mobile | ≤ 680px | Header nav and meta label hidden; `max-width:100%` effective |
| Tablet | ≤ 820px | `.cols-2` and `.cols-3` grids collapse to single column; wrap padding reduces to 24px |
| Desktop | > 820px | Full multi-column layout; 1080px max-width container |

### Collapsing Strategy

- **Header**: Logo + CTA remain visible at all widths. Nav links and meta label are
  hidden below 680px via `display:none` (`@media(max-width:680px)`).
- **Grid columns**: `cols-2` and `cols-3` both collapse to `grid-template-columns:1fr`
  at ≤820px.
- **Section padding**: `--s-section` (72px) is fixed; it does not reduce on mobile in
  the current gallery implementation.
- **Cards**: Full width on mobile; the thumb aspect-ratio is preserved.
- **Input row**: Grid `cols-2` on desktop; stacks to single column on mobile.

### Touch Targets

Buttons with `padding: 9px 22px` and `line-height:1.2` at 14px reach approximately
35px height (measured) — below the 44px WCAG target. Increase vertical padding (e.g.
`13px 22px`) when building for touch-primary contexts. Icon buttons at 38×38px are close
to the target; consider `40×40` minimum for production.


## Known Gaps

- **Form validation states** are not documented in the gallery. Error border colour,
  error message style, and required-field marking are undefined.
- **Dark mode** as a full system (not just the `.dark-zone` / `.feature-night` panels)
  is not specced — the gallery shows component-level dark surfaces only.
- **Focus ring on dark surfaces** is not demonstrated; the default `outline: 2px solid
  --primary` will be invisible against dark backgrounds. A `--dark-primary` focus ring
  is the logical choice but is not formalised.
- **Animation tokens** (duration, easing) are embedded in individual component rules
  rather than `:root` variables. The recurring values are `0.18s ease` (button lift),
  `0.25s ease` (logo colour), `0.30s cubic-bezier(.4,0,.2,1)` (arrow slide),
  `0.32s ease` (colour transitions), `0.35s ease` (card lift).
- **Colour contrast — audited (verified):** on `--bg` #F7F7F5 — `--text` 14.5:1,
  `--text-strong` (#234E4D) approx. 9.0:1, `--text-secondary` 5.83:1, `--primary`
  5.71:1, `--gold-text` 5.54:1, `--on-primary` on `--primary` 5.43:1, gold badge
  (#6B470C on #F1D89B) 5.94:1 — all pass AA. Status badges 4.67–7.49:1 (all pass).
  Dark-surface text 5.65–13:1 (all pass). **One exception, now contained:**
  `--text-muted` #5A7D7B is 4.40:1 (below AA for small text), so it is restricted to
  placeholders and icons; `.t-fine` text uses `--text-secondary`.
- **Remaining audit items:** focus-ring contrast on dark surfaces and touch-target sizing

### Roadmap — next design iterations (ws5 additions)

- **Type scale tokenisation:** `--text-h1/h2/body/meta` size + line-height + weight as
  tokens (font family is already tokenised; sizes/weights are still hardcoded in classes).
  Would enable one-place density / accessibility switching.
- **Hover / active overlay tokens:** `--hover` and `--active` as composable overlay
  colours (currently `--accent` is reused; a dedicated token would separate intent).
- **Border-width token:** `--border-width` (colour `--border` is tokenised; width `1px`
  is still a direct literal throughout).
- **Sidebar independent surface:** `--sidebar` / `--sidebar-border` / `--sidebar-item-hover`
  as a distinct surface layer. Currently app-shell sidebar inherits `--background`;
  Claude-style products need the sidebar as its own chromatic plane.
- **Density token (`--control-height`) wired to components:** `--control-height: 2.25rem`
  is defined in `tokens.css` and exposed as `h-control` (from `--spacing-control` in
  `@theme`), but `button.tsx` / `input.tsx` still use `h-9` directly. Full wiring would
  allow compact/comfortable modes via one token change.
- **Sidebar / control discoverability:** surface `--sidebar-width` in the Spacing Tokens
  table and document `--ring` (teal `#2F6E70`) + the textarea max-height default alongside
  their component specs (currently they live only in the App Shell / Inputs prose).
