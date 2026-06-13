# DESIGN.md — Ver.2（画像に忠実: ティール濃淡 + ゴールド1色。状態は明度+アイコンで区別）

このドキュメントは **Apple DESIGN.md の構造（タイポグラフィ・余白・角丸・レイアウト・影哲学・レスポンシブ）をそのまま保ちながら、色システムだけを Ver.2 パレット（ティール濃淡 + ゴールド1色）へ差し替えた**設計仕様です。
元画像（ティールの闇とゴールドの光）の空気感を最優先とし、色相での状態区別を持たないかわりに明度とアイコン・ラベルで状態を表現します。
純白（`#FFFFFF`）背景は禁止。ゴールドは「点（光源）」として使い、面（カード・帯）には使いません。

---

---

version: alpha

name: Ver2-teal-gold-design

description: A photography-first interface that turns work management into a focused canvas. Edge-to-edge content tiles alternate warm off-white and deep teal-ink canvases, framed by SF Pro Display headlines with negative letter-spacing and a single teal accent (`--primary #2F6E70` — 水面のティール) interactive color. UI chrome recedes so content can speak — no decorative gradients, no shadows on chrome. The only luminous moment is `--gold-on-dark #E8C56A` glowing like moonlight on dark surfaces.

colors:

  primary: "#2F6E70"

  primary-hover: "#265A5C"

  on-primary: "#FAF6EC"

  text: "#1B2A2B"

  text-secondary: "#4A6968"

  text-muted: "#5A7D7B"

  border: "#D8CFB6"

  border-strong: "#5A7D7B"

  bg: "#FAF6EC"

  surface: "#FFFCF4"

  surface-sunken: "#F2EBD9"

  gold-text: "#8A5E12"

  gold-fill: "#E8C56A"

  gold-deco: "#B8862F"

  dark-bg: "#142322"

  dark-surface: "#20302E"

  dark-text: "#ECE6D2"

  dark-text-secondary: "#9FBDB8"

  dark-primary: "#6BB5B0"

  gold-on-dark: "#E8C56A"


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

    backgroundColor: "{colors.border}"

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

    backgroundColor: "{colors.surface}"

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

    backgroundColor: "{colors.surface}"

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


## Overview

This is a content-first interface that turns work management into a focused canvas. Every page is a stack of edge-to-edge content "tiles" — alternating warm off-white `--bg #FAF6EC` 昼地 ⇄ 深いティール墨 `--dark-bg #142322` の夜面, each centered on a hero headline, a one-line tagline, two tiny teal pill CTAs, and clear typographic hierarchy. Nothing competes with the content. Typography is confident but quiet; color is either a warm off-white, a sunken parchment, or a deep teal-ink tile; interactive elements are a single, quiet teal (`--primary #2F6E70`). **Pure white (`#FFFFFF`) is forbidden** — it reads cold and lifts off the surface.

Density is unusually low even by contemporary SaaS standards. Each tile occupies roughly one viewport, and there is no decorative chrome — no borders, no gradients, no decorative frames, no shadows on headlines. The single luminous moment in the entire system is `--gold-on-dark #E8C56A` glowing like moonlight on the dark surface — exactly one light source, used sparingly. The result is a catalog that feels more like a museum gallery: the wall disappears and the artifact takes over.

Store and work surfaces retain the same chassis but switch modes. The configurator introduces a tight grid of warm surface cards at `{rounded.lg}` (18px) radius with a thin border, paired with a persistent thin sub-nav strip. The environment page leans darker and more editorial. Across all surfaces the typographic system, spacing rhythm, and the single teal accent are consistent — this is one design language expressed at different volumes.

**Key Characteristics:**

- Content-first presentation; UI recedes so the work can speak.

- Alternating full-bleed tile sections: warm off-white/parchment ↔ deep teal-ink, with the color change itself acting as the section divider.

- Single teal accent (`{colors.primary}` — `--primary #2F6E70`) carries every interactive element. No second brand color exists on light surfaces.

- Two button grammars: tiny teal pill CTAs (`{rounded.pill}`) and compact utility rects (`{rounded.sm}`).

