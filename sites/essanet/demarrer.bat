@echo off
chcp 65001 >nul
title GSMAG — Site vitrine ESSANET
cd /d "%~dp0"

echo.
echo  ========================================
echo   GSMAG / ESSANET — Demarrage du site
echo  ========================================
echo.

where py >nul 2>&1
if %errorlevel%==0 (
  echo  Serveur local : http://localhost:8080
  echo  Fermez cette fenetre pour arreter.
  echo.
  start "" "http://localhost:8080"
  py -m http.server 8080
  goto :eof
)

where python >nul 2>&1
if %errorlevel%==0 (
  echo  Serveur local : http://localhost:8080
  echo  Fermez cette fenetre pour arreter.
  echo.
  start "" "http://localhost:8080"
  python -m http.server 8080
  goto :eof
)

echo  Python introuvable — ouverture directe de index.html
echo.
start "" "%~dp0index.html"
pause
