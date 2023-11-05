import React, { useEffect, useState } from 'react';
import './styles/home-page.css';
import Spinner from './componets/spinner';
import SearchBar from './componets/searchBar';
import { IErrorResponse, IProduct, fetchProducts } from '../../api/productsApi';
import { Settings } from './componets/settings/settings';
import CardList from './componets/cardList';
import { useSearchParams } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<IProduct[] | IErrorResponse | null>(null);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [cardListStatus, setCardListStatus] = useState(false);
  const [limit, setLimit] = useState(Number(searchParams.get('limit')) | 6);
  const [page, setPage] = useState(Number(searchParams.get('page')) | 1);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(localStorage.getItem('inputValue') || '');

  useEffect(() => {
    setSearchParams(`page=${page}&limit=${limit}`);
  }, [page, limit, setSearchParams]);

  const handleSearch = async (value: string) => {
    console.log('lo');
    const fetchDataFromApi = async () => {
      setLoadingStatus(true);
      setCardListStatus(false);
      const result = await fetchProducts(value, limit);

      if (result.products) {
        console.log(result);
        setData(result.products);
      } else {
        setCardListStatus(false);
        setData(result);
      }
      setValue(value);
      setPage(1);
      setTotal(result.total);
      setLoadingStatus(false);
    };

    fetchDataFromApi();
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setLoadingStatus(true);
      const result = await fetchProducts(value, limit);
      if (result.products) {
        setData(result.products);
      } else {
        setCardListStatus(false);
        setData(result);
      }
      setTotal(result.total);
      setLoadingStatus(false);
    };

    fetchDataFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setLoadingStatus(true);
      const result = await fetchProducts(value, limit, limit * (page - 1));
      if (result.products) {
        setData(result.products);
      } else {
        setCardListStatus(false);
        setData(result);
      }
      setLoadingStatus(false);
    };

    fetchDataFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div className="main-container">
        <div className="search-bar__wrapper">
          <SearchBar handleSearch={handleSearch} />
        </div>
        {cardListStatus ? (
          <h3>
            {total ? total : 0} products found for <b>{value}</b>
          </h3>
        ) : (
          <></>
        )}
        {cardListStatus ? (
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
        {loadingStatus ? (
          <Spinner />
        ) : (
          <CardList characters={data} setCardListStatus={setCardListStatus} />
        )}
      </div>
    </>
  );
};

export default HomePage;
