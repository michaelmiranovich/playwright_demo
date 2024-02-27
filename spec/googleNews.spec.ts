// @ts-check
import { test } from '@playwright/test';
import { chromium, firefox, webkit } from 'playwright';
import { logger } from './support/utils';
import NewsPage from '../pages/newsPage';

test.describe("Google News", () => {
    test('Output of a 2nd top story', async () => {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();

        const newsPage = new NewsPage(page);

        await newsPage.navigateToNewsPage();

        const secondTopStory = await newsPage.getNews(4);
        const nonGooglePage = context.waitForEvent('page');
        await secondTopStory.click({ force: true });
        const newPage = await nonGooglePage;
        await newPage.waitForLoadState();

        logger.debug(`H1 heading of a 2nd Top Story: ${await newPage.locator('h1').textContent()}`);
        const h2Exists = await newPage.locator('h2').count() > 0;
        const h3Exists = await newPage.locator('h3').count() > 0;
        if (h2Exists) {
            for (const h2 of await newPage.locator('h2').all()) {
                logger.debug(`H2 heading of a 2nd Top Story: ${await h2.textContent()}`);
            }
        } else if (h3Exists) {
            for (const h3 of await newPage.locator('h3').all()) {
                logger.debug(`H3 heading of a 2nd Top Story: ${await h3.textContent()}`);
            }
        }
    });
});
