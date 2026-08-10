import type { Locator, Page } from '@playwright/test';

import { HeaderComponent } from '../components/HeaderComponent';
import { RecommendedItemsComponent } from '../components/RecommendedItemsComponent';
import { SubscriptionComponent } from '../components/SubscriptionComponent';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly header: HeaderComponent;
  readonly subscription: SubscriptionComponent;
  readonly recommendedItems: RecommendedItemsComponent;
  readonly featuredItemsHeading: Locator;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderComponent(page);
    this.subscription = new SubscriptionComponent(page);
    this.recommendedItems = new RecommendedItemsComponent(page);

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
