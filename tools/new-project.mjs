#!/usr/bin/env node
/**
 * tools/new-project.mjs
 * ローカル init スクリプト — vibe-coding-starter テンプレから新プロジェクトを生成する。
 *
 * Usage:
 *   node tools/new-project.mjs <project-name> [--to <dest-parent-dir>] [--author "<name>"] [--install] [--help]
 *
 * 依存: Node 組込み (node:fs, node:path, node:child_process, node:url) のみ。npm 依存ゼロ。
 */

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function usage() {
  console.log(`
使い方:
  node tools/new-project.mjs <project-name> [オプション]

引数:
  <project-name>          新プロジェクトのフォルダ名（必須）

オプション:
  --to <dir>              新プロジェクトを置く親ディレクトリ
                          （既定: このテンプレリポの親ディレクトリ）
  --author "<name>"       LICENSE の著作権者を書き換える（省略時はスキップ）
  --install               生成先の scaffold/ で npm install を実行
  --help                  このメッセージを表示して終了

例:
  node tools/new-project.mjs myapp
  node tools/new-project.mjs myapp --to C:\\Users\\me\\projects --author "Taro Yamada" --install
`);
}

/** npm パッケージ名として無効な文字をサニタイズする */
function sanitizeName(name) {
  // npm name rules: lowercase, alphanumeric + hyphens + underscores + dots
  // Leading dot/underscore is allowed but unusual; replace spaces and unsafe chars with hyphens
  return name
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "-")
    .replace(/^[-_.]+/, "") // strip leading special chars
    .replace(/[-_]+$/, "") // strip trailing special chars
    || "my-project";
}

/** 再帰コピー用フィルタ — true を返すとコピーする */
function shouldCopy(srcAbsolute, templateRoot) {
  const rel = path.relative(templateRoot, srcAbsolute);
  // パス区切りを正規化して判定（Windows/Unix 両対応）
  const parts = rel.split(path.sep);

  // --- 除外: .git（テンプレ履歴）
  if (parts.includes(".git")) return false;

  // --- 除外: node_modules（任意の深さ）
  if (parts.includes("node_modules")) return false;

  // --- 除外: ビルド成果物
  const buildDirs = new Set(["dist", "build", "out", ".next", ".expo", ".turbo", "coverage"]);
  for (const part of parts) {
    if (buildDirs.has(part)) return false;
  }

  // --- 除外: *.log
  const basename = path.basename(srcAbsolute);
  if (basename.endsWith(".log")) return false;

  // --- 除外: Claude Code ローカル設定
  if (rel === path.join(".claude", "settings.local.json")) return false;

  // --- 除外: OS 雑ファイル
  if (basename === ".DS_Store" || basename === "Thumbs.db") return false;

  // --- 除外: tools/（generator 置き場。生成物に持ち込まない。空ディレクトリも作らせない）
  if (parts[0] === "tools") return false;

  return true;
}

