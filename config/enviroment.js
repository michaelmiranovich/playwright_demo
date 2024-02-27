import { env } from 'node:process';

export default {
  local: {
    baseUrl: 'https://www.google.com/',
    chromium: {
      use: {
        viewport: { width: 1440, height: 900 },
        ignoreHTTPSErrors: true,
        locale: 'en-US',
        storageState: env.SKIP_STORAGE ? './setup/empty-storage-state.json' : './setup/storage-state.json',
        screenshot: 'only-on-failure',
      }
    },
    firefox: {
      use: {
        viewport: { width: 1440, height: 900 },
        ignoreHTTPSErrors: true,
        locale: 'en-US',
        storageState: env.SKIP_STORAGE ? './setup/empty-storage-state.json' : './setup/storage-state.json',
        screenshot: 'only-on-failure',
      }
    },
    webkit: {
      use: {
        viewport: { width: 1440, height: 900 },
        ignoreHTTPSErrors: true,
        locale: 'en-US',
        storageState: env.SKIP_STORAGE ? './setup/empty-storage-state.json' : './setup/storage-state.json',
        screenshot: 'only-on-failure',
      }
    }
  },
  dev: {
    baseUrl: 'https://www.google.com/',
  },
  stg: {
    baseUrl: 'https://www.google.com/',
  },
}