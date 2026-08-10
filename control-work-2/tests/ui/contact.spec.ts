import { test, expect } from '../../fixtures/app.fixture';

import { contactData } from '../../test-data/testData';

test.describe('Contact us', () => {
  test('should open Contact Us page @smoke', async ({ contactPage }) => {
    await contactPage.open();

    await expect(contactPage.getInTouchHeading).toBeVisible();

    await expect(contactPage.nameInput).toBeVisible();

    await expect(contactPage.emailInput).toBeVisible();
  });

  test('should submit contact form successfully', async ({ contactPage }) => {
    await contactPage.open();

    await contactPage.fillContactForm(
      contactData.name,
      contactData.email,
      contactData.subject,
      contactData.message,
    );

    await contactPage.submitForm();

    await expect(contactPage.successMessage).toContainText(
      contactData.expectedSuccessMessage,
    );
  });
});
