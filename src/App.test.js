import { render, screen } from '@testing-library/react';
import App from './App';

it('renders Home link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders Favorites List link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Favorites List/i);
  expect(linkElement).toBeInTheDocument();
});
