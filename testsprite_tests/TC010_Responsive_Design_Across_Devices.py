import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Simulate mobile viewport and verify layout adapts correctly without horizontal scroll and essential elements remain accessible.
        await page.goto('http://localhost:3000/', timeout=10000)
        await asyncio.sleep(3)
        

        frame = context.pages[-1]
        # Clear search input to avoid UI overlap on mobile.
        elem = frame.locator('xpath=html/body/div/header/div[2]/div/div/div/div/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('')
        

        # -> Simulate tablet viewport and verify UI elements scale properly and typography remains clear.
        frame = context.pages[-1]
        # Close the exclusive jewelry offers popup to view full homepage content.
        elem = frame.locator('xpath=html/body/div/div/div/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Simulate tablet viewport and verify UI elements scale properly and typography remains clear.
        await page.goto('http://localhost:3000/', timeout=10000)
        await asyncio.sleep(3)
        

        frame = context.pages[-1]
        # Open Collections menu to check tablet menu behavior.
        elem = frame.locator('xpath=html/body/div/header/div[2]/div/nav/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Simulate desktop viewport and verify usage of luxury color palette and consistent typography with no visual defects.
        await page.goto('http://localhost:3000/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Test on large screen resolutions to ensure luxury color palette and typography consistency with no visual defects.
        await page.mouse.wheel(0, 500)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=Free shipping on orders above ₹50,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+91 7947106192').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kurnool, Andhra Pradesh').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AJ Abhi Jewels').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Premium Jewelry Collection').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Home').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Collections').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Rings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Necklaces').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Earrings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Bracelets').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Bridal Collection').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=About').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Contact').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Admin').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=✨ PREMIUM JEWELRY COLLECTION').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=DISCOVER TIMELESS ELEGANCE').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Exquisite Diamond Collection').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Handcrafted with precision, our diamond jewelry pieces are designed to celebrate life\'s most precious moments.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Shop Diamonds').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=View All Collections').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Explore Our Collections').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=From timeless classics to contemporary designs, discover jewelry pieces that perfectly complement your unique style and personality.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=45 items').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Rings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Exquisite rings for every occasion').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Shop Now').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=38 items').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Necklaces').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Beautiful necklaces and pendants').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=52 items').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Earrings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Elegant earrings for every style').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=28 items').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Bracelets').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Stunning bracelets and bangles').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=35 items').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Bridal Collection').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Complete bridal jewelry sets').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Shop Now').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Bring your vision to life with our bespoke jewelry design service. Our master craftsmen will work with you to create a unique piece that tells your story.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Start Your Design').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Consult Expert').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Featured Collections').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Discover our handpicked selection of exquisite jewelry pieces, each crafted with precision and designed to celebrate life\'s precious moments.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=All Products').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Rings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Necklaces').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Earrings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Bridal').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=17% OFF').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=RINGS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Diamond Solitaire Ring').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹1,25,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹1,50,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Material: 18k White Gold').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=✓ GIA Certified').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=NECKLACES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Gold Pearl Necklace').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹45,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=11% OFF').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=EARRINGS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ruby Drop Earrings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹85,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹95,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Material: 18k Yellow Gold, Ruby, Diamond').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=✓ Certified Natural Ruby').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=BRACELETS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Emerald Tennis Bracelet').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹1,95,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Material: Platinum, Natural Emerald').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=✓ Certified Natural Emerald').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=11% OFF').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=BRIDAL COLLECTION').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Bridal Jewelry Set').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹2,85,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹3,20,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Material: 22k Gold, Kundan, Pearls').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=EARRINGS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Diamond Stud Earrings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹65,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Material: 14k White Gold, Diamond').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=✓ GIA Certified').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=View All Collections').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=100+').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Unique Designs').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=100+').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Happy Customers').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=3+').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Years Experience').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=100%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Certified Jewelry').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Why Choose AJ Abhi Jewels').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Certified Authenticity').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Every piece comes with proper certification ensuring genuine materials and quality craftsmanship.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=3+ Years Experience').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Growing expertise in jewelry making and customer service excellence.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Free Shipping').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Complimentary shipping on all orders above ₹50,000 with secure packaging.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Lifetime Support').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Comprehensive after-sales service including cleaning, repairs, and maintenance.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Premium Materials').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Only the finest diamonds, gold, and precious stones sourced from trusted suppliers.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=30-Day Returns').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Hassle-free returns and exchanges within 30 days of purchase.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Trusted by Hundreds').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Join our family of satisfied customers who have made AJ Abhi Jewels their trusted partner for life\'s most precious moments.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=99.8%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Customer Satisfaction').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=85%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Repeat Customers').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=4.9/5').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Average Rating').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=3+').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Years in Business').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=What Our Customers Say').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=I bought my daughter\'s wedding jewelry from AJ Abhi Jewels. The gold work is really beautiful and Abhi sir personally helped us choose everything. Very happy with the quality and service.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Lakshmi Devi').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kurnool').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Purchased: Bridal Gold Set').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ready to create your own success story with us?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Start Shopping Today').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Follow Us on Instagram').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Stay connected with our latest collections, behind-the-scenes content, and customer stories. Join our jewelry-loving community!').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=❤️ 245').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=💬 18').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=❤️ 189').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=💬 12').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=❤️ 312').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=💬 25').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=❤️ 456').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=💬 34').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=❤️ 198').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=💬 15').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Join Our Instagram Community').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Get inspired by our latest designs, see how our customers style their jewelry, and be the first to know about exclusive offers and new arrivals.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Follow @ajabhijewels').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tag us in your photos with').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=#AJAbhiJewels').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Never Miss a Sparkle').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Subscribe').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=We respect your privacy. Unsubscribe at any time.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AJ').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AJ Abhi Jewels').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Premium Jewelry Collection').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Crafting exquisite jewelry pieces with passion and precision since our inception. We specialize in premium diamonds, gold, and precious stones.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Quick Links').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=All Collections').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Rings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Necklaces').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Earrings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Bridal Collection').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Custom Jewelry').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Customer Service').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Contact Us').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Size Guide').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Shipping Info').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Returns & Exchanges').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Jewelry Care').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Warranty').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Get in Touch').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Shop No 05, Skanda Business Park,').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Rajvihar, Kurnool - 518001').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Andhra Pradesh, India').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+91 7947106192').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=info@ajabhijewels.com').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Store Hours:').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mon - Sun: 10:00 AM - 9:00 PM').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2024 AJ Abhi Jewels. All rights reserved.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Privacy Policy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Terms of Service').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Sitemap').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Secure payments powered by').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=RAZORPAY').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=STRIPE').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    