import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  testDir: './test',
  use: {
    trace: 'on-first-retry',
    baseURL: process.env.CI ? process.env.BASE_URL : 'http://localhost:3000',
  },
  timeout: 5000,
  webServer: {
    command: 'npm run test',
    url: 'http://localhost:3000',
    cwd: './test',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], headless: true },
    },
  ],
}

export default config
