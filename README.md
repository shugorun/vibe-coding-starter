# App Development Boilerplate

アイデアの壁打ち、要件定義、仕様化、実装、検証、振り返りを 1 つのプロジェクト内で進めるためのボイラープレート。**Claude Code 前提（Windows / macOS / Linux 対応）。** フックは Node スクリプトなので OS を問わず動く。

## このテンプレから始める

1. このリポジトリをテンプレートとして新規プロジェクトを作る。
   - GitHub なら **"Use this template"**。手元から始めるなら:
     ```text
     git clone <this-repo> my-app && cd my-app
     rm -rf .git && git init        # Windows PowerShell: Remove-Item -Recurse -Force .git; git init
     ```
2. Claude Code でプロジェクトを開く。`.claude/` のフックは**信頼確認のプロンプトを承認するまで動かない**（clone 直後はこれが既定動作）。承認すると `SessionStart` の案内が出る。
3. `/catchup-project` を実行 → 作りたいアプリを自然文で送って壁打ち開始。
4. `LICENSE` の著作権者を自分の名前に書き換える（既定は MIT）。

> 既定の権限モードは `acceptEdits`（[.claude/settings.json](.claude/settings.json)）。フォルダ内の編集は自動承認、外は読みのみ、secret と外部書込は拒否。挙動を変えたい場合はこのファイルを編集する。

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
- `.claude/hooks/` - セッション開始・終了フック（クロスプラットフォームな Node `.cjs`）。
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

- Claude Code を前提とする。Windows / macOS / Linux で動く。
- フックは `.claude/hooks/*.cjs`（Node）。`.claude/settings.json` から `node .claude/hooks/...` で呼ばれる。Node は Claude Code 自体が要求するので追加インストールは不要。
- 週番号など日付は手計算せず OS のコマンドで取得する（Unix系: `date +%G-W%V`、Windows PowerShell: `Get-Date`）。詳細は各スキル参照。
- `.gitattributes` で全テキストを LF に統一しているため、`.cjs` フックは OS を問わず動く。

## 運用原則

- docs は常に進化する。古くなった docs は実装と同じ変更単位で直す。
- 技術スタックは `docs/04-ARCHITECTURE.md` のスタック表が唯一の正。実装は表に従い、逸脱・追加は ADR 起票 → 承認後に表を更新する。
- 非自明な判断は ADR に残す。詰まりや罠は issue に残す。
- レビューは一方通行（不可逆）な決定だけユーザ確認する。引き返せる決定は進めて progress に根拠を残す。`🔍 reviewed` = 含む一方通行決定の確認済。
- 会話内の新情報が増えてきたら、エージェント側から docs 更新を提案する。
- 作業単位の区切りで `/checkpoint`、セッション終了時は `/wrapup-project`（commit + push まで）で締める。
