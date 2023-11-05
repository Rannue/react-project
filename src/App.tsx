import { useState } from 'react';
import './App.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layouts/rootLayout';

function App() {
  const [errorStatus, setErrorStatus] = useState(false);

  const throwError = () => {
    setErrorStatus(true);
  };

  if (errorStatus) throw new Error('Это ошибка, вызванная кнопкой');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route path=":id" element={} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <button className="error-button" onClick={throwError}>
        Error?
      </button>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
