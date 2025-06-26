import { test, expect } from '@playwright/test';

test('Delete pet by ID and validate response', async ({request}) => {
    const domain = 'https://petstore.swagger.io/v2';
    const petId = 2033;

    // Send DELETE request to remove the pet with the given ID
    const response = await request.delete(domain+ `/pet/${petId}`);
   
    // Expected results
    expect(response.status()).toBe(200);
});


// Copy: npx playwright test tests/Playwright API/Ex_4.spec.js