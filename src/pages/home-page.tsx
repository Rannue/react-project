import React, { useState } from 'react';
import SearchBar from './componets/searchBar';
import axios from 'axios';
import Spinner from './componets/spinner';
import CardList from './componets/cardList';
import './styles/home-page.css';
import character404 from '../assets/404.png';

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
  const [data, setData] = useState<Character[] | IErrorResponse | null>(null);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const handleSearch = async (value: string) => {
    setLoadingStatus(true);

    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          const responseObject: IErrorResponse = {
            errorStatus: error.response.statu,
            text: 'No such character',
            image: character404,
          };
          setData(responseObject);
        }
        console.error('Ошибка:', error);
      })
      .finally(() => {
        setLoadingStatus(false);
      });
  };

  return (
    <>
      <div className="main-container">
        <div className="search-bar__wrapper">
          <SearchBar onSearch={handleSearch} />
        </div>
        {loadingStatus ? <Spinner /> : <CardList characters={data} />}
      </div>
    </>
  );
};

export default HomePage;
