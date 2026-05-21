# Issues Index

詰まり、罠、既知不具合の管理。

## ステータス

- `Open` - 未解決
- `Resolved` - 解決済。`resolved/` 配下に移動

## Open

| # | タイトル | 起票日 | カテゴリ | 影響範囲 |
|---|---|---|---|---|
| なし | | | | |

## Resolved

| # | タイトル | 起票日 | 解決日 | カテゴリ | 解決手段 |
|---|---|---|---|---|---|
| なし | | | | | |

## 起票テンプレ

```markdown
# Issue NNNN: <タイトル>

## ステータス
Open

## 起票日
YYYY-MM-DD

## カテゴリ
build / runtime / dependency / spec / api / ux / product / etc.

## 影響範囲
- ...

## 現象
何が起きているか。

## 再現手順
1. ...

## 試した対処
- ...

## 解決手段
Resolved 時に追記。

## 関連
- ADR:
- spec:
- progress:
```

## 運用

- 罠を踏んだら即起票する。
- 解決時は `open/` から `resolved/` に移動し、index を更新する。
- 再発時は新規 issue を起票し、過去 issue を参照する。
