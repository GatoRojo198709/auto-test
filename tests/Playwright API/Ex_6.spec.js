import { test, expect } from '@playwright/test';

test('Update user phone with PUT and validate response', async ({request}) => {
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

    const updatedUser = {
        id: 12345,
        username: 'Gato Rojo',
        firstName: 'Igor',
        lastName: 'Gelman',
        email: 'gatorojo@gmail.com',
        password: 'igorgatorojo1',
        phone: '0547532888',
        userStatus: 1
    }

    // Send PUT request to update the pet with the given name
    const response = await request.put(`${domain}/user/${updatedUser.username}`, {
    data: updatedUser
  });

    // Expected results
    expect(response.status()).toBe(200);
    const getResponse = await request.get(`${domain}/user/${updatedUser.username}`);
  expect(getResponse.status()).toBe(200);

    const userData = await response.json();
    console.log(response);

    // expect(userData.phone).toBe(updatedUser.phone);
    // expect(userData.username).toBe(updatedUser.username);
    // expect(userData.firstName).toBe(updatedUser.firstName);
    // expect(userData.lastName).toBe(updatedUser.lastName);
});


// Copy: npx playwright test tests/Playwright API/Ex_6.spec.js