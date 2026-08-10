import { test as base } from '@playwright/test';

import { blockThirdPartyAds } from '../helpers/networkHelper';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { ProductsPage } from '../pages/ProductsPage';
import { SignupPage } from '../pages/SignupPage';

type AppFixtures = {
  blockAds: void;
  homePage: HomePage;
  productsPage: ProductsPage;
  productDetailsPage: ProductDetailsPage;
  cartPage: CartPage;
  loginPage: LoginPage;
  signupPage: SignupPage;
};

export const test = base.extend<AppFixtures>({
  blockAds: [
    async ({ page }, use): Promise<void> => {
      await blockThirdPartyAds(page);
      await use();
    },
    {
      auto: true,
    },
  ],

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
});

export { expect } from '@playwright/test';
