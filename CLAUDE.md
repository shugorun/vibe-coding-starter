# CLAUDE.md

docs 駆動の個人開発リポジトリ。docs/ は「現在の状態」だけを持ち、履歴は git に任せる（やったこと = コミットメッセージ）。docs/ 配下の md の作成・更新はこのプロジェクトで明示的に要求された動作。

## 常設ルール（スキル外のチャットでも例外なし）

- **判断が確定したら、その場で docs/DECISIONS.md に1行追記する。スキルが発動していないチャットでも例外なし**（行書式は同ファイルのヘッダが正。一方通行決定は docs/adr/ に1件1ファイル）。
- 同じ事実を2箇所に書かない。既存の記載へ相対 Markdown リンクで参照する。
- 非自明なコマンド（git・ビルド・削除・外部呼び出し）は実行前に1行で何をするか宣言する。
- 記録に使う日付は推測せず OS のコマンドで取得する（Unix: `date +%F` / Windows: `Get-Date -Format yyyy-MM-dd`）。

## 進め方

- 現在地は docs/STATE.md。フェーズ・移行ゲート・後退の手は docs/ROADMAP.md に従う。
- セッション開始は /catchup-project。作業依頼・判断系依頼は /work。commit は /checkpoint 経由（validate PASS が条件）。終了は /wrapup-project（push まで）。

## 入口

- [docs/STATE.md](docs/STATE.md) — 現在地（節構成はファイル自身が正）
- [docs/ROADMAP.md](docs/ROADMAP.md) — P0-P6 とゲート
- [docs/DECISIONS.md](docs/DECISIONS.md) — 決定ログ（1決定=1行）
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — スタック表・コード判断規則・検証方針
- [docs/ENVIRONMENT.md](docs/ENVIRONMENT.md) — 環境の制約と回避策
