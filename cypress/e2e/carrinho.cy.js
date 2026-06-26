describe('Carrinho', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login("standard_user","secret_sauce")
    })
    it('Deve adicionar produto ao carrinho com sucesso', () => {
    
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1')

        cy.get('#shopping_cart_container').click()

        cy.contains('Sauce Labs Backpack').should('be.visible') 
    })

    it('Deve adicionar mais de um produto ao carrinho com sucesso', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

        cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '3')

        cy.get('#shopping_cart_container').click()

        cy.contains('Sauce Labs Backpack').should('be.visible') 
        cy.contains('Sauce Labs Bike Light').should('be.visible') 
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible') 

    })

    it('Deve adicionar e remover produto do carrinho com sucesso', () => {
        cy.adicionarItemCarrinho()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.contains('Sauce Labs Backpack').should('not.exist') 
    })

    

})  