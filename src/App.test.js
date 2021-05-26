import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Feature branch link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Feature branch/i);
  expect(linkElement).toBeInTheDocument();
});

