# PowerShell script to run TestSprite tests
# Run with: .\run_tests.ps1

param(
    [string]$TestCase = "all",
    [switch]$NoServer
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  TestSprite Test Runner" -ForegroundColor Cyan
Write-Host "  AJ Abhi Jewels" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Python is installed
try {
    $pythonVersion = python --version 2>&1
    Write-Host "✓ Python found: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Python not found! Please install Python 3.8+" -ForegroundColor Red
    exit 1
}

# Check if Playwright is installed
try {
    python -c "import playwright" 2>$null
    Write-Host "✓ Playwright installed" -ForegroundColor Green
} catch {
    Write-Host "✗ Playwright not installed!" -ForegroundColor Red
    Write-Host "  Install with: pip install playwright" -ForegroundColor Yellow
    Write-Host "  Then run: playwright install chromium" -ForegroundColor Yellow
    exit 1
}

# Check if dev server is running (unless -NoServer flag is used)
if (-not $NoServer) {
    Write-Host ""
    Write-Host "Checking if dev server is running..." -ForegroundColor Yellow
    
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:3000" -TimeoutSec 2 -UseBasicParsing -ErrorAction Stop
        Write-Host "✓ Dev server is running" -ForegroundColor Green
    } catch {
        Write-Host "✗ Dev server is not running!" -ForegroundColor Red
        Write-Host ""
        Write-Host "Please start the dev server first:" -ForegroundColor Yellow
        Write-Host "  npm run dev" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Or use -NoServer flag if you have a different setup" -ForegroundColor Yellow
        exit 1
    }
}

Write-Host ""
Write-Host "Running tests..." -ForegroundColor Cyan
Write-Host ""

# Change to test directory
Push-Location $PSScriptRoot

try {
    if ($TestCase -eq "all") {
        # Run all tests using the Python test runner
        python run_all_tests.py
    } else {
        # Run specific test case
        $testFile = "TC" + $TestCase.PadLeft(3, '0') + "_*.py"
        $matchingTests = Get-ChildItem -Filter $testFile
        
        if ($matchingTests.Count -eq 0) {
            Write-Host "✗ No test found matching: $testFile" -ForegroundColor Red
            exit 1
        }
        
        foreach ($test in $matchingTests) {
            Write-Host "Running: $($test.Name)" -ForegroundColor Cyan
            python $test.Name
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "✓ Test passed: $($test.Name)" -ForegroundColor Green
            } else {
                Write-Host "✗ Test failed: $($test.Name)" -ForegroundColor Red
            }
            Write-Host ""
        }
    }
} finally {
    Pop-Location
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Tests Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
