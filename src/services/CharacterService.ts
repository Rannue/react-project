import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharacterResponse } from '../types/types';

export const characterAPI = createApi({
  reducerPath: 'characterAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    fetchAllCharacters: build.query<
      ICharacterResponse,
      { page: number; name: string }
    >({
      query: ({ page = 1, name = '' }) =>
        `character/?name=${name}&page=${page}`,
    }),
  }),
});

export const { useFetchAllCharactersQuery } = characterAPI;
