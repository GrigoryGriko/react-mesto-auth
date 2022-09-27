import React from 'react';
import { useHistory } from 'react-router-dom';

function Header(props) {
  const history = useHistory();

  function signOut() {
    localStorage.removeItem('jwt');
    history.push('/login');
  }

  return (
    <header className="header section">
      <a className="logo" href="#"></a>

      <div className="header__wrapper-auth">
        <p className="header__email">{props.userData.email}</p>
        <p onClick={signOut} to="/sign-in" className="header__logout">Выйти</p>
      </div>
    </header>
  )
}

export default Header;
