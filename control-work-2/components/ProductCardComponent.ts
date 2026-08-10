import type { Locator } from '@playwright/test';

export class ProductCardComponent {
  readonly name: Locator;
  readonly price: Locator;
  readonly viewProductLink: Locator;
  readonly addToCartButton: Locator;

  constructor(private readonly root: Locator) {
    this.name = root.locator('.productinfo p');

    this.price = root.locator('.productinfo h2');

    this.viewProductLink = root.getByRole('link', {
      name: 'View Product',
    });

    this.addToCartButton = root.locator('.productinfo .add-to-cart').first();
  }

  async openDetails(): Promise<void> {
    await this.viewProductLink.click();
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async getName(): Promise<string> {
    return (await this.name.textContent())?.trim() ?? '';
  }

  async getPrice(): Promise<string> {
    return (await this.price.textContent())?.trim() ?? '';
  }
}
