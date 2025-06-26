import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { MySignaturesPage } from '../../pages/MySignaturesPage';
import { DetailsPage } from '../../pages/DetailsPage';
import { SignaturePreviewPage } from '../../pages/SignaturePreviewPage';
import { AppsPage } from '../../pages/AppsPage';

    test('Add video app and validate in preview', async ({ page }) => {
    // Initialize page objects
    const loginPage = new LoginPage(page);
    const detailsPage = new DetailsPage(page);
    const signaturesPage = new MySignaturesPage(page);
    const previewPage = new SignaturePreviewPage(page);
    const appsPage = new AppsPage(page);

    // Step 1: Login
    await loginPage.navigate(loginPage.url);
    await loginPage.navigateToLogin();
    await loginPage.login('automationQA1@gmail.com', 'autoDemo123');

    // Step 2: Navigate to My Signatures and then to Editor
    await signaturesPage.navigateToSignatures();
    await signaturesPage.navigateToEditor();

    // Step 3: Navigate to the tab Apps and then to Video
    await detailsPage.navigateToApps();
    await detailsPage.navigateVideo();

    // Step 4: Fill video fields and customize
    await appsPage.VideoAppActions('https://youtu.be/uVpMyeQNVcU', 'Promo video');

    // Step 5: Validate preview
    await previewPage.expectToContainText(previewPage.previewAreaUrl, 'Promo video'); 
}); 


//Copy: npx playwright test tests/test-pom/Ex_2.spec.js --headed