@smoke
Feature: Redirect feature    

    Check for proper page redirection

    Scenario: Check that URL is changed on URL of chosen page
    Given I am on Onliner page
    When I click "<���������>"
    Then I am redirected to "<���������>" page