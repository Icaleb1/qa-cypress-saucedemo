describe('Logout', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login("standard_user","secret_sauce")
    })

    it('Deve realizar logout com sucesso e ser redirecionado para tela de login', () => {
        cy.get("#react-burger-menu-btn").click()

        cy.get('.bm-menu').should("be.visible")

        cy.get('[data-test="logout-sidebar-link"]').click()
        
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})