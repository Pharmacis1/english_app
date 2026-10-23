# Native Windows System Tray Icon Controller for EnglishPulse AI
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$notifyIcon = New-Object System.Windows.Forms.NotifyIcon
$iconPath = Join-Path $PSScriptRoot "app_icon.ico"
if (Test-Path $iconPath) {
    $notifyIcon.Icon = New-Object System.Drawing.Icon($iconPath)
} else {
    $notifyIcon.Icon = [System.Drawing.SystemIcons]::Application
}
$notifyIcon.Text = "EnglishPulse AI"
$notifyIcon.Visible = $true

# Show startup balloon notification
$notifyIcon.BalloonTipTitle = "EnglishPulse AI Active!"
$notifyIcon.BalloonTipText = "PC: http://localhost:3010`nPhone: https://english.net-forge.ru"
$notifyIcon.BalloonTipIcon = [System.Windows.Forms.ToolTipIcon]::Info
$notifyIcon.ShowBalloonTip(3000)

$contextMenu = New-Object System.Windows.Forms.ContextMenu

# Menu Item 1: Open Web App on PC
$itemOpen = New-Object System.Windows.Forms.MenuItem
$itemOpen.Text = "Open EnglishPulse (http://localhost:3010)"
$itemOpen.add_Click({
    Start-Process "http://localhost:3010"
})
$contextMenu.MenuItems.Add($itemOpen) | Out-Null

# Menu Item 2: Copy Mobile Link
$itemCopyMobile = New-Object System.Windows.Forms.MenuItem
$itemCopyMobile.Text = "Copy Mobile Link (https://english.net-forge.ru)"
$itemCopyMobile.add_Click({
    [System.Windows.Forms.Clipboard]::SetText("https://english.net-forge.ru")
    $notifyIcon.ShowBalloonTip(2000, "EnglishPulse AI", "Mobile link copied to clipboard: https://english.net-forge.ru", [System.Windows.Forms.ToolTipIcon]::Info)
})
$contextMenu.MenuItems.Add($itemCopyMobile) | Out-Null

# Menu Item 3: Open Mobile QR Code
$itemQr = New-Object System.Windows.Forms.MenuItem
$itemQr.Text = "Open Mobile QR-Code in Browser"
$itemQr.add_Click({
    Start-Process "https://api.qrserver.com/v1/create-qr-code/?size=300x300`&data=https://english.net-forge.ru"
})
$contextMenu.MenuItems.Add($itemQr) | Out-Null

# Separator
$contextMenu.MenuItems.Add("-") | Out-Null

# Menu Item 4: Exit Application & Backend Servers
$itemExit = New-Object System.Windows.Forms.MenuItem
$itemExit.Text = "Exit App and Stop All Services"
$itemExit.add_Click({
    $notifyIcon.Visible = $false
    # Kill Node.js, Python TTS/STT, and cloudflared processes (only english_app)
    Get-Process -Name "node", "zrok" -ErrorAction SilentlyContinue | Stop-Process -Force
    Get-CimInstance Win32_Process -Filter "Name = 'cloudflared.exe'" | Where-Object { $_.CommandLine -like "*english_app*" } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
    Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -like "*kokoro_server.py*" -or $_.CommandLine -like "*whisper_server.py*" } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
    [System.Windows.Forms.Application]::Exit()
    Stop-Process -Id $PID -Force
})
$contextMenu.MenuItems.Add($itemExit) | Out-Null

$notifyIcon.ContextMenu = $contextMenu

# Keep PowerShell Forms loop alive
[System.Windows.Forms.Application]::Run()
