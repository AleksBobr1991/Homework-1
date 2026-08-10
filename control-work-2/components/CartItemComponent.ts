import type { Locator } from '@playwright/test';

export class CartItemComponent {
  readonly name: Locator;
  readonly price: Locator;
  readonly quantity: Locator;
  readonly totalPrice: Locator;
  readonly removeButton: Locator;

  constructor(private readonly root: Locator) {
    this.name = root.locator('.cart_description h4 a');
    this.price = root.locator('.cart_price p');
    this.quantity = root.locator('.cart_quantity button');
    this.totalPrice = root.locator('.cart_total_price');
    this.removeButton = root.locator('.cart_quantity_delete');
  }

  async remove(): Promise<void> {
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      await this.removeButton.click();

      try {
        await this.root.waitFor({
          state: 'hidden',
          timeout: 7_000,
        });

        return;
      } catch {
        if (attempt === 3) {
          throw new Error(
            'Product was not removed from the cart after 3 attempts.',
          );
        }
      }
    }
  }
}
