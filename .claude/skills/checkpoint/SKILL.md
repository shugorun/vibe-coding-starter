---
name: checkpoint
description: 作業が一区切りついたとき、または「区切り」「チェックポイント」「コミットして」「ここまで記録して」と言われたときに使う。直前に完成した1作業単位を docs/progress/ に追記し、検証が緑なら commit する（push はセッション末の /wrapup-project でまとめる）。検証通過・フェーズ完了・非自明な判断・ブロッカー発見の境界では、ユーザに聞かれなくても自動で実行する。
---

# Checkpoint

作業単位の区切りで「progress 追記 → 検証 → 緑なら commit」を行う。粒度は **コミット1個分の動く増分**。チャット毎（細かすぎ）でもセッション末まとめ（粗すぎ）でもない。**push はここではしない**（リモート同期はセッション末の `/wrapup-project` でまとめる）。`/work` の④commit はこの手順を呼ぶ。

## いつ実行するか

以下の境界では、ユーザの明示指示が無くても自動で実行する。

- 検証（型 / lint / test / build / smoke のいずれか）が通った
- 1 フェーズ / 1 機能スライスが動いた
- 非自明な技術・プロダクト判断をした
- 解決すべき問題・ブロッカーに当たった（その場合は `docs/issues/open/` に issue も起票）

ユーザが「区切り」「チェックポイント」「コミットして」「push して」等と言ったときも実行する。

## 実行手順

### 1. 作業単位を1つに絞る

直前に完成した 1 つの作業単位だけを対象にする。複数単位を1エントリに詰めない（詰めると粒度が粗くなり読み返せなくなる）。

### 2. progress に1エントリ追記

`docs/progress/<week>.md`（無ければ作成）に **1 作業単位 = 1 エントリ**で追記する。1日分をまとめて1エントリに詰め込まない（読み返せなくなる）。週番号は手計算せず OS のコマンドで取得する（どちらも `2026-W21` 形式）:

- Unix系（macOS / Linux）: `date +%G-W%V`
- Windows PowerShell: `"{0}-W{1:D2}" -f (Get-Date).Year, [int](Get-Date -UFormat %V)`

その日の最初のエントリ:

```markdown
## YYYY-MM-DD

### やったこと
- ...

### 決めたこと
- ...

### 次やること
- ...
```

同じ日の2つ目以降は見出しだけ `## YYYY-MM-DD（追記: <作業単位の短い名前>）` にして、同じ3セクションを書く。

### 3. 検証

プロジェクトで使える検証を走らせる（存在するものだけ: 型チェック / lint / unit / build / smoke など）。すべて通れば「緑」。検証が1つも無いプロジェクトは「動作確認した」を緑とみなしてよい。コーディング規則と lint ゲートの方針は `docs/08-CODING.md`。

実装単位（`[impl]`）で技術選定をしたら、`docs/04-ARCHITECTURE.md` のスタック表との関係を確認する（段階で対応が変わる）:

- **スタック表が `🔍 reviewed` で pin 済みの後**: 表に無いライブラリ/技術を入れていたら、commit 前に ADR 起票 → ユーザ承認の流れに乗せる（思いつきで pin 済みスタックから逸脱しない）。
- **探索 / MVP 期（表がまだ draft）**: ADR は必須にしない。選定理由を progress の「決めたこと」に一行残し、候補は `docs/app-design/technical.md` に置く。不可逆・横断的な選定だけ ADR 候補としてマークする（`docs/decisions/_index.md` の「ADR候補」、または progress「次やること」）。

### 4. commit（緑のときだけ）

実行するコマンドを宣言してから行う。push はしない（wrapup でまとめる）。

- 緑: `git add -A`（`.env` 等の secret が `.gitignore` 済みであることを確認）→ commit（prefix 付きメッセージ）。
- 赤 or 未完了: commit はしてよい。理由を progress の「次やること」に1行残す。

commit メッセージは作業種別の prefix を付ける。prefix の唯一の正は `docs/02-GUIDELINES.md`「commit メッセージ prefix」の表（ここでは再掲しない）。一覧: `[docs]` / `[adr]` / `[spec]` / `[impl]` / `[mvp]` / `[issue]` / `[research]` / `[infra]` / `[poc]`。

## 厳守事項

- 1 checkpoint = 1 作業単位 = 1 commit = 1 progress エントリ（記録なしで commit しない）。
- secret をコミットに含めない（`.gitignore` を確認）。
- ここでは push しない（push は `/wrapup-project` に集約）。
- pin 済み（`🔍 reviewed`）スタックから `[impl]` で勝手に逸脱しない（ADR 先行）。探索期は progress 一行＋`technical.md` で可。
- curated doc（`01-PRODUCT` / `04-ARCHITECTURE` / `app-design` / `specs`）は checkpoint では基本触らない。フェーズ移行級の変化は別途、または `/wrapup-project` で反映する。
