import { Outlet, NavLink } from 'react-router-dom';
import Breadcrumbs from '../components/breacdCrumbs';
import { HomePageContextProvider } from '../context/contextProvider';
import HomePage from '../pages/home-page/home-page';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <div className="header-container">
          <div className="left-side">
            <div className="logo">
              <h4>LOGO</h4>
            </div>
            <Breadcrumbs />
          </div>
          <div className="right-side">
            <nav className="pages">
              <NavLink to="/">Home</NavLink>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <div className="main-container__wrapper">
          <HomePageContextProvider>
            <HomePage />
            <Outlet />
          </HomePageContextProvider>
        </div>
      </main>
    </div>
  );
}
