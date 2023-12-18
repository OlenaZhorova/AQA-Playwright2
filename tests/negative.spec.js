const { test, expect } = require('@playwright/test');

test('should show error for invalid email', async ({ page }) => {
    await page.goto('/');

    // Кнопка реєстрації
    const signUpButton = page.locator('.hero-descriptor button');
    await signUpButton.click();

    const name = 'Olena';
    const lastName = 'Zhor';
    const email = 'invalid_email';
    const password = 'TestPassword123';
    const repeatPassword = 'TestPassword123';

    // Введення невідповідних паролів
    await page.fill('input[name="name"]', name);
    await page.fill('input[name="lastName"]', lastName);
    await page.fill('input[name="email"]', email);
    await page.fill('input[name="password"]', password);
    await page.fill('input[name="repeatPassword"]', repeatPassword);
    await page.click('div.modal-footer > button');

    // Перевірка відображення помилки
    await expect(page.locator('.error-message')).toHaveText('Email is incorrect');
});

test('should show error for different passwords', async ({ page }) => {
    await page.goto('/');
    const signUpButton = page.locator('.hero-descriptor button');
    await signUpButton.click();

    const name = 'Olena';
    const lastName = 'Zhor';
    const email = 'aqa-test@example.com';
    const password = 'TestPassword123';
    const repeatPassword = 'NoPassword';

    // Введення невідповідних паролів
    await page.fill('input[name="name"]', name);
    await page.fill('input[name="lastName"]', lastName);
    await page.fill('input[name="email"]', email);
    await page.fill('input[name="password"]', password);
    await page.fill('input[name="repeatPassword"]', repeatPassword);
    await page.click('div.modal-footer > button');

    // Перевірка відображення помилки
    await expect(page.locator('.error-message')).toHaveText('MismatchedPassword');
});