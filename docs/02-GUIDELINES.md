# Guidelines

運用ルールの単一の正。セッションをまたいでも情報が落ちないための規則をここに集約する。他の doc / スキルはここを参照し、再掲しない。

## 最重要原則

**docs は成果物であり作業ログ。** コードだけ進めない。判断・要件・仕様・詰まり・次タスクは適切な docs に残す。

## フェーズとゲート

フェーズは P0→P6 で順に進む（定義とゲートは `03-ROADMAP.md`）。**現フェーズの移行ゲートが全チェックになるまで次フェーズに進まない。** 未チェックがあれば移行せず、残タスクを提示して現フェーズに留まる。フェーズ移行は `05-PROGRESS.md` と progress に記録する。

- **ゲートは「次フェーズを始めるのに最低限必要な決断・入力」を含む。** 不足したまま進むと手戻りになる（例: 言語決定は MVP を作る前 = P1 のゲート）。
- **MVP(P2) は `mvp/`、本実装(P5) は `app/`。** MVP は使い捨て。本実装は MVP コードを引き継がず 0 から書く。

## スキルの使い分け

4 つのスキルは一直線のフローではなく、**3 つの階層**で働く（catchup/wrapup がセッションを挟み、その中で `/work` を何度も回し、各作業単位の区切りが `/checkpoint`）。

```text
/catchup-project           # セッション開始（1 回）— 現在地サマリを復元
  /work … /work … /work    # 依頼ごとに何度でも — 確認 → 単位に分解 → 各単位を進め checkpoint
/wrapup-project            # セッション終了（1 回）— docs 反映 → commit + push
```

- **セッションを挟む（各 1 回）**: 開始 `/catchup-project`、終了 `/wrapup-project`。
- **依頼ごと（セッション中に何度でも）**: 自然文の作業依頼は `/work` が本体。一直線の手順ではなく **固定点（着手前の確認・区切りの commit）＋ 作業ループ**で、規則読み・問題→issue・判断→ADR はループ中に随時発火する不変条件（手順は `/work` スキル）。
- **作業単位の区切り = commit**: `/checkpoint`（progress 追記 → 検証 → 緑なら commit）。`/work` の中で呼ばれるが、「コミットだけ」したいときは単独でも使える。

## 作業中の記録ルール

| トリガー | 記録先 |
|---|---|
| 新しいアイデア・仮説が出た | `docs/ideas/` |
| 作るアイデアを 1 つに決めた | `docs/ideas/` に確定 + `01-PRODUCT.md` 初版 |
| MVP の実験・切替変種・フィードバック・困りごと（P2 の生ログ） | `docs/mvp-design/` |
| MVP の学び・確定したコンテンツ（昇格） | `docs/progress/` + `docs/app-design/` |
| 詳細設計（スコープ / 周辺機能 / 技術）を詰めた | `docs/app-design/` →（固まったら）`01-PRODUCT.md` / `04-ARCHITECTURE.md` |
| 機能単位の仕様を書いた | `docs/specs/` |
| 非自明な技術・プロダクト判断をした | `docs/decisions/`（ADR） |
| 解決すべき問題に当たった（直しきれず残る／文脈を残す価値がある） | `docs/issues/open/` |
| issue を解決した | `docs/issues/resolved/` |
| 環境起因の制約に当たった・環境の事実が分かった | `docs/09-ENVIRONMENT.md` |
| 調査結果を得た | `docs/research/` |
| 作業を進めた | `docs/progress/YYYY-Www.md` |
| 現在地・次タスク・ゲート進捗が変わった | `docs/05-PROGRESS.md` |

## 記録タイミング

量でなく重要度で判断する（記録する/しないは `CLAUDE.md`「記録の判断基準」）。

- **追記専用ログ**（`progress/` / idea の追加情報ログ / research の調査ログ）は気軽に頻繁に書く。
- **curated doc**（`01-PRODUCT` / `04-ARCHITECTURE` / `app-design` / `specs`）はフェーズ移行級の変化か `/wrapup-project` でだけ編集し、タイトに保つ。
- 迷ったら curated doc を組み替えず progress に 1 行メモ。
- ユーザが「記録して」「メモして」と言ったら該当 docs に反映してから続ける。

## 意思決定の記録（2層）

技術選定・方針判断は2層で残す。**全部を ADR にしない**（MVP が止まり、結局書かれず透明性が消える）。

| 層 | 何を | どこに | いつ |
|---|---|---|---|
| Tier 1 | MVP 中の選定・小さな判断 | progress「決めたこと」一行 | 常時（checkpoint で毎回） |
| Tier 2 | 不可逆 / 横断的 / スタック表を pin する決定 | ADR（`docs/decisions/`） | 決定時、または P3 で progress から昇格 |

- 透明性は Tier 1 がリアルタイムに担保する。ADR は数を絞る。
- ADR 化すべきだが起票が後回しなら `docs/decisions/_index.md` の「ADR候補」にマークし、P3（app-design でスタック pin）でまとめて起票する。

## チェックポイント

作業単位の区切りで progress を刻み、検証が緑なら commit する（**push はしない**。push は `/wrapup-project`）。粒度は「コミット 1 個分の動く増分」＝チャット毎（細かすぎ）でもセッション末まとめ（粗すぎ）でもない。手順は `/checkpoint`。ユーザに聞かず自動で実行してよい。

自動で実行する境界:

