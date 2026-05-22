#!/usr/bin/env bash
# SessionStart hook for the app-development boilerplate (macOS / Linux).
# Mirror of session-start.ps1.

cat <<'EOF'
[project session start]
- Start with /catchup-project when the user wants to resume context.
- For normal work, read the chat and follow docs/02-GUIDELINES.md.
- If mid-session information is piling up, ask whether to update docs.
- End with /wrapup-project when the user wants to close the session.
- Docs start at docs/00-INDEX.md and docs/05-PROGRESS.md.
EOF

exit 0
