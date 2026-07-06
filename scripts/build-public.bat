@echo off
cd /d C:\Users\timur\Projects\memora-platform
set GITHUB_PAGES=true
set GITHUB_REPOSITORY=TimurKry/memora-platform
call corepack pnpm --filter web-public build
exit /b %ERRORLEVEL%
