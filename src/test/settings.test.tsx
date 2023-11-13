import { render, screen } from '@testing-library/react';
import { Settings } from '../pages/home-page/componets/settings/settings';

test('renders Settings component', async () => {
  render(<Settings />);
  const nextButton = screen.getByTestId('next-button');
  expect(nextButton).toBeInTheDocument();
});
