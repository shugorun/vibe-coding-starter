# SessionStart hook for the app-development boilerplate.

$ErrorActionPreference = "SilentlyContinue"

$msg = @"
[project session start]
- Start with /catchup-project when the user wants to resume context.
- For normal work, read the chat and follow docs/02-GUIDELINES.md.
- End with /wrapup-project when the user wants to close the session.
- Docs start at docs/00-INDEX.md and docs/05-PROGRESS.md.
"@

Write-Output $msg
exit 0
