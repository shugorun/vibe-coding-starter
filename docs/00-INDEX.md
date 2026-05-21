# Documentation Index

このプロジェクトの入口。新セッションの `catchup-project` はここから読む。

## 必読順

1. [05-PROGRESS.md](05-PROGRESS.md) - 現在地、次にやること、レビュー待ち
2. [02-GUIDELINES.md](02-GUIDELINES.md) - セッション運用、記録ルール、レビューゲート
3. [01-PRODUCT.md](01-PRODUCT.md) - プロダクトの仮説、対象ユーザ、価値
4. [03-ROADMAP.md](03-ROADMAP.md) - マイルストン、優先順位、バックログ
5. [04-ARCHITECTURE.md](04-ARCHITECTURE.md) - 技術構成、レイヤ、実装方針
6. [06-VALIDATION.md](06-VALIDATION.md) - テスト、検証、受け入れ基準
7. [07-RELEASE.md](07-RELEASE.md) - リリース準備、運用、公開チェック

## 成長するフォルダ

- [ideas/](ideas/) - 何を作るかのアイデア壁打ち。1 アイデア = 1 ファイル
- [app-design/](app-design/) - 作ると決めた 1 つのアイデアの具体化
- [requirements/](requirements/) - PRD / 要件定義
- [specs/](specs/) - 機能別仕様
- [decisions/](decisions/) - ADR。1 決定 = 1 ファイル
- [issues/](issues/) - 詰まり、罠、既知不具合
- [progress/](progress/) - 週次作業ログ
- [research/](research/) - 技術調査、競合調査、参考資料

## スキル

明示的に使うプロジェクト内スキル。

- `/catchup-project` - セッション開始時の現在地復元
- `/wrapup-project` - セッション終了時の記録更新

アイデア、要件、仕様、実装、検証の通常作業は専用スキルにしない。ユーザのチャット指示をそのまま読み、[02-GUIDELINES.md](02-GUIDELINES.md) の運用ルールに従って進める。

## ファイル運用

- 1 ファイルが 300 行を超えそうなら分割を検討する。
- `_index.md` は配下のファイルを一覧化する。
- 命名:
  - idea: `<idea-slug>.md`
  - research: `<topic-slug>.md`
  - requirement / ADR / issue: `NNNN-<slug>.md`
  - spec: `docs/specs/<feature-slug>/spec.md`
  - progress: `YYYY-Www.md`
