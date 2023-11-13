import { render, screen } from '@testing-library/react';
import App from '../App';

test('ennsure that the 404 page is displayed when navigating to an invalid route', async () => {
  render(<App />);

  window.history.pushState({}, 'Test page', '/unknown-route');
  window.dispatchEvent(new Event('popstate'));

  await screen.findByText('404');

  const notFoundElement = screen.getByText('404');
  expect(notFoundElement).toBeInTheDocument();
});
