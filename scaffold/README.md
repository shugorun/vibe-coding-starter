# scaffold/ — 標準スタックの焼き込み（家）

pin 済みスタック（表の正は [docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md)）の実体。ここは「家」であり直接ここで開発しない。mvp/（P2 開始時）・app/（P5 開始時）は **この README を除く中身をコピー** して開始する。

## 使い方

- コピー先で `npm ci`（lockfile 再現）または `npm install` → `npm run dev`。scripts の一覧と依存バージョンの正は [package.json](package.json)。
- 検証は `npm run verify`（内訳の正は [package.json](package.json)）。/checkpoint の「検証」工程はこれを回す（[docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md)「検証方針」）。
- `npm test` は非対話（`vitest run`）が既定。watch は `npm run test:watch`。

## デザイントークン層

- 色・radius 等のトークン値は [src/styles/tokens.css](src/styles/tokens.css) の CSS 変数が唯一の置き場。テーマ差し替えはこの1ファイルの値変更で完結する（現在の値は仮デフォルト = shadcn/ui neutral）。
- [src/index.css](src/index.css) は構造のみ（Tailwind への `@theme inline` マッピング）。コンポーネントは `bg-primary` 等のセマンティックユーティリティ経由でトークンを参照する。

## shadcn/ui

- 同梱コンポーネント（所有コード）: Button / Input / Card / Dialog / Label → [src/components/ui/](src/components/ui/)
- 追加は `npx shadcn@latest add <name>`（設定は [components.json](components.json)、ユーティリティは [src/lib/utils.ts](src/lib/utils.ts)）。

## 未決事項（焼き込まない）

状態管理・ルーティング・DB・バックエンド等は同梱しない。必要になった時点で決定記録を残して追加する（一方通行 = [docs/adr/](../docs/adr/README.md) に1件1ファイル、可逆 = [docs/DECISIONS.md](../docs/DECISIONS.md) に1行）。
