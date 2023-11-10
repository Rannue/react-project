import { render, screen } from '@testing-library/react';
import App from './App';

// import matchers from "@testing-library/jest-dom/types/matchers"
// expect.extend(matchers)

it('should have logo text', () => {
  render(<App />);
  const message = screen.queryByText(/LOGO/i);
  expect(message).toBeVisible();
});
