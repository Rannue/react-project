import axios from 'axios';
import character404 from '../assets/404.png';

export interface IProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface IErrorResponse {
  errorStatus: number;
  text: string;
  image: string;
}

export interface IProductObject {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

export const fetchProducts = async (value: string, page = 1) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${value}&page=${page}`
    );
    if (response.data.results.length === 0) {
      const responseObject: IErrorResponse = {
        errorStatus: 400,
        text: 'No products',
        image: character404,
      };
      return responseObject;
    } else {
      return response.data.results;
    }
  } catch (error) {
    console.error('Ошибка:', error);
    return null;
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