- SF Pro Display + SF Pro Text — negative letter-spacing at display sizes for the signature tight headline feel.

- The only luminous elevation: `--gold-on-dark #E8C56A` on dark surfaces, like moonlight through water. Exactly one light source in the system.

- Tight two-row nav: slim `{component.global-nav}` + content-specific `{component.sub-nav-frosted}` with persistent right-aligned primary CTA.

- Section rhythm: warm light hero → dark teal tile → light utility tile → dark tile → parchment footer — a predictable pulse.


## Colors

> **Source:** Ver.2 パレット（A案: 画像に忠実 / ティール濃淡 + ゴールド1色）。色システムは全面で統一。ライトモードとダークモードで同じトークンセットを使い分ける。

### 1. 基本トークン（ライトモード）

| トークン | 用途 | Hex | コントラスト |
|---|---|---|---|
| `--bg` | ページ背景（最も明るい） | `#FAF6EC` | — |
| `--surface` | カード面（わずかに持ち上げ） | `#FFFCF4` | — |
| `--surface-sunken` | 入力欄・くぼみ | `#F2EBD9` | — |
| `--text` | 本文・主役（=元の闇） | `#1B2A2B` | 13.8:1 / bg (AAA) |
| `--text-secondary` | 補助テキスト | `#4A6968` | 5.5:1 / bg (AA) |
| `--text-muted` | ヒント（18px以上のみ） | `#5A7D7B` | 4.2:1 / bg（大字AA） |
| `--primary` | リンク・主ボタン・フォーカス | `#2F6E70` | 5.4:1 / bg (AA) |
| `--primary-hover` | ホバー時 | `#265A5C` | — |
| `--on-primary` | ティール面の上の文字 | `#FAF6EC` | 5.4:1 / primary (AA) |
| `--border` | 通常の境界線 | `#D8CFB6` | — |
| `--border-strong` | 強調境界・区切り | `#5A7D7B` | — |

### 2. ゴールドの3分割ルール（最重要）

金は「どこに置くか」で別トークンになります。混ぜると必ず事故ります。

| トークン | 使ってよい場所 | Hex | 根拠 |
|---|---|---|---|
| `--gold-text` | 明るい面の上の**文字・アイコン** | `#8A5E12` | bg上 5.3:1 (AA)。明るい金は白地で読めないため沈めた値 |
| `--gold-fill` | バッジ等の**塗り**、および暗い面の上 | `#E8C56A` | 塗りとして / 暗い面で発光 |
| `--gold-deco` | **非テキスト**の装飾のみ（大字・罫・図形） | `#B8862F` | bg上 3.0:1。文字には不可、装飾専用 |

- 金のバッジ（明るい面）: 地 `#FAEED9` × 文字 `--gold-text #8A5E12`（5.0:1 AA）。
- **禁止:** `#E8C56A` を白〜オフホワイト背景の文字に使う。`#B8862F` を本文に使う。

### 3. 暗い面・ダークモード（`#E8C56A` の本来の出番）

ライトテーマでも、意図的に暗くする箇所（グローバルナビ、通知トースト、強調カード、ダークモード）を作ります。**ここが明るい金 `#E8C56A` の居場所**です。

| トークン | 用途 | Hex | コントラスト |
|---|---|---|---|
| `--dark-bg` | 暗い面の地（トースト/ナビ/ダーク背景） | `#142322` | — |
| `--dark-surface` | 暗い面のカード | `#20302E` | — |
| `--dark-text` | 暗い面の文字 | `#ECE6D2` | 13.0:1 / dark-bg (AAA) |
| `--dark-text-secondary` | 暗い面の補助 | `#9FBDB8` | — |
| `--dark-primary` | 暗い面のティールアクセント | `#6BB5B0` | 6.9:1 / dark-bg (AA) |
| `--gold-on-dark` | 暗い面の金（光って見える） | `#E8C56A` | 9.8:1 / dark-bg (AAA) |

> 同じ金でも、明るい面では `#8A5E12`、暗い面では `#E8C56A`。背景の明度で逆転するのが金の性質です。

**Ver.2 は派生色（テラコッタ・インディゴ等）を持たない。** ティール濃淡とゴールド1色のみ。2つ目の青が必要な場合は `--dark-primary #6BB5B0` に統合する。


