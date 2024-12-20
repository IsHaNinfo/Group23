/// <reference types = "Cypress"/>

import { loginPageElements } from "../../../pageObject/pageActions/LoginPageActions.js"
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

const Login_Elements =  new loginPageElements
    


    Given('Visit RiyaSewana Website',function(){
        cy.visit('https://riyasewana.com/login.php')

    })

    When('User provide username',function(){
        Login_Elements.uname('ishannew')

    })

    When('User provide password',function(){
        Login_Elements.pass('ishannew23')

    })


    Then('Click on Login button to log in into the RiyaSewana Website',function(){
        Login_Elements.LoginButton('')

    })
