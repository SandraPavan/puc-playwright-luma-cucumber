#language: pt

Funcionalidade: Realizar ações no site Luma

Contexto: Acessando a tela incial do site
Dado que eu acesso a tela inicial do Magento

Cenário: Deve acessar a home realizar a busca por look
E digito o texto "look" na barra de pesquisa
Quando clico no botão pesquisar
Então a busca deve ser realizada

Cenário: Deve acessar os itens do Sale, adicionando um item no carrinho
Quando acesso o menu Sales
E acesso a opção Bras & Tanks
E seleciono a opção Antonia Racer Tank
E seleciono o tamanho XS
E seleciono a cor Black
Então clico no botão Add to Cart

Cenário: Deve acessar as politicas de privacidade
Quando clico no link Privacy and Cookie Policy
Então a página Políticas de privacidade deve ser aberta

Cenário: Deve acessar um item de compra na home
Quando seleciono uma opção Argus All-Weather Tank
E seleciono o tamanho XS
E seleciono a cor Gray
Então clico no botão Add to Cart

Cenário: Deve acessar o site e verificar o título da página
Então verifico se o título da página é Home Page

Cenário: Preencher o login incorretamente
Quando clico no botão Sign In
E preencho o e-mail incorretamente
E preencho a senha incorretamente
E clico em Sign in
Então a mensagem de login incorreto é exibido

Cenário: Deve adicionar um produto aos favoritos
Quando clico em um produto na tela inicial
Então ao abrir o produto, clico para adicioná-lo aos favoritos

Cenário: Comparar produtos
Quando clico no link de um produto da tela inicial
E ao abrir o produto, clico no botão para comparar produtos
E clico em um produto similar na tela
Então ao abrir o produto, clico novamente no botão comparar produtos