#!/usr/bin/env node
/*
 * check-design.mjs — Tomoshibi 契約の機械チェック（仕組みとしての評価）
 *
 * 「ルールを文章で書く」のでなく「破ったらビルドが赤くなる」を実装する。
 * verify の一部として走り、design/DESIGN.md の absolute_rules のうち
 * grep 可能なものを決定的に照合する（= WS5 で実際に起きた違反を捕まえる）。
 *
 * チェック内容:
 *   1. hex 整合: design/DESIGN.md の colors と scaffold/src/styles/tokens.css の :root が一致するか
 *   2. ソース違反: 製品 UI コード（scaffold/src, app/src）に以下が無いか
 *        - #FFFFFF / #FFF（純白禁止 — rule 1/4）
 *        - font-serif（UI 見出しに明朝禁止 — rule 4）
 *        - max-w-2xl 以上の中央寄せ（パネル≥2 は app shell — rule 11）
 *
 * 逃げ道（柔軟性を殺さない）:
 *   - mvp/ poc/ は対象外（使い捨てレーン）
 *   - 行末に `design-ok` コメントがあればその行はスキップ（意図的な例外）
 *
 * 意味的ルール（gold の文脈・沈み面の影など grep 不可）は対象外＝人間 taste が拾う。
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DESIGN_MD = join(ROOT, "design", "DESIGN.md");
const TOKENS_CSS = join(ROOT, "scaffold", "src", "styles", "tokens.css");
const SRC_DIRS = ["scaffold/src", "app/src"]; // 製品 UI コード（生成プロジェクトでも同構造）

const errors = [];
const note = (msg) => errors.push(msg);

// DESIGN.md → tokens.css のトークン名対応（shadcn 名へ）。未記載は同名で比較。
const NAME_MAP = { bg: "background", surface: "card", text: "foreground" };

// ── 1. hex 整合 ─────────────────────────────────────────────
function parseDesignColors(md) {
  const block = md.split(/\ncolors:/)[1]?.split(/\n[a-z_]+:/)[0] ?? "";
  const map = {};
  for (const line of block.split("\n")) {
    const m = line.match(/^\s*--([\w-]+):\s*"(#[0-9A-Fa-f]{3,8})"/);
    if (m) map[m[1]] = m[2].toLowerCase();
  }
  return map;
}
function parseTokensRoot(css) {
  const root = css.split(/:root\s*\{/)[1]?.split(/\}/)[0] ?? "";
  const map = {};
  for (const line of root.split("\n")) {
    const m = line.match(/^\s*--([\w-]+):\s*(#[0-9A-Fa-f]{3,8})\s*;/);
    if (m) map[m[1]] = m[2].toLowerCase();
  }
  return map;
}

if (!existsSync(DESIGN_MD)) note(`design/DESIGN.md が見つかりません`);
if (!existsSync(TOKENS_CSS)) note(`scaffold/src/styles/tokens.css が見つかりません`);

if (existsSync(DESIGN_MD) && existsSync(TOKENS_CSS)) {
  const design = parseDesignColors(readFileSync(DESIGN_MD, "utf8"));
  const tokens = parseTokensRoot(readFileSync(TOKENS_CSS, "utf8"));
  let checked = 0;
  for (const [name, hex] of Object.entries(design)) {
    const tname = NAME_MAP[name] ?? name;
    if (!(tname in tokens)) continue; // 片方にしかない語彙は照合対象外
    checked++;
    if (tokens[tname] !== hex) {
      note(
        `hex ズレ: DESIGN.md --${name} ${hex} ≠ tokens.css --${tname} ${tokens[tname]}`,
      );
    }
  }
  // --surface は --card だけでなく --popover とも一致すべき
  if (design.surface && tokens.popover && tokens.popover !== design.surface) {
    note(
      `hex ズレ: DESIGN.md --surface ${design.surface} ≠ tokens.css --popover ${tokens.popover}`,
    );
  }
  if (checked === 0) note(`hex 照合: 一致トークンを1つも抽出できず（パーサ要確認）`);
}

// ── 2. ソース違反（grep）────────────────────────────────────
const RULES = [
  { re: /#FFFFFF\b|#FFF\b/i, msg: "純白 #FFFFFF（rule 1/4: 地は --background / 面は --card）" },
  { re: /\bfont-serif\b/, msg: "font-serif（rule 4: UI 見出しは sans 既定。明朝は brand/reading のみ）" },
  { re: /\bmax-w-(?:2xl|3xl|4xl|5xl|6xl|7xl|screen)/, msg: "中央寄せ max-w-2xl+（rule 11: パネル≥2 は app shell。読み物は max-w-content）" },
];
// className を"適用"する層だけ見る。.css（トークン/ユーティリティの"定義"層）は
// hex 整合チェックが担当するので、ここでは見ない（font-serif の定義を誤検知しないため）。
const EXT = new Set([".tsx", ".jsx", ".ts", ".js"]);
const SKIP_DIR = new Set(["node_modules", "dist", ".git", "mvp", "poc"]);

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIR.has(entry)) continue;
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (EXT.has(p.slice(p.lastIndexOf(".")))) scan(p);
  }
}
function scan(file) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    if (line.includes("design-ok")) return; // 意図的例外
    const code = line.replace(/\/\/.*$/, "").replace(/\/\*.*?\*\//g, ""); // 行コメント除去
    for (const rule of RULES) {
      if (rule.re.test(code)) {
        note(`${relative(ROOT, file)}:${i + 1}  ${rule.msg}`);
      }
    }
  });
}
for (const d of SRC_DIRS) {
  const abs = join(ROOT, d);
  if (existsSync(abs)) walk(abs);
}

// ── 結果 ────────────────────────────────────────────────────
if (errors.length) {
  console.error(`\n✗ design 契約違反 ${errors.length} 件 (design/DESIGN.md):`);
  for (const e of errors) console.error(`  - ${e}`);
  console.error(`\n  意図的な例外は行末に \`design-ok\` を付けるか mvp/ poc/ へ。\n`);
  process.exit(1);
}
console.log("✓ design 契約 OK（hex 整合 + grep ルール）");
