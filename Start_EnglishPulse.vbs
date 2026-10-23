' 1-Click Silent Windows Launcher for EnglishPulse AI
Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

AppDir = fso.GetParentFolderName(WScript.ScriptFullName)

' 1. Launch Node.js Express server silently
WshShell.Run "cmd /c cd /d """ & AppDir & """ && node server.js", 0, False

' 2. Launch Local Whisper STT Server silently (Port 8000)
WshShell.Run "cmd /c cd /d """ & AppDir & """ && python whisper_server.py", 0, False

' 3. Launch Local Kokoro TTS Server silently (Port 8880)
WshShell.Run "cmd /c cd /d """ & AppDir & """ && python kokoro_server.py", 0, False

' 4. Launch Cloudflare Tunnel silently (https://english.net-forge.ru)
WshShell.Run "powershell -WindowStyle Hidden -Command ""$proc = Get-CimInstance Win32_Process -Filter \""Name = 'cloudflared.exe'\"" | Where-Object { $_.CommandLine -like '*english_app*' }; if (-not $proc) { Start-Process -FilePath """ & AppDir & "\cloudflared.exe"" -ArgumentList 'tunnel --metrics 127.0.0.1:20260 run --token eyJhIjoiYzNjZWU5MjU3NWM5Y2RhNDJlMWExMmVkYmU2NGIyNTYiLCJ0IjoiZDY0N2Q2NmMtN2Y0OS00OWUzLWIyMTMtMWQ1NmEyZjBiZTAzIiwicyI6Ik9XTXlOVFF4TXprdE5qSXlZaTAwWTJJNUxUaGlOalF0T0dJME5UZG1OVFk1T1dFeCJ9' -WindowStyle Hidden -WorkingDirectory """ & AppDir & """ }""", 0, False

' 5. Wait 1.5 seconds for server startup
WScript.Sleep 1500

' 6. Launch System Tray Icon Controller silently
WshShell.Run "powershell -ExecutionPolicy Bypass -WindowStyle Hidden -File """ & AppDir & "\tray_launcher.ps1""", 0, False

' 7. Open Web App in default browser
WshShell.Run "http://localhost:3010", 1, False
