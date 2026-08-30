' Automatic Desktop Shortcut Creator for EnglishPulse AI
Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

DesktopPath = WshShell.SpecialFolders("Desktop")
AppDir = fso.GetParentFolderName(WScript.ScriptFullName)
VbsScript = AppDir & "\Start_EnglishPulse.vbs"

System32Folder = fso.GetSpecialFolder(1).Path
WscriptExe = System32Folder & "\wscript.exe"

ShortcutPath = DesktopPath & "\EnglishPulse AI.lnk"

Set shortcut = WshShell.CreateShortcut(ShortcutPath)
shortcut.TargetPath = WscriptExe
shortcut.Arguments = """" & VbsScript & """"
shortcut.WorkingDirectory = AppDir
shortcut.Description = "Launch EnglishPulse AI RPG & Backend Server"
shortcut.IconLocation = AppDir & "\app_icon.ico"
shortcut.Save

WScript.Echo "🎉 Desktop Shortcut 'EnglishPulse AI' successfully updated!"
