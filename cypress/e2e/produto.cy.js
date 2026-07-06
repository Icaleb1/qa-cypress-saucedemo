import Login  from "../pages/login"
import Inventory from "../pages/inventory"
import Product from "../pages/product"

describe('Produto', () => {
    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()
    })


    it('Deve acessar um produto e ver seus detalhes corretamente', () => {
        
        Inventory.acessarUmProduto('Sauce Labs Backpack')

        Product.validarAcessoAPagina()

        Product.validarProdutoSelecionado('Sauce Labs Backpack')
        
        Product.validarDetalhesDoProduto()
    })
})