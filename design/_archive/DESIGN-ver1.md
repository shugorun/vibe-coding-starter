# DESIGN.md — Ver.1（識別性優先: ティール+ゴールド3分割 + 派生2色で状態を色相区別）

このドキュメントは Apple の UI 設計哲学（構造・タイポ・余白・角丸・レスポンシブ）を土台に、
Ver.1（B案: 識別性優先）の色システムのみを適用したものです。
色以外の設計判断（タイポグラフィ・余白・角丸・レイアウト・影・レスポンシブ・Iteration ルール）は Apple 原版を保持します。

---

```yaml
---

version: alpha

name: ver1-teal-gold-terracotta-indigo

description: A task-first interface built on warm off-white and deep teal-ink canvases. Edge-to-edge content tiles alternate between warm off-white (#FAF6EC) and deep teal-ink (#142322) surfaces, framed by SF Pro Display headlines with negative letter-spacing and a single teal accent (--primary #2F6E70) interactive color. UI chrome recedes so content can speak — no decorative gradients, no shadows on chrome. The only luminosity is gold (#E8C56A) glowing like moonlight on dark surfaces. Status is communicated through six hue-distinct state colors (neutral, teal, indigo, gold, terracotta, muted-teal) rather than a single blue.


colors:

  primary: "#2F6E70"

  primary-hover: "#265A5C"

  primary-on-dark: "#6BB5B0"

  text: "#1B2A2B"

  text-secondary: "#4A6968"

  text-muted: "#5A7D7B"

  on-primary: "#FAF6EC"

  bg: "#FAF6EC"

  surface: "#FFFCF4"

  surface-sunken: "#F2EBD9"

  border: "#D8CFB6"

  border-strong: "#5A7D7B"

  gold-text: "#8A5E12"

  gold-fill: "#E8C56A"

  gold-deco: "#B8862F"

  terracotta-text: "#A8472B"

  terracotta-fill: "#F6E2DA"

  indigo-text: "#34466E"

  indigo-fill: "#E2E6F2"

  dark-bg: "#142322"

  dark-surface: "#20302E"

  dark-text: "#ECE6D2"

  dark-text-secondary: "#9FBDB8"

  dark-primary: "#6BB5B0"

  gold-on-dark: "#E8C56A"

  terracotta-on-dark: "#E3906F"

  indigo-on-dark: "#9AABDB"


typography:

  hero-display:

    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"

    fontSize: 56px

    fontWeight: 600

    lineHeight: 1.07

    letterSpacing: -0.28px

  display-lg:

    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"

    fontSize: 40px

    fontWeight: 600

    lineHeight: 1.1

    letterSpacing: 0

  display-md:

    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"

    fontSize: 34px

    fontWeight: 600

    lineHeight: 1.47

    letterSpacing: -0.374px

  lead:

    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"

    fontSize: 28px

    fontWeight: 400

    lineHeight: 1.14

    letterSpacing: 0.196px

  lead-airy:

    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"

    fontSize: 24px

    fontWeight: 300

    lineHeight: 1.5

    letterSpacing: 0

  tagline:

    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"

    fontSize: 21px

    fontWeight: 600

    lineHeight: 1.19

    letterSpacing: 0.231px

  body-strong:

    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"

    fontSize: 17px

    fontWeight: 600

    lineHeight: 1.24

    letterSpacing: -0.374px

  body:

    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"

    fontSize: 17px

    fontWeight: 400

    lineHeight: 1.47

    letterSpacing: -0.374px

  dense-link:

    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"

    fontSize: 17px

    fontWeight: 400

    lineHeight: 2.41

    letterSpacing: 0

  caption:

    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"

    fontSize: 14px

    fontWeight: 400

    lineHeight: 1.43

    letterSpacing: -0.224px

  caption-strong:

    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"

    fontSize: 14px

    fontWeight: 600

    lineHeight: 1.29

    letterSpacing: -0.224px

  button-large:

    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"

    fontSize: 18px

    fontWeight: 300

    lineHeight: 1.0

    letterSpacing: 0

  button-utility:

    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"

    fontSize: 14px

    fontWeight: 400

    lineHeight: 1.29

    letterSpacing: -0.224px

  fine-print:

    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"

    fontSize: 12px

    fontWeight: 400

    lineHeight: 1.0

    letterSpacing: -0.12px

  micro-legal:

    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"

    fontSize: 10px

    fontWeight: 400

    lineHeight: 1.3

    letterSpacing: -0.08px

  nav-link:

    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"

    fontSize: 12px

    fontWeight: 400

    lineHeight: 1.0

    letterSpacing: -0.12px


rounded:

  none: 0px

  xs: 5px

  sm: 8px

  md: 11px

  lg: 18px

  pill: 9999px

  full: 9999px


spacing:

  xxs: 4px

  xs: 8px

  sm: 12px

  md: 17px

  lg: 24px

  xl: 32px

  xxl: 48px

  section: 80px


components:

  button-primary:

    backgroundColor: "{colors.primary}"

    textColor: "{colors.on-primary}"

    typography: "{typography.body}"

    rounded: "{rounded.pill}"

    padding: 11px 22px

  button-primary-focus:

    backgroundColor: "{colors.primary}"

    textColor: "{colors.on-primary}"

    rounded: "{rounded.pill}"

  button-primary-active:

    backgroundColor: "{colors.primary}"

    textColor: "{colors.on-primary}"

    rounded: "{rounded.pill}"

  button-secondary-pill:

    backgroundColor: "{colors.bg}"

    textColor: "{colors.primary}"

    typography: "{typography.body}"

    rounded: "{rounded.pill}"

    padding: 11px 22px

  button-dark-utility:

    backgroundColor: "{colors.text}"

    textColor: "{colors.dark-text}"

    typography: "{typography.button-utility}"

    rounded: "{rounded.sm}"

    padding: 8px 15px

  button-pearl-capsule:

    backgroundColor: "{colors.surface}"

    textColor: "{colors.text-secondary}"

    typography: "{typography.caption}"

    rounded: "{rounded.md}"

    padding: 8px 14px

  button-store-hero:

    backgroundColor: "{colors.primary}"

    textColor: "{colors.on-primary}"

    typography: "{typography.button-large}"

    rounded: "{rounded.pill}"

    padding: 14px 28px

  button-icon-circular:

    backgroundColor: "{colors.surface-sunken}"

    textColor: "{colors.text}"

    rounded: "{rounded.full}"

    size: 44px

  text-link:

    backgroundColor: transparent

    textColor: "{colors.primary}"

    typography: "{typography.body}"

  text-link-on-dark:

    backgroundColor: transparent

    textColor: "{colors.dark-primary}"

    typography: "{typography.body}"

  global-nav:

    backgroundColor: "{colors.dark-bg}"

    textColor: "{colors.dark-text}"

    typography: "{typography.nav-link}"

    height: 44px

  sub-nav-frosted:

    backgroundColor: "{colors.surface-sunken}"

    textColor: "{colors.text}"

    typography: "{typography.tagline}"

    height: 52px

  product-tile-light:

    backgroundColor: "{colors.bg}"

    textColor: "{colors.text}"

    typography: "{typography.display-lg}"

    rounded: "{rounded.none}"

    padding: 80px

  product-tile-parchment:

    backgroundColor: "{colors.surface-sunken}"

    textColor: "{colors.text}"

    typography: "{typography.display-lg}"

    rounded: "{rounded.none}"

    padding: 80px

  product-tile-dark:

    backgroundColor: "{colors.dark-surface}"

    textColor: "{colors.dark-text}"

    typography: "{typography.display-lg}"

    rounded: "{rounded.none}"

    padding: 80px

  product-tile-dark-2:

    backgroundColor: "{colors.dark-surface}"

    textColor: "{colors.dark-text}"

    rounded: "{rounded.none}"

  product-tile-dark-3:

    backgroundColor: "{colors.dark-bg}"

    textColor: "{colors.dark-text}"

    rounded: "{rounded.none}"

  store-utility-card:

    backgroundColor: "{colors.bg}"

    textColor: "{colors.text}"

    typography: "{typography.body-strong}"

    rounded: "{rounded.lg}"

    padding: 24px

  configurator-option-chip:

    backgroundColor: "{colors.bg}"

    textColor: "{colors.text}"

    typography: "{typography.caption}"

    rounded: "{rounded.pill}"

    padding: 12px 16px

  configurator-option-chip-selected:

    backgroundColor: "{colors.bg}"

    textColor: "{colors.text}"

    rounded: "{rounded.pill}"

  search-input:

    backgroundColor: "{colors.bg}"

    textColor: "{colors.text}"

    typography: "{typography.body}"

    rounded: "{rounded.pill}"

    padding: 12px 20px

    height: 44px

  floating-sticky-bar:

    backgroundColor: "{colors.surface-sunken}"

    textColor: "{colors.text}"

    typography: "{typography.body}"

    height: 64px

    padding: 12px 32px

  environment-quote-card:

    backgroundColor: "{colors.dark-surface}"

    textColor: "{colors.dark-text}"

    typography: "{typography.display-lg}"

    rounded: "{rounded.none}"

    padding: 80px

  footer:

    backgroundColor: "{colors.surface-sunken}"

    textColor: "{colors.text-secondary}"

    typography: "{typography.fine-print}"

    padding: 64px

---
```

