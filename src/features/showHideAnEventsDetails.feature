Feature: Show/Hide Event Details

  Scenario: An event element is collapsed by default
    Given the app is open
    When the list of events is displayed
    Then the details for the first event should be hidden

  Scenario: User can expand an event to see details
    Given the app is open
    And the list of events is displayed
    When the user clicks the details button on the first event
    Then the details for the first event should be visible

  Scenario: User can collapse an event to hide details
    Given the app is open
    And the list of events is displayed
    And the details for the first event are visible
    When the user clicks the details button on the first event
    Then the details for the first event should be hidden
