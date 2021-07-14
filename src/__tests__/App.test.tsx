import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders Hello World', () => {
  render(<App />);
  const hello = screen.getByText(/hello world!/i);
  expect(hello).toBeInTheDocument();
});
