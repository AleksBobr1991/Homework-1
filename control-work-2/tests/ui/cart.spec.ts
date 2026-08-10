import { test, expect } from '../../fixtures/app.fixture';

import { cartData, products } from '../../test-data/testData';

test.describe('Shopping cart', () => {
  test('should add two products to cart from catalogue', async ({
    productsPage,
    cartPage,
    page,
  }) => {
    await productsPage.open();

    await productsPage.addProductAndContinueShopping(products.blueTop.name);

    await productsPage.addProductAndOpenCart(products.menTshirt.name);

    await expect(page).toHaveURL(/\/view_cart/);

    await expect(cartPage.cartRows).toHaveCount(2);

    await expect(
      cartPage.getItemByProductId(products.blueTop.id).name,
    ).toHaveText(products.blueTop.name);

    await expect(
      cartPage.getItemByProductId(products.menTshirt.id).name,
    ).toHaveText(products.menTshirt.name);
  });

  test('should add product with selected quantity from details page', async ({
    productDetailsPage,
    cartPage,
  }) => {
    await productDetailsPage.openProduct(products.blueTop.id);

    await productDetailsPage.setQuantity(cartData.productQuantity);

    await productDetailsPage.addProductToCartAndOpenCart();

    const cartItem = cartPage.getItemByProductId(products.blueTop.id);

    await expect(cartItem.name).toHaveText(products.blueTop.name);

    await expect(cartItem.quantity).toHaveText(
      String(cartData.productQuantity),
    );
  });

  test('should display correct product price and total in cart', async ({
    productDetailsPage,
    cartPage,
  }) => {
    await productDetailsPage.openProduct(products.blueTop.id);

    await productDetailsPage.setQuantity(cartData.productQuantity);

    await productDetailsPage.addProductToCartAndOpenCart();

    const cartItem = cartPage.getItemByProductId(products.blueTop.id);

    await expect(cartItem.price).toHaveText(products.blueTop.price);

    await expect(cartItem.totalPrice).toHaveText(
      cartData.blueTopTotalForTwoItems,
    );
  });

  test('should remove selected product from cart', async ({
    productsPage,
    cartPage,
  }) => {
    await productsPage.open();

    await productsPage.addProductAndContinueShopping(products.blueTop.name);

    await productsPage.addProductAndOpenCart(products.menTshirt.name);

    await expect(cartPage.cartRows).toHaveCount(2);

    const blueTopItem = cartPage.getItemByProductId(products.blueTop.id);

    await expect(blueTopItem.name).toHaveText(products.blueTop.name);

    await blueTopItem.remove();

    await expect(cartPage.cartRows).toHaveCount(1);

    await expect(
      cartPage.getItemByProductId(products.blueTop.id).name,
    ).toHaveCount(0);

    await expect(
      cartPage.getItemByProductId(products.menTshirt.id).name,
    ).toHaveText(products.menTshirt.name);
  });
});
