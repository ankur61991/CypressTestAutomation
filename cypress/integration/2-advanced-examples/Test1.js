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
        //add 2nd in the cart
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        //traverse the product serach results and selectively add Cashews to the cart

        cy.get('@productLocator').find('.product').each(($e1, index, $list) => 
        {
            const textVeg=$e1.find('h4.product-name').text()
            if(textVeg.includes("Carrot"))
            {
                $e1.find('button').click()
            }
        })
        
        //to print logo text in log
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())

        })

        //to assert logo text
        
        cy.get('.brand').should('have.text','GREENKART')
    })

    it("My secondTestCse",function(){
        console.log("console log")
        cy.log("cypress log")
    })
}





)