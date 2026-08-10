import { test as base, expect } from '@playwright/test';

import { AccountApi } from '../api/AccountApi';
import { BrandsApi } from '../api/BrandsApi';
import { ProductsApi } from '../api/ProductsApi';
import { blockThirdPartyAds } from '../helpers/networkHelper';
import { CartPage } from '../pages/CartPage';
import { ContactPage } from '../pages/ContactPage';
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
  contactPage: ContactPage;

  productsApi: ProductsApi;
  brandsApi: BrandsApi;
  accountApi: AccountApi;
};

export const test = base.extend<AppFixtures>({
  blockAds: [
    async ({ page }, use): Promise<void> => {
      await blockThirdPartyAds(page);
      await use();
    },
    { auto: true },
  ],

  homePage: async ({ page }, use) => await use(new HomePage(page)),
  productsPage: async ({ page }, use) => await use(new ProductsPage(page)),
  productDetailsPage: async ({ page }, use) =>
    await use(new ProductDetailsPage(page)),
  cartPage: async ({ page }, use) => await use(new CartPage(page)),
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  signupPage: async ({ page }, use) => await use(new SignupPage(page)),
  contactPage: async ({ page }, use) => await use(new ContactPage(page)),

  productsApi: async ({ request }, use) => await use(new ProductsApi(request)),
  brandsApi: async ({ request }, use) => await use(new BrandsApi(request)),
  accountApi: async ({ request }, use) => await use(new AccountApi(request)),
});

export { expect };
