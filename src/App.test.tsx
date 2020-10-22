import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders company\'s and user\'s info on header', () => {
  const { getByText } = render(<App />);
  const companyName = getByText(/Squad Management Tool/i);
  expect( companyName ).toBeInTheDocument();
});
