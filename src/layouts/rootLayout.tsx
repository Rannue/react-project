import { Outlet, NavLink } from 'react-router-dom';
import HomePage from '../pages/home-page/home-page';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <div className="header-container">
          <div className="logo">
            <h4>KEYBOARDS</h4>
          </div>
          <nav className="pages">
            <NavLink to="/">Home</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
        <HomePage />
      </main>
    </div>
  );
}
