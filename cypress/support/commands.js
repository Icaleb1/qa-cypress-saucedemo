Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
})

Cypress.Commands.add('adicionarItemCarrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1')
    cy.get('#shopping_cart_container').click()
    cy.contains('Sauce Labs Backpack').should('be.visible') 
})