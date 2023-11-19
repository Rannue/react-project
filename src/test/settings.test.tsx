import { render, screen } from '@testing-library/react';
import { Settings } from '../components/settings/settings';

test('renders Settings component', async () => {
  render(<Settings />);
  const nextButton = screen.getByTestId('next-button');
  expect(nextButton).toBeInTheDocument();
});
