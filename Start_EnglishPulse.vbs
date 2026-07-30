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

' 4. Wait 1.5 seconds for server startup
WScript.Sleep 1500

' 5. Launch System Tray Icon Controller silently
WshShell.Run "powershell -ExecutionPolicy Bypass -WindowStyle Hidden -File """ & AppDir & "\tray_launcher.ps1""", 0, False

' 6. Open Web App in default browser
WshShell.Run "http://localhost:3000", 1, False
