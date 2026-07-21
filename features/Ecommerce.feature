Feature: Ecommerce Validations

  @Regression
  Scenario: Placing the order
    Given I have logged in to the Ecommerce application with "dineshcarer00@gmail.com" and "Test@123"
    When Add "ZARA COAT 3" item to the cart
    Then Verify "ZARA COAT 3" is displayed in the cart
    When Enter valid details and place the order
    Then Verify the order is presented in the order history


     @Validation
    Scenario Outline: Placing the order
    Given I have logged in to the Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed or not

    Examples:
    | username    	          | 	password      |
    | dineshcarer00@gmail.com |     Test@123      |
    | hello@123.com           |     itshello@123  |


