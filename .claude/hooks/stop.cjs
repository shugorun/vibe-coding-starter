// Stop フック（非ブロック・クロスプラットフォーム / Node）。
//
// 「本日コミットなし かつ 本日 docs/DECISIONS.md 追記なし」のとき、1日1回だけ
// ソフトリマインドを systemMessage で表示する（クリーンツリーでも発火する）。
//
// 1日1回の抑制: .git/vibe-stop-reminded に表示済みの日付を記録し、同日の2回目以降は沈黙する。

const { execSync } = require("node:child_process");
const { existsSync, readFileSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// 前の Stop フックからの継続なら何もしない。
let payload = null;
try { payload = JSON.parse(readFileSync(0, "utf8")); } catch { payload = null; }
if (payload && payload.stop_hook_active) process.exit(0);

const repoRoot = join(__dirname, "..", "..");
const gitDir = join(repoRoot, ".git");
if (!existsSync(gitDir)) process.exit(0); // git 不在ならコミット判定ができないため沈黙

const d = new Date();
const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

// 本日すでにリマインド済みなら沈黙（1日1回）。
const marker = join(gitDir, "vibe-stop-reminded");
try { if (readFileSync(marker, "utf8").trim() === today) process.exit(0); } catch { /* 未作成 */ }

// 本日のコミットがあれば沈黙。
try {
  const out = execSync("git log --oneline --since=midnight", {
    cwd: repoRoot, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"],
  });
  if (out.trim() !== "") process.exit(0);
} catch { /* コミット 0 件等は「本日コミットなし」として続行 */ }

// 本日付の DECISIONS 追記があれば沈黙。
try {
  const decisions = readFileSync(join(repoRoot, "docs", "DECISIONS.md"), "utf8");
  if (decisions.includes(`- ${today} `)) process.exit(0);
} catch { /* ファイル不在は「追記なし」扱い */ }

try { writeFileSync(marker, today + "\n"); } catch { /* マーカーが書けなくても通知はする */ }

process.stdout.write(JSON.stringify({
  systemMessage: `Note: 本日のコミットも docs/DECISIONS.md への追記もまだない（${today}）。確定した判断があれば DECISIONS に1行、作業の区切りなら /checkpoint を。（本日の通知はこれで最後）`,
}) + "\n");
process.exit(0);
