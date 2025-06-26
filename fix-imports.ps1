# PowerShell script to fix all @/lib/utils imports in UI components
$files = Get-ChildItem -Path "src/components/ui" -Filter "*.tsx"

$fixedCount = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Replace @/lib/utils with ../../lib/utils
    $content = $content -replace 'import\s*\{\s*cn\s*\}\s*from\s*"@/lib/utils";', 'import { cn } from "../../lib/utils";'
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "✅ Fixed imports in $($file.Name)" -ForegroundColor Green
        $fixedCount++
    }
}

Write-Host "`n🎉 Fixed imports in $fixedCount files" -ForegroundColor Cyan

if ($fixedCount -eq 0) {
    Write-Host "✨ All imports are already correct!" -ForegroundColor Yellow
}
