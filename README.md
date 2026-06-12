# Vibe Coding Starter

アイデア → MVP → 設計 → 仕様 → 本実装 → リリースを、判断と現在地を docs/ に残しながら1リポジトリで進める Claude Code 前提のボイラープレート（フックは Node 製で OS を問わない）。

## 始め方

1. このリポジトリをテンプレートとして新規プロジェクトを作る（GitHub の "Use this template"、または clone 後に `.git` を作り直す）。
2. Claude Code で開き、`.claude/` のフックの信頼確認を承認する。
3. `/catchup-project` を実行し、作りたいものを自然文で送る。
4. `LICENSE` の著作権者を自分の名前に書き換える（既定は MIT）。

権限の既定は `acceptEdits`（[.claude/settings.json](.claude/settings.json)。secret の読み書きは拒否）。

## 進め方

フェーズ P0〜P6 を [docs/ROADMAP.md](docs/ROADMAP.md) の移行ゲートで進める。日々の流れ:

```text
/catchup-project     セッション開始 — 現在地復元（読むだけ）
（自然文で依頼）      /work — 着手前確認 → 作業単位ごとに進める
/checkpoint          作業単位の区切りごとに実行
/wrapup-project      セッション終了（push まで）
```

着手前の合意形成は `/grill-me`。

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
- [mvp/](mvp/README.md)・[poc/](poc/README.md)・[app/](app/README.md) — 各レーンの役割は各 README
