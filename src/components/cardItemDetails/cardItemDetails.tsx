import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductsItem } from '../../api/productsApi';
import './cardItemDetails.scss';
import { ICharacter } from '../../types/types';

export default function CardItemDetails() {
  const { id } = useParams();
  const [card, setCard] = useState<ICharacter | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      if (id) {
        const result = await fetchProductsItem(id);
        setCard(result);
      }
    };
    fetchDataFromApi();
  }, [id]);

  return (
    <div className="career-details">
      <img className="career-details__img" src={card?.image} alt="" />
      <div className="career-details__info">
        <div className="career-details__main-info">
          <h4>{card?.name}</h4>
          <div className="career-details__second-info">
            <h6>species: {card?.species}</h6>
            <h6>type: {card?.type}</h6>
            <h6>status: {card?.status}</h6>
            <h6>gender: {card?.gender}</h6>
          </div>
        </div>
      </div>
      <NavLink to="/">
        <button>
          <h6>close</h6>
        </button>
      </NavLink>
    </div>
  );
}
