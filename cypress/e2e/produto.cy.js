describe('Produto', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login("standard_user","secret_sauce")
    })


    it('Deve acessar um produto e ver seus detalhes corretamente', () => {
        
        cy.contains('Sauce Labs Backpack').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4')

        cy.contains('Sauce Labs Backpack').should('be.visible')
        
        cy.get('[data-test="inventory-item-desc"]')
    })
})