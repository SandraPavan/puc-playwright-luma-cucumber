import { test } from '@playwright/test';
import { HomePage } from './pages/home-page';
import { Order } from './pages/order';
import { OrderDTO } from './dto/order-dto';


test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    homePage.goTo();
    homePage.gotToOrder();
})

test('Inserir order aletatoria', async ({ page }) => {
    const dateTime = Date.now();

    const orderDTO: OrderDTO = {
        orderId: 'Teste123',
        billingLastName: 'teste1234',
        email: dateTime + '_email@abc.com',
    }

    const orderCreate = new Order(page);
    await orderCreate.submitOrder(orderDTO)
    const result = await page.getByText ('You entered incorrect data. Please try again.').textContent();      
})
