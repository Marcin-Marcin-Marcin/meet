/* eslint-disable no-unused-vars */
import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  let AppComponent;
  let AppDOM;

  const getEventListDOM = () => AppDOM.querySelector('#event-list');
  const getNumberInput = () => {
    const wrapper = AppDOM.querySelector('#number-of-events') || AppDOM;
    return (
      within(wrapper).queryByRole('spinbutton') ||
      within(wrapper).queryByRole('textbox')
    );
  };

  test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
    given('the app is open', () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    when('the list of events is displayed', async () => {
      await waitFor(() => {
        const EventListDOM = getEventListDOM();
        const items = within(EventListDOM).queryAllByRole('listitem');
        expect(items.length).toBeGreaterThan(0);
      });
    });

    then('exactly 32 events should be rendered', async () => {
      const EventListDOM = getEventListDOM();
      await waitFor(() => {
        const items = within(EventListDOM).queryAllByRole('listitem');
        expect(items.length).toBe(32);
      });
    });
  });

  test('User can change the number of events displayed', ({ given, and, when, then }) => {
    given('the app is open', () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    and('the list of events is displayed', async () => {
      await waitFor(() => {
        const EventListDOM = getEventListDOM();
        const items = within(EventListDOM).queryAllByRole('listitem');
        expect(items.length).toBeGreaterThan(0);
      });
    });

    when('the user sets the number of events to 10', async () => {
      const user = userEvent.setup();
      const input = getNumberInput();
      await user.clear(input);
      await user.type(input, '10');
    });

    then('exactly 10 events should be rendered', async () => {
      const EventListDOM = getEventListDOM();
      await waitFor(() => {
        const items = within(EventListDOM).queryAllByRole('listitem');
        expect(items.length).toBe(10);
      });
    });
  });
});
