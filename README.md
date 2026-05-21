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

- `.agents/skills/` - Codex / agents 用のプロジェクト内スキル
- `.claude/skills/` - Claude Code 用の同等スキル
- `.codex/hooks/` - Codex セッション開始・終了フック
- `.claude/hooks/` - Claude Code セッション開始・終了フック
- `docs/` - 進化する設計・要件・進捗・意思決定ログ

## 運用原則

- docs は常に進化する。古くなった docs は実装と同じ変更単位で直す。
- 非自明な判断は ADR に残す。
- 詰まりや罠は issue に残す。
- ユーザが明示承認したものだけ `reviewed` にする。
- セッション終了時は `/wrapup-project` で progress と index を更新してから終える。
