# App Development Boilerplate

アイデアの壁打ち、要件定義、仕様化、実装、検証、振り返りを 1 つのプロジェクト内で進めるためのボイラープレート。**Windows / PowerShell + Claude Code 前提。**

## 使い方

新しいセッションでは、まず catchup を明示する。

```text
/catchup-project
```

エージェントが現状を把握したら、作りたいこと、考えたいこと、直したいことをそのまま書く。

```text
家計簿アプリのアイデアを詰めたい
MVP 要件に落として
ログイン機能を実装して
```

作業が一区切りつくたびに、エージェントが自動で `docs/progress/` に1エントリ記録し、検証が緑なら commit する（明示するなら `/checkpoint`）。push はしない。これで記録の粒度が「コミット1個分」に揃う。リモートへの push はセッション末の `/wrapup-project` でまとめて行う。

終わる前は wrapup を明示する。`/wrapup-project` は docs を更新したうえで **commit + push まで** 行い、リポジトリを常にクリーンな状態にして終える（次回 catchup のループ防止）。

```text
/wrapup-project
```

## ディレクトリ

- `CLAUDE.md` - 常時ロードの運用契約（単一の正）。
- `.claude/skills/` - Claude Code 用のプロジェクト内スキル（`catchup-project` / `checkpoint` / `wrapup-project`）。
- `.claude/hooks/` - セッション開始・終了フック（PowerShell `.ps1`）。
- `.claude/settings.json` - フック登録と許可ポリシー（フォルダ内編集は自動承認・外は読みのみ・秘密情報と外部書込は拒否）。
- `docs/` - 進化する設計・要件・進捗・意思決定ログ。

## ドキュメントの流れ

```text
ideas/        何を作るか（壁打ち）
  -> app-design/    どう作るか（考え中の作業場）
       -> 01-PRODUCT.md / 04-ARCHITECTURE.md  固まった現在の真実
       -> requirements/  作る範囲・MVP
            -> specs/    機能仕様
                 -> 実装 + 06-VALIDATION.md  検証
```

- 横断ログ: `progress/`（作業）, `decisions/`（判断 = ADR）, `issues/`（詰まり）, `research/`（調査）。
- 細かい追記はログ側へ、`01-PRODUCT` / `04-ARCHITECTURE` / `app-design` / `requirements` / `specs` はマイルストン級の変化でだけ編集する。

## 環境

- Windows + PowerShell + Claude Code を前提とする。フックは `.claude/hooks/*.ps1`、`.claude/settings.json` から `powershell -NoProfile -ExecutionPolicy Bypass -File ...` で呼ばれる。
- 週番号など日付は手計算せず PowerShell の `Get-Date` から取得する。

## 運用原則

- docs は常に進化する。古くなった docs は実装と同じ変更単位で直す。
- 技術スタックは `docs/04-ARCHITECTURE.md` のスタック表が唯一の正。実装は表に従い、逸脱・追加は ADR 起票 → 承認後に表を更新する。
- 非自明な判断は ADR に残す。詰まりや罠は issue に残す。
- レビューは一方通行（不可逆）な決定だけユーザ確認する。引き返せる決定は進めて progress に根拠を残す。`🔍 reviewed` = 含む一方通行決定の確認済。
- 会話内の新情報が増えてきたら、エージェント側から docs 更新を提案する。
- 作業単位の区切りで `/checkpoint`、セッション終了時は `/wrapup-project`（commit + push まで）で締める。
