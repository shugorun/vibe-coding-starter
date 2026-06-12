---
name: wrapup-project
description: セッション終了時、または「終わる」「終了」「wrapup」「手仕舞い」「一区切り」「今日はここまで」と言われたときに使う。/checkpoint を内包実行し、STATE のレビュー待ちを更新して commit + push まで行う。
---

# Wrapup Project

**発動条件**: description のとおり。
**成功基準**: working tree クリーン・push 済み（保留条件に該当する場合を除く）。次回 /catchup-project が STATE だけで現在地を復元できる。

## 手順

1. /checkpoint を内包実行する。未コミットの作業が無くても照合だけは行う。その STATE 上書きの際に「レビュー待ち」も更新する: 一方通行決定でユーザ確認が要るものだけ「対象 / なぜ一方通行か / 目安時間」付きで列挙（引き返せる決定は載せない）。
2. 宣言してから `git push`（remote 未設定なら push は保留し、報告にその旨を残す。`main` への force push はしない）。
3. 完了報告:

```text
[wrapup-project]
✓ checkpoint: <commit hash / 変更なし>
✓ レビュー待ち: <件数>
✓ push: <済 / 保留理由>
セッションを終了して大丈夫です。
```

## 厳守事項

- 未コミットのまま終了しない。push の保留は remote 未設定の場合のみ（報告に残す）。
- 口頭だけで済ませない。チェックを付ける項目は実際にファイルを更新する。
