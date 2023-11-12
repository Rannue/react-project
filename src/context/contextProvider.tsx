import { createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ICharacter,
  IErrorResponse,
  IHomePageContext,
  IHomePageContextProviderProps,
} from '../types/types';

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
  totalCharacter: 1,
  setTotalCharacter: () => {},
};

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
  const [limit, setLimit] = useState(Number(searchParams.get('limit')) || 20);
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [totalCharacter, setTotalCharacter] = useState(0);
  const [cardListStatus, setCardListStatus] = useState(false);

  useEffect(() => {
    setSearchParams(`page=${page}&limit=${limit}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, searchParams]);

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
    totalCharacter,
    setTotalCharacter,
  };

  return (
    <HomePageContext.Provider value={contextValue}>
      {children}
    </HomePageContext.Provider>
  );
};
