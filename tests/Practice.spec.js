const { test, expect } = require('@playwright/test');

test("Flipkart Mobile Sort test", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");

    await page.getByRole('textbox', {
    name: 'Search for Products, Brands and More'
}).fill('Mobiles');
    await page.keyboard.press("Enter");

    await page.waitForLoadState("networkidle");

    await page.getByText("Price -- High to Low").click();

    // Wait for products to reload
    await page.waitForTimeout(5000);

    const count = await page.locator("div.RG5Slk").count();
    console.log("Count = ", count);

    const mobiles = await page.locator("div.RG5Slk").allTextContents();

    console.log("Total Mobiles = ", mobiles.length);

    for (let i = 0; i < mobiles.length; i++) {
        console.log(`${i + 1}. ${mobiles[i]}`);
    }

    await page.pause();
});