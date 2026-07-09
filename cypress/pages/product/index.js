import { elements as el } from "./elements"
class Product {

    validarAcessoAPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=')
    }

    validarProdutoSelecionado(itemName){
        cy.contains(itemName).should('be.visible')
    }

    validarDetalhesDoProduto(){
        cy.get(el.itemDesc).should('be.visible').and('not.be.empty')
    }

}

export default new Product  