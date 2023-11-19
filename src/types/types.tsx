import { ReactNode } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IHomePageContext {
  searchValue: string;
  setSearchValue: (value: string) => void;
  loadingStatus: boolean;
  setLoadingStatus: (value: boolean) => void;
  searchParams: URLSearchParams | undefined;
  setSearchParams: SetURLSearchParams;
  page: number;
  setPage: (value: number) => void;
  limit: number;
  setLimit: (value: number) => void;
  data: ICharacter[] | IErrorResponse | null;
  setData: (value: ICharacter[] | IErrorResponse | null) => void;
  cardListStatus: boolean;
  setCardListStatus: (value: boolean) => void;
  totalCharacter: number;
  setTotalCharacter: (value: number) => void;
}

export interface IHomePageContextProviderProps {
  children: ReactNode;
}

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

export interface ICharacterResponse {
  results: ICharacter[];
  info: ICharacterInfo;
}

export interface ICharacterInfo {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}
