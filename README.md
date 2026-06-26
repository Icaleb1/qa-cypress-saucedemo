# QA Cypress

Projeto simples de estudos com Cypress usando o site Sauce Demo.

```txt
https://www.saucedemo.com/
```

## O que foi praticado

- Login com sucesso.
- Login com erro.
- Carrinho de compras.
- Detalhes de produto.
- Logout.
- Comandos customizados no Cypress.
- Uso de `baseUrl`.

## Instalar dependencias

```bash
npm install
```

## Rodar os testes

Abrir o Cypress:

```bash
npm run cy:open:chrome
```

Rodar pelo terminal:

```bash
npm test
```

## Arquivos principais

- `cypress/e2e/login.cy.js`
- `cypress/e2e/carrinho.cy.js`
- `cypress/e2e/produto.cy.js`
- `cypress/e2e/logout.cy.js`
- `cypress/support/commands.js`
