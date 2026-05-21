---
name: catchup-project
description: 汎用個人開発プロジェクトで新規セッションを開始するとき、または「キャッチアップ」「現状把握」「続きから」「今どこ」「次なに」と言われたときに使う。docs の索引、進捗、未解決 issue、レビュー待ち、進行中の idea/requirement/spec/implementation を読み、短い現在地サマリを返して次の行動に入る。
---

# Catchup Project

新規セッションでプロジェクトの文脈を復元する手順。ユーザに「どれを見るか」を聞かず、リポジトリ内の docs から現在地を復元する。

## ゴール

セッションをまたいでも、前回の続き・レビュー待ち・未解決問題・次の一手を正確に再開できる状態にする。最後に短いサマリを返し、ユーザの指示が具体的ならそのまま作業に入る。

## 実行手順

### 1. 基本文脈を読む

- `docs/00-INDEX.md`
- `docs/02-GUIDELINES.md`
- `docs/05-PROGRESS.md`
- `docs/progress/_index.md` と最新の週次 progress

### 2. 作業レーン別の状態を確認

- `docs/ideas/_index.md`: 未整理・候補アイデア
- `docs/requirements/_index.md`: draft / reviewed / active の要求
- `docs/specs/_index.md`: draft / reviewed / implementing の機能仕様
- `docs/decisions/_index.md`: 重要な確定判断
- `docs/issues/_index.md`: open issue

`05-PROGRESS.md` に進行中の item が書かれていれば、該当する idea / requirement / spec / issue の本文も読む。

### 3. 実装文脈を必要分だけ確認

実装中または実装依頼がある場合だけ、以下を確認する。

- `README.md`
- パッケージ定義 (`package.json`, `pyproject.toml`, `Cargo.toml`, etc.)
- `git status --short`
- 最新 progress に記録された関連ファイル

### 4. 報告形式

以下の 4 行以内で返す。

```text
[現在地] <フェーズ / 進行中 item / 直前の作業>
[次の行動] <docs 上の次タスク、またはユーザ依頼に対する次アクション>
[レビュー待ち] <件数と対象。なければ「なし」>
[未解決] <open issue 件数 / 主なリスク>
```

ユーザが「続きからやって」「これ実装して」など具体的な依頼を同時に出している場合は、このサマリの後に `docs/02-GUIDELINES.md` の通常作業ルールに従ってそのまま作業する。

## 厳守事項

- ユーザに「どのファイルを見るか」を聞かない。入口は常に `docs/00-INDEX.md`。
- `reviewed` はユーザが明示承認したものにだけ付ける。
- index と実ファイルが食い違う場合は、実ファイルも直接確認し、食い違いを wrapup 対象にする。
- docs が古いと判断したら、作業前か作業中に必要な docs 更新を入れる。
