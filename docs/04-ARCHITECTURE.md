# Architecture

確定した技術構成と設計方針を簡潔に保つ場所（curated doc）。アプリの種類が決まったら更新する。検討中の技術選定は `app-design/technical.md` で行い、決まった内容だけここへ反映する。両者を二重管理しない。

## 技術スタック

**このスタック表が実装の唯一の正（pin 後）。** 行の status で段階が変わる:

- **探索 / MVP 期（行が `📝 draft`）**: 技術選定は `app-design/technical.md` の draft + progress「決めたこと」一行で進めてよい。ADR は不可逆・横断的な選定にだけ任意で起票（02-GUIDELINES「意思決定の記録（2層）」）。決まり次第この表に反映する。MVP を ADR で止めない。
- **pin 後（行が `🔍 reviewed`）**: 実装はこの行に従う。pin 済みの技術から逸脱・追加するときは、先に ADR（`docs/decisions/`）を起票し、ユーザ承認後にこの表を更新する。思いつきで pin 済みスタックから外れない。

検討途中の候補は `app-design/technical.md`、決定だけここへ移す（二重管理しない）。pin = ユーザ承認時に該当行の status を `🔍 reviewed` にする。

| 領域 | 採用 | status | ADR | 根拠 |
|---|---|---|---|---|
| フロントエンド | 未設定 | 📝 draft | | |
| バックエンド | 未設定 | 📝 draft | | |
| データベース | 未設定 | 📝 draft | | |
| 認証 | 未設定 | 📝 draft | | |
| ホスティング | 未設定 | 📝 draft | | |
| 監視 | 未設定 | 📝 draft | | |
| テスト | 未設定 | 📝 draft | | |

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
