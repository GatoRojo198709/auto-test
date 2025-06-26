import { test, expect } from '@playwright/test';

test('Delete user by username and validate response', async ({request}) => {
    const domain = 'https://petstore.swagger.io/v2';
    const username = 'Gato Rojo';

    // Send DELETE request to remove the user
    const response = await request.delete(domain + '/user/' + encodeURIComponent(username));
   
    // Expected results
    expect(response.status()).toBe(200);
});


// Copy: npx playwright test tests/Playwright API/Ex_7.spec.js