## 仕事コンポーネントの状態色（Ver.2 = 濃淡 + 金1色）

> **想定した状態**（プロジェクトに合わせて増減してください）: 未着手 / 進行中 / 保留 / 要対応 / 期限超過 / 完了

A案はティールの明度差で並べ、**ゴールドは最重要の1状態（要対応）だけ**に割り当てます。塗りが濃いほど「重い・急ぎ」、淡いほど「収まっている・完了」を表現します。

| 状態 | 地色（fill） | 文字色 | コントラスト | 強さ |
|---|---|---|---|---|
| 未着手 | `#D5E0DD` | `#233A39` | 9.0:1 (AAA) | 弱 |
| 進行中 | `#B0C6C2` | `#142322` | 9.0:1 (AAA) | 中 |
| 保留 | `#DCD9CF`（灰寄り） | `#4A4A45` | 6.3:1 (AA) | 中・休止 |
| **要対応** | `#FAEED9`（**金**） | `#8A5E12` | 5.0:1 (AA) | **強・唯一の金** |
| 期限超過 | `#233A39`（最暗） | `#EAF0EE` | 10.5:1 (AAA) | 最強 |
| 完了 | `#EAF0EE`（最淡） | `#3F5E5D` | 6.1:1 (AA) | 最弱・後退 |

### ⚠ A案の重要な制約（必読）

この案は**色相での区別をほぼ捨てています。**「進行中」と「未着手」はどちらもティールで、明度差だけです。色覚特性のある利用者や、淡い画面・暗所では見分けがつきません。

そのため A案を採るなら、**各状態に必ずアイコンとテキストラベルを付けること**を仕様として強制してください（色だけに意味を持たせない = WCAG 1.4.1 の要件でもあります）。

- 例: `未着手 ○` / `進行中 ◐` / `保留 ⏸` / `要対応 !` / `期限超過 ⚠` / `完了 ✓`

色相で状態を一目で見分けたいなら、Ver.2 ではなく **B案**を選んでください。


## Typography

### Font Family

- **Display**: `SF Pro Display, system-ui, -apple-system, sans-serif` — Apple's proprietary display face, optimized for sizes ≥ 19px. Defines the voice of every headline.

- **Body / UI**: `SF Pro Text, system-ui, -apple-system, sans-serif` — the text-optimized variant used for body copy, captions, buttons, and links below 20px.

- **OpenType features**: `font-variant-numeric: numerator` is enabled on numeric links (pricing tables, spec sheets). Display sizes rely on tight tracking rather than contextual ligatures.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 56px | 600 | 1.07 | -0.28px | Hero headline; the signature tight tracking |
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

- **Negative letter-spacing at display sizes.** Every headline at 17px and up carries a slight tracking tighten (`-0.12 → -0.374px`). This produces the iconic tight headline cadence. Never used at 12px or below.

- **Body copy at 17px, not 16px.** The extra pixel gives the page an unmistakable "reading, not scanning" pace.

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

- **Universal rhythm constants:** the 17px body line-height multiplier (~25px line) and 21px tagline size show up on every analyzed page.

### Grid & Container

- **Max content width:** ~980px on text-heavy sections (environment), ~1440px on content grids (store, accessories), full-bleed for content tiles (homepage).

- **Column patterns:** 3 to 5 column utility card grid on store/accessories; 2-column side-by-side tiles on occasional sections; single-column centered stack on content tile heroes.

- **Gutters:** 20–24px between cards in a utility grid.

### Whitespace Philosophy

Whitespace is the content's pedestal. Every tile begins with at least 64px of air above its headline and 48–64px below. Content renders are never crowded; the nearest content to a primary image is at least 40px away. The footer is the only area that breaks this — there, the design goes deliberately dense to make the full information architecture visible at a glance.


## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Full-bleed tiles, global nav, footer, body sections |
| Soft hairline | 1px `rgba(0, 0, 0, 0.08)` border | Utility cards, sub-nav frosted-glass separator |
| Backdrop blur | `backdrop-filter: blur(N)` on `--surface-sunken` 80% | Sub-nav and floating sticky bar |
| Product shadow | `rgba(0, 0, 0, 0.22) 3px 5px 30px 0` | Product renders resting on a surface (the only true "shadow" in the system) |

