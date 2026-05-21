---
name: wrapup-project
description: 個人開発プロジェクトでセッションを終わるとき、または「終わる」「終了」「wrapup」「手仕舞い」「一区切り」「今日はここまで」と言われたときに使う。作業内容、決定、次タスク、レビュー待ち、index 更新漏れを docs に反映し、次セッションがすぐ再開できる状態にする。
---

# Wrapup Project

セッション終了前の手仕舞い手順。次回の `catchup-project` が正しい現在地を復元できるようにする。

## ゴール

本セッションの成果・判断・未完了事項が `docs/` に漏れなく残っている状態を作る。

## 実行手順

### 1. 週次 progress を特定

- 今日の日付から ISO 週番号 `YYYY-Www` を算出する。
- `docs/progress/<week>.md` がなければ作成する。
- `docs/progress/_index.md` に週次ファイルの行がなければ追加する。

### 2. 本日エントリを追記

週次ファイルに `## YYYY-MM-DD` セクションを作る。すでにある場合は末尾に追記する。

```markdown
### やったこと
- ...

### 決めたこと
- ...

### 次やること
- ...
```

### 3. 現在地サマリを更新

`docs/05-PROGRESS.md` の以下を最新化する。

- 現在のフェーズ
- 進行中
- 次にやること
- レビュー待ち
- 未解決 issue 件数

### 4. 各 index を更新

本セッションの成果物を index に反映する。

- 新規/更新 idea: `docs/ideas/_index.md`
- 新規/更新 app-design: `docs/app-design/_index.md`
- 新規/更新 requirement: `docs/requirements/_index.md`
- 新規/更新 spec: `docs/specs/_index.md`
- 新規 ADR: `docs/decisions/_index.md`
- 新規/解決 issue: `docs/issues/_index.md`
- 新規 research: `docs/research/_index.md`

### 5. レビュー待ちを明示

ユーザ確認なしに進められないものは `docs/05-PROGRESS.md` のレビュー待ちに列挙する。`reviewed` status はユーザ明示承認があるまで付けない。

### 6. 完了報告

以下の形式で報告する。

```text
[wrapup-project]
✓ progress に本日エントリ追記
✓ 05-PROGRESS.md 更新
✓ index 更新: <更新した index / 変更なし>
✓ レビュー待ち: <件数>
- 未解決 issue: <件数>

セッション終了して大丈夫です。
```

## 厳守事項

- 口頭だけで済ませない。チェックを付ける項目は実際にファイルを更新する。
- 変更がない項目は `-` で報告する。
- 進捗ログを重複日付で乱立させない。
- 何も変更していないセッションなら「変更なし、記録不要」と報告してよい。
