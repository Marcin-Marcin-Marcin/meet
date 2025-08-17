import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  let AppComponent;
  let AppDOM;

  const getEventList = () => AppDOM.querySelector('#event-list');
  const getFirstEventDetailsBtn = () => AppDOM.querySelector('.event .details-btn');
  const getFirstEventDetails = () => AppDOM.querySelector('.event .event-details');

  const ensureListLoaded = async () => {
    await waitFor(() => {
      const EventListDOM = getEventList();
      const items = within(EventListDOM).queryAllByRole('listitem');
      expect(items.length).toBeGreaterThan(0);
    });
  };

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the app is open', () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    when('the list of events is displayed', async () => {
      await ensureListLoaded();
    });

    then('the details for the first event should be hidden', async () => {
      const user = userEvent.setup();
      if (getFirstEventDetails()) {
        await user.click(getFirstEventDetailsBtn());
      }
      await waitFor(() => {
        expect(getFirstEventDetails()).toBeNull();
      });
    });
  });

  test('User can expand an event to see details', ({ given, and, when, then }) => {
    given('the app is open', () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    and('the list of events is displayed', async () => {
      await ensureListLoaded();
    });

    when('the user clicks the details button on the first event', async () => {
      const user = userEvent.setup();
      if (getFirstEventDetails()) {
        await user.click(getFirstEventDetailsBtn());
        await waitFor(() => {
          expect(getFirstEventDetails()).toBeNull();
        });
      }
      await user.click(getFirstEventDetailsBtn());
    });

    then('the details for the first event should be visible', async () => {
      await waitFor(() => {
        expect(getFirstEventDetails()).not.toBeNull();
      });
    });
  });

  test('User can collapse an event to hide details', ({ given, and, when, then }) => {
    given('the app is open', () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    and('the list of events is displayed', async () => {
      await ensureListLoaded();
    });

    and('the details for the first event are visible', async () => {
      const user = userEvent.setup();
      if (!getFirstEventDetails()) {
        await user.click(getFirstEventDetailsBtn());
      }
      await waitFor(() => {
        expect(getFirstEventDetails()).not.toBeNull();
      });
    });

    when('the user clicks the details button on the first event', async () => {
      const user = userEvent.setup();
      await user.click(getFirstEventDetailsBtn());
    });

    then('the details for the first event should be hidden', async () => {
      await waitFor(() => {
        expect(getFirstEventDetails()).toBeNull();
      });
    });
  });
});
