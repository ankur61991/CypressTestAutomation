import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'


const homePage=new HomePage()
const productPage= new ProductPage()
let name
Given('I open ecommerce page',() =>
{
    cy.visit(Cypress.env('url'))
})

When('I add items to cart',function()
{
    homePage.getShopTab().click()
    this.data.productName.forEach(function(element){

        cy.selectProduct(element)

    })
    productPage.checkOutButton().click()

})
And ('Validate the total prices',() => {
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) =>{
        const amount=$e1.text()
        var res=amount.split(' ')
        res=res[1].trim()
        sum=Number(sum)+Number(res)

    }).then(function()
    {
        cy.log(sum)
    })

    var total=0
    cy.get('h3 > strong').then(function(element)
    {
        const amount=element.text()
        var total=amount.split(' ')
        total=total[1].trim()
        expect(Number(sum)).to.equal(Number(total))
    })
    
    Then('Select the country submit and verify success',() =>
    {
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').check({force: true})
        cy.get('input[type="submit"]').click()
        cy.get('.alert').then(function(element)
        {
            const actualText= element.text()
            expect(actualText.includes('Success')).to.be.true
        })

    })


})

When ('I fill the form details',function(dataTable)
{
    name=dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
    

})
Then ('validate the forms behavior',function()
{
    homePage.getTwoWayDataBinding().should('have.value',name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')


})

And ('select the shop page',function()
{

    homePage.getShopTab().click()
})