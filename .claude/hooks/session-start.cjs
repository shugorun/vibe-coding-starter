// SessionStart hook for the app-development boilerplate.
// Cross-platform (Node). stdout is injected into the session context by Claude Code.
process.stdout.write(`[project session start]
- Start with /catchup-project when the user wants to resume context.
- For normal work, read the chat and follow docs/02-GUIDELINES.md.
- At each finished work unit, checkpoint: append to docs/progress/ and commit if green (/checkpoint). Push is batched at /wrapup-project.
- End with /wrapup-project to update docs and commit + push (do not leave uncommitted/unpushed work).
- Docs start at docs/00-INDEX.md and docs/05-PROGRESS.md.
`);
