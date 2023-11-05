import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductsItem } from '../../../../api/productsApi';
import './description.css';
import Spinner from '../spinner';

export default function Description() {
  const { id } = useParams();
  const [description, setDescription] = useState<'' | null>(null);
  const [loadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      if (id) {
        setLoadingStatus(true);
        const result = await fetchProductsItem(id);
        setDescription(result.description);
        setLoadingStatus(false);
      }
    };
    fetchDataFromApi();
  }, [id]);

  return (
    <>
      {loadingStatus ? (
        <Spinner />
      ) : (
        <div className="description">
          <p>{description}</p>
        </div>
      )}
    </>
  );
}
