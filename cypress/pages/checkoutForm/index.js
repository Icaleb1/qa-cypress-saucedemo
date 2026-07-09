import { elements as el } from "./elements"

class CheckoutForm {
    
    preencherFormulario(){
        cy.get(el.firstNameInput).type('user')

        cy.get(el.lastNameInput).type('test')

        cy.get(el.postalCodeInput).type('88045-312')

        cy.get(el.nextStepBtn).click()

    }

    validarAcessoAPaginaForm(){
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
    }


}

export default new CheckoutForm()