import { test, expect } from '../../fixtures/app.fixture';

import { generateUserData } from '../../helpers/dataGenerator';

import { invalidLoginData } from '../../test-data/testData';

test.describe('Authentication', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
  });

  test('should show an error for invalid login credentials', async ({
    loginPage,
  }) => {
    await expect(loginPage.loginHeading).toBeVisible();

    await loginPage.login(invalidLoginData.email, invalidLoginData.password);

    await expect(loginPage.loginError).toHaveText(
      invalidLoginData.expectedError,
    );
  });

  test('should start registration with unique user data', async ({
    loginPage,
    signupPage,
    page,
  }) => {
    const user = generateUserData();

    await expect(loginPage.signupHeading).toBeVisible();

    await loginPage.startSignup(user.name, user.email);

    await expect(page).toHaveURL(/\/signup/);

    await expect(signupPage.accountInformationHeading).toBeVisible();

    await expect(signupPage.nameInput).toHaveValue(user.name);

    await expect(signupPage.emailInput).toHaveValue(user.email);
  });
});
