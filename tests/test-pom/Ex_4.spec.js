import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { SettingsPage } from '../../pages/SettingsPage';
import { SignUpPage } from '../../pages/SignUpPage';

    test('Remove user and sign up again', async ({ page }) => {
    // Initialize page objects
    const loginPage = new LoginPage(page);
    const settingsPage = new SettingsPage(page);
    const signupPage = new SignUpPage(page);

    // Step 1: Login
    await loginPage.navigate('https://webapp.qa10.wisestamp-dev.com/editor');
    await loginPage.navigateToLogin();
    await loginPage.login('automationQA2@gmail.com', 'autoDemo123');

    // Step 2: Navigate to user Settings
    await settingsPage.navigateToUserSettings();

    // Step 3: Delete account
    await settingsPage.deleteAccount();

    await page.waitForSelector('[aid="header.button.login"]', { timeout: 10000 });

    // Step 4: Sign up with same user
    await signupPage.navigateToSignUp();
    await signupPage.signUp('automationQA2@gmail.com', 'Ig', 'autoDemo123');
}); 


//Copy: npx playwright test tests/test-pom/Ex_4.spec.js --headed