import React, { useContext } from 'react';
import CardItem from './cardItem';
import { Link, Outlet, useParams } from 'react-router-dom';
import { HomePageContext } from '../../../context/contextProvider';

const CardList: React.FC = () => {
  const { page } = useParams();
  console.log(page);
  const context = useContext(HomePageContext);
  const characters = context.data;

  if (Array.isArray(characters)) {
    context.setCardListStatus(true);
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
          <Outlet />
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
