# Stop hook for the app-development boilerplate.

$ErrorActionPreference = "SilentlyContinue"

$raw = [Console]::In.ReadToEnd()
$payload = $null
try { $payload = $raw | ConvertFrom-Json } catch { $payload = $null }

if ($payload -and $payload.stop_hook_active) {
    exit 0
}

$today = (Get-Date).ToString("yyyy-MM-dd")
$progressDir = Join-Path $PSScriptRoot "..\..\docs\progress"
$progressDir = [System.IO.Path]::GetFullPath($progressDir)

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
    [Console]::Error.WriteLine("No entry for today ($today) found in docs/progress/. Run /wrapup-project if changes were made this session. If no changes, retry stop; this hook only blocks once.")
    exit 2
}

exit 0
