# EnglishPulse Mobile Tunnel Launcher (zrok reserved share)
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "  ENGLISH PULSE RPG - MOBILE ACCESS LAUNCHER     " -ForegroundColor Yellow
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Checking if Node.js server is running on port 3000..." -ForegroundColor White

$serverRunning = Test-NetConnection -ComputerName 127.0.0.1 -Port 3000 -InformationLevel Quiet
if (-not $serverRunning) {
    Write-Host "-> Starting local server (server.js)..." -ForegroundColor Green
    Start-Process node -ArgumentList "server.js" -WorkingDirectory $PSScriptRoot
    Start-Sleep -Seconds 2
} else {
    Write-Host "-> Local server is already running on port 3000! OK." -ForegroundColor Green
}

Write-Host ""
Write-Host "2. Starting zrok reserved HTTPS tunnel..." -ForegroundColor White
Write-Host ""
Write-Host "   PERMANENT MOBILE ADDRESS:" -ForegroundColor Yellow
Write-Host "   https://englishpulserpg.share.zrok.io" -ForegroundColor Green
Write-Host ""
Write-Host "   Open this link on your phone!" -ForegroundColor Cyan
Write-Host ""

zrok share reserved englishpulserpg --headless
