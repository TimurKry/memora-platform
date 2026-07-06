@echo off
cd /d C:\Users\timur\Projects\memora-platform
git add -A
git commit -m "fix: GitHub Actions pnpm version conflict"
git push
gh workflow run deploy-pages.yml --repo TimurKry/memora-platform
