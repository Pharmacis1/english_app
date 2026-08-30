# EnglishPulse Mobile Tunnel Launcher (zrok / cloudflared)
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
Write-Host "2. Looking for tunnel tools (zrok or cloudflared)..." -ForegroundColor White

$hasZrok = Get-Command zrok -ErrorAction SilentlyContinue
$hasCloudflared = Get-Command cloudflared -ErrorAction SilentlyContinue

if ($hasZrok) {
    Write-Host "-> Found 'zrok'! Starting public HTTPS tunnel..." -ForegroundColor Cyan
    Write-Host "-> Scan the QR code or open the generated HTTPS link on your phone!" -ForegroundColor Yellow
    zrok share public http://localhost:3000
} elseif ($hasCloudflared) {
    Write-Host "-> Found 'cloudflared'! Starting Cloudflare HTTPS tunnel..." -ForegroundColor Cyan
    cloudflared tunnel --url http://localhost:3000
} else {
    Write-Host "-> No tunnel CLI tool found. Using npx localtunnel (zero install required)..." -ForegroundColor Yellow
    Write-Host "-> Starting localtunnel on port 3000 with HTTPS..." -ForegroundColor Cyan
    npx localtunnel --port 3000
}
