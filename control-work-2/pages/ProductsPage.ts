import type { Locator, Page } from '@playwright/test';

import { AddToCartModalComponent } from '../components/AddToCartModalComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { ProductCardComponent } from '../components/ProductCardComponent';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly header: HeaderComponent;
  readonly addToCartModal: AddToCartModalComponent;
  readonly allProductsHeading: Locator;
  readonly searchedProductsHeading: Locator;
  readonly categoryProductsHeading: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly productCards: Locator;

  private readonly womenCategoryToggle: Locator;
  private readonly womenDressCategoryLink: Locator;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderComponent(page);

    this.addToCartModal = new AddToCartModalComponent(page);

    this.allProductsHeading = page.getByRole('heading', {
      name: /All Products/i,
    });

    this.searchedProductsHeading = page.getByRole('heading', {
      name: /Searched Products/i,
    });

    this.categoryProductsHeading = page.locator('.features_items .title');

    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');

    this.productCards = page.locator('.features_items .product-image-wrapper');

    this.womenCategoryToggle = page.locator('a[href="#Women"]');

    this.womenDressCategoryLink = page.locator(
      '#Women a[href="/category_products/1"]',
    );
  }

  async open(): Promise<void> {
    await super.open('/products');
  }

  async searchForProduct(productName: string): Promise<void> {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  getProductCardByName(productName: string): ProductCardComponent {
    const productRoot = this.productCards
      .filter({
        has: this.page.locator('.productinfo p').filter({
          hasText: productName,
        }),
      })
      .first();

    return new ProductCardComponent(productRoot);
  }

  async getProductsCount(): Promise<number> {
    return this.productCards.count();
  }

  async selectWomenDressCategory(): Promise<void> {
    await this.womenCategoryToggle.click();

    await Promise.all([
      this.page.waitForURL(/\/category_products\/1/, {
        waitUntil: 'domcontentloaded',
        timeout: 45_000,
      }),
      this.womenDressCategoryLink.click(),
    ]);

    await this.cookieConsent.acceptIfDisplayed();
  }

  async addProductAndContinueShopping(productName: string): Promise<void> {
    const product = this.getProductCardByName(productName);

    await product.addToCart();
    await this.addToCartModal.waitUntilVisible();
    await this.addToCartModal.continueShopping();
  }

  async addProductAndOpenCart(productName: string): Promise<void> {
    const product = this.getProductCardByName(productName);

    await product.addToCart();
    await this.addToCartModal.waitUntilVisible();
    await this.addToCartModal.viewCart();
  }
}
