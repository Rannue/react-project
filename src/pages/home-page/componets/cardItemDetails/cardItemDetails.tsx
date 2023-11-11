import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductsItem } from '../../../../api/productsApi';
import './cardItemDetails.css';
import { ICharacter } from '../../../../types/types';

export default function CardItemDetails() {
  const { id } = useParams();
  const [card, setCard] = useState<ICharacter | null>(null);
  console.log(card);

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
          <h5>{card?.name}</h5>
          <div className="career-details__second-info">
            <h6>status: {card?.status}</h6>
            <h6>rating: {card?.name}</h6>
            <h6>stock: {card?.name}</h6>
          </div>
          <h4>{card?.name}$</h4>
        </div>
      </div>
      <NavLink to="description">
        <button>
          <h6>description</h6>
        </button>
      </NavLink>
      <Outlet />
      <NavLink to="/">
        <button>
          <h6>close</h6>
        </button>
      </NavLink>
    </div>
  );
}
