import { server } from '../mocks/server';
import { rest } from 'msw';
import { fetchProducts } from '../api/productsApi';

describe('fetchTodos lib function', () => {
  it('should return the correct number of todo items', async () => {
    const todosArray = await fetchProducts();
    expect(todosArray).toHaveProperty('data');
  });

  it('should return an empty array with an error', async () => {
    server.use(
      rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    const todosArray = await fetchProducts();
    expect(todosArray).toHaveProperty('errorStatus');
  });
});
