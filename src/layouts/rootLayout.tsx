import { Outlet, NavLink } from 'react-router-dom';
import HomePage from '../pages/home-page/home-page';
import Breadcrumbs from '../components/breacdCrumbs';

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
          <Outlet />
          <HomePage />
        </div>
      </main>
    </div>
  );
}
