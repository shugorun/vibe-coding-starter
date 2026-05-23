# Stop hook for the app-development boilerplate.
# Non-blocking reminder only. Prints a one-line note (and always exits 0) when there
# are uncommitted changes at stop. It NEVER blocks the stop, so pausing to ask the
# user a question or report progress is never interrupted.
#
# Scope note: we only remind on UNCOMMITTED work. Unpushed commits are the normal
# mid-session state (push is batched at /wrapup-project), so we do not nag about them.
# The "end every session committed AND pushed" rule is enforced by /wrapup-project,
# and /catchup-project reconciles a dirty start without looping. The bare template
# (no weekly progress log) stays silent.

$ErrorActionPreference = "SilentlyContinue"

# Drain stdin (Claude Code passes a JSON payload); we don't need it.
[void][Console]::In.ReadToEnd()

$repoRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot "..\.."))

# Uncommitted changes?
$changes = $null
try { $changes = & git -C $repoRoot status --porcelain 2>$null } catch { $changes = $null }
if ([string]::IsNullOrWhiteSpace(($changes -join "`n"))) {
    exit 0
}

# No weekly progress log in this repo (e.g. the bare template) -> stay silent.
$progressDir = Join-Path $repoRoot "docs\progress"
$files = @()
if (Test-Path $progressDir) {
    $files = Get-ChildItem -Path $progressDir -Filter "*.md" -ErrorAction SilentlyContinue |
             Where-Object { $_.Name -ne "_index.md" }
}
if (-not $files) {
    exit 0
}

Write-Output "Reminder: uncommitted changes remain. Consider /checkpoint (progress entry + commit) for the finished work unit, or /wrapup-project (commit + push) to end clean."
exit 0
