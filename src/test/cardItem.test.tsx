import { render, screen } from '@testing-library/react';
import CardItem from '../pages/home-page/componets/cardItem';
import { ICharacter } from '../types/types';

const character: ICharacter = {
  id: 6,
  name: 'test-name',
  status: 'test-status',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: 'test-image',
  episode: ['', ''],
  url: '',
  created: '',
};

test('ensure that the card component renders the relevant card data', () => {
  render(<CardItem character={character} />);

  const imageElement = screen.getByAltText(/test-name/i);
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'test-image');
});
