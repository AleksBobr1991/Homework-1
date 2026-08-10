import type { Locator, Page } from '@playwright/test';

export class CookieConsentComponent {
  readonly consentRoot: Locator;
  readonly acceptButton: Locator;

  constructor(page: Page) {
    this.consentRoot = page.locator('.fc-consent-root');

    this.acceptButton = page.locator('.fc-cta-consent').first();
  }

  async acceptIfDisplayed(): Promise<void> {
    try {
      await this.acceptButton.waitFor({
        state: 'visible',
        timeout: 5_000,
      });
    } catch {
      return;
    }

    await this.acceptButton.click();

    await this.consentRoot.waitFor({
      state: 'hidden',
      timeout: 5_000,
    });
  }
}
