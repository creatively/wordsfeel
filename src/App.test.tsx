import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders he main app heading', () => {
  render(<App />);
  const headingTextElement = screen.getByText(/See any transcript/i);
  expect(headingTextElement).toBeInTheDocument();
});

