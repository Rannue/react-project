import React, { useContext } from 'react';
import CardItem from './cardItem';
import { Link } from 'react-router-dom';
import { HomePageContext } from '../context/contextProvider';

const CardList: React.FC = () => {
  const { data, setCardListStatus } = useContext(HomePageContext);
  if (Array.isArray(data)) {
    setCardListStatus(true);
    return (
      <>
        <div className="cards-container">
          {data.map((item) => (
            <Link to={`cards/${item.id.toString()}`} key={item.id}>
              <div className="card" key={item.id}>
                <CardItem character={item} />
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  } else if (data) {
    return (
      <div data-testid="prompt-container" className="prompt-container">
        <img className="prompt-img" src={data.image} alt="boy" />
        <h3>{data.text}</h3>
      </div>
    );
  }
};

export default CardList;