/** git コマンドを実行（失敗しても warn して継続）*/
function tryGit(args, cwd) {
  const result = spawnSync("git", args, { cwd, encoding: "utf8", shell: false });
  if (result.error) {
    console.warn(`[warn] git ${args[0]} をスキップ: git コマンドが見つかりません`);
    return false;
  }
  if (result.status !== 0) {
    console.warn(`[warn] git ${args.join(" ")} が失敗 (exit ${result.status}): ${result.stderr?.trim()}`);
    return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// Argument parsing
// ---------------------------------------------------------------------------

const argv = process.argv.slice(2);

if (argv.length === 0 || argv.includes("--help") || argv.includes("-h")) {
  usage();
  process.exit(argv.length === 0 ? 1 : 0);
}

let projectName = null;
let destParentDir = null;
let author = null;
let doInstall = false;

for (let i = 0; i < argv.length; i++) {
  const arg = argv[i];
  if (arg === "--to") {
    destParentDir = argv[++i];
    if (!destParentDir) {
      console.error("エラー: --to の後にディレクトリを指定してください");
      process.exit(1);
    }
  } else if (arg === "--author") {
    author = argv[++i];
    if (author === undefined) {
      console.error("エラー: --author の後に名前を指定してください");
      process.exit(1);
    }
  } else if (arg === "--install") {
    doInstall = true;
  } else if (arg.startsWith("--")) {
    console.error(`エラー: 不明なオプション: ${arg}`);
    usage();
    process.exit(1);
  } else if (projectName === null) {
    projectName = arg;
  } else {
    console.error(`エラー: 余分な引数: ${arg}`);
    usage();
    process.exit(1);
  }
}

if (!projectName) {
  console.error("エラー: <project-name> は必須です");
  usage();
  process.exit(1);
}

const safeName = sanitizeName(projectName);

// ---------------------------------------------------------------------------
// Path resolution
// ---------------------------------------------------------------------------

const scriptPath = fileURLToPath(import.meta.url);           // <repo>/tools/new-project.mjs
const templateRoot = path.resolve(path.dirname(scriptPath), ".."); // <repo>

if (!destParentDir) {
  // 既定: テンプレリポの親ディレクトリ
  destParentDir = path.dirname(templateRoot);
}

destParentDir = path.resolve(destParentDir);
const dest = path.join(destParentDir, projectName);

console.log(`テンプレ: ${templateRoot}`);
console.log(`生成先:   ${dest}`);
console.log(`名前:     ${projectName}${safeName !== projectName ? ` (サニタイズ後: ${safeName})` : ""}`);

// ---------------------------------------------------------------------------
// Safety check: destination must not exist or must be empty
// ---------------------------------------------------------------------------

if (fs.existsSync(dest)) {
  const entries = fs.readdirSync(dest);
  if (entries.length > 0) {
    console.error(`エラー: 生成先 "${dest}" は既に存在し、空ではありません。上書きを防ぐため終了します。`);
    process.exit(1);
  }
}

// ---------------------------------------------------------------------------
// Step 1: Recursive copy
// ---------------------------------------------------------------------------

console.log("\n[1/5] テンプレをコピー中...");

fs.cpSync(templateRoot, dest, {
  recursive: true,
  filter: (src) => shouldCopy(src, templateRoot),
});

console.log("      コピー完了");

// ---------------------------------------------------------------------------
// Step 2: Rewrite scaffold/package.json "name"
// ---------------------------------------------------------------------------

console.log("[2/5] scaffold/package.json の name を書き換え中...");

const pkgPath = path.join(dest, "scaffold", "package.json");
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  pkg.name = safeName;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
  console.log(`      name = "${safeName}"`);
} else {
  console.warn("[warn] scaffold/package.json が見つかりません。スキップ。");
}

// ---------------------------------------------------------------------------
// Step 3: Rewrite LICENSE author (only if --author specified)
// ---------------------------------------------------------------------------

if (author) {
  console.log("[3/5] LICENSE の著作権者を書き換え中...");
  const licensePath = path.join(dest, "LICENSE");
  if (fs.existsSync(licensePath)) {
    const original = fs.readFileSync(licensePath, "utf8");
    // Match "Copyright (c) YYYY <anything>" and replace the name part
    const updated = original.replace(
      /(Copyright\s*\(c\)\s*\d{4}\s+).+/i,
      `$1${author}`
    );
    if (updated !== original) {
      fs.writeFileSync(licensePath, updated, "utf8");
      console.log(`      著作権者: "${author}"`);
    } else {
      console.warn("[warn] LICENSE の著作権者行のパターンが一致しませんでした。手動で確認してください。");
    }
  } else {
    console.warn("[warn] LICENSE ファイルが見つかりません。スキップ。");
  }
} else {
  console.log("[3/5] --author 未指定。LICENSE の書き換えをスキップ。");
}

// ---------------------------------------------------------------------------
// Step 4: git init + initial commit
// ---------------------------------------------------------------------------

console.log("[4/5] git リポジトリを初期化中...");

const gitOk =
  tryGit(["init"], dest) &&
  tryGit(["add", "-A"], dest) &&
  tryGit(["commit", "-m", "chore: init from vibe-coding-starter"], dest);

if (gitOk) {
  console.log("      git init + 初回コミット完了");
} else {
  console.warn("      git 操作を一部スキップしました（上記 warn を確認）。");
}

// ---------------------------------------------------------------------------
// Step 5: npm install (optional)
// ---------------------------------------------------------------------------

if (doInstall) {
  console.log("[5/5] scaffold/ で npm install を実行中...");
  const scaffoldDir = path.join(dest, "scaffold");
  const npmResult = spawnSync("npm", ["install"], {
    cwd: scaffoldDir,
    stdio: "inherit",
    shell: false,
  });
  if (npmResult.error || npmResult.status !== 0) {
    console.error(`エラー: npm install が失敗しました (exit ${npmResult.status})`);
    process.exit(1);
  }
} else {
  console.log("[5/5] --install 未指定。npm install をスキップ。");
}

// ---------------------------------------------------------------------------
// Done — print next steps
// ---------------------------------------------------------------------------

const relOrAbs = dest;
const installHint = doInstall
  ? ""
  : `\n   5. （初回のみ）cd scaffold && npm install`;

console.log(`
完了しました。

次の手順:
   1. cd ${relOrAbs}
   2. Claude Code でフォルダを開く:  code ${relOrAbs}  または Finder/エクスプローラから開く
   3. .claude/ のフックの信頼確認を承認する
   4. /catchup-project を実行して現在地を復元する${installHint}

注意: これは開発の出発点であり、まだ動くアプリケーションではありません。
      P1 フェーズで /grill を使い、作りたいものを詰めてから実装を始めてください。
`);
