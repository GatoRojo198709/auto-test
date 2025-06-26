import { test, expect } from '@playwright/test';

test('Create pet and validate response', async ({request}) => {
    const domain = 'https://petstore.swagger.io/v2';
    const newPet = { petName: 'Barbos2033', petId: 2033 }

    // Adding the end-point and data to the request
    const response = await request.post(domain+ '/pet', {
        data: {
            name: newPet.petName,
            id: newPet.petId,
            photoUrls: []
        }
    });

    // Expected results
    const petData = await response.json();
    expect(petData.name).toBe(newPet.petName);
    expect(petData.name).toContain(newPet.petId.toString());
    expect(response.status()).toBe(200);
});


// Copy: npx playwright test tests/Playwright API/Ex_1.spec.js