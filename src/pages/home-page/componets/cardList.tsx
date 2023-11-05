import React from 'react';
import CardItem from './cardItem';
import { Link } from 'react-router-dom';
import { IErrorResponse } from '../home-page';
import { IProduct } from '../../../api/productsApi';

interface CardsProps {
  characters: IProduct[] | IErrorResponse | null;
}

const CardList: React.FC<CardsProps> = ({ characters }) => {
  if (Array.isArray(characters)) {
    return (
      <div className="cards-container">
        {characters.map((card) => (
          <Link to={card.id.toString()} key={card.id}>
            <div className="card" key={card.id}>
              <CardItem character={card} />
            </div>
          </Link>
        ))}
      </div>
    );
  } else if (characters) {
    return (
      <div className="prompt-container">
        <h3>{characters.text}</h3>
        <img className="prompt-img" src={characters.image} alt="boy" />
      </div>
    );
  }
};

export default CardList;
