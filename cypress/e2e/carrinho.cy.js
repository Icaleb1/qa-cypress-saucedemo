import Login from "../pages/login"
import Inventory from "../pages/inventory"
import Header from "../components/header"
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

        Header.navegarParaCarrinho()

        Cart.validarAcessoAPagina()

        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack')

        
    })

    it('Deve adicionar mais de um produto ao carrinho com sucesso', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        Inventory.adicionarProduto('Sauce Labs Bike Light')
        Inventory.adicionarProduto('Sauce Labs Bolt T-Shirt')

        const qtdItensAdicionados = 3
        Header.validarQueCarrinhoPossuiItens(qtdItensAdicionados)

        Header.navegarParaCarrinho()

        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack')
        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Bike Light')
        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Bolt T-Shirt')

    })

    it('Deve adicionar e remover produto do carrinho com sucesso', () => {
        //cy.adicionarItemCarrinho()

        Inventory.adicionarProduto('Sauce Labs Backpack')

        Inventory.removerProduto('Sauce Labs Backpack')

        Header.validarQueCarrinhoNaoPossuiItens()
    })

    

    

})  