import { elements as el } from "./elements"

class Cart {

    validarProdutoPresenteNoCarrinho(productName){
        cy.contains(productName).should('be.visible') 

        //cy.screenshot('produto adicionado')
    }

    navegarParaCheckoutForm(){
        cy.get(el.checkoutBtn).click()
    }

    validarAcessoAPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    }

}

export default new Cart()