- 検証（型 / lint / test / build / smoke のいずれか）が通った
- 1 フェーズ / 1 機能スライスが動いた
- 非自明な技術・プロダクト判断をした
- 解決すべき問題・ブロッカーに当たった（issue も起票する）

要点: **1 checkpoint = 1 作業単位 = 1 commit = 1 progress エントリ**（記録なしで commit しない）。複数単位を 1 エントリに詰めない。緑＝利用可能な検証が全通過（検証が無いプロジェクトは「動作確認した」を緑とみなす）。secret は `.gitignore` 済みを確認。`main` への force push はしない。

### commit メッセージ prefix

作業種別を prefix で示す（`git log --oneline --grep` で辿れる）。

| prefix | 用途 |
|---|---|
| `[docs]` | docs 基盤・index・進捗・運用ルール |
| `[adr]` | ADR 追加・更新 |
| `[spec]` | spec 追加・更新 |
| `[impl]` | 機能実装（`[impl] <feature>: ...`） |
| `[issue]` | issue 起票・解決 |
| `[research]` | 調査結果 |
| `[infra]` | 設定・スキル・フック・ツール |
| `[poc]` | PoC・MVP・検証スパイク |

## レビューゲート（一方通行決定のみ）

**ユーザ確認を要するのは「一方通行（後から変えるのが高コスト／不可逆）な決定」だけ。** 引き返せる決定は Claude が判断して進め、根拠を progress の「決めたこと」（または spec 該当章）に残す。spec を 1 本まるごとレビューに乗せない —— 含む一方通行決定だけを抽出して提示する。迷ったら**一方通行側に倒して聞く**。

- **一方通行 = 確認が要る**: 外部と握る契約（API スキーマ・保存/通信フォーマット・外部連携）、セキュリティ/権限/課金の方針、移行コストの高い永続化スキーマ、不可逆なプロダクト判断（作る/作らない・公開・課金）、フェーズ移行ゲートの GO/NO-GO（特にスタック表の pin）。
- **引き返せる = 通過（Claude 判断 + progress にログ）**: 内部実装構造・命名・ファイル分割・リファクタ、暫定パラメータ、スタック表内でのライブラリ内部利用、後から変えられる UI 細部・文言。
- 提示は **「見てほしい点 / なぜ一方通行か / 目安時間」** を添える（`05-PROGRESS.md` のレビュー待ち）。

`🔍 reviewed` = spec 全体の通読承認ではなく **「含む一方通行決定をユーザが確認済」**。一方通行決定が無ければ Claude 判定で進め「一方通行決定なし・Claude 判定」と progress に残す（確認のために `🔍 reviewed` 化をユーザへ依頼しない）。Claude 単独で一方通行決定を承認済扱いにしない。

## status 定義

| status | 意味 |
|---|---|
| `📋 todo` | 未着手・予定 |
| `📝 draft` | 草案あり、未承認 |
| `🔍 reviewed` | 含む一方通行決定をユーザ確認済（AI が自分で付けない） |
| `🚧 implementing` | 実装中 |
| `✅ done` | 初版完了 |

補助（絵文字なし可）: `inbox` / `exploring` / `active` / `stale` / `superseded` / `discarded`。レーン固有: ideas は `candidate` / `promoted`、ADR は `Proposed` / `Accepted` / `Deprecated` / `Superseded`、issues は `Open` / `Resolved`。

## 実装ルール

- 実装前に `08-CODING.md`（コーディング規則）と `09-ENVIRONMENT.md`（環境）を読む。スタイルは lint / formatter / typecheck に委譲する。
- 既存コードと既存 docs を読んでから変更する。
- **技術スタックは `04-ARCHITECTURE.md` のスタック表に従う。** 探索/MVP 期（行が `📝 draft`）は `app-design/technical.md` + progress 一行で選定してよい。pin 後（`🔍 reviewed`）に逸脱・追加するときは先に ADR 起票 → 承認後に表を更新する。
- 実装で仕様が変わったら spec / app-design / ADR を更新する。
- 大きな機能でも、含む一方通行決定だけ確認してから実装する（引き返せる部分は先行実装してよい）。

## ドキュメント分割

- 1 ファイルが 300 行を超えそうなら分割を検討する（catchup 肥大化対策）。
- `05-PROGRESS.md` は現在地サマリに徹し、詳細ログは `progress/` へ。
- ideas は「何を作るか」だけ。決めた後の具体化は `app-design/` へ。**MVP の作り方（種別・言語）は P1 で軽く決め（使い捨て・本実装と別でよい）、本実装のスタックは P3 app-design で 0 から確定して `04-ARCHITECTURE.md` を pin する。** MVP の技術選定は本実装に引き継がない。
- `app-design/` は考え中の作業場。固まった内容は `01-PRODUCT.md` / `04-ARCHITECTURE.md` に反映し二重管理しない。
- research はトピック単位でファイルを作り、各エントリ内に日時を記録する。
- spec が長くなったら `states.md` / `api.md` / `ux.md` / `validation.md` に分割する。

## セッション終了時（手動チェック / `/wrapup-project` が自動化）

- [ ] 今日の progress に「やったこと / 決めたこと / 次やること」を追記
- [ ] `05-PROGRESS.md` の現在地・進行中・次タスク・ゲート・レビュー待ちを更新
- [ ] 新規/更新した idea / app-design / spec / ADR / issue / research の index を更新
- [ ] ユーザ承認が必要なものを `🔍 reviewed` にしていない
- [ ] 300 行超の doc が無いか確認
- [ ] commit + push まで完了（未コミット/未push で終えない）
