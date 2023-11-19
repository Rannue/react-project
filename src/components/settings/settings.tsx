import { useContext, useEffect, useState } from 'react';
import { HomePageContext } from '../../context/contextProvider';
import { useFetchAllCharactersQuery } from '../../services/CharacterService';
import { useAppSelector } from '../../hooks/redux';
import './settings.scss';

export const Settings: React.FC = () => {
  const { page, limit, setLimit, setPage } = useContext(HomePageContext);

  const [limitPage, setLimitPage] = useState(page);
  const { value } = useAppSelector((state) => state.searchValueReducer);
  const { data, refetch } = useFetchAllCharactersQuery(
    { page: limitPage, name: value },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (limit === 10) {
      setLimitPage(Math.ceil(page / 2));
    } else if (limit === 20) {
      setLimitPage(page);
    }
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, limitPage]);

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

  console.log(data?.info.count);
  console.log(data?.info);
  console.log(data?.results);

  console.log(`multi ${limit * page}`);

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
            disabled={limit * page >= (data ? data?.info.count : 1000)}
            onClick={handleNextPage}
          >
            ᐅ
          </button>
        </div>
      </div>
    </>
  );
};