**Shadow philosophy — 唯一の立体感は影ではなく『光』。** The single luminous moment is `--gold-on-dark #E8C56A` glowing like moonlight on dark surfaces — exactly one light source. Shadows are never applied to cards, buttons, or text. Elevation in the UI comes from (a) surface-color change (warm light tile ↔ deep teal-ink dark tile) and (b) backdrop-blur on sticky bars. The product shadow (`rgba(0, 0, 0, 0.22) 3px 5px 30px`) exists only to give imagery physical weight — never UI hierarchy.

### Decorative Depth

- **Atmospheric imagery** on the environment page supplies mood; no CSS gradient involved.

- **Edge-to-edge tile alternation** between `--bg #FAF6EC` and `--dark-bg #142322` creates rhythm without borders or shadows — the color change itself is the divider.

- **Backdrop-filter blur** on `{component.sub-nav-frosted}` and `{component.floating-sticky-bar}` creates a "floating over content" effect that's functional, not decorative.


## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed content tiles (no corner rounding) |
| `{rounded.xs}` | 5px | Inline links when styled as subtle chips (rare) |
| `{rounded.sm}` | 8px | Dark utility buttons (Sign In, Bag), inline card imagery |
| `{rounded.md}` | 11px | Surface capsule secondary buttons |
| `{rounded.lg}` | 18px | Store utility cards, accessories grid cards |
| `{rounded.pill}` | 9999px | Primary teal pill CTAs, sub-nav buy button, configurator option chips, search input — the signature pill |
| `{rounded.full}` | 9999px / 50% | Circular control chips floating over photography |

### Photography Geometry

- **Hero imagery**: full-bleed, 21:9 or taller on the homepage; 16:9 on environment and shop pages. Product renders are photographic-realistic, often shot on a tinted surface that becomes the tile background.

- **Product renders**: PNG/WebP with transparency; rest on a surface tile and pick up the system shadow.

- **Accessory grid**: square 1:1 crops at `{rounded.lg}` (18px) radius, warm neutral backgrounds, product centered with 20–40px internal padding.

- **No rounded imagery in hero tiles** — images are full-bleed rectangular. Rounding (`{rounded.sm}`, `{rounded.lg}`) appears only on inline card imagery.

- Lazy-loading via responsive `srcset` and `sizes` across all breakpoints; CDN-optimized WebP.


## Components

### Top Navigation

**`global-nav`** — Persistent, ultra-thin deep teal-ink nav bar pinned to the top of every page. Background `{colors.dark-bg}` (`--dark-bg #142322`), height 44px, text `{colors.dark-text}` (`--dark-text #ECE6D2`) in `{typography.nav-link}` (12px / 400 / -0.12px tracking). Links are quiet, spaced ~20px apart, running edge-to-edge across the top. Right-aligned cluster: Search, Bag icons — always visible. On mobile, collapses to hamburger at ~834px and the logo centers. Gold accent (`--gold-on-dark #E8C56A`) may appear here as the lone luminous signal if a global notice needs emphasis.

**`sub-nav-frosted`** — Surface-specific nav that sticks below the global nav. Background `{colors.surface-sunken}` (`--surface-sunken #F2EBD9`) at 80% opacity with backdrop-filter blur, creating a frosted-parchment effect. Height 52px. Content on left: category name in `{typography.tagline}` (21px / 600), text `{colors.text}`. Content right: inline nav links in `{typography.button-utility}` (14px), ending in a persistent `{component.button-primary}` ("Buy" or "Add").

### Buttons

**`button-primary`** — The signature action. Background `{colors.primary}` (水面のティール `--primary #2F6E70`), text `{colors.on-primary}` in `{typography.body}` (SF Pro Text 17px / 400), rounded `{rounded.pill}` (full pill — capsule-shaped), padding 11px × 22px. The full-pill radius IS the brand action signal.

- Active state: `{component.button-primary-active}` — `transform: scale(0.95)` (the system-wide micro-interaction).

