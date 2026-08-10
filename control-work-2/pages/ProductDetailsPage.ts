import type { Locator, Page } from '@playwright/test';

import { AddToCartModalComponent } from '../components/AddToCartModalComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { BasePage } from './BasePage';

export class ProductDetailsPage extends BasePage {
  readonly header: HeaderComponent;
  readonly addToCartModal: AddToCartModalComponent;
  readonly productInformation: Locator;
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly productCategory: Locator;
  readonly productAvailability: Locator;
  readonly productCondition: Locator;
  readonly productBrand: Locator;
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderComponent(page);
    this.addToCartModal = new AddToCartModalComponent(page);
    this.productInformation = page.locator('.product-information');

    this.productName = this.productInformation.getByRole('heading', {
      level: 2,
    });

    this.productPrice = this.productInformation.locator('span > span').first();

    this.productCategory = this.productInformation.locator('p').filter({
      hasText: 'Category:',
    });

    this.productAvailability = this.productInformation.locator('p').filter({
      hasText: 'Availability:',
    });

    this.productCondition = this.productInformation.locator('p').filter({
      hasText: 'Condition:',
    });

    this.productBrand = this.productInformation.locator('p').filter({
      hasText: 'Brand:',
    });

    this.quantityInput = page.locator('#quantity');

    this.addToCartButton = this.productInformation.getByRole('button', {
      name: /Add to cart/i,
    });
  }

  async openProduct(productId: number): Promise<void> {
    await super.open(`/product_details/${productId}`);
  }

  async setQuantity(quantity: number): Promise<void> {
    await this.quantityInput.fill(String(quantity));
  }

  async addProductToCart(): Promise<void> {
    await this.addToCartButton.click();
    await this.addToCartModal.waitUntilVisible();
  }

  async addProductToCartAndOpenCart(): Promise<void> {
    await this.addProductToCart();
    await this.addToCartModal.viewCart();
  }
}
