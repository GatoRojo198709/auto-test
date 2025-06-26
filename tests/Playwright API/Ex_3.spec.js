import { test, expect } from '@playwright/test';

test('Update pet name and validate response', async ({request}) => {
    const domain = 'https://petstore.swagger.io/v2';
    const updatedPetName = 'Barbosa2030';
    const petId = 2033;

    // Send PUT request to update the pet with the given name
    const response = await request.put(domain+ '/pet', {
        data: {
            name: updatedPetName,
            id: petId,
            photoUrls: []
        }
    });

    // Expected results
    expect(response.status()).toBe(200);

    const petData = await response.json();
    // Verify that the returned pet name matches the updated expected name
    expect(petData.name).toBe(updatedPetName);

    // Verify that the returned id matches the expected id
    expect(petData.id).toBe(petId);
});


// Copy: npx playwright test tests/Playwright API/Ex_3.spec.js