- Focus state: `{component.button-primary-focus}` — 2px solid `{colors.primary}` outline.

**`button-secondary-pill`** — Used as the second CTA when two teal pills appear together ("Learn more" / "Buy"). Background `{colors.bg}` (`--bg #FAF6EC`), text `{colors.primary}`, 1px solid `{colors.primary}` border, rounded `{rounded.pill}`, padding 11px × 22px. Reads as a "ghost pill."

**`button-dark-utility`** — Global nav actions (Sign In, Bag, language selector). Background `{colors.text}` (`--text #1B2A2B`), text `{colors.dark-text}` in `{typography.button-utility}` (14px / 400 / -0.224px tracking), rounded `{rounded.sm}` (8px), padding 8px × 15px. Active state shrinks via `transform: scale(0.95)`.

**`button-pearl-capsule`** — Secondary button on utility cards. Background `{colors.surface}` (`--surface #FFFCF4`), text `{colors.text-secondary}` in `{typography.caption}` (14px), 3px solid `{colors.border}` border (functions as a soft ring rather than a visible line), rounded `{rounded.md}` (11px), padding 8px × 14px.

**`button-store-hero`** — A larger primary CTA used on store hero surfaces. Same teal + `--on-primary` as `{component.button-primary}`, but with `{typography.button-large}` (18px / 300 — note the rare weight 300) and slightly more padding (14px × 28px). Used sparingly on the store landing.

**`button-icon-circular`** — Floats over photography. 44 × 44px, background `{colors.border}` (`--border #D8CFB6`) at ~64% alpha, icon in `{colors.text}`, rounded `{rounded.full}`. Used for carousel controls, close buttons, and in-image controls.

**`text-link`** — Inline body links in `{colors.primary}` (水面のティール). Underlined or non-underlined per context.

**`text-link-on-dark`** — Inline body links on dark tiles in `{colors.dark-primary}` (`--dark-primary #6BB5B0`) — `--primary #2F6E70` would disappear against `--dark-surface #20302E`.

### Cards & Containers

**`product-tile-light`** — Full-bleed warm light tile. Background `{colors.bg}` (`--bg #FAF6EC` — warm off-white, never pure white), text `{colors.text}`, rounded `{rounded.none}` (0 — tiles touch edges), vertical padding `{spacing.section}` (80px). Centered stack: title in `{typography.display-lg}` (40px / 600) → one-line tagline in `{typography.lead}` (28px / 400) → two `{component.button-primary}` CTAs ("Learn more" / primary action) → product render resting on the surface with the system shadow.

**`product-tile-parchment`** — Same as `{component.product-tile-light}` but on `{colors.surface-sunken}` (`--surface-sunken #F2EBD9`). Used to break two consecutive warm light tiles.

**`product-tile-dark`** — Full-bleed deep teal-ink dark tile. Background `{colors.dark-surface}` (`--dark-surface #20302E`), text `{colors.dark-text}` (`--dark-text #ECE6D2`), rounded `{rounded.none}`, vertical padding `{spacing.section}` (80px). Same content stack as the light tile but with `{component.text-link-on-dark}` for inline copy. `--gold-on-dark #E8C56A` may appear here as the single luminous accent. Used as the alternating dark band.

**`product-tile-dark-2`** — Variant also on `{colors.dark-surface}` (`--dark-surface #20302E`). Used where a dark tile sits directly above or below `{component.product-tile-dark}` — the shared token value provides near-zero visual separation, relying on content structure instead.

**`product-tile-dark-3`** — Variant on `{colors.dark-bg}` (`--dark-bg #142322`). Used at the bottom of the stack and in embedded video/player frames — the deepest dark in the system.

**`store-utility-card`** — Used in store grid and accessories grid. Background `{colors.surface}` (`--surface #FFFCF4`), 1px solid `{colors.border}` (`--border #D8CFB6`) border, rounded `{rounded.lg}` (18px), padding `{spacing.lg}` (24px). Top: product image (1:1 crop with `{rounded.sm}` (8px) inner image radius). Below: product name in `{typography.body-strong}` (17px / 600), price in `{typography.body}` (17px / 400), and a `{component.text-link}` ("Buy" or "Learn more"). No shadow by default; product render itself carries the system product-shadow.

