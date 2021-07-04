Feature: End to End Ecommerce Validation
application regression

@Regression
Scenario: Ecommerce Product Delivery
Given I open ecommerce page
When I add items to cart
And Validate the total prices
Then Select the country submit and verify success

@Smoke
Scenario: Filling the form to shop
Given I open ecommerce page
When I fill the form details
|name |gender|
|ankur|Male|
Then validate the forms behavior
And select the shop page