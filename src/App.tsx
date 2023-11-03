import { useState } from 'react';
import './App.css';
import HomePage from './pages/home-page';

const App: React.FC = () => {
  const [errorStatus, setErrorStatus] = useState(false);

  const throwError = () => {
    setErrorStatus(true);
  };

  if (errorStatus) throw new Error('Это ошибка, вызванная кнопкой');

  return (
    <>
      <button className="error-button" onClick={throwError}>
        Error?
      </button>
      <HomePage />
    </>
  );
};

export default App;
