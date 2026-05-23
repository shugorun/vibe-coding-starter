// Stop hook for the app-development boilerplate. Cross-platform (Node).
//
// Non-blocking reminder only. When there are UNCOMMITTED changes at stop, it emits a
// `systemMessage` (shown to the user, not fed to Claude) so the note is actually visible
// in the normal view -- plain stdout from a Stop hook only surfaces in transcript mode.
// It never blocks the stop, so pausing to ask a question or report progress is never
// interrupted.
//
// Scope: we only remind on UNCOMMITTED work. Unpushed commits are the normal mid-session
// state (push is batched at /wrapup-project), so we do not nag about them. The bare
// template (no weekly progress log) stays silent.

const { execSync } = require("node:child_process");
const { existsSync, readdirSync, readFileSync } = require("node:fs");
const { join } = require("node:path");

// Drain stdin (Claude Code passes a JSON payload); we don't need it.
try { readFileSync(0, "utf8"); } catch { /* no stdin */ }

const repoRoot = join(__dirname, "..", "..");

// Uncommitted changes?
let dirty = false;
try {
  const out = execSync("git status --porcelain", {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  });
  dirty = out.trim().length > 0;
} catch { /* git unavailable / not a repo -> treat as clean */ }
if (!dirty) process.exit(0);

// No weekly progress log in this repo (e.g. the bare template) -> stay silent.
const progressDir = join(repoRoot, "docs", "progress");
let hasLog = false;
try {
  hasLog = existsSync(progressDir) &&
    readdirSync(progressDir).some((f) => f.endsWith(".md") && f !== "_index.md");
} catch { /* ignore */ }
if (!hasLog) process.exit(0);

process.stdout.write(JSON.stringify({
  systemMessage: "Reminder: uncommitted changes remain. Consider /checkpoint (progress entry + commit) for the finished work unit, or /wrapup-project (commit + push) to end clean.",
}) + "\n");
process.exit(0);
