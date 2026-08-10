import type { Page } from '@playwright/test';

const blockedUrlPatterns = [
  '**://pagead2.googlesyndication.com/**',
  '**://googleads.g.doubleclick.net/**',
  '**://tpc.googlesyndication.com/**',
  '**://adservice.google.com/**',
  '**://google-analytics.com/**',
  '**://www.google-analytics.com/**',
];

export async function blockThirdPartyAds(page: Page): Promise<void> {
  for (const pattern of blockedUrlPatterns) {
    await page.route(pattern, async (route): Promise<void> => {
      await route.abort();
    });
  }
}
