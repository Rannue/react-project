import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <>
      <div className="not-found__wrapper">
        <div className="not-found__container">
          <h1>404</h1>
          <Link to={`/`}>
            <button>return to home page</button>
          </Link>
        </div>
      </div>
    </>
  );
};
