$p = Start-Process zrok -ArgumentList "share public http://localhost:3000 --headless" -RedirectStandardOutput "zrok_out.log" -RedirectStandardError "zrok_err.log" -PassThru
Start-Sleep -Seconds 4
if (Test-Path "zrok_out.log") { Get-Content "zrok_out.log" }
if (Test-Path "zrok_err.log") { Get-Content "zrok_err.log" }
if ($p -and -not $p.HasExited) { Stop-Process -Id $p.Id -Force }
