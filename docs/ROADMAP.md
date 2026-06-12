# ROADMAP

フェーズ定義と移行ゲート（上書き型）。**ゲートのチェックボックスの家はこのファイルだけ**（[STATE.md](STATE.md) はポインタ1行）。現フェーズのゲートが全チェックになるまで次フェーズへ進まない。チェックは満たした時点で /checkpoint が付け、全ゲート ☑ になったら /checkpoint が STATE.md のフェーズを次へ更新する。

## フェーズと移行ゲート

### P0 初期化（テンプレ scaffold）

- [ ] docs / skills / hooks / mvp scaffold が配置済み（テンプレ初期状態）

### P1 MVP 設計

grill-me で詰め、[mvp.md](mvp.md) と [PRODUCT.md](PRODUCT.md) の初版を書く。

- [ ] PRODUCT.md に初版（プロダクト名・一言説明・主要ユーザ・価値仮説）
- [ ] mvp.md に「確かめたい問い」と作る / 作らないのスコープ
- [ ] MVP で試す中核体験を1行で言える
- [ ] **[人間確認]** 作るものの決定をユーザが承認し [adr/](adr/README.md) に記録済み

### P2 MVP 実装（mvp/）

- [ ] mvp/ で最小フロント + 中核機能が動く（手動確認 or smoke 緑）
- [ ] 実験・学びを mvp.md に記録し、確定した学びを PRODUCT.md / DECISIONS.md に反映済み
- [ ] 中核体験の質に製作者が納得している

### P3 アプリ設計

- [ ] PRODUCT.md が本実装のスコープ（作る / 作らない）を反映している
- [ ] [ARCHITECTURE.md](ARCHITECTURE.md) のスタック表が本実装に必要な領域をすべてカバー
- [ ] **[人間確認]** 一方通行決定（基準: [adr/](adr/README.md)）が起票・承認済み

### P4 仕様

- [ ] 主要機能ごとに specs/ に spec がある（受け入れ条件を含む）
- [ ] **[人間確認]** 各 spec が含む一方通行決定をユーザが確認済み

### P5 本実装（app/）

- [ ] app/ で主要フローが動き、検証（[ARCHITECTURE.md](ARCHITECTURE.md)「検証方針」）が緑
- [ ] 実装中の判断が DECISIONS.md / adr/ に記録済み
- [ ] 残った問題が issues/ に起票済み

### P6 リリース

- [ ] 主要フローをリリース対象環境で確認済み
- [ ] status: open の重大 issue がない
- [ ] secret・環境変数の扱いを整理済み
- [ ] **[人間確認]** 公開の GO（公開は不可逆）をユーザが承認済み

## 後退（許可された手）

- 隣接の後退（Pn → Pn-1）は全フェーズで可。任意のフェーズから P1 へ戻ってもよい。
- 手続き: DECISIONS.md に1行（タグ [retreat]）+ STATE.md 更新。それ以外は不要。
