import Login from "../pages/login"
import Inventory from "../pages/inventory"
import Header from "../components/header"
import Cart from "../pages/cart"
import CheckoutForm from "../pages/checkoutForm"
import CheckoutOverview from "../pages/checkoutOverview"

describe('Pagamento', () => {
    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()
    })

    it('Deve finalizar a compra com múltiplos produtos com sucesso', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        Inventory.adicionarProduto('Sauce Labs Bike Light')
        Inventory.adicionarProduto('Sauce Labs Bolt T-Shirt')

        Header.navegarParaCarrinho()

        Cart.navegarParaCheckoutForm()

        CheckoutForm.validarAcessoAPaginaForm()
        CheckoutForm.preencherFormulario()

        CheckoutOverview.validarAcessoAPagina()
        CheckoutOverview.validarSomaDeProdutos()
        CheckoutOverview.validarValorTotal()
        CheckoutOverview.finalizarPagamento()
        CheckoutOverview.validarPagamentoFinalizado()
        
    })

})