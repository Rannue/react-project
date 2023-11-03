import { useState } from 'react';
import './App.css';
import HomePage from './pages/home-page/home-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/components/header';

function App() {
  const [errorStatus, setErrorStatus] = useState(false);

  const throwError = () => {
    setErrorStatus(true);
  };

  if (errorStatus) throw new Error('Это ошибка, вызванная кнопкой');

  return (
    <>
      <BrowserRouter>
        <button className="error-button" onClick={throwError}>
          Error?
        </button>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
