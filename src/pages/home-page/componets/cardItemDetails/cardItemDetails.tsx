import { NavLink, useParams } from 'react-router-dom';
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
      <h2>{card?.title}</h2>
      <h1>{card?.price}$</h1>
      <h4>stock: {card?.stock}</h4>
      <h4>rating: {card?.rating}</h4>
      <NavLink to="/">
        <button>close</button>
      </NavLink>
      <button>description</button>
    </div>
  );
}
