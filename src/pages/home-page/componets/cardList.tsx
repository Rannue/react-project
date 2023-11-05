import React from 'react';
import CardItem from './cardItem';
import { Link } from 'react-router-dom';
import { IErrorResponse, IProduct } from '../../../api/productsApi';

interface CardsProps {
  setCardListStatus: React.Dispatch<React.SetStateAction<boolean>>;
  characters: IProduct[] | IErrorResponse | null;
}

const CardList: React.FC<CardsProps> = ({ characters, setCardListStatus }) => {
  if (Array.isArray(characters)) {
    setCardListStatus(true);
    return (
      <>
        <div className="cards-container">
          {characters.map((card) => (
            <Link to={card.id.toString()} key={card.id}>
              <div className="card" key={card.id}>
                <CardItem character={card} />
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  } else if (characters) {
    return (
      <div className="prompt-container">
        <h3>{characters.text}</h3>
      </div>
    );
  }
};

export default CardList;
