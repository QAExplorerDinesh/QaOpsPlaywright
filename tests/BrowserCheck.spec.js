import { test } from '@playwright/test';
import { chromium } from 'playwright';

test('Browser Check', async () => {

    const browser = await chromium.launch({
        headless: false,
        slowMo: 50
    });

    const page = await browser.newPage();

    await page.goto('https://www.google.com');

    console.log(await page.title());

    await browser.close();

});