import type { Locator, Page } from '@playwright/test';

export class AddToCartModalComponent {
  readonly modal: Locator;
  readonly continueShoppingButton: Locator;
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    this.modal = page.locator('#cartModal');

    this.continueShoppingButton = this.modal.getByRole('button', {
      name: 'Continue Shopping',
    });

    this.viewCartLink = this.modal.getByRole('link', {
      name: /View Cart/i,
    });
  }

  async waitUntilVisible(): Promise<void> {
    await this.modal.waitFor({
      state: 'visible',
    });
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();

    await this.modal.waitFor({
      state: 'hidden',
    });
  }

  async viewCart(): Promise<void> {
    await this.viewCartLink.click();
  }
}
