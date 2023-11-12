import { useContext, useEffect } from 'react';
import { HomePageContext } from '../../../../context/contextProvider';
import './settings.css';
import { fetchProducts } from '../../../../api/productsApi';

export const Settings: React.FC = () => {
  const {
    page,
    limit,
    searchValue,
    totalCharacter,
    setLimit,
    setPage,
    setData,
    setLoadingStatus,
  } = useContext(HomePageContext);

  useEffect(() => {
    if (limit === 10) {
      const fetchDataFromApi = async () => {
        setLoadingStatus(true);
        const result = await fetchProducts(searchValue, Math.ceil(page / 2));
        if (result && 'data' in result) {
          page % 2 === 0
            ? setData(result.data.slice(10))
            : setData(result.data.slice(0, 10));
        } else {
          setData(result);
        }
        setLoadingStatus(false);
      };

      fetchDataFromApi();
    } else if (limit === 20) {
      const fetchDataFromApi = async () => {
        setLoadingStatus(true);
        const result = await fetchProducts(searchValue, page);
        if (result && 'data' in result) {
          setData(result.data);
        } else {
          setData(result);
        }
        setLoadingStatus(false);
      };

      fetchDataFromApi();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const handlePrevPage = () => {
    setPage(Number(page) - 1);
  };

  const handleNextPage = () => {
    setPage(Number(page) + 1);
  };

  const handleSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = Number(event.currentTarget.value);
    setLimit(value);
    setPage(1);
  };

  return (
    <>
      <div className="pagination-container">
        <div className="limit">
          <label htmlFor="limit">character item</label>
          <select
            id="limit"
            name="limit"
            onChange={handleSelectChange}
            value={limit}
          >
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="pagination">
          <button disabled={page === 1} onClick={handlePrevPage}>
            ᐊ
          </button>
          <p>page: {page}</p>
          <button
            data-testid="next-button"
            disabled={limit * page + limit >= totalCharacter}
            onClick={handleNextPage}
          >
            ᐅ
          </button>
        </div>
      </div>
    </>
  );
};
