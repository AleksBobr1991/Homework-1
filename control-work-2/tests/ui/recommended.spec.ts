import { test, expect } from '../../fixtures/app.fixture';

test.describe('Recommended items', () => {
  test('should display recommended items section', async ({ homePage }) => {
    await homePage.open();

    await expect(homePage.recommendedItems.heading).toBeVisible();
  });

  test('should display products in recommended items', async ({ homePage }) => {
    await homePage.open();

    expect(await homePage.recommendedItems.getProductsCount()).toBeGreaterThan(
      0,
    );
  });
});
