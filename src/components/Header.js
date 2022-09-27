import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header section">
      <a className="logo" href="#"></a>
      <p className="header__email">{props.userData.email}</p>
      <Link to="/sign-in" className="header__logout">Выйти</Link>
    </header>
  )
}

export default Header;
