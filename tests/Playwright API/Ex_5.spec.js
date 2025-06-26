import { test, expect } from '@playwright/test';

test('Create user and validate response', async ({request}) => {
    const domain = 'https://petstore.swagger.io/v2';
    const newUser = {
        id: 0,
        username: 'Gato Rojo',
        firstName: 'Igor',
        lastName: 'Gelman',
        email: 'gatorojo@gmail.com',
        password: 'igorgatorojo1',
        phone: '0547532777',
        userStatus: 1
    }

    // Create the user
    const response = await request.post(domain+ '/user', {
        data: newUser
    });

    expect(response.status()).toBe(200);

    // Expected results
    // const userData = await response.json();
    // expect(userData.username).toBe(newUser.username);
    // expect(userData.firstName).toBe(newUser.firstName);
    // expect(userData.lastName).toBe(newUser.lastName);
    // expect(userData.email).toBe(newUser.email);
    // expect(userData.password).toBe(newUser.password); 
    // expect(userData.phone).toBe(newUser.phone);

    
});


// Copy: npx playwright test tests/Playwright API/Ex_5.spec.js