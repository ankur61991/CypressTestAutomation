/// <reference types="Cypress" />

describe("My Test Suite", function () 
{
    it("My First TestCase", function () {

       
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // mouse hover
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true}) //forcefully click on hidden
        cy.url().should('include','top')
        

        




    }
)
}
)


