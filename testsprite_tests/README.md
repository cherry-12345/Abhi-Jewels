# TestSprite Test Suite for AJ Abhi Jewels

This directory contains automated end-to-end tests for the AJ Abhi Jewels e-commerce platform using TestSprite and Playwright.

## Test Cases

| Test ID | Description | Status |
|---------|-------------|--------|
| TC001 | Landing Page Load and Content Display | ✓ |
| TC002 | Product Browsing with Filters and Search | ✓ |
| TC003 | Product Detail Page Display | Partial |
| TC004 | Add to Cart and Cart State Persistence | ✓ |
| TC005 | Wishlist Item Management | ✓ |
| TC006 | Checkout Process with Form Validation | ✓ |
| TC007 | Admin Authentication Security | ✓ |
| TC008 | Admin Console Product CRUD Operations | ✓ |
| TC009 | SEO Features and Metadata Generation | ✓ |
| TC010 | Responsive Design Across Devices | Partial |
| TC011 | Error Boundaries and Error Handling | Pending |
| TC012 | Modern UX Enhancements | Partial |

## Prerequisites

1. **Python 3.8+** installed
2. **Playwright** browser automation framework
3. **Node.js and npm** for running the Next.js dev server

## Installation

### 1. Install Python Dependencies

```bash
pip install playwright
```

### 2. Install Playwright Browsers

```bash
playwright install chromium
```

## Running Tests

### Option 1: Run All Tests

1. Start the Next.js dev server:
```bash
npm run dev
```

2. In a new terminal, run all tests:
```bash
cd testsprite_tests
python run_all_tests.py
```

### Option 2: Run Individual Tests

```bash
cd testsprite_tests
python TC001_Landing_Page_Load_and_Content_Display.py
```

### Option 3: Run Specific Test Categories

**E-commerce Tests:**
```bash
python TC001_Landing_Page_Load_and_Content_Display.py
python TC002_Product_Browsing_with_Filters_and_Search.py
python TC004_Add_to_Cart_and_Cart_State_Persistence.py
python TC006_Checkout_Process_with_Form_Validation_and_Payment_Options.py
```

**Admin Tests:**
```bash
python TC007_Admin_Authentication_Security_and_Rate_Limiting.py
python TC008_Admin_Console_Product_CRUD_Operations.py
```

**Technical Tests:**
```bash
python TC009_SEO_Features_and_Metadata_Generation.py
python TC010_Responsive_Design_Across_Devices.py
python TC011_Error_Boundaries_and_Component_Error_Handling.py
python TC012_Modern_UX_Enhancements_Verification.py
```

## Test Configuration

Tests are configured to run against:
- **URL:** `http://localhost:3000`
- **Browser:** Chromium (headless)
- **Viewport:** 1280x720
- **Timeout:** 10 seconds for page loads, 5 seconds for element interactions

## Test Results

After running tests:
1. Console output shows real-time test progress
2. Results are saved to `test_results_[timestamp].txt`
3. HTML report available at `testsprite-mcp-test-report.html`
4. Markdown report available at `testsprite-mcp-test-report.md`

## Recent Fixes (December 12, 2025)

✅ **Fixed Issues:**
1. **Wishlist Authentication** - Removed authentication requirement for wishlist page
2. **Collections Filter Reset** - Fixed filter clear functionality to restore full product list
3. **Admin Product Creation** - Added better error handling and validation
4. **SEO Sitemap URL** - Ensured proper baseUrl configuration in robots.txt

## Troubleshooting

### Dev Server Not Running
```
ERROR: Dev server is not running!
```
**Solution:** Start the dev server with `npm run dev` before running tests.

### Playwright Not Installed
```
ModuleNotFoundError: No module named 'playwright'
```
**Solution:** Run `pip install playwright` and then `playwright install chromium`

### Test Timeout
```
Test timed out after 60 seconds
```
**Solution:** Check if the dev server is responsive and not stuck on a build error.

### Port Already in Use
```
Error: Port 3000 is already in use
```
**Solution:** Kill the process using port 3000 or change the port in Next.js config.

## CI/CD Integration

To run tests in CI/CD pipelines:

```yaml
- name: Install Playwright
  run: |
    pip install playwright
    playwright install chromium --with-deps

- name: Start Dev Server
  run: npm run dev &
  
- name: Wait for Server
  run: npx wait-on http://localhost:3000

- name: Run Tests
  run: python testsprite_tests/run_all_tests.py
```

## Contributing

When adding new tests:
1. Follow the naming convention: `TC###_Test_Description.py`
2. Add test metadata to `testsprite_frontend_test_plan.json`
3. Update this README with the new test case
4. Ensure tests are idempotent and can run independently

## Support

For issues or questions:
- Check the test reports in the `testsprite_tests` directory
- Review console output for detailed error messages
- Ensure all prerequisites are installed correctly
