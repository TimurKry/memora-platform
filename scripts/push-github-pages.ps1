# Push to GitHub + enable free GitHub Pages hosting
# Run:  .\scripts\push-github-pages.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

$gh = "gh"
if (Test-Path "C:\Program Files\GitHub CLI\gh.exe") {
  $gh = "C:\Program Files\GitHub CLI\gh.exe"
}

Write-Host "=== 1/5 GitHub auth ===" -ForegroundColor Cyan
& $gh auth status
if ($LASTEXITCODE -ne 0) {
  Write-Host "Run first: gh auth login" -ForegroundColor Red
  exit 1
}

$username = & $gh api user -q .login
Write-Host "Logged in as: $username" -ForegroundColor Green

Write-Host "=== 2/5 Commit changes ===" -ForegroundColor Cyan
if (-not (Test-Path .git)) {
  git init
  git branch -M main
}
git add -A
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
  git commit -m "feat: GitHub Pages deploy for web-public demo"
}

Write-Host "=== 3/5 Push to GitHub ===" -ForegroundColor Cyan
# Do not use git remote get-url with Stop — missing origin is not an error here
$hasOrigin = $false
foreach ($remote in (& git remote 2>$null)) {
  if ($remote -eq "origin") { $hasOrigin = $true; break }
}

if (-not $hasOrigin) {
  Write-Host "No remote origin - creating GitHub repo..." -ForegroundColor Yellow
  & $gh repo create memora-platform --public --source=. --remote=origin --description "White-label SaaS for funeral industry" --push
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Repo may already exist - adding remote and pushing..." -ForegroundColor Yellow
    git remote add origin "https://github.com/$username/memora-platform.git"
    git push -u origin main
  }
} else {
  git push -u origin main
}

Write-Host "=== 4/5 Enable GitHub Pages ===" -ForegroundColor Cyan
$prevEap = $ErrorActionPreference
$ErrorActionPreference = "Continue"
& $gh api "repos/$username/memora-platform/pages" -X POST -f build_type=workflow 2>$null | Out-Null
$ErrorActionPreference = $prevEap
Write-Host "Pages configured (or already enabled)" -ForegroundColor Green

Write-Host "=== 5/5 Trigger deploy workflow ===" -ForegroundColor Cyan
Start-Sleep -Seconds 2
$ErrorActionPreference = "Continue"
& $gh workflow run deploy-pages.yml 2>$null | Out-Null
$ErrorActionPreference = $prevEap

$pagesUrl = "https://$username.github.io/memora-platform/"
$repoUrl = "https://github.com/$username/memora-platform"

Write-Host ""
Write-Host "DONE" -ForegroundColor Green
Write-Host "Repo: $repoUrl"
Write-Host "Site: $pagesUrl"
Write-Host "Demo: ${pagesUrl}demo/"
Write-Host "Deploy takes 2-3 minutes. Run: gh run list" -ForegroundColor Yellow
