import type { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  readonly homeLink: Locator;
  readonly productsLink: Locator;
  readonly cartLink: Locator;
  readonly signupLoginLink: Locator;
  readonly contactUsLink: Locator;

  constructor(private readonly page: Page) {
    this.homeLink = page.getByRole('link', {
      name: /Home/,
    });

    this.productsLink = page.getByRole('link', {
      name: /Products/,
    });

    this.cartLink = page.getByRole('link', {
      name: /Cart/,
    });

    this.signupLoginLink = page.getByRole('link', {
      name: /Signup \/ Login/,
    });

    this.contactUsLink = page.getByRole('link', {
      name: /Contact us/i,
    });
  }

  async goToHome(): Promise<void> {
    await this.homeLink.click();
  }

  async goToProducts(): Promise<void> {
    await Promise.all([
      this.page.waitForURL(/\/products/, {
        waitUntil: 'domcontentloaded',
        timeout: 45_000,
      }),

      this.productsLink.click(),
    ]);
  }

  async goToCart(): Promise<void> {
    await this.cartLink.click();
  }

  async goToSignupLogin(): Promise<void> {
    await this.signupLoginLink.click();
  }

  async goToContactUs(): Promise<void> {
    await this.contactUsLink.click();
  }
}
