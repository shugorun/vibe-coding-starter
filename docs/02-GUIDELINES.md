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
| 作るアイデアを 1 つに決めた | `docs/app-design/` |
| 作る範囲や MVP を決めた | `docs/requirements/` |
| 機能単位の仕様を書いた | `docs/specs/` |
| 非自明な技術・プロダクト判断をした | `docs/decisions/` |
| 詰まった、罠を踏んだ、既知不具合を見つけた | `docs/issues/open/` |
| issue を解決した | `docs/issues/resolved/` |
| 調査結果を得た | `docs/research/` |
| 作業を進めた | `docs/progress/YYYY-Www.md` |
| 現在地や次タスクが変わった | `docs/05-PROGRESS.md` |

## 記録タイミング

量ではなく重要度で判断する。記録するのは「将来の自分がこれ無しだと **間違える / 迷う**」情報だけ。

記録する:

- アイデアの方向性が変わった
- ユーザが判断・好み・制約を明示した
- 要件、画面、仕組み、技術方針が具体化・確定した
- 後で見返す必要がある未確定事項が出た
- コードや git から再導出できない背景・理由が出た

記録しない:

- やったこと自体（git が記録している）
- 既存の記述の言い換え
- まだ揺れている思考の途中経過

### タイミングと頻度

- 作業の流れの途中で自動的に書き込まない。話題の区切り・タスク切替・`/wrapup-project` でまとめて書く。
- 細かい追記は追記専用ログ（progress / idea の追加情報ログ / research 調査ログ）へ流す。curated doc（`01-PRODUCT` / `04-ARCHITECTURE` / `app-design` / `requirements` / `specs`）はマイルストン級の変化でだけ編集する。
- 迷ったら doc を組み替えず progress に1行メモ。大きな記録は勝手に書かず1行で提案する。
- ユーザが「記録して」「メモして」等と言ったら、該当 docs に反映してから続ける。

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

共通の status。レーン固有の値は各 `_index.md` に従う。

| status | 意味 |
|---|---|
| todo | 未着手・予定 |
| inbox | 入ってきたが未整理 |
| exploring | 壁打ち・調査中 |
| draft | 草案あり、未承認 |
| reviewed | ユーザ承認済 |
| active | 現在の実行対象 |
| implementing | 実装中 |
| done | 初版完了 |
| stale | 内容が古くなった可能性 |
| superseded | 後続ファイルに置き換え |
| discarded | 採用しない |

レーン固有: ideas は `candidate` / `promoted` を追加で使う。ADR は `Proposed` / `Accepted` / `Deprecated` / `Superseded`、issues は `Open` / `Resolved` を使う。

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
- ideas は「何を作るか」の壁打ちだけに使う。作ると決めた後の具体化は `app-design/` に移す。
- `app-design/` は考え中の作業場。固まった内容は `01-PRODUCT.md`（プロダクト）/ `04-ARCHITECTURE.md`（技術）に反映し、二重管理しない。
- research は日時単位ではなくトピック単位でファイルを作り、各調査エントリ内に日時を記録する。
- requirement はプロダクト要件、spec は機能仕様、ADR は判断理由に分ける。
- 仕様が長くなったら `states.md`, `api.md`, `ux.md`, `validation.md` に分割する。