**`configurator-option-chip`** — Pill-shaped tappable cell. Background `{colors.bg}` (`--bg #FAF6EC`), text `{colors.text}` in `{typography.caption}`, rounded `{rounded.pill}`, padding 12px × 16px. Contains a small thumbnail + label + price delta. Arranged in a grid of 4–5 options per row.

**`configurator-option-chip-selected`** — Selected state. Border upgrades to 2px solid `{colors.primary}` (`--primary #2F6E70`). Same shape, same content.

**`environment-quote-card`** — A photographic-canvas hero specific to the environment page. Dark photographic backdrop with `{colors.dark-surface}` (`--dark-surface #20302E`) as the fallback color, centered `{colors.dark-text}` headline in `{typography.display-lg}` (40px), single `{component.button-primary}` below. Padding `{spacing.section}` (80px). `--gold-on-dark #E8C56A` may highlight a single pull-quote or logo here.

**`floating-sticky-bar`** — Floats at the bottom of the viewport during scroll. Background `{colors.surface-sunken}` (`--surface-sunken #F2EBD9`) at 80% opacity with `backdrop-filter: blur(N)`, height 64px, padding 12px × 32px. Left: running price total in `{typography.body}`. Right: `{component.button-primary}`.

### Inputs & Forms

**`search-input`** — Background `{colors.surface}` (`--surface #FFFCF4`), text `{colors.text}` in `{typography.body}` (17px), 1px solid `{colors.border}` (`--border #D8CFB6`) border, rounded `{rounded.pill}` (full pill — search is also pill-shaped, matching the CTA grammar), padding 12px × 20px, height 44px. Leading icon: search glyph at 14px in `{colors.text-muted}`.

Error and validation states were not surfaced in the analyzed pages.

### Footer

**`footer`** — Background `{colors.surface-sunken}` (`--surface-sunken #F2EBD9`), text `{colors.text-secondary}` (`--text-secondary #4A6968`). Link columns in `{typography.dense-link}` (17px / 400 / 2.41 line-height — the relaxed leading is what makes the dense columns scannable). Column headings in `{typography.caption-strong}` (14px / 600). Legal row at the very bottom in `{typography.fine-print}` (12px / 400) with `{colors.text-muted}` text. Vertical padding 64px.


## Do's and Don'ts

### Do

- Use `{colors.primary}` (水面のティール `--primary #2F6E70`) for every interactive element — links, pill CTAs, focus signals — and nothing else. The single teal accent is non-negotiable.

- Set headlines in `{typography.hero-display}` or `{typography.display-lg}` with negative letter-spacing (`-0.28 → -0.374px`) to get the signature tight cadence.

- Run body copy at `{typography.body}` (17px / 400 / 1.47 / -0.374px) — not 16px. The extra pixel defines the brand's reading pace.

- Alternate `{component.product-tile-light}` (or parchment) and `{component.product-tile-dark}` for full-bleed section rhythm. The color change IS the divider.

- Reserve `{rounded.pill}` for the primary teal CTA and any other element that should read as an "action" (configurator chips, search input, sticky bar CTA).

- Apply the single product-shadow (`rgba(0, 0, 0, 0.22) 3px 5px 30px`) only to product renders resting on a surface — never on cards, buttons, or text.

- Use `transform: scale(0.95)` as the active/press state on every button — it's the system-wide micro-interaction.

- Keep the global nav `{colors.dark-bg}` (`--dark-bg #142322`) — it's the only place the deepest dark appears on most pages.

- Use `--gold-on-dark #E8C56A` only on dark surfaces (`--dark-bg` / `--dark-surface`) as the single luminous accent. This is gold's true home.

- Attach icon + text label to every status badge (WCAG 1.4.1): `未着手 ○` / `進行中 ◐` / `保留 ⏸` / `要対応 !` / `期限超過 ⚠` / `完了 ✓`.

### Don't

- **Don't use pure white (`#FFFFFF`) as a background.** It reads cold and lifts off the warm surface. Use `--bg #FAF6EC` instead.

