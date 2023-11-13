import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Dantech Finance title', () => {
  render(<App />);
  const linkElement = screen.getByText(/DanTech Finance/i);
  expect(linkElement).toBeInTheDocument();
});
