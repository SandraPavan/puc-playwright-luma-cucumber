#language: pt

Funcionalidade: Realizar cadastro de uma order

Contexto: Acessando a tela incial do site
Dado que eu acesso a tela inicial do Magento para cadastrar uma order

Cenário: Não deve permitir o cadastro de uma order aleatória
Quando clico no link Orders and Returns, preencho os dados
    |OrderId | Billing  | email        |
    |Teste123| teste1234| email@abc.com|
Então será exibida a mensagem You entered incorrect data. Please try again.