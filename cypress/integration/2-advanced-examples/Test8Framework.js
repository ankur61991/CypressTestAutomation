/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe("My Test Suite", function () {

before(function(){

    cy.fixture('example').then(function(data)
    {
        this.data=data


    })

})

it('My First TestCase',function(){
    
    const homePage=new HomePage()
    const productPage= new ProductPage()
    cy.visit(Cypress.env('url'))
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
    Cypress.config('defaultCommandTimeout',10000)
    homePage.getShopTab().click()
    this.data.productName.forEach(function(element){

        cy.selectProduct(element)

    })
    productPage.checkOutButton().click()
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









}



)
