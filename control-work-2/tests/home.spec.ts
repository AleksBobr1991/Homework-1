import { test, expect } from '../fixtures/app.fixture';

test.describe('Home page', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('should open Automation Exercise home page', async ({ homePage }) => {
    expect(await homePage.getPageTitle()).toContain('Automation Exercise');

    await expect(homePage.featuredItemsHeading).toBeVisible();
  });

  test('should navigate to products page from header', async ({
    homePage,
    page,
  }) => {
    await homePage.header.goToProducts();

    await expect(page).toHaveURL(/\/products/);
  });
});
