#!/usr/bin/env python3
"""
TestSprite Test Runner for AJ Abhi Jewels
Runs all test cases and generates a comprehensive report
"""

import asyncio
import subprocess
import sys
import os
from datetime import datetime
from pathlib import Path

# Test cases to run
TEST_CASES = [
    "TC001_Landing_Page_Load_and_Content_Display.py",
    "TC002_Product_Browsing_with_Filters_and_Search.py",
    "TC003_Product_Detail_Page_Display_and_Related_Products.py",
    "TC004_Add_to_Cart_and_Cart_State_Persistence.py",
    "TC005_Wishlist_Item_Management_and_Persistence.py",
    "TC006_Checkout_Process_with_Form_Validation_and_Payment_Options.py",
    "TC007_Admin_Authentication_Security_and_Rate_Limiting.py",
    "TC008_Admin_Console_Product_CRUD_Operations.py",
    "TC009_SEO_Features_and_Metadata_Generation.py",
    "TC010_Responsive_Design_Across_Devices.py",
    "TC011_Error_Boundaries_and_Component_Error_Handling.py",
    "TC012_Modern_UX_Enhancements_Verification.py",
]

class Colors:
    """ANSI color codes for terminal output"""
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def print_header(message):
    """Print a formatted header"""
    print(f"\n{Colors.HEADER}{Colors.BOLD}{'='*80}{Colors.ENDC}")
    print(f"{Colors.HEADER}{Colors.BOLD}{message.center(80)}{Colors.ENDC}")
    print(f"{Colors.HEADER}{Colors.BOLD}{'='*80}{Colors.ENDC}\n")

def print_test_start(test_name, number, total):
    """Print test start message"""
    print(f"{Colors.OKCYAN}{Colors.BOLD}[{number}/{total}] Running: {test_name}{Colors.ENDC}")

def print_test_result(test_name, passed, duration):
    """Print test result"""
    if passed:
        status = f"{Colors.OKGREEN}[PASS]{Colors.ENDC}"
    else:
        status = f"{Colors.FAIL}[FAIL]{Colors.ENDC}"
    
    print(f"    {status} - {test_name} ({duration:.2f}s)\n")

def check_server_running():
    """Check if the Next.js dev server is running"""
    try:
        import urllib.request
        urllib.request.urlopen("http://localhost:3000", timeout=2)
        return True
    except:
        return False

async def run_test(test_file, test_number, total_tests):
    """Run a single test case"""
    test_name = test_file.replace(".py", "").replace("_", " ")
    print_test_start(test_name, test_number, total_tests)
    
    start_time = datetime.now()
    
    try:
        # Run the test
        result = subprocess.run(
            [sys.executable, test_file],
            cwd=Path(__file__).parent,
            capture_output=True,
            text=True,
            timeout=60
        )
        
        duration = (datetime.now() - start_time).total_seconds()
        passed = result.returncode == 0
        
        print_test_result(test_name, passed, duration)
        
        return {
            "name": test_name,
            "file": test_file,
            "passed": passed,
            "duration": duration,
            "stdout": result.stdout,
            "stderr": result.stderr,
        }
    except subprocess.TimeoutExpired:
        duration = 60.0
        print_test_result(test_name, False, duration)
        return {
            "name": test_name,
            "file": test_file,
            "passed": False,
            "duration": duration,
            "error": "Test timed out after 60 seconds",
        }
    except Exception as e:
        duration = (datetime.now() - start_time).total_seconds()
        print_test_result(test_name, False, duration)
        return {
            "name": test_name,
            "file": test_file,
            "passed": False,
            "duration": duration,
            "error": str(e),
        }

def generate_summary(results):
    """Generate and print test summary"""
    print_header("TEST SUMMARY")
    
    total = len(results)
    passed = sum(1 for r in results if r["passed"])
    failed = total - passed
    total_duration = sum(r["duration"] for r in results)
    
    # Overall stats
    print(f"{Colors.BOLD}Total Tests:{Colors.ENDC} {total}")
    print(f"{Colors.OKGREEN}{Colors.BOLD}Passed:{Colors.ENDC} {passed} ({passed/total*100:.1f}%)")
    print(f"{Colors.FAIL}{Colors.BOLD}Failed:{Colors.ENDC} {failed} ({failed/total*100:.1f}%)")
    print(f"{Colors.BOLD}Total Duration:{Colors.ENDC} {total_duration:.2f}s\n")
    
    # Failed tests details
    if failed > 0:
        print(f"{Colors.FAIL}{Colors.BOLD}Failed Tests:{Colors.ENDC}")
        for result in results:
            if not result["passed"]:
                print(f"  {Colors.FAIL}[-]{Colors.ENDC} {result['name']}")
                if "error" in result:
                    print(f"    Error: {result['error']}")
        print()
    
    # Passed tests
    print(f"{Colors.OKGREEN}{Colors.BOLD}Passed Tests:{Colors.ENDC}")
    for result in results:
        if result["passed"]:
            print(f"  {Colors.OKGREEN}[+]{Colors.ENDC} {result['name']} ({result['duration']:.2f}s)")
    
    return passed, failed

async def main():
    """Main test runner"""
    print_header("TestSprite Test Suite - AJ Abhi Jewels")
    
    # Check if server is running
    print(f"{Colors.BOLD}Checking if dev server is running...{Colors.ENDC}")
    if not check_server_running():
        print(f"{Colors.FAIL}{Colors.BOLD}ERROR: Dev server is not running!{Colors.ENDC}")
        print(f"{Colors.WARNING}Please start the dev server first:{Colors.ENDC}")
        print(f"  npm run dev")
        print(f"\nOr run in a new terminal and then re-run this script.\n")
        sys.exit(1)
    
    print(f"{Colors.OKGREEN}[OK] Dev server is running{Colors.ENDC}\n")
    
    # Run all tests
    results = []
    for i, test_file in enumerate(TEST_CASES, 1):
        result = await run_test(test_file, i, len(TEST_CASES))
        results.append(result)
    
    # Generate summary
    passed, failed = generate_summary(results)
    
    # Save results to file
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    report_file = f"test_results_{timestamp}.txt"
    
    with open(report_file, "w") as f:
        f.write(f"TestSprite Test Results - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write("="*80 + "\n\n")
        f.write(f"Total Tests: {len(results)}\n")
        f.write(f"Passed: {passed}\n")
        f.write(f"Failed: {failed}\n")
        f.write(f"Pass Rate: {passed/len(results)*100:.1f}%\n\n")
        
        for result in results:
            status = "PASSED" if result["passed"] else "FAILED"
            f.write(f"\n{result['name']}: {status} ({result['duration']:.2f}s)\n")
            if not result["passed"] and "error" in result:
                f.write(f"  Error: {result['error']}\n")
    
    print(f"\n{Colors.BOLD}Results saved to:{Colors.ENDC} {report_file}\n")
    
    # Exit with appropriate code
    sys.exit(0 if failed == 0 else 1)

if __name__ == "__main__":
    asyncio.run(main())
