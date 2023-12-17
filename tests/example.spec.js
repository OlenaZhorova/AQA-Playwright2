import {expect, test} from "@playwright/test";
// хук перед усіма тестами
test.beforeAll(()=>{
  console.log("before all hook")
})

test.describe('Test describe title', ()=> {
  test('test1', async () => {
    console.log("Test1")
  })

  test.beforeEach(async ()=>{
    console.log("before each hook")
  } )

  test.afterEach(async ()=> {
    console.log("after each hook")
  })

  test.afterAll(async ()=> {
    console.log("after all hook")
  })

  test('test2', async () => {
    console.log("Test2")
  })
})

// // @ts-check
// const { test, expect } = require('@playwright/test');
//
// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });
//
// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//
//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });