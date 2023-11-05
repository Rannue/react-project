import React, { useState } from 'react';
import './styles/home-page.css';
import CardList from './componets/cardList';
import Spinner from './componets/spinner';
import SearchBar from './componets/searchBar';
import { IProduct } from '../../api/productsApi';

export interface IErrorResponse {
  errorStatus: number;
  text: string;
  image: string;
}

export interface Character {
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

const HomePage: React.FC = () => {
  const [data, setData] = useState<IProduct[] | IErrorResponse | null>(null);
  const [loadingStatus, setLoadingStatus] = useState(false);

  return (
    <>
      <div className="main-container">
        <div className="search-bar__wrapper">
          <SearchBar setLoadingStatus={setLoadingStatus} setData={setData} />
        </div>
        {loadingStatus ? <Spinner /> : <CardList characters={data} />}
      </div>
    </>
  );
};

export default HomePage;
