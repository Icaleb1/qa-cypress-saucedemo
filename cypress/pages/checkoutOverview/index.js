import { elements as el } from "./elements"


class CheckoutOverview {

    validarAcessoAPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')
    }

    validarValorTotal() {

        cy.get(el.itemsSubTotal)
            .invoke('text')
            .then((texto) => {
                const itemsSubTotalValue = parseFloat(texto.match(/[\d.]+/)[0])
            
            cy.get(el.tax)
                .invoke('text')
                .then((texto) => {
                    const taxValue = parseFloat(texto.match(/[\d.]+/)[0])
        
                cy.get(el.paymentTotal)
                    .invoke('text')
                    .then((texto) => {
                        const paymentTotalValue = parseFloat(texto.match(/[\d.]+/)[0])

                        expect(itemsSubTotalValue + taxValue).to.be.closeTo(paymentTotalValue, 0.01)
                })
            })
        })
    }

    validarSomaDeProdutos() {
        let soma = 0

        cy.get(el.itemsList).each(($el) => {
            const valor = parseFloat($el.text().match(/[\d.]+/)[0])
            soma += valor
        }).then(() => {
            cy.get(el.itemsSubTotal).invoke('text').then((texto) => {
                const itemsSubTotalValue = parseFloat(texto.match(/[\d.]+/)[0])
                const somaArredondada = Math.round(soma * 100) / 100
                expect(somaArredondada).to.equal(itemsSubTotalValue)
            })
        })
    }

    finalizarPagamento() {
        cy.get(el.finishPaymentBtn).click()
    }

    validarPagamentoFinalizado() {
        cy.get(el.checkoutCompleteLabel).should('contain.text', 'Thank you for your order!')
    }

    

}

export default new CheckoutOverview()