import type { APIRequestContext, APIResponse } from '@playwright/test';

import { BaseApiClient } from './BaseApiClient';

export class AccountApi extends BaseApiClient {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async verifyLogin(email: string, password: string): Promise<APIResponse> {
    return this.post('/api/verifyLogin', {
      email,
      password,
    });
  }

  async verifyLoginWithoutEmail(password: string): Promise<APIResponse> {
    return this.post('/api/verifyLogin', {
      password,
    });
  }
}
