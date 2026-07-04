import Login from "../pages/login"
import Inventory from "../pages/inventory"
import Header from "../pages/header"
import Cart from "../pages/cart"

describe('Carrinho', () => {
    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()

    })
    it('Deve adicionar produto ao carrinho com sucesso', () => {
    
        Inventory.adicionarProduto('Sauce Labs Backpack')

        const qtdItensAdicionados = 1
        Header.validarQueCarrinhoPossuiItens(qtdItensAdicionados)

        Header.navegarParaCarrinho

        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack')

        
    })

    it('Deve adicionar mais de um produto ao carrinho com sucesso', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

        cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '3')

        cy.get('#shopping_cart_container').click()

        cy.contains('Sauce Labs Backpack').should('be.visible') 
        cy.contains('Sauce Labs Bike Light').should('be.visible') 
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible') 

    })

    it('Deve adicionar e remover produto do carrinho com sucesso', () => {
        //cy.adicionarItemCarrinho()

        Inventory.adicionarProduto('Sauce Labs Backpack')

        Inventory.removerProduto('Sauce Labs Backpack')

        Header.validarQueCarrinhoNaoPossuiItens()
    })

    

    

})  