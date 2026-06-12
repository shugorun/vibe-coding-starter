// validate.cjs — vibe-coding-starter の機械検証（クロスプラットフォーム / Node / 依存なし）。
// /checkpoint・/wrapup-project から呼ばれる。FAIL がある間は commit しない。
//
// 検査:
//   1. 相対リンク切れ — docs/**/*.md + ルート直下 *.md + mvp/poc/app の README.md の [text](path) を実体照合
//   2. 行数上限 — CAPS と checkLineCounts() が唯一の正（常時ロード合計・SKILL.md は同関数内）
//   3. DECISIONS.md 行書式 — 「## ログ」以降の非空行は `- YYYY-MM-DD ` で始まる
//   4. git dirty なのに docs/STATE.md が差分に無い → FAIL（--skip-state-check で免除。
//      /checkpoint は STATE を毎回上書きするため、checkpoint 経由なら必ず差分に入る）
//
// 終了コード: 0 = 全 PASS / 1 = FAIL あり

const { execSync } = require("node:child_process");
const { existsSync, readdirSync, readFileSync } = require("node:fs");
const { join, dirname, resolve, relative } = require("node:path");

const repoRoot = join(__dirname, "..", "..");
const skipStateCheck = process.argv.slice(2).includes("--skip-state-check");

let hasFailure = false;
const results = [];
function pass(msg) { results.push(`  PASS  ${msg}`); }
function warn(msg) { results.push(`  WARN  ${msg}`); }
function fail(msg) { results.push(`  FAIL  ${msg}`); hasFailure = true; }

function rel(absPath) { return relative(repoRoot, absPath).replace(/\\/g, "/"); }

function countLines(filePath) {
  try {
    const lines = readFileSync(filePath, "utf8").split(/\r?\n/);
    if (lines[lines.length - 1] === "") lines.pop(); // 末尾改行を行数に数えない
    return lines.length;
  } catch { return 0; }
}

// ── 検査1: 相対リンク切れ（docs/**/*.md + ルート *.md） ─────────────────────
function collectMdFiles() {
  const files = [];
  for (const e of readdirSync(repoRoot, { withFileTypes: true })) {
    if (e.isFile() && e.name.endsWith(".md")) files.push(join(repoRoot, e.name));
  }
  (function walk(dir) {
    if (!existsSync(dir)) return;
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".md")) files.push(p);
    }
  })(join(repoRoot, "docs"));
  for (const lane of ["mvp", "poc", "app"]) {
    const p = join(repoRoot, lane, "README.md");
    if (existsSync(p)) files.push(p);
  }
  return files;
}

function checkLinks() {
  let broken = 0;
  let checked = 0;
  for (const file of collectMdFiles()) {
    const content = readFileSync(file, "utf8");
    const linkRe = /\[[^\]]*\]\(([^)]+)\)/g;
    let m;
    while ((m = linkRe.exec(content)) !== null) {
      let target = m[1].trim();
      if (/^(https?:|mailto:)/.test(target)) continue;
      target = target.split("#")[0].trim();
      if (target === "") continue; // ページ内アンカーのみ
      checked++;
      if (!existsSync(resolve(dirname(file), target))) {
        fail(`リンク切れ: ${rel(file)} → "${m[1]}"（パス修正 / リンク削除 / ファイル作成のいずれかで対処）`);
        broken++;
      }
    }
  }
  if (broken === 0) pass(`相対リンク: ${checked} 件すべて解決`);
}

// ── 検査2: 行数上限 ──────────────────────────────────────────────────────────
const CAPS = [
  ["docs/STATE.md", 40],
  ["docs/PRODUCT.md", 60],
  ["docs/ARCHITECTURE.md", 90],
  ["docs/ROADMAP.md", 90],
  ["docs/ENVIRONMENT.md", 30],
  ["docs/mvp.md", 35],
];

