Feature: Ecommerce Validations

    @Validation
    @foo
  Scenario Outline: Placing the order
    Given I have logged in to the Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed or not

    Examples:
    | username    	          | 	password      |
    | dineshcarer00@gmail.com |     Test@123      |
    | hello@123.com           |     itshello@123  |
