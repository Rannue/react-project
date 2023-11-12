import React, { useContext, useEffect } from 'react';
import './styles/home-page.css';
import Spinner from './componets/spinner';
import SearchBar from './componets/searchBar';
import { Settings } from './componets/settings/settings';
import CardList from './componets/cardList';
import { HomePageContext } from '../../context/contextProvider';
import { fetchProducts } from '../../api/productsApi';

export const HomePage: React.FC = () => {
  const {
    searchValue,
    cardListStatus,
    loadingStatus,
    totalCharacter,
    setLoadingStatus,
    setCardListStatus,
    setTotalCharacter,
    setPage,
    setData,
  } = useContext(HomePageContext);

  const getCardContent = () => {
    const fetchDataFromApi = async () => {
      setLoadingStatus(true);
      setCardListStatus(false);
      const result = await fetchProducts(searchValue);

      if (result && 'data' in result) {
        setData(result.data);
        setTotalCharacter(result.info.count);
      } else {
        setCardListStatus(false);
        setData(result);
      }

      localStorage.setItem('inputValue', searchValue);
      setPage(1);
      setLoadingStatus(false);
    };

    fetchDataFromApi();
  };

  useEffect(() => {
    getCardContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="search-bar__wrapper">
          <SearchBar />
        </div>
        {cardListStatus ? (
          <h3>{totalCharacter ? totalCharacter : 0} characters found </h3>
        ) : (
          <></>
        )}
        {cardListStatus ? <Settings /> : <></>}
        {loadingStatus ? <Spinner /> : <CardList />}
      </div>
    </>
  );
};
