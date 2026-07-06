@echo off
cd /d C:\Users\timur\Projects\memora-platform
git add -A
git commit -m "fix: GitHub Pages deploy and CI workflow"
git push
gh workflow run deploy-pages.yml --repo TimurKry/memora-platform
echo Done. Check: gh run list --repo TimurKry/memora-platform --limit 3
