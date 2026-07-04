import { elements as el } from "./elements"

class Login {

    visitarPagina(){
        cy.visit('/')
    }

    preencherCredenciaisValidas(){
        cy.get(el.usernameInput).type('standard_user')
        cy.get(el.passwordInput).type('secret_sauce')
        cy.get(el.loginButton).click()
    }

    preencherCredenciaisInvalidas(){
        cy.get(el.usernameInput).type('invalido')
        cy.get(el.passwordInput).type('invalido')
        cy.get(el.loginButton).click()
    }

    validarErrocredenciaisInvalidas(){
        cy.get(el.errorMessage).should(
            'contain.text', 
            'Username and password do not match any user in this service'
        )

        cy.url().should('eq', 'https://www.saucedemo.com/')

        cy.screenshot('erro de credenciais inválidas')
    }

}

export default new Login()