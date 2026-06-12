// セッション開始フック。stdout は Claude Code がセッション文脈に注入する。
// 注入は最小限に保つ（静的ルールは CLAUDE.md が持つ）。行数は validate が CLAUDE.md と合算で検査する。
process.stdout.write(`[セッション開始] まず /catchup-project で現在地を復元する。
`);
