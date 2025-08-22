import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let Component;
  beforeEach(() => {
    Component = render(<NumberOfEvents setErrorAlert={() => {}} />);
  });

  test('renders a textbox input', () => {
    const input = Component.queryByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('default value is 32', () => {
    const input = Component.queryByRole('textbox');
    expect(input).toHaveValue('32');
  });

  test('typing changes the value', async () => {
    const user = userEvent.setup();
    const input = Component.queryByRole('textbox');

    await user.type(input, '{backspace}{backspace}10');
    expect(input).toHaveValue('10');
  });
});
