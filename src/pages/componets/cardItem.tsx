import React from 'react';
import { Character } from '../home-page';

interface ICardItemProps {
  character: Character;
}

const CardItem: React.FC<ICardItemProps> = ({ character }) => {
  const { name, image } = character;

  return (
    <>
      <div className="card-content">
        <div className="card-img__wrapper">
          <img className="card-img" src={image} alt={name} />
        </div>
        <div className="card-text__wrapper">
          <div className="card-title">
            <h5>{name}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
