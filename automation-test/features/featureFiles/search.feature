@smoke
Feature: Search feature    

    Check for proper searching 

    Scenario: Check that once user types a word in search field, all matching results are shown
    Given I am on Baraholka page
    When I enter "<Лопата>" in search bar
    And I press "<Найти>" button
    Then page with all searching results is shown