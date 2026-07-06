import Login from "../pages/login"
import Header from "../components/header"
import Sidebar from "../components/sidebar"

describe('Logout', () => {
    beforeEach(() => {
       Login.visitarPagina()
       Login.preencherCredenciaisValidas()
    })

    it('Deve realizar logout com sucesso e ser redirecionado para tela de login', () => {
        
        Header.abrirSideBar()

        Sidebar.verificarSidebarAberta()

        Sidebar.clicarNoBotaoDeLogout()        
        
        Login.validarAcessoATelaDeLogin()
    })
})