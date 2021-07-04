/// <reference types="Cypress" />

describe("My Test Suite", function () 
{
    it("My First TestCase", function () {

       
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //alert handling
        cy.get('#alertbtn').click()
        cy.get('input[id="confirmbtn"]').click()
        cy.on('window:alert',(str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        }
        )
        //confirm handling
        cy.on('window:confirm',(str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        }
        )

        //handling child tab
        cy.get('#opentab').invoke('removeAttr','target').click()

        //assert on current url

        cy.url().should('include','index')

        //browser back
        cy.go('back')




    }
)
}
)