## Overview

This design system is a **task-first interface built on warm off-white and deep teal-ink canvases**. Every page is a stack of edge-to-edge content "tiles" — alternating warm off-white `--bg #FAF6EC`昼地 ⇄ deep teal-ink `--dark-bg #142322` 夜面, each centered on a hero headline, a one-line tagline, two small teal pill CTAs, and well-composed content. Pure white (#ffffff) is never used as a background — the warmth of `#FAF6EC` is non-negotiable. Nothing competes with the content. Typography is confident but quiet; color is either warm off-white, warm sunken parchment, or deep teal-ink; interactive elements are a single, quiet teal.

Density is unusually low even by contemporary SaaS standards. Each tile occupies roughly one viewport, and there is no decorative chrome — no borders, no gradients, no decorative frames, no shadows on headlines. Elevation appears only as a luminous signal: on dark surfaces, `--gold-on-dark #E8C56A` glows like moonlight on the scene — the single point of warmth in the deep teal-ink night. The result is a task view that feels more like a museum gallery: the surface disappears and the content takes over.

Store and task surfaces retain the same chassis but switch modes. The task configurator introduces a tight grid of warm utility cards at `{rounded.lg}` (18px) radius with a thin border, paired with a persistent thin sub-nav strip. The dark/night surfaces lean editorial and focused. Across all surfaces the typographic system, spacing rhythm, and the single teal accent are consistent — this is one design language expressed at different volumes.

**Key Characteristics:**

- Content-first presentation; UI recedes so the task can speak.

- Alternating full-bleed tile sections: warm off-white/parchment ↔ deep teal-ink, with the color change itself acting as the section divider.

- Single teal accent (`{colors.primary}` — `--primary #2F6E70`, 水面のティール) carries every interactive element. インタラクティブ要素は全てこれ。No second interactive color exists.

- Two button grammars: small teal pill CTAs (`{rounded.pill}`) and compact utility rects (`{rounded.sm}`).

- SF Pro Display + SF Pro Text — negative letter-spacing at display sizes for the signature "Apple tight" headline feel.

- The only luminosity is gold: `--gold-on-dark #E8C56A` glows like moonlight on dark teal-ink surfaces — the single luminous point in the system.

- Tight two-row nav: slim `{component.global-nav}` + content-specific `{component.sub-nav-frosted}` with persistent right-aligned primary CTA.

- Section rhythm across pages: warm-off-white hero → dark teal tile → warm utility tile → dark tile → sunken-parchment footer — a predictable pulse.

- Six hue-distinct state colors (neutral, teal, indigo, gold, terracotta, muted-teal) allow status to be read at a glance.


## Colors

> **Source:** Apple's design philosophy applied to Ver.1 (B案: 識別性優先) color system. The structural token discipline (single accent, surface alternation, no decorative gradients) is Apple's; the palette is Ver.1's.


### 1. 基本トークン（ライトモード）

| トークン | 用途 | Hex | コントラスト |
|---|---|---|---|
| `--bg` | ページ背景（最も明るい） | `#FAF6EC` | — |
| `--surface` | カード面 | `#FFFCF4` | — |
| `--surface-sunken` | 入力欄・くぼみ・フッター | `#F2EBD9` | — |
| `--text` | 本文・主役 | `#1B2A2B` | 13.8:1 / bg (AAA) |
| `--text-secondary` | 補助テキスト | `#4A6968` | 5.5:1 / bg (AA) |
| `--text-muted` | ヒント（18px以上） | `#5A7D7B` | 4.2:1 / bg（大字AA） |
| `--primary` | リンク・主ボタン・フォーカス | `#2F6E70` | 5.4:1 / bg (AA) |
| `--primary-hover` | ホバー | `#265A5C` | — |
| `--on-primary` | ティール面の上の文字 | `#FAF6EC` | 5.4:1 (AA) |
| `--border` | 通常境界 | `#D8CFB6` | — |
| `--border-strong` | 強調境界 | `#5A7D7B` | — |

**Pure white (#ffffff) is never used as a canvas.** The warmth of `#FAF6EC` is part of the brand character — it signals hand, craft, and editorial care. `#FFFCF4` is reserved for card surfaces that need to lift slightly above `#FAF6EC`.


### 2. ゴールドの3分割ルール（最重要）

Gold is a **light source, not a fill**. It is never used across large areas on light backgrounds. Three distinct tokens govern where gold is legal:

| トークン | 使ってよい場所 | Hex | 根拠 |
|---|---|---|---|
| `--gold-text` | 明るい面の文字・アイコン | `#8A5E12` | bg上 5.3:1 (AA) |
| `--gold-fill` | バッジ塗り・暗い面の上 | `#E8C56A` | 塗り / 暗い面で発光 |
| `--gold-deco` | 非テキスト装飾のみ | `#B8862F` | bg上 3.0:1。文字不可 |

The rule: **use `--gold-fill` (#E8C56A) as text on light surfaces never** — it loses contrast. On dark surfaces (`--dark-bg`, `--dark-surface`), `--gold-fill` becomes `--gold-on-dark` and shines at 9.8:1 (AAA). `--gold-deco` is for ornamental strokes and non-interactive marks only; never apply it to body copy.


### 3. 派生2色（Ver.1のみ）

Two derived hues are added to enable hue-distinct status communication. Both follow the same discipline as the base palette: dark value for text/icons, light value for fill/background.

| トークン | 役割イメージ | 文字用（濃） | コントラスト | 塗り用（淡） |
|---|---|---|---|---|
| `--terracotta` | 暖色の警告・期限超過 | `#A8472B` | 5.4:1 / bg (AA) | `#F6E2DA` |
| `--indigo` | 寒色の保留・情報 | `#34466E` | 8.7:1 / bg (AAA) | `#E2E6F2` |

> 派生色は2色まで。これ以上足すと画像の調和が崩れ、画面もにぎやかになりすぎます。

Terracotta is gold's warm sibling; indigo is teal's cold counterpart. Together they form a hue wheel that covers warm-alert, cool-informational, and the teal-gold anchor.


### 4. 暗い面・ダークモード（`#E8C56A` の本来の出番）

| トークン | 用途 | Hex | コントラスト |
|---|---|---|---|
| `--dark-bg` | 暗い面の地（グローバルナビ/ダーク背景） | `#142322` | — |
| `--dark-surface` | 暗い面のカード | `#20302E` | — |
| `--dark-text` | 暗い面の文字 | `#ECE6D2` | 13.0:1 (AAA) |
| `--dark-text-secondary` | 暗い面の補助 | `#9FBDB8` | — |
| `--dark-primary` | 暗い面のティール | `#6BB5B0` | 6.9:1 (AA) |
| `--gold-on-dark` | 暗い面の金（光る） | `#E8C56A` | 9.8:1 (AAA) |
| `--terracotta-on-dark` | 暗い面のテラコッタ | `#E3906F` | 6.6:1 (AA) |
| `--indigo-on-dark` | 暗い面のインディゴ | `#9AABDB` | 7.1:1 (AAA) |

On dark surfaces, `--dark-primary` (#6BB5B0) replaces `--primary` for all interactive elements — it provides the same teal signal at the contrast needed against deep teal-ink. The sky-link role (dark-surface inline links) is served by `--dark-primary`, not a separate blue. There is no second brand color.


### 5. 仕事コンポーネントの状態色（Ver.1 = 色相で区別）

Six task states, each assigned a distinct hue so they can be read at a glance without relying solely on label text.

| 状態 | 色相 | 地色 (fill) | 文字色 | コントラスト |
|---|---|---|---|---|
| 未着手 | ニュートラル灰ティール | `#E5E7E1` | `#445250` | 6.6:1 (AA) |
| 進行中 | ティール（主色） | `#DCEAE9` | `#2F6E70` | 4.7:1 (AA) |
| 保留 | インディゴ | `#E2E6F2` | `#34466E` | 7.5:1 (AAA) |
| 要対応 | ゴールド | `#FAEED9` | `#8A5E12` | 5.0:1 (AA) |
| 期限超過 | テラコッタ | `#F6E2DA` | `#A8472B` | 4.7:1 (AA) |
| 完了 | くすみティール（後退） | `#E8EDE9` | `#4A6968` | 5.0:1 (AA) |

- 暗い面（トースト等）で同じ状態を出す場合は、文字色をセクション4の `*-on-dark` 系に差し替える。
- **色覚配慮のため、色相で分けていてもアイコン併用を推奨**（必須ではないが、あると堅い）。


### No Decorative Gradients

**No decorative gradients.** Atmospheric depth on photography is inherent to the imagery, not a CSS gradient overlay. The palette's warmth (off-white ground, teal-ink night) provides all necessary mood; CSS gradients add nothing and muddy the surface quality. Zero gradient-based design tokens are defined.


## Typography

### Font Family

- **Display**: `SF Pro Display, system-ui, -apple-system, sans-serif` — Apple's proprietary display face, optimized for sizes ≥ 19px. Defines the voice of every headline.

- **Body / UI**: `SF Pro Text, system-ui, -apple-system, sans-serif` — the text-optimized variant used for body copy, captions, buttons, and links below 20px.

- **OpenType features**: `font-variant-numeric: numerator` is enabled on numeric links (pricing tables, spec sheets). Display sizes rely on tight tracking rather than contextual ligatures.


### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 56px | 600 | 1.07 | -0.28px | Hero headline; the signature "Apple tight" tracking |
| `{typography.display-lg}` | 40px | 600 | 1.10 | 0 | Tile headlines atop every content tile |
| `{typography.display-md}` | 34px | 600 | 1.47 | -0.374px | Section heads (SF Pro Text at display proportions) |
| `{typography.lead}` | 28px | 400 | 1.14 | 0.196px | Content tile subcopy |
| `{typography.lead-airy}` | 24px | 300 | 1.5 | 0 | Environment-page lead paragraphs (the rare weight 300) |
| `{typography.tagline}` | 21px | 600 | 1.19 | 0.231px | Sub-tile tagline; sub-nav category name |
| `{typography.body-strong}` | 17px | 600 | 1.24 | -0.374px | Inline strong emphasis |
| `{typography.body}` | 17px | 400 | 1.47 | -0.374px | Default paragraph |
| `{typography.dense-link}` | 17px | 400 | 2.41 | 0 | Footer / store utility link lists (relaxed leading) |
| `{typography.caption}` | 14px | 400 | 1.43 | -0.224px | Secondary captions, button text |
| `{typography.caption-strong}` | 14px | 600 | 1.29 | -0.224px | Emphasized captions |
| `{typography.button-large}` | 18px | 300 | 1.0 | 0 | Store hero CTAs (the rare weight 300) |
| `{typography.button-utility}` | 14px | 400 | 1.29 | -0.224px | Utility/nav button labels |
| `{typography.fine-print}` | 12px | 400 | 1.0 | -0.12px | Fine-print, footer body |
| `{typography.micro-legal}` | 10px | 400 | 1.3 | -0.08px | Micro legal disclaimers |
| `{typography.nav-link}` | 12px | 400 | 1.0 | -0.12px | Global nav menu items |


### Principles

- **Negative letter-spacing at display sizes.** Every headline at 17px and up carries a slight tracking tighten (`-0.12 → -0.374px`). This produces the iconic "Apple tight" headline cadence. Never used at 12px or below.

- **Body copy at 17px, not 16px.** Apple breaks the SaaS convention and runs paragraph text at 17px. The extra pixel gives the page an unmistakable "reading, not scanning" pace.

- **Weight 300 is real and rare.** Used deliberately on a handful of large-size reads (`{typography.button-large}` at 18px/300 and `{typography.lead-airy}` at 24px/300). It's not an accident — it's a light-atmosphere cue reserved for moments where the content should feel airy.

- **Weight 600, not 700, for headlines.** Headlines sit at weight 600. Weight 700 is used sparingly for `{typography.tagline}` (21px) when a touch more assertion is needed.

- **Line-height is context-specific.** Display sizes use 1.07–1.19 (tight). Body uses 1.47. Utility link stacks in the footer/store use an unusually relaxed 2.41 (`{typography.dense-link}`). The 2.41 is not a bug — it's how the footer's dense link columns breathe.

- **Weight 500 is deliberately absent.** The ladder is 300 / 400 / 600 / 700. Mid-weight readings always use 600.


### Note on Font Substitutes

SF Pro is Apple's proprietary system font. When building off-system:

- Use `system-ui, -apple-system, BlinkMacSystemFont` as the first stack entry — on macOS/iOS/Safari this resolves to the real SF Pro.

- For non-Apple platforms, **Inter** (Google Fonts, variable) is the closest open-source equivalent. Inter at weight 600 with `font-feature-settings: "ss03"` approximates SF Pro's rounded "a" character.

- Nudge `letter-spacing` down by `-0.01em` on display sizes to re-create the tight feel; Inter's default tracking runs slightly wider than SF Pro.

- For body text, tighten line-height by `0.03` (from 1.47 → 1.44) when substituting Inter — Inter's taller x-height needs less leading.


## Layout

### Spacing System

- **Base unit:** 8px. Sub-base values (2, 4, 5, 6, 7) are used for tight typographic adjustments; structural layout snaps to 8/12/16/20/24.

- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 17px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80px.

- **Section vertical padding:** `{spacing.section}` (80px) inside a content tile; tiles stack edge-to-edge with 0 gap (the color change provides the break).

- **Card padding:** `{spacing.lg}` (24px) inside utility grid cards.

- **Button padding:** 8–11px vertical, 15–22px horizontal.

- **Universal rhythm constants:** the 17px body line-height multiplier (~25px line) and 21px tagline size show up on every page.


### Grid & Container

- **Max content width:** ~980px on text-heavy sections, ~1440px on content grids, full-bleed for content tiles.

- **Column patterns:** 3 to 5 column utility card grid on store/task grids; 2-column side-by-side tiles on occasional sections; single-column centered stack on content tile heroes.

- **Gutters:** 20–24px between cards in a utility grid.


### Whitespace Philosophy

Whitespace is the content's pedestal. Every tile begins with at least 64px of air above its headline and 48–64px below. Content renders are never crowded; the nearest content to a feature image is at least 40px away. The footer is the only area that breaks this — there, the full information architecture is made visible at a glance through deliberate density.


## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Full-bleed tiles, global nav, footer, body sections |
| Soft hairline | 1px `rgba(0, 0, 0, 0.08)` border | Utility cards, sub-nav frosted-glass separator |
| Backdrop blur | `backdrop-filter: blur(N)` on Surface-Sunken 80% | Sub-nav and the floating sticky bar |
| Product shadow | `rgba(0, 0, 0, 0.22) 3px 5px 30px 0` | Product renders resting on a surface (the only true "shadow" in the system) |

**Shadow philosophy — translated to Ver.1.** This system uses **exactly one** luminous accent, not one drop-shadow. The single point of visual weight is `--gold-on-dark #E8C56A` glowing like moonlight on the deep teal-ink surface — a warm light source in the dark. On light surfaces, elevation comes from (a) surface-color change (warm off-white ↔ deep teal-ink tile) and (b) backdrop-blur on sticky bars. Drop-shadows on chrome never appear. The rule is the same as Apple's — only one elevation signal — but here it is expressed as gold luminosity rather than a gray drop-shadow.


### Decorative Depth

- **Atmospheric imagery** on environment/editorial pages supplies mood; no CSS gradient involved.

- **Edge-to-edge tile alternation** creates rhythm without borders or shadows — the color change itself is the divider.

- **Backdrop-filter blur** on `{component.sub-nav-frosted}` and `{component.floating-sticky-bar}` creates a "floating over content" effect that's functional, not decorative.


## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed content tiles (no corner rounding) |
| `{rounded.xs}` | 5px | Inline links when styled as subtle chips (rare) |
| `{rounded.sm}` | 8px | Dark utility buttons (Sign In, Bag), inline card imagery |
| `{rounded.md}` | 11px | Pearl capsule buttons |
| `{rounded.lg}` | 18px | Store utility cards, accessories grid cards |
| `{rounded.pill}` | 9999px | Primary teal pill CTAs, sub-nav buy button, configurator option chips, search input — the signature pill |
| `{rounded.full}` | 9999px / 50% | Circular control chips floating over photography |


### Photography Geometry

- **Hero imagery**: full-bleed, 21:9 or taller on the homepage; 16:9 on environment and task pages. Product renders are photographic-realistic, often shot on a surface that becomes the tile background.

- **Product renders**: PNG/WebP with transparency; rest on a surface tile and pick up the system shadow.

- **Accessory grid**: square 1:1 crops at `{rounded.lg}` (18px) radius, light neutral backgrounds, product centered with 20–40px internal padding.

- **No rounded imagery in hero tiles** — images are full-bleed rectangular. Rounding (`{rounded.sm}`, `{rounded.lg}`) appears only on inline card imagery.

- Lazy-loading via responsive `srcset` and `sizes` across all breakpoints; CDN-optimized WebP.


## Components

### Top Navigation

**`global-nav`** — Persistent, ultra-thin deep teal-ink nav bar pinned to the top of every page. Background `{colors.dark-bg}` (#142322), height 44px, text `{colors.dark-text}` in `{typography.nav-link}` (12px / 400 / -0.12px tracking). Links are quiet, spaced ~20px apart, running edge-to-edge across the top. Right-aligned cluster: Search, Bag icons — always visible. On mobile, collapses to hamburger at ~834px and the logo centers.

**`sub-nav-frosted`** — Surface-specific nav that sticks below the global nav. Background `{colors.surface-sunken}` (#F2EBD9) at 80% opacity with backdrop-filter blur, creating a frosted-glass effect. Height 52px. Content on left: category name in `{typography.tagline}` (21px / 600). Content right: inline nav links in `{typography.button-utility}` (14px), ending in a persistent `{component.button-primary}`.


### Buttons

**`button-primary`** — The signature action. Background `{colors.primary}` (teal `--primary #2F6E70`), text `{colors.on-primary}` in `{typography.body}` (SF Pro Text 17px / 400), rounded `{rounded.pill}` (full pill — capsule-shaped), padding 11px × 22px. The full-pill radius IS the brand action signal.

- Active state: `{component.button-primary-active}` — `transform: scale(0.95)` (the system-wide micro-interaction).
- Focus state: `{component.button-primary-focus}` — 2px solid `{colors.primary}` outline.

**`button-secondary-pill`** — Used as the second CTA when two teal pills appear together ("Learn more" / "Open"). Background transparent, text `{colors.primary}`, 1px solid `{colors.primary}` border, rounded `{rounded.pill}`, padding 11px × 22px. Reads as a "ghost pill."

**`button-dark-utility`** — Global nav actions (Sign In, Bag). Background `{colors.text}` (#1B2A2B), text `{colors.dark-text}` in `{typography.button-utility}` (14px / 400 / -0.224px tracking), rounded `{rounded.sm}` (8px), padding 8px × 15px. Active state shrinks via `transform: scale(0.95)`.

**`button-pearl-capsule`** — Content-card secondary button. Background `{colors.surface}` (#FFFCF4), text `{colors.text-secondary}` in `{typography.caption}` (14px), 3px solid `{colors.border}` border (functions as a soft ring rather than a visible line), rounded `{rounded.md}` (11px), padding 8px × 14px.

**`button-store-hero`** — A larger primary CTA used on store hero surfaces. Same teal + warm off-white as `{component.button-primary}`, but with `{typography.button-large}` (18px / 300 — note the rare weight 300) and slightly more padding (14px × 28px). Used sparingly on the store landing.

**`button-icon-circular`** — Floats over photography. 44 × 44px, background `{colors.surface-sunken}` at ~64% alpha, icon in `{colors.text}`, rounded `{rounded.full}`. Used for carousel controls, close buttons, and in-image controls.

**`text-link`** — Inline body links in `{colors.primary}` (teal). Underlined or non-underlined per context.

**`text-link-on-dark`** — Inline body links on dark tiles in `{colors.dark-primary}` (#6BB5B0) — `--primary` would lose contrast against `{colors.dark-surface}`.


### Cards & Containers

**`product-tile-light`** — Full-bleed warm off-white tile. Background `{colors.bg}` (#FAF6EC), text `{colors.text}`, rounded `{rounded.none}` (0 — tiles touch edges), vertical padding `{spacing.section}` (80px). Centered stack: headline in `{typography.display-lg}` (40px / 600) → one-line tagline in `{typography.lead}` (28px / 400) → two `{component.button-primary}` CTAs → content render resting on the surface with the system shadow.

**`product-tile-parchment`** — Same as `{component.product-tile-light}` but on `{colors.surface-sunken}` (#F2EBD9). Used to break two consecutive warm-off-white tiles.

**`product-tile-dark`** — Full-bleed dark teal tile. Background `{colors.dark-surface}` (#20302E), text `{colors.dark-text}`, rounded `{rounded.none}`, vertical padding `{spacing.section}` (80px). Same content stack as the light tile but with `{component.text-link-on-dark}` for inline copy and `{component.button-primary}` (teal still works on the dark surface). Used as the alternating dark band.

**`product-tile-dark-2`** — Variant on `{colors.dark-surface}` (#20302E). Used where a dark tile sits directly above or below `{component.product-tile-dark}` — micro-step variation is achieved via opacity rather than a separate hex.

**`product-tile-dark-3`** — Variant on `{colors.dark-bg}` (#142322). Used at the bottom of the stack and in embedded video/player frames.

**`store-utility-card`** — Used in task/store grids. Background `{colors.bg}` (#FAF6EC), 1px solid `{colors.border}` border, rounded `{rounded.lg}` (18px), padding `{spacing.lg}` (24px). Top: content image (1:1 crop with `{rounded.sm}` (8px) inner image radius). Below: name in `{typography.body-strong}` (17px / 600), detail in `{typography.body}` (17px / 400), and a `{component.text-link}`.

**`configurator-option-chip`** — Pill-shaped tappable cell. Background `{colors.bg}`, text `{colors.text}` in `{typography.caption}`, rounded `{rounded.pill}`, padding 12px × 16px. Contains label + optional sublabel. Arranged in a grid of 4–5 options per row.

**`configurator-option-chip-selected`** — Selected state. Border upgrades to 2px solid `{colors.primary}`. Same shape, same content.

**`environment-quote-card`** — A dark editorial hero. Background `{colors.dark-surface}` (#20302E) as the fallback color, centered `{colors.dark-text}` headline in `{typography.display-lg}` (40px), single `{component.button-primary}` below. Padding `{spacing.section}` (80px).

**`floating-sticky-bar`** — Floats at the bottom of the viewport during scroll. Background `{colors.surface-sunken}` (#F2EBD9) at 80% opacity with `backdrop-filter: blur(N)`, height 64px, padding 12px × 32px. Left: running summary in `{typography.body}`. Right: `{component.button-primary}`.


### Inputs & Forms

**`search-input`** — Background `{colors.bg}`, text `{colors.text}` in `{typography.body}` (17px), 1px solid `rgba(0, 0, 0, 0.08)` border, rounded `{rounded.pill}` (full pill — search matches the CTA grammar), padding 12px × 20px, height 44px. Leading icon: search glyph at 14px, `{colors.text-muted}` tint.

Error and validation states are not yet surfaced; see Known Gaps.


### Footer

**`footer`** — Background `{colors.surface-sunken}` (#F2EBD9), text `{colors.text-secondary}`. Link columns in `{typography.dense-link}` (17px / 400 / 2.41 line-height — the relaxed leading is what makes the dense columns scannable). Column headings in `{typography.caption-strong}` (14px / 600). Legal row at the very bottom in `{typography.fine-print}` (12px / 400) with `{colors.text-muted}` text. Vertical padding 64px.


## Do's and Don'ts

### Do

- Use `{colors.primary}` (teal `--primary #2F6E70`) for every interactive element — links, pill CTAs, focus signals — and nothing else. The single teal accent is non-negotiable.

- Set headlines in `{typography.hero-display}` or `{typography.display-lg}` with negative letter-spacing (`-0.28 → -0.374px`) to get the signature "Apple tight" cadence.

- Run body copy at `{typography.body}` (17px / 400 / 1.47 / -0.374px) — not 16px. The extra pixel defines the brand's reading pace.

- Alternate `{component.product-tile-light}` (or parchment) and `{component.product-tile-dark}` for full-bleed section rhythm. The color change IS the divider.

- Reserve `{rounded.pill}` for the primary teal CTA and any other element that should read as an "action" (configurator chips, search input, sticky bar CTA).

- Apply the single product-shadow (`rgba(0, 0, 0, 0.22) 3px 5px 30px`) only to product renders resting on a surface — never on cards, buttons, or text.

- Use `transform: scale(0.95)` as the active/press state on every button — it's the system-wide micro-interaction.

- Keep the global nav `{colors.dark-bg}` (#142322) — it is the only place the deepest teal-ink appears as a full-bleed bar.

- Use `--gold-on-dark #E8C56A` sparingly on dark surfaces as the single luminous accent — a gold badge, a highlight mark, the "priority" signal.


### Don't

- **Don't use pure white (#ffffff) as a background.** Use `--bg #FAF6EC` instead. The warmth of off-white is non-negotiable to this palette.

- **Don't use `--gold-fill #E8C56A` as text or icon color on light surfaces** — it loses contrast against `--bg`. Use `--gold-text #8A5E12` for text on light surfaces, and `--gold-on-dark #E8C56A` only on dark surfaces.

- **Don't use `--gold-deco #B8862F` in body text or interactive labels** — it falls below 4.5:1 on `--bg`. Decorative marks only.

- **Don't add a third derived color beyond terracotta and indigo** — two derived hues keep the palette harmonious. Any third would break the balance with the base imagery.

- **Don't increase the saturation of state colors** — the muted quality of terracotta and indigo is intentional. Over-saturating them breaks the calm, editorial tone.

- Don't introduce a second interactive accent color; every "click me" signal is `{colors.primary}` (teal `--primary #2F6E70`).

- Don't add shadows to cards, buttons, or text — shadow is reserved for product imagery.

- Don't use gradients as decorative backgrounds; atmosphere comes from photography and surface alternation.

- Don't set body copy at weight 500 — the ladder is 300 / 400 / 600 / 700, with 500 deliberately absent. Body is always 400; strong inline is 600; display is 600.

- Don't round full-bleed tiles — tiles are rectangular and edge-to-edge; the color change is the divider.

- Don't tighten line-height below 1.47 for body copy — the editorial leading is part of the brand.

- Don't mix radii grammars — use `{rounded.sm}` for compact utility, `{rounded.lg}` for utility cards, `{rounded.pill}` for pills, and nothing in between (except the rare `{rounded.md}` Pearl Button).

- Don't use `{colors.dark-primary}` (#6BB5B0) on light surfaces — it's the dark-tile-only variant. Teal `--primary` is for light surfaces.


## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Single-column tiles; sub-nav collapses to category name + primary CTA only; hero typography drops to 28px |
| Phone | 420–640px | Single-column stack; product renders scale to 80% of tile width; hero h1 drops to 34px |
| Large phone | 641–735px | Tiles transition to tighter padding (48px vertical vs 80px); fine-print wraps |
| Tablet portrait | 736–833px | Global nav collapses to hamburger; sub-nav hides category chips, keeps primary CTA |
| Tablet landscape | 834–1023px | Global nav returns fully expanded; 3-column utility grids become 2-column |
| Small desktop | 1024–1068px | Content tiles use 2/3 width with margin gutters; hero h1 stays at 40px |
| Desktop | 1069–1440px | Full layout; 4–5 column store grids; 1440px content max |
| Wide desktop | ≥ 1441px | Content locks at 1440px, margins absorb extra width |

The structural breakpoints that matter for agents: 1440px (content lock), 1068px (small-desktop), 833px (tablet landscape switch), 734px (tablet portrait), 640px (phone), 480px (small phone).


### Touch Targets

- Minimum 44 × 44px. `{component.button-primary}` lands at ~44 × 100px (with the full-pill radius making the visible hit area more generous than the label suggests).

- `{component.button-icon-circular}` is exactly 44 × 44px.

- Global nav utility links are smaller (~32 × 80px) — they deliberately sit at a tighter target because they're precision desktop actions, and the mobile hamburger replaces them at ≤ 833px.


### Collapsing Strategy

- **Global nav**: full horizontal link row on desktop → collapses to logo + hamburger + bag icon at 834px and below.

- **Sub-nav**: category name + inline links + primary CTA → category name + primary CTA only at mobile; inline links move into a hamburger tray.

- **Content tiles**: stack from 2-column to 1-column at 834px; vertical padding tightens from 80px → 48px at small-phone.

- **Utility grids** (store, task): 5-col → 4-col (1440px) → 3-col (1068px) → 2-col (834px) → 1-col (640px).

- **Hero typography**: `{typography.hero-display}` (56px) → `{typography.display-lg}` (40px) at 1068px → 34px at 640px → 28px at 419px.


### Image Behavior

- All product imagery uses responsive `srcset` with breakpoint-matched crops.

- Hero photography may switch art direction at mobile (e.g., a vista crops to a taller aspect ratio on mobile, framing the subject differently).

- Product renders maintain their 1:1 or 4:3 aspect ratios across breakpoints; only scale changes.

- Lazy-loading is default; the above-fold hero loads eagerly.


## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.product-tile-dark}`, `{component.search-input}`).

2. Variants of an existing component (`-active`, `-focus`, `-2`, `-3`) live as separate entries in `components:`.

3. Use `{token.refs}` everywhere — never inline hex.

4. Never document hover. Default and Active/Pressed states only.

5. Display headlines stay SF Pro Display 600 with negative letter-spacing. Body stays SF Pro Text 400 at 17px. The boundary is unbreakable.

6. The single product-shadow (`rgba(0, 0, 0, 0.22) 3px 5px 30px`) is reserved for product photography only. `--gold-on-dark` luminosity is the only other elevation signal.

7. When in doubt about emphasis: alternate surface (warm off-white → deep teal-ink tile) before adding chrome.


## Known Gaps

- Form validation and error states were not surfaced on the analyzed pages; only the neutral search input is documented.

- The embedded video/player frame uses `{colors.dark-bg}`; interior player controls are not documented (they're a platform widget, not a design token).

- Some component imagery is dynamic and its specific copy varies per surface — component specs name the structure, not the rotating content.

- Dark-mode counterparts for store and utility cards were not surfaced in the base analysis; the system documented is the daytime/light-dominant variant. Dark-mode mappings use the `--dark-*` token family.

- Atmospheric photography (editorial page vista) is a content asset, not a design token; the documented `{component.environment-quote-card}` describes the structural surface only.

- The exact backdrop-filter blur radius on `{component.sub-nav-frosted}` and `{component.floating-sticky-bar}` is platform-dependent; production CSS uses `saturate(180%) blur(20px)` as a typical baseline but the value isn't formalized as a token.

- Status badge components (未着手/進行中/保留/要対応/期限超過/完了) are color-specified in the Colors section but their full YAML component entries are not yet defined.
