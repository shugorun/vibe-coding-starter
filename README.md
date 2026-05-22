# App Development Boilerplate

アイデアの壁打ち、要件定義、仕様化、実装、検証、振り返りを 1 つのプロジェクト内で進めるためのボイラープレート。

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

終わる前は wrapup を明示する。

```text
/wrapup-project
```

## ディレクトリ

- `CLAUDE.md` / `AGENTS.md` - 常時ロードの運用契約。Claude Code は `CLAUDE.md`、Codex は `AGENTS.md` を読む。内容は同一に保つ。
- `.agents/skills/` - Codex / agents 用のプロジェクト内スキル
- `.claude/skills/` - Claude Code 用の同等スキル（`.agents/skills/` と同一に保つ）
- `.codex/hooks/` - Codex セッション開始・終了フック（`.ps1` = Windows / `.sh` = macOS・Linux）
- `.claude/hooks/` - Claude Code セッション開始・終了フック（`.ps1` = Windows / `.sh` = macOS・Linux）
- `docs/` - 進化する設計・要件・進捗・意思決定ログ

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

## 環境別フック設定

デフォルトの `.claude/settings.json` / `.codex/hooks.json` は Windows (PowerShell) 版を呼ぶ。macOS / Linux では bash 版に差し替える。

`.claude/settings.json`（`.codex/hooks.json` も同様に `.codex/hooks/*.sh` へ）:

```json
{ "type": "command", "command": "bash .claude/hooks/session-start.sh" }
{ "type": "command", "command": "bash .claude/hooks/stop.sh" }
```

`.ps1` と `.sh` は同じ挙動。`bash <script>` 形式で呼ぶので実行権限の付与は不要。Windows でも Git Bash があれば bash 版をそのまま使える。

## 運用原則

- docs は常に進化する。古くなった docs は実装と同じ変更単位で直す。
- 非自明な判断は ADR に残す。
- 詰まりや罠は issue に残す。
- ユーザが明示承認したものだけ `reviewed` にする。
- 会話内の新情報が増えてきたら、エージェント側から docs 更新を提案する。
- セッション終了時は `/wrapup-project` で progress と index を更新してから終える。
