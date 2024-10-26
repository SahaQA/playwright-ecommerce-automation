const {test, expect} = require ('@playwright/test')

test('Browser Playwright Test', async ({browser})=>
{
    //chrome - plugins / cookies
    
    const context =  await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body >> a");


    await userName.fill("rahulshettyacademy");
    await page.locator("[name='password']").fill("learning");
    await signIn.click();
    //console.log(await page.locator('[style*="block"]').textContent());
    //await expect(page.locator('[style*="block"]')).toContainText("Incorrect");
    //await userName.fill("");
    //await userName.fill("rahulshettyacademy");
    //await signIn.click();
    //console.log(await cardTitles.first().textContent());
    //console.log(await cardTitles.nth(1).textContent());
    //await page.waitForLoadState("networkidle");
    await cardTitles.first().waitFor();
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
    


});

test.only('UI Controlls', async ({page})=>
{
    //chrome - plugins / cookies
    //const context =  await browser.newContext();
    //const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //await expect(page).toHaveTitle("Google");
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control");

    await dropdown.selectOption("consult");
    //await page.pause();

    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();

    await page.locator("#terms").click();
    await expect(await page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect (await page.locator("#terms").isChecked()).toBeFalsy();



});