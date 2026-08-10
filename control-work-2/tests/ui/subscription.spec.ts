import { test, expect } from '../../fixtures/app.fixture';

import { generateUniqueEmail } from '../../helpers/dataGenerator';

test.describe('Subscription', () => {
  test('should display subscription form on home page @smoke', async ({
    homePage,
  }) => {
    await homePage.open();

    await expect(homePage.subscription.emailInput).toBeVisible();

    await expect(homePage.subscription.submitButton).toBeVisible();
  });

  test('should subscribe with unique email', async ({ homePage }) => {
    const email = generateUniqueEmail();

    await homePage.open();

    await homePage.subscription.subscribe(email);

    await expect(homePage.subscription.successMessage).toBeVisible();
  });
});
