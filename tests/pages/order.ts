import { Locator, Page } from "@playwright/test";
import { OrderDTO } from "../dto/order-dto";

export class Order {
    page: Page;
    orderId: Locator;
    billingLastName: Locator;
    email: Locator;
    buttonSubmitOrder: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderId = this.page.getByLabel('Order ID', { exact: true });
        this.billingLastName = this.page.getByLabel('Billing Last Name', { exact: true });
        this.email = this.page.getByLabel('Email', { exact: true });
        this.buttonSubmitOrder = this.page.getByRole('button', { name: 'Continue' });
    }

    async submitOrder(orderDTO: OrderDTO) {
        await this.orderId.fill(orderDTO.orderId)
        await this.billingLastName.fill(orderDTO.billingLastName)
        await this.email.fill(orderDTO.email)
        await this.buttonSubmitOrder.click();
    }
}