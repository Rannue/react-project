import { ReactNode, createContext, useEffect, useState } from 'react';
import {
  SetURLSearchParams,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { IErrorResponse } from '../api/productsApi';
import { ICharacter } from '../types/types';

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
}

export const defaultValue: IHomePageContext = {
  searchValue: '',
  setSearchValue: () => {},
  loadingStatus: false,
  setLoadingStatus: () => {},
  searchParams: undefined,
  setSearchParams: () => {},
  page: 1,
  setPage: () => {},
  limit: 20,
  setLimit: () => {},
  data: null,
  setData: () => {},
  cardListStatus: false,
  setCardListStatus: () => {},
};

export interface IHomePageContextProviderProps {
  children: ReactNode;
}

export const HomePageContext = createContext(defaultValue);

export const HomePageContextProvider: React.FC<
  IHomePageContextProviderProps
> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('inputValue') || ''
  );
  const [data, setData] = useState<ICharacter[] | IErrorResponse | null>(null);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [limit, setLimit] = useState(Number(searchParams.get('limit')) | 20);
  const [page, setPage] = useState(Number(searchParams.get('page')) | 1);
  const [cardListStatus, setCardListStatus] = useState(false);

  const l = useLocation();
  console.log(l);

  useEffect(() => {
    setSearchParams(`page=${page}&limit=${limit}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const contextValue: IHomePageContext = {
    searchValue,
    setSearchValue,
    loadingStatus,
    setLoadingStatus,
    searchParams,
    setSearchParams,
    page,
    setPage,
    limit,
    setLimit,
    data,
    setData,
    cardListStatus,
    setCardListStatus,
  };

  return (
    <HomePageContext.Provider value={contextValue}>
      {children}
    </HomePageContext.Provider>
  );
};
