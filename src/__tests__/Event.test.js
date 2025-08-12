import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  test('renders collapsed event info and a "Show details" button', async () => {
    const allEvents = await getEvents();
    const event = allEvents[0];

    const { queryByText, queryByRole } = render(<Event event={event} />);

    expect(queryByText(event.summary)).toBeInTheDocument();
    expect(queryByText(event.created)).toBeInTheDocument();
    expect(queryByText(event.location)).toBeInTheDocument();

    expect(queryByRole('button', { name: /show details/i })).toBeInTheDocument();
  });

  test('shows details and "Hide details" after clicking "Show details"', async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const event = allEvents[0];

    const { queryByRole, container } = render(<Event event={event} />);

    await user.click(queryByRole('button', { name: /show details/i }));

    expect(queryByRole('button', { name: /hide details/i })).toBeInTheDocument();

    const details = container.querySelector('.details');
    expect(details).toBeInTheDocument();

    if (event.description) {
      const detailsText = details.textContent.replace(/\s+/g, ' ').trim();
      const expectedDesc = event.description.replace(/\s+/g, ' ').trim();
      expect(detailsText).toContain(expectedDesc);
    }
  });

  test('hides details again when clicking "Hide details"', async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const event = allEvents[0];

    const { queryByRole, container } = render(<Event event={event} />);

    await user.click(queryByRole('button', { name: /show details/i }));
    expect(queryByRole('button', { name: /hide details/i })).toBeInTheDocument();

    await user.click(queryByRole('button', { name: /hide details/i }));

    expect(queryByRole('button', { name: /show details/i })).toBeInTheDocument();
    expect(container.querySelector('.details')).toBeNull();
  });
});
