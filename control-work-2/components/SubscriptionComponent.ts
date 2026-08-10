import type { Locator, Page } from '@playwright/test';

export class SubscriptionComponent {
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.emailInput = page.locator('#susbscribe_email');

    this.submitButton = page.locator('#subscribe');

    this.successMessage = page.locator('.alert-success.alert');
  }

  async subscribe(email: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.submitButton.click();
  }
}
