import type { Locator, Page } from '@playwright/test';

import { HeaderComponent } from '../components/HeaderComponent';
import { BasePage } from './BasePage';

export class ContactPage extends BasePage {
  readonly header: HeaderComponent;
  readonly getInTouchHeading: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderComponent(page);

    this.getInTouchHeading = page.getByRole('heading', {
      name: /Get In Touch/i,
    });

    this.nameInput = page.locator('input[data-qa="name"]');

    this.emailInput = page.locator('input[data-qa="email"]');

    this.subjectInput = page.locator('input[data-qa="subject"]');

    this.messageInput = page.locator('#message');

    this.submitButton = page.locator('input[data-qa="submit-button"]');

    this.successMessage = page.locator('.status.alert.alert-success');
  }

  async open(): Promise<void> {
    await super.open('/contact_us');
  }

  async fillContactForm(
    name: string,
    email: string,
    subject: string,
    message: string,
  ): Promise<void> {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);
  }

  async submitForm(): Promise<void> {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });

    await this.submitButton.click();
  }
}
