# Architecture

確定した技術構成と設計方針を簡潔に保つ場所（curated doc）。アプリの種類が決まったら更新する。検討中の技術選定は `app-design/technical.md` で行い、決まった内容だけここへ反映する。両者を二重管理しない。

## 技術スタック

| 領域 | 採用 | status | 根拠 |
|---|---|---|---|
| フロントエンド | 未設定 | draft | |
| バックエンド | 未設定 | draft | |
| データベース | 未設定 | draft | |
| 認証 | 未設定 | draft | |
| ホスティング | 未設定 | draft | |
| 監視 | 未設定 | draft | |
| テスト | 未設定 | draft | |

## レイヤ方針

```text
UI / Screens
  -> Application / Use cases
  -> Domain / Models
  -> Infrastructure / API, DB, Storage
```

プロジェクト固有の実装方針が決まったら、ここにレイヤ責務と禁止事項を書く。

## ディレクトリ方針

未設定。実装プロジェクトの技術スタックに合わせて更新する。

```text
src/
  app/
  features/
  shared/
  domain/
  infra/
```

## 設計判断

重要な判断は ADR に分離する。

| ADR | 内容 |
|---|---|
| 未設定 | |

## 未確定事項

- 技術スタック
- データ永続化
- 認証の有無
- デプロイ先
- テスト方針
