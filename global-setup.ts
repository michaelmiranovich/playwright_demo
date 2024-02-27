import { FullConfig } from '@playwright/test';
// playwright-extra is a drop-in replacement for playwright,
// it augments the installed playwright with plugin functionality
import { chromium } from 'playwright-extra';
// Load the stealth plugin and use defaults (all tricks to hide playwright usage)
import stealth from 'puppeteer-extra-plugin-stealth';
import SignInPage from './pages/signInPage';
import { env } from 'node:process';

// Add the plugin to playwright
chromium.use(stealth());

async function globalSetup(config: FullConfig): Promise<void> {
  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  const email: string = env.GMAIL!;
  const password: string = env.GOOGLE_PWD!;
  const signInPage = new SignInPage(page);
  
  await signInPage.navigateToSignInPage(baseURL!);
  await signInPage.completeSignInForm(email, password);

  // Wait for redirect back to tested site after authentication
  await page.waitForURL(baseURL!);
  // Save signed in state
  await page.context().storageState({ path: './setup/storage-state.json' });

  await browser.close();
}

export default globalSetup;