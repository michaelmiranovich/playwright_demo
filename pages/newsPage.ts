import { expect, Locator, Page } from '@playwright/test';

export default class NewsPage {

    constructor(private page: Page) {
        this.page = page;
    }

    async navigateToNewsPage(url: string = 'https://news.google.com/') {
        await this.page.goto(url);
    }

    async getNews(index: number = 0): Promise<Locator> {
        const news = await this.page.locator('article > a').all();

        return news[index];
    }

}