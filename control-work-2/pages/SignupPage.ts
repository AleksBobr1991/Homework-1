import type { Locator, Page } from '@playwright/test';

import { HeaderComponent } from '../components/HeaderComponent';
import { BasePage } from './BasePage';

export class SignupPage extends BasePage {
  readonly header: HeaderComponent;
  readonly accountInformationHeading: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderComponent(page);

    this.accountInformationHeading = page.getByRole('heading', {
      name: /Enter Account Information/i,
    });

    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
  }
}
