import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IProduct, fetchProductsItem } from '../../../../api/productsApi';
import './cardItemDetails.css';

export default function CardItemDetails() {
  const { id } = useParams();
  const [card, setCard] = useState<IProduct | null>(null);

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
      <img className="career-details__img" src={card?.thumbnail} alt="" />
      <div className="career-details__info">
        <div className="career-details__main-info">
          <h5>{card?.title}</h5>
          <div className="career-details__second-info">
            <h6>brand: {card?.brand}</h6>
            <h6>rating: {card?.rating}</h6>
            <h6>stock: {card?.stock}</h6>
          </div>
          <h4>{card?.price}$</h4>
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
