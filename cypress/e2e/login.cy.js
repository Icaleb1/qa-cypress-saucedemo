import Login from "../pages/login/index"
import Inventory  from "../pages/inventory/index"


describe('Login', () => {
    beforeEach(() => {
        Login.visitarPagina()
    })


    it('Deve realizar login com sucesso e ser redirecionado para dentro do sistema', () => {
        
        Login.preencherCredenciaisValidas()  

        Inventory.validarAcessoAPagina()      

    })
    it('Realizar login com credenciais invalidas', () => {
        
        Login.preencherCredenciaisInvalidas()

        Login.validarErrocredenciaisInvalidas()

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