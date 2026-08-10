import { test, expect } from '../../fixtures/app.fixture';

type BrandsResponse = {
  responseCode: number;
  brands: {
    id: number;
    brand: string;
  }[];
};

type ApiMessageResponse = {
  responseCode: number;
  message: string;
};

test.describe('Brands and account API @api', () => {
  test('should return all brands @smoke', async ({ brandsApi }) => {
    const response = await brandsApi.getAllBrands();

    expect(response.status()).toBe(200);

    const body = (await response.json()) as BrandsResponse;

    expect(body.responseCode).toBe(200);

    expect(Array.isArray(body.brands)).toBe(true);

    expect(body.brands.length).toBeGreaterThan(0);

    expect(body.brands[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        brand: expect.any(String),
      }),
    );
  });

  test('should reject invalid login credentials', async ({ accountApi }) => {
    const response = await accountApi.verifyLogin(
      'invalid-user@example.com',
      'incorrect-password',
    );

    expect(response.status()).toBe(200);

    const body = (await response.json()) as ApiMessageResponse;

    expect(body.responseCode).toBe(404);

    expect(body.message).toContain('User not found');
  });

  test('should reject login request without email', async ({ accountApi }) => {
    const response =
      await accountApi.verifyLoginWithoutEmail('incorrect-password');

    expect(response.status()).toBe(200);

    const body = (await response.json()) as ApiMessageResponse;

    expect(body.responseCode).toBe(400);

    expect(body.message).toContain('Bad request');
  });

  test('should reject PUT request to brands list', async ({ brandsApi }) => {
    const response = await brandsApi.putToBrandsList();

    expect(response.status()).toBe(200);

    const body = (await response.json()) as ApiMessageResponse;

    expect(body.responseCode).toBe(405);

    expect(body.message).toContain('This request method is not supported');
  });
});
