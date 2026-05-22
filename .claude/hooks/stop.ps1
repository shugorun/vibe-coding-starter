# Stop hook for the app-development boilerplate.
# Nudges (once) to run /wrapup-project ONLY when there are real uncommitted
# changes this session AND today has no entry in docs/progress/.
# Read-only / Q&A sessions are never blocked.

$ErrorActionPreference = "SilentlyContinue"

$raw = [Console]::In.ReadToEnd()
$payload = $null
try { $payload = $raw | ConvertFrom-Json } catch { $payload = $null }

if ($payload -and $payload.stop_hook_active) {
    exit 0
}

$repoRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot "..\.."))

# Only nudge when actual work happened this session.
$changes = $null
try { $changes = & git -C $repoRoot status --porcelain 2>$null } catch { $changes = $null }
if ([string]::IsNullOrWhiteSpace(($changes -join "`n"))) {
    exit 0
}

$today = (Get-Date).ToString("yyyy-MM-dd")
$progressDir = Join-Path $repoRoot "docs\progress"

$logged = $false
if (Test-Path $progressDir) {
    $files = Get-ChildItem -Path $progressDir -Filter "*.md" -ErrorAction SilentlyContinue |
             Where-Object { $_.Name -ne "_index.md" }
    foreach ($f in $files) {
        if (Select-String -Path $f.FullName -Pattern $today -SimpleMatch -Quiet -ErrorAction SilentlyContinue) {
            $logged = $true
            break
        }
    }
}

if (-not $logged) {
    [Console]::Error.WriteLine("Changes were made but docs/progress/ has no entry for today ($today). Consider /wrapup-project. Retry stop to proceed; this only nudges once.")
    exit 2
}

exit 0
