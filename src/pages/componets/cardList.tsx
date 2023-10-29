import React from 'react';
import { Character, IErrorResponse } from '../home-page';
import CardItem from './cardItem';

interface CardsProps {
  characters: Character[] | IErrorResponse | null;
}

const CardList: React.FC<CardsProps> = ({ characters }) => {
  if (Array.isArray(characters)) {
    return (
      <div className="cards-container">
        {characters.map((card) => (
          <div className="card" key={card.id}>
            <CardItem character={card} />
          </div>
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
