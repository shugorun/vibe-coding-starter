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
- 2026-06-12 [infra] 決定: mattpocock/skills（MIT）から grill / tdd / diagnose / prototype / to-prd / to-issues / zoom-out の7本を改変同梱し、grill-me は grill（grill-me + grill-with-docs の統合後継）に置換 — 理由: 調査の浅さ・行き詰まり検知なしの弱点補完（出典表記は LICENSE 末尾）
- 2026-06-12 [docs] 決定: issues は「問題」と「実装スライス」の2種別を同じ NNNN 連番・frontmatter status で管理し、起票は /to-issues に一本化 — 理由: 主担当1対1マップの復元（書式は issues/README）
- 2026-06-12 [infra] 決定: diagnose の HITL 補助スクリプトは bash でなく Node（.cjs） — 理由: Windows 含む全 OS で追加依存なしに動く（フックと同方針）
- 2026-06-12 [infra] 決定: 既存テスト緑を維持するリファクタは /tdd の発動条件に含める — 理由: 発動条件の穴（残すコードのリファクタの担い手不在）を塞ぎ、テスト緑のままの変更規律を /tdd に集約
- 2026-06-12 [infra] 決定: scaffold の家はリポ直下 scaffold/。mvp/（P2）・app/（P5）はその中身（README.md を除く）のコピーで開始 — 理由: 使い捨てレーンと家を分離し、スタック更新を1箇所に閉じる（関連: DR-0016 ④）
- 2026-06-12 [stack] 決定: デザイントークンは scaffold/src/styles/tokens.css の CSS 変数に一元化。値は仮デフォルト（shadcn neutral）で、デザイン言語確定時はこの1ファイルの差し替えで完結 — 理由: テーマ変更の影響半径を1ファイルに閉じる（関連: DR-0011）
- 2026-06-12 [stack] 決定: scaffold の npm test 既定は vitest run（watch は test:watch） — 理由: エージェント運用では非対話を既定にする
- 2026-06-12 [stack] 決定: shadcn/ui 同梱の付随依存（radix-ui/cva/clsx/tailwind-merge/lucide-react/tw-animate-css）は shadcn 公式構成として一括採用 — 理由: スタック表「shadcn/ui」行の実体で可逆（関連: ../scaffold/package.json）
- 2026-06-12 [docs] 決定: ENVIRONMENT.md はテンプレ配布物として未記入のまま出荷（利用者の環境の記入場所） — 理由: 作者マシンの事実を焼き込まない
