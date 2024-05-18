import { Page } from "@playwright/test";

export class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goTo(){
        const URL = String(process.env.BASE_URL);
        await this.page.goto(URL);
    };

    async gotToOrder() {
        await this.page.getByRole('link', { name: 'Orders and Returns' }).click();;
    }
}