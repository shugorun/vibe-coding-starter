#!/usr/bin/env node
// Human-in-the-loop 再現ループ（Node 製 — Windows / macOS / Linux 共通、依存なし）。
// このファイルをコピーし、下の「編集」区間を書き換えて実行する:
//   node hitl-loop.template.cjs
// エージェントがこのスクリプトを実行し、ユーザがターミナルの指示に従う。
//
// ヘルパー2つ:
//   await step("<指示>")            → 指示を表示し、Enter を待つ
//   await capture("KEY", "<質問>")  → 質問を表示し、回答を captured に記録
//
// 最後に captured の値が KEY=VALUE で出力され、エージェントがそれを読み取る。
//
// 出典: mattpocock/skills の hitl-loop.template.sh を Node に移植（MIT — 表記はリポジトリの LICENSE）。

const readline = require("node:readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const bufferedLines = [];
const waitingResolvers = [];
let stdinClosed = false;
rl.on("line", (line) => {
  if (waitingResolvers.length > 0) waitingResolvers.shift()(line);
  else bufferedLines.push(line);
});
rl.on("close", () => {
  stdinClosed = true;
  while (waitingResolvers.length > 0) waitingResolvers.shift()("");
});

function ask(prompt) {
  process.stdout.write(prompt);
  if (bufferedLines.length > 0) return Promise.resolve(bufferedLines.shift());
  if (stdinClosed) return Promise.resolve("");
  return new Promise((resolve) => waitingResolvers.push(resolve));
}

const captured = {};
const step = (instruction) => ask(`\n>>> ${instruction}\n    [完了したら Enter] `);
const capture = async (key, question) => {
  captured[key] = await ask(`\n>>> ${question}\n    > `);
};

async function main() {
  // --- ここから編集 -------------------------------------------------------

  await step("アプリを http://localhost:5173 で開いてサインインする。");

  await capture("ERRORED", "「Export」ボタンを押す。エラーになったか? (y/n)");

  await capture("ERROR_MSG", "エラーメッセージを貼り付ける（無ければ none）:");

  // --- ここまで編集 -------------------------------------------------------

  rl.close();
  console.log("\n--- Captured ---");
  for (const [key, value] of Object.entries(captured)) {
    console.log(`${key}=${value}`);
  }
}

main().catch((error) => {
  console.error(`hitl-loop failed: ${error.message}`);
  process.exit(1);
});
