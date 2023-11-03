import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <h4>KEYBOARDS</h4>
        </div>
        <nav className="pages">
          <Link to="/">Home</Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
