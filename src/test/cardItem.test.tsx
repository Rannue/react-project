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

// test('check that clicking triggers an additional API call to fetch detailed information', async () => {
//     render(<CardItem character={character} />);

//     // Кликаем по карточке
//     const cardElement = screen.getByText(/test-name/i);
//     fireEvent.click(cardElement);

//     await act(async () => {
//         await new Promise((resolve) => setTimeout(resolve, 0)); // Даем шанс асинхронным операциям выполниться
//       });

//     // Проверяем, что детальная карточка была открыта
//     const detailedCardElement = screen.getByText(/test-status/i); // Подставьте здесь текст, который отображается на детальной карточке
//     expect(detailedCardElement).toBeInTheDocument();
//   });
