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

- **progress ログは作業単位の区切りごとに刻む（checkpoint、下記参照）。** curated doc（`01-PRODUCT` / `04-ARCHITECTURE` / `app-design` / `requirements` / `specs`）はマイルストン級か `/wrapup-project` でだけ編集する。
- 1 checkpoint = 1 作業単位。複数を1エントリに詰めない。チャット毎にも書かない。
- 細かい追記は追記専用ログ（progress / idea の追加情報ログ / research 調査ログ）へ流す。
- 迷ったら curated doc を組み替えず progress に1行メモ。
- ユーザが「記録して」「メモして」等と言ったら、該当 docs に反映してから続ける。

## 意思決定の記録（2層）

技術選定・方針判断は2層で残す。**全部を ADR にしない**（MVP が止まり、結局書かれず透明性が消える）。

| 層 | 何を | どこに | いつ |
|---|---|---|---|
| Tier 1 | MVP 中の技術選定・小さな判断 | progress の「決めたこと」一行 | 常時（checkpoint で毎回） |
| Tier 2 | 不可逆 / 横断的 / スタック表を pin する決定 | ADR（`docs/decisions/`） | 決定時、または M3 で progress から昇格 |

- 透明性は Tier 1 がリアルタイムに担保する。ADR は数を絞る。
- ADR 化すべきだが起票が後回しなら、`docs/decisions/_index.md` の「ADR候補」か progress「次やること」にマークする。`03-ROADMAP.md` の M3「技術方針」でまとめて起票し、書き忘れを防ぐ。

## チェックポイント

作業単位の区切りで progress を刻み、検証が緑なら commit する（**push はしない**。push はセッション末の `/wrapup-project` でまとめる）。粒度は「コミット1個分の動く増分」＝チャット毎（細かすぎ）でもセッション末まとめ（粗すぎ）でもない。詳細手順は `/checkpoint`。ユーザに聞かず自動で実行してよい。

自動で実行する境界:

- 検証（型 / lint / test / build / smoke のいずれか）が通った
- 1 フェーズ / 1 機能スライスが動いた
- 非自明な技術・プロダクト判断をした
- ブロッカー・既知不具合を踏んだ（issue も起票する）

手順の要点:

1. 直前に完成した 1 作業単位だけを対象にする（複数を1エントリに詰めない）。
2. `docs/progress/<week>.md` に **1 作業単位 = 1 エントリ**で追記（やったこと / 決めたこと / 次やること）。その日の最初は `## YYYY-MM-DD`、2つ目以降は `## YYYY-MM-DD（追記: <単位名>）`。1日分を1エントリに詰め込まない。
3. プロジェクトで使える検証を走らせる。**「緑」= 利用可能な検証（型 / lint / unit / build / smoke のうち存在するもの）が全通過。** 検証が1つも無いプロジェクトは「動作確認した」を緑とみなしてよい。
4. 緑なら `git add -A`（secret は `.gitignore` 済みを確認）→ commit（prefix 付きメッセージ、下記）。**push はしない**（wrapup でまとめる）。赤 or 未完了でも commit はしてよく、理由を progress の「次やること」に1行残す。

### commit メッセージ prefix

作業種別を prefix で示す。後から `git log --oneline --grep` で種別ごとに辿れる。

| prefix | 用途 |
|---|---|
| `[docs]` | docs 基盤・index・進捗・運用ルールの変更 |
| `[adr]` | ADR 追加・更新 |
| `[spec]` | spec 追加・更新 |
| `[impl]` | 機能実装（`[impl] <feature>: ...`） |
| `[issue]` | issue 起票・解決 |
| `[research]` | 調査結果の記録 |
| `[infra]` | 設定・スキル・フック・ツール |
| `[poc]` | PoC・検証スパイク |

**1 commit = 1 作業単位 = 1 progress エントリ**（記録なしで commit しない）。stop フックは未コミットが残っていると（ブロックはせず）リマインドするだけ。終了時のクリーン化（commit + push）は `/wrapup-project` が担う。`main` への force push はしない。curated doc は checkpoint では基本触らない。

