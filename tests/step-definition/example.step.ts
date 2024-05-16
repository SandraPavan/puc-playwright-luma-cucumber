import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';

Given('que eu acesso a tela inicial do Magento', async function (this: ICustomWorld) {
    await this.page!.goto("https://magento.softwaretestingboard.com/");
});

Given('digito o texto {string} na barra de pesquisa', async function (this: ICustomWorld, look: string) {
    await this.page!.locator('#search').fill(look);
});

When('clico no botão pesquisar', async function (this: ICustomWorld) {
    await this.page!.getByRole('button', { name: 'Search' }).click();
});

Then('a busca deve ser realizada', async function (this: ICustomWorld) {
    await expect(this.page!.title()).resolves.toMatch("Search results for: 'look'");
});

When('acesso o menu Sales', async function (this: ICustomWorld) {
    await this.page!.getByRole('menuitem', { name: 'Sale' }).click();
});

When('acesso a opção Bras & Tanks', async function (this: ICustomWorld) {
    await this.page!.getByRole('link', { name: 'Bras & Tanks' }).click();
    await expect(this.page!.title()).resolves.toMatch("Bras & Tanks");
});

When('seleciono a opção Antonia Racer Tank', async function (this: ICustomWorld) {
    await this.page!.getByRole('link', { name: 'Antonia Racer Tank' }).first().click()
    await expect(this.page!.title()).resolves.toMatch("Antonia Racer Tank");
});

When('seleciono o tamanho XS', async function (this: ICustomWorld) {
    await this.page!.getByLabel('XS').click();
});

When('seleciono a cor Black', async function (this: ICustomWorld) {
    await this.page!.getByLabel('Black').click();
});

Then('clico no botão Add to Cart', async function (this: ICustomWorld) {
    await this.page!.getByRole('button', { name: 'Add to Cart' }).click();
});

When('clico no link Privacy and Cookie Policy', async function (this: ICustomWorld) {
    await this.page!.getByRole('link', { name: 'Privacy and Cookie Policy' }).click();

});

Then('a página Políticas de privacidade deve ser aberta', async function (this: ICustomWorld) {
    await expect(this.page!.title()).resolves.toMatch("Privacy Policy");
});

When('seleciono uma opção Argus All-Weather Tank', async function (this: ICustomWorld) {
    await this.page!.getByRole('link', { name: 'Argus All-Weather Tank' }).first().click();
    await expect(this.page!.title()).resolves.toMatch("Argus All-Weather Tank");
});

When('seleciono a cor Gray', async function (this: ICustomWorld) {
    await this.page!.getByLabel('Gray').click();
});

Then('verifico se o título da página é Home Page', async function (this: ICustomWorld) {
    await expect(await this.page!.title()).toBe('Home Page');
});

When('clico no botão Sign In', async function (this: ICustomWorld) {
    await this.page!.getByRole('link', { name: 'Sign In' }).click();
});

When('preencho o e-mail incorretamente', async function (this: ICustomWorld) {
    await this.page!.getByLabel('Email', { exact: true }).click();
    await this.page!.getByLabel('Email', { exact: true }).fill('teste@teste.com.br');
    await this.page!.getByLabel('Email', { exact: true }).press('Tab');
});

When('preencho a senha incorretamente', async function (this: ICustomWorld) {
    await this.page!.getByLabel('Password').fill('Teste123');
});

When('clico em Sign in', async function (this: ICustomWorld) {
    await this.page!.getByRole('button', { name: 'Sign In' }).click();
});

Then('a mensagem de login incorreto é exibido', async function (this: ICustomWorld) {
    const result = await this.page!.getByText('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').textContent();
});

When('clico em um produto na tela inicial', async function (this: ICustomWorld) {
    await this.page!.goto('https://magento.softwaretestingboard.com/radiant-tee.html');
});

Then('ao abrir o produto, clico para adicioná-lo aos favoritos', async function (this: ICustomWorld) {
    await this.page!.getByRole('link', { name: ' Add to Wish List' }).click();
});

When('clico no link de um produto da tela inicial', async function (this: ICustomWorld) {
    await this.page!.getByRole('link', { name: 'Breathe-Easy Tank' }).first().click();
});

When('ao abrir o produto, clico no botão para comparar produtos', async function (this: ICustomWorld) {
    await this.page!.getByRole('link', { name: ' Add to Compare' }).click();      
});

When('clico em um produto similar na tela', async function (this: ICustomWorld) {
    await this.page!.getByRole('link', { name: 'Gabrielle Micro Sleeve Top' }).first().click();
});

Then('ao abrir o produto, clico novamente no botão comparar produtos', async function (this: ICustomWorld) {
    await this.page!.getByRole('link', { name: ' Add to Compare' }).click();
});