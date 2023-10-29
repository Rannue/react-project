import React from 'react';
import { Character } from '../home-page';
import CardItem from './cardItem';

interface CardsProps {
  characters: Character[] | null;
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
  }
};

export default CardList;
