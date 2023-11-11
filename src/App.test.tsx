import { render, screen } from '@testing-library/react';
import App from './App';

it('should have logo text', () => {
  render(<App />);
  const message = screen.queryByText(/LOGO/i);
  expect(message).toBeVisible();
});
