import type { Locator, Page } from '@playwright/test';

import { CartItemComponent } from '../components/CartItemComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly header: HeaderComponent;
  readonly cartTable: Locator;
  readonly cartRows: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderComponent(page);

    this.cartTable = page.locator('#cart_info_table');
    this.cartRows = page.locator('#cart_info_table tbody tr');

    this.emptyCartMessage = page.locator('#empty_cart');
  }

  async open(): Promise<void> {
    await super.open('/view_cart');
  }

  getItemByProductId(productId: number): CartItemComponent {
    return new CartItemComponent(this.page.locator(`#product-${productId}`));
  }

  getItemByName(productName: string): CartItemComponent {
    const row = this.cartRows
      .filter({
        has: this.page.locator('.cart_description h4 a').filter({
          hasText: productName,
        }),
      })
      .first();

    return new CartItemComponent(row);
  }

  async getItemsCount(): Promise<number> {
    return this.cartRows.count();
  }
}
