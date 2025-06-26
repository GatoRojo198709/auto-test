import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { MySignaturesPage } from '../../pages/MySignaturesPage';
import { SignaturePreviewPage } from '../../pages/SignaturePreviewPage';

    test('Rename signature and validate', async ({ page }) => {
    // Initialize page objects
    const loginPage = new LoginPage(page);
    const signaturesPage = new MySignaturesPage(page);
    const previewPage = new SignaturePreviewPage(page);

    // Step 1: Login
    await loginPage.navigate(loginPage.url);
    await loginPage.navigateToLogin();
    await loginPage.login('automationQA1@gmail.com', 'autoDemo123');

    // Step 2: Navigate to My Signatures and then to Editor
    await signaturesPage.navigateToSignatures();
    await signaturesPage.navigateToEditor();

    // Step 3: Navigate to Rename signature pop up and update signature name
    await signaturesPage.RenameSignature('New Signature');

    // Step 4: Validate new signature
    await previewPage.sigNameValidation('New Signature');
    await page.waitForTimeout(1000);

    // Step 5: Navigate to Editor again
    await signaturesPage.navigateToEditor();

    // Step 6: Navigate to Rename signature pop up and update signature name
    await signaturesPage.RenameSignature('mySignature');

    // Step 7: Validate new signature
    await previewPage.sigNameValidation('mySignature');    
}); 


//Copy: npx playwright test tests/test-pom/Ex_3.spec.js --headed