import React, { useContext, useEffect } from 'react';
import CardItem from './cardItem';
import { Link } from 'react-router-dom';
import { HomePageContext } from '../context/contextProvider';
import { useFetchAllCharactersQuery } from '../services/CharacterService';
import { useAppSelector } from '../hooks/redux';
import morty from '../assets/404.png';
import Loader from './loader/loader';
import { Settings } from './settings/settings';
import { ICharacter } from '../types/types';

const CardList: React.FC = () => {
  const { page, limit } = useContext(HomePageContext);

  const { value } = useAppSelector((state) => state.searchValueReducer);
  const { data, error, isLoading, refetch } = useFetchAllCharactersQuery(
    { page: page, name: value },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, page, value]);

  if (isLoading) {
    return <Loader />;
  } else {
    if (!error) {
      let characters: ICharacter[] | undefined = data?.results;
      if (limit === 10) {
        page % 2 === 0
          ? (characters = data?.results.slice(10))
          : (characters = data?.results.slice(0, 10));
      }
      return (
        <>
          <h3>{data ? data.info.count : 0} characters found </h3>
          <Settings />
          <div className="cards-container">
            {characters &&
              characters.map((item) => (
                <Link to={`cards/${item.id.toString()}`} key={item.id}>
                  <div className="card" key={item.id}>
                    <CardItem character={item} />
                  </div>
                </Link>
              ))}
          </div>
        </>
      );
    } else if (error) {
      return (
        <div data-testid="prompt-container" className="prompt-container">
          <img className="prompt-img" src={morty} alt="boy" />
          <h3>No characters</h3>
        </div>
      );
    }
  }
};

export default CardList;
