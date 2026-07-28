' Automatic Desktop Shortcut Creator for EnglishPulse AI
Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

DesktopPath = WshShell.SpecialFolders("Desktop")
AppDir = fso.GetParentFolderName(WScript.ScriptFullName)
TargetScript = AppDir & "\Start_EnglishPulse.vbs"

ShortcutPath = DesktopPath & "\EnglishPulse AI.lnk"

Set shortcut = WshShell.CreateShortcut(ShortcutPath)
shortcut.TargetPath = TargetScript
shortcut.WorkingDirectory = AppDir
shortcut.Description = "Launch EnglishPulse AI RPG & Backend Server"
shortcut.IconLocation = "shell32.dll,23" ' Shield/Lightning Icon
shortcut.Save

WScript.Echo "🎉 Desktop Shortcut 'EnglishPulse AI' successfully created on your Desktop!"
