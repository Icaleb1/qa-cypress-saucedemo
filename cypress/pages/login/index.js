import { elements as el } from "./elements"

class Login {

    visitarPagina(){
        cy.visit('/')
    }

    preencherCredenciaisValidas(){
        cy.get(el.usernameInput).type('standard_user')
        cy.get(el.passwordInput).type('secret_sauce')

        // cy.screenshot('login preenchido', { 
        //     blackout: [el.usernameInput] 
        // });

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

    preencherCredenciaisOmitindoUsername(){
        cy.get(el.passwordInput).type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    }

    preencherCredenciaisOmitindoPassword(){
        cy.get(el.usernameInput).type('standard_user')
        cy.get('[data-test="login-button"]').click()
        
    }

    validarErroUsernameObrigatorio(){
        cy.get(el.errorMessage).should(
            'contain.text',
            'Username is required'
        )

    }

    validarErroPasswordObrigatorio(){
        cy.get(el.errorMessage).should(
            'contain.text',
            'Password is required'
        )
        
    }

    validarAcessoATelaDeLogin(){
        cy.url().should('eq', 'https://www.saucedemo.com/')
    }


}

export default new Login()