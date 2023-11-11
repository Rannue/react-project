import React, { useContext, useState } from 'react';
import './styles/home-page.css';
import Spinner from './componets/spinner';
import SearchBar from './componets/searchBar';
import { fetchProducts } from '../../api/productsApi';
import { Settings } from './componets/settings/settings';
import CardList from './componets/cardList';
import { useSearchParams } from 'react-router-dom';
import { HomePageContext } from '../../context/contextProvider';

const HomePage: React.FC = () => {
  const context = useContext(HomePageContext);
  const [searchParams] = useSearchParams();
  const [limit, setLimit] = useState(Number(searchParams.get('limit')) | 6);
  const [page, setPage] = useState(Number(searchParams.get('page')) | 1);
  const [total] = useState(0);

  const handleSearch = async (value: string) => {
    const fetchDataFromApi = async () => {
      context.setLoadingStatus(true);
      context.setCardListStatus(false);
      const result = await fetchProducts(value, limit);

      if (result.products) {
        context.setData(result);
      } else {
        context.setCardListStatus(false);
        context.setData(result);
      }
      context.setPage(1);
      context.setLoadingStatus(false);
    };

    fetchDataFromApi();
  };

  // useEffect(() => {
  //   const fetchDataFromApi = async () => {
  //     context.setLoadingStatus(true);
  //     const result = await fetchProducts(context.searchValue, limit);
  //     if (result.products) {
  //       setData(result.products);
  //     } else {
  //       setCardListStatus(false);
  //       setData(result);
  //     }
  //     setTotal(result.total);
  //     context.setLoadingStatus(false);
  //   };

  //   fetchDataFromApi();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [limit]);

  // useEffect(() => {
  //   const fetchDataFromApi = async () => {
  //     context.setLoadingStatus(true);
  //     const result = await fetchProducts(
  //       context.searchValue,
  //       limit,
  //       limit * (page - 1)
  //     );
  //     if (result.products) {
  //       setData(result.products);
  //     } else {
  //       setCardListStatus(false);
  //       setData(result);
  //     }
  //     context.setLoadingStatus(false);
  //   };

  //   fetchDataFromApi();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [page]);

  return (
    <>
      <div className="main-container">
        <div className="search-bar__wrapper">
          <SearchBar handleSearch={handleSearch} />
        </div>
        {context.cardListStatus ? (
          <h3>
            {total ? total : 0} products found{' '}
            {context.searchValue.length > 0 ? `for ${context.searchValue}` : ''}
          </h3>
        ) : (
          <></>
        )}
        {context.cardListStatus ? (
          <Settings
            page={page}
            limit={limit}
            total={total}
            setPage={setPage}
            setLimit={setLimit}
          />
        ) : (
          <></>
        )}
        {context.loadingStatus ? <Spinner /> : <CardList />}
      </div>
    </>
  );
};

export default HomePage;