## レビューゲート

以下はユーザの明示承認なしに `🔍 reviewed` にしない。

| 成果物 | レビュー観点 |
|---|---|
| requirement | MVP 範囲、非スコープ、受け入れ条件 |
| spec | UX、状態、API、例外、実装方針 |
| ADR | 方針変更、将来コスト、代替案 |
| 実装完了 | 主要フロー、エラー分岐、見た目、性能 |

レビューが必要なものは `05-PROGRESS.md` の「レビュー待ち」に列挙する。

## ステータス定義

共通の status。レーン固有の値は各 `_index.md` に従う。

主要なライフサイクル status は絵文字付きで表記し、`_index.md` や `05-PROGRESS.md` で一目で分かるようにする。

| status | 意味 |
|---|---|
| `📋 todo` | 未着手・予定 |
| `📝 draft` | 草案あり、未承認 |
| `🔍 reviewed` | ユーザ承認済（AI が自分で付けない） |
| `🚧 implementing` | 実装中 |
| `✅ done` | 初版完了 |

補助 status（絵文字なしの文字列でよい）: `inbox`（未整理）/ `exploring`（壁打ち・調査中）/ `active`（現在の実行対象）/ `stale`（古くなった可能性）/ `superseded`（後続に置換）/ `discarded`（不採用）。

レーン固有: ideas は `candidate` / `promoted` を追加で使う。ADR は `Proposed` / `Accepted` / `Deprecated` / `Superseded`、issues は `Open` / `Resolved` を使う。

## セッション終了時

ユーザが `/wrapup-project` を実行する。手動の場合は以下を確認する。

- [ ] 今日の progress に「やったこと / 決めたこと / 次やること」を追記した
- [ ] `05-PROGRESS.md` の現在地、進行中、次タスク、レビュー待ちを更新した
- [ ] 新規 / 更新した idea, requirement, spec, ADR, issue, research の index を更新した
- [ ] ユーザ承認が必要なものを `🔍 reviewed` にしていない
- [ ] 未解決 issue が `issues/_index.md` に反映されている
- [ ] 300 行を超えた doc が無いか確認した（超えたら分割を検討。catchup の肥大化対策）
- [ ] commit + push まで完了させた（未コミット/未push で終えない）

## 実装ルール

- 既存コードと既存 docs を読んでから変更する。
- **技術スタックは `04-ARCHITECTURE.md` のスタック表に従う（pin 後）。** 探索/MVP 期（行が `📝 draft`）は `technical.md` + progress 一行で選定してよい。行が `🔍 reviewed` で pin された後に逸脱・追加するときは、先に ADR 起票 → 承認後に表を更新する（思いつきで pin 済みスタックから外れない）。
- 実装で仕様が変わったら spec / requirement / ADR を更新する。
- 変更のリスクに見合う検証を行う。
- 大きな機能は spec を `🔍 reviewed` にしてから実装する。
- プロトタイプ優先で `📝 draft` のまま実装する場合は、その判断を progress に残す。

## 透明性

- 非自明なコマンド（git 操作、ビルド、削除、外部呼び出し等）は実行前に1行で何をするか宣言する。
- バックグラウンド実行は、何が動いているか・どう確認/停止するかを明示する。
- skill が走らせる git / PowerShell コマンドは隠さず見える形で実行する。

## ドキュメント分割

- `05-PROGRESS.md` は現在地サマリに徹する。詳細ログは `progress/` に置く。
- ideas は「何を作るか」の壁打ちだけに使う。作ると決めた後の具体化は `app-design/` に移す。
- `app-design/` は考え中の作業場。固まった内容は `01-PRODUCT.md`（プロダクト）/ `04-ARCHITECTURE.md`（技術）に反映し、二重管理しない。
- research は日時単位ではなくトピック単位でファイルを作り、各調査エントリ内に日時を記録する。
- requirement はプロダクト要件、spec は機能仕様、ADR は判断理由に分ける。
- 仕様が長くなったら `states.md`, `api.md`, `ux.md`, `validation.md` に分割する。
