---
name: checkpoint
description: 作業単位の区切りで記録を確定し、commit までを行う。docs/DECISIONS.md に書く行が生まれた / 作業単位が完了した（検証が通った・機能スライスが動いた）/ ROADMAP のゲート項目を満たした / 問題・ブロッカーに当たった / 「区切り」「コミットして」と言われた、のいずれかで自動実行する。
---

# Checkpoint

**発動条件**: description のとおり（明示指示が無くても自動実行する）。
**成功基準**: 1 checkpoint = 1 作業単位 = 1 commit。validate PASS。STATE.md が実態と一致。

## 1. 取りこぼし照合

この作業単位で発生したのに**未記録**のものを各ファイルに追記する（記録済みなら何もしない。二重記載禁止）。checkpoint は全追記型ファイルに補完追記できる（書式は各ファイルのヘッダ / README が正）。

- (a) 決めたこと → `docs/DECISIONS.md`（一方通行なら `docs/adr/`）
- (b) 残る問題 → `docs/issues/`
- (c) 環境制約 → `docs/ENVIRONMENT.md`
- (d) 新用語 → `docs/PRODUCT.md`「用語」節
- (e) 現フェーズのゲート（`docs/ROADMAP.md`）を照合し、満たした項目に印を付ける。**[人間確認]** 項目は印を付けず、ユーザへ確認を出す

## 2. STATE 上書き

`docs/STATE.md` の全節を現状に上書きする（節構成はファイル自身が正）。ゲート進捗は `docs/ROADMAP.md` へのポインタ1行のみ。

## 3. 検証

利用可能な検証（`docs/ARCHITECTURE.md`「検証方針」）を回す。全通過 = 緑。検証が無いプロジェクトは動作確認を緑とみなす。

## 4. validate

`node .claude/hooks/validate.cjs` を実行する（FAIL の扱いは厳守事項）。

## 5. commit

宣言してから実行する。

```text
git add -A    # secret が .gitignore 済みか確認
git commit -m "<prefix> <内容>"
```

### commit prefix（ここが唯一の正）

| prefix | 用途 |
|---|---|
| `[docs]` | docs・運用ルール |
| `[adr]` | 一方通行決定の記録（docs/adr/） |
| `[spec]` | 仕様（docs/specs/） |
| `[impl]` | 本実装（app/） |
| `[mvp]` | MVP（mvp/ と docs/mvp.md） |
| `[issue]` | issue 起票・解決 |
| `[research]` | 調査 |
| `[infra]` | 設定・スキル・フック・ツール |
| `[poc]` | 技術スパイク（poc/） |

## 厳守事項

- validate FAIL は絶対に commit しない。検証（テスト）赤のみ、やむを得ない場合は理由を STATE の「今」に1行残せば刻んでよい。
- 複数の作業単位を1コミットに詰めない。
- push はここではしない（/wrapup-project に集約）。
- DECISIONS.md が 300 行を超えていたら剪定する（手順は同ファイルのヘッダ）。