function checkLineCounts() {
  // 2a. 常時ロード合計: CLAUDE.md + session-start 注入 ≤ 60
  const claudeLines = countLines(join(repoRoot, "CLAUDE.md"));
  let injectLines = 0;
  const ssPath = join(repoRoot, ".claude", "hooks", "session-start.cjs");
  if (existsSync(ssPath)) {
    const m = readFileSync(ssPath, "utf8").match(/process\.stdout\.write\(`([\s\S]*?)`\)/);
    if (m) {
      const lines = m[1].split(/\r?\n/);
      if (lines[lines.length - 1] === "") lines.pop();
      injectLines = lines.length;
    } else {
      fail("session-start.cjs の注入文（process.stdout.write(`...`)）が見つからない。validate.cjs の抽出ロジックを更新せよ");
    }
  }
  const total = claudeLines + injectLines;
  if (total <= 60) pass(`常時ロード: CLAUDE.md(${claudeLines}) + 注入(${injectLines}) = ${total} 行 ≤ 60`);
  else fail(`常時ロード: CLAUDE.md(${claudeLines}) + 注入(${injectLines}) = ${total} 行 > 60（${total - 60} 行超過）`);

  // 2b. 各 SKILL.md ≤ 100
  const skillsDir = join(repoRoot, ".claude", "skills");
  if (existsSync(skillsDir)) {
    for (const name of readdirSync(skillsDir)) {
      const p = join(skillsDir, name, "SKILL.md");
      if (!existsSync(p)) continue;
      const n = countLines(p);
      if (n <= 100) pass(`SKILL.md: ${name}(${n}) ≤ 100`);
      else fail(`SKILL.md: ${name}(${n}) > 100（${n - 100} 行超過）`);
    }
  } else {
    warn(".claude/skills/ が無い");
  }

  // 2c. 上書き型 + mvp.md
  for (const [relPath, cap] of CAPS) {
    const p = join(repoRoot, ...relPath.split("/"));
    if (!existsSync(p)) { fail(`${relPath} が存在しない`); continue; }
    const n = countLines(p);
    if (n <= cap) pass(`${relPath}(${n}) ≤ ${cap}`);
    else fail(`${relPath}(${n}) > ${cap}（${n - cap} 行超過。剪定するか、拘束力のある内容なら分割を相談）`);
  }
}

// ── 検査3: DECISIONS.md 行書式 ───────────────────────────────────────────────
function checkDecisionsFormat() {
  const p = join(repoRoot, "docs", "DECISIONS.md");
  if (!existsSync(p)) { fail("docs/DECISIONS.md が存在しない"); return; }
  const lines = readFileSync(p, "utf8").split(/\r?\n/);
  const logIdx = lines.findIndex((l) => l.trim() === "## ログ");
  if (logIdx === -1) { fail("DECISIONS.md に「## ログ」見出しが無い（ヘッダ書式を崩さない）"); return; }
  let bad = 0;
  let count = 0;
  for (let i = logIdx + 1; i < lines.length; i++) {
    if (lines[i].trim() === "") continue;
    count++;
    if (!/^- \d{4}-\d{2}-\d{2} /.test(lines[i])) {
      fail(`DECISIONS.md 行書式違反（${i + 1} 行目）: "${lines[i].slice(0, 40)}" — \`- YYYY-MM-DD \` で始めること`);
      bad++;
    }
  }
  if (bad === 0) pass(`DECISIONS.md 行書式: ${count} 行 OK`);
}

// ── 検査4: dirty なのに STATE.md が差分に無い ────────────────────────────────
function checkStateInDiff() {
  if (skipStateCheck) { warn("STATE 差分検査をスキップ（--skip-state-check）"); return; }
  let out = "";
  try {
    out = execSync("git status --porcelain", {
      cwd: repoRoot, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"],
    });
  } catch { warn("git が使えないため STATE 差分検査をスキップ"); return; }
  if (out.trim() === "") { pass("STATE 差分: working tree クリーン（検査不要）"); return; }
  if (out.includes("docs/STATE.md")) pass("STATE 差分: docs/STATE.md が差分に含まれる");
  else fail("git dirty なのに docs/STATE.md が差分に無い。/checkpoint で STATE を上書きしてから commit する");
}

// ── 実行 ─────────────────────────────────────────────────────────────────────
process.stdout.write("[validate] running checks...\n");
checkLinks();
checkLineCounts();
checkDecisionsFormat();
checkStateInDiff();

for (const r of results) process.stdout.write(r + "\n");

if (hasFailure) {
  process.stdout.write("\n[validate] FAIL — 上記を直すまで commit しない。\n");
  process.exit(1);
} else {
  process.stdout.write("\n[validate] PASS — all checks green.\n");
  process.exit(0);
}
