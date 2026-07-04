class Cart {

    validarProdutoPresenteNoCarrinho(productName){
        cy.contains(productName).should('be.visible') 

        cy.screenshot('produto adicionado')
    }

}

export default new Cart()