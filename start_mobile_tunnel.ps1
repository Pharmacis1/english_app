# EnglishPulse Mobile Tunnel Launcher (Cloudflare Tunnel)
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "  ENGLISH PULSE RPG - MOBILE ACCESS LAUNCHER     " -ForegroundColor Yellow
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Checking if Node.js server is running on port 3010..." -ForegroundColor White

$serverRunning = Test-NetConnection -ComputerName 127.0.0.1 -Port 3010 -InformationLevel Quiet
if (-not $serverRunning) {
    Write-Host "-> Starting local server (server.js)..." -ForegroundColor Green
    Start-Process node -ArgumentList "server.js" -WorkingDirectory $PSScriptRoot
    Start-Sleep -Seconds 2
} else {
    Write-Host "-> Local server is already running on port 3010! OK." -ForegroundColor Green
}

Write-Host ""
Write-Host "2. Starting Cloudflare HTTPS tunnel..." -ForegroundColor White
Write-Host ""
Write-Host "   PERMANENT MOBILE ADDRESS:" -ForegroundColor Yellow
Write-Host "   https://english.net-forge.ru" -ForegroundColor Green
Write-Host ""
Write-Host "   Open this link on your phone!" -ForegroundColor Cyan
Write-Host ""

& "$PSScriptRoot\cloudflared.exe" tunnel run --token eyJhIjoiYzNjZWU5MjU3NWM5Y2RhNDJlMWExMmVkYmU2NGIyNTYiLCJ0IjoiZDY0N2Q2NmMtN2Y0OS00OWUzLWIyMTMtMWQ1NmEyZjBiZTAzIiwicyI6Ik9XTXlOVFF4TXprdE5qSXlZaTAwWTJJNUxUaGlOalF0T0dJME5UZG1OVFk1T1dFeCJ9
