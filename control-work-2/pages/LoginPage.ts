import type { Locator, Page } from '@playwright/test';

import { HeaderComponent } from '../components/HeaderComponent';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly header: HeaderComponent;

  readonly loginHeading: Locator;
  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;
  readonly loginError: Locator;

  readonly signupHeading: Locator;
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;

  private readonly loginForm: Locator;
  private readonly signupForm: Locator;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderComponent(page);

    this.loginHeading = page.getByRole('heading', {
      name: 'Login to your account',
    });

    this.signupHeading = page.getByRole('heading', {
      name: 'New User Signup!',
    });

    this.loginForm = page.locator('form[action="/login"]');

    this.signupForm = page.locator('form[action="/signup"]');

    this.loginEmailInput = this.loginForm.getByPlaceholder('Email Address');

    this.loginPasswordInput = this.loginForm.getByPlaceholder('Password');

    this.loginButton = this.loginForm.getByRole('button', {
      name: 'Login',
    });

    this.loginError = this.loginForm.locator('p');

    this.signupNameInput = this.signupForm.getByPlaceholder('Name');

    this.signupEmailInput = this.signupForm.getByPlaceholder('Email Address');

    this.signupButton = this.signupForm.getByRole('button', {
      name: 'Signup',
    });
  }

  async open(): Promise<void> {
    await super.open('/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }

  async startSignup(name: string, email: string): Promise<void> {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }
}
