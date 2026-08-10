import { test, expect } from '../../fixtures/app.fixture';

test.describe('Test Cases page', () => {
  test('should open Test Cases page', async ({ page, homePage }) => {
    await homePage.open();

    await page
      .getByRole('link', {
        name: 'Test Cases',
        exact: true,
      })
      .click();

    await expect(page).toHaveURL(/test_cases/);
  });

  test('should display Test Cases heading', async ({ page, homePage }) => {
    await homePage.open();

    await page
      .getByRole('link', {
        name: 'Test Cases',
        exact: true,
      })
      .click();

    await expect(
      page.getByRole('heading', {
        name: 'Test Cases',
        exact: true,
      }),
    ).toBeVisible();
  });
});
