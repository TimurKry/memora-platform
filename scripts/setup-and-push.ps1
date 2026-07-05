# Run from project root in PowerShell:
#   .\scripts\setup-and-push.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

Write-Host ">> Enabling corepack..." -ForegroundColor Cyan
corepack enable

Write-Host ">> Installing dependencies..." -ForegroundColor Cyan
pnpm install

Write-Host ">> Building web-public and web-tenant..." -ForegroundColor Cyan
pnpm turbo build --filter=web-public --filter=web-tenant

if (-not (Test-Path .git)) {
  Write-Host ">> Initializing git..." -ForegroundColor Cyan
  git init
  git branch -M main
}

Write-Host ">> Creating commit..." -ForegroundColor Cyan
git add -A
git commit -m "feat: initial MVP scaffold with web-public and web-tenant" 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Nothing to commit or commit failed" -ForegroundColor Yellow
}

Write-Host ">> Creating GitHub repo and pushing..." -ForegroundColor Cyan
gh repo create memora-platform --public --source=. --remote=origin --description "White-label SaaS for funeral industry" --push

Write-Host ""
Write-Host "Done! Open:" -ForegroundColor Green
Write-Host "  Local:  pnpm dev:public  -> http://localhost:3000"
Write-Host "  GitHub: gh repo view --web"
