#!/usr/bin/env bash
# Stop hook for the app-development boilerplate (macOS / Linux).
# Mirror of stop.ps1: nudges (once) to run /wrapup-project ONLY when there are
# real uncommitted changes this session AND today has no entry in docs/progress/.
# Read-only / Q&A sessions are never blocked.

input="$(cat)"
if printf '%s' "$input" | grep -q '"stop_hook_active"[[:space:]]*:[[:space:]]*true'; then
  exit 0
fi

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd "$script_dir/../.." && pwd)"

# Only nudge when actual work happened this session.
changes="$(git -C "$repo_root" status --porcelain 2>/dev/null)"
if [ -z "$changes" ]; then
  exit 0
fi

today="$(date +%Y-%m-%d)"
progress_dir="$repo_root/docs/progress"

logged=0
if [ -d "$progress_dir" ]; then
  for f in "$progress_dir"/*.md; do
    [ -e "$f" ] || continue
    [ "$(basename "$f")" = "_index.md" ] && continue
    if grep -qF "$today" "$f" 2>/dev/null; then
      logged=1
      break
    fi
  done
fi

if [ "$logged" -eq 0 ]; then
  echo "Changes were made but docs/progress/ has no entry for today ($today). Consider /wrapup-project. Retry stop to proceed; this only nudges once." >&2
  exit 2
fi

exit 0
