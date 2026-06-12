# DECISIONS

可逆な決定の1行追記ログ。1決定=1行・不変、覆すときは新しい行を足す（一方通行決定はここではなく [adr/](adr/README.md) に1件1ファイル）。
行書式: `- YYYY-MM-DD [タグ] 決定: <内容> — 理由: <理由>（関連: リンク等。省略可）`
タグ: [product] [stack] [mvp] [docs] [infra] [retreat] など作業種別を1つ。
剪定: 300行を超えたら剪定してよい。ただし、まだ拘束力のある行は該当の上書き型ファイルへ移してから削除する（昇格パス）。

## ログ

- 2026-06-12 [docs] 決定: WS1 ラウンド1 を差し戻し、ラウンド2 で docs を構造再設計 — 理由: 同じ事実の複数ファイル分散が一貫性破綻の根本原因で、検出でなく構造で潰す
- 2026-06-12 [docs] 決定: リンクは通常の相対 Markdown リンク（Obsidian 型 [[ ]] は不採用） — 理由: issues フラット化でファイル移動が消え、validate の対象拡張だけで済む
- 2026-06-12 [docs] 決定: ideas レーン全廃 — 理由: 壁打ちは chat + grill で行い、採用は PRODUCT.md へ・棄却はこのログ1行で足りる
- 2026-06-12 [docs] 決定: 可逆決定はこのログ1行・一方通行のみ adr/ に1件1ファイル — 理由: 記録コストを決定の重さに比例させる（「実装時に ADR」は「実装時に決定記録」と再定義）
- 2026-06-12 [docs] 決定: issues/ は open/resolved ディレクトリ廃止・フラット1階層 + frontmatter status — 理由: 状態変更によるファイル移動を構造ごと消す
- 2026-06-12 [stack] 決定: mvp/ も焼き込みスタック（Vite+React+TS+Tailwind+shadcn/ui+Vitest）を使用。scaffold 実体は WS3 で導入 — 理由: スタック説明の二重管理をなくす（関連: ARCHITECTURE.md）
- 2026-06-12 [docs] 決定: 旧 06/07/08 は ARCHITECTURE.md / ROADMAP.md に統合し、CONTEXT.md は作らず用語は PRODUCT.md「用語」節 — 理由: 1事実1ファイル・YAGNI
- 2026-06-12 [infra] 決定: grill-me スキルは暫定残置 — 理由: WS2 で grill に置換するまでの参照切れ防止
