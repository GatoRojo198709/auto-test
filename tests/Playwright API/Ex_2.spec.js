import { test, expect } from '@playwright/test';

test('Get pet by ID and validate response', async ({request}) => {
    const domain = 'https://petstore.swagger.io/v2';
    const petName = 'Barbos2033';
    const petId = 2033;
    // Start measuring response time
    const startTime = Date.now();

    // Adding the end-point and data to the request
    const response = await request.get(domain+ `/pet/${petId}`);

    // Calculate the response time in milliseconds
    const responseTime = Date.now() - startTime;

    // Expected results
    expect(response.status()).toBe(200);

    // Verify that the response time is less than or equal to 1000 ms
    expect(responseTime).toBeLessThanOrEqual(1000);

    const petData = await response.json();
    // Verify that the returned pet name matches the expected name
    expect(petData.name).toBe(petName);
});


// Copy: npx playwright test tests/Playwright API/Ex_2.spec.js