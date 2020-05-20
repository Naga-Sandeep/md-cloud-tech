import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders MG Cloud Tech text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/MG Cloud Technologies/i);
  expect(linkElement).toBeInTheDocument();
});
