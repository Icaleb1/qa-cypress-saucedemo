describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })


    it('Deve realizar login com sucesso e ser redirecionado para dentro do sistema', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
    it('Realizar login com credenciais invalidas', () => {
        cy.get('[data-test="username"]').type('invalido')
        cy.get('[data-test="password"]').type('invalido')
        cy.get('[data-test="login-button"]').click()

        //Assert
        cy.get('[data-test="error"]').should(
            'contain.text', 
            'Username and password do not match any user in this service'
        )

        cy.url().should('eq', 'https://www.saucedemo.com/')
    })

    it('Deve tentar realizar login sem Username e receber mensagem de erro', () => {
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should(
            'contain.text',
            'Username is required'
        )
    })

    it('Deve tentar realizar login sem password e receber mensagem de erro', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should(
            'contain.text',
            'Password is required'
        )
    })

}) 