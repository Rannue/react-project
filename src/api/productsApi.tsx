import axios from 'axios';
import { IErrorResponse } from '../pages/home-page/home-page';
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

export const fetchProducts = async (value: string, limit: number, skip = 0) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${value}&limit=${limit}&skip=${skip}`
    );
    if (response.data.products.length === 0) {
      const responseObject: IErrorResponse = {
        errorStatus: 400,
        text: 'No products',
        image: character404,
      };
      return responseObject;
    } else {
      console.log('hi');
      return response.data;
    }
  } catch (error) {
    console.error('Ошибка:', error);
    return null;
  }
};

export const fetchProductsItem = async (id: string) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка:', error);
    return null;
  }
};
