# Vibe Coding Starter

アイデア → MVP → 設計 → 仕様 → 本実装 → リリースを、判断と現在地を docs/ に残しながら1リポジトリで進める Claude Code 前提のボイラープレート（フックは Node 製で OS を問わない）。

## 始め方

### A. ローカル Node スクリプト（推奨）

このリポを clone してから `tools/new-project.mjs` を使うと、クリーンな新プロジェクトをワンコマンドで生成できる。

```bash
# テンプレを clone（初回のみ）
git clone https://github.com/shugorun/vibe-coding-starter
cd vibe-coding-starter

# 新プロジェクトを生成（親ディレクトリと同階層に <myapp>/ が作られる）
node tools/new-project.mjs myapp

# オプション例: 場所・著者・npm install を同時に指定
node tools/new-project.mjs myapp --to C:\Users\me\projects --author "Taro Yamada" --install
```

オプション:

| オプション | 説明 | 既定 |
|---|---|---|
| `--to <dir>` | 新プロジェクトを置く親ディレクトリ | テンプレリポの親ディレクトリ |
| `--author "<name>"` | `LICENSE` の著作権者を書き換え | スキップ（手動で書き換える） |
| `--install` | 生成後に `scaffold/` で `npm install` を実行 | OFF |

生成されるプロジェクトには `.git`・`node_modules`・ビルド成果物・`*.log` は含まれない。生成スクリプト自身（`tools/new-project.mjs`）も除外されるため、配布物はクリーンな初期状態になる。

生成後の手順（スクリプトが完了時に表示する内容と同じ）:

1. `cd <生成先>`
2. Claude Code でフォルダを開く
3. `.claude/` のフックの信頼確認を承認する
4. `/catchup-project` を実行して現在地を復元する
5. （`--install` を指定しなかった場合）`cd scaffold && npm install`

### B. GitHub テンプレート / clone から手動セットアップ（代替）

1. GitHub の "Use this template" で新リポを作成（または clone 後に `.git` を削除して `git init`）。
2. Claude Code で開き、`.claude/` のフックの信頼確認を承認する。
3. `/catchup-project` を実行し、作りたいものを自然文で送る。
4. `LICENSE` の著作権者を自分の名前に書き換える（`--author` オプションを使えば手順 A で自動化できる）。

権限の既定は `acceptEdits`（[.claude/settings.json](.claude/settings.json)。`.env`・`secrets/`・`credentials*` の読み書きは拒否）。

## 進め方

フェーズ P0〜P6 を [docs/ROADMAP.md](docs/ROADMAP.md) の移行ゲートで進める。日々の流れ:

```text
/catchup-project     セッション開始 — 現在地復元（読むだけ）
（自然文で依頼）      /work — 着手前確認 → 作業単位ごとに進める
/checkpoint          作業単位の区切りごとに実行
/wrapup-project      セッション終了（push まで）
```

`/grill` `/to-prd` `/to-issues` `/tdd` `/diagnose` `/prototype` `/zoom-out` — 発動条件は各スキルの description が正。

## 記録のしくみ（3クラス）

| クラス | 場所 | ルール |
|---|---|---|
| 上書き型 | docs/ 直下の STATE・PRODUCT・ARCHITECTURE・ROADMAP・ENVIRONMENT | 現在の真実のみ。validate が行数上限を強制 |
| 1行追記型 | [docs/DECISIONS.md](docs/DECISIONS.md) | 1決定=1行・不変。覆すなら新行 |
| 1件1ファイル | docs/ の adr/・specs/・issues/・research/ | 1ファイル内で整合が完結（書式は各ディレクトリの README） |

## ディレクトリ

- `CLAUDE.md` — 常時ロードの運用契約
- `.claude/` — スキル・フック・設定
- `docs/` — 記録の置き場（上表 + [docs/mvp.md](docs/mvp.md)）
- [scaffold/](scaffold/README.md) — 標準スタックの家。mvp/・app/ はコピーで開始
- [mvp/](mvp/README.md)・[poc/](poc/README.md)・[app/](app/README.md) — 各レーンの役割は各 README
