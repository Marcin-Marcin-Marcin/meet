Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 32 events are shown by default
    Given the app is open
    When the list of events is displayed
    Then exactly 32 events should be rendered

  Scenario: User can change the number of events displayed
    Given the app is open
    And the list of events is displayed
    When the user sets the number of events to 10
    Then exactly 10 events should be rendered
    
