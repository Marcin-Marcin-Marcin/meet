# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Meet App
A serverless, progressive web application (PWA) built with react using test driven development (TDD). It fetches upcoming events via the Google Calendar API and visualizes data.

Features
Filter by city
Toggle event details
Set number of events
Offline use & installable
Charts

Tech
React, Jest
AWS Lambda
Google Calendar API
Recharts
GitHub Pages

Scenarios:

1. As a user, I should be able to see a list of suggested cities as I type in the search bar So that I can quickly find the city I'm looking for without typing the full name Scenario: Show a list of suggested cities as the user types
   a. Given the user is on the events search page
   b. When the user types a partial city name into the search bar
   c. Then a list of matching city suggestions should appear below the search bar
2. As a user, I should be able to choose how many events are displayed So that I can control how much information is shown based on my preference Scenario: User sets a custom number of events to display
   a. Given the user is on the main events page and a default number of 32 events is currently displayed
   b. When the user enters a different number (e.g., 10) in the event count input field
   c. Then only that number of upcoming events should be displayed on the page
3. As a user, I should be able to view event details by expanding an event, so that I can learn more about the event without leaving the main page Scenario: User expands an event to view more information
   a. Given the user is on the main events page and all event details are collapsed by default
   b. When the user clicks on the “Show Details” button for an event
   c. Then the full details of that event should be displayed below the event summary
4. As a user, I should be able to collapse an event after viewing details, so that I can keep the event list clean and focused Scenario: User collapses an expanded event to hide its details
   a. Given the user has expanded the details of an event
   b. When the user clicks on the “Hide Details” button for that event
   c. Then the event details should be hidden and only the event summary should be visible
5. As a user, I should be able to see an error message when trying to change settings offline so that I understand why new results aren't loading and avoid confusion Scenario: Show error when user tries to change settings without internet connection
   a. Given the user is offline and the user is on the main events page with cached data
   b. When the user attempts to change the city filter or number of events
   c. Then an error message should be displayed and the event list should not be updated
6. As a user, I should be able to select a city from the suggested list, so that I can filter the events to only show those happening in that specific city Scenario: User selects a city from the suggestions to filter events
   a. Given the user is typing a city name in the search bar and a list of suggested cities is displayed
   b. When the user clicks on a city from the suggestions
   c. Then the list of events should
