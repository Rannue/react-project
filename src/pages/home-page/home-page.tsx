import React from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import CardList from '../../components/cardList';
import './home-page.scss';

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="main-container">
        <div className="search-bar__wrapper">
          <SearchBar />
        </div>
        <CardList />
      </div>
    </>
  );
};
