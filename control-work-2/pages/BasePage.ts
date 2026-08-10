import type { Page } from '@playwright/test';

import { CookieConsentComponent } from '../components/CookieConsentComponent';

export abstract class BasePage {
  readonly cookieConsent: CookieConsentComponent;

  constructor(protected readonly page: Page) {
    this.cookieConsent = new CookieConsentComponent(page);
  }

  async open(path = '/'): Promise<void> {
    await this.page.goto(path, {
      waitUntil: 'domcontentloaded',
      timeout: 45_000,
    });

    await this.cookieConsent.acceptIfDisplayed();
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  getCurrentUrl(): string {
    return this.page.url();
  }
}
