import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { MySignaturesPage } from '../../pages/MySignaturesPage';
import { DetailsPage } from '../../pages/DetailsPage';
import { SignaturePreviewPage } from '../../pages/SignaturePreviewPage';

    test('Fill details and validate preview', async ({ page }) => {
    // Initialize page objects
    const loginPage = new LoginPage(page);
    const detailsPage = new DetailsPage(page);
    const signaturesPage = new MySignaturesPage(page);
    const previewPage = new SignaturePreviewPage(page);

    // Step 1: Login
    await loginPage.navigate(loginPage.url);
    await loginPage.navigateToLogin();
    await loginPage.login('automationQA1@gmail.com', 'autoDemo123');

    // Step 2: Navigate to My Signatures and then to Editor
    await signaturesPage.navigateToSignatures();
    await signaturesPage.navigateToEditor();

    // Step 3: Fill Details tab
    await detailsPage.enterDetails('Igor', 'QA manual', 'Shavitus', '0547532777', '0547532888', 'www.igor.com', 'igor@gmail.com', 'Israel, Haifa');

    // Step 4: Validate details in signature preview
    await previewPage.validateDetailsInPreview('Igor', 'QA manual', 'Shavitus', '0547532777', '0547532888', 'www.igor.com', 'igor@gmail.com', 'Israel, Haifa');
}); 


//Copy: npx playwright test tests/test-pom/Ex_1.spec.js --headed