import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 60000,
  
  use: {
  headless: false,
  screenshot: 'only-on-failure',                  //test senaryosu failed olursa ekran görüntüsü alacak.
  trace: 'on-first-retry',
},

projects: [
  {                                               /*Browser bazlı çalıştıştırmak istersek*/
    name: 'chromium',                             //npx playwright test --project=chromium
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'firefox',                              //npx playwright test --project=firefox
    use: { ...devices['Desktop Firefox'] },
  }
]
});
