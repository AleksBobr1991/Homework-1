import { test, expect } from '../../fixtures/app.fixture';

test.describe('Navigation', () => {
  test('should navigate to cart page from header @smoke', async ({
    homePage,
    page,
  }) => {
    await homePage.open();

    await homePage.header.goToCart();

    await expect(page).toHaveURL(/\/view_cart/);
  });
});
