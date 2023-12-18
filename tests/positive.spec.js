const { test, expect } = require('@playwright/test');

test('should successfully register a new user', async ({ page }) => {
    await page.goto('/');

    // Кнопка реєстрації
    const signUpButton = page.locator('.hero-descriptor button');
    await signUpButton.click();

    const prefix = 'aqa';
    const email = `${prefix}-test@gmail.com`;
    const password = 'TestPassword123';
    const name = 'Olena';
    const lastName = 'Zhor';

    const nameInput = page.locator('input[name="name"]');
    const lastNameInput = page.locator('input[name="lastName"]');
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="password"]');
    const repeatPasswordInput = page.locator('input[name="repeatPassword"]');
    const registerButton = page.locator('div.modal-footer > button');

    // Видимість полів та їх заповнення
    await nameInput.waitFor({ state: 'visible' });
    await nameInput.fill(name);

    await lastNameInput.waitFor({ state: 'visible' });
    await lastNameInput.fill(lastName);

    await emailInput.waitFor({ state: 'visible' });
    await emailInput.fill(email);

    await passwordInput.waitFor({ state: 'visible' });
    await passwordInput.fill(password);

    await repeatPasswordInput.waitFor({ state: 'visible' });
    await repeatPasswordInput.fill(password);

    // // Перевірка, чи кнопка активована після введення даних
    // await expect(registerButton).not.toBeDisabled();

    // Клацання на кнопку
    await registerButton.click();

    // Перевірка успішної реєстрації
    await expect(page.url()).toContain('/success');
    await expect(page.locator('.success-message')).toHaveText('Registration successful');
});
