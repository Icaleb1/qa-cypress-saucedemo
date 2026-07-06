import { elements as el} from "./elements"

class Sidebar{

    verificarSidebarAberta(){
        cy.get(el.sidebar).should("be.visible")
    }

    clicarNoBotaoDeLogout(){
        cy.get(el.logoutbtn).click()

    }

}

export default new Sidebar()