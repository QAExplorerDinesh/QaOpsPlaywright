const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries: 0,
  
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    trace: 'on',
    baseURL: 'http://localhost:3000'
  },

  // Remove or replace this webServer block if you do not have a local npm server script.
  // If your tests run against an existing app, start it manually before running Playwright.
  // webServer: {
  //   command: 'npm run test-server',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: true
  // },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
};

module.exports = config;
