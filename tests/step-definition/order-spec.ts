import { Given, When, Then } from '@cucumber/cucumber';
import { HomePage } from '../pages/home-page';
import { pageFixture } from '../support/pageFixture';
import { Order } from '../pages/order';
import { OrderDTO } from '../dto/order-dto';

let order: OrderDTO[] = [];

Given('que eu acesso a tela inicial do Magento para cadastrar uma order', async function () {
    const homePage = new HomePage(pageFixture.page);
    homePage.goTo();
    homePage.gotToOrder();
});

When('clico no link Orders and Returns, preencho os dados', async function (dataTable) {
    const orderCreate = new Order(pageFixture.page);
    const table = dataTable.hashes();
    order = [];
    for (const row of table) {
        const email_aleatorio = !row['Email'] ? "" : Date.now() + row['email'];
        order.push({
            orderId: row['OrderId'],
            billingLastName: row['Billing'],
            email: email_aleatorio,
        });
    }
    await orderCreate.submitOrder(order[0])
});

Then('será exibida a mensagem You entered incorrect data. Please try again.', async function () {
    const result = await pageFixture.page.getByText ('You entered incorrect data. Please try again.').textContent();      

});