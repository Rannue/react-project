import { useContext, useEffect } from 'react';
import { HomePageContext } from '../../context/contextProvider';
import { useFetchAllCharactersQuery } from '../../services/CharacterService';
import { useAppSelector } from '../../hooks/redux';
import './settings.scss';

export const Settings: React.FC = () => {
  const { page, limit, setLimit, setPage, limitPage, setLimitPage } =
    useContext(HomePageContext);
  const { value } = useAppSelector((state) => state.searchValueReducer);
  const { data } = useFetchAllCharactersQuery(
    { page: page, name: value },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (limit === 10) {
      setPage(Math.ceil(limitPage / 2));
    } else if (limit === 20) {
      setPage(limitPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, limitPage]);

  const handlePrevPage = () => {
    setLimitPage(Number(limitPage) - 1);
  };

  const handleNextPage = () => {
    setLimitPage(Number(limitPage) + 1);
  };

  const handleSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = Number(event.currentTarget.value);
    setLimit(value);
    setPage(1);
    setLimitPage(1);
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
          <button disabled={limitPage === 1} onClick={handlePrevPage}>
            ᐊ
          </button>
          <p>page: {limitPage}</p>
          <button
            data-testid="next-button"
            disabled={limit * limitPage >= (data ? data?.info.count : 1000)}
            onClick={handleNextPage}
          >
            ᐅ
          </button>
        </div>
      </div>
    </>
  );
};
