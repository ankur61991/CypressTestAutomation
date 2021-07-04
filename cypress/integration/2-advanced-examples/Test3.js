/// <reference types="Cypress" />

describe("My Test Suite", function () 
{
    it("My First TestCase", function () {

        //checkbox test
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(["option2", "option3"])

        //static dropdown test
        cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic Dropdown test
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($e1, index, $list) => {

            if ($e1.text() === 'India') {
                $e1.trigger("click")
            }
        }
        )
        cy.get('#autocomplete').should('have.value','India')

        //show/hide button test

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()


        //radio button

        cy.get('[value="radio2"]').check().should('be.checked')




    }
)
}
)


