import Login from "../pages/login"
import Inventory  from "../pages/inventory"


describe('Login', () => {
    beforeEach(() => {
        Login.visitarPagina()
    })


    it('Deve realizar login com sucesso e ser redirecionado para dentro do sistema', () => {
        
        Login.preencherCredenciaisValidas()  

        Inventory.validarAcessoAPagina()      

    })
    it('Realizar login com credenciais invalidas', () => {
        
        Login.preencherCredenciaisInvalidas()

        Login.validarErrocredenciaisInvalidas()

    })

    it('Deve tentar realizar login sem Username e receber mensagem de erro', () => {
        Login.preencherCredenciaisOmitindoUsername()

        Login.validarErroUsernameObrigatorio()
    })

    it('Deve tentar realizar login sem password e receber mensagem de erro', () => {
        Login.preencherCredenciaisOmitindoPassword()

        Login.validarErroPasswordObrigatorio()
    })

}) 