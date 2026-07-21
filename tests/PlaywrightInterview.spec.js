import { test, expect } from '@playwright/test';

/*test('Search Yoga Mat and click first product', async ({ page }) => {

  // Navigate to Amazon
  await page.goto('https://www.amazon.in');

  // Search for Yoga Mat
  await page.locator('#twotabsearchtextbox').fill('Yoga Mat');
  await page.keyboard.press('Enter');

  // Wait for search results
  await page.waitForSelector('[data-component-type="s-search-result"] h2');

  // Get all product titles
  const products = page.locator('[data-component-type="s-search-result"] h2');

  const count = await products.count();
  console.log(`Total Products: ${count}`);

  // Print all product names
  for (let i = 0; i < count; i++) {
    const productName = await products.nth(i).textContent();
    console.log(`${i + 1}. ${productName}`);
  }

  // Click first product
  const firstProduct = products.first();

  console.log(
    "Clicking Product:",
    await firstProduct.textContent()
  );

  await firstProduct.click();
});

*/
/*test('Dropdown Test', async ({ page }) => {
  // Navigate to the dropdown page
  await page.goto('https://the-internet.herokuapp.com/dropdown');


  await page.locator('[id="dropdown"]').selectOption('2');
  await expect(page.locator('[id="dropdown"]')).toHaveValue('2');

  await page.pause();

})
  */

test('Alert Test', async ({ page }) => {
// Navigate to the dropdown page
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  await page.getByRole('button',{name:'Click for JS Alert'}).click();

  page.on('dialog', async dialog=> {

    console.log(dialog.message());

    await dialog.accept();

  })

  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

    const text = await page.locator('#result').textContent();

    console.log(text);

    await page.pause();


})