- Don't introduce a second accent color; every "click me" signal is `{colors.primary}` (水面のティール `--primary #2F6E70`).

- Don't use `--gold-fill #E8C56A` on light (`--bg` / `--surface`) backgrounds as text or large fills — it reads washed-out. Use `--gold-text #8A5E12` for text on light surfaces.

- Don't use `--gold-deco #B8862F` in body text — it sits at 3.0:1 contrast. Decorative non-text elements only.

- Don't paint cards or full-bleed bands gold. Gold is a point of light (badge, icon, single accent), never a surface.

- Don't represent status by color alone — always pair color with icon + text label (WCAG 1.4.1).

- Don't add shadows to cards, buttons, or text — shadow is reserved for product imagery.

- Don't use gradients as decorative backgrounds; atmosphere comes from photography.

- Don't set body copy at weight 500 — the ladder is 300 / 400 / 600 / 700, with 500 deliberately absent. Body is always 400; strong inline is 600; display is 600.

- Don't round full-bleed tiles — tiles are rectangular and edge-to-edge; the color change is the divider.

- Don't tighten line-height below 1.47 for body copy — the editorial leading is part of the brand.

- Don't mix radii grammars — use `{rounded.sm}` for compact utility, `{rounded.lg}` for utility cards, `{rounded.pill}` for pills, and nothing in between (except the rare `{rounded.md}` capsule button).

- Don't use `{colors.dark-primary}` (`--dark-primary #6BB5B0`) on light surfaces — it's the dark-tile-only variant. `--primary #2F6E70` is for light surfaces.


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

- **Utility grids** (store, accessories): 5-col → 4-col (1440px) → 3-col (1068px) → 2-col (834px) → 1-col (640px).

- **Hero typography**: `{typography.hero-display}` (56px) → `{typography.display-lg}` (40px) at 1068px → 34px at 640px → 28px at 419px.

### Image Behavior

- All product imagery uses responsive `srcset` with breakpoint-matched crops.

- Hero photography may switch art direction at mobile (e.g., the environment page's vista crops to a taller aspect ratio on mobile, framing the subject differently).

- Product renders maintain their 1:1 or 4:3 aspect ratios across breakpoints; only scale changes.

- Lazy-loading is default; the above-fold hero loads eagerly.


## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.product-tile-dark}`, `{component.search-input}`).

2. Variants of an existing component (`-active`, `-focus`, `-2`, `-3`) live as separate entries in `components:`.

3. Use `{token.refs}` everywhere — never inline hex.

4. Never document hover. Default and Active/Pressed states only.

5. Display headlines stay SF Pro Display 600 with negative letter-spacing. Body stays SF Pro Text 400 at 17px. The boundary is unbreakable.

6. The single product-shadow (`rgba(0, 0, 0, 0.22) 3px 5px 30px`) is reserved for product photography only. The only luminous UI moment is `--gold-on-dark #E8C56A` on dark surfaces.

7. When in doubt about emphasis: alternate surface (warm light tile → deep teal-ink dark tile) before adding chrome.


## Known Gaps

- Form validation and error states were not surfaced on the analyzed pages; only the neutral search input is documented.

- The homepage's embedded video/player frame uses `{colors.dark-bg}` (`--dark-bg #142322`); interior player controls are not documented (they're a platform widget, not a web-design token).

- Some component content is dynamic (rotating product hero) and its specific copy varies per surface — component specs name the structure, not the rotating content.

- Dark-mode counterparts for store and accessories utility cards were not surfaced on the analyzed pages; the system documented is the daytime/light-dominant variant shipped by default.

- Atmospheric photography (environment page mountain vista) is a content asset, not a design token; the documented `{component.environment-quote-card}` describes the structural surface only.

- The exact backdrop-filter blur radius on `{component.sub-nav-frosted}` and `{component.floating-sticky-bar}` is platform-dependent; production CSS uses `saturate(180%) blur(20px)` as a typical baseline but the value isn't formalized as a token.

- Ver.2 does not define tertiary / derived accent colors (terracotta, indigo, etc.). If a third semantic color is ever needed, the preferred pattern is to add a new token rather than repurpose an existing teal shade.
