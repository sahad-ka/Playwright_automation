import test from '@playwright/test';
test("My first test",async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://watchexindia.com");
})
