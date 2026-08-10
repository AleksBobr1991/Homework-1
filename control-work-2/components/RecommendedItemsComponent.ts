import type { Locator, Page } from '@playwright/test';

export class RecommendedItemsComponent {
  readonly section: Locator;
  readonly heading: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    this.section = page.locator('.recommended_items');

    this.heading = this.section.getByRole('heading', {
      name: /recommended items/i,
    });

    this.productCards = this.section.locator('.product-image-wrapper');
  }

  async getProductsCount(): Promise<number> {
    return this.productCards.count();
  }
}
