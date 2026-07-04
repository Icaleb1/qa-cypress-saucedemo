import { elements as el } from "./elements"

class Header {

    validarQueCarrinhoPossuiItens(quantidade){
        cy.screenshot('produto adicionado')

        cy.get(el.cartBadge).should('be.visible').and('have.text', quantidade.toString())
    }

    navegarParaCarrinho(){
        cy.get(el.cartContainer).click()
    }

    validarQueCarrinhoNaoPossuiItens(){
        cy.contains(el.cartBadge).should('not.exist') 

        cy.screenshot('Produto removido ')
    }

}

export default new Header()