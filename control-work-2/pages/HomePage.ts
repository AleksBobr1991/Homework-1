import type { Locator, Page } from '@playwright/test';

import { HeaderComponent } from '../components/HeaderComponent';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly header: HeaderComponent;
  readonly featuredItemsHeading: Locator;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderComponent(page);

    this.featuredItemsHeading = page.getByRole('heading', {
      name: 'Features Items',
      exact: true,
    });
  }

  async open(): Promise<void> {
    await super.open('/');

    await this.featuredItemsHeading.waitFor({
      state: 'visible',
      timeout: 30_000,
    });

    await this.header.productsLink.waitFor({
      state: 'visible',
      timeout: 30_000,
    });
  }
}
