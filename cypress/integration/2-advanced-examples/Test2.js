/// <reference types="Cypress" />

describe("My Test Suite", function()

{
    it("My First TestCase",function()
    {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productLocator') //alias
        cy.get('@productLocator').find('.product').should('have.length',4)
        
        //traverse the product serach results and selectively add Cashews to the cart

        cy.get('@productLocator').find('.product').each(($e1, index, $list) => 
        {
            const textVeg=$e1.find('h4.product-name').text()
            if(textVeg.includes("Cashews"))
            {
                $e1.find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })

    
}





)