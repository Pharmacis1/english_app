# Native Windows System Tray Icon Controller for EnglishPulse AI
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$notifyIcon = New-Object System.Windows.Forms.NotifyIcon
$notifyIcon.Icon = [System.Drawing.SystemIcons]::Shield
$notifyIcon.Text = "EnglishPulse AI - Server Running (port 3000)"
$notifyIcon.Visible = $true

$contextMenu = New-Object System.Windows.Forms.ContextMenu

# Menu Item 1: Open Web App
$itemOpen = New-Object System.Windows.Forms.MenuItem
$itemOpen.Text = "🚀 Open EnglishPulse AI (http://localhost:3000)"
$itemOpen.add_Click({
    Start-Process "http://localhost:3000"
})
$contextMenu.MenuItems.Add($itemOpen) | Out-Null

# Separator
$contextMenu.MenuItems.Add("-") | Out-Null

# Menu Item 2: Exit Application & Backend Server
$itemExit = New-Object System.Windows.Forms.MenuItem
$itemExit.Text = "❌ Exit App & Stop Backend Server"
$itemExit.add_Click({
    $notifyIcon.Visible = $false
    # Kill Node.js server processes
    Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force
    [System.Windows.Forms.Application]::Exit()
})
$contextMenu.MenuItems.Add($itemExit) | Out-Null

$notifyIcon.ContextMenu = $contextMenu

# Keep PowerShell Forms loop alive
[System.Windows.Forms.Application]::Run()
