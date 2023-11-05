import React from 'react';
import { IProduct } from '../../../api/productsApi';

interface ICardItemProps {
  character: IProduct;
}

const CardItem: React.FC<ICardItemProps> = ({ character }) => {
  const { title, thumbnail, price } = character;

  return (
    <>
      <div className="card-content">
        <div className="card-img__wrapper">
          <img className="card-img" src={thumbnail} alt={title} />
        </div>
        <div className="card-text__wrapper">
          <h5>{title}</h5>
          <h4>{price}$</h4>
        </div>
      </div>
    </>
  );
};

export default CardItem;
