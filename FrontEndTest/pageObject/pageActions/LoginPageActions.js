
const loginElementLocators = require("../pageElements/LoginPageElements.json")

export class loginPageElements {

   

        uname(usernamee){

        cy.get(loginElementLocators.LoginPageLocators.username_text).type(usernamee)
        return

    }

    pass(passwordd){
        cy.get(loginElementLocators.LoginPageLocators.password_text).type(passwordd)
        return

    }

    LoginButton(){
        cy.get(loginElementLocators.LoginPageLocators.login_button).click()
        return

    }

}