import type { APIRequestContext, APIResponse } from '@playwright/test';

import { BaseApiClient } from './BaseApiClient';

export class BrandsApi extends BaseApiClient {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getAllBrands(): Promise<APIResponse> {
    return this.get('/api/brandsList');
  }

  async putToBrandsList(): Promise<APIResponse> {
    return this.put('/api/brandsList');
  }
}
