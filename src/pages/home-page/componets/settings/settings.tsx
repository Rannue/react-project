import './settings.css';

interface ISettingsProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  total: number;
}

export const Settings: React.FC<ISettingsProps> = ({
  setPage,
  page,
  limit,
  total,
  setLimit,
}) => {
  const inputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = Number(event.currentTarget.value);
    setLimit(inputValue);
    setPage(1);
  };

  const handlePrevPage = () => {
    setPage(Number(page) - 1);
  };

  const handleNextPage = () => {
    setPage(Number(page) + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="pagination-container">
        <div className="limit">
          <label htmlFor="count">umber of products per page</label>
          <input
            id="count"
            min={3}
            max={12}
            type="number"
            onKeyDown={handleKeyDown}
            value={limit}
            onChange={inputChange}
          />
        </div>
        <div className="pagination">
          <button disabled={page === 1} onClick={handlePrevPage}>
            &lt;
          </button>
          <p>page: {page}</p>
          <button
            disabled={limit * page + limit >= total}
            onClick={handleNextPage}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};
