import { useEffect, useState } from 'react';
import './App.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layouts/rootLayout';
import CardItemDetails from './components/cardItemDetails/cardItemDetails';
import { NotFound } from './pages/notFound/notFound';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchCharacters } from './store/reducers/ActionCreators';

function App() {
  const [errorStatus, setErrorStatus] = useState(false);
  const dispath = useAppDispatch();
  const { value } = useAppSelector((state) => state.searchValueReducer);

  const throwError = () => {
    setErrorStatus(true);
  };

  if (errorStatus) throw new Error('Это ошибка, вызванная кнопкой');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route path="cards/:id" element={<CardItemDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  useEffect(() => {
    dispath(fetchCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <button className="error-button" onClick={throwError}>
        Error?
      </button>
      <h1>{value}</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
