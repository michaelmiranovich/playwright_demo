// @ts-check
import { test, expect } from '@playwright/test';
import { env } from 'node:process';
import SignInPage from '../pages/signInPage';
// playwright-extra is a drop-in replacement for playwright,
// it augments the installed playwright with plugin functionality
import { chromium, firefox, webkit  } from 'playwright-extra';
// Load the stealth plugin and use defaults (all tricks to hide playwright usage)
import stealth from 'puppeteer-extra-plugin-stealth';

// Add the plugin to playwright
chromium.use(stealth());

test.describe("Google Authentication", () => {
    test('Demo of a failed authentication test', async () => {
        const browser = await chromium.launch({ headless: false });
        const page = await browser.newPage();

        const email: string = env.GMAIL!;
        const password: string = 'test1234';
        const signInPage = new SignInPage(page);

        await signInPage.navigateToSignInPage('/');
        await signInPage.completeSignInForm(email, password);

        await page.waitForLoadState('networkidle');
        expect(page.url()).toEqual('https://google.com');
    });
});
