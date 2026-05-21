# Guidelines

セッションをまたいでも情報が落ちないための運用ルール。

## 最重要原則

**docs は成果物であり、作業ログでもある。**

コードだけを進めない。判断、要件、仕様、詰まり、次タスクは必ず適切な docs に残す。

## セッション開始時

1. ユーザが `/catchup-project` を実行する。
2. エージェントは現在地サマリを返す。
3. その後の通常作業は、ユーザのチャット指示をそのまま読み、本ガイドラインに従って進める。

## 通常作業

通常作業用の専用スキルは置かない。アイデア、要件、仕様、実装、検証の依頼は、チャット内容から文脈を判断して進める。

作業開始時は、必要に応じて以下を読む。

- `docs/00-INDEX.md`
- `docs/02-GUIDELINES.md`
- `docs/05-PROGRESS.md`
- 関連する idea / requirement / spec / ADR / issue

## 作業中の記録ルール

| トリガー | 記録先 |
|---|---|
| 新しいアイデアや仮説が出た | `docs/ideas/` |
| 作る範囲や MVP を決めた | `docs/requirements/` |
| 機能単位の仕様を書いた | `docs/specs/` |
| 非自明な技術・プロダクト判断をした | `docs/decisions/` |
| 詰まった、罠を踏んだ、既知不具合を見つけた | `docs/issues/open/` |
| issue を解決した | `docs/issues/resolved/` |
| 調査結果を得た | `docs/research/` |
| 作業を進めた | `docs/progress/YYYY-Www.md` |
| 現在地や次タスクが変わった | `docs/05-PROGRESS.md` |

## レビューゲート

以下はユーザの明示承認なしに `reviewed` にしない。

| 成果物 | レビュー観点 |
|---|---|
| requirement | MVP 範囲、非スコープ、受け入れ条件 |
| spec | UX、状態、API、例外、実装方針 |
| ADR | 方針変更、将来コスト、代替案 |
| 実装完了 | 主要フロー、エラー分岐、見た目、性能 |

レビューが必要なものは `05-PROGRESS.md` の「レビュー待ち」に列挙する。

## ステータス定義

| status | 意味 |
|---|---|
| inbox | 入ってきたが未整理 |
| exploring | 壁打ち・調査中 |
| draft | 草案あり、未承認 |
| reviewed | ユーザ承認済 |
| active | 現在の実行対象 |
| implementing | 実装中 |
| done | 初版完了 |
| superseded | 後続ファイルに置き換え |
| discarded | 採用しない |

## セッション終了時

ユーザが `/wrapup-project` を実行する。手動の場合は以下を確認する。

- [ ] 今日の progress に「やったこと / 決めたこと / 次やること」を追記した
- [ ] `05-PROGRESS.md` の現在地、進行中、次タスク、レビュー待ちを更新した
- [ ] 新規 / 更新した idea, requirement, spec, ADR, issue, research の index を更新した
- [ ] ユーザ承認が必要なものを `reviewed` にしていない
- [ ] 未解決 issue が `issues/_index.md` に反映されている

## 実装ルール

- 既存コードと既存 docs を読んでから変更する。
- 実装で仕様が変わったら spec / requirement / ADR を更新する。
- 変更のリスクに見合う検証を行う。
- 大きな機能は spec を `reviewed` にしてから実装する。
- プロトタイプ優先で `draft` のまま実装する場合は、その判断を progress に残す。

## ドキュメント分割

- `05-PROGRESS.md` は現在地サマリに徹する。詳細ログは `progress/` に置く。
- requirement はプロダクト要件、spec は機能仕様、ADR は判断理由に分ける。
- 仕様が長くなったら `states.md`, `api.md`, `ux.md`, `validation.md` に分割する。
