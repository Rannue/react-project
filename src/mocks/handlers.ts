import { rest } from 'msw';

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: 1,
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
          },
          {
            id: 2,
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
          },
        ],
        info: { count: 12, next: null, pages: 1, prev: null },
      })
    );
  }),
];
