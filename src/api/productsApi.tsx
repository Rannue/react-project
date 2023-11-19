import axios from 'axios';
import character404 from '../assets/404.png';
import { ICharacterResponse, IErrorResponse } from '../types/types';

export const fetchProducts = async (value = '', page = 1) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${value}&page=${page}`
    );
    const responseObject: ICharacterResponse = {
      data: response.data.results,
      info: response.data.info,
    };
    return responseObject;
  } catch (error) {
    console.error('Ошибка:', error);
    const responseObject: IErrorResponse = {
      errorStatus: 404,
      text: 'No products',
      image: character404,
    };
    return responseObject;
  }
};

export const fetchProductsItem = async (id: string) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка:', error);
    return null;
  }
};
