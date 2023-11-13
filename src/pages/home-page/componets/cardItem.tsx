import React from 'react';
import { ICharacter } from '../../../types/types';

interface ICardItemProps {
  character: ICharacter;
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
          <h5>{name}</h5>
        </div>
      </div>
    </>
  );
};

export default CardItem;
