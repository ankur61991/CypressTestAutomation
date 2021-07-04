/// <reference types="Cypress" />

describe("My Test Suite", function () 
{
    it("My First TestCase", function () {

       
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('.table-display tr td:nth-child(2)').as('tablecolumn')
        cy.get('@tablecolumn').each(($e1, index, $list) => {
            const text= $e1.text()
            if (text.includes('Python'))
            {
                cy.get('@tablecolumn').eq(index).next().then(function(price)
                {
                    const pricetext=price.text()
                    expect(pricetext).to.equal('25')
                })
            }

        }
        )

        




    }
)
}
)


