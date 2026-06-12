# ARCHITECTURE

技術構成と実装の判断規則（上書き型）。

## スタック表

**pin = ユーザ承認で行を確定すること。pin 済み（status: pinned）の行が実装の唯一の正。** 逸脱・追加は先に [adr/](adr/README.md) を起票しユーザ承認を得てから表を更新する。mvp/ も app/ もこの表を使う（MVP 専用の別スタックは持たない）。

| 領域 | 採用 | status |
|---|---|---|
| ビルド | Vite | pinned |
| UI | React | pinned |
| 言語 | TypeScript | pinned |
| スタイル | Tailwind CSS | pinned |
| UI コンポーネント | shadcn/ui | pinned |
| テスト | Vitest | pinned |

バックエンド / DB / 認証 / ホスティング等は、必要になった時点で adr/ を起票して行を追加する（これらは一方通行に当たるため。可逆な細部は DECISIONS 1行）。

## 依存方向

app/ 内のレイヤは UI → Application → Domain → Infrastructure の一方向依存。逆流させない。

## コード判断規則（linter で機械化できない判断だけ）

- 整形・スタイル・import 順は formatter / linter に任せる。最初の実装時に ESLint + Prettier + `tsc --strict` をデフォルト構成で導入する（確認不要・可逆な決定）。
- 関数 40 行・ファイル 300 行・引数 4 個・ネスト 3 段を超えたら分割・抽出を検討する（目安であって禁止ではない）。
- 早期 return でハッピーパスを浅く保つ。マジックナンバーは名前付き定数に。賢い短さより素直に追えるコード。
- 例外を握りつぶさない（空 catch 禁止）。fail fast。エラーメッセージに「何をしようとして何が起きたか」を入れる。
- 真偽値は is / has / should 接頭辞。広く知られた略語（id, url, db 等）以外は略さない。
- 新規ライブラリはスタック表に従う。標準ライブラリで足りるなら足さない。
- バグ修正には再現テストを1つ付ける（正しい継ぎ目が無い場合は issue 記録で代替 — 判断手順は /diagnose）。テストは実装詳細でなく振る舞いを対象にする。

## 検証方針

- 検証 = 型チェック / lint / test / build / smoke のうち存在するもの全通過（= 緑）。commit 前に回す。
- app/ のテスト（Vitest）は回帰スイートとして残す（mvp/ からの持ち込み禁止は [../app/README.md](../app/README.md) のとおり）。
- 機能ごとの受け入れ条件は各 spec が持つ（P4 で記述、P5 で充足を確認）。
