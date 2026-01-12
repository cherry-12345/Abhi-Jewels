# Quick Start Guide - TestSprite Testing

## 🚀 Quick Run

### Windows (PowerShell)
```powershell
# 1. Start dev server (in terminal 1)
npm run dev

# 2. Run all tests (in terminal 2)
cd testsprite_tests
.\run_tests.ps1
```

### macOS/Linux (Bash)
```bash
# 1. Start dev server (in terminal 1)
npm run dev

# 2. Run all tests (in terminal 2)
cd testsprite_tests
python run_all_tests.py
```

## 📋 Run Specific Tests

### PowerShell
```powershell
# Run test by number
.\run_tests.ps1 -TestCase 1     # Landing page test
.\run_tests.ps1 -TestCase 4     # Cart test
.\run_tests.ps1 -TestCase 7     # Admin auth test
```

### Python (all platforms)
```bash
# Run individual test
python TC001_Landing_Page_Load_and_Content_Display.py
python TC004_Add_to_Cart_and_Cart_State_Persistence.py
python TC007_Admin_Authentication_Security_and_Rate_Limiting.py
```

## 🎯 Test Categories

**Frontend E-commerce (TC001-TC006)**
- Landing page, product browsing, cart, checkout

**Admin Functions (TC007-TC008)**  
- Authentication, product management

**Technical (TC009-TC012)**
- SEO, responsive design, error handling, UX

## ✅ Recent Fixes Applied

| Issue | Status | Fix |
|-------|--------|-----|
| Wishlist requires admin login | ✅ Fixed | Removed from protected routes |
| Collections filter reset broken | ✅ Fixed | Added proper clear handler |
| Admin product creation error | ✅ Fixed | Enhanced validation & error handling |
| SEO sitemap URL | ✅ Fixed | Verified proper baseUrl usage |

## 📊 View Results

After running tests, check:
- **Console** - Real-time progress & summary
- **testsprite-mcp-test-report.html** - Visual report (open in browser)
- **testsprite-mcp-test-report.md** - Markdown report  
- **test_results_[timestamp].txt** - Detailed log

## 🔧 Prerequisites

```bash
# Install Python dependencies
pip install playwright

# Install browser
playwright install chromium
```

## ❓ Common Issues

**Server not running?**
```bash
npm run dev
```

**Playwright not found?**
```bash
pip install playwright
playwright install chromium
```

**Port 3000 in use?**
```bash
# Windows
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# macOS/Linux
lsof -ti:3000 | xargs kill
```

## 📈 Expected Results

After fixes, you should see **10-11/12 tests passing** (83-92% pass rate).

Tests that may still need attention:
- TC003: Product image carousel/zoom (enhancement)
- TC010: Responsive design (environment dependent)
- TC011: Error boundaries (requires error